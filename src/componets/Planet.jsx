import React, { useEffect, useRef } from 'react';

function Planet() {
  const divRef = useRef(null);
  useEffect(() => {
    let requestId;
    const divElement = divRef.current;

    // let position = 0;
    let position = -500;

    const draw = () => {
      position += 1;
      if (position < 0) {
      } else {
        position = -500;
      }
      divElement.style.transform = `translateX(${position}px)`;

      console.log(position);

      requestId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(requestId);
    };
  }, []);
  return (
    <>
      <div
        style={{
          width: 400,
          height: 500,
          margin: 'auto',
          position: 'relative',
          paddingTop: 158
        }}
      >
        <div
          style={{
            border: '8px solid #6acc53',
            width: 256,
            height: 256,
            borderRadius: '100%',
            position: 'relative',
            overflow: 'hidden',
            margin: 'auto'
          }}
        >
          <img
            ref={divRef}
            src="images/earth_map.png"
            alt=""
            className="planet-move"
            style={{
              width: 1000
            }}
          />
        </div>
        {/* leave 1 */}
        <img
          src="images/leaves.png"
          alt=""
          style={{
            position: 'absolute',
            bottom: 16,
            right: 0,
            width: 156,
            transform: 'scaleX(-1)'
          }}
        ></img>
        {/* leave 2 */}
        <img
          src="images/leaves.png"
          alt=""
          style={{
            position: 'absolute',
            bottom: 16,
            left: 0,
            width: 156
          }}
        ></img>

        {/* <div style={{
          paddingTop: 80,
          color: '#6acc53',
          fontSize: '2rem'
        }}>"Divirtámonos y cuidemos el planeta"</div> */}
      </div>
    </>
  );
}

export default Planet;
