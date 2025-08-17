import React from "react";

function WhatsAppButton() {
  const phone = "5598970034126"; 
  const message = "Olá, vim pelo seu portfólio e gostaria de falar com você!";
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    /*<a
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
    </a>*/
    /*<a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      title="Fale comigo no WhatsApp"
      className="fixed bottom-4 right-4 md:bottom-5 md:right-5 lg:bottom-6 lg:right-6 z-50 
             bg-green-500 p-2 md:p-2.5 lg:p-3 rounded-full shadow-lg 
             hover:scale-110 transition-transform"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
       className="w-7 h-7 md:w-8 md:h-8 lg:w-9 lg:h-9"
      />
    </a>*/
    <a
  href={url}
  target="_blank"
  rel="noopener noreferrer"
  title="Fale comigo no WhatsApp"
  className="fixed bottom-4 right-4 md:bottom-5 md:right-5 lg:bottom-6 lg:right-6 z-50 
             bg-green-500 p-3 md:p-3.5 lg:p-4 rounded-full shadow-lg 
             hover:scale-110 transition-transform"
>
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
    alt="WhatsApp"
    className="w-9 h-9 md:w-10 md:h-10 lg:w-11 lg:h-11"
  />
</a>

  );
}

export default WhatsAppButton;
