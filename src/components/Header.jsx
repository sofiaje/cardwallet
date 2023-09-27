import { Link } from "react-router-dom";

const Header = () => {
    return ( 
        <header>
            <Link to="/cards"><h1>EVE-Wallet</h1></Link>
        </header>
     );
}
 
export default Header;