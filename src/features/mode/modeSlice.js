import { createSlice } from "@reduxjs/toolkit";

const modeSlice = createSlice({
    name: "darkmode",
    initialState: {
        darkmode: null
    },
    reducers: {
        getUserPreference: (state) => {
            if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
                state.darkmode = true
            }
        },
        toggleDarkmode: (state) => {
            state.darkmode = !state.darkmode
        },
        setTheme: (state) => {
            if (state.darkmode === true) {
                document.documentElement.setAttribute("data-theme", "dark");
            } else {
                document.documentElement.setAttribute("data-theme", "light"); 
           }
        }
    }
})

export const { toggleDarkmode, getUserPreference, setTheme } = modeSlice.actions;
export default modeSlice.reducer;