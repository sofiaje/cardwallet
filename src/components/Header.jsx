import { NavLink } from "react-router-dom";

const Header = () => {
    return ( 
        <header>
            <h1>EVE-Wallet</h1>
            <nav>
                <NavLink to="/cards">MY CARDS</NavLink>
                <NavLink to="/addcard">ADD CARDS</NavLink>
            </nav>
        </header>
     );
}
 
export default Header;