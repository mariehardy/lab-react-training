import React from 'react';


const IdCard = props => {


return (
    <div>
      {/* picture="https://randomuser.me/api/portraits/men/44.jpg" */}
  <p>Last Name: {props.lastName}</p>
  <p>First Name: {props.firstName}</p>
     {/* gender='male'
     height={178}
     birth={new Date("1992-07-14")} */}

</div>
)

}

export default IdCard;