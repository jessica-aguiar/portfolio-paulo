import React, { useState, useRef } from "react";

export default function PortfolioCard({ project }) {
  const [current, setCurrent] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalImageRef = useRef(null);

  const nextImage = () => {
    setCurrent((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrent((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  const openModal = (index) => {
    setCurrent(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      modalImageRef.current.requestFullscreen().catch((err) => {
        console.error(`Erro ao tentar colocar em tela cheia: ${err.message}`);
      });
    } else {
      document.exitFullscreen();
    }
  };

  return (
    <div className="border rounded-xl p-6 shadow-md hover:shadow-xl bg-white transition flex flex-col">
      {/* Carrossel */}
      {project.images && project.images.length > 0 && (
        <div className="relative mb-4">
          <img
            src={project.images[current]}
            alt={project.name}
            className="rounded-lg w-full h-48 object-cover cursor-pointer"
            onClick={() => openModal(current)}
          />
          {/* Botões de navegação */}
          {project.images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute top-1/2 left-2 bg-white/70 px-2 py-1 rounded-full shadow"
              >
                ◀
              </button>
              <button
                onClick={nextImage}
                className="absolute top-1/2 right-2 bg-white/70 px-2 py-1 rounded-full shadow"
              >
                ▶
              </button>
            </>
          )}
        </div>
      )}

      <h3 className="text-xl font-bold mb-2 text-gray-800">{project.name}</h3>
<p className="text-gray-600 mb-4 flex-1">{project.description}</p>

{project.link && project.link !== "#" ? (
  <a
    href={project.link}
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-600 font-medium hover:underline mt-auto"
  >
    Ver Projeto
  </a>
) : (
  <span className="text-gray-500 italic mt-auto">Em desenvolvimento</span>
)}

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <img
              src={project.images[current]}
              alt={project.name}
              className="max-h-[80vh] max-w-[90vw] rounded-lg"
              ref={modalImageRef}
            />
            <button
              onClick={toggleFullScreen}
              className="absolute top-2 right-2 bg-white/80 px-3 py-1 rounded shadow"
            >
              Tela Cheia
            </button>
            {project.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute top-1/2 left-2 bg-white/70 px-2 py-1 rounded-full shadow"
                >
                  ◀
                </button>
                <button
                  onClick={nextImage}
                  className="absolute top-1/2 right-2 bg-white/70 px-2 py-1 rounded-full shadow"
                >
                  ▶
                </button>
              </>
            )}
            <button
              onClick={closeModal}
              className="absolute top-2 left-2 bg-white/80 px-3 py-1 rounded shadow"
            >
              ✖
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

{/*import React from "react";

export default function PortfolioCard({ project }) {
  return (
    <div className="border rounded-xl p-6 shadow-md hover:shadow-xl bg-white transition flex flex-col">

     } {project.image && (
        <img
          src={project.image}
          alt={project.name}
          className="rounded-lg mb-4 w-full h-48 object-cover"
        />
      )}

      <h3 className="text-xl font-bold mb-2 text-gray-800">{project.name}</h3>
      <p className="text-gray-600 mb-4 flex-1">{project.description}</p>


      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 font-medium hover:underline mt-auto"
      >
        Ver Projeto
      </a>
    </div>
  );
*/}
