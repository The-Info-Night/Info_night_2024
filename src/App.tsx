import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Brain, Skeleton, Blood, Skin, Digestive, Immune, Kidneys, Lymphatic, Liver } from './pages/BodyParts';
import { WeatherCaptcha } from './pages/WeatherCaptcha';
import { Weather } from './pages/Weather';
import { ChaosHome } from './pages/ChaosHome';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/weather-captcha" element={<WeatherCaptcha />} />
            <Route path="/weather" element={<Weather />} />
            <Route path="/brain" element={<Brain />} />
            <Route path="/skeleton" element={<Skeleton />} />
            <Route path="/blood" element={<Blood />} />
            <Route path="/skin" element={<Skin />} />
            <Route path="/digestive" element={<Digestive />} />
            <Route path="/immune" element={<Immune />} />
            <Route path="/kidneys" element={<Kidneys />} />
            <Route path="/lymphatic" element={<Lymphatic />} />
            <Route path="/liver" element={<Liver />} />
            <Route path="/choas" element={<ChaosHome />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;