import { NavLink } from "react-router-dom";

const Header = () => {
    return ( 
        <header className="flex">
            <h2>My bank</h2>
            <nav>
                <NavLink to="/">my cards</NavLink>
                <NavLink to="/addcard">add card</NavLink>

            </nav>
        </header>
     );
}
 
export default Header;