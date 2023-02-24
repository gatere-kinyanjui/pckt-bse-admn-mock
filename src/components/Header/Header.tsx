import styles from "./style.module.css";

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <header>
        <p>
          This is a demo of PocketBase admin dashboard. The database resets
          every hour. Realtime data and file upload are disabled. To login, use
          Email:
          <strong>test@example.com</strong> and Password:{" "}
          <strong>123456</strong>
        </p>
      </header>
    </div>
  );
};

export default Header;
