import React from "react";
import { Tooltip } from "react-tooltip"; // você pode usar react-tooltip ou outro lib

const technologies = {
  Frontend: [
    { name: "React", logo: "/logos/react.svg", tip: "Experiência em frontend com React." },
    { name: "TailwindCSS", logo: "/logos/tailwind.svg", tip: "Estilização rápida e responsiva com Tailwind." },
    { name: "JavaScript", logo: "/logos/js.svg", tip: "Desenvolvimento de interfaces dinâmicas." },
  ],
  Backend: [
    { name: "Node.js", logo: "/logos/node.svg", tip: "APIs robustas e escaláveis com Node.js." },
    { name: "Express", logo: "/logos/express.svg", tip: "Framework minimalista para backend." },
  ],
  "Banco de Dados": [
    { name: "PostgreSQL", logo: "/logos/postgres.svg", tip: "Banco relacional confiável e seguro." },
    { name: "MongoDB", logo: "/logos/mongo.svg", tip: "Banco NoSQL flexível para dados dinâmicos." },
  ],
  Hardware: [
    { name: "ESP32", logo: "/logos/esp32.svg", tip: "Microcontrolador Wi-Fi/Bluetooth para IoT." },
    { name: "C++", logo: "/logos/cpp.svg", tip: "Programação embarcada para sistemas de baixo nível." },
  ],
};

function Technologies() {
  return (
    <section className="py-16 bg-gray-50" id="tecnologias">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-blue-600 mb-10 text-center">
          🔹 Tecnologias
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {Object.entries(technologies).map(([category, items], idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow p-6 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
                {category}
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                {items.map((tech, i) => (
                  <div key={i} className="flex flex-col items-center group">
                    <img
                      src={tech.logo}
                      alt={tech.name}
                      className="w-12 h-12 mb-1 transition-transform group-hover:scale-110"
                      data-tooltip-id={tech.name}
                    />
                    <span className="text-sm text-gray-600">{tech.name}</span>
                    <Tooltip id={tech.name} place="top" content={tech.tip} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Technologies;
