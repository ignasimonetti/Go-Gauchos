
import './App.css';
/* import "bootstrap/dist/css/bootstrap.min.css"; */
/* import '../src/style.scss'; */
import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/main/ItemDetailContainer';
import Cart from './components/cart/Cart';
import Form from './components/form/Form';
import CartProvider from './context/CartContext';


  const App = () => {
    return (
      <BrowserRouter>
        <CartProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Main greeting={"Bienvenidos al portal de servicios digitales"} numero={1}/>}/>
            <Route path="/detail/:idProd" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/checkout" element={<Form/>}/>
          </Routes>
        <Footer/>
      </CartProvider>
    </BrowserRouter>
  );
  };
export default App;

