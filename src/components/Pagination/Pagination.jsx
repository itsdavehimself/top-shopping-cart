import PropTypes from 'prop-types';
import styles from './Pagination.module.css';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const minPage = Math.max(1, currentPage - 2);
  const maxPage = Math.min(totalPages, currentPage + 2);

  const pages = Array.from(
    { length: maxPage - minPage + 1 },
    (_, index) => minPage + index,
  );

  return (
    <div className={styles.pagination}>
      {minPage > 1 && (
        <button className={styles['page-btn']} onClick={() => onPageChange(1)}>
          1
        </button>
      )}
      {minPage > 2 && <span className={styles.ellipsis}>...</span>}
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={currentPage === page ? styles.active : styles['page-btn']}
        >
          {page}
        </button>
      ))}
      {maxPage < totalPages - 1 && <span className={styles.ellipsis}>...</span>}
      {maxPage < totalPages && (
        <button
          className={styles['page-btn']}
          onClick={() => onPageChange(totalPages)}
        >
          {totalPages}
        </button>
      )}
    </div>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.string,
  totalPages: PropTypes.string,
  onPageChange: PropTypes.func,
};

export default Pagination;
