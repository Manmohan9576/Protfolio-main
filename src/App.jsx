import React, { Suspense, lazy, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Footer from './components/Footer';
import LoadingSpinner from './components/LoadingSpinner';
import FPSCounter from './components/FPSCounter';
import CinematicIntro from './components/CinematicIntro';
import BlobCursor from './BlobCursor';

// Lazy Load Heavy/Below-the-fold Components
const Projects = lazy(() => import('./components/Projects'));
const Certifications = lazy(() => import('./components/Certifications'));
const Contact = lazy(() => import('./components/Contact'));
const MatrixRain = lazy(() => import('./components/MatrixRain'));
const VisitorRecon = lazy(() => import('./components/VisitorRecon'));
const ThreeBackground = lazy(() => import('./components/ThreeBackground'));
const StatsDashboard = lazy(() => import('./components/StatsDashboard'));
const Resume = lazy(() => import('./components/Resume'));

function App() {
  const [isCyberMode, setIsCyberMode] = useState(false);
  const [showFPS, setShowFPS] = useState(false);
  const [showIntro, setShowIntro] = useState(true);

  const toggleCyberMode = () => {
    setIsCyberMode(!isCyberMode);
  };

  const toggleFPS = () => {
    setShowFPS(!showFPS);
  };

  return (
    <div className="App">
      {showIntro && <CinematicIntro onComplete={() => setShowIntro(false)} />}

      {showFPS && <FPSCounter />}

      <Suspense fallback={null}>
        <ThreeBackground />
      </Suspense>

      {isCyberMode && (
        <Suspense fallback={null}>
          <MatrixRain />
        </Suspense>
      )}

      <Suspense fallback={null}>
        <VisitorRecon />
      </Suspense>

      <Header
        isCyberMode={isCyberMode}
        toggleCyberMode={toggleCyberMode}
        showFPS={showFPS}
        toggleFPS={toggleFPS}
      />
      <BlobCursor
  blobType="circle"
  fillColor="#5227FF"
  trailCount={3}
  sizes={[60, 125, 75]}
  innerSizes={[20, 35, 25]}
  innerColor="rgba(255,255,255,0.8)"
  opacities={[0.6, 0.6, 0.6]}
  shadowColor="rgba(0,0,0,0.75)"
  shadowBlur={5}
  shadowOffsetX={10}
  shadowOffsetY={10}
  filterStdDeviation={30}
  useFilter={true}
  fastDuration={0.1}
  slowDuration={0.5}
  zIndex={100}
/>

      <main>
        <Hero />
        <About />
        <Skills />

        <Suspense fallback={<LoadingSpinner />}>
          <StatsDashboard />
        </Suspense>

        <Suspense fallback={<LoadingSpinner />}>
          <Projects />
        </Suspense>

        <Suspense fallback={<LoadingSpinner />}>
          <Certifications />
        </Suspense>

        <Suspense fallback={<LoadingSpinner />}>
          <Resume />
        </Suspense>

        <Suspense fallback={<LoadingSpinner />}>
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default App;
