import products from "../data/products";
import Product from "../components/Product";

export default function Products() {
  return (
    <section className="pt-10 text-dark md:pt-20">
      <h1 className="mb-12 text-center text-4xl font-medium text-dark lg:text-5xl">
        Explore Our Product Plans
      </h1>

      <div>
        {products.map((product, i) => (
          <Product key={i} product={product} i={i} />
        ))}
      </div>
    </section>
  );
}
