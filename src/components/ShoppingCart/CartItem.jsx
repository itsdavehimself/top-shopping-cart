import styles from './CartItem.module.css';
import PropTypes from 'prop-types';

export default function CartItem({ product, price, image }) {
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

CartItem.propTypes = {
  product: PropTypes.string,
  price: PropTypes.string,
  image: PropTypes.string,
};
