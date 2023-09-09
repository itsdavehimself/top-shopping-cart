import { Link } from 'react-router-dom';
import styles from './NotFound.module.css';

export default function NotFound() {
  return (
    <div className={styles['not-found']}>
      <h1>You&apos;re in uncharted territory!</h1>
      <h2>Unfortunately, there&apos;s nothing here.</h2>
      <p>The page may have been removed or had it&apos;s name changed.</p>
      <Link to="/home">
        <button className={styles.btn}>Click here to teleport home</button>
      </Link>
    </div>
  );
}
