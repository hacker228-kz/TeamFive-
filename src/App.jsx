// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Grid from './components/Grid'; // Импортируем Grid.jsx
import News from './components/News'; // Импортируем News.jsx
import Contact from './components/Contact'; // Импортируем Contact.jsx

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Главная страница */}
        <Route path="/" element={<Grid />} />
        {/* Страница новостей */}
        <Route path="/news" element={<News />} />
        {/* Страница контактов */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;