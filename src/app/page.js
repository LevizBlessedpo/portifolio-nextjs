'use client';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Footer from './components/Footer';

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode ? 'bg-slate-900 text-white' : 'bg-slate-50 text-slate-900'
    }`}>
      {/* Passamos o estado e a função para a Navbar */}
      <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
      
      {/* estado para o Hero receber o modo dark e light */}
      <Hero darkMode={darkMode} />
      <Projects darkMode={darkMode} />
      
      {/* <Footer darkMode={darkMode} /> */}
    </div>
  );
}