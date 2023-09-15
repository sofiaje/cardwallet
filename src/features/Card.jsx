const Card = ({ cardholder, cardNumber, isActive, i }) => {
    
    return ( 
        <div className={isActive ? "activeCard card" : "card"}>
            <h3>{cardholder}</h3>
            <p>{cardNumber.toString().replace(/(\d{4})(?=\d)/g, '$1 ')}</p>
        </div>
     );
}
 
export default Card;