import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { LuDot } from "react-icons/lu";
import products from "../../../data/products";
import "swiper/css";
import "swiper/css/navigation";
import "./pricing.css";

export default function Pricing() {
  return (
    <section id="pricing" className="bg-[#fef9f3] px-5 py-10 md:py-20">
      <div className="md:container md:relative md:mx-auto">
        <h2 className="text-4xl font-medium text-dark lg:text-5xl">
          Plans & Pricing
        </h2>
        <p className="mt-4 text-lg text-primary">
          Flexible pricing options tailored to meet your needs
        </p>

        <div className="relative pt-4 md:static md:pt-0">
          <Swiper
            slidesPerView={"auto"}
            spaceBetween={30}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper mt-12 h-full md:static"
          >
            {products.map((product, i) => (
              <SwiperSlide
                key={i}
                className="h-auto max-w-xl rounded-3xl border bg-white px-6 py-10"
              >
                <div className="flex flex-col justify-center">
                  <h2 className="text-center text-3xl lg:text-left">
                    {product.title}
                  </h2>

                  <p className="md:text-text-base my-3 text-center font-medium text-primary lg:text-left">
                    <span className="text-2xl">€{product.price}</span>
                    /Year
                  </p>

                  <div className="mb-8 mt-3 text-center lg:text-left">
                    <Link
                      to={product.link}
                      className="w-fit rounded bg-primary px-4 py-2 text-white transition-all duration-200 ease-linear hover:bg-primary-hover hover:outline hover:outline-red-100"
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
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
