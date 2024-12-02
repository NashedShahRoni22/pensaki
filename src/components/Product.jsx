import { useState } from "react";
import { Link } from "react-router-dom";
import { LuDot } from "react-icons/lu";

export default function Product({ product, i }) {
  const [selectedUser, setSelectedUser] = useState("");

  const showSelect = Object.keys(product.prices).length > 1;
  const currentPrice =
    product.prices[selectedUser] || Object.values(product.prices)[0];

  return (
    <div className={`${i % 2 === 0 ? "bg-white" : "bg-mint"}`}>
      <div
        className={`flex flex-col gap-8 px-8 py-10 md:container md:mx-auto lg:flex-row lg:gap-16 ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
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
          <h2 className="text-center text-3xl font-medium text-navy md:text-4xl lg:text-left">
            {product.title}
          </h2>

          <div className="mt-4 flex items-center justify-between text-center font-medium text-primary lg:text-left">
            <div>
              <span className="text-3xl font-semibold">€{currentPrice}</span>
              /Year
            </div>
            {showSelect && (
              <div className="flex items-center gap-3 text-dark">
                {
                  <select
                    onChange={(e) => setSelectedUser(e.target.value)}
                    className="max-w-fit rounded-md border border-red-100 bg-red-50 px-4 py-1.5 text-xl text-primary outline-none"
                  >
                    {Object.keys(product.prices).map((userCount) => (
                      <option
                        key={userCount}
                        value={userCount}
                        className="text-dark"
                      >
                        Pricing for {userCount}{" "}
                        {userCount > 1 ? "Users" : "User"}
                      </option>
                    ))}
                  </select>
                }
              </div>
            )}
          </div>

          <div className="mb-9 mt-11 text-center lg:text-left">
            <Link
              to={product.link}
              className="w-fit rounded bg-navy px-4 py-2 text-white transition-all duration-200 ease-linear hover:bg-uclablue"
            >
              Buy Now
            </Link>
          </div>

          <p className="mb-3 font-medium text-navy">Key Features :</p>
          <ul className="space-y-1.5 font-light">
            {product.features.map((feat, i) => (
              <li key={i} className="flex items-center gap-1 text-uclablue">
                <LuDot />
                {feat}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
