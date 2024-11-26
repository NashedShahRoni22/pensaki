import { LuDot } from "react-icons/lu";
import products from "../data/products";
import { Link } from "react-router-dom";

export default function Products() {
  return (
    <section className="pt-10 text-dark md:pt-20">
      <h1 className="mb-12 text-center text-4xl font-medium text-dark lg:text-5xl">
        Explore Our Product Plans
      </h1>

      <div>
        {products.map((product, i) => (
          <div
            key={product.id}
            className={`py-10 md:py-20 ${i % 2 !== 0 && "bg-[#f7f1e5]"}`}
          >
            <div
              className={`flex flex-col gap-8 px-5 md:container md:mx-auto lg:flex-row lg:gap-16 ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
            >
              {/* Product Image Div */}
              <div className="lg:w-1/2">
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-fit w-full max-w-lg"
                />
              </div>

              {/* Product Details Div */}
              <div className="flex flex-col justify-center lg:w-1/2">
                <h2 className="text-center text-3xl font-medium md:text-4xl lg:text-left">
                  {product.title}
                </h2>

                <p className="md:text-text-base my-3 text-center font-medium text-primary lg:text-left">
                  <span className="text-3xl font-semibold">
                    €{product.price}
                  </span>
                  /Year
                </p>

                <div className="mb-8 mt-3 text-center lg:text-left">
                  <Link
                    to={product.link}
                    className="hover:bg-primary-hover w-fit rounded bg-primary px-4 py-2 text-white transition-all duration-200 ease-linear hover:outline hover:outline-red-100"
                  >
                    Buy Now
                  </Link>
                </div>

                <p className="mb-3 font-medium text-dark">Key Features :</p>
                <ul className="space-y-1.5 font-light">
                  {product.features.map((feat, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-1 text-mediumGray"
                    >
                      <LuDot />
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
