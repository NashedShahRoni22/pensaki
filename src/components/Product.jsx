import { useState } from "react";
import { Link } from "react-router-dom";
import { LuDot } from "react-icons/lu";

export default function Product({ product, i }) {
  const [selectedUser, setSelectedUser] = useState("");

  const showSelect = Object.keys(product.prices).length > 1;
  const currentPrice =
    product.prices[selectedUser] || Object.values(product.prices)[0];

    console.log(selectedUser)

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
          <h2 className="text-3xl font-medium text-primary md:text-4xl">
            {product.title}
          </h2>

          <div className="text-accent mt-4 flex items-center justify-between gap-2 font-medium">
            <div className="min-w-fit">
              <span className="text-2xl font-medium md:text-3xl">
                €{currentPrice}
              </span>
              /Year
            </div>
            {showSelect && (
              <select
                onChange={(e) => setSelectedUser(e.target.value)}
                className="text-accent max-w-fit rounded-md border border-red-100 bg-red-50 p-0.5 text-lg outline-none md:px-4 md:py-1.5 md:text-xl"
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

          <div className="mb-9 mt-11 text-left lg:text-left">
            <Link
              to={`https://www.bobosohomail.com/email_ins/signUp_email.php?registration_from=${1}&user=${selectedUser || product.users[0]}&package=${product.type}&price=${currentPrice}`}
              target="_blank"
              className="hover:bg-secondary w-fit rounded bg-primary px-4 py-2 text-white transition-all duration-200 ease-linear"
            >
              Buy Now
            </Link>
          </div>

          <p className="mb-3 font-medium text-primary">Key Features :</p>
          <ul className="space-y-1.5 font-light">
            {product.features.map((feat, i) => (
              <li key={i} className="text-secondary flex items-center gap-1">
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
