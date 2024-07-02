import React from 'react'

function MainImage(props) {
  return (
    <div style={{
      position: 'relative',
      // background: `url(${props.image})`,
      backgroundImage: `url(${props.image})`,
      width: '100%',
      height: '500px',
      backgroundSize: 'cover',
      backgroundPosition: 'center center'
      // background의 shorthand의 속성과 일반 속성을 섞어쓰면 안된다.
    }}>
      <div style={{
        position: 'absolute',
        maxWidth: '500px',
        bottom: '25px',
        left: '25px',
        color: '#FFF'
        // backgroundColor: '#ff0'
      }}>
        <h2>{props.title}</h2>
        <p>{props.overview}</p>
      </div>
    </div>
  )
}

export default MainImage