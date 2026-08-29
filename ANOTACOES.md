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