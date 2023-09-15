import { configureStore } from "@reduxjs/toolkit";
import cardSlice from "../features/cardSlice";

const store = configureStore({
    reducer: {
        cardArray: cardSlice
    }
})

export default store;