import React from 'react';

const Greetings = (props) => {

    //props.lang

    let greet 

switch (props.lang) {
  case 'de' : 
  greet = "Hallo";
  break;
  case 'fr' : 
  greet = "Bonjour";
  break;
  case 'ch' : 
  greet = "Tzintao";
  break;
}

    // if (props.lang === "de") {
    //     greet = "Hallo"
    // } else if (props.lang === "fr") {
    //     greet = "Bonjour"
    // }

    return (
      <div>
      {greet} {props.children}
      {/* conditional (ternary) operator */}
      {/* {props.lang === "de" ? "Hallo" : "Bonjour"} {props.children} */}
      </div>
    );
  };
  
  export default Greetings;
  