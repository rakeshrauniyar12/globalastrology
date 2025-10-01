"use client";
import { useState, useEffect } from "react";
import styles from "./Carousel.module.css";
import { FaSearch, FaCamera } from "react-icons/fa";
import { API_Image, API_URL } from "@/app/congif";
const Carousel = () => {
  const [slides, setSlides] = useState([ {
            image: "/carousel/c1.png",
            title: "Karungali - Natural Ebony Wood",
            desc: "Sacred Karungali Beads in everyday wearable designs.",
          },
          {
            image: "/carousel/t2.webp",
            title: "Every Bead Tells A Story",
            desc: "Experience Om Shri Divine's exclusive range of high quality and lab certified spiritual wearables.",
          },]);

  const fetchSliders = async () => {
    try {
      const res = await fetch(`${API_URL}/slider.php?path=all`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) {
        throw new Error("Failed to fetch categories");
      }
      const data = await res.json();
       console.log("Data line 31",data)
      setSlides(data?.data);
    } catch (error) {
      console.log("Error", error);
    }
  };

  useEffect(() => {
    fetchSliders();
  }, []);

  // const slides =
  //   slider?.length > 0
  //     ? slider
  //     : [
         
  //       ];
console.log("slides ",slides);
  const [current, setCurrent] = useState(0);

  // Auto-slide every 4s
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className={styles.carouselWrap}>
      {/* Background slider */}
      <div
        className={styles.slider}
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className={styles.slide}
            style={{ backgroundImage: `url(${API_Image}/${slide.image})` }}
          />
        ))}
      </div>

      {/* Fixed overlay content (LEFT aligned) */}
      <div className={styles.overlay}>
        <div>
          <h1 className={styles.title}>{slides[current].title}</h1>
          <p className={styles.desc}>{slides[current].desc}</p>
          <button className={styles.knowMore}>{slides[current].btn}</button>
        </div>
      </div>

      {/* Line Indicators */}
      <div className={styles.dots}>
        {slides.map((_, idx) => (
          <span
            key={idx}
            className={`${styles.dot} ${
              idx === current ? styles.activeDot : ""
            }`}
            onClick={() => setCurrent(idx)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
