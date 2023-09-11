import styles from './CartItem.module.css';

export default function CartItem() {
  return (
    <div className={styles['item-card']}>
      <div className={styles['image-container']}>
        <div className={styles.image}></div>
      </div>
      <div className={styles['item-info']}>
        <div className={styles['item-price']}>$1299.99</div>
        <div className={styles['item-name']}>
          Product name goes here in this spot
        </div>
        <div className={styles['quantity-container']}>
          Quantity:{' '}
          <select className={styles['item-quantity']}>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
        <div className={styles['remove-container']}>
          <button className={styles.remove}>Remove item</button>
        </div>
      </div>
    </div>
  );
}
