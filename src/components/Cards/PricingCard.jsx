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
      <h2 className="text-left text-3xl font-medium text-primary">
        {product.title}
      </h2>

      <div className="my-3 flex items-center justify-between gap-2.5 text-center font-medium lg:text-left">
        <p className="md:text-text-base text-accent my-3 min-w-fit text-center font-medium lg:text-left">
          <span className="text-2xl">€{currentPrice}</span>
          /Year
        </p>
        {showSelect && (
          <select
            onChange={(e) => setSelectedUser(e.target.value)}
            className="text-accent rounded-md border border-red-100 bg-red-50 px-1 py-1 text-lg outline-none md:px-4"
          >
            {Object.keys(product.prices).map((userCount) => (
              <option
                key={userCount}
                value={userCount}
                className="text-primary"
              >
                Pricing for {userCount} {userCount > 1 ? "Users" : "User"}
              </option>
            ))}
          </select>
        )}
      </div>

      <div className="mb-8 mt-3 text-left">
        <Link
          to={product.link}
          target="_blank"
          className="hover:bg-secondary w-fit rounded bg-primary px-4 py-2 text-white transition-all duration-200 ease-linear hover:outline"
        >
          Buy Now
        </Link>
      </div>

      <p className="mb-3 font-medium text-primary">Key Features :</p>
      <ul className="space-y-1.5 font-light">
        {product.features.map((feat, i) => (
          <li key={i} className="text-secondary flex items-baseline gap-1">
            <LuDot className="min-w-fit" />
            {feat}
          </li>
        ))}
      </ul>
    </div>
  );
}
