"use client";
import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight, FaCheckCircle } from "react-icons/fa";
import styles from "./Testimonial.module.css";

const testimonials = [
  {
    id: 1,
    name: "Rahul Roy",
    image: "/madetoday/t13.avif",
    title: "Original product",
    review: "Good packaging",
    stars: 5,
    verified: false,
  },
  {
    id: 2,
    name: "DRAGPAL SINGH",
    image: "/madetoday/t22.avif",
    title: "So beautiful",
    review: "Thank you Om Shri Divine for so beautiful bracelet 🙏",
    stars: 5,
    verified: true,
  },
  {
    id: 3,
    name: "G Pradeep Kumar",
    image: "/madetoday/t12.avif",
    title: "I am very Happy",
    review:
      "Thank you Om Shri Divine...Rudraksha is simply super and powerful... you people are doing good job... once again thank u.",
    stars: 5,
    verified: true,
  },
  {
    id: 4,
    name: "Anjali Sharma",
    image: "/madetoday/t13.avif",
    title: "Amazing!",
    review: "Absolutely loved the product, worth every penny!",
    stars: 5,
    verified: true,
  },
  {
    id: 5,
    name: "Rohit Mehra",
    image: "/madetoday/t22.avif",
    title: "Excellent Service",
    review: "Fast delivery and top quality.",
    stars: 5,
    verified: false,
  },
];

const Testimonial = () => {
  const [current, setCurrent] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(3);

  // Handle responsiveness
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsToShow(1);
      } else {
        setItemsToShow(3);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto slide every 3s
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  });

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? testimonials.length - itemsToShow : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrent((prev) =>
      prev >= testimonials.length - itemsToShow ? 0 : prev + 1
    );
  };

  return (
    <div className={styles.sliderWrapper}>
      <button className={styles.arrowLeft} onClick={prevSlide}>
        <FaChevronLeft />
      </button>

      <div className={styles.slider}>
        {testimonials
          .slice(current, current + itemsToShow)
          .concat(
            current + itemsToShow > testimonials.length
              ? testimonials.slice(0, (current + itemsToShow) % testimonials.length)
              : []
          )
          .map((t) => (
            <div key={t.id} className={styles.slide}>
              <img src={t.image} alt={t.name} className={styles.image} />
              <div className={styles.content}>
                <div className={styles.stars}>{"⭐".repeat(t.stars)}</div>
                <h3>
                  {t.name}{" "}
                  {t.verified && (
                    <span className={styles.verified}>
                      <FaCheckCircle /> Verified
                    </span>
                  )}
                </h3>
                <strong>{t.title}</strong>
                <p>{t.review}</p>
              </div>
            </div>
          ))}
      </div>

      <button className={styles.arrowRight} onClick={nextSlide}>
        <FaChevronRight />
      </button>
    </div>
  );
};

export default Testimonial;
