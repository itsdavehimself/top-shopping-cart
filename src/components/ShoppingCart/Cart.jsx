import styles from './Cart.module.css';
import CartItem from './CartItem';
import { useOutletContext } from 'react-router-dom';

export default function Cart() {
  const [addToCart, cart] = useOutletContext();
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
          <div className={styles['sub-total']}>$3897.97</div>
        </div>
        <div className={styles.delivery}>
          <div className={styles['shipping-title']}>Shipping</div>
          <div className={styles.free}>FREE</div>
        </div>
        <div className={styles['total-line-container']}>
          <div className={styles['total-title']}>Total</div>
          <div className={styles.total}>$3897.99</div>
        </div>
        <div className={styles['checkout-btn-container']}>
          <button className={styles['checkout-btn']}>CHECKOUT</button>
        </div>
      </div>
    </div>
  );
}
