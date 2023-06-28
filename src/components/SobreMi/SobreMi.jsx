import React from 'react';

const SobreMi = () => {
  return (
    <div className="flex flex-col items-center ">
      <div className="flex flex-col sm:flex-row h-full"> {/* Cambio aquí */}
        <div className="mx-auto w-5/6 h-96  sm:w-3/6 sm:h-5/6 sm:order-1 order-2 relative ml-10 mt-5 py-10 px-12 bg-violet-200 text-purple-700 text-left  "> {/* Cambio aquí */}
          {/* Aquí puedes agregar tu contenido de texto */}
          <h2 className="text-3xl mb-4 mt-1 px-12 m-9">Sobre Mi</h2>
          <p className="text-lg text-gray-700 px-1 m-9 mb-10">
            Soy Flor, prof. Formadora de Yoga clásico y científico, buscadora infinita de herramientas que aportan bienestar. Hace 5 años que soy practicante, guía y estudiante de esta maravillosa ciencia que nos lleva a conectar profundamente con nuestro presente y restaurar poderosamente nuestra salud. <br/>
            Mi formación es constante, mientras más incursionó en esta práctica milenaria, más motivada me siento. Mi propósito personal es acompañar los procesos dolorosos e incómodos que requiere nuestra existencia como seres humanos.
          

          <div className="mt-4 flex justify-center text-lg text-black">
            <button
              style={{ border: '1px solid black', boxShadow: '0px 0px 5px gray' }}
              className="mb-10 rounded-3xl bg-slate-200 px-10 py-1 text-black shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-purple-200 hover:text-gray-700"
            >
              Ver más
            </button>
          </div>
          </p>
        </div>

        <div
          className="mx-auto w-5/6 h-full  sm:w-1/2 sm:h-4/5 sm:order-2 order-1 mt-7  relative bg-cover bg-center hover:scale-105 transition-all"
          style={{
            backgroundImage: "url('https://images.hola.com/imagenes/estar-bien/20230321228521/posturas-yoga-faciles-primavera/1-222-825/getty-yoga-espalda-m.jpg')",
            marginLeft: 'auto', // Agrega esta línea para alinear a la derecha
          }}
        ></div>
      </div>
    </div>
  );
};

export default SobreMi;
