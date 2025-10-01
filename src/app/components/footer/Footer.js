"use client";

import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaComments, FaBox, FaUndoAlt, FaPlane } from "react-icons/fa";
import styles from "./Footer.module.css";

export default function Footer() {

  return (
    <>
      <div className={styles.featuresWrapper}>
        <div className={styles.box1}>
          <FaComments className={styles.icon1} />
          <div>
            <h4>Happy to help</h4>
            <p>Chat or email</p>
          </div>
        </div>

        <div className={styles.box2}>
          <FaBox className={styles.icon2} />
          <div>
            <h4>Check order status</h4>
            <p>Updates & tracking</p>
          </div>
        </div>

        <div className={styles.box3}>
          <FaUndoAlt className={styles.icon3} />
          <div>
            <h4>Returns & exchanges</h4>
            <p>Quick & hassle-free</p>
          </div>
        </div>

        <div className={styles.box4}>
          <FaPlane className={styles.icon4} />
          <div>
            <h4>Free delivery</h4>
            <p>All over India</p>
          </div>
        </div>
      </div>
      <footer className={styles.footer}>
        <div className={styles.container}>
          {/* Left Section */}
          <div className={styles.left}>
            <div className={styles.logoSection}>
              <h2 className={styles.logo}>
                Om Shri Divine{" "}
                <span className={styles.badge}>
                  🙏 1 Million+ Happy Customers
                </span>
              </h2>
            </div>
            <h3 className={styles.tagline}>Authentic Spiritual Accessories</h3>
            <p className={styles.description}>
              Bringing stories of Indian tradition alive through our unique
              range of wearables, decor, and puja accessories.
            </p>
            <div className={styles.socials}>
              <Link href="#">
                <FaFacebookF />
              </Link>
              <Link href="#">
                <FaInstagram />
              </Link>
              <Link href="#">
                <FaWhatsapp />
              </Link>
              <Link href="#">
                <FaLinkedinIn />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className={styles.links}>
            <h4>Quick Links</h4>
            <Link href="/aboutus">About Us</Link>
            <Link href="/trackorder">Track Order</Link>
            <Link href="/bulkenquiry">Bulk/Wholesale</Link>
            <Link href="/contactus">Returns/Exchange</Link>
            <Link href="/contactus">Contact Us</Link>
            {/* <Link href="#">Om Shri Divine on Amazon</Link> */}
          </div>

          {/* Policies */}
          <div className={styles.links}>
            <h4>Policies</h4>
            <Link href="/refundpolicy">Refund & Return Policy</Link>
            <Link href="/shippingpolicy">Shipping Policy</Link>
            <Link href="/privacypolicy">Privacy Policy</Link>
            <Link href="/termsofservice">Terms of Service</Link>
          </div>

          {/* Contact */}
          <div className={styles.contact}>
            <h4>Get In Touch</h4>
            <p>
              Om Shri Divine Sevak will help you with tracking, return, cancellations,
              and more.
            </p>
            <Link href="#">Chat with Sevak</Link>
            <div className={styles.address}>
              <strong>Om Shri Divine Spiritual Private Limited</strong>
              <p>
                414, Phase 9 Industrial Area, SAS Nagar, <br />
                160062, India
              </p>
            </div>
            <form className={styles.subscribe}>
              <input type="email" placeholder="Your email" />
              <button type="submit">→</button>
            </form>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>© 2025 Om Shri Divine.</p>
        </div>
      </footer>
    </>
  );
}
