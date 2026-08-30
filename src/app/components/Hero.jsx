export default function Hero({ darkMode }) {
  return (
    <section 
      id="inicio" 
      className="relative min-h-screen flex flex-col justify-center items-center text-center p-8 bg-cover bg-center transition-all duration-300"
      style={{ backgroundImage: "url('/bg-hero.jpg')" }}
    >
      {/* Camada Overlay: Escurece ou clareia a foto de fundo dependendo do tema */}
      <div 
        className={`absolute inset-0 transition-colors duration-300 ${
          darkMode ? 'bg-slate-900/85 text-white' : 'bg-slate-100/90 text-slate-900'
        }`}
      />

      {/* Conteúdo do Hero (o z-10 garante que o texto fique NA FRENTE da imagem e do overlay) */}
      <div className="relative z-10 max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Me chamo {''}
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
            Levi
          </span>
        </h1>

        <p className="text-lg md:text-xl mb-6">
          Sou um iniciante {''} 
          <span className="bg-gradient-to-r from-red-500 to-yellow-500 text-transparent bg-clip-text font-semibold">
            desenvolvedor web
          </span>, 
          apaixonado por criar experiências digitais envolventes e funcionais. Meu objetivo é transformar ideias em realidade através do código, sempre buscando aprender e evoluir na área!
        </p>

        {/* Tecnologias que utilizo */}
        <div className={`border rounded-lg p-4 transition-colors duration-300 ${
          darkMode 
            ? 'bg-gray-800/80 border-gray-700' 
            : 'bg-white/80 border-gray-300 shadow-sm'
        }`}>
          <nav className="flex gap-4 justify-center flex-wrap">
            <span className="bg-red-600 text-white px-2 py-1 rounded-md text-sm font-semibold">React.js</span>
            <span className="bg-blue-600 text-white px-2 py-1 rounded-md text-sm font-semibold">Next.js</span>
            <span className="bg-orange-600 text-white px-2 py-1 rounded-md text-sm font-semibold">HTML</span>
            <span className="bg-yellow-600 text-white px-2 py-1 rounded-md text-sm font-semibold">JavaScript</span>
            <span className="bg-green-600 text-white px-2 py-1 rounded-md text-sm font-semibold">CSS</span>
            <span className="bg-purple-600 text-white px-2 py-1 rounded-md text-sm font-semibold">Tailwind CSS</span>
            <span className="bg-pink-600 text-white px-2 py-1 rounded-md text-sm font-semibold">PHP</span>
            <span className="bg-gray-600 text-white px-2 py-1 rounded-md text-sm font-semibold">MySQL</span>
          </nav>
        </div>
      </div>
    </section>
  );
}