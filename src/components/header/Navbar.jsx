
import Cartwidget from "./Cartwidget";
/* import Button from "../Button"; */
import { Link , NavLink} from "react-router-dom";


const Navbar = ({isInHeader}) => {

    if (isInHeader){
        return (
          <nav className="navbar">
            <ul>
              <NavLink className="links" to="/nosotros">Sobre Nosotros</NavLink>
              <NavLink className="links" to="/category">Servicios Disponibles</NavLink>
              <NavLink className="links" to="/registro">Registrate</NavLink>
              <NavLink className="links" to="contacto">Contacto</NavLink>
            </ul>

            <Link to="/cart"><Cartwidget/></Link>

            {/* <div style={{ display: "flex" }}>
                <Button style={{ marginRight: "10px" }} text="Login" />
            </div> */}
          </nav>
        );
    }
    else{
    return (
        <nav className="footer">
            <h1>
              <Link className="links" to="/">GO GAUCHO</Link> 
            </h1>
            <ul>
                <Link className="links" to="/">Instagram</Link>
                <Link className="links" to="/">Facebook</Link>
            </ul>
        </nav>
    );
};
};

export default Navbar;