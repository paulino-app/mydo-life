import React from 'react';

import { Avatar } from 'primereact/avatar';

const Aboutus = () => {
  return (
    <div className="row d-flex flex-xl-row-reverse" style={{ marginTop: 160 }}>
      <div
        className="col-md-12 col-xl-4 text-center text-xl-start"
        style={{
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <Avatar
          style={{
            width: 192,
            height: 192,
            backgroundColor: '#DFDFD',
            marginTop: 25
          }}
          image="images/mydo.png"
        />
      </div>
      <div className="col-md-12 col-xl-8 text-center text-xl-start">
        <h1 className="titulo">Acerca de nosotros</h1>
        <div className="separador"></div>
        <p className="info">
          Somos un innovador estudio de entretenimiento dedicado a la producción
          y difusión de contenido relacionado con las VTubers. Nuestra misión
          principal es crear conciencia global sobre la importancia de cuidar
          nuestro planeta y preservar especies en peligro de extinción.
        </p>
        <a className="btn btn-outline-primary btn-bd-primary" href="index.html">
          Descubre más
        </a>
      </div>
    </div>
  );
};

export default Aboutus;
