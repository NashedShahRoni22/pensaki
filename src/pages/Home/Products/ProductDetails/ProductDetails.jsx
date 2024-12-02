import Product from "../../../../components/Product";
import products from "../../../../data/products";

export default function ProductDetails() {
  return (
    <section className="flex flex-col gap-12 py-10 md:py-20">
      {products.map((product, i) => (
        <Product key={i} product={product} i={i} />
      ))}
    </section>
  );
}
