import { useState } from "react";

const Card = ({ cardholder, cardNumber, ccv, expireYear, expireMonth }) => {
    const [activeCard, setActiveCard] = useState(false);

    return ( 
        <div className={activeCard ? "activeCard card" : "card"} onClick={() => {setActiveCard(prevState => !prevState)}}>
        {/* <div> */}
            <h3>{cardholder}</h3>
            <p>{cardNumber.toString().replace(/(\d{4})(?=\d)/g, '$1 ')}</p>
            <p>{expireMonth} / {expireYear}</p>
        </div>
     );
}
 
export default Card;