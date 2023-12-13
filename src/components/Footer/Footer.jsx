import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
import { UseShopFilterContext } from '../../hooks/UseShopFilterContext';

export default function Footer() {
  const { dispatch } = UseShopFilterContext();

  const handleLinkClick = (e) => {
    const newFilter = e.target.getAttribute('data-filter');
    dispatch({ type: 'SET_FILTER', payload: newFilter });
  };

  return (
    <div className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.about}>
          <h3>ABOUT THE PROJECT</h3>
          <p>
            This project was made as part of The Odin Project&apos;s JavaScript
            curriculum. The purpose of this shopping cart project is to explore
            and utilize ReactJS, React testing, and React routing in conjunction
            with CSS modules. The site is made fully responsive to work and look
            good both on mobile and desktop.
          </p>
        </div>
        <div className={styles.shop}>
          <h3>SHOP</h3>
          <Link
            className={styles.link}
            to="/shop"
            data-filter="(search=Gaming&search=Desktops)"
            onClick={handleLinkClick}
          >
            Gaming desktops
          </Link>
          <Link
            className={styles.link}
            to="/shop"
            data-filter="(search=Gaming&search=Monitors)"
            onClick={handleLinkClick}
          >
            Gaming monitors
          </Link>
          <Link
            className={styles.link}
            to="/shop"
            data-filter="(search=Gaming&search=Laptops)"
            onClick={handleLinkClick}
          >
            Gaming laptops
          </Link>
          <Link
            className={styles.link}
            to="/shop"
            data-filter="(search=Graphic&search=Cards)"
            onClick={handleLinkClick}
          >
            Graphic cards
          </Link>
        </div>
        <div className={styles.links}>
          <h3>OTHER LINKS</h3>
          <div className={styles.link}>
            <Link to="/home">Home</Link>
            <Link to="/shop">Shop</Link>
            <a
              href="https://github.com/itsdavehimself/top-shopping-cart"
              target="_blank"
              rel="noopener noreferrer"
            >
              Project Repository
            </a>
            <a
              href="https://github.com/itsdavehimself"
              target="_blank"
              rel="noopener noreferrer"
            >
              David&apos;s Github
            </a>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <p>@ 2023 DaveHimself Inc. All Rights Reserved</p>
        <p>Project made by David Smolen using Best Buy&apos;s API</p>
      </div>
    </div>
  );
}
