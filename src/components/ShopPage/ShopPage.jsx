import styles from './ShopPage.module.css';
import LoadingPage from '../Loading/Loading';
import ItemCard from './ItemCards';
import FetchAPI from '../API/FetchAPI';
import ErrorPage from '../ErrorPage/ErrorPage';

export default function ShoppingPage() {
  const { data, loading, error } = FetchAPI(
    'https://api.bestbuy.com/v1/products((search=Gaming&search=Desktops))?apiKey=qhqws47nyvgze2mq3qx4jadt&sort=customerReviewCount.asc&show=name,customerReviewAverage,customerReviewCount,image,regularPrice,sku&pageSize=24&format=json',
  );

  if (loading) {
    return (
      <div>
        <LoadingPage />
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <ErrorPage />
      </div>
    );
  }
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
          {data.products.map((product) => (
            <ItemCard
              key={product.sku}
              image={product.image}
              product={product.name}
              rating={product.customerReviewAverage}
              price={product.regularPrice}
            />
          ))}
        </div>
      </div>
    </>
  );
}
