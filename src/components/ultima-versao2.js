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
    <div className="border rounded-xl p-4 sm:p-6 shadow-md hover:shadow-xl bg-white transition flex flex-col">
      {/* Carrossel */}
      {project.images && project.images.length > 0 && (
        <div className="relative mb-4">
          <img
            src={project.images[current]}
            alt={project.name}
            className="rounded-lg w-full h-40 sm:h-48 md:h-56 object-cover cursor-pointer"
            onClick={() => openModal(current)}
          />
          {/* Botões de navegação */}
          {project.images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute top-1/2 -translate-y-1/2 left-2 bg-white/80 px-3 py-2 rounded-full shadow text-lg sm:text-xl"
              >
                ◀
              </button>
              <button
                onClick={nextImage}
                className="absolute top-1/2 -translate-y-1/2 right-2 bg-white/80 px-3 py-2 rounded-full shadow text-lg sm:text-xl"
              >
                ▶
              </button>
            </>
          )}
        </div>
      )}

      {/* Conteúdo */}
      <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-800">
        {project.name}
      </h3>
      <p className="text-gray-600 mb-4 flex-1 text-sm sm:text-base">
        {project.description}
      </p>

      {project.link && project.link !== "#" ? (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 font-medium hover:underline mt-auto text-sm sm:text-base"
        >
          Ver Projeto
        </a>
      ) : (
        <span className="text-gray-500 italic mt-auto text-sm sm:text-base">
          Em desenvolvimento
        </span>
      )}

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-2"
          onClick={closeModal}
        >
          <div
            className="relative w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={project.images[current]}
              alt={project.name}
              ref={modalImageRef}
              className="
                max-h-[95vh] max-w-[95vw]      /* Mobile: maior imagem */
                sm:max-h-[80vh] sm:max-w-[80vw] /* Tablet */
                md:max-h-[70vh] md:max-w-[70vw] /* Desktop */
                rounded-lg object-contain
              "
            />

            {/* Botão Tela Cheia */}
            <button
              onClick={toggleFullScreen}
              className="absolute top-4 right-4 bg-white/80 px-3 py-1 rounded shadow text-sm sm:text-base"
            >
              Tela Cheia
            </button>

            {/* Navegação no Modal */}
            {project.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute top-1/2 -translate-y-1/2 left-4 bg-white/80 px-4 py-3 rounded-full shadow text-2xl sm:text-3xl"
                >
                  ◀
                </button>
                <button
                  onClick={nextImage}
                  className="absolute top-1/2 -translate-y-1/2 right-4 bg-white/80 px-4 py-3 rounded-full shadow text-2xl sm:text-3xl"
                >
                  ▶
                </button>
              </>
            )}

            {/* Fechar */}
            <button
              onClick={closeModal}
              className="absolute top-4 left-4 bg-white/80 px-3 py-1 rounded shadow text-sm sm:text-base"
            >
              ✖
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
