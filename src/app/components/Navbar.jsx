/* Essa parte declara uma função chamada Navbar que retorna um elemento JSX.
export default function Navbar() {
    return (
        <div>
            <h1>Este é um título do meu portifólio!</h1>
            <p>Olá, este é um paragráfo do meu</p>
        </div>
    )
}
*/

/* 
Esta parte estiliza utilizando tailwindcss, que é uma biblioteca de estilização para Reactjs.
export default function Navbar() {
  return (
    // bg-slate-900 = fundo escuro | text-white = texto branco | p-4 = espaçamento interno
    <nav className="bg-slate-900 text-white p-4 flex justify-between items-center">
      
      {Título do menu}
      <h1 className="text-xl font-bold">Meu Portfólio</h1>

      {Parágrafo do lado direito}
      <p className="text-sm text-slate-400">Estudante de Dev Web</p>

    </nav>
  );
}

*/

export default function Navbar() {
  return (
    <nav className="bg-slate-900 text-white p-4 flex justify-between items-center">
      
      {/* Nome/Marca */}
      <h1 className="text-xl font-bold">Meu Portfólio</h1>

      {/* Lista de Links */}
      <ul className="flex gap-4 text-sm text-slate-300">
        <li><a href="#inicio" className="hover:text-white">Início</a></li>
        <li><a href="#projetos" className="hover:text-white">Projetos</a></li>
        <li><a href="#contato" className="hover:text-white">Contato</a></li>
      </ul>

    </nav>
  );
}