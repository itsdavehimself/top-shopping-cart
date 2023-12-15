import styles from './Home.module.css';
import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import pcTransparent from '../../assets/pc-transparent.png';
import gpuTransparent from '../../assets/gpu-transparent.png';

export default function Home() {
  const carouselRef = useRef(null);
  const [currentPosition, setCurrentPosition] = useState(0);
  const arrowRight = <FontAwesomeIcon icon={faArrowRight} />;
  const arrowLeft = <FontAwesomeIcon icon={faArrowLeft} />;

  useEffect(() => {
    const interval = setInterval(() => {
      moveCarousel(1); // Move the carousel forward
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
                  and lightning-fast performance. Don&apos;t just play the game;
                  redefine it with the future of graphics technology!
                </p>
                <Link to="/shop">
                  <button className={styles['carousel-btn']}>SHOP NOW</button>
                </Link>{' '}
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
                </Link>{' '}
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
        <h3 className={styles['explore-title']}>EXPORE PRODUCTS</h3>
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
      {/* <div className={styles['about-us-container']}>
        <h2>Changing the face of gaming.</h2>
        <div className={styles['about-us-text']}>
          <div className={styles['about-paragraph']}>
            <p>
              With a legacy spanning decades, our company is deeply rooted in
              the ever-evolving world of gaming and technology. From our humble
              beginnings as passionate gamers, we&apos;ve grown into a leading
              force within the industry, committed to not just keeping up with
              the times but shaping them. Our journey in the gaming world has
              been one of continuous innovation and dedication.
            </p>
            <p>
              Over the years, we&apos;ve not only catered to the gaming
              community but actively contributed to its growth. Hosting numerous
              esports tournaments, we&apos;ve witnessed the rise of gaming as a
              competitive sport. These events haven&apos;t just been about
              prizes and prestige; they&apos;ve been a platform to give back to
              the community that has supported us throughout our journey.
              We&apos;ve consistently dedicated a substantial portion of the
              tournament winnings to charities focused on empowering
              underprivileged communities through technology. It&apos;s our way
              of ensuring that the opportunities we&apos;ve had access to are
              extended to those who need them most.
            </p>
          </div>
          <div className={styles['about-paragraph']}>
            <p>
              Our commitment to the gaming and technology sector goes beyond
              business; it&apos;s a genuine passion that drives us. We
              understand that technology has the power to transform lives, and
              we&apos;re determined to make that transformation accessible to
              all.
            </p>
            <p>
              Beyond hosting esports tournaments, we&apos;ve actively worked on
              initiatives to bridge the digital divide, providing technology
              resources to schools, community centers, and organizations working
              with underprivileged youth. Our team, composed of industry
              veterans and dedicated enthusiasts, constantly explores the
              cutting edge of gaming technology, ensuring that our customers
              have access to the latest and greatest innovations.
            </p>
            <p>
              We take pride in not just being a retailer, but a partner in your
              gaming journey. Our commitment to customer satisfaction and
              technological excellence remains unwavering, as we look forward to
              many more decades of enriching the gaming and technology
              landscape. Together, we&apos;re not just keeping up with the
              future; we&apos;re shaping it.
            </p>
          </div>
        </div>
      </div> */}
    </div>
  );
}
