'use client';

const meusProjetos = [
  {
    id: 1,
    titulo: 'Site para publicação do projeto para evento ETEC',
    subtitulo: 'Desenvolvimento Web Front-end',
    descricao: 'Site desenvolvido para publicação do projeto de Mostra Técnica da ETEC, utilizando HTML, JavaScript e CSS. O site apresenta informações sobre o projeto, imagens e links para o repositório no GitHub e para a versão deployada.',
    imagem: 'public/mockup-pc-ETEC.png',
    tags: ['HTML', 'JavaScript', 'CSS'],
    linkDeploy: 'https://levizblessedpo.github.io/Projeto-Mostra-Tecnica-ETEC/',
    linkGithub: 'https://github.com/LevizBlessedpo/Projeto-Mostra-Tecnica-ETEC',
  },
];

export default function Projects({ darkMode }) {
  return (
    <section id="projetos" className="py-20 px-6 max-w-7xl mx-auto">
      {/* Título da Seção */}
      <h2 className={`text-4xl font-bold text-center mb-16 transition-colors duration-300 ${
        darkMode ? 'text-white' : 'text-slate-900'
      }`}>
        Meus <span className="text-blue-500">Projetos</span>
      </h2>

      {/* Grid de Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {meusProjetos.map((projeto) => (
          <div 
            key={projeto.id} 
            className={`group rounded-2xl border overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
              darkMode 
                ? 'bg-slate-800 border-slate-700 text-white hover:border-blue-500/40' 
                : 'bg-white border-slate-200 text-slate-900 hover:border-blue-400'
            }`}
          >
            {/* JANELA DO NAVEGADOR (MOCKUP DE PC) */}
            <div className={`w-full overflow-hidden border-b ${
              darkMode ? 'bg-slate-900 border-slate-700' : 'bg-slate-100 border-slate-200'
            }`}>
              {/* Barra superior com as 3 bolinhas do navegador */}
              <div className="flex items-center gap-1.5 px-4 py-3">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block"></span>
              </div>

              {/* Área do Print do Site */}
              <div className="relative aspect-video w-full overflow-hidden bg-slate-900">
                <img 
                  src={projeto.imagem} 
                  alt={`Print do projeto ${projeto.titulo}`} 
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>

            {/* CONTEÚDO DO CARD */}
            <div className="p-6 space-y-4">
              <span className={`text-xs font-semibold px-3 py-1 rounded-full inline-block ${
                darkMode ? 'bg-slate-700 text-blue-400' : 'bg-blue-50 text-blue-600'
              }`}>
                {projeto.subtitulo}
              </span>

              <h3 className="text-2xl font-bold">
                {projeto.titulo}
              </h3>

              <p className={`text-sm leading-relaxed ${
                darkMode ? 'text-slate-400' : 'text-slate-600'
              }`}>
                {projeto.descricao}
              </p>

              {/* TAGS DE TECNOLOGIAS */}
              <div className="flex gap-2 flex-wrap pt-2">
                {projeto.tags.map((tag) => (
                  <span 
                    key={tag} 
                    className={`text-xs font-medium px-2.5 py-1 rounded-md ${
                      darkMode ? 'bg-slate-900/80 text-slate-300' : 'bg-slate-100 text-slate-700'
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* BOTÕES DE AÇÃO */}
              <div className="flex gap-3 pt-4">
                <a 
                  href={projeto.linkDeploy} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex-1 text-center bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm py-2.5 rounded-lg transition-colors duration-300"
                >
                  Ver Projeto
                </a>
                <a 
                  href={projeto.linkGithub} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={`flex-1 text-center font-medium text-sm py-2.5 rounded-lg transition-colors duration-300 border ${
                    darkMode 
                      ? 'bg-slate-700/50 border-slate-600 text-slate-200 hover:bg-slate-700' 
                      : 'bg-slate-50 border-slate-300 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}