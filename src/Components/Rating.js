import React from 'react';

function Rating(props) {
  let showStars = (star) => {
    let starNum = Math.round(Number(star));
    let multipleStars = '★';
    let emptyStars = '☆';

    for (let i = 0; i < starNum - 1; i++) {
      multipleStars += multipleStars[i];
    }
    console.log('multipleStars.length is ==== ' + multipleStars.length);
    if (multipleStars.length < 5) {
      for (let i = 0; i < 5 - multipleStars.length - 1; i++) {
        emptyStars += emptyStars[i];
      }
      return multipleStars + emptyStars;
    } else {
      return multipleStars;
    }
  };

  return <div>{showStars(`${props.children}`)}</div>;
}

export default Rating;
