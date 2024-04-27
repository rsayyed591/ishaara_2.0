// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import './App.css';
import { Box } from 'theme-ui';
import { Navbar, Hero, About, Translate, Pricing, Model, Loaders } from "./components/pages";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './css/translate.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <Box mx={20}>
      {loading && <Loaders />}

      {!loading && (
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/Translate" element={<Translate />} />
            <Route path="/Pricing" element={<Pricing />} />
            <Route path="/About" element={<About />} />
            <Route path="/Model" element={<Model />} />
          </Routes>
        </Router>
      )}
    </Box>
  );
}

export default App;
