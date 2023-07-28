import contactStyles from "./contact.module.css";
import { Form } from "react-router-dom";
import Lottie from "lottie-react";
import animationData from "../../images/arrow.json";

function Contact() {
  return (
    <>
      <div className={contactStyles.wrapper}>
        <h3 className={contactStyles.pHeading}>Contact.</h3>
        <p>Connect with me directly through my email, Solvene@gmail.com</p>
        <section className={contactStyles.formWrapper}>
          <Form>
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Email" />
            <textarea type="text" placeholder="Message" maxLength="50" />
            <button type="submit">Send Message</button>
          </Form>
          <div className={contactStyles.nextHome}>
            <h5 className={contactStyles.next}>Home Page</h5>
              <Lottie animationData={animationData} className={contactStyles.arrow}/>
          </div>
        </section>
      </div>
    </>
  );
}

export default Contact;
