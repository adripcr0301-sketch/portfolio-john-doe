import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App d-flex flex-column min-vh-100">
      <Header />

      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Placeholder title="Services" />} />
          <Route path="/portfolio" element={<Placeholder title="Portfolio" />} />
          <Route path="/contact" element={<Placeholder title="Contact" />} />
          <Route path="/mentions-legales" element={<Placeholder title="Mentions légales" />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

function Home() {
  return (
    <div className="container text-center py-5">
      <h1>John Doe</h1>
      <p className="lead">Développeur Web Full Stack</p>
    </div>
  );
}

function Placeholder({ title }) {
  return (
    <div className="container text-center py-5">
      <h1>{title}</h1>
    </div>
  );
}

export default App;
