import { configureStore } from "@reduxjs/toolkit";
import cardSlice from "../features/card/cardSlice";
import modeSlice from "../features/mode/modeSlice"

const store = configureStore({
    reducer: {
        cardArray: cardSlice,
        darkmode: modeSlice
    }
})

export default store;