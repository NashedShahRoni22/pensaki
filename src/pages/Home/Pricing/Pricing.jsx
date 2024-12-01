import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import PricingCard from "../../../components/Cards/PricingCard";
import products from "../../../data/products";
// Custom CSS & SwiperJS style
import "swiper/css";
import "swiper/css/navigation";
import "./pricing.css";

export default function Pricing() {
  return (
    <section id="pricing" className="bg-mint px-5 py-10 md:py-20">
      <div className="md:container md:relative md:mx-auto">
        <h2 className="text-navy text-4xl font-medium lg:text-5xl">
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
                <PricingCard key={i} product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
