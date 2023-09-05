import styles from './Home.module.css';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <div className={styles['hero-container']}>
        <div className={styles['hero-text']}>
          <h1>Blink and you&apos;ll miss it</h1>
          <p>
            Enter the future of gaming with the groundbreaking RTX 4090 graphics
            card. Immerse yourself in unparalleled speed and power. Embrace the
            next era of gaming.
          </p>
          <Link to="/shop">
            <button>Shop now</button>
          </Link>
        </div>
        <img className={styles['hero-img']} src="/rtx-4090-hero.png"></img>
      </div>
      <div className={styles['secondary-info-container']}>
        <img className={styles['hero-img']} src="/rtx-4090-hero.png"></img>
        <div className={styles['secondary-text']}>
          <h2>We don&apos;t play around...</h2>
          <p>
            ...when it comes to gaming equipment. At our gaming equipment hub,
            we&apos;re not just serious about gaming – we&apos;re absolutely
            devoted to it. We understand that gaming isn&apos;t just a pastime;
            it&apos;s a way of life, and it&apos;s just as important to us as it
            is to you. Our commitment is to provide you with the very best in
            gaming components and accessories, along with unparalleled support.
            Our product range is a gamer&apos;s paradise, featuring everything
            from cutting-edge graphics cards that bring your games to life to
            peripherals that respond to your every move with precision. But
            it&apos;s not just about the gear; it&apos;s about the experience.
            Our team, comprised of passionate gamers, is available 24/7 to
            assist you with any gaming-related challenges you may encounter. We
            take immense pride in ensuring that your gaming setup is as
            exceptional as your in-game achievements. Because when you succeed,
            we succeed, and together, we&apos;re dedicated to enhancing the
            gaming world. So, explore our curated selection of gaming equipment
            and embark on this exciting journey with us. Get ready to elevate
            your gaming experience like never before!
          </p>
        </div>
      </div>
      <div className={styles['about-us-container']}>
        <h2>Changing the face of gaming.</h2>
        <div className={styles['about-us-text']}>
          <div className={styles['about-us-paragraph']}>
            <p>
              With a legacy spanning decades, our company is deeply rooted in
              the ever-evolving world of gaming and technology. From our humble
              beginnings as passionate gamers, we&apos;ve grown into a leading
              force within the industry, committed to not just keeping up with
              the times but shaping them. Our journey in the gaming world has
              been one of continuous innovation and dedication. Over the years,
              we&apos;ve not only catered to the gaming community but actively
              contributed to its growth. Hosting numerous esports tournaments,
              we&apos;ve witnessed the rise of gaming as a competitive sport.
              These events haven&apos;t just been about prizes and prestige;
              they&apos;ve been a platform to give back to the community that
              has supported us throughout our journey. We&apos;ve consistently
              dedicated a substantial portion of the tournament winnings to
              charities focused on empowering underprivileged communities
              through technology. It&apos;s our way of ensuring that the
              opportunities we&apos;ve had access to are extended to those who
              need them most.
            </p>
          </div>
          <div className={styles['about-us-paragraph']}>
            <p>
              Our commitment to the gaming and technology sector goes beyond
              business; it&apos;s a genuine passion that drives us. We
              understand that technology has the power to transform lives, and
              we&apos;re determined to make that transformation accessible to
              all. Beyond hosting esports tournaments, we&apos;ve actively
              worked on initiatives to bridge the digital divide, providing
              technology resources to schools, community centers, and
              organizations working with underprivileged youth. Our team,
              composed of industry veterans and dedicated enthusiasts,
              constantly explores the cutting edge of gaming technology,
              ensuring that our customers have access to the latest and greatest
              innovations. We take pride in not just being a retailer, but a
              partner in your gaming journey. Our commitment to customer
              satisfaction and technological excellence remains unwavering, as
              we look forward to many more decades of enriching the gaming and
              technology landscape. Together, we&apos;re not just keeping up
              with the future; we&apos;re shaping it.
            </p>
          </div>
        </div>
      </div>
      <div className={styles['popular-products']}></div>
    </>
  );
}
