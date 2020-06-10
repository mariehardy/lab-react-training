import React from 'react'

function BoxColor(props) {

let styles = {
    backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b} )`,
}


  const rgbToHex = (r, g, b) => '#' + [r, g, b].map(x => {
    const hex = x.toString(16)
            console.log("r is ==== " + r)

    return hex.length === 1 ? '0' + hex : hex
  }).join('')


    return (
        <div>
      <div className="square-box" style={styles}>
      rgb(({props.r}, {props.g}, {props.b} ))
      <p>
        { rgbToHex(`${props.r}`, `${props.g}`, `${props.b}`) }
      </p>  
      </div>
          
      </div>  
    )
}

export default BoxColor
