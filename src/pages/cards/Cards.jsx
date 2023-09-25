import classes from "./cards.module.scss"
import { useSelector } from "react-redux";
import Card from "../../features/Card";

const Cards = () => {
    const { cardArray } = useSelector((state) => state.cardArray);

    return (
        <div className={classes.myCardsWrapper}>
            <div className={classes.activeCards}>
                {cardArray.map((x, i) => {
                    return x.isActive && <Card {...x} i={i} key={x.cardNumber} />
                })}
            </div>
            
            {cardArray.length > 1 &&<h2>Inactive cards</h2>}
            <div className={classes.notActiveCards}>
                <div>
                    {cardArray.map((x, i) => {
                        return x.isActive === false && <Card {...x} i={i} key={x.cardNumber} />
                    })}
                </div>
            </div>
        </div>
    );
}

export default Cards;