import React from "react";
import styles from "./page.module.css";
const page = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.contactImage}>
        <img src="/image/ab11.jpg" />
        <h1 className={styles.headingContact}>Contact Us</h1>
      </div>

      <div className={styles.container}>
        <p>
          <span className={styles.bold}>Om Shri Divine Sevak</span> will help and solve
          all your questions related to:
        </p>
        <ul className={styles.list}>
          <li>Order Tracking</li>
          <li>Returns &amp; Replacements</li>
          <li>Cancellations</li>
          <li>Product Information</li>
        </ul>
        <p className={styles.text}>
          We appreciate all the support and love shown by our customers, and in
          order to assist you better we have developed Om Shri Divine Sevak from the
          ground up.
        </p>
        <a href="#" className={styles.chatLink}>
          Chat With Om Shri Divine Sevak
        </a>
        <p className={styles.text}>
          Please note our WhatsApp number is used for order related status
          updates and promotions. It is not monitored by agents.
        </p>
        <p className={styles.text}>
          For specific queries, please reach out to our support email if Om Shri Divine
          Sevak is unable to address your issue:{" "}
          <a href="mailto:support@OmShriDivine.in" className={styles.email}>
            support@OmShriDivine.in
          </a>
        </p>
        <p className={styles.text}>
          Our business hours for replying on email are: Mon to Sat 10 AM to 5 PM
          - we will try and respond to emails within 24 hours.
        </p>
      </div>
    </div>
  );
};

export default page;
