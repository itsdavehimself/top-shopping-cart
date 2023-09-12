import styles from './ItemCards.module.css';
import PropTypes from 'prop-types';
import { useOutletContext } from 'react-router-dom';

export default function ItemCard({
  image,
  product,
  ratingAvg,
  ratingCount,
  price,
  sku,
}) {
  const [addToCart] = useOutletContext();

  const addItemToCart = () => {
    const itemValues = {
      image,
      product,
      price,
      sku,
    };
    addToCart(itemValues);
  };

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
        <button className={styles.btn} onClick={addItemToCart}>
          ADD TO CART
        </button>
      </div>
    </div>
  );
}

ItemCard.propTypes = {
  image: PropTypes.string.isRequired,
  product: PropTypes.string.isRequired,
  ratingAvg: PropTypes.number,
  ratingCount: PropTypes.number,
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  sku: PropTypes.number,
};
