import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Brain, Skeleton, Blood, Skin, Digestive, Immune, Kidneys, Lymphatic, Liver } from './pages/BodyParts';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/brain" element={<Brain />} />
          <Route path="/skeleton" element={<Skeleton />} />
          <Route path="/blood" element={<Blood />} />
          <Route path="/skin" element={<Skin />} />
          <Route path="/digestive" element={<Digestive />} />
          <Route path="/immune" element={<Immune />} />
          <Route path="/kidneys" element={<Kidneys />} />
          <Route path="/lymphatic" element={<Lymphatic />} />
          <Route path="/liver" element={<Liver />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;