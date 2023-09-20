import { Outlet, useNavigate} from "react-router-dom";
import { useEffect } from "react";
import { getCardPerson } from "../features/cardSlice"
import { useSelector, useDispatch } from "react-redux";

import Header from "../components/Header";
import Footer from "../components/Footer";

const Root = () => {
    const { status } = useSelector((state) => state.cardArray);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCardPerson())
        navigate("/cards")
    }, [])
    
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