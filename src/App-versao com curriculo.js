import React from "react";
import PortfolioCard from "./components/PortfolioCard";
import WhatsAppButton from "./components/WhatsAppButton";

const projects = [
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

        {/* Botão Download CV */}
        <a
          href="/curriculo.pdf"
          download
          className="inline-block mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
        >
          📄 Baixar Currículo
        </a>
      </section>

      {/* Skills */}
      <section className="p-10 text-center bg-white">
        <h2 className="text-2xl font-semibold mb-6">Tecnologias</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {[
            {
              name: "React",
              logo: "https://cdn.worldvectorlogo.com/logos/react-2.svg",
            },
            {
              name: "Node.js",
              logo: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg",
            },
            {
              name: "PostgreSQL",
              logo: "https://cdn.worldvectorlogo.com/logos/postgresql.svg",
            },
            {
              name: "TailwindCSS",
              logo: "https://cdn.worldvectorlogo.com/logos/tailwindcss.svg",
            },
          ].map((skill, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <img src={skill.logo} alt={skill.name} className="w-12 h-12" />
              <p className="mt-2 text-sm">{skill.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Formação */}
      <section className="p-10 bg-gray-50">
        <h2 className="text-2xl font-semibold mb-4 text-center">Formação</h2>
        <ul className="max-w-xl mx-auto text-left list-disc list-inside text-gray-700 space-y-2">
          <li>🎓 Ciência da Computação - em andamento</li>
          <li>📚 Cursos: Oracle Java Backend • React • Node.js</li>
          <li>🔍 Autodidata em novas tecnologias e frameworks</li>
        </ul>
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
        <p className="text-gray-700 mb-4">📧 Email: phmelo.dev@gmail.com</p>
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
              className="inline-flex items-center gap-2 text-gray-800 hover:text-green-600 transition"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                alt="WhatsApp"
                className="w-7 h-7"
              />
              (98) 9700-34126
            </a>
          );
        })()}
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-4">
        &copy; {new Date().getFullYear()} Paulo Melo. Todos os direitos
        reservados.
      </footer>

      {/* Botão flutuante do WhatsApp */}
      <WhatsAppButton />
    </div>
  );
}

export default App;
