import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form"
import { addNewUser } from "../features/cardSlice"
import { useState } from "react";


const Addcard = () => {
    const { cardArray } = useSelector((state) => state.cardArray)
    const dispatch = useDispatch()
    const [cardState, setCardState] = useState(true)

    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm({
        defaultValues: {
            cardholder: `${cardArray[0]?.cardholder}`
        },
    })

    // watches cardNumber iput
    const cardNumberProcess = watch("cardNumber")
    const ccvProcess = watch("ccv")


    // handle submit on form
    const onSubmit = (data) => {
        if (cardArray.length < 4) {
            dispatch(addNewUser(data))
        } else {
            console.log("i just can't")
        }

        reset()
    }

    const flipCard = () => {
        if (cardState) {
            return (
                <div className="card" onClick={()=>{setCardState(prevState => !prevState)}}>
                    <h3>{cardArray[0]?.cardholder}</h3>
                    <p>{cardNumberProcess ? cardNumberProcess.toString().replace(/(\d{4})(?=\d)/g, '$1 ') : "xxxx xxxx xxxx xxxx"}</p>
                    <p></p>
                </div>
            )
        } else {
            return (
                <div className="card cardBack" onClick={()=>{setCardState(prevState => !prevState)}}>
                    <h3>Back of card</h3>
                    <p><small>CCV</small> {ccvProcess ? ccvProcess : "xxx"}</p>
                </div>
            )
        }
    }

    return (
        <div>
            {flipCard()}

            {/*------- form ------*/}
            {/*------- fix validation for ------*/}
            <div>
                <form className="flexColumn" onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="cardNumber">
                        <span>Card number: </span><br />
                        <input id="cardNumber" type="number" {...register("cardNumber", { required: "required field, numbers only", minLength: { value: 16, message: "should be 16 characters, numbers only" }, maxLength: { value: 16, message: "should be 16 characters, numbers only" }, pattern: { value: /^[0-9]\d*$/, message: "only numbers please" } })} /><br />
                        {errors.cardNumber && <span className="error">{errors.cardNumber.message}</span>}
                    </label>

                    <label htmlFor="cardholder">
                        <span>Card holder: </span><br />
                        <input id="cardholder" {...register("cardholder", { required: "required field" })} readOnly /><br />
                        {errors.cardholder && <span className="error">{errors.cardholder.message}</span>}
                    </label>

                    <label htmlFor="expireMonth">
                        <span>Expire date: </span><br />
                        <input id="expireMonth" type="number" placeholder="month"{...register("expireMonth", { required: "required field", max: {value: 12, message:"enter a correct month"},minLength: { value: 2, message: "please enter a two digit number" }, maxLength: { value: 2, message: "please enter a two digit number" }, pattern: /^[0-9]\d*$/ })} /><br />
                        {errors.expireMonth && <span className="error">{errors.expireMonth.message}</span>}
                    </label>

                    <label htmlFor="expireYear">
                        <input id="expireYear" type="number" placeholder="year" {...register("expireYear", { required: "required field", minLength: { value: 2, message: "please enter a two digit number" }, maxLength: { value: 2, message: "please enter a two digit number" }, pattern: /^[0-9]\d*$/ })} /><br />
                        {errors.expireYear && <span className="error">{errors.expireYear.message}</span>}
                    </label>

                    <label htmlFor="ccv">
                        <span>CCV: </span><br />
                        <input id="ccv" type="number" {...register("ccv", { required: "required field", minLength: { value: 3, message: "please enter a three digit number" }, maxLength: { value: 3, message: "please enter a three digit number" }, pattern: /^[0-9]\d*$/ })} /><br />
                        {errors.ccv && <span className="error">{errors.ccv.message}</span>}
                    </label>

                    <label htmlFor="vendor">
                        <span>Vendor: </span><br />
                        <select id="vendor" {...register("vendor", { required: "this field is required" })} >
                            <option value="bank1">bank1</option>
                            <option value="bank2">bank2</option>
                            <option value="bank3">bank3</option>
                        </select>
                    </label>

                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Addcard;