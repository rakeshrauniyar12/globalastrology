"use client";
import React, { useState } from "react";
import styles from "./ProductDetails.module.css";
import { FaStar, FaRupeeSign } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { MdOutlineLocalOffer } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { MdChat, MdEmail } from "react-icons/md";
import {
  AiOutlineQuestionCircle,
  AiOutlineTruck,
  AiOutlineReload,
  AiOutlineFileText,
} from "react-icons/ai";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { API_Image, API_URL } from "@/app/congif";
const data = [
  {
    title: "Description",
    icon: <AiOutlineFileText className={styles.icon} />,
    content: (
      <div className={styles.descriptionBlock}>
        <p className={styles.bold}>
          Attract Wealth and Opportunity with Our{" "}
          <span className={styles.italic}>
            Money Magnet Fusion Band With Pyrite, Tiger Eye, Citrine &
            Aventurine Beads.
          </span>
        </p>
        <p>This bracelet is part of our Energy Stones Range.</p>
        <img
          src="https://cdn.shopify.com/s/files/1/0684/1634/0250/files/description_7.png?v=1745841735"
          alt="description"
          className={styles.imgBlock}
        />

        <h3 className={styles.sectionTitle}>WHY Om Shri Divine:</h3>
        <p>
          The Money Magnet Band is created with a powerful combination of Tiger
          Eye, Pyrite, Citrine, and Aventurine beads, each chosen for its unique
          ability to draw abundance and amplify prosperity.
        </p>
        <img
          src="https://cdn.shopify.com/s/files/1/0684/1634/0250/files/MoneyMagnet_New_3.jpg?v=1745841955"
          alt="bracelet"
          className={styles.imgBlock}
        />

        <p>
          Tiger Eye promotes confidence and focus, helps you to pursue your
          goals.
        </p>
        <p>
          Pyrite is known for attracting wealth and creating a prosperous
          mindset.
        </p>
        <p>
          Citrine radiates positive energy, encouraging success and abundance.
        </p>
        <p>
          Aventurine adds a touch of luck, providing opportunities for growth.
        </p>
        <h3 className={styles.sectionTitle}>FITTING:</h3>
        <p>
          This bracelet has a soft elastic band which gives a comfortable fit on
          most wrist sizes. Its versatile style makes it ideal for daily wear.
        </p>
        <h3 className={styles.sectionTitle}>WORKMANSHIP:</h3>
        <p>
          Handcrafted with care, this bracelet undergoes strict quality checks
          to ensure durability and excellence. Each bead is carefully polished
          to a smooth, radiant finish, highlighting its natural luster and
          earthy tones.
        </p>
        <h3 className={styles.sectionTitle}>CARE INSTRUCTIONS:</h3>
        <p>
          To preserve its natural beauty, keep your bracelet away from water,
          soaps, lotions, perfumes, and harsh chemicals. Wear it as the
          finishing touch of your outfit and store it separately in a dry,
          moisture-free zip-lock bag to maintain its shine and energy.
        </p>
      </div>
    ),
  },
  {
    title: "Got Questions?",
    icon: <AiOutlineQuestionCircle className={styles.icon} />,
    content: (
      <div className={styles.gotQuestionsBlock}>
        <p>
          We are here for you. If you have any questions related to our
          products, website, or your order - please{" "}
          <a href="#" className={styles.link}>
            contact us
          </a>
          .
        </p>
        <p>We try and resolve all queries within a day.</p>
      </div>
    ),
  },
  {
    title: "Delivery and Shipping",
    icon: <AiOutlineTruck className={styles.icon} />,
    content: (
      <div className={styles.shippingBlock}>
        <p className={styles.bold}>
          We offer free delivery on all orders over ₹299.
        </p>
        <p>
          We pay from our pocket for getting the product delivered to you. In
          fact, we lose a lot of money if your delivery doesn't happen and the
          product is returned to us.
        </p>
        <p>
          So when you place your order, please provide complete address and
          accept the order when the courier partner comes for delivery.
        </p>
        <p>
          <span className={styles.bold}>For Prepaid orders: </span>
          There is no order verification time. We will ship your order within 1
          day and we will try to get it delivered to you within 4-5 days.
        </p>
        <p>
          <span className={styles.bold}>For Cash on Delivery orders: </span>
          Please expect 1-2 days for order verification, and another day for
          processing, and a few more days for delivery. In total, you should
          have your product within 1 week.
        </p>
      </div>
    ),
  },
  {
    title: "Returns & Replacement",
    icon: <AiOutlineReload className={styles.icon} />,
    content: (
      <div className={styles.returnsBlock}>
        <p className={styles.bold}>6 Months Replacement Offer:</p>
        <p>
          We offer a free one-time product replacement up to 6 months. To avail
          this, we need to see your unboxing video and you just have to pay ₹100
          in shipping &amp; handling fees. We will ship a brand new product free
          of charge.
        </p>
        <p>
          We have an easy 1 day return policy. Simply create a{" "}
          <a href="#" className={styles.link}>
            return request
          </a>{" "}
          and we'll ship you a replacement.
        </p>
      </div>
    ),
  },
];

