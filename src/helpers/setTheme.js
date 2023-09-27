import {  useSelector } from "react-redux";

export const setTheme = () => {
    const { darkmode } = useSelector((state) => state.darkmode);

    if (darkmode === true) {
        document.documentElement.setAttribute("data-theme", "dark");
    } else {
        document.documentElement.setAttribute("data-theme", "light"); 
   }
}

 