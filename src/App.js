import React from "react";
import PortfolioCard from "./components/PortfolioCard";



const projects = [
  /*{
    name: "Sistema de PDV SaaS",
    description: "App completo com cadastro de produtos, estoque e vendas.",
    link: "#",
    image: "/prints/pdv.png", // coloque a imagem na pasta public/prints/
  },*/
  {
    name: "Sistema de PDV SaaS",
    description: "App completo com cadastro de produtos, estoque e vendas.",
    link: "#",
    images: [
      "/prints/pdv1.png",
      "/prints/pdv2.png",
      "/prints/pdv3.png",
      "/prints/pdv4.png",
      "/prints/pdv5.png",
      "/prints/pdv6.png",
      "/prints/pdv7.png",
      "/prints/pdv8.png",
      "/prints/pdv9.png",
      "/prints/pdv10.png",
      "/prints/pdv11.png",
      "/prints/pdv12.png",
      "/prints/pdv13.png",
    ],
  },
  {
    name: "Site Creche Escola Florescer",
    description: "Site institucional responsivo para uma escola infantil.",
    link: "http://www.crecheescolaflorescer.com",
    images: [
      "/prints/creche/creche1.png",  
    ],
  },
  {
    name: "Site Estética Automotiva Aguiar",
    description: "Site moderno e responsivo para estética automotiva.",
    link: "https://estetica-automotiva-aguiar.vercel.app/",
   images: [ "/prints/estetica-automotiva/estetica_automotiva1.png",
     ],
  },
  {
    name: "Site Soluções em Engenharia Elétrica",
    description: "Site moderno para Engenharia Elétrica.",
    link: "https://paulo-henrique-melo-eng.vercel.app/",
   images: [ "/prints/engenharia_eletrica/engenharia1.png",
     ],
  },
  {
    name: "Site One-Page Engenharia Eletrônica & Software Personalizado",
    description: "Site moderno para Engenharia Eletrônica.",
    link: "https://site-engenharia-eletronica-paulo.vercel.app/",
   images: [ "/prints/engenharia-eletronica/engenharia_eletronica1.png",
     ],
  },
  {
    name: "Software Financeiro para Igrejas (ainda em Desenvolvimento)",
    description: "Sistema em desenvolvimento para gestão financeira.",
    link: "#",
     images: [ 
      "/prints/financeiro-igrejas/financeiro1.png",
      "/prints/financeiro-igrejas/financeiro2.png",
      "/prints/financeiro-igrejas/financeiro3.png",
      "/prints/financeiro-igrejas/financeiro4.png",
     ],
    },
  /*{
    name: "App de Turismo em desenvolvimento",
    description: "Sistema integrado de gestão (em desenvolvimento).",
    link: "#",
    image: "/prints/marcenaria.png",
  },*/
];

function App() {
  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {/* Header */}
      <header className="bg-blue-600 text-white py-10 text-center shadow-md">
        <h1 className="text-4xl font-bold">Paulo Henrique Gonçalves Melo</h1>
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
          desde sites institucionais até soluções SaaS como PDVs.
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
      {/*
      <section className="p-10 text-center bg-gray-50">
        <h2 className="text-2xl font-semibold mb-4">Contato</h2>
        <p className="text-gray-700">📧 Email: phmelo.dev@email.com</p>
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
      </section>*/}

      {/* Contato */}
<section className="p-10 text-center bg-gray-50">
  <h2 className="text-2xl font-semibold mb-4">Contato</h2>

  <p className="text-gray-700">
    📧 Email: phmelo.dev@email.com
  </p>

  <p className="text-gray-700">
    📱 WhatsApp:{" "}
    <a
      href="https://wa.me/5511912345678"
      target="_blank"
      rel="noopener noreferrer"
      className="text-green-600 font-semibold hover:underline"
    >
      Clique aqui para conversar
    </a>
  </p>
</section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-4">
        &copy; {new Date().getFullYear()} Paulo Melo. Todos os direitos reservados.
      </footer>
    </div>
  );
}

export default App;
