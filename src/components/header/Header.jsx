import Navbar from "../header/Navbar";

const Header = () => {
    return (
      <header>
        <img className="imagenLogo" src="logo.png" alt="" />
        <Navbar isInHeader={true} />
      </header>
    );
};

export default Header;
