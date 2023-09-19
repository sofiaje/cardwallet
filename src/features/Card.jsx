import { useState } from "react";
import { useDispatch } from "react-redux";
import { activateCard } from "../features/cardSlice"


const Card = ({ cardholder, cardNumber, ccv, isActive, expireYear, expireMonth, i }) => {
    const dispatch = useDispatch()

    const btnClickHandler = (e) => {
        e.stopPropagation()
        console.log("klick" + i)
    }

    return ( 
        <div className={isActive ? "activeCard card" : "card"} onClick={() => {dispatch(activateCard(i))} }>
        {/* <div> */}
            <h3>{cardholder}</h3>
            <p>{cardNumber.toString().replace(/(\d{4})(?=\d)/g, '$1 ')}</p>
            <p><small>{expireMonth} / {expireYear}</small></p>
            {!isActive && <button className="hiddenBtn" onClick={(e) => { btnClickHandler(e) }
            }>x</button>}
        </div>
     );
}
 
export default Card;