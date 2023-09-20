import { useSelector } from "react-redux";
import Card from "../features/Card";

const Cards = () => {
    const { cardArray } = useSelector((state) => state.cardArray);

    return (
        <div className="myCardsWrapper">
            {cardArray.map((x, i) => {
                return (
                    <Card {...x} i={i} key={x.cardNumber} />
                )
            })}

        </div>
    );
}

export default Cards;