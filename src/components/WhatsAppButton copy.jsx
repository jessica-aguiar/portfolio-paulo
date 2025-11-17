import React from "react";

function WhatsAppButton() {
  const phone = "5561993772528";
  const message = "Olá, vim pelo seu portfólio e gostaria de falar com você!";
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      title="Fale comigo no WhatsApp"
      className="fixed bottom-5 right-5 z-50 bg-green-500 p-3 rounded-full shadow-lg hover:scale-110 transition-transform"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
        className="w-10 h-10"
      />
    </a>
  );
}

export default WhatsAppButton;
