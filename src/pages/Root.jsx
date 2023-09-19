import { Outlet } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";

import { getCardPerson } from "../features/cardSlice"
import { useDispatch } from "react-redux";


const Root = () => {
    
    const dispatch = useDispatch();
    dispatch(getCardPerson())

    return ( 
        <div className="pageWrapper">
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
     );
}
 
export default Root;