import styles from "./style.module.css";
import PbLogo from "../.././assets/pb-logo.svg";

const AdminSignIn = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.logo}>
        <img src={PbLogo} alt="" />
        <span className="text">
          Pocket<strong>Base</strong>
        </span>
      </div>

      <form action="" className={styles.formContainer}>
        <h4>Admin Sign In</h4>

        <div className={styles.inputRequired}>
          <label htmlFor="">Email</label>
          <input type="email" className="email" />
        </div>

        <div className={styles.inputRequired}>
          <label htmlFor="">Password</label>
          <input type="password" className="password" />
          <div className="help">
            <a href="#">Forgotten Password?</a>
          </div>
        </div>

        <button type="submit">
          <span>Login &#8594;</span>
        </button>
      </form>
    </div>
  );
};

export default AdminSignIn;
