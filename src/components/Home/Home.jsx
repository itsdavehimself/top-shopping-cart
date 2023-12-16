import styles from './Home.module.css';
import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRight,
  faArrowLeft,
  faTruckFast,
  faHeadset,
  faHandshake,
} from '@fortawesome/free-solid-svg-icons';
import pcTransparent from '../../assets/pc-transparent.png';
import gpuTransparent from '../../assets/gpu-transparent.png';

export default function Home() {
  const carouselRef = useRef(null);
  const [currentPosition, setCurrentPosition] = useState(0);
  const arrowRight = <FontAwesomeIcon icon={faArrowRight} />;
  const arrowLeft = <FontAwesomeIcon icon={faArrowLeft} />;
  const truckIcon = <FontAwesomeIcon icon={faTruckFast} />;
  const headsetIcon = <FontAwesomeIcon icon={faHeadset} />;
  const handshakeIcon = <FontAwesomeIcon icon={faHandshake} />;

  useEffect(() => {
    const interval = setInterval(() => {
      moveCarousel(1);
    }, 8000);

    return () => clearInterval(interval);
  }, [carouselRef, currentPosition]);

  const moveCarousel = (direction) => {
    const carousel = carouselRef.current;
    const numImages = 3;
    const nextPosition =
      (currentPosition + direction * (100 / numImages) + 100) % 100;

    carousel.style.transform = `translateX(${-nextPosition}%)`;
    setCurrentPosition(nextPosition);
  };

  const handleEmailClick = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.home}>
      <div className={styles['hero-container']}>
        <div className={styles['hero-carousel']}>
          <div className={styles['carousel-btn-container']}>
            <button
              className={styles['carousel-slide-btn']}
              onClick={() => moveCarousel(-1)}
            >
              {arrowLeft}
            </button>
            <button
              className={styles['carousel-slide-btn']}
              onClick={() => moveCarousel(1)}
            >
              {arrowRight}
            </button>
          </div>
          <div className={styles['hero-img-strip']} ref={carouselRef}>
            <div className={styles['hero-gamer-img']}>
              <div className={styles['hero-gamer-overlay']}></div>
              <div className={styles['gamer-content']}>
                <h3 className={styles['carousel-titles']}>
                  Stay ahead of the competition
                </h3>
                <p className={styles['carousel-copy']}>
                  Shop our latest gaming equipment and get what you need to
                  level up your game.
                </p>
                <Link to="/shop">
                  <button className={styles['carousel-btn']}>SHOP NOW</button>
                </Link>
              </div>
            </div>
            <div className={styles['graphics-cards-img']}>
              <div className={styles['graphics-cards-overlay']}></div>
              <div className={styles['graphics-cards-content']}>
                <h3 className={styles['carousel-titles']}>
                  Unlock light speed
                </h3>
                <p className={styles['carousel-copy']}>
                  Unleash unparalleled gaming power with our newest NVIDIA and
                  AMD graphics cards. Elevate your experience to the 4th
                  dimension and conquer virtual realms with breathtaking visuals
                  and lightning-fast performance.
                </p>
                <Link to="/shop">
                  <button className={styles['carousel-btn']}>SHOP NOW</button>
                </Link>
              </div>
            </div>
            <div className={styles['pc-img']}>
              <div className={styles['pc-overlay']}></div>
              <div className={styles['pc-content']}>
                <h3 className={styles['carousel-titles']}>
                  Command the Battlefield
                </h3>
                <p className={styles['carousel-copy']}>
                  Dominate every mission with our selection of cutting-edge
                  gaming PCs. Engineered for peak performance and unrivaled
                  speed, our gaming rigs are your ticket to immersive worlds and
                  unparalleled victories.
                </p>
                <Link to="/shop">
                  <button className={styles['carousel-btn']}>SHOP NOW</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles['current-promo-container']}>
        <div className={styles['promo-left-col']}>
          <div className={styles['promo-card-big']}>
            <div className={styles['pc-promo-img']}>
              <p className={styles['promo-subtitle']}>Ready To Ship</p>
              <h3 className={styles['promo-title']}>Prebuilt Gaming PCs</h3>
              <p className={styles['promo-tagline']}>
                Hundreds of modesl ready to ship. Elevate your game today.
              </p>
              <Link to="/shop">
                <button className={styles['btn-inverse']}>SHOP NOW</button>
              </Link>
            </div>
          </div>
          <div className={styles['promo-card-small']}>
            <img
              src={gpuTransparent}
              className={styles['small-promo-img']}
              alt="graphics card"
            ></img>
            <div className={styles['small-promo-info']}>
              <h4>Catch them in 4K</h4>
              <p>
                Dive into a realm of gaming excellence with our
                precision-crafted GPUs, engineered to perfection for an
                unparalleled visual spectacle. Elevate your gaming experience to
                new heights with cutting-edge technology, delivering unrivaled
                graphics performance.
              </p>
              <Link to="/shop">
                <button className={styles.btn}>SHOP NOW</button>
              </Link>
            </div>
          </div>
        </div>
        <div className={styles['promo-right-col']}>
          <div className={styles['promo-card-small']}>
            <img
              src={pcTransparent}
              className={styles['small-promo-img']}
              alt="gaming computer"
            ></img>
            <div className={styles['small-promo-info']}>
              <h4>Unfathomable Power</h4>
              <p>
                Unleash the power of ultimate gaming with our meticulously
                engineered PCs, crafted to perfection for an unparalleled gaming
                experience. Elevate your gameplay to new heights with
                cutting-edge technology and unrivaled performance.
              </p>
              <Link to="/shop">
                <button className={styles.btn}>SHOP NOW</button>
              </Link>
            </div>
          </div>
          <div className={styles['promo-card-big']}>
            <div className={styles['pc-interior-promo-img']}>
              <p className={styles['promo-subtitle']}>Ready, Aim, Fire</p>
              <h3 className={styles['promo-title']}>
                Build Your Dream Machine
              </h3>
              <p className={styles['promo-tagline']}>
                Everything you need to build your beast.
              </p>
              <Link to="/shop">
                <button className={styles['btn-inverse']}>SHOP NOW</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className={styles['explore-products-container']}>
        <h3 className={styles['explore-title']}>EXPLORE PRODUCTS</h3>
        <div className={styles['explore-cards']}>
          <div className={styles['explore-card']}>
            <div className={styles['explore-card-img']}>
              <div className={styles['explore-pc-img']}>
                <div className={styles['explore-img-overlay']}>
                  <button className={styles.btn} id={styles['explore-btn']}>
                    SHOP DESKTOPS
                  </button>
                </div>
              </div>
            </div>
            <h5 className={styles['explore-label']}>Gaming Desktops</h5>
          </div>
          <div className={styles['explore-card']}>
            <div className={styles['explore-card-img']}>
              <div className={styles['explore-laptop-img']}>
                <div className={styles['explore-img-overlay']}>
                  <button className={styles.btn} id={styles['explore-btn']}>
                    SHOP MONITORS
                  </button>
                </div>
              </div>
            </div>
            <h5 className={styles['explore-label']}>Gaming Laptops</h5>
          </div>
          <div className={styles['explore-card']}>
            <div className={styles['explore-card-img']}>
              <div className={styles['explore-monitor-img']}>
                <div className={styles['explore-img-overlay']}>
                  <button className={styles.btn} id={styles['explore-btn']}>
                    SHOP LAPTOPS
                  </button>
                </div>
              </div>
            </div>
            <h5 className={styles['explore-label']}>Gaming Monitors</h5>
          </div>
          <div className={styles['explore-card']}>
            <div className={styles['explore-card-img']}>
              <div className={styles['explore-gpu-img']}>
                <div className={styles['explore-img-overlay']}>
                  <button className={styles.btn} id={styles['explore-btn']}>
                    SHOP GPUs
                  </button>
                </div>
              </div>
            </div>
            <h5 className={styles['explore-label']}>Graphics Cards</h5>
          </div>
        </div>
      </div>
      <div className={styles['newsletter-container']}>
        <h3 className={styles['newsletter-title']}>Lower your lag</h3>
        <p className={styles['newsletter-tagline']}>
          Subscribe to our newsletter and never miss an opportunity to level up
          your gear. Get industry related news and early access to upcoming
          deals and promotions!
        </p>
        <form>
          <input type="email"></input>
          <button className={styles['btn-inverse']} onClick={handleEmailClick}>
            Sign Up
          </button>
        </form>
      </div>
      <div className={styles['why-us-container']}>
        <h3 className={styles['why-us-title']}>Why shop with us?</h3>
        <div className={styles['why-us-cards']}>
          <div className={styles['why-us-card']}>
            <div className={styles['why-us-icon']}>{truckIcon}</div>
            <h5 className={styles['why-us-subtitle']}>Fast Shipping</h5>
            <p className={styles['why-us-copy']}>
              Experience seamless shopping with our company as we prioritize
              swift and reliable shipping, ensuring your orders are promptly
              dispatched and delivered to your doorstep with the utmost care and
              efficiency.
            </p>
          </div>
          <div className={styles['why-us-card']}>
            <div className={styles['why-us-icon']}>{headsetIcon}</div>
            <h5 className={styles['why-us-subtitle']}>Reliable Support</h5>
            <p className={styles['why-us-copy']}>
              Count on our dedicated and responsive support team to provide
              reliable assistance, addressing your queries and concerns promptly
              to enhance your overall shopping experience.
            </p>
          </div>
          <div className={styles['why-us-card']}>
            <div className={styles['why-us-icon']}>{handshakeIcon}</div>
            <h5 className={styles['why-us-subtitle']}>Trusted by Many</h5>
            <p className={styles['why-us-copy']}>
              Join the ranks of satisfied customers who trust us for their
              needs, as our commitment to quality, reliability, and exceptional
              service has earned us the loyalty of many happy patrons.
            </p>
          </div>
        </div>
      </div>
      <div className={styles['by-gamers-container']}>
        <div className={styles['by-gamers-img']}>
          <div className={styles['by-gamers-overlay']}>
            <h3 className={styles['by-gamers-title']}>BY GAMERS, FOR GAMERS</h3>
            <p className={styles['by-gamers-copy']}>
              At 1337MARKET, we take pride in being built by gamers for gamers.
              Our team is composed of passionate individuals who share a deep
              love for gaming, and this shared enthusiasm drives our commitment
              to creating a gaming storefront that truly understands and caters
              to the needs of fellow gaming enthusiasts. We believe that this
              shared passion not only fuels our creativity and innovation but
              also allows us to empathize with the diverse preferences and
              desires of our gaming community. We are not just a company; we are
              a community of gamers dedicated to providing a platform where
              every gamer feels at home.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
