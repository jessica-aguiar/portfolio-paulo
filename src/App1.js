import React from "react";
import { Helmet } from "react-helmet";
import PortfolioCard from "./components/PortfolioCard";
import WhatsAppButton from "./components/WhatsAppButton";

const projects = [
  {
    name: "Sistema de PDV SaaS",
    description: "App completo com cadastro de clientes, ordem de serviços, agendamento e vendas.",
    link: "#",
    images: [
      "/prints/pdv1.png", "/prints/pdv2.png", "/prints/pdv3.png",
      "/prints/pdv4.png", "/prints/pdv5.png", "/prints/pdv6.png",
      "/prints/pdv7.png", "/prints/pdv8.png", "/prints/pdv9.png",
      "/prints/pdv10.png", "/prints/pdv11.png", "/prints/pdv12.png",
      "/prints/pdv13.png",
    ],
  },
  {
    name: "Site Creche Escola Florescer",
    description: "Site institucional responsivo para uma escola infantil.",
    link: "http://www.crecheescolaflorescer.com",
    images: ["/prints/creche/creche1.png"],
  },
  {
    name: "Site Estética Automotiva Aguiar",
    description: "Site moderno e responsivo para estética automotiva.",
    link: "https://estetica-automotiva-aguiar.vercel.app/",
    images: ["/prints/estetica-automotiva/estetica_automotiva1.png"],
  },
  {
    name: "Site Soluções em Engenharia Elétrica",
    description: "Site moderno para Engenharia Elétrica.",
    link: "https://paulo-henrique-melo-eng.vercel.app/",
    images: ["/prints/engenharia_eletrica/engenharia1.png"],
  },
  {
    name: "Site One-Page Engenharia Eletrônica & Software Personalizado",
    description: "Site moderno para Engenharia Eletrônica.",
    link: "https://site-engenharia-eletronica-paulo.vercel.app/",
    images: ["/prints/engenharia-eletronica/engenharia_eletronica1.png"],
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
];

function App() {
  return (
    <div className="min-h-screen bg-gray-100 font-sans">
       {/* SEO com React Helmet */}
      <Helmet>
        <title>Paulo Melo | Desenvolvedor Full-Stack</title>
        <meta name="description" content="Portfólio de Paulo Melo - Desenvolvedor Full-Stack especializado em React, Node.js e PostgreSQL. Projetos de SaaS, sites institucionais e software." />
        <meta name="keywords" content="Desenvolvedor React, Node.js, PostgreSQL, Full-Stack, Portfólio, Paulo Melo" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Open Graph */}
        <meta property="og:title" content="Paulo Melo | Desenvolvedor Full-Stack" />
        <meta property="og:description" content="Portfólio de Paulo Melo - Projetos de sites, sistemas e aplicações web." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://portfolio-paulo-melo.vercel.app/" />
        <meta property="og:image" content="/prints/og-image.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Paulo Melo | Desenvolvedor Full-Stack" />
        <meta name="twitter:description" content="Portfólio de Paulo Melo - Projetos de sites, sistemas e aplicações web." />
        <meta name="twitter:image" content="/prints/og-image.png" />
      </Helmet>
      {/* Header */}
      <header className="bg-blue-600 text-white py-10 text-center shadow-md">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
          Paulo Henrique Gonçalves Melo
        </h1>
        <p className="mt-2 text-sm sm:text-base md:text-lg">
          Desenvolvedor Full-Stack | React • Node.js • PostgreSQL
        </p>
      </header>

      {/* Sobre Mim */}
      <section id="sobre-mim" className="p-6 sm:p-10 text-center">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">Sobre Mim</h2>
        <p className="text-gray-700 max-w-2xl mx-auto text-sm sm:text-base">
          Estudante de Ciência da Computação, autodidata e em constante
          aprendizado. Experiência no desenvolvimento de sistemas completos,
          desde sites institucionais até soluções SaaS como PDVs.
        </p>
        <p className="mt-3 text-gray-600 text-sm sm:text-base">
          Cursos em andamento: Oracle (Java/Backend).
        </p>
      </section>

      {/* Projetos */}
      <section id="projetos" className="p-6 sm:p-10 bg-white">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-center">
          Projetos
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((proj, idx) => (
            <PortfolioCard key={idx} project={proj} />
          ))}
        </div>
      </section>

      {/* Tecnologias */}
      <section id="tecnologias" className="p-6 sm:p-10 text-center bg-white">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6">Tecnologias</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {[
            { name: "React", logo: "https://cdn.worldvectorlogo.com/logos/react-2.svg" },
            { name: "Node.js", logo: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg" },
            { name: "PostgreSQL", logo: "https://cdn.worldvectorlogo.com/logos/postgresql.svg" },
            { name: "TailwindCSS", logo: "https://cdn.worldvectorlogo.com/logos/tailwindcss.svg" },
            { name: "C", logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png" },
            { name: "MATLAB", logo: "https://upload.wikimedia.org/wikipedia/commons/2/21/Matlab_Logo.png" },
            { name: "Simulink", logo: "/logos/logo-Simulink.png" },
            { name: "Microcontroladores", logo: "/logos/logo-microcontrolador.png" },
          ].map((skill, idx) => (
            <div key={idx} className="flex flex-col items-center w-20">
              <img
                src={skill.logo}
                alt={skill.name}
                className="w-10 h-10 sm:w-12 sm:h-12"
              />
              <p className="mt-2 text-xs sm:text-sm">{skill.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="p-6 sm:p-10 text-center bg-gray-50">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">Contato</h2>

        <p className="text-gray-700 mb-4 text-sm sm:text-base">
          📧 Email: phmelo.dev@email.com
        </p>

        {(() => {
          const phone = "5598970034126";
          const message =
            "Olá, vim pelo seu portfólio e gostaria de falar com você!";
          const url = `https://wa.me/${phone}?text=${encodeURIComponent(
            message
          )}`;

          return (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-wrap justify-center items-center gap-2 text-gray-800 hover:text-green-600 transition text-sm sm:text-base"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                alt="WhatsApp"
                className="w-6 h-6 sm:w-7 sm:h-7"
              />
              (98) 9700-34126
            </a>
          );
        })()}
      </section>

      {/* Footer */}
      <footer className="bg-blue-600 text-white text-center py-4 text-xs sm:text-sm">
        &copy; {new Date().getFullYear()} Paulo Melo. Todos os direitos
        reservados.
      </footer>

      {/* Botão flutuante do WhatsApp */}
      <WhatsAppButton />
    </div>
  );
}

export default App;
