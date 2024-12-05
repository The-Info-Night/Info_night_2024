import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Brain, Lungs, Arms, Legs } from './pages/BodyParts';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/brain" element={<Brain />} />
          <Route path="/lungs" element={<Lungs />} />
          <Route path="/arms" element={<Arms />} />
          <Route path="/legs" element={<Legs />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;