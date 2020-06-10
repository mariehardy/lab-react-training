import React from 'react'


// It takes 8 props:

// type: A string that can be "Visa" or "Master Card"
// number: A string that is a number of the credit card. You will only display the 4 last digits for security reasons 😉
// expirationMonth: A number that represents the month, between 1 and 12
// expirationYear: A number that represents the year
// bank: A string that represents the name of the bank
// owner: A string that represents the name of the owner
// bgColor: A string for the background color of the card
// color: A string for the text color of the card



function CreditCard(props) {

    let styles = {
        backgroundColor: `${props.bgColor}`,
        color:`${props.color}`,
    }

    return (
        <div className="creditCard" style={styles}>
            <p>{props.type}</p>
            <p>{props.number}</p>
            <p>{props.expirationMonth}</p>
            <p>{props.expirationYear}</p>
            <p>{props.bank}</p>
            <p>{props.owner}</p>
        </div>
    )
}

export default CreditCard
