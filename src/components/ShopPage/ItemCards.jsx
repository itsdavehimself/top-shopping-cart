import styles from './ItemCards.module.css';
import PropTypes from 'prop-types';

export default function ItemCard({
  image,
  product = 'Placeholder Product Title For Development Purposes',
  rating = '5.0',
  price = '159.99',
}) {
  return (
    <div className={styles.card}>
      <div className={styles.img}>
        <img src={image}></img>
      </div>
      <div className={styles['info']}>
        <p className={styles['product-name']}>{product}</p>
        <div className={styles.rating}>{rating}</div>
        <p className={styles.price}>${price}</p>
        <button className={styles.btn}>ADD TO CART</button>
      </div>
    </div>
  );
}

ItemCard.propTypes = {
  image: PropTypes.string.isRequired,
  product: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};
