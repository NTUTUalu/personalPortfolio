import c from "../../images/copyright.png"
import footerStyles from "./footer.module.css"

function Footer () {
    return <>
    <footer className={footerStyles.bottom}>
        <div className={footerStyles.copyright}>
        <img src={c}/>
        <h5>African Group</h5>
        </div>
        
        <h3>Resume</h3>
    </footer>
    </>
 }

 export default Footer ;