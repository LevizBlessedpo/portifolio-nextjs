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