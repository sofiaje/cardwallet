import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form"
import { addNewUser } from "../features/cardSlice"
import { useState } from "react";
// import {changeCardNum} from "../features/cardSlice"

// import Form from "../features/Form"
// import ExampleCard from "../features/exampleCard";

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
            <div>
                <form className="flexColumn" onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="cardNumber">
                        <span>Card number: </span><br />
                        <input maxLength="16" {...register("cardNumber", { required: "this field is required", minLength: 16, maxLength: 16 })} /><br />
                        {errors.cardNumber && <span>Needs to be 16 characters</span>}
                    </label>

                    <label htmlFor="cardholder">
                        <span>Card holder: </span><br />
                        <input {...register("cardholder", { required: "this field is required" })} disabled />
                    </label>

                    <label htmlFor="expireMonth">
                        <span>Expire date: </span><br />
                        <input placeholder="month"{...register("expireMonth", { required: "this field is required", maxLength: 2 })} />
                    </label>

                    <label htmlFor="expireYear">
                        <input placeholder="year" {...register("expireYear", { required: "this field is required", maxLength: 2 })} />
                    </label>

                    <label htmlFor="ccv">
                        <span>CCV: </span><br />
                        <input {...register("ccv", { required: "this field is required" })} maxLength="3"/>
                    </label>

                    <label htmlFor="vendor">
                        <span>Vendor: </span><br />
                        <select {...register("vandor", { required: "this field is required" })} >
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