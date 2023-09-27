import classes from "./addCard.module.scss"
import chip from "/assets/chip.png"
import handleVendor from "../../helpers/handleVendor"

import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form"
import { addNewUser } from "../../features/card/cardSlice";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Addcard = () => {
    const { cardArray } = useSelector((state) => state.cardArray);

    const dispatch = useDispatch()
    const navigate = useNavigate();
    const [cardState, setCardState] = useState(true)
    const [errorText, setErrorText] = useState("")

    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm({
        defaultValues: {
            cardholder: `${cardArray[0]?.cardholder}`,
            isActive: false,
            cardNumber: "XXXX XXXX XXXX XXXX"
        },
    })

    // watches cardNumber iput
    const cardNumberProcess = watch("cardNumber")
    const expireYearProcess = watch("expireYear")
    const expireMonthProcess = watch("expireMonth")
    const ccvProcess = watch("ccv")
    const vendor = watch("vendor")

    // handle submit on form
    const onSubmit = (data) => {
        let object = cardArray.find(x => x.cardNumber === data.cardNumber)
        { object && setErrorText("This card number is taken") }
        { cardArray.length >= 4 && setErrorText("There can only be four cards") }

        if (cardArray.length < 4 && !object) {
            dispatch(addNewUser(data))
            reset()
            navigate("/")
        }
    }


    const flipCard = () => {
        if (cardState) {
            return (
                <div className={`${classes.card} card`} onClick={() => { setCardState(prevState => !prevState) }}>
                    <div>
                        <img src={chip} alt="chip" />
                        <p>{handleVendor(vendor)}</p>
                    </div>
                    <div>
                        <h2>{cardNumberProcess.toString().replace(/(\d{4})(?=\d)/g, '$1 ')}</h2>
                        <div className={classes.flex}>
                            <p>{cardArray[0]?.cardholder}</p>
                            <p><small>{expireMonthProcess ? expireMonthProcess + " /" : "mm /"} {expireYearProcess ? expireYearProcess : "yy"}</small></p>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div className={`${classes.card} ${classes.cardBack} card`} onClick={() => { setCardState(prevState => !prevState) }}>
                    <p></p>
                    <p><small>CCV {ccvProcess ? ccvProcess : "xxx"}</small></p>
                </div>
            )
        }
    }

    return (
        <div>
            {flipCard()}

            {/*------- form ------*/}
            <div>
                <form className={classes.formContainer} onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="cardNumber">
                        <span>Card number </span><br />
                        <input id="cardNumber" type="number" {...register("cardNumber", { required: "Required field, numbers only", minLength: { value: 16, message: "16 characters, numbers only" }, maxLength: { value: 16, message: "16 characters, numbers only" }, pattern: { value: /^[0-9]\d*$/, message: "Only numbers please" } })} /><br />
                        {errors.cardNumber && <span className={classes.error}>{errors.cardNumber.message}</span>}
                    </label>

                    <label htmlFor="cardholder">
                        <span>Card holder </span><br />
                        <input id="cardholder" {...register("cardholder", { required: "Required field" })} readOnly /><br />
                        {errors.cardholder && <span className={classes.error}>{errors.cardholder.message}</span>}
                    </label>

                    <label htmlFor="expireMonth">
                        <span>Expire date </span><br />
                    </label>

                    <div className={classes.flex}>
                        <input id="expireMonth" type="number" placeholder="month"{...register("expireMonth", { required: "Required field", max: { value: 12, message: "Enter a correct month" }, minLength: { value: 2, message: "Please enter a two digit number" }, maxLength: { value: 2, message: "Please enter a two digit number" }, pattern: /^[0-9]\d*$/ })} /><br />

                        <input id="expireYear" type="number" placeholder="year" {...register("expireYear", { required: "Required field", minLength: { value: 2, message: "Please enter a two digit number" }, maxLength: { value: 2, message: "Please enter a two digit number" }, pattern: /^[0-9]\d*$/ })} /><br />
                    </div>
                    {errors.expireMonth && <span className={classes.error}>{errors.expireMonth.message}</span>}
                    {errors.expireYear && <span className={classes.error}>{errors.expireYear.message}</span>}


                    <label htmlFor="ccv">
                        <span>CCV </span><br />
                        <input id="ccv" type="number" {...register("ccv", { required: "Required field", minLength: { value: 3, message: "Please enter a three digit number" }, maxLength: { value: 3, message: "Please enter a three digit number" }, pattern: /^[0-9]\d*$/ })} /><br />
                        {errors.ccv && <span className={classes.error}>{errors.ccv.message}</span>}
                    </label>

                    <input type="hidden" {...register("isActive")} />

                    <label htmlFor="vendor">
                        <span>Vendor </span><br />
                        <select id="vendor" {...register("vendor", { required: "This field is required" })} >
                            <option value="">select option</option>
                            <option value="amex">Amex</option>
                            <option value="visa">Visa</option>
                            <option value="mastermind">MasterMind</option>
                        </select>
                        {errors.vendor && <span className={classes.error}>{errors.vendor.message}</span>}
                    </label>

                    <button type="submit" style={{ marginTop: "1rem" }}>ADD CARD</button>
                </form>
                {errorText && <span className={classes.error}>{errorText}</span>}

                {/* <NavLink to="/cards">back to my cards</NavLink> */}
            </div>
        </div>
    );
}

export default Addcard;