import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";



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
            state.cardArray.push(action.payload) 
        },
        removeCard: (state, action) => {
            state.cardArray.splice(action.payload, 1)
        },
        activateCard: (state, action) => {
            state.cardArray.map(x => x.isActive = false)
            state.cardArray[action.payload].isActive = true
        }
    },
    extraReducers: {
        [getCardPerson.fulfilled]: (state, action) => {
            state.status = "success"
            const { name } = action.payload?.results[0]
            const person = {
                cardholder: `${name.first.toUpperCase()} ${name.last.toUpperCase()}`,
                cardNumber: "8989458765871298",
                expireYear: 28,
                expireMonth: 12,
                isActive: true,
                vendor: "bank3"
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

export const { addNewUser, removeCard, activateCard } = cardSlice.actions;
export default cardSlice.reducer;