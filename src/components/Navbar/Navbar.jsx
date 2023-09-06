import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <header className={styles.navbar}>
      <div className={styles['logo-container']}>Logo Here</div>
      <div className={styles['nav-btns']}>
        <Link to="home">
          <button>Home</button>
        </Link>
        <Link to="shop">
          <button>Shop</button>
        </Link>
        <Link to="cart">
          <button>Cart</button>
        </Link>
      </div>
    </header>
  );
}
