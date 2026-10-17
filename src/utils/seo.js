
const SITE_URL = 'https://www.chaudharyplumbingworks.tech';

export function updateSEO(title, description, path) {
  document.title = title;

  let metaDescription = document.querySelector(
    'meta[name="description"]'
  );

  if (!metaDescription) {
    metaDescription = document.createElement('meta');
    metaDescription.name = 'description';
    document.head.appendChild(metaDescription);
  }

  metaDescription.setAttribute('content', description);

  let canonical = document.querySelector(
    'link[rel="canonical"]'
  );

  if (!canonical) {
    canonical = document.createElement('link');
    canonical.rel = 'canonical';
    document.head.appendChild(canonical);
  }

  const normalizedPath =
    path === '/' ? '/' : `/${path.replace(/^\/+|\/+$/g, '')}`;

  canonical.href = `${SITE_URL}${normalizedPath}`;
}
