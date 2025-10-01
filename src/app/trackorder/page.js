import React from "react";
import styles from "./page.module.css";
const page = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.mainFormContent}>
         <div>
            <label>Enter your Order Number:</label>
            <input placeholder="Order Number #JPM"/>
         </div>
          <div>
            <label>Enter your Phone Number:</label>
            <input placeholder="Order Number #JPM"/>
         </div>
         <button>GET TRACKING DETAILS</button>
      </div>
    </div>
  );
};

export default page;
