import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [affair, setAffair] = useState('');
  const [message, setMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    const data = {};

    data.name = name;
    data.mail = mail;
    data.affair = affair;
    data.message = message;

    console.log(data);
  };

  return (
    <div style={{ backgroundColor: '#6ACC53' }}>
      {/* <div
        style={{
          width: '100%',
          height: 265,
          backgroundColor: '#9BB7EE',
          borderRadius: '50%',
          marginBottom: -130
        }}
      ></div> */}
      <div
        style={{
          backgroundColor: '#9BB7EE'
        }}
        className="d-flex flex-column align-items-center justify-content-center "
      >
        <h1 className="text-white mb-5" style={{marginTop: 150}}>Envianos un mensaje</h1>
        <div
          className="bg-white px-5 py-4"
          style={{ borderRadius: 30, marginTop: 15 }}
        >
          <form
            method="POST"
            onSubmit={sendEmail}
            className="d-flex flex-column needs-validation"
          >
            <div className="row">
              <div className="col-sm-12 col-md-6">
                <input
                  type="text"
                  id="name"
                  onChange={(e) => {setName(e.target.value)}}
                  value={name}
                  placeholder="Nombre"
                  required
                />
              </div>
              <div className="col-sm-12 col-md-6">
                <input
                  type="mail"
                  id="mail"
                  onChange={(e) => {setMail(e.target.value)}}
                  placeholder="Correo"
                  value={mail}
                  required
                  pattern='^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$'
                  title='Escribe tu correo en el formato indicado'
                />
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12 mt-5">
                <input
                  type="text"
                  id="affair"
                  placeholder="Asunto"
                  onChange={(e) => {setAffair(e.target.value)}}
                  maxLength={42}
                  value={affair}
                  required
                />
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12 mt-6">
                <textarea
                  placeholder="Mensaje"
                  cols="30"
                  rows="1"
                  onChange={(e) => {
                    setMessage(e.target.value)
                  }}
                  onKeyUp={(e) => {
                    e.target.style.height = 'auto';
                    let alturaScroll = e.target.scrollHeight;
                    e.target.style.height = `${alturaScroll}px`;
                  }}
                  required
                  maxLength={257}
                  value={message}
                ></textarea>
              </div>
            </div>
            <div className="row" style={{ marginTop: 'auto' }}>
              <div
                className="col-sm-12 d-flex justify-content-center"
                id="enviar"
              >
                <button type="submit">Enviar</button>
              </div>
            </div>
          </form>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

export default Contact;
