import styles from './Cart.module.css';
import CartItem from './CartItem';

export default function Cart() {
  return (
    <div className={styles['cart-container']}>
      <div className={styles.cart}>
        <h2 className={styles['cart-title']}>Your loot</h2>
        <CartItem />
        <CartItem />
        <CartItem />
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
