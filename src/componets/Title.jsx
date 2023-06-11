import React, { useEffect, useState } from 'react';

const Title = () => {
  const [scroll, setScroll] = useState(window.screenY);

  useEffect(() => {
    const moveScroll = (e) => {
      if (window.screen.width >= 1140) {
        let value = parseInt(e.currentTarget.scrollY);

        // let $width = parseInt(document.getElementById('logo2').style.width);
        // let $heigth = parseInt(document.getElementById('logo2').style.height);
        // if (scroll < value) {
        //   document.getElementById('logo2').style.width = $width - 3 + 'px';
        //   document.getElementById('logo2').style.height = $heigth - 3 + 'px';
        // } else {
        //   document.getElementById('logo2').style.width = $width + 3 + 'px';
        //   document.getElementById('logo2').style.height = $heigth + 3 + 'px';
        // }
        setScroll(value);
      }
    };

    window.addEventListener('scroll', moveScroll);

    return () => window.removeEventListener('scroll', moveScroll);
  }, [scroll]);

  return (
    <div className="text-center mt-2" style={{ zIndex: 13 }}>
      <img
        src="./images/logo.png"
        alt="Mydolife"
        id="logo2"
        style={{
          maxWidth: 493,
          maxHeight: 112,
          minWidth: 284,
          minHeight: 64,
          width: 493,
          height: 112
        }}
      />
    </div>
  );
};

export default Title;
