import styles from "../CSS/Header.module.css";
import logo from "../../Images/logo.png";
import Navigation from "./Navigation";
import Button from "./Button";

const Header = () => {
  return (
    <>
      <div className={styles.Header}>
        <div className={styles.header_left}>
          <img src={logo}></img>
        </div>
        <div className={styles.header_middle}>
          <h1>COVID TRACKER</h1>
        </div>
        <div className={styles.header_right}>
          <Navigation />
        </div>

      </div>
    </>
  );
};

export default Header;
