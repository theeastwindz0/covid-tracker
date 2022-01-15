import Button from "./Button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import styles from '../CSS/Navigation.module.css'

const Navigation = () => {

    return (
        <>
        <span className={styles.bigScreen}>
        <Button href='#'>DASHBOARD</Button>
        <Button href='#'>MAP</Button>
        <Button href='#'>ABOUT</Button>
        </span>
        <span className={styles.smallScreen}>
        <FontAwesomeIcon className={styles.menuIcon} icon={faBars}></FontAwesomeIcon>
        </span>

        </>
    )
}

export default Navigation