const images = [
  "https://japam.in/cdn/shop/files/Website_Watermark_Images_9.jpg?v=1747892390&width=675",
  "https://japam.in/cdn/shop/files/245_PRODUCT_PAGE_2.jpg?v=1747892390&width=675",
  "https://japam.in/cdn/shop/files/MoneyMagnet_New_4.jpg?v=1747892390&width=675",
  "https://japam.in/cdn/shop/files/245_PRODUCT_PAGE_1.jpg?v=1747892390&width=675",
];

const ProductDetails = ({ product }) => {
  
  
  const [imgIdx, setImgIdx] = useState(0);


  const handlePrev = () =>
    setImgIdx((idx) => (idx === 0 ? images.length - 1 : idx - 1));
  const handleNext = () =>
    setImgIdx((idx) => (idx === images.length - 1 ? 0 : idx + 1));

  const [open, setOpen] = useState(() => {
    const initialOpen = Array(data.length).fill(false);
    initialOpen[0] = true;
    return initialOpen;
  });

  const toggleSection = (idx) => {
    setOpen((prev) => prev.map((item, i) => (i === idx ? !item : item)));
  };

  return (
    <div className={styles.productDetailsContainer}>
      <div className={styles.sliderSection}>
        <div className={styles.imageWrapper}>
          <button className={styles.sliderArrow} onClick={handlePrev}>
            <FiChevronLeft />
          </button>
          <img
            src={images[imgIdx]}
            alt="product"
            className={styles.productImage}
          />
          <button className={styles.sliderArrow} onClick={handleNext}>
            <FiChevronRight />
          </button>
        </div>
      </div>

      <div className={styles.detailsSection}>
        <div className={styles.offerTag}>
          <MdOutlineLocalOffer className={styles.offerIcon} />
          <span>46% off</span>
        </div>
        <h2 className={styles.productTitle}>
          Money Magnet Fusion Band - Pyrite, Tiger Eye, Citrine & Aventurine
          Beads
        </h2>
        <div className={styles.reviewsRow}>
          {[...Array(5)].map((_, i) => (
            <FaStar className={styles.starIcon} key={i} />
          ))}
          <span className={styles.reviewsCount}>485 reviews</span>
        </div>
        <div className={styles.priceSection}>
          <span className={styles.currentPrice}>
            <FaRupeeSign className={styles.rupee} />
            699
          </span>
          <span className={styles.oldPrice}>
            <FaRupeeSign />
            1299
          </span>
        </div>
        <span className={styles.gstNote}>
          GST included. Free delivery over ₹299
        </span>

        <div className={styles.couponRow}>
          <MdOutlineLocalOffer className={styles.couponIcon} />
          <span>
            Use code <b>NAMASTE</b> & get Free 5 Mukhi Rudraksha worth ₹399
          </span>
        </div>

        <div className={styles.pranRow}>
          <div>
            <input type="checkbox" />
            <img
              src="https://cdn.shopify.com/s/files/1/0684/1634/0250/files/siddh_icon_28742f09-f820-44f0-9cd7-060c546811eb.png?v=1710383843"
              alt="pran pratishtha"
              className={styles.pranImg}
            />
            <span>Get Siddh/Energized Product (Pran Pratishtha)</span>
          </div>
          <div>
            <span className={styles.plus100}>+ ₹100</span>
          </div>
        </div>

        <div className={styles.orderBtns}>
          <button className={styles.codBtn}>
            Order Now - Cash On Delivery
          </button>
          <button className={styles.payOnlineBtn}>
            Pay Online & Get ₹20 Off
            <img
              src="https://cdn.gokwik.co/v4/images/upi-icons.svg"
              alt="paytm"
              className={styles.payIcon}
            />
          </button>
        </div>

        <div className={styles.deliverySection}>
          <IoLocationOutline className={styles.shippingIcon} />
          <span>
            Delivery
            <input
              className={styles.pincodeInput}
              placeholder="Enter Pincode"
              maxLength={6}
            />
            <button className={styles.checkBtn}>Check</button>
          </span>
        </div>

        <div className={styles.exclusiveOffersTitle}>EXCLUSIVE OFFERS</div>
        <div className={styles.offersRow}>
          <div className={styles.offerCard}>
            <span className={styles.cardTitle}>Free Rudraksha</span>
            <span className={styles.cardDesc}>
              Complimentary 5 Mukhi certified Rudraksha
            </span>
            <div className={styles.couponCode}>
              NAMASTE <button className={styles.copyBtn}>Copy</button>
            </div>
          </div>
          <div className={styles.offerCard}>
            <span className={styles.cardTitle}>Buy 2 Get 1 Free</span>
            <span className={styles.cardDesc}>
              Add 3 items to cart. Min value item is free
            </span>
            <div className={styles.couponCode}>AUTO APPLIED</div>
          </div>
          <div className={styles.offerCard}>
            <span className={styles.cardTitle}>Get ₹100 Off</span>
            <span className={styles.cardDesc}>
              On minimum cart value of ₹999
            </span>
            <div className={styles.couponCode}>
              NAMASTE100 <button className={styles.copyBtn}>Copy</button>
            </div>
          </div>
        </div>
        <div className={styles.helpContainer}>
          <div className={styles.heading}>NEED HELP?</div>
          <div className={styles.timing}>Mon to Sat 10 AM to 5 PM</div>
          <div className={styles.contactRow}>
            <FaWhatsapp className={styles.icon} />
            <a href="https://wa.me/yourwhatsapplink" className={styles.link}>
              Order on WhatsApp
            </a>
          </div>
          <div className={styles.contactRow}>
            <MdChat className={styles.icon} />
            <span className={styles.instantHelp}>
              Instant Help:{" "}
              <a href="https://your-chat-link.com" className={styles.link}>
                Chat With Sevak
              </a>
            </span>
          </div>
          <div className={styles.contactRow}>
            <MdEmail className={styles.icon} />
            <span className={styles.email}>
              Email:{" "}
              <a href="mailto:support@OmShriDivine.in" className={styles.link}>
                support@Om Shri Divine.in
              </a>
            </span>
          </div>
        </div>

        <div className={styles.accordionRoot}>
          {data.map((section, idx) => (
            <div key={section.title} className={styles.sectionBlock}>
              <button
                type="button"
                className={styles.sectionToggle}
                onClick={() => toggleSection(idx)}
                aria-expanded={open[idx]}
              >
                <span className={styles.iconWrap}>{section.icon}</span>
                <span className={styles.sectionHeading}>{section.title}</span>
                <span className={styles.chevron}>
                  {open[idx] ? <FiChevronUp /> : <FiChevronDown />}
                </span>
              </button>
              {open[idx] && (
                <div className={styles.sectionContent}>{section.content}</div>
              )}
              <hr className={styles.hrLine} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
