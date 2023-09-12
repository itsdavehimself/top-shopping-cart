import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import './App.css';
import { Outlet } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import { useState } from 'react';
import '@smastrom/react-rating/style.css';

export default function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    const existingItem = cart.find((cartItem) => cartItem.sku === item.sku);

    if (existingItem && existingItem.quantity < 5) {
      setCart(
        cart.map((cartItem) =>
          cartItem.sku === item.sku
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem,
        ),
      );
    } else if (existingItem && existingItem.quantity === 5) {
      return;
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (sku) => {
    const index = cart.findIndex((item) => {
      return item.sku === sku;
    });
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
  };

  const updateQuantity = (sku, newQuantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.sku === sku ? { ...item, quantity: newQuantity } : item,
      ),
    );
  };

  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Outlet context={[addToCart, removeFromCart, cart, updateQuantity]} />
      <Footer />
    </>
  );
}
