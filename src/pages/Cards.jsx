import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Card from "../features/card";
import { getCardPerson } from "../features/cardSlice"

const Cards = () => {
    const dispatch = useDispatch();
    const { cardArray, status } = useSelector((state) => state.cardArray);
        
    return ( 
        <div className="myCardsWrapper">
            {cardArray.map((x, i) => {
                return (
                    <Card {...x} i={i} key={x.cardNumber}/>
                )

            })}

        </div>
     );
}
 
export default Cards;