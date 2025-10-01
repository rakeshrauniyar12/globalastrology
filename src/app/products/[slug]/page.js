import ProductDetails from "@/app/components/productdetails/ProductDetails";
import { API_URL } from "@/app/congif";

// Runs at build time when using `output: "export"`
export async function generateStaticParams() {
  const res = await fetch(`${API_URL}/product.php?path=get-all-slugs`);
  const json = await res.json();

  if (!json.ok || !json.data) {
    // ⚠️ Must return something, otherwise Next.js throws error
    return [{ slug: "fallback-product" }];
  }
  console.log("JSON slug", json.data);
  return json.data.map((p) => ({
    slug: p.slug,
  }));
}

export default async function Page({ params }) {
  const res = await fetch(
    `${API_URL}/product.php?path=get-product-by-slug&slug=${params.slug}`
  );
  const json = await res.json();

  if (!json.ok) {
    return <div>Product not found</div>;
  }

  return <ProductDetails product={json.data} />;
}
