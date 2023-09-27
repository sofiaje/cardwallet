import { Outlet, useNavigate} from "react-router-dom";
import { useEffect } from "react";
import { getCardPerson } from "../features/card/cardSlice"
import { getUserPreference, setTheme } from "../features/mode/modeSlice";
import { useDispatch, useSelector } from "react-redux";

import Header from "../components/Header";

const Root = () => {
    const { darkmode } = useSelector((state) => state.darkmode);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCardPerson())
        dispatch(getUserPreference())
        navigate("/cards")
    }, [])

    useEffect(() => {
        dispatch(setTheme())
    }, [darkmode])
    
    return ( 
        <div className="pageWrapper">
            <Header />
            <main>
                <Outlet />
            </main>
        </div>
     );
}
 
export default Root;