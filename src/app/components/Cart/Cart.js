import React, { useEffect, useState } from "react";
import styles from "./Cart.module.css";
import { MdDeleteOutline } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { HiOutlineChevronRight } from "react-icons/hi";

const products = [
  {
    name: "1 Mukhi Indian Rudraksha - Ek Mukhi",
    img: "https://japam.in/cdn/shop/files/IMG-2136.jpg?v=1702790622&width=180",
    price: 1999,
    oldPrice: 6999,
    qty: 1,
  },
  {
    name: "1 - 14 Mukhi Siddha Rudraksha Mala",
    img: "https://japam.in/cdn/shop/files/1to14mukhi_rudraksha_mala_3.jpg?v=1748599086&width=180",
    price: 8900,
    oldPrice: 18400,
    qty: 1,
  },
];

const Cart = ({ onClose }) => {
  const [visible, setVisible] = useState(false);
  const [cartItems, setCartItems] = useState(products);

  useEffect(() => {
    setVisible(true);
  }, []);

  const total = cartItems.reduce((sum, p) => sum + p.price * p.qty, 0);
  const discount = cartItems.reduce(
    (sum, p) => sum + (p.oldPrice - p.price) * p.qty,
    0
  );

  const handleClose = () => {
    setVisible(false);
    setTimeout(() => onClose(), 400);
  };

  const updateQuantity = (index, change) => {
    const newItems = [...cartItems];
    newItems[index].qty = Math.max(1, newItems[index].qty + change);
    setCartItems(newItems);
  };

  const removeItem = (index) => {
    const newItems = cartItems.filter((_, i) => i !== index);
    setCartItems(newItems);
  };

  return (
    <div
      className={`${styles.cartOverlay} ${!visible ? styles.hide : ""}`}
      onClick={handleClose}
    >
      <div
        className={`${styles.cartPanel} ${visible ? styles.show : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.cartHeader}>
          <h2>Your cart</h2>
          <span className={styles.closeBtn} onClick={handleClose}>
            <IoClose />
          </span>
        </div>

        <div className={styles.cartItems}>
          {cartItems.map((p, idx) => (
            <div key={idx} className={styles.cartItem}>
              <img src={p.img} alt={p.name} className={styles.productImg} />
              <div className={styles.productInfo}>
                <div className={styles.productName}>{p.name}</div>
                <div className={styles.priceSection}>
                  <span className={styles.price}>
                    ₹{p.price.toLocaleString()}
                  </span>
                  <span className={styles.oldPrice}>
                    ₹{p.oldPrice.toLocaleString()}
                  </span>
                </div>
                <div className={styles.qtyControls}>
                  <div className={styles.qtyBox}>
                    <button onClick={() => updateQuantity(idx, -1)}>
                      <FaMinus />
                    </button>
                    <span>{p.qty}</span>
                    <button onClick={() => updateQuantity(idx, 1)}>
                      <FaPlus />
                    </button>
                  </div>
                  <span
                    className={styles.deleteBtn}
                    onClick={() => removeItem(idx)}
                  >
                    <MdDeleteOutline />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.cartFooter}>
          <div className={styles.deliveryInfo}>
            GST included. Free delivery over{" "}
            <span className={styles.highlight}>₹299</span>
          </div>

          <button className={styles.checkoutBtn}>
            <div>
              Checkout - ₹ 10,899
              <div className={styles.prepayOffer}>
                Get Extra{" "}
                <span className={styles.offerHighlight}>
                  ₹20 off on prepaid
                </span>
              </div>
            </div>
            <div className={styles.paymentIcons}>
              <img
                src="https://cdn.gokwik.co/v4/images/upi-icons.svg"
                alt="UPI Payment"
              />
            </div>
            <HiOutlineChevronRight color="white" size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
