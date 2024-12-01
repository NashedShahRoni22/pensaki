import products from "../data/products";
import Product from "../components/Product";
import heroBg from "../assets/products/hero-4.jpg";

export default function Products() {
  return (
    <section>
      <div
        style={{
          background: `url(${heroBg}) center / cover no-repeat`,
        }}
        className="relative min-h-screen w-full"
      >
        <div className="absolute flex h-full w-full flex-col items-center justify-center bg-white/20 backdrop-blur-xl">
          <p className="text-uclablue mb-4 text-center text-xl">
            Pensaki Blackboard for Everyone
          </p>
          <h1 className="text-navy mb-12 text-center text-4xl font-medium lg:text-5xl">
            Your All-in-One Solution for Productivity & Collaboration
          </h1>
          <button className="bg-navy rounded px-5 py-3 text-xl text-white">
            Explore Plans & Pricing
          </button>
        </div>
      </div>

      <div>
        {products.map((product, i) => (
          <Product key={i} product={product} i={i} />
        ))}
      </div>
    </section>
  );
}
