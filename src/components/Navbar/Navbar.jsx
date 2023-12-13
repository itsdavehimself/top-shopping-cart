import { Link, useLocation } from 'react-router-dom';
import styles from './Navbar.module.css';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export default function Navbar({ cart }) {
  const location = useLocation();
  const isShopPage = location.pathname === '/shop';
  const [cartQuantity, setCartQuantity] = useState(0);

  useEffect(() => {
    const navbar = document.querySelector(`.${styles.navbar}`);
    const btns = document.querySelectorAll(`.${styles.btn}`);
    const logo = document.querySelector(`.${styles.logo}`);

    const calculateQuantity = () => {
      const totalQuantity = cart.reduce(
        (total, item) => total + item.quantity,
        0,
      );
      setCartQuantity(totalQuantity);
    };

    let lastScrollY = window.scrollY;

    function handleScroll() {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        navbar.style.transform = 'translateY(-100%)';
      } else {
        navbar.style.transform = 'translateY(0)';
      }

      if (currentScrollY >= 300) {
        navbar.style.backgroundColor = 'rgba(240, 240, 240, .2)';
        navbar.style.backdropFilter = 'blur(1px)';
        navbar.style.borderBottom = '#cacaca solid 1px';
        if (isShopPage) {
          btns.forEach((btn) => {
            btn.style.color = '#212227';
          });
          logo.style.color = '#212227';
        }
      } else if (currentScrollY >= 1 && currentScrollY < 299) {
        navbar.style.backgroundColor = 'rgba(240, 240, 240, .2)';
        navbar.style.backdropFilter = 'blur(1px)';
        navbar.style.borderBottom = '#cacaca solid 1px';
        if (isShopPage) {
          btns.forEach((btn) => {
            btn.style.color = '#fff';
          });
          logo.style.color = '#fff';
        }
      } else {
        navbar.style.backgroundColor = 'transparent';
        navbar.style.borderBottom = 'rgba(255, 255, 255, 0) solid 1px';
        navbar.style.backdropFilter = 'blur(0px)';
        if (isShopPage) {
          btns.forEach((btn) => {
            btn.style.color = '#fff';
          });
        }
      }

      lastScrollY = currentScrollY;
    }

    window.addEventListener('scroll', handleScroll);

    calculateQuantity();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location, isShopPage, cart]);

  useEffect(() => {
    const btns = document.querySelectorAll(`.${styles.btn}`);
    const logo = document.querySelector(`.${styles.logo}`);

    if (isShopPage) {
      btns.forEach((btn) => {
        btn.style.color = '#fff';
      });
      logo.style.color = '#fff';
    } else {
      btns.forEach((btn) => {
        btn.style.color = '#212227';
      });
      logo.style.color = '#212227';
    }
  }, [isShopPage]);
  return (
    <header className={styles.navbar}>
      <Link to="/home">
        <div className={styles.logo}>1337MARKET</div>
      </Link>
      <div className={styles['nav-btns']}>
        <Link to="home">
          <button className={styles.btn}>Home</button>
        </Link>
        <Link to="shop">
          <button className={styles.btn}>Shop</button>
        </Link>
        <Link to="cart">
          <button className={styles.btn}>Cart ({cartQuantity})</button>
        </Link>
      </div>
    </header>
  );
}

Navbar.propTypes = {
  cart: PropTypes.array,
};
