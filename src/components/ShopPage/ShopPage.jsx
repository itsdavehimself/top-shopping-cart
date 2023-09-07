import styles from './ShopPage.module.css';
import ItemCard from './ItemCards';

export default function ShoppingPage() {
  return (
    <>
      <div className={styles.banner}>GAME SHOP</div>
      <div className={styles.shop}>
        <div className={styles.categories}>
          <h3 className={styles['category-title']}>Categories</h3>
          <div className={styles['category-links']}>
            <p>Gaming Computers</p>
            <p>Gaming Monitors</p>
            <p>PC Accessories</p>
            <p>PC Components</p>
          </div>
        </div>
        <div className={styles.catalogue}>
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
        </div>
      </div>
    </>
  );
}
