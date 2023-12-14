import styles from './ItemCards.module.css';
import PropTypes from 'prop-types';
import { useOutletContext } from 'react-router-dom';
import { Rating, ThinStar } from '@smastrom/react-rating';
import { useState } from 'react';

const myStyles = {
  itemShapes: ThinStar,
  activeFillColor: '#ffb700',
  inactiveFillColor: '#fbf1a9',
};

export default function ItemCard({
  image,
  product,
  ratingAvg,
  ratingCount,
  price,
  sku,
}) {
  const [addToCart] = useOutletContext();
  const [rating, setRating] = useState(ratingAvg);
  const [isAddedNotificationVisible, setIsAddedNotificationVisible] =
    useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const addItemToCart = () => {
    if (isButtonDisabled) {
      return;
    }

    const itemValues = {
      image,
      product,
      price,
      sku,
    };

    addToCart(itemValues);
    setIsAddedNotificationVisible(true);
    setIsButtonDisabled(true);

    setTimeout(() => {
      setIsAddedNotificationVisible(false);
      setIsButtonDisabled(false);
    }, 2000);
  };

  return (
    <div className={styles.card}>
      <div className={styles.img}>
        <img src={image}></img>
      </div>
      <div className={styles['info']}>
        <p className={styles['product-name']}>{product}</p>
        <div className={styles.rating}>
          <Rating
            style={{ maxWidth: 120 }}
            value={rating}
            onChange={setRating}
            readOnly
            itemStyles={myStyles}
          />
          ({ratingCount || 0})
        </div>
        <p className={styles.price}>${price}</p>
        <button
          className={`${styles.btn} ${
            isAddedNotificationVisible ? styles['btn-added'] : ''
          }`}
          onClick={addItemToCart}
          disabled={isButtonDisabled}
        >
          {isAddedNotificationVisible ? 'ITEM ADDED TO CART' : 'ADD TO CART'}
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
  isAddedNotificationVisible: PropTypes.bool,
  setIsAddedNotificationVisible: PropTypes.func,
};
