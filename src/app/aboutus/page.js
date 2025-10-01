import React from "react";
import styles from "./page.module.css";
import Testimonial from "../components/testimonials/Testimonial";
const page = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.sec1Div}>
        <div className={styles.sec1DivImg}>
          <img src="/image/ab1.webp" />
        </div>
        <div className={styles.sec1DivText}>
          <h1>About Us</h1>
          <h4>
            The word Om Shri Divine is derived from Sanskrit. Jaap is the common
            vernacular used for the act of meditation.{" "}
          </h4>
          <p>
            Om Shri Divine started in 2022 with a few select Rudraksha wearables like
            bracelets and malas.
          </p>
        </div>
      </div>

      <div className={styles.sec2Div}>
        <div className={styles.headingText}>
          <h1>Authentic Spiritual Accessories</h1>
          <p>
            We have a keen eye for design and leverage social media to spread
            our message. Om Shri Divine is the source you can trust for Authentic
            Spiritual Accessories.
          </p>
        </div>

        <div className={styles.divGrid}>
          <div className={styles.divGridCard}>
            <img src="/image/ab2.webp" />
            <div className={styles.divContent}>
              <p>Kya Ye Asli Hai?</p>
              <h3>
                We recognized the doubts that customers face while buying
                Rudraksha from the market - because there’s no trusted source.
              </h3>
            </div>
          </div>
          <div className={styles.divGridCard2}>
            <div className={styles.divGridCard21}>
              <img src="/image/ab3.webp" />
              <div className={styles.divContent}>
                <p>Lab Testing</p>
                <h3>
                  To solve the trust issue, we introduced the concept of BTR
                  Cards - Batch Test Reports. We randomly divide our products
                  into batches and get samples tested in the lab.
                </h3>
              </div>
            </div>
            <div className={styles.divGridCard21}>
              <img src="/image/ab4.webp" />
              <div className={styles.divContent}>
                <p>Authenticity Certified</p>
                <h3>
                  The lab report certificate is then shipped with the order;
                  ensuring the customer always receives authentic and genuine
                  Rudraksha.
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.sec3Div}>
        <h1 style={{ marginBottom: "30px" }}>Innovating and Inspiring</h1>
        <div className={styles.sec3DivGrid}>
          <div>
            <div className={styles.sec3DivGridImg}>
              <img src="/image/ab5.webp" />
            </div>
            <div className={styles.sec3DivCardText}>
              <h2>Bringing Stories To Life</h2>
              <p>
                We work with artisans in India to bring stories of our beloved
                Hindu Gods to life in their various forms
              </p>
            </div>
          </div>
          <div>
            <div className={styles.sec3DivGridImg}>
              <img src="/image/ab6.webp" />
            </div>
            <div className={styles.sec3DivCardText}>
              <h2>Rudraksha Ki Rakhi</h2>
              <p>
                Our special Rakhi Box brought smiles to thousands of brothers
                and sisters on Raksha Bandhan
              </p>
            </div>
          </div>
          <div>
            <div className={styles.sec3DivGridImg}>
              <img src="/image/ab8.webp" />
            </div>
            <div className={styles.sec3DivCardText}>
              <h2>Siddhi Service</h2>
              <p>
                We're the pioneers of introducing a Siddhi service for customers
                to get Energized products delivered at home
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.sec4Div}>
        <h1>Our Customers ♥️ Us</h1>
        <p>
          Our social media ads are seen by over 5 Crore people every month. Over
          300,000 customers have trusted us so far, and this number is growing
          every day.
        </p>
      </div>

      <div className={styles.sec12Div}>
        <h1>Over 600,000 Happy Customers ♥️ 🙏</h1>
        <p>with thousands of 5-star reviews</p>
        <Testimonial />
      </div>

      <div className={styles.sec5Div}>
        <div className={styles.sec5DivImg}>
          <img src="/image/ab7.webp" />
          <div className={styles.sec5DivText}>
            <h1>Team Om Shri Divine</h1>
            <p>
              Our headquarters are in Mohali, Punjab and we source our products
              from all over India. Many of our products are made by local
              craftsmen and craftswomen in small villages.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.sec6Div}>
        <div>
          <div className={styles.sec6DivImage}>
            <img src="/image/ab9.webp" />
            <h3 className={styles.sec6DivText}>
              We work very hard to provide products with the best quality,
              plating, material, and authenticity.
            </h3>
          </div>
        </div>
        <div>
          <div className={styles.sec6DivImage}>
            <img src="/image/ab10.webp" />
            <h3 className={styles.sec6DivText}>
              As we plan our expansion into the vast world of Spirituality, we
              hope to improve and innovate to give you the best experience
              possible.
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
