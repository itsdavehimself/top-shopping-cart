import styles from './ShopPage.module.css';
import LoadingPage from '../Loading/Loading';
import ItemCard from './ItemCards';
import FetchAPI from '../API/FetchAPI';
import ErrorPage from '../ErrorPage/ErrorPage';
import { useState, useEffect } from 'react';
import Pagination from '../Pagination/Pagination';
import { useOutletContext } from 'react-router-dom';
import { UseShopFilterContext } from '../../hooks/UseShopFilterContext';

export default function ShoppingPage() {
  const [addToCart] = useOutletContext();
  const [page, setPage] = useState(1);

  const { filter, dispatch } = UseShopFilterContext();

  const [sort, setSort] = useState('');

  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  const { data, loading, error } = FetchAPI(
    `https://api.bestbuy.com/v1/products(${filter})?apiKey=qhqws47nyvgze2mq3qx4jadt&sort=${sort}&show=name,customerReviewAverage,customerReviewCount,image,regularPrice,sku&pageSize=15&page=${page}&format=json`,
  );

  const handleSortChange = (e) => {
    setSort(e.target.value);
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  const changeFilter = (e) => {
    const newFilter = e.target.getAttribute('data-filter');
    dispatch({ type: 'SET_FILTER', payload: newFilter });
    setPage(1);
  };

  const handleFilterBtnClick = () => {
    setIsCategoryOpen((prevIsCategoryOpen) => !prevIsCategoryOpen);
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
          <div className={styles['sticky-div']}>
            <h3 className={styles['category-title']}>Categories</h3>
            <div className={styles['category-links']}>
              <button
                className={styles['category-btn']}
                data-filter="(search=Gaming&search=Desktops)"
                onClick={changeFilter}
              >
                Gaming Desktops
              </button>
              <button
                className={styles['category-btn']}
                data-filter="(search=Gaming&search=Monitors)"
                onClick={changeFilter}
              >
                Gaming Monitors
              </button>
              <button
                className={styles['category-btn']}
                data-filter="(search=Gaming&search=Laptops)"
                onClick={changeFilter}
              >
                Gaming Laptops
              </button>
              <button
                className={styles['category-btn']}
                data-filter="(search=Graphic&search=Cards)"
                onClick={changeFilter}
              >
                Graphic Cards
              </button>
              {filter !==
                '(search=Gaming&search=Desktops)|(search=Gaming&search=Monitor)|(search=Gaming&search=Laptops)|(search=graphic&search=card)' && (
                <button
                  className={styles['clear-filter-btn']}
                  data-filter="(search=Gaming&search=Desktops)|(search=Gaming&search=Monitor)|(search=Gaming&search=Laptops)|(search=graphic&search=card)"
                  onClick={changeFilter}
                >
                  X Clear Filter
                </button>
              )}
            </div>
          </div>
        </div>
        <div className={styles.products}>
          <div className={styles['catalog-header']}>
            <div className={styles.total}>{data.total} items</div>
            <div>
              Sort by:{' '}
              <select value={sort} onChange={handleSortChange}>
                <option value="bestSellingRank.dsc">Popularity</option>
                <option value="regularPrice.asc">Price low to high</option>
                <option value="regularPrice.dsc">Price high to low</option>
                <option value="name.asc">A - Z</option>
                <option value="name.dsc">Z - A</option>
              </select>
            </div>
          </div>
          <button
            className={styles['category-filter-btn']}
            onClick={handleFilterBtnClick}
          >
            {isCategoryOpen
              ? 'Hide Filter Categories'
              : 'Show Filter Categories'}
          </button>
          {isCategoryOpen && (
            <div className={styles['category-menu-small']}>
              <div className={styles['category-links']}>
                <button
                  className={styles['category-btn']}
                  data-filter="(search=Gaming&search=Desktops)"
                  onClick={changeFilter}
                >
                  Gaming Desktops
                </button>
                <button
                  className={styles['category-btn']}
                  data-filter="(search=Gaming&search=Monitors)"
                  onClick={changeFilter}
                >
                  Gaming Monitors
                </button>
                <button
                  className={styles['category-btn']}
                  data-filter="(search=Gaming&search=Laptops)"
                  onClick={changeFilter}
                >
                  Gaming Laptops
                </button>
                <button
                  className={styles['category-btn']}
                  data-filter="(search=Graphic&search=Cards)"
                  onClick={changeFilter}
                >
                  Graphic Cards
                </button>
              </div>
              {filter !==
                '(search=Gaming&search=Desktops)|(search=Gaming&search=Monitor)|(search=Gaming&search=Laptops)|(search=graphic&search=card)' && (
                <button
                  className={styles['clear-filter-btn']}
                  data-filter="(search=Gaming&search=Desktops)|(search=Gaming&search=Monitor)|(search=Gaming&search=Laptops)|(search=graphic&search=card)"
                  onClick={changeFilter}
                >
                  X Clear Filter
                </button>
              )}
            </div>
          )}
          <div className={styles.catalog}>
            {data.products.map((product) => (
              <ItemCard
                key={product.sku}
                image={product.image}
                product={product.name}
                ratingAvg={product.customerReviewAverage}
                ratingCount={product.customerReviewCount}
                price={product.regularPrice}
                sku={product.sku}
                addToCart={addToCart}
              />
            ))}
          </div>
          <div className={styles['page-component']}>
            <Pagination
              currentPage={page}
              totalPages={Math.ceil(data.total / 15)}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </div>
    </>
  );
}
