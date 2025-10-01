import styles from "./page.module.css";

export default function PrivacyPolicy() {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Privacy Policy</h2>
      <p>
        This Privacy Policy describes how{" "}
        <span className={styles.bold}>https://shrilsastrovastulinks.com</span> (the “Site” or “we”)
        collects, uses, and discloses your Personal Information when you visit
        or make a purchase from the Site.
      </p>

      <h3 className={styles.subheading}>Contact</h3>
      <p>
        After reviewing this policy, if you have additional questions or want
        more information about our privacy practices, please contact us by
        e-mail at{" "}
        <a href="mailto:support@OmShriDivine.in" className={styles.link}>
          support@OmShriDivine.in
        </a>
      </p>

      <h3 className={styles.subheading}>Collecting Personal Information</h3>
      <p>
        When you visit the Site, we collect certain information about your
        device, your interaction with the Site, and information necessary to
        process your purchases. We may also collect additional information if
        you contact us for customer support. In this Privacy Policy, “Personal
        Information” means any information about an identifiable individual.
      </p>

      <h4 className={styles.subsubheading}>Device information</h4>
      <ul className={styles.list}>
        <li>
          <b>Purpose of collection:</b> to load the Site accurately for you, and
          to perform analytics on Site usage.
        </li>
        <li>
          <b>Source of collection:</b> collected automatically when accessing
          our Site using cookies, log files, web beacons, tags, or pixels.
        </li>
        <li>
          <b>Disclosure for a business purpose:</b> shared with our processor
          Shopify.
        </li>
        <li>
          <b>Personal Information collected:</b> browser version, IP address,
          time zone, cookie info, sites or products viewed, search terms, how
          you interact with the Site.
        </li>
      </ul>

      <h4 className={styles.subsubheading}>Order information</h4>
      <ul className={styles.list}>
        <li>
          <b>Purpose of collection:</b> to fulfill your contract, process
          payment, arrange shipping, communicate, screen for fraud, and provide
          product/service info aligned with your preferences.
        </li>
        <li>
          <b>Source of collection:</b> collected directly from you.
        </li>
        <li>
          <b>Disclosure for a business purpose:</b> shared with Shopify or
          Razorpay.
        </li>
        <li>
          <b>Personal Information collected:</b> name, billing & shipping
          address, payment info, email, phone number.
        </li>
      </ul>

      <h4 className={styles.subsubheading}>Customer support information</h4>
      <ul className={styles.list}>
        <li>
          <b>Purpose of collection:</b> to provide customer support.
        </li>
        <li>
          <b>Source of collection:</b> collected from you.
        </li>
        <li>
          <b>Disclosure for a business purpose:</b> -
        </li>
        <li>
          <b>Personal Information collected:</b> -
        </li>
      </ul>

      <h3 className={styles.subheading}>Minors</h3>
      <p>
        The Site is not intended for individuals under the age of 18. We do not
        intentionally collect Personal Information from children.
        Parents/guardians may contact us to request deletion if they believe a
        child provided Personal Information.
      </p>

      <h3 className={styles.subheading}>Sharing Personal Information</h3>
      <p>
        We share your Personal Information with service providers to help us
        provide our services, fulfill contracts, comply with laws, or protect
        our rights. For example, Shopify powers our store. More about Shopify's
        privacy{" "}
        <a
          href="https://www.shopify.com/legal/privacy"
          target="_blank"
          rel="noopener"
          className={styles.link}
        >
          here
        </a>
        .
      </p>

      <h3 className={styles.subheading}>Behavioural Advertising</h3>
      <p>
        We use your Personal Information for targeted ads and marketing
        communications, for example via Google Analytics (more{" "}
        <a
          href="https://www.google.com/intl/en/policies/privacy/"
          target="_blank"
          rel="noopener"
          className={styles.link}
        >
          here
        </a>
        ) and Shopify Audiences. You may opt out of targeted ads via Facebook,
        Google, Bing or the Digital Advertising Alliance (links provided in the
        policy).
      </p>

      <h3 className={styles.subheading}>Cookies</h3>
      <p>
        Cookies store information to improve your browsing experience and
        provide analytics. We use functional, performance, advertising, and
        social media cookies.
      </p>

      <h3 className={styles.subheading}>Do Not Track</h3>
      <p>
        We do not alter data collection practices in response to Do Not Track
        browser signals due to lack of industry standards.
      </p>

      <h3 className={styles.subheading}>Changes</h3>
      <p>
        We may update this policy for operational, legal, or regulatory reasons.
      </p>

      <h3 className={styles.subheading}>Complaints</h3>
      <p>
        If unsatisfied with our response to your complaint, you may contact your
        local data protection authority. Contact details above.
      </p>

      <p className={styles.updated}>
        <b>Last updated:</b> 30 September 2025
      </p>
    
    </div>
  );
}
