import React from "react";
import PortfolioCard from "./components/PortfolioCard";
import WhatsAppButton from "./components/WhatsAppButton";

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
        <p className="text-gray-700">📧 Email: phmelo.dev@gmail.com</p>
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
      {/*<section className="p-10 text-center bg-gray-50">
  <h2 className="text-2xl font-semibold mb-4">Contato</h2>

  <p className="text-gray-700 mb-4">
    📧 Email: phmelo.dev@gmail.com
  </p>

  <a
    href="https://wa.me/5561993772528"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 px-5 py-3 bg-green-500 text-white font-semibold rounded-2xl shadow-md hover:bg-green-600 transition"
  >
       <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
      className="w-5 h-5 fill-current"
    >
      <path d="M380.9 97.1C339-4.1 212.1-31.8 122.7 37.5c-70.2 55-99.3 144.4-72.5 230.8L0 480l214.3-47.1c83.7 22.6 172.5-11.6 219.2-84.3 46.7-72.6 40.6-169.2-13.6-237.5zm-34.7 198.2c-5.8 16.3-34.3 31.2-48 33.2-12.8 1.9-29.3 2.7-47.2-2.9-10.9-3.4-25-8.1-43.1-16.9-76.2-37.2-125.7-120.1-129.5-125.6-3.8-5.6-30.9-41.1-30.9-78.3 0-37.3 19.6-55.4 26.6-62.9 7.1-7.6 15.5-9.5 20.8-9.5 5.2 0 10.4 0 15 0.3 4.8 0.2 11.3-1.8 17.7 13.5 6.5 15.8 22 54.6 23.9 58.6 1.9 3.8 3.2 8.1 0.6 13.2-2.6 5.2-3.9 8.1-7.7 12.5-3.8 4.4-8.1 9.8-11.5 13.2-3.8 3.8-7.7 8-3.3 15.6 4.4 7.6 19.5 32.1 41.8 52.2 28.7 25.4 52.9 33.4 60.5 37.2 7.6 3.8 12 3.2 16.5-1.9 4.5-5.2 19.1-22.3 24.2-29.9 5-7.6 10.1-6.3 17-3.8 6.9 2.6 43.5 20.5 51 24.2 7.6 3.8 12.6 5.7 14.5 8.9 1.9 3.3 1.9 19.2-3.9 35.6z"/>
    </svg>
    (98)97003-4126
  </a>
</section>*/}
      {/* Contato */}
      {/*<section className="p-10 text-center bg-gray-50">
  <h2 className="text-2xl font-semibold mb-4">Contato</h2>

  <p className="text-gray-700 mb-4">
    📧 Email: phmelo.dev@gmail.com
  </p>

  <a
    href="https://wa.me/5561993772528"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-3 px-5 py-3 bg-green-500 text-white font-semibold rounded-2xl shadow-md hover:bg-green-600 transition"
  >
  
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
      alt="WhatsApp"
      className="w-6 h-6"
    />
    (61) 99377-2528
  </a>
</section>*/}
      {/* Contato */}
      {/*<section className="p-10 text-center bg-gray-50">
  <h2 className="text-2xl font-semibold mb-4">Contato</h2>

  <p className="text-gray-700 mb-4">
    📧 Email: phmelo.dev@gmail.com
  </p>

  <a
    href="https://wa.me/5561993772528"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 text-gray-800 hover:text-green-600 transition"
  >

    <img
      src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
      alt="WhatsApp"
      className="w-7 h-7"
    />
    (61) 99377-2528
  </a>
</section>*/}
      {/* Contato */}
      <section className="p-10 text-center bg-gray-50">
        <h2 className="text-2xl font-semibold mb-4">Contato</h2>

        <p className="text-gray-700 mb-4">📧 Email: phmelo.dev@gmail.com</p>

        {(() => {
          const phone = "5561993772528";
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
              {/* Ícone oficial do WhatsApp */}
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                alt="WhatsApp"
                className="w-7 h-7"
              />
              (61) 99377-2528
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
