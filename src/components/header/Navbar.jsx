
import Cartwidget from "./Cartwidget";
import Button from "../Button";
import {AiOutlineShoppingCart} from "react-icons/ai";


const Navbar = ({isInHeader}) => {

    if (isInHeader){
        return (
          <nav className="navbar">
            <ul>
              <li>Sobre Nosotros</li>
              <li>Servicios Disponibles</li>
              <li>Registrate</li>
              <li>Contacto</li>
            </ul>
            <div style={{display:'flex'}}> 
              <Button style={{marginRight:'10px'}} text="Login" />
              <Cartwidget/>
            </div>
          </nav>
        );
    }
    else{
    return (
        <nav className="footer">
            <h1>GO GAUCHO</h1>
            <ul>
                <li>Instagram</li>
                <li>Facebook</li>
            </ul>
        </nav>
    );
};
};

export default Navbar;