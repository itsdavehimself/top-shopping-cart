import { Link, useLocation } from 'react-router-dom';
import styles from './Navbar.module.css';
import { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faCartShopping,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';

export default function Navbar({ cart }) {
  const location = useLocation();
  const isShopPage = location.pathname === '/shop';
  const [cartQuantity, setCartQuantity] = useState(0);
  const hamburgerIcon = <FontAwesomeIcon icon={faBars} />;
  const cartIcon = <FontAwesomeIcon icon={faCartShopping} />;
  const xMark = <FontAwesomeIcon icon={faXmark} />;

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navbarRef = useRef(null);
  const homeBtnRef = useRef(null);
  const shopBtnRef = useRef(null);
  const cartBtnRef = useRef(null);
  const burgerBtnRef = useRef(null);
  const logoRef = useRef(null);

  const handleMenuClick = () => {
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
  };

  useEffect(() => {
    const navbar = navbarRef.current;
    const homeBtn = homeBtnRef.current;
    const shopBtn = shopBtnRef.current;
    const cartBtn = cartBtnRef.current;
    const burgerBtn = burgerBtnRef.current;
    const logo = logoRef.current;

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
          homeBtn.style.color = '#212227';
          shopBtn.style.color = '#212227';
          cartBtn.style.color = '#212227';
          burgerBtn.style.color = '#212227';
          logo.style.color = '#212227';
        }
      } else if (currentScrollY >= 1 && currentScrollY < 299) {
        navbar.style.backgroundColor = 'rgba(240, 240, 240, .2)';
        navbar.style.backdropFilter = 'blur(1px)';
        navbar.style.borderBottom = '#cacaca solid 1px';
        if (isShopPage) {
          homeBtn.style.color = '#fff';
          shopBtn.style.color = '#fff';
          cartBtn.style.color = '#fff';
          burgerBtn.style.color = '#fff';
          logo.style.color = '#fff';
        }
      } else {
        navbar.style.backgroundColor = 'transparent';
        navbar.style.borderBottom = 'rgba(255, 255, 255, 0) solid 1px';
        navbar.style.backdropFilter = 'blur(0px)';
        if (isShopPage) {
          homeBtn.style.color = '#fff';
          shopBtn.style.color = '#fff';
          cartBtn.style.color = '#fff';
          burgerBtn.style.color = '#fff';
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
    const homeBtn = homeBtnRef.current;
    const shopBtn = shopBtnRef.current;
    const cartBtn = cartBtnRef.current;
    const burgerBtn = burgerBtnRef.current;
    const logo = logoRef.current;

    if (isShopPage) {
      homeBtn.style.color = '#fff';
      shopBtn.style.color = '#fff';
      cartBtn.style.color = '#fff';
      burgerBtn.style.color = '#fff';
      logo.style.color = '#fff';
    } else {
      homeBtn.style.color = '#212227';
      shopBtn.style.color = '#212227';
      cartBtn.style.color = '#212227';
      burgerBtn.style.color = '#212227';
      logo.style.color = '#212227';
    }
  }, [isShopPage]);
  return (
    <nav className={styles.navbar} ref={navbarRef}>
      <div className={styles['navbar-container']}>
        <div className={styles['logo-container']}>
          <Link to="/home">
            <div className={styles.logo} ref={logoRef}>
              1337MARKET
            </div>
          </Link>
        </div>
        <div className={styles['btns-container']}>
          <div className={styles['nav-btns']}>
            <Link to="home">
              <button className={styles.btn} ref={homeBtnRef}>
                Home
              </button>
            </Link>
            <Link to="shop">
              <button className={styles.btn} ref={shopBtnRef}>
                Shop
              </button>
            </Link>
            <Link to="cart">
              <button className={styles.btn} ref={cartBtnRef}>
                {cartIcon} {cartQuantity > 0 ? cartQuantity : null}
              </button>
            </Link>
          </div>
        </div>
      </div>
      <button
        className={styles['hamburger-btn']}
        ref={burgerBtnRef}
        onClick={handleMenuClick}
      >
        {hamburgerIcon}
      </button>
      {isMenuOpen && (
        <>
          <div className={styles['blurred-overlay']}></div>
          <div className={styles['side-menu-container']}>
            <div className={styles['side-menu-close']}>
              <button
                className={styles['close-menu-btn']}
                onClick={handleMenuClick}
              >
                {xMark}
              </button>
            </div>
            <div className={styles['side-menu-nav']}>
              <Link to="home">
                <button className={styles.btn}>Home</button>
              </Link>
              <Link to="shop">
                <button className={styles.btn}>Shop</button>
              </Link>
              <Link to="cart">
                <button className={styles.btn}>
                  Cart {cartQuantity > 0 ? cartQuantity : null}
                </button>
              </Link>
            </div>
          </div>
        </>
      )}
    </nav>
  );
}

Navbar.propTypes = {
  cart: PropTypes.array,
};
