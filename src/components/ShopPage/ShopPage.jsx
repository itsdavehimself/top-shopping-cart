import styles from './ShopPage.module.css';
import LoadingPage from '../Loading/Loading';
import ItemCard from './ItemCards';
import FetchAPI from '../API/FetchAPI';
import ErrorPage from '../ErrorPage/ErrorPage';
import { useState, useEffect } from 'react';
import Pagination from '../Pagination/Pagination';
export default function ShoppingPage() {
  const [page, setPage] = useState(1);
  const { data, loading, error } = FetchAPI(
    `https://api.bestbuy.com/v1/products((search=Gaming&search=Desktops)|(search=Gaming&search=Monitor)|(search=Gaming&search=Laptops)|(search=graphic&search=card))?apiKey=qhqws47nyvgze2mq3qx4jadt&sort=bestSellingRank.dsc&show=name,customerReviewAverage,customerReviewCount,image,regularPrice,sku&pageSize=24&page=${page}&format=json`,
  );

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [page]);

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
            <p>Gaming Laptops</p>
            <p>Graphic Cards</p>
          </div>
        </div>
        <div className={styles.products}>
          <div className={styles.total}>{data.total} items</div>
          <div className={styles.catalog}>
            {data.products.map((product) => (
              <ItemCard
                key={product.sku}
                image={product.image}
                product={product.name}
                ratingAvg={product.customerReviewAverage}
                ratingCount={product.customerReviewCount}
                price={product.regularPrice}
              />
            ))}
          </div>
          <div className={styles['page-component']}>
            <Pagination
              currentPage={page}
              totalPages={Math.ceil(data.total / 24)}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </div>
    </>
  );
}
