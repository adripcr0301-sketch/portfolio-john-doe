import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App d-flex flex-column min-vh-100">
      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
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

export default App;
