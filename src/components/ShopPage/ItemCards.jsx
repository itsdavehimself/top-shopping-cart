import styles from './ItemCards.module.css';
import PropTypes from 'prop-types';

export default function ItemCard({
  image,
  product = 'Placeholder Product Title For Development Purposes',
  ratingAvg = '5.0',
  ratingCount = '(2352)',
  price = '159.99',
}) {
  return (
    <div className={styles.card}>
      <div className={styles.img}>
        <img src={image}></img>
      </div>
      <div className={styles['info']}>
        <p className={styles['product-name']}>{product}</p>
        <div className={styles.rating}>
          User Rating: {ratingAvg} ({ratingCount})
        </div>
        <p className={styles.price}>${price}</p>
        <button className={styles.btn}>ADD TO CART</button>
      </div>
    </div>
  );
}

ItemCard.propTypes = {
  image: PropTypes.string.isRequired,
  product: PropTypes.string.isRequired,
  ratingAvg: PropTypes.string.isRequired,
  ratingCount: PropTypes.string.isRequired,
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};
