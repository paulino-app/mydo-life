import React from 'react';

const Content = () => {
  return (
    <div className="row" style={{ marginTop: 100, zIndex: 10 }}>
      <div className="col-md-12 col-xl-5 text-center text-xl-start"
      style={{display: 'flex', justifyContent: 'center'}}
      >
        <img src="./images/Kowie 1.png" alt="Kowie" />
      </div>
      <div
        className="col-md-12 col-xl-7 text-center text-xl-start"
        style={{
          marginTop: 75
        }}
      >
        <h1 className="titulo">Creamos contenido</h1>
        <div className="separador"></div>
        <p className="info">
          En nuestro estudio, nos apasiona compartir contenido divertido y
          educativo, a través de nuestras transmisiones, videos y eventos
          interactivos, buscamos inspirar a las personas de todo el mundo a
          tomar medidas concretas para proteger el medio ambiente y trabajar
          juntos en la conservación de la vida silvestre.
        </p>
      </div>
    </div>
  );
};

export default Content;
