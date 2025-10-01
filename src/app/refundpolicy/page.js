import styles from './page.module.css';

export default function RefundPolicy() {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Refund Policy</h2>
      <p>We have a 1-day replacement policy, which means you have 1 day after receiving your item to request a replacement.</p>

      <h3 className={styles.subheading}>IMPORTANT POINTS ABOUT OUR RETURN POLICY</h3>
      <ul className={styles.list}>
        <li>NO RETURNS WILL BE ACCEPTED FOR SIZE ISSUE OR QUALITY OR PERSONAL PREFERENCES. We publish sizes of our products in product description.</li>
        <li>REPLACEMENTS WILL ONLY BE ISSUED AFTER INSPECTION</li>
        <li>UNBOXING VIDEO IS A MUST TO INITIATE A RETURN OR REPLACEMENT</li>
      </ul>

      <h3 className={styles.subheading}>Partial Prepaid with Cash On Delivery</h3>
      <p>The nominal fee (Rs. 59) charged on Partial Prepaid during Cash On Delivery orders is non refundable. In case of RTO on such orders, customer can utilize the partially prepaid amount to place a future order.</p>

      <h3 className={styles.subheading}>Our 1-day replacement policy is applicable only to the following cases:</h3>
      <ul className={styles.list}>
        <li>Wrong Item Received - must be verified via unboxing video</li>
        <li>Defective or Damaged item received - must be verified via unboxing video</li>
      </ul>

      <h3 className={styles.subheading}>The following cases will NOT be eligible under our 1-day replacement policy:</h3>
      <ul className={styles.list}>
        <li>Any item that has been damaged or washed by customer.</li>
        <li>Any item not sent in its original packaging along with the original box and inserts.</li>
        <li>Any item not in its original condition.</li>
      </ul>
      <p>To be eligible for a replacement, your item must be in the same condition that you received it, unworn or unused, with inserts, and in its original packaging.</p>

      <h3 className={styles.subheading}>6 Month Free Replacement Policy</h3>
      <p>All our products are also covered for Color Fading issues under a 6 month replacement policy wherein customer can share their product photographs with our team and request a one-time free product replacement sent to their address and only pay ₹100 Shipping and Handling fee for the same. This amount must be prepaid and Cash On Delivery of the Shipping and Handling Fee is not allowed. Customer may return the original product to us at their own expense or keep it as per their wish. Damaged products are not covered under this policy.</p>

      <h3 className={styles.subheading}>More Details:</h3>
      <ul className={styles.list}>
        <li>Based on the pictures and unboxing video shared by the customer, our team will determine whether a replacement or return is warranted. Decision of our team in this regard is final.</li>
        <li>We charge a flat return fee of ₹100 in case of accepted returns of size issues.</li>
        <li>In case of Prepaid Orders - if customer is unavailable or delivery could not be made successfully by our courier partners, refunds will be issued to in-store wallet after deducting shipping fees.</li>
        <li>We are not responsible if the customer overpays to the courier person without observing the COD amount on the bill.</li>
        <li>If the customer contacts us after the 1 day return policy has lapsed, Om Shri Divine will not be catering to those requests.</li>
        <li>Approved returns will only be given credit in your in-store wallet as a discount code or gift card that can be used on Om Shri Divine for placing your next order. No refunds will be issued to UPI IDs or Bank accounts.</li>
      </ul>

      <h3 className={styles.subheading}>Refunds:</h3>
      <p>We only issue refunds to the customer's bank account via UPI or Net Banking in the exceptional cases where item is delivered with a delay of multiple weeks or if the customer has repeatedly received incorrect or damaged items.</p>

      <h3 className={styles.subheading}>To start a return/replacement:</h3>
      <ol className={styles.orderedList}>
        <li>Please enter your order number and phone/email here: <a href="https:/omshridivine.in/apps/returns/" className={styles.link}>Start Return or Exchange</a></li>
        <li>You will be given an option to return your item.</li>
        <li>Include your order number, photos and videos of the damaged product and any comments.</li>
        <li>If your order is eligible for a return, we will initiate a return courier request.</li>
        <li>After the courier partner has returned the product, we will inspect and upon approval - if the order is eligible for a return, you will get the amount in your in-store wallet as a discount code or gift card for your next order.</li>
      </ol>
      <p>In case a courier partner is not available for return pickup from your pincode (unfortunately, not all courier partners offer return services) - you need to courier the product back to us and we will issue the replacement when the product is delivered to us and inspected.</p>

      <h3 className={styles.subheading}>Damages and issues</h3>
      <p>Please inspect your order upon reception and contact us immediately if the item is defective, damaged or if you receive the wrong item, so that we can evaluate the issue and make it right.</p>

      <h3 className={styles.subheading}>Exceptions / non-returnable items</h3>
      <p>Certain types of items cannot be returned or replaced, like our Nepali Rudraksha range. We do not issue refunds for our Premium range products - however, we offer free 6 month replacement on our Premium range. Please get in touch if you have questions or concerns about your specific item.</p>
      <p>Unfortunately, we cannot accept returns on sale items or gift cards.</p>

      <h3 className={styles.subheading}>Exchanges</h3>
      <p>The fastest way to ensure you get what you want is to return the item you have, and once the return is accepted, make a separate purchase for the new item.</p>

      <h3 className={styles.subheading}>Contact Us</h3>
      <p>We will notify you once we’ve received and inspected your return, and let you know if the replacement was approved or not. If approved, you will get the amount in your in-store wallet as a discount code or gift card for your next order.</p>
      <p>If more than 15 business days have passed since we’ve approved your return, please send us a WhatsApp message: +91 7888568939</p>
    </div>
  );
}
