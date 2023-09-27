import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";

export const getCardPerson = createAsyncThunk("cardSlice/getCardPerson", async () => {
    let res = await fetch("https://randomuser.me/api/")
    let data = await res.json()
    return data
})

const cardSlice = createSlice({
    name: "cardSlice",
    initialState: {
        cardArray: [],
        status: "",
    },
    reducers: {
        addNewUser: (state, action) => {
            state.cardArray.push({ ...action.payload, id: nanoid() }) 
        },
        removeCard: (state, action) => {
            state.cardArray.map((x, i) => {
                {(action.payload === x.id) && state.cardArray.splice(i, 1)}
            })
        },
        activateCard: (state, action) => {
            state.cardArray.map(x => {
                {(action.payload === x.id) ? (x.isActive = true) : (x.isActive = false) }
            })
        }
    },
    extraReducers: {
        [getCardPerson.fulfilled]: (state, action) => {
            state.status = "success"
            const { name } = action.payload?.results[0]
            const person = {
                cardholder: `${name.first.toUpperCase()} ${name.last.toUpperCase()}`,
                cardNumber: "8989458765871298",
                expireMonth: 12,
                expireYear: 28,
                isActive: true,
                vendor: "bank3", 
                id: nanoid()
            }
            state.cardArray.push(person)
        },
        [getCardPerson.pending]: (state, action) => {
            state.status = "pending"
        },
        [getCardPerson.rejected]: (state, action) => {
            state.status = "failure"
            // state.error = action.error.message;
        }
    }
})

export const { addNewUser, removeCard, activateCard } = cardSlice.actions;
export default cardSlice.reducer;