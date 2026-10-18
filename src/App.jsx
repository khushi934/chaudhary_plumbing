import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MobileContactBar from './components/MobileContactBar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import PipeLeakageRepair from './pages/PipeLeakageRepair';
import BathroomPlumbing from './pages/BathroomPlumbing';
import TapFaucetRepair from './pages/TapFaucetRepair';
import DrainageRepair from './pages/DrainageRepair';
import WaterTankPlumbing from './pages/WaterTankPlumbing';
import SanitaryFitting from './pages/SanitaryFitting';
import GeneralMaintenance from './pages/GeneralMaintenance';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            {/* Service Landing Pages — SEO */}
            <Route path="/pipe-leakage-repair-bhiwadi" element={<PipeLeakageRepair />} />
            <Route path="/bathroom-plumbing-bhiwadi" element={<BathroomPlumbing />} />
            <Route path="/tap-repair-bhiwadi" element={<TapFaucetRepair />} />
            <Route path="/drainage-repair-bhiwadi" element={<DrainageRepair />} />
            <Route path="/water-tank-plumbing-bhiwadi" element={<WaterTankPlumbing />} />
            <Route path="/sanitary-fitting-bhiwadi" element={<SanitaryFitting />} />
            <Route path="/general-plumbing-maintenance-bhiwadi" element={<GeneralMaintenance />} />
          </Routes>
        </main>
        <Footer />
        <MobileContactBar />
      </div>
    </Router>
  );
}

export default App;
