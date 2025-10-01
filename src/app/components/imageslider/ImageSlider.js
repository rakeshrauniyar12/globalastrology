"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "./ImageSlider.module.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ImageSlider = ({ product }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = product.additionalImages || [];

  const goLeft = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goRight = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  if (images.length === 0) return null;

  return (
    <div className={styles.sliderContainer}>
      <button className={styles.leftArrow} onClick={goLeft}>
        <FaChevronLeft />
      </button>

      <div className={styles.imageWrapper}>
        <Image
          src={images[currentIndex]}
          alt={`product-${currentIndex}`}
          width={500}
          height={500}
          className={styles.image}
        />
      </div>

      <button className={styles.rightArrow} onClick={goRight}>
        <FaChevronRight />
      </button>
    </div>
  );
};

export default ImageSlider;
