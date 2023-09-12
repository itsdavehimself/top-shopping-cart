import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import './App.css';
import { Outlet } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import { useState } from 'react';

export default function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    const existingItem = cart.find((cartItem) => cartItem.sku === item.sku);

    if (existingItem) {
      setCart(
        cart.map((cartItem) =>
          cartItem.sku === item.sku
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem,
        ),
      );
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Outlet context={[addToCart, cart]} />
      <Footer />
    </>
  );
}
