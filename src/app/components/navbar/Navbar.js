"use client";
import { useState } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";
import {
  FiSearch,
  FiUser,
  FiZap,
  FiShoppingBag,
  FiMenu,
  FiX,
} from "react-icons/fi";
import { FaChevronDown } from "react-icons/fa6";
import { FaRocketchat } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa6";
import Cart from "../Cart/Cart";

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [showCart, setShowCart] = useState(false);
  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <div className={styles.navbarWrapper}>
      {/* 🔼 Top slider */}
      <div className={styles.topSlider}>
        <p>₹20 NAMASTE Discount & Prepaid Offer</p>
      </div>

      {/* 🔼 Middle row (logo + icons) */}
      <div className={styles.middle}>
        <div className={styles.logo}>
          <Link href="/"><img className={styles.logoImage} src="/logo.jpg"/></Link>
        </div>

        {/* Search box (desktop inline, between logo & icons) */}
        {showSearch && (
          <div className={styles.searchBoxDesktop}>
            <input type="text" placeholder="Search products..." />
          </div>
        )}
        <div className={styles.icons}>
          <FiSearch size={30} onClick={() => setShowSearch(!showSearch)} />
          <FiUser size={30} />
          <FiZap size={30} />
          <div className={styles.cartIcon}>
            <FiShoppingBag size={30} onClick={() => setShowCart(!showCart)} />
            <span className={styles.badge}>2</span>
          </div>
          <div
            className={styles.hamburger}
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            {mobileMenu ? <FiX size={30} /> : <FiMenu size={30} />}
          </div>
        </div>
      </div>
      {showCart && <Cart onClose={() => setShowCart(false)} />}
      {/* 🔼 Bottom nav links */}
      <div
        className={`${styles.bottomLinks} ${mobileMenu ? styles.showMenu : ""}`}
      >
        <ul>
          <li>
            <button onClick={() => toggleDropdown("rudraksha")}>
              Rudraksha{" "}
              {openDropdown === "rudraksha" ? (
                <FaChevronUp />
              ) : (
                <FaChevronDown />
              )}
            </button>
            {openDropdown === "rudraksha" && (
              <div className={styles.dropdown}>
                <Link href="#">1 Mukhi</Link>
                <Link href="#">2 Mukhi</Link>
                <Link href="#">5 Mukhi</Link>
              </div>
            )}
          </li>

          <li>
            <button onClick={() => toggleDropdown("jewellery")}>
              Spiritual Jewellery{" "}
              {openDropdown === "jewellery" ? (
                <FaChevronUp />
              ) : (
                <FaChevronDown />
              )}
            </button>
            {openDropdown === "jewellery" && (
              <div className={styles.dropdown}>
                <Link href="#">Bracelets</Link>
                <Link href="#">Necklaces</Link>
                <Link href="#">Rings</Link>
              </div>
            )}
          </li>

          <li>
            <Link href="#">Karungali</Link>
          </li>

          <li>
            <button onClick={() => toggleDropdown("stones")}>
              Energy Stones{" "}
              {openDropdown === "stones" ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            {openDropdown === "stones" && (
              <div className={styles.dropdown}>
                <Link href="#">Amethyst</Link>
                <Link href="#">Tiger Eye</Link>
                <Link href="#">Clear Quartz</Link>
              </div>
            )}
          </li>

          <li>
            <button onClick={() => toggleDropdown("gifts")}>
              Gift Hampers{" "}
              {openDropdown === "gifts" ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            {openDropdown === "gifts" && (
              <div className={styles.dropdown}>
                <Link href="#">Festive</Link>
                <Link href="#">Corporate</Link>
              </div>
            )}
          </li>

          <li>
            <Link href="#">Idols</Link>
          </li>

          <li>
            <button onClick={() => toggleDropdown("support")}>
              Support{" "}
              {openDropdown === "support" ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            {openDropdown === "support" && (
              <div className={styles.dropdown}>
                <Link href="#">FAQ</Link>
                <Link href="#">Contact</Link>
              </div>
            )}
          </li>
        </ul>

        <div className={styles.chatText}>
          <FaRocketchat />
          <p>Chat with us</p>
        </div>
      </div>

      {/* Search Box (Mobile - below bottom links) */}
      {showSearch && (
        <div className={styles.searchBoxMobile}>
          <input type="text" placeholder="Search products..." />
        </div>
      )}
    </div>
  );
};

export default Navbar;
