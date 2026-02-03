import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Services from './pages/Services/Services';
import Portfolio from './pages/Portfolio/Portfolio';
import Contact from './pages/Contact/Contact';
import MentionsLegales from './pages/MentionsLegales/MentionsLegales';
import GitHubModal from './components/Modal/GitHubModal';

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="App d-flex flex-column min-vh-100">
      <Header />

      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Home onOpenModal={() => setShowModal(true)} />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
        </Routes>
      </main>

      <Footer />

      <GitHubModal show={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
}

export default App;
