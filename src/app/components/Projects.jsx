export default function Projects() {
  return (
    // id="projetos" conecta com o link do Navbar (#projetos)
    <section id="projetos" className="py-16 px-6 max-w-5xl mx-auto">
      
      {/* Título da seção */}
      <h3 className="text-3xl font-bold mb-8 text-center text-blue-500">
        Meus Projetos
      </h3>

      {/* Grid de Projetos: 1 coluna no celular, 2 colunas no PC */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Card do Projeto 1 */}
        <div className="border border-slate-200 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
          <h4 className="font-bold text-xl mb-2 text-slate-900">Projeto ETEC / PHP</h4>
          <p className="text-slate-600 text-sm mb-4">
            Exercícios e lógicas de programação desenvolvidas durante as aulas de PHP.
          </p>
          <span className="text-xs font-semibold bg-blue-100 text-blue-800 py-1 px-3 rounded-full">
            PHP & MySQL
          </span>
        </div>

        {/* Card do Projeto 2 */}
        <div className="border border-slate-200 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
          <h4 className="font-bold text-xl mb-2 text-slate-900">Exercícios Galera Tech</h4>
          <p className="text-slate-600 text-sm mb-4">
            Páginas web e estruturas focadas em HTML5 e CSS3 avançado.
          </p>
          <span className="text-xs font-semibold bg-orange-100 text-orange-800 py-1 px-3 rounded-full">
            HTML / CSS
          </span>
          
        </div>

      </div>
    </section>
  );
}