import React from "react";

function Footer() {
  return (
    <footer className="text-white py-4 bg-gray-footer">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center">
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 text-center">
            <p className="mb-2">Termos e Condições</p>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 text-center">
            <p className="mb-2">Segurança</p>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 text-center">
            <p className="mb-2">Privacidade</p>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 text-center">
            <p className="mb-2">Ferramentas e Calculadoras</p>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 text-center">
            <p className="mb-2">Acessibilidade</p>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 text-center">
            <p className="mb-2">Redes Sociais</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
