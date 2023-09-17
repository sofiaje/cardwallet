import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getCardPerson = createAsyncThunk("cardSlice/getCardPerson", async () => {
    let res = await fetch("https://randomuser.me/api/")
    let data = await res.json()
    console.log("getting person")
    return data
})
const cardSlice = createSlice({
    name: "cardSlice",
    initialState: {
        cardArray: [
            // { name: "sofia jespersen", cardNumber: 8989473612938212, isActive: false },
        ],
        status: "",
    },
    reducers: {
        addNewUser: (state, action) => {
            // tar emot ett object och pushar in i 
            state.cardArray.push(action.payload)
        },
        removeCard: (state, action) => {
            console.log("remove card")
        }
    },
    extraReducers: {
        [getCardPerson.fulfilled]: (state, action) => {
            state.status = "success"
            const { name } = action.payload?.results[0]
            const person = {
                cardholder: `${name.first.toUpperCase()} ${name.last.toUpperCase()}`,
                cardNumber: 8989458765871298,
            }
            state.cardArray.push(person)
        },
        [getCardPerson.pending]: (state, action) => {
            state.status = "pending"
        },
        [getCardPerson.rejected]: (state, action) => {
            state.status = "rejected"
        }
    }
})

export const { addNewUser, removeCard } = cardSlice.actions;
export default cardSlice.reducer;