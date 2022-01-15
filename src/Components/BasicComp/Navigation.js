import Button from "./Button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import styles from '../CSS/Navigation.module.css'

const Navigation = (props) => {

    return (
        <>
        <span className={styles.bigScreen}>
        <Button href='#'>DASHBOARD</Button>
        <Button href='#'>MAP</Button>
        <Button href='#'>ABOUT</Button>
        </span>
        <span className={styles.smallScreen}>
        <FontAwesomeIcon onClick={props.onOpen} className={styles.menuIcon} icon={faBars}></FontAwesomeIcon>
        </span>

        </>
    )
}

export default Navigation
