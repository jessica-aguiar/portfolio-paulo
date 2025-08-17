import React from "react";

export default function PortfolioCard({ project }) {
  return (
    <div className="border rounded-xl p-6 shadow-md hover:shadow-xl bg-white transition">
      <h3 className="text-xl font-bold mb-2 text-gray-800">{project.name}</h3>
      <p className="text-gray-600 mb-4">{project.description}</p>
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 font-medium hover:underline"
      >
        Ver Projeto
      </a>
    </div>
  );
}
