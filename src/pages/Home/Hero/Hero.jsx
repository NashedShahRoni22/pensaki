import { Link } from "react-router-dom";
import { HiChevronRight } from "react-icons/hi2";
import heroImg from "../../../assets/home/hero.png";

export default function Hero() {
  return (
    <section className="flex flex-col gap-8 px-5 py-10 md:container md:mx-auto md:h-screen md:py-20 lg:flex-row lg:items-center">
      {/* Hero Details Container */}
      <div className="w-full lg:w-1/2">
        <h1 className="text-center text-4xl font-medium text-dark lg:text-left lg:text-5xl">
          Craft Document, Collaborate, Share & Convert - all in one place
        </h1>
        <p className="my-6 text-center text-mediumGray lg:text-left">
          Create, collaborate & format Document, Assignment, Disseration,
          Project with ease. From Personal to Professional use, Pensaki
          Blackboard brings Powerfull Features with PDF convertor, agenda,
          planner & note board at an Affordable Price
        </p>

        <div className="flex flex-col items-center gap-6 lg:flex-row">
          <Link
            to="https://office.bobosoho.com/login"
            className="inline-block rounded border border-transparent bg-primary px-4 py-2 text-lg text-white transition-colors duration-200 ease-in-out hover:bg-primary-hover"
          >
            Sign in
          </Link>
          <Link
            to="/products"
            className="group inline-flex items-center gap-1 rounded border border-lightGray py-2 pl-4 pr-3 text-lg capitalize text-primary transition-colors duration-200 ease-in-out hover:border-[#FFD6D6] hover:bg-[#FFD6D6]"
          >
            <p className="flex items-center px-3">
              <span className="transition-transform duration-300 group-hover:-translate-x-2">
                Try pensaki professional
              </span>
            </p>
            <HiChevronRight className="-ml-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </Link>
        </div>
      </div>

      {/* Hero Image Container */}
      <div className="flex w-full items-center justify-center lg:w-1/2">
        <img
          src={heroImg}
          alt="pensaki blackboard"
          className="h-[400px] object-cover md:h-[600px]"
        />
      </div>
    </section>
  );
}
