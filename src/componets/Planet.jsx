function Planet() {
  return (
    <>
      <div style={{
        width: 400,
        height: 400,
        margin: 'auto',
        position: 'relative',
        marginTop: 128
      }}>
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
            src="images/earth_map.png"
            alt=""
            style={{
              width: 556
            }}
          />
        </div>
        {/* leave 1 */}
        <img
          src="images/leaves.png"
          alt=""
          style={{
            position: 'absolute',
            top: 176,
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
            top: 176,
            left: 0,
            width: 156
          }}
        ></img>
      </div>
    </>
  );
}

export default Planet;
