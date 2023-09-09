import styles from './ErrorPage.module.css';

export default function ErrorPage() {
  return (
    <div className={styles['error-page']}>
      <h1>There was an error loading your page.</h1>
      <h2>We&apos;re sorry. Please try again in a few moments.</h2>
    </div>
  );
}
