import { useDispatch } from "react-redux";
import { activateCard, removeCard } from "../../features/card/cardSlice"
import classes from "../../pages/cards/cards.module.scss"
import chip from "/assets/chip.png"
import handleVendor from "../.././helpers/handleVendor";

const Card = ({ cardholder, cardNumber, isActive, expireYear, expireMonth, vendor, id}) => {
    const dispatch = useDispatch()
    
    const btnClickHandler = (e, id) => {
        e.stopPropagation()
        dispatch(removeCard(id))
    }
    const cardClickHandler = (isActive, id) => {
        {!isActive && dispatch(activateCard(id))}
    }

    return ( 
        <div className={`${classes.card} card`} onClick = {() => { cardClickHandler(isActive, id) }}>
            <div>
                <img src={chip} alt="chip" />
                <p>{handleVendor(vendor)}</p>
            </div>
            <div>
                <h2>{cardNumber.toString().replace(/(\d{4})(?=\d)/g, '$1 ')}</h2>
                <div className={classes.flex}>
                    <p>{cardholder}</p>
                    <p><small>{expireMonth} / {expireYear}</small></p>
                </div>
                {!isActive && <button className={classes.hiddenBtn} onClick={(e) => { btnClickHandler(e, id) }}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg>
                </button>}
            </div>
        </div>
     );
}
 
export default Card;