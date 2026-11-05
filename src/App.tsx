import { lazy, Suspense } from 'react';
import {
  BrowserRouter,
  Link,
  Routes,
  Route
} from 'react-router-dom';

import './App.css';

// Memanggil halaman menggunakan lazy
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const PMB = lazy(() => import('./pages/PMB'));
const Contact = lazy(() => import('./pages/Contact'));

function App() {
  return (
    <BrowserRouter>
      <main>
        <h1>PMB UPI</h1>

        {/* Menu navigasi */}
        <nav>
          <Link to="/">Home</Link> |{' '}
          <Link to="/about">About</Link> |{' '}
          <Link to="/pmb">PMB</Link> |{' '}
          <Link to="/contact">Contact</Link>
        </nav>

        <hr />

        {/* Suspense */}
        <Suspense fallback={<p>Loading halaman...</p>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/pmb" element={<PMB />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </main>
    </BrowserRouter>
  );
}

export default App;