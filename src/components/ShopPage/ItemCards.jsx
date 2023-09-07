import styles from './ItemCards.module.css';

export default function ItemCard() {
  return (
    <div className={styles.card}>
      <div className={styles.img}></div>
      <div className={styles['info']}>
        <p className={styles['product-name']}>
          Brand and Product Name Goes in this Space
        </p>
        <div className={styles.rating}>Rating Goes Here</div>
        <p className={styles.price}>$159.99</p>
      </div>
    </div>
  );
}
