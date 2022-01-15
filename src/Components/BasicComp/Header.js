import styles from "../CSS/Header.module.css";
import logo from "../../Images/logo.png";
import Navigation from "./Navigation";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Header = () => {

    const onClose=()=>{
        document.getElementById('overlay').style.right='-100%';
    }

    const onOpen=()=>{
        document.getElementById('overlay').style.right='0%';
    }

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
          <Navigation onOpen={onOpen}/>
        </div>
      </div>
      <div className={styles.overlay} id="overlay">
        <FontAwesomeIcon onClick={onClose} icon={faTimes} className={styles.crossIcon}></FontAwesomeIcon>
        <div className={styles.submenu}>
          <Button href="#">DASHBOARD</Button>
          <Button href="#">MAP</Button>
          <Button href="#">ABOUT</Button>
        </div>
      </div>
    </>
  );
};

export default Header;
