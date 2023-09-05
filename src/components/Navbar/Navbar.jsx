import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className="logo-container">Logo Here</div>
      <div className="nav-btns">
        <Link to="home">
          <button>Home</button>
        </Link>
        <Link to="shopping">
          <button>Shopping</button>
        </Link>
        <Link to="cart">
          <button>Cart</button>
        </Link>
      </div>
    </div>
  );
}
