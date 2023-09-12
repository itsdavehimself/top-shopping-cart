import styles from './CartItem.module.css';
import PropTypes from 'prop-types';
import { useOutletContext } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function CartItem({ product, price, image, sku }) {
  const [addToCart, removeFromCart, cart, updateQuantity] = useOutletContext();
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  useEffect(() => {
    const cartItem = cart.find((item) => item.sku === sku);
    if (cartItem) {
      setSelectedQuantity(cartItem.quantity);
    }
  }, [cart, sku]);

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value);
    setSelectedQuantity(newQuantity);
    updateQuantity(sku, newQuantity);
    console.log(cart);
  };

  return (
    <div className={styles['item-card']}>
      <div className={styles['image-container']}>
        <div className={styles.image}>
          <img src={image}></img>
        </div>
      </div>
      <div className={styles['item-info']}>
        <div className={styles['item-price']}>${price}</div>
        <div className={styles['item-name']}>{product}</div>
        <div className={styles['quantity-container']}>
          Quantity:{' '}
          <select
            className={styles['item-quantity']}
            value={selectedQuantity}
            onChange={handleQuantityChange}
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
          {selectedQuantity === 5 && (
            <span className={styles.limit}>Limit 5 per order</span>
          )}
        </div>
        <div className={styles['remove-container']}>
          <button className={styles.remove} onClick={() => removeFromCart(sku)}>
            Remove item
          </button>
        </div>
      </div>
    </div>
  );
}

CartItem.propTypes = {
  product: PropTypes.string,
  price: PropTypes.number,
  image: PropTypes.string,
  sku: PropTypes.number,
};
