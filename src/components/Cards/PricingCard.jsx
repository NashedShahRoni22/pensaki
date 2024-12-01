import { Link } from "react-router-dom";
import { LuDot } from "react-icons/lu";
import { useState } from "react";

export default function PricingCard({ product }) {
  const [selectedUser, setSelectedUser] = useState("");

  const showSelect = Object.keys(product.prices).length > 1;
  const currentPrice =
    product.prices[selectedUser] || Object.values(product.prices)[0];

  return (
    <div className="flex flex-col justify-center">
      <h2 className="text-navy text-center text-3xl font-medium lg:text-left">
        {product.title}
      </h2>

      <div>
        <div className="md:text-text-base my-3 flex items-center justify-between text-center font-medium lg:text-left">
          <p className="md:text-text-base my-3 text-center font-medium text-primary lg:text-left">
            <span className="text-2xl">€{currentPrice}</span>
            /Year
          </p>
          {showSelect && (
            <div className="flex items-center gap-3 text-dark">
              {
                <select
                  onChange={(e) => setSelectedUser(e.target.value)}
                  className="rounded-md border border-red-100 bg-red-50 px-4 py-1 text-lg text-primary outline-none"
                >
                  {Object.keys(product.prices).map((userCount) => (
                    <option
                      key={userCount}
                      value={userCount}
                      className="text-dark"
                    >
                      Pricing for {userCount} {userCount > 1 ? "Users" : "User"}
                    </option>
                  ))}
                </select>
              }
            </div>
          )}
        </div>
      </div>

      <div className="mb-8 mt-3 text-center lg:text-left">
        <Link
          to={product.link}
          className="hover:bg-uclablue bg-navy w-fit rounded px-4 py-2 text-white transition-all duration-200 ease-linear hover:outline"
        >
          Buy Now
        </Link>
      </div>

      <p className="text-navy mb-3 font-medium">Key Features :</p>
      <ul className="space-y-1.5 font-light">
        {product.features.map((feat, i) => (
          <li key={i} className="text-uclablue flex items-center gap-1">
            <LuDot />
            {feat}
          </li>
        ))}
      </ul>
    </div>
  );
}
