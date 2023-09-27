import classes from "./cards.module.scss"
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Card from "../../features/card/Card";

const Cards = () => {
    const { cardArray, status } = useSelector((state) => state.cardArray);


    return (
        <div className={classes.myCardsWrapper}>

            {status === "failure" && "Something went wrong, please check your connection and try again"}

            <div className={classes.activeCards}>
                {cardArray.map((x, i) => {
                    return x.isActive && <Card {...x} key={x.id} />
                })}
            </div>
            
            {cardArray.length > 1 &&<h2 style={{paddingTop: "2rem"}}>Inactive cards</h2>}
            <div className={classes.inactiveCards}>
                {cardArray.map((x, i) => {
                        return x.isActive === false && <Card {...x} key={x.id} />
                    })}
            </div>
            {(cardArray.length < 4 && status === "success") && <NavLink to="/addcard"><button className={classes.addBtn}>ADD NEW CARD</button></NavLink>}
        </div>
    );
}

export default Cards;