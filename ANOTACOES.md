# Caderno de Estudos - Portfólio Next.js

## Componente: Navbar (src/app/components/Navbar.jsx)

### Versão 1: Conceito básico
Criação da função pública com export default retornando JSX.

```jsx
export default function Navbar() {
  return (
    <div>
      <h1>Este é um título do meu portfólio!</h1>
      <p>Olá, este é um parágrafo do meu</p>
    </div>
  );
}

```
### Versão 2: Conceitos de className em Reactjs

Criação de uma função Navbar que utiliza de "className" para declaração de classes em certos elementos html em JSX e estilização com "bg-slate-900", "text-white" e "font-bold" para trocar as fontes de elementos JSX.

```jsx
export default function Navbar() {
  return (
    // bg-slate-900 = fundo escuro | text-white = texto branco | p-4 = espaçamento interno
    <nav className="bg-slate-900 text-white p-4 flex justify-between items-center">
      
      {/* Título do menu */}
      <h1 className="text-xl font-bold">Meu Portfólio</h1>

      {/* Parágrafo do lado direito */}
      <p className="text-sm text-slate-400">Estudante de Dev Web</p>

    </nav>
  );
}

```
## Componente: Hero (src/app/components/Hero.jsx)
### Versão 3: Utilização do Hero.jsx

Nessa parte criamos um bloco de código no Hero.jsx que serviu para fazer uma apresentação inicial sobre "quem sou eu" para outras pessoas verem, a estrutura foi relativamente simples utilizando novamente o conceito de className e uma "section" para definir uma seção.

```jsx
export default function Hero() {
    return (
        <section id="inicio" className="bg-slate-800 text-white p-8">
            
            <h2 className="text-3xl font-bold mb-4">
                Bem-vindo ao Meu Portfólio
            </h2>

            <p className="text-lg">
                Sou um desenvolvedor web apaixonado por criar experiências digitais incríveis.
            </p>

        </section>
    )
}

```
## Componente: Projects (src/app/components/Projects.jsx)
### Versão 3: Utilização do Projects.jsx

Agora nessa parte de projects.jsx criamos a parte de apresentação de projetos realizados para complementar nosso portifólio, foi usado o conceito de `<span>` e a montagem de "cards" individuais dos projetos.

```jsx
export default function Projects() {
  return (
    // id="projetos" conecta com o link do Navbar (#projetos)
    <section id="projetos" className="py-16 px-6 max-w-5xl mx-auto">
      
      {/* Título da seção */}
      <h3 className="text-3xl font-bold mb-8 text-center text-slate-800">
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

```
## Componente: Footer (src/app/components/Footer.jsx)
### Versão 3: Utilização do Footer.jsx

Nessa última parte fizemos o rodapé final do do portifólio para dar uma autonomia para o site, a estrutura também foi básica nessa parte do código utilizando sintaxes facilmente compreendiveis.

```jsx
export default function Footer() {
  return (
    // id="contato" conecta com o link do Navbar (#contato)
    <footer id="contato" className="bg-slate-900 text-slate-400 py-8 text-center text-sm">
      <p>© 2026 - Desenvolvido com Next.js & Tailwind CSS.</p>
    </footer>
  );
}
