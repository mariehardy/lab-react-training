import React from 'react'

function BoxColor(props) {

{/* r: A number between 0 and 255 representing the amount of red
g: A number between 0 and 255 representing the amount of green
b: A number between 0 and 255 representing the amount of blue */}

    return (
        <span className="box-color">
{props.r}
{props.g}
{props.a}
        </span>
    )
}

export default BoxColor
