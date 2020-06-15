import React from 'react'
import './DriverCard.css'
import Rating from './Rating'

function DriverCard(props) {
    return (
        <div className="drivercard">
            <div className="rect-to-cercle"><img className="drivercard__img" src={props.img} alt={props.name} /></div>
            <div className="info">
                <h2>{props.name}</h2>
              <Rating>{props.rating}</Rating>
              <p>{props.car.model} - {props.car.licensePlate}</p>
            </div>
        </div>
    )
}

export default DriverCard
