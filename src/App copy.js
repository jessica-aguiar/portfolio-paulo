import React from "react";
import PortfolioCard from "./components/PortfolioCard";

const projects = [
  {
    name: "Sistema de PDV SaaS",
    description: "App completo com cadastro de produtos, estoque e vendas.",
    link: "#",
  },
  {
    name: "Site Creche Escola Florescer",
    description: "Site institucional responsivo para uma escola infantil.",
    link: "http://www.crecheescolaflorescer.com",
  },
  {
    name: "Site Estética Automotiva Aguiar",
    description: "Site moderno e responsivo para estética automotiva.",
    link: "https://estetica-automotiva-aguiar.vercel.app/",
  },
  {
    name: "Software Financeiro para Igrejas",
    description: "Sistema em desenvolvimento para gestão financeira.",
    link: "#",
  },
  {
    name: "ERP para Marcenaria",
    description: "Sistema integrado de gestão (em desenvolvimento).",
    link: "#",
  },
];

function App() {
  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {/* Header */}
      <header className="bg-blue-600 text-white py-10 text-center shadow-md">
        <h1 className="text-4xl font-bold">Paulo [Seu Sobrenome]</h1>
        <p className="mt-2 text-lg">
          Desenvolvedor Full-Stack | React • Node.js • PostgreSQL
        </p>
      </header>

      {/* Sobre Mim */}
      <section className="p-10 text-center">
        <h2 className="text-2xl font-semibold mb-4">Sobre Mim</h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          Estudante de Ciência da Computação, autodidata e em constante
          aprendizado. Experiência no desenvolvimento de sistemas completos,
          desde sites institucionais até soluções SaaS como PDVs e ERPs.
        </p>
        <p className="mt-3 text-gray-600">
          Cursos em andamento: Oracle (Java/Backend).
        </p>
      </section>

      {/* Projetos */}
      <section className="p-10 bg-white">
        <h2 className="text-2xl font-semibold mb-6 text-center">Projetos</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((proj, idx) => (
            <PortfolioCard key={idx} project={proj} />
          ))}
        </div>
      </section>

      {/* Contato */}
      <section className="p-10 text-center bg-gray-50">
        <h2 className="text-2xl font-semibold mb-4">Contato</h2>
        <p className="text-gray-700">📧 Email: seuemail@email.com</p>
        <p className="text-gray-700">
          🔗 LinkedIn:{" "}
          <a href="#" className="text-blue-600 hover:underline">
            linkedin.com/in/seu-perfil
          </a>
        </p>
        <p className="text-gray-700">
          💻 GitHub:{" "}
          <a href="#" className="text-blue-600 hover:underline">
            github.com/seuusuario
          </a>
        </p>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-4">
        &copy; {new Date().getFullYear()} Paulo. Todos os direitos reservados.
      </footer>
    </div>
  );
}

export default App;
