import styles from './ShopPage.module.css';

export default function ShoppingPage() {
  return (
    <>
      <div className={styles.banner}>GAME SHOP</div>
      <div className={styles.shop}>
        <div className={styles.categories}>
          <h3>Categories</h3>
          <p>Gaming Computers</p>
          <p>Gaming Monitors</p>
          <p>PC Accessories</p>
          <p>PC Components</p>
        </div>
        <div className={styles.catalogue}>
          <div className={styles['product-card']}>Item</div>
          <div className={styles['product-card']}>Item</div>
          <div className={styles['product-card']}>Item</div>
          <div className={styles['product-card']}>Item</div>
          <div className={styles['product-card']}>Item</div>
          <div className={styles['product-card']}>Item</div>
          <div className={styles['product-card']}>Item</div>
          <div className={styles['product-card']}>Item</div>
          <div className={styles['product-card']}>Item</div>
        </div>
      </div>
    </>
  );
}
