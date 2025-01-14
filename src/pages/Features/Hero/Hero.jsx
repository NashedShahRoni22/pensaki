import { HiChevronDown } from "react-icons/hi2";
import heroBg from "../../../assets/features/hero-bg.jpg";
import heroImg from "../../../assets/features/hero.png";

export default function Hero({ handleScrollToSection }) {
  return (
    <section
      style={{
        background: `url(${heroBg}) center / cover no-repeat`,
      }}
      className="flex flex-col items-center justify-center px-5 py-10 md:min-h-screen md:py-20"
    >
      <p className="mb-4 text-center text-xl text-secondary">
        Unleash Efficiency with Tools Designed to Simplify Your Work
      </p>

      <h1 className="mb-12 text-center text-4xl font-medium text-primary lg:text-5xl">
        Discover Powerful Tools for Seamless Productivity
      </h1>

      <button
        onClick={handleScrollToSection}
        className="group inline-flex items-center gap-1 rounded border border-primary py-2 pl-4 pr-3 text-lg font-medium capitalize text-primary transition-colors duration-200 ease-in-out hover:border-secondary hover:bg-secondary hover:text-white"
      >
        <p className="flex items-center px-3">
          <span className="transition-transform duration-300 group-hover:-translate-x-2">
            Learn More About Our Tools
          </span>
        </p>
        <HiChevronDown className="-ml-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </button>
      <img
        src={heroImg}
        alt=""
        loading="lazy"
        className="mt-20 h-full max-h-80 w-full max-w-4xl rounded-lg object-cover"
      />
    </section>
  );
}
