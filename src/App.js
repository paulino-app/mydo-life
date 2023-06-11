//Boostrap
import 'primereact/resources/themes/bootstrap4-light-blue/theme.css';
import 'primereact/resources/themes/bootstrap4-light-purple/theme.css';

//core
import 'primereact/resources/primereact.min.css';

import './style.css';
import Navbar from './componets/Navbar';

import Icon from './componets/Icon';
import Aboutus from './componets/Aboutus';
import Content from './componets/Content';
import Mainteam from './componets/Mainteam';
import Contact from './componets/Contact';
import { BrowserRouter } from 'react-router-dom';
import { Element, scroller } from 'react-scroll';

function App() {
  const handleEnlanceClick = (target) => {
    scroller.scrollTo(target, {
      duration: 1,
      smooth: true
    });
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Element name="#inicio"></Element>
        <Navbar handleEnlanceClick={handleEnlanceClick} />

        <Icon />
        <Element
          className="container d-flex flex justify-content-center"
          style={{
            marginTop: 60,
            marginBottom: 180
          }}
          name="#nosotros"
        >
          <Aboutus />
        </Element>
        <div
          className="container d-flex flex justify-content-center"
          style={{
            marginTop: 60
          }}
        >
          <Content />
        </div>
        <Element name="#equipo">
          <Mainteam />
        </Element>
        <Element
          name="#contacto"
          style={{
            zIndex: 9,
            borderColor: 'red'
          }}
        >
          <Contact />
        </Element>
      </div>
    </BrowserRouter>
  );
}

export default App;
