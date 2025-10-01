// app/components/BestProduct.jsx
"use client";

import Link from "next/link";
import styles from "./BestProduct.module.css";
import { useRouter } from "next/navigation";
import { API_Image } from "@/app/congif";
export async function generateStaticParams() {
  return [
    { slug: "money-magnet-fusion-band" },
    { slug: "rudraksha-bracelet" },
    { slug: "tiger-eye-band" },
  ];
}
export default function BestProduct({ product, latest, params }) {
  const {
    image,
    title,
    rating = 0,
    reviews = 0,
    price = 0,
    mrp = 0,
    badgeText,
  } = product;
  const router = useRouter();
  console.log("Product insi", product);
  // split decimals like 599.00 -> "599" and "00"
  const [intPart, decPart] = Number(price).toFixed(2).split(".");
  const [mInt, mDec] = Number(mrp).toFixed(2).split(".");

  return (
    <div
      className={styles.card}
      style={{ cursor: "pointer" }}
      onClick={() => router.push(`/product/${product?.slug}`)}
    >
      <div className={styles.cardLink}>
        <div className={styles.imgWrap}>
          <img
            src={`${API_Image}/${product?.thumbnail}`}
            alt={title}
            className={styles.img}
          />
          {badgeText ? (
            <div className={styles.badge}>
              <svg
                className={styles.badgeIcon}
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill="currentColor"
                  d="M20.59 13.41L12 22l-8.59-8.59A2 2 0 0 1 3 12V5a2 2 0 0 1 2-2h7a2 2 0 0 1 1.41.59l7.18 7.18a2 2 0 0 1 0 2.82Z"
                />
              </svg>
              <span>{`${product?.discount} % off`}</span>
            </div>
          ) : null}
        </div>

        <h4 className={styles.title}>{product?.title}</h4>

        {!latest && (
          <div className={styles.ratingRow}>
            <div
              className={styles.stars}
              aria-label={`${product?.rating} stars`}
            >
              {/* render 5 stars, fill based on rating */}
              {Array.from({ length: 5 }).map((_, i) => (
                <span
                  key={i}
                  className={
                    i + 1 <= Math.round(product?.rating)
                      ? styles.starFill
                      : styles.star
                  }
                >
                  ★
                </span>
              ))}
            </div>
            <span className={styles.reviews}>({product?.reviews})</span>
          </div>
        )}

        <div className={styles.priceRow}>
          <div
            className={styles.price}
            aria-label={`Price ₹ ${product?.price}`}
          >
            <span className={styles.currency}>₹</span>
              
            <span className={styles.amount}>{product?.price - product?.price * (product?.discount / 100)}</span>
            {/* <sup className={styles.decimals}>{decPart}</sup> */}
          </div>

          <div
            className={styles.mrp}
            aria-label={`MRP ₹ ${mrp.toFixed(2)} struck through`}
            title="MRP"
          >
            <span className={styles.currencyMrp}>₹</span>
            <span className={styles.amountMrp}>
             {product?.price}
            </span>
            {/* <sup className={styles.decimalsMrp}>{mDec}</sup> */}
          </div>
        </div>
      </div>
    </div>
  );
}
