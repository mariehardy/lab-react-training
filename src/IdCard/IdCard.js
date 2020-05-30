import React from 'react';

// function component (it has only props, no states)
const IdCard = (props) => {
  return (
    <div className="IdCardBox">
      <img
        src={props.picture}
        alt={props.firstName + ' ' + props.lastName}
        className="IdCard__img"
      />
      <div>
        <p>Last Name: {props.lastName}</p>
        <p>First Name: {props.firstName}</p>
        <p>Gender: {props.gender}</p>
        <p>Height: {props.height / 100} m</p>
        <p>Birth: {props.birth.toLocaleDateString()}</p>
      </div>
    </div>
  );
};

export default IdCard;
