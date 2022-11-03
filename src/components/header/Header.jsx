import Navbar from "../header/Navbar";
import { Link } from "react-router-dom";

const Header = () => {
    return (
      <header>
        <Link to="/">
           <img className="imagenLogo" src="logo.png" alt=""/>
        </Link>
      
        <Navbar isInHeader={true} />
      </header>
    );
};

export default Header;
