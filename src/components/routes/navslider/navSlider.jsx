import styles from "./navSlider.module.css"
import React, { useState } from 'react';

function NavSlider({ changeDetails, aboutList }) {
    const [activeIndex, setActiveIndex] = useState(0);
 
    return <>
    <div className={styles.slider}>
        <div className={styles.sliderRow}>
        {aboutList.map((item, index) => (
          <div
            key={index}
            className={`${styles.navImages} ${
              activeIndex === index ? styles.active : ''
            }`}
            onClick={() => {
              changeDetails(index);
              setActiveIndex(index);
            }}
          >
            <img className={styles.nav} src={item.image} alt={`Image ${index}`} />
          </div>
        ))};
        </div>
      </div>
    </>
}

export default NavSlider;