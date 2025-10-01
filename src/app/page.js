"use client"
import Link from "next/link";
import BestProduct from "./components/bestproduct/BestProduct";
import Carousel from "./components/carousel/Carousel";
import styles from "./page.module.css";
import Testimonial from "./components/testimonials/Testimonial";
import { API_URL } from "./congif";
import { useEffect, useState } from "react";
// app/data/products.js
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
const collection = [
  { id: 1, img: "/collection/c1.webp", title: "Rudraksha Bracelets" },
  { id: 2, img: "/collection/c1.webp", title: "Rudraksha Bracelets" },
  { id: 3, img: "/collection/c1.webp", title: "Rudraksha Bracelets" },
  { id: 4, img: "/collection/c1.webp", title: "Rudraksha Bracelets" },
  { id: 5, img: "/collection/c1.webp", title: "Rudraksha Bracelets" },
  { id: 6, img: "/collection/c1.webp", title: "Rudraksha Bracelets" },
  { id: 7, img: "/collection/c1.webp", title: "Rudraksha Bracelets" },
  { id: 8, img: "/collection/c1.webp", title: "Rudraksha Bracelets" },
  { id: 9, img: "/collection/c1.webp", title: "Rudraksha Bracelets" },
];

const collection1 = [
  { id: 1, img: "/stone/s1.avif", title: "Rudraksha Bracelets" },
  { id: 2, img: "/stone/s1.avif", title: "Rudraksha Bracelets" },
  { id: 3, img: "/stone/s1.avif", title: "Rudraksha Bracelets" },
  { id: 4, img: "/stone/s1.avif", title: "Rudraksha Bracelets" },
  { id: 5, img: "/stone/s1.avif", title: "Rudraksha Bracelets" },
  { id: 6, img: "/stone/s1.avif", title: "Rudraksha Bracelets" },
  { id: 7, img: "/stone/s1.avif", title: "Rudraksha Bracelets" },
  { id: 8, img: "/stone/s1.avif", title: "Rudraksha Bracelets" },
];

const coll2 = [
  { id: 1, img1: "/madetoday/c1.jpg", img2: "/madetoday/c3.webp" },
  { id: 2, img1: "/madetoday/c1.jpg", img2: "/madetoday/c3.webp" },
  { id: 3, img1: "/madetoday/c1.jpg", img2: "/madetoday/c3.webp" },
];

const coll3 = [
  { id: 1, img: "/madetoday/c2.webp" },
  { id: 2, img: "/madetoday/c4.webp" },
  { id: 3, img: "/madetoday/c4.webp" },
];
const coll4 = [
  { id: 1, img: "/madetoday/s1.avif" },
  { id: 2, img: "/madetoday/s2.avif" },
  { id: 3, img: "/madetoday/s3.avif" },
  { id: 4, img: "/madetoday/s1.avif" },
  { id: 5, img: "/madetoday/s2.avif" },
  { id: 6, img: "/madetoday/s3.avif" },
  { id: 7, img: "/madetoday/s1.avif" },
  { id: 8, img: "/madetoday/s2.avif" },
];

const coll5 = [
  { id: 1, img1: "/madetoday/ch1.webp", title: "Everyday Wearables", btn: "SHOP BRACELETS" },
  { id: 2, img1: "/madetoday/ch2.webp", title: "Elegance Rudraksha Range", btn: "SHOP WOMEN" },
  { id: 3, img1: "/madetoday/ch3.webp", title: "Premium Designs", btn: "SHOP PREMIUM" },
  { id: 4, img1: "/madetoday/ch4.webp", title: "Wear With Pride", btn: "SHOP MALAS" },
];
export default function Home() {
const [products, setProducts] = useState([]);



  const getProduct = async () => {
    try {
      const res = await fetch(`${API_URL}/product.php/?path=get-products`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();

      setProducts(data?.data);
      console.log("Res", data);
    } catch (error) {
      console.log("Error", error);
    }
  };
  useEffect(() => {
    getProduct();
  }, []);
  return (
    <div className={styles.page}>
      <Carousel />
      <div className={styles.commonSec}>
        <h1 className={styles.collectionH1}>Shop Our Collection</h1>
        <div className={styles.collectionGrid}>
          {collection.map((pro) => (
            <div key={pro.id}>
              <div className={styles.collectionImg}>
                <img src={pro.img} />
              </div>
              <p className={styles.collecP}>{pro.title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.commonSec}>
        <h1>Om Shri Divine Bestsellers</h1>
        <div className={styles.bestGridCard}>
          {products.map((product, index) => (
            <BestProduct key={index} product={product} />
          ))}
        </div>
      </div>

      <div className={styles.commonSec}>
        <h1 className={styles.sec3H1}>Shop By Bead/Stone</h1>
        <div className={styles.stoneDIvGrid}>
          {collection1.map((pro) => (
            <div key={pro.id}>
              <div className={styles.stoneImg}>
                <img src={pro.img} />
              </div>
              {/* <p className={styles.collecP}>{pro.title}</p> */}
            </div>
          ))}
        </div>
      </div>

      <div className={styles.sec4Div}>
        <div className={styles.sec4DivContent}>
          <h1>Rooted In Tradition, Made For Today</h1>
          <div className={styles.gridSec4div}>
            <div className={styles.gridSec4div1}>
              {coll2.map((col) => (
                <div key={col.id} className={styles.gridSec4divimg}>
                  <div className={styles.gridSec4divimg1}>
                    <img src={col.img1} />
                  </div>
                  <div className={styles.gridSec4divimg1}>
                    <img src={col.img2} />
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.gridSec4div2}>
              {coll3.map((img) => (
                <div key={img.id}  className={styles.gridSec4divimg2}>
                  <img src={img.img} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.commonSec}>
        <h1>Latest & Trending</h1>
        <div className={styles.collectionGrid1}>
          {products.map((product, index) => (
            <BestProduct key={index} product={product} latest={true} />
          ))}
        </div>
      </div>

      <div className={styles.sec5Div}>
        <div className={styles.sec5DivH1}>
          <h1>Lab Tested Rudraksha</h1>
          <p className={styles.sec5DivP1}>
            We follow our propreitory system of BTR (Batch Test Reports) to
            ensure you always get original and genuine Rudraksha.
          </p>
        </div>

        <div className={styles.sec5DivImg}>
          <img src="/madetoday/sec5.webp" />
        </div>
      </div>

      <div className={styles.commonSec}>
        <div className={styles.sec6Div}>
          <h1>Explore Energy Stones</h1>
          <Link href="/product/rakhi">View all</Link>
        </div>
        <div className={styles.bestGridCard}>
          {products.map((product, index) => (
            <BestProduct key={index} product={product} />
          ))}
        </div>
      </div>

      <div className={styles.sec7Div}>
        <div className={styles.sec6DivHeading}>
          <h1>Siddh Products Delivered To Your Home</h1>
          <p>
            Each Siddh order comes with a Siddhi Prakriya Report (SPR) with a QR
            code to watch a short video of the Siddhi ceremony of your product.
          </p>
        </div>
        <div className={styles.youtubeVideoSec}>
          <iframe
            src="https://www.youtube.com/embed/LCrxcFGokJk?si=e4RrAwHzLacX-Qb4"
            title="YouTube video player"
           
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
      </div>

      <div className={styles.sec8Div}>
        <div className={styles.sec6Div}>
          <h1>Single Rudraksha Beads</h1>
          <Link href="">View all</Link>
        </div>
        <div className={styles.div8Grid}>
          <div>
            <div className={styles.divImage}>
              <img src="/madetoday/r1.webp" />
            </div>
            <div className={styles.divText}>
              <h2>Original Nepali Rudraksha</h2>
              <p>1 Mukhi to 11 Mukhi - with certificate</p>
            </div>
          </div>
          <div className={styles.collectionGrid2}>
            {products.map((product, index) => (
              <BestProduct key={index} product={product} latest={true} />
            ))}
          </div>
        </div>
      </div>

      <div className={styles.sec9Div}>
        <h1>Shop By Purpose</h1>
        <div className={styles.stoneDIvGrid}>
          {coll4.map((pro) => (
            <div key={pro.id}>
              <div className={styles.stoneImg}>
                <img src={pro.img} />
              </div>
              {/* <p className={styles.collecP}>{pro.title}</p> */}
            </div>
          ))}
        </div>
      </div>

      <div className={styles.commonSec}>
        <h1>Spiritual Jewellery</h1>
        <div className={styles.bestGridCard}>
          {products.map((product, index) => (
            <BestProduct key={index} product={product} />
          ))}
        </div>
      </div>

      <div className={styles.sec10Div}>
        <div className={styles.sec10DivImg}>
          <img src="/madetoday/hamp2.webp" />
        </div>
        <div className={styles.sec10DivText}>
          <h1>Luxury Spiritual Hamper</h1>
          <p>
            Our Essence Of Spirituality Gift Hamper has a range of wearables in
            beautiful packaging - perfect for gifting.
          </p>
          <button>
            BUY NOW <span style={{ fontSize: "25px" }}>→</span>
          </button>
        </div>
      </div>

      <div className={styles.commonSec}>
        <div className={styles.sec6Div}>
          <h1>Save More With Combos</h1>
          <Link href="">View all</Link>
        </div>
        <div className={styles.collectionGrid1}>
          {products.map((product, index) => (
            <BestProduct key={index} product={product} latest={true} />
          ))}
        </div>
      </div>

      <div className={styles.sec11Div}>
        <h1>Choose Your Style</h1>
        <div className={styles.sec11DivGrid}>
          {coll5.map((pro) => (
            <div key={pro.id} className={styles.sec11DivGridCard}>
              <div className={styles.sec11DivGridImg}>
                <img src={pro.img1} />

                <div className={styles.sec11DivGridText}>
                  <h1>{pro.title}</h1>
                  <button>{pro.btn}</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

     <div className={styles.sec12Div}>
       <h1>Over 600,000 Happy Customers ♥️ 🙏</h1>
       <p>with thousands of 5-star reviews</p>
       <Testimonial/>
     </div>

    </div>
  );
}
