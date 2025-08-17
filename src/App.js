import React from "react";
import { Helmet } from "react-helmet";
import PortfolioCard from "./components/PortfolioCard";
import WhatsAppButton from "./components/WhatsAppButton";

// Dados dos projetos
const projects = [
  {
    name: "Sistema de PDV SaaS",
    description:
      "App completo com cadastro de clientes, ordem de serviços, agendamento e vendas.",
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
    name: "Software Financeiro para Igrejas (em desenvolvimento)",
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

// Componente da Hero / Capa
function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-600 to-indigo-700 text-white text-center px-6">
      
       <div className="mt-10">
        <img
          src='/imagens/Paulo_Melo2.webp'
          alt="Ilustração de desenvolvimento"
          className="w-64 md:w-80 mx-auto"
        />
      </div>

      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
        Olá, eu sou Paulo Melo
      </h1>
      <p className="text-lg sm:text-xl md:text-2xl mb-6 max-w-xl">
        Desenvolvedor Full-Stack | Criando soluções web modernas com React, Node.js e PostgreSQL
      </p>
      <div className="flex gap-4">
        <a
          href="#projetos"
          className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-gray-100 transition"
        >
          Meus Projetos
        </a>
        <a
          href="#contato"
          className="border border-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-blue-700 transition"
        >
          Contato
        </a>
      </div>
     
    </section>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {/* SEO */}
      <Helmet>
        <title>Paulo Melo | Desenvolvedor Full-Stack</title>
        <meta
          name="description"
          content="Portfólio de Paulo Melo - Desenvolvedor Full-Stack especializado em React, Node.js e PostgreSQL. Projetos de SaaS, sites institucionais e software."
        />
        <meta
          name="keywords"
          content="Desenvolvedor React, Node.js, PostgreSQL, Full-Stack, Portfólio, Paulo Melo"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Open Graph */}
        <meta property="og:title" content="Paulo Melo | Desenvolvedor Full-Stack" />
        <meta
          property="og:description"
          content="Portfólio de Paulo Melo - Projetos de sites, sistemas e aplicações web."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://portfolio-paulo-melo.vercel.app/" />
        <meta property="og:image" content="/prints/og-image.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Paulo Melo | Desenvolvedor Full-Stack" />
        <meta
          name="twitter:description"
          content="Portfólio de Paulo Melo - Projetos de sites, sistemas e aplicações web."
        />
        <meta name="twitter:image" content="/prints/og-image.png" />
      </Helmet>

      {/* Hero / Capa */}
      <Hero />

      {/* Sobre Mim */}
      {/*<section id="sobre-mim" className="p-6 sm:p-10 text-center">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">Sobre Mim</h2>
        <p className="text-gray-700 max-w-2xl mx-auto text-sm sm:text-base">
          Estudante de Ciência da Computação, autodidata e em constante aprendizado.
          Experiência no desenvolvimento de sistemas completos, desde sites institucionais
          até soluções SaaS como PDVs.
        </p>
        <p className="mt-3 text-gray-600 text-sm sm:text-base">
          Cursos em andamento: Oracle (Java/Backend).
        </p>
      </section>*/}

      {/* Sobre Mim */}
{/*<section id="sobre-mim" className="p-6 sm:p-10 text-center bg-white">
  <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-800">
    Sobre Mim
  </h2>
  <p className="text-gray-700 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
    Sou estudante de <span className="font-semibold">Ciência da Computação</span>, 
    apaixonado por tecnologia e em constante aprendizado. Tenho experiência prática no 
    desenvolvimento de sistemas completos, desde <span className="font-semibold">sites institucionais</span> 
    até soluções SaaS como <span className="font-semibold">sistemas de PDV</span>.
  </p>
  <p className="mt-4 text-gray-600 text-base sm:text-lg">
    Atualmente, estou aprofundando meus estudos em <span className="font-semibold">Java e Backend (Oracle)</span>, 
    sempre buscando aplicar boas práticas de desenvolvimento e expandir minhas habilidades em 
     <span className="font-semibold"> arquitetura de software</span>.
  </p>
</section>*/}

<section id="sobre-mim" className="p-6 sm:p-10 text-center bg-gray-50">
  <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-800">
    Sobre Mim
  </h2>
  <p className="text-gray-700 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed text-justify">
    Sou programador full stack, formado em Engenharia Elétrica e atualmente estudante de Ciência da Computação.
    Tenho experiência no desenvolvimento de soluções completas, desde sites institucionais até sistemas SaaS, incluindo aplicações de PDV.
  </p>
  <p className="text-gray-700 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed text-justify">
    Possuo domínio de C para programação de microcontroladores, Python para softwares embarcados, MATLAB,
    além de sólida experiência com JavaScript, SQL, React e Node.js. Minha formação multidisciplinar,
    aliada à prática em diferentes tecnologias, permite integrar conhecimentos de hardware e software
    no desenvolvimento de soluções inovadoras e eficientes.
  </p>
  <p className="text-gray-700 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed text-justify">
    Atualmente, aprofundo meus estudos em <span className="font-semibold">programação pelo programa One Oracle Next Education</span>,
    sempre buscando aplicar boas práticas de desenvolvimento e expandir minhas habilidades em
    <span className="font-semibold"> arquitetura de software</span>.
  </p>
</section>




      {/* Projetos */}
      <section id="projetos" className="p-6 sm:p-10 bg-white">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-center">Projetos</h2>
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

        <a
          href="https://wa.me/5598970034126?text=Olá,%20vim%20pelo%20seu%20portfólio%20e%20gostaria%20de%20falar%20com%20você!"
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
      </section>

      {/* Footer */}
      <footer className="bg-blue-600 text-white text-center py-4 text-xs sm:text-sm">
        &copy; {new Date().getFullYear()} Paulo Melo. Todos os direitos reservados.
      </footer>

      {/* Botão flutuante do WhatsApp */}
      <WhatsAppButton />
    </div>
  );
}

export default App;
