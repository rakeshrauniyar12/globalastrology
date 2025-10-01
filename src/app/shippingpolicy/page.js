import styles from './page.module.css';

export default function ShippingPolicy() {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Shipping Policy</h2>

      <p className={styles.text}>We offer <span className={styles.bold}>Free Shipping</span> on <span className={styles.bold}>all orders over ₹299</span>.</p>

      <h3 className={styles.subheading}>COD Orders Verification</h3>
      <p className={styles.text}>
        COD (Cash on Delivery) orders are verified for authenticity. If there are doubts about the address, we will call to confirm. Only verified phone and address orders will be shipped.
      </p>

      <h3 className={styles.subheading}>Order & Shipping Time</h3>
      <ul className={styles.list}>
        <li>Order Processing Time: <span className={styles.bold}>1 day</span></li>
        <li>Shipping Time: <span className={styles.bold}>3-4 days</span> (depending on delivery pincode)</li>
        <li>We ship 90% of orders within 24 hours, and all verified orders within 48 hours.</li>
        <li>We do not ship on Sundays.</li>
      </ul>
      
      <h3 className={styles.subheading}>Courier & Delivery</h3>
      <p className={styles.text}>
        All orders are shipped via major courier networks. Expect your order within 3-4 days after processing.
      </p>
    </div>
  );
}
