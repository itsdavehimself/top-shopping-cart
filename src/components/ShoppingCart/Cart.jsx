import styles from './Cart.module.css';
import CartItem from './CartItem';
import { useOutletContext } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ConfettiExplosion from 'react-confetti-explosion';

export default function Cart() {
  const [addToCart, removeFromCart, cart] = useOutletContext();
  const [total, setTotal] = useState(0);
  const [isExploding, setIsExploding] = useState(false);

  useEffect(() => {
    const itemTotals = cart.map(
      (cartItem) => cartItem.price * cartItem.quantity,
    );
    const total = itemTotals.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0,
    );
    setTotal(total.toFixed(2));
  }, [cart]);

  const handleCheckoutClick = () => {
    setIsExploding(true);
    setTimeout(() => {
      setIsExploding(false);
    }, 2000);
  };

  return (
    <div className={styles['cart-container']}>
      <div className={styles.cart}>
        <h2 className={styles['cart-title']}>Your loot</h2>
        {cart.length > 0 ? (
          cart.map((cartItem) => (
            <CartItem
              key={cartItem.sku}
              product={cartItem.product}
              price={cartItem.price}
              image={cartItem.image}
              sku={cartItem.sku}
            />
          ))
        ) : (
          <div>You have no items in your cart.</div>
        )}
      </div>
      <div className={styles['total-container']}>
        <h2 className={styles['cart-title']}>Loot totals</h2>
        <div className={styles['sub-total-container']}>
          <div className={styles['sub-total-title']}>Sub-total</div>
          <div className={styles['sub-total']}>${total}</div>
        </div>
        <div className={styles.delivery}>
          <div className={styles['shipping-title']}>Shipping</div>
          <div className={styles.free}>FREE</div>
        </div>
        <div className={styles['total-line-container']}>
          <div className={styles['total-title']}>Total</div>
          <div className={styles.total}>${total}</div>
        </div>
        <div className={styles['checkout-btn-container']}>
          <button
            className={styles['checkout-btn']}
            onClick={handleCheckoutClick}
          >
            CHECKOUT
          </button>
          <div className={styles['confetti-container']}>
            {isExploding && <ConfettiExplosion />}
          </div>
        </div>
      </div>
    </div>
  );
}
