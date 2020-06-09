import React from 'react'

function Random(props) {

        // function generateRandom(props) {
            // let min = {props.min}
            // let max = {props.max}
            // let randomResult = Math.floor(Math.Random() * (max - min) + min)
            // return randomResult
        //     return Math.floor(Math.Random() * (max - min) + min)
        // }
        
    return (
        <div>
            <p>Random value between {props.min} and {props.max} => {Math.floor(Math.random() * (props.max - props.min) + props.min)}</p>
        </div>
    )
}

export default Random
