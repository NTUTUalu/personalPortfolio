import React from "react";
import c from "../../images/copyright.png";
import footerStyles from "./footer.module.css";

function Footer() {
  const resume = {
    alt: "Resume",
    href2:
      "https://drive.google.com/file/d/1i09pPFeq3_PmXS6amKjblW3u20gjUpLE/view?usp=sharing",
  };

  const handleImageClick = (href2) => {
    const confirmed = window.confirm("You are about to be redirected to a different link. Continue?");
    if (confirmed) {
      window.open(href2, "_blank");
    }
  };

  return (
    <footer className={footerStyles.bottom}>
      <div className={footerStyles.copyright}>
        <img src={c} alt="Copyright" />
        <h5>African Group</h5>
      </div>

      <a
        href={resume.href2}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => handleImageClick(resume.href2)}
      >
        <h3>{resume.alt}</h3>
      </a>
    </footer>
  );
}

export default Footer;
