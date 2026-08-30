'use client';
import { useState } from 'react';

export default function Navbar() {
  // Estado para controlar o tema
  const [darkMode, setDarkMode] = useState(true);

  // Função para alternar o estado do tema
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <nav className={`p-4 flex justify-between items-center transition-colors duration-300 ${
      darkMode ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-900 border-b border-slate-200'
    }`}>
      
      {/* Nome/Marca */}
      <h1 className="text-xl font-bold">Meu Portfólio</h1>

      {/* Container com Links e Botão */}
      <div className="flex items-center gap-6">
        
        {/* Lista de Links */}
        <ul className={`flex gap-4 text-sm ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
          <li><a href="#inicio" className="hover:text-blue-500 transition-colors">Início</a></li>
          <li><a href="#projetos" className="hover:text-blue-500 transition-colors">Projetos</a></li>
          <li><a href="#contato" className="hover:text-blue-500 transition-colors">Contato</a></li>
        </ul>

        {/* Divisória visual discreta */}
        <span className={darkMode ? 'text-slate-700' : 'text-slate-300'}>|</span>

        {/* Botão de Alternar Tema (Ícone de Sol/Lua) */}
        <button
          onClick={toggleTheme}
          className={`p-2 rounded-full text-lg transition-transform hover:scale-110 ${
            darkMode ? 'bg-slate-800 text-yellow-400' : 'bg-slate-200 text-slate-800'
          }`}
          title="Alternar Tema"
        >
          {darkMode ? '☀️' : '🌙'}
        </button>

      </div>

    </nav>
  );
}