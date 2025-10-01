"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import { GoChevronDown } from "react-icons/go";
import { PiSlidersHorizontalLight } from "react-icons/pi";
import { API_URL } from "@/app/congif";
import { useSearchParams } from "next/navigation";
import BestProduct from "@/app/components/bestproduct/BestProduct";
const products = [
  {
    id: "bracelet-gold-rudraksha",
    href: "/products/gold-plated-modern-rudraksha-bracelet",
    image: "/best/c1.avif",
    title: "Gold Plated Modern Rudraksha Bracelet",
    rating: 4.6,
    reviews: 2279,
    price: 599.0,
    mrp: 999.0,
    badgeText: "Up to 40% off",
  },
  {
    id: "karungali-mala-108",
    href: "/products/karungali-mala-108-beads",
    image: "/best/c1.avif",
    title: "Karungali Mala (108 Beads)",
    rating: 4.7,
    reviews: 1314,
    price: 899.0,
    mrp: 1299.0,
    badgeText: "Bestseller",
  },
  {
    id: "spiritual-pendant-om",
    href: "/products/om-spiritual-pendant",
    image: "/best/c1.avif",
    title: "Om Spiritual Pendant",
    rating: 4.5,
    reviews: 980,
    price: 349.0,
    mrp: 599.0,
    badgeText: "Limited stock",
  },
  {
    id: "rudraksha-5mukhi-bracelet",
    href: "/products/5-mukhi-rudraksha-bracelet",
    image: "/best/c1.avif",
    title: "5 Mukhi Rudraksha Bracelet",
    rating: 4.4,
    reviews: 1620,
    price: 279.0,
    mrp: 499.0,
    badgeText: "Hot deal",
  },
  {
    id: "rose-quartz-stone",
    href: "/products/rose-quartz-healing-stone",
    image: "/best/c1.avif",
    title: "Rose Quartz Healing Stone",
    rating: 4.3,
    reviews: 734,
    price: 199.0,
    mrp: 349.0,
    badgeText: "New arrival",
  },
  {
    id: "amethyst-crystal-cluster",
    href: "/products/amethyst-crystal-cluster",
    image: "/best/c1.avif",
    title: "Amethyst Crystal Cluster",
    rating: 4.6,
    reviews: 845,
    price: 749.0,
    mrp: 1199.0,
    badgeText: "Up to 35% off",
  },
  {
    id: "citrine-gemstone-bracelet",
    href: "/products/citrine-gemstone-bracelet",
    image: "/best/c1.avif",
    title: "Citrine Gemstone Bracelet",
    rating: 4.2,
    reviews: 412,
    price: 459.0,
    mrp: 799.0,
    badgeText: "Festival offer",
  },
  {
    id: "lord-ganesha-idol",
    href: "/products/lord-ganesha-idol",
    image: "/best/c1.avif",
    title: "Lord Ganesha Idol",
    rating: 4.8,
    reviews: 1555,
    price: 899.0,
    mrp: 1499.0,
    badgeText: "Top rated",
  },
  {
    id: "sandalwood-incense-pack",
    href: "/products/sandalwood-incense-pack",
    image: "/best/c1.avif",
    title: "Sandalwood Incense Pack (72 Sticks)",
    rating: 4.1,
    reviews: 690,
    price: 149.0,
    mrp: 249.0,
    badgeText: "Value pack",
  },
  {
    id: "navratna-ring-adjustable",
    href: "/products/navratna-ring-adjustable",
    image: "/best/c1.avif",
    title: "Navratna Adjustable Ring",
    rating: 4.5,
    reviews: 1032,
    price: 649.0,
    mrp: 1099.0,
    badgeText: "Up to 40% off",
  },
];
const purpose = [
  { label: "Health", count: 7 },
  { label: "Wealth", count: 2 },
  { label: "Peace", count: 6 },
  { label: "Love", count: 1 },
  { label: "Protection", count: 5 },
  { label: "Balance", count: 5 },
];
const mukhi = [
  { value: 1, name: "Ek", count: 1 },
  { value: 2, name: "Do", count: 1 },
  { value: 3, name: "Teen", count: 1 },
  { value: 4, name: "Chaar", count: 1 },
  { value: 5, name: "Paanch", count: 2 },
  { value: 6, name: "Chhey", count: 1 },
  { value: 7, name: "Saat", count: 1 },
  { value: 8, name: "Aath", count: 1 },
  { value: 9, name: "Nau", count: 1 },
  { value: 10, name: "Das", count: 1 },
  { value: 11, name: "Gyarah", count: 1 },
  { value: "Special", name: "Special", count: 1 },
];

const Page = () => {
  const [openPurpose, setOpenPurpose] = useState("");
  const [products, setProducts] = useState([]);
  const searchParams = useSearchParams();
  const category = searchParams.get("category");

  const getProductByCategory = async () => {
    try {
      const res = await fetch(
        `${API_URL}/product.php/?path=get-product-by-category&category=${category}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await res.json();

      setProducts(data?.data);
      console.log("Res", data);
    } catch (error) {
      console.log("Error", error);
    }
  };
  useEffect(() => {
    getProductByCategory();
  }, []);
  const toggleOption = (option) => {
    setOpenPurpose((prev) => (prev === option ? "" : option)); // toggle
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.mainHeading}>
        <h1>Nepali/Indian Rudraksha</h1>
      </div>
      <div className={styles.filterAndSort}>
        <div className={styles.filterSortText}>
          <div className={styles.sortText}>
            <strong>Filter</strong>
            <PiSlidersHorizontalLight size={28} />
          </div>
          <div className={styles.borderBwt}></div>
          <div className={styles.sortText}>
            <strong>Sort By</strong>
            <p>Best Selling</p>
            <GoChevronDown />
          </div>
        </div>
      </div>

      <div className={styles.filterOptionAndProduct}>
        <div className={styles.filterPanel}>
          <div className={styles.filterSecDiv}>
            <div className={styles.filterPanelDiv}>
              <p className={styles.filterPTag}>Purpose</p>
              <GoChevronDown
                className={`${styles.chevron} ${
                  openPurpose === "purpose" ? styles.rotateUp : ""
                }`}
                onClick={() => toggleOption("purpose")}
              />
            </div>
            {openPurpose === "purpose" &&
              purpose.map((pur, idx) => (
                <div key={idx} className={styles.dropdownContent}>
                  <label>
                    <input className={styles.checkboxType} type="checkbox" />
                    <span>{pur.label}</span> {/* using data from purpose */}
                  </label>
                  <p>({pur.count})</p> {/* if you have counts */}
                </div>
              ))}
          </div>

          <div className={styles.filterSecDiv}>
            <div className={styles.filterPanelDiv}>
              <p className={styles.filterPTag}>Price</p>
              <GoChevronDown
                className={`${styles.chevron} ${
                  openPurpose === "price" ? styles.rotateUp : ""
                }`}
                onClick={() => toggleOption("price")}
              />
            </div>
            {openPurpose === "price" && (
              <>
                <div className={styles.dropdownContent}>
                  <div className={styles.dropdownContentInput}>
                    <input placeholder="₹ 0" />
                    <input placeholder="₹ 4999" />
                  </div>
                </div>
                <input type="range" />
              </>
            )}
          </div>
          <div className={styles.filterSecDiv}>
            <div className={styles.filterPanelDiv}>
              <p className={styles.filterPTag}>Bead</p>
              <GoChevronDown
                className={`${styles.chevron} ${
                  openPurpose === "bead" ? styles.rotateUp : ""
                }`}
                onClick={() => toggleOption("bead")}
              />
            </div>
            {openPurpose === "bead" && (
              <div className={styles.dropdownContent}>
                <label>
                  <input className={styles.checkboxType} type="checkbox" />
                  <span>Rudraksha</span> {/* using data from purpose */}
                </label>
                <p>(12)</p> {/* if you have counts */}
              </div>
            )}
          </div>
          <div className={styles.filterSecDiv}>
            <div className={styles.filterPanelDiv}>
              <p className={styles.filterPTag}>Mukhi</p>
              <GoChevronDown
                className={`${styles.chevron} ${
                  openPurpose === "mukhi" ? styles.rotateUp : ""
                }`}
                onClick={() => toggleOption("mukhi")}
              />
            </div>
            {openPurpose === "mukhi" &&
              mukhi.map((pur, idx) => (
                <div key={idx} className={styles.dropdownContent}>
                  <label>
                    <input className={styles.checkboxType} type="checkbox" />
                    <span>{pur.value + " - " + pur.name}</span>{" "}
                    {/* using data from purpose */}
                  </label>
                  <p>({pur.count})</p> {/* if you have counts */}
                </div>
              ))}
          </div>
        </div>
        <div className={styles.productCard}>
          {products.map((product, index) => (
            <BestProduct key={index} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
