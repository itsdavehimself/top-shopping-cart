import { Link, useLocation } from 'react-router-dom';
import styles from './Navbar.module.css';
import { useEffect } from 'react';

export default function Navbar() {
  const location = useLocation();
  const isShopPage = location.pathname === '/shop';

  useEffect(() => {
    const navbar = document.querySelector(`.${styles.navbar}`);
    let lastScrollY = window.scrollY;

    function handleScroll() {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        navbar.style.transform = 'translateY(-100%)';
      } else {
        navbar.style.transform = 'translateY(0)';
      }

      if (currentScrollY >= 1) {
        navbar.style.backgroundColor = 'rgba(240, 240, 240, .2)';
        navbar.style.backdropFilter = 'blur(1px)';
        navbar.style.borderBottom = '#dadada solid 1px';
      } else {
        navbar.style.backgroundColor = 'transparent';
        navbar.style.borderBottom = 'rgba(255, 255, 255, 0) solid 1px';
        navbar.style.backdropFilter = 'blur(0px)';
      }

      lastScrollY = currentScrollY;
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={styles.navbar}>
      <div className={styles['logo-container']}>Logo Here</div>
      <div className={styles['nav-btns']}>
        <Link to="home">
          <button className={styles.btn}>Home</button>
        </Link>
        <Link to="shop">
          <button className={styles.btn}>Shop</button>
        </Link>
        <Link to="cart">
          <button className={styles.btn}>Cart</button>
        </Link>
      </div>
    </header>
  );
}
