import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import ContactMe from './pages/ContactMe';
import AbouteMe from './pages/AbouteMe';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Projects from './pages/Projects';
import CaseStudies from './pages/CaseStudies';
import PageNotFound from './pages/PageNotFound';
import ScrollProgress from './components/ScrollProgress';

const NoiseOverlay = () => (
  <svg
    className="pointer-events-none fixed isolate z-50 opacity-70 mix-blend-soft-light"
    width="100%"
    height="100%"
  >
    <filter id="noise">
      <feTurbulence
        type="fractalNoise"
        baseFrequency="0.80"
        numOctaves="4"
        stitchTiles="stitch"
      />
    </filter>
    <rect width="100%" height="100%" filter="url(#noise)" />
  </svg>
);

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-primarytext">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="h-full bg-[url('https://res.cloudinary.com/delba/image/upload/h_500/bg_gradient_pfosr9')] bg-top bg-no-repeat opacity-10" />
      </div>
      <NoiseOverlay />
      <ScrollProgress />
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contactme" element={<ContactMe />} />
          <Route path="/aboutme" element={<AbouteMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/casestudies" element={<CaseStudies />} />
          <Route path="*" element={<PageNotFound/>}/>
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
