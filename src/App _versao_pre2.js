import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import PortfolioCard from "./components/PortfolioCard";
import WhatsAppButton from "./components/WhatsAppButton";
// import Technologies from "./components/Technologies"; // Este import está comentado, mantenha assim se não for usado

// Dados dos projetos
const projects = [
  {
    name: "Chatbot IA - Aguiar Estética Automotiva",
    description:
      "Chatbot inteligente desenvolvido com Node.js e Processamento de Linguagem Natural (NLP) para atendimento automatizado de clientes da estética automotiva, com integração em site e página dedicada.",
    link: "https://autoaguiarestetica.com.br/chatbot.html",
    images: [
      "/prints/chatbot/chatbot_print_1.webp",
      "/prints/chatbot/chatbot_print_2.webp",
      "/prints/chatbot/chatbot_print_3.webp",
      "/prints/chatbot/chatbot_print_4.webp",
      "/prints/chatbot/chatbot_print_5.webp",
      "/prints/chatbot/chatbot_print_6.webp",
    ],
  },
  {
    name: "Site Creche Escola Florescer",
    description: "Site institucional responsivo para uma escola infantil.",
    link: "http://www.crecheescolaflorescer.com",
    images: ["/prints/creche/creche1.png"],
  },
  {
    name: "PDV SaaS Aguiar Estética Automotiva",
    description:
      "App completo com cadastro de clientes, ordem de serviços, agendamento e vendas.",
    link: "#",
    images: [
      "/prints/PDV/pdv-primeira.png",
      "/prints/PDV/pdv1.png",
      "/prints/PDV/pdv2.png",
      "/prints/PDV/pdv3.png",
      "/prints/PDV/pdv4.png",
      "/prints/PDV/pdv5.png",
      "/prints/PDV/pdv6.png",
      "/prints/PDV/pdv7.png",
      "/prints/PDV/pdv8.png",
      "/prints/PDV/pdv9.png",
      "/prints/PDV/pdv10.png",
      "/prints/PDV/pdv12.png",
      "/prints/PDV/pdv13.png",
      "/prints/PDV/pdv14.png",
      "/prints/PDV/pdv15.png",
      "/prints/PDV/pdv16.png",
    ],
  },
  {
    name: "Site Aguiar Estética Automotiva",
    description: "Site moderno e responsivo para estética automotiva.",
    link: "https://autoaguiarestetica.com.br/",
    images: ["/prints/estetica-automotiva/estetica_automotiva1.png"],
  },
  {
    name: "Site Soluções em Engenharia Elétrica",
    description: "Site moderno para Engenharia Elétrica.",
    link: "https://phmeloengenharia.com.br/",
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
          src="/imagens/Paulo_Melo2.webp"
          alt="Foto de perfil de Paulo Melo" // Alt text mais descritivo
          className="w-64 md:w-80 mx-auto"
        />
      </div>

      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
        Olá, eu sou Paulo Melo
      </h1>
      <p className="text-lg sm:text-xl md:text-2xl mb-6 max-w-xl">
        Desenvolvedor Full-Stack | Criando soluções web modernas com React,
        Node.js e PostgreSQL
      </p>
      <div className="flex gap-4">
        <a
          href="#projetos"
          className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-gray-100 transition"
        >
          Meus Projetos
        </a>
        <a
          href="#rodape"
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
      <HelmetProvider>
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
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />

          {/* Open Graph */}
          <meta
            property="og:title"
            content="Paulo Melo | Desenvolvedor Full-Stack"
          />
          <meta
            property="og:description"
            content="Portfólio de Paulo Melo - Projetos de sites, sistemas e aplicações web."
          />
          <meta property="og:type" content="website" />
          <meta
            property="og:url"
            content="https://portfolio-paulo-melo.vercel.app/"
          />
          <meta property="og:image" content="/prints/og-image.png" />

          {/* Twitter Card */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="Paulo Melo | Desenvolvedor Full-Stack"
          />
          <meta
            name="twitter:description"
            content="Portfólio de Paulo Melo - Projetos de sites, sistemas e aplicações web."
          />
          <meta name="twitter:image" content="/prints/og-image.png" />
        </Helmet>
      </HelmetProvider>

      {/* Hero / Capa */}
      <Hero />

      {/* Sobre Mim */}
      <section id="sobre-mim" className="p-6 sm:p-10 text-center bg-gray-50">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-800">
          Sobre Mim
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed text-justify">
          Sou <span className="font-semibold">Programador Full Stack</span>,
          formado em <span className="font-semibold">Engenharia Elétrica</span>{" "}
          e atualmente estudante de{" "}
          <span className="font-semibold">Ciência da Computação</span>. Tenho
          experiência no desenvolvimento de soluções completas, desde{" "}
          <span className="font-semibold">sites institucionais</span> até{" "}
          <span className="font-semibold">sistemas SaaS</span>, incluindo
          aplicações de <span className="font-semibold">PDV</span>.
        </p>

        <p className="text-gray-700 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed text-justify">
          Possuo domínio de <span className="font-semibold">C</span> para
          programação de microcontroladores,{" "}
          <span className="font-semibold">Python</span> para scripts e
          softwares, <span className="font-semibold">MATLAB</span>, além de
          sólida experiência com{" "}
          <span className="font-semibold">JavaScript, SQL, React</span> e{" "}
          <span className="font-semibold">Node.js</span>. Minha formação
          multidisciplinar, aliada à prática em diferentes tecnologias, permite
          integrar conhecimentos de{" "}
          <span className="font-semibold">hardware e software</span> no
          desenvolvimento de soluções inovadoras e eficientes.
        </p>

        <p className="text-gray-700 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed text-justify">
          Atualmente, aprofundo meus estudos em{" "}
          <span className="font-semibold">
            programação pelo programa One Oracle Next Education
          </span>
          , sempre buscando aplicar{" "}
          <span className="font-semibold">
            boas práticas de desenvolvimento
          </span>{" "}
          e expandir minhas habilidades em{" "}
          <span className="font-semibold">Arquitetura de Software</span>.
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
      {/* DESCOMENTADO: Usando a seção de tecnologias detalhada */}
      <section id="tecnologias" className="p-6 sm:p-10 text-center bg-white">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-800">
          Tecnologias
        </h2>

        <div className="grid gap-10">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-700">
              Frontend
            </h3>
            <div className="flex flex-wrap justify-center gap-6">
              {[
                {
                  name: "React",
                  logo: "https://cdn.worldvectorlogo.com/logos/react-2.svg",
                  tooltip: "Experiência em frontend com React",
                },
                {
                  name: "TailwindCSS",
                  logo: "https://cdn.worldvectorlogo.com/logos/tailwindcss.svg",
                  tooltip: "Estilização moderna e responsiva com TailwindCSS",
                },
              ].map((skill, idx) => (
                <div
                  key={idx}
                  className="relative group flex flex-col items-center w-20"
                >
                  <img
                    src={skill.logo}
                    alt={skill.name}
                    className="w-10 h-10 sm:w-12 sm:h-12"
                  />
                  <p className="mt-2 text-xs sm:text-sm">{skill.name}</p>
                  <span className="absolute -top-10 scale-0 group-hover:scale-100 transition rounded bg-gray-800 text-white text-xs px-2 py-1">
                    {skill.tooltip}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-green-700">
              Backend
            </h3>
            <div className="flex flex-wrap justify-center gap-6">
              {[
                {
                  name: "Node.js",
                  logo: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg",
                  tooltip: "Criação de APIs rápidas e escaláveis",
                },
                {
                  name: "Python",
                  logo: "https://cdn.worldvectorlogo.com/logos/python-5.svg",
                  tooltip: "Desenvolvimento de scripts e softwares com Python",
                },
              ].map((skill, idx) => (
                <div
                  key={idx}
                  className="relative group flex flex-col items-center w-20"
                >
                  <img
                    src={skill.logo}
                    alt={skill.name}
                    className="w-10 h-10 sm:w-12 sm:h-12"
                  />
                  <p className="mt-2 text-xs sm:text-sm">{skill.name}</p>
                  <span className="absolute -top-10 scale-0 group-hover:scale-100 transition rounded bg-gray-800 text-white text-xs px-2 py-1">
                    {skill.tooltip}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-indigo-700">
              Banco de Dados
            </h3>
            <div className="flex flex-wrap justify-center gap-6">
              {[
                {
                  name: "PostgreSQL",
                  logo: "https://cdn.worldvectorlogo.com/logos/postgresql.svg",
                  tooltip: "Banco de dados relacional avançado",
                },
              ].map((skill, idx) => (
                <div
                  key={idx}
                  className="relative group flex flex-col items-center w-20"
                >
                  <img
                    src={skill.logo}
                    alt={skill.name}
                    className="w-10 h-10 sm:w-12 sm:h-12"
                  />
                  <p className="mt-2 text-xs sm:text-sm">{skill.name}</p>
                  <span className="absolute -top-10 scale-0 group-hover:scale-100 transition rounded bg-gray-800 text-white text-xs px-2 py-1">
                    {skill.tooltip}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-red-700">
              Hardware & Embarcados
            </h3>
            <div className="flex flex-wrap justify-center gap-6">
              {[
                {
                  name: "C",
                  logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png",
                  tooltip: "Programação de sistemas embarcados em C",
                },
                {
                  name: "MATLAB",
                  logo: "https://upload.wikimedia.org/wikipedia/commons/2/21/Matlab_Logo.png",
                  tooltip: "Simulações matemáticas e de controle",
                },
                {
                  name: "Simulink",
                  logo: "/logos/logo-Simulink.webp",
                  tooltip:
                    "Modelagem e simulação de sistemas dinâmicos com Simulink",
                },
                {
                  name: "Microcontroladores",
                  logo: "/logos/logo-microcontrolador.webp",
                  tooltip: "Experiência com ESP32, Arduino e ARM",
                },
              ].map((skill, idx) => (
                <div
                  key={idx}
                  className="relative group flex flex-col items-center w-20"
                >
                  <img
                    src={skill.logo}
                    alt={skill.name}
                    className="w-10 h-10 sm:w-12 sm:h-12"
                  />
                  <p className="mt-2 text-xs sm:text-sm">{skill.name}</p>
                  <span className="absolute -top-10 scale-0 group-hover:scale-100 transition rounded bg-gray-800 text-white text-xs px-2 py-1">
                    {skill.tooltip}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="bg-blue-600 text-white border-t border-blue-400 py-10"
        id="rodape"
      >
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-start text-center sm:text-left">
          {/* Contato */}
          <div className="flex justify-center sm:justify-start">
            <div className="flex flex-col gap-3 items-center sm:items-end">
              <h3 className="font-semibold mb-1">Contato</h3>

              {/* Email */}
              <a
                href="mailto:phmelo.dev@gmail.com"
                className="flex items-center gap-2 hover:underline hover:text-blue-200 transition text-sm sm:text-base"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M2 4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4zm2 0v.01L12 13l8-8.99V4H4zm0 2.828V20h16V6.828l-8 9-8-9z" />
                </svg>
                phmelo.dev@gmail.com
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/5561993772528?text=Olá,%20vim%20pelo%20seu%20portfólio!"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 bg-white text-blue-700 rounded-lg shadow hover:bg-green-500 hover:text-white transition transform hover:scale-105 text-sm sm:text-base"
                aria-label="Abrir conversa no WhatsApp"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                  alt="WhatsApp"
                  className="w-6 h-6 sm:w-7 sm:h-7"
                />
                (61) 99377-2528
              </a>
            </div>
          </div>

          {/* Navegação */}
          <div className="flex justify-center sm:justify-center">
            <div>
              <h3 className="font-semibold mb-3 justify-start">Navegação</h3>
              <nav className="flex flex-col gap-1">
                <a
                  href="#sobre-mim"
                  className="hover:underline hover:text-blue-200 transition"
                >
                  Sobre
                </a>
                <a
                  href="#projetos"
                  className="hover:underline hover:text-blue-200 transition"
                >
                  Projetos
                </a>
                {/*<a href="#contato" className="hover:underline hover:text-blue-200 transition">Contato</a>*/}
              </nav>
            </div>
          </div>

          {/* Sobre Mim */}
          <div className="flex justify-end">
            <div>
              <h3 className="font-semibold mb-2">Sobre Mim</h3>
              <p className="text-sm sm:text-base leading-relaxed">
                Criando soluções web modernas que unem design, performance e
                inovação.
              </p>
            </div>
          </div>
        </div>

        {/* Direitos autorais */}
        <p className="text-center text-xs sm:text-sm mt-6 text-blue-200">
          &copy; {new Date().getFullYear()} Paulo Melo. Todos os direitos
          reservados.
        </p>
      </footer>

      {/* Botão flutuante do WhatsApp */}
      <WhatsAppButton />
    </div>
  );
}

export default App;
