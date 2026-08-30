'use client';

export default function Navbar({ darkMode, toggleTheme }) {
  return (
    <nav className={`p-4 flex justify-between items-center transition-colors duration-300 ${
      darkMode ? 'bg-slate-900 border-b border-slate-800 text-white' : 'bg-slate-50 border-b border-slate-200 text-slate-900'
    }`}>
      
      <h1 className="text-xl font-bold">Meu Portfólio</h1>

      <div className="flex items-center gap-6">
        <ul className={`flex gap-4 text-sm ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
          <li><a href="#inicio" className="hover:text-blue-500 transition-colors">Início</a></li>
          <li><a href="#projetos" className="hover:text-blue-500 transition-colors">Projetos</a></li>
          <li><a href="#contato" className="hover:text-blue-500 transition-colors">Contato</a></li>
          <li><a href="#sobre" className="hover:text-blue-500 transition-colors">Sobre</a></li>
        </ul>

        <span className={darkMode ? 'text-slate-700' : 'text-slate-300'}>|</span>

        {/* botão de alternância do tema da página */}
        <button
          onClick={toggleTheme}
          aria-label="Alternar tema"
          className={`relative w-16 h-8 rounded-full p-1 transition-colors duration-300 flex items-center justify-between cursor-pointer 
      ${
          darkMode ? 'bg-zinc-800 border border-zinc-700' : 'bg-zinc-300 border border-zinc-400'
      }`}
        >
          <span className="text-xs ml-1 select-none">🌙</span>
          <span className="text-xs mr-1 select-none">☀️</span>
          <div
            className={`absolute top-1 left-1 w-6 h-6 rounded-full bg-white shadow-md transition-transform duration-300 ease-in-out ${
              darkMode ? 'translate-x-8' : 'translate-x-0'
            }`}
          />
        </button>
      </div>
    </nav>
  );
}