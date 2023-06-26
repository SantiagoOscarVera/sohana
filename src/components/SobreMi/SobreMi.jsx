import React from 'react';

const SobreMi = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-full h-full">
        <div className="relative  py-8 px-8 bg-violet-200 text-purple-700 text-left text-center" style={{ height: '80%', width:"60%" }}>
          {/* Aquí puedes agregar tu contenido de texto */}
          <h2 className="text-3xl  mb-4">Sobre Mi</h2>
          <p className="text-lg text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </div>
    </div>
  );
};

export default SobreMi;
