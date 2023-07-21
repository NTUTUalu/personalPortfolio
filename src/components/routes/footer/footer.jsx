import c from "../../images/copyright.png"
import styles from "./footer.module.css"
function Footer () {
    return <>
    <footer className={styles.bottom}>
        <div className={styles.copyright}>
        <img src={c}/>
        <h5>African Group</h5>
        </div>
        
        <h3>Resume</h3>
    </footer>
    </>
 }

 export default Footer ;