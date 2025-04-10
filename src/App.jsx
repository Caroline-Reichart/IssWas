/* import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Content } from './components/Content';
import { Routes, Route } from 'react-router-dom';
import Fruehstueck from './pages/Fruehstueck';
import Mittag from './pages/Mittag';
import Abend from './pages/Abend';
import Cocktails from './pages/Cocktails';

function App() {
  return (
    <div className="body-container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/Fruehstueck" element={<Fruehstueck />} />
        <Route path="/Mittag" element={<Mittag />} />
        <Route path="/Abend" element={<Abend />} />
        <Route path="/Cocktails" element={<Cocktails />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App; */

import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Content } from './components/Content';
import { Routes, Route, useLocation } from 'react-router-dom';
import Fruehstueck from './pages/Fruehstueck';
import Mittag from './pages/Mittag';
import Abend from './pages/Abend';
import Cocktails from './pages/Cocktails';

function AppWrapper() {
  const location = useLocation();

  // Liste der Seiten, auf denen die Navbar NICHT angezeigt werden soll
  const hideNavbarPaths = ['/Fruehstueck', '/Mittag', '/Abend', '/Cocktails'];

  const showNavbar = !hideNavbarPaths.includes(location.pathname);

  return (
    <div className="body-container">
      {showNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/Fruehstueck" element={<Fruehstueck />} />
        <Route path="/Mittag" element={<Mittag />} />
        <Route path="/Abend" element={<Abend />} />
        <Route path="/Cocktails" element={<Cocktails />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default AppWrapper;

