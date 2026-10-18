import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import puppeteer from 'puppeteer';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DIST_DIR = path.resolve(__dirname, '../dist');
const PORT = 4173;

const ROUTES = [
  '/',
  '/about',
  '/services',
  '/portfolio',
  '/contact',
  '/pipe-leakage-repair-bhiwadi',
  '/bathroom-plumbing-bhiwadi',
  '/tap-repair-bhiwadi',
  '/drainage-repair-bhiwadi',
  '/water-tank-plumbing-bhiwadi',
  '/sanitary-fitting-bhiwadi',
  '/general-plumbing-maintenance-bhiwadi',
];

const MIME_TYPES = {
  '.html': 'text/html',
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.mp4': 'video/mp4',
  '.txt': 'text/plain',
  '.xml': 'application/xml',
};

function createStaticServer(templatePath) {
  return http.createServer((req, res) => {
    const urlPath = req.url.split('?')[0];
    const filePath = path.join(DIST_DIR, urlPath);

    // If request has no extension, serve the clean SPA template
    if (!path.extname(filePath)) {
      try {
        const data = fs.readFileSync(templatePath);
        res.writeHead(200, { 'Content-Type': 'text/html' });
        return res.end(data);
      } catch {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        return res.end('Template Not Found');
      }
    }

    if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
      try {
        const data = fs.readFileSync(templatePath);
        res.writeHead(200, { 'Content-Type': 'text/html' });
        return res.end(data);
      } catch {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        return res.end('Not Found');
      }
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    try {
      const data = fs.readFileSync(filePath);
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(data);
    } catch {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Not Found');
    }
  });
}

async function prerender() {
  console.log('🚀 Starting pre-rendering for SEO...');

  if (!fs.existsSync(DIST_DIR)) {
    console.error('❌ dist directory not found! Run "vite build" first.');
    process.exit(1);
  }

  // Backup original template index.html
  const templatePath = path.join(DIST_DIR, 'index.template.html');
  const originalIndexPath = path.join(DIST_DIR, 'index.html');
  fs.copyFileSync(originalIndexPath, templatePath);

  const server = createStaticServer(templatePath);
  await new Promise((resolve) => server.listen(PORT, resolve));
  console.log(`📡 Local preview server running on http://localhost:${PORT}`);

  let browser;
  try {
    browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });

    const page = await browser.newPage();

    for (const route of ROUTES) {
      const targetUrl = `http://localhost:${PORT}${route}`;
      console.log(`⚡ Prerendering: ${route} ...`);

      await page.goto(targetUrl, { waitUntil: 'networkidle0', timeout: 30000 });

      // Wait for React to render inside #root
      await page.waitForFunction(() => {
        const root = document.getElementById('root');
        return root && root.children.length > 0;
      }, { timeout: 10000 });

      // Small pause for useEffect hooks and document.title updates
      await new Promise(r => setTimeout(r, 300));

      const title = await page.title();
      const content = await page.content();

      let targetFile;
      if (route === '/') {
        targetFile = originalIndexPath;
      } else {
        const outDir = path.join(DIST_DIR, route.replace(/^\//, ''));
        if (!fs.existsSync(outDir)) {
          fs.mkdirSync(outDir, { recursive: true });
        }
        targetFile = path.join(outDir, 'index.html');
      }

      fs.writeFileSync(targetFile, content, 'utf8');
      console.log(`✅ Saved: ${path.relative(DIST_DIR, targetFile)} | Title: "${title}"`);
    }

    console.log('🎉 All pages successfully pre-rendered for search engines!');
  } catch (error) {
    console.error('❌ Prerendering error:', error);
    process.exit(1);
  } finally {
    if (fs.existsSync(templatePath)) {
      fs.unlinkSync(templatePath);
    }
    if (browser) await browser.close();
    server.close();
  }
}

prerender();
