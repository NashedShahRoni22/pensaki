import { Link } from "react-router-dom";
import { HiChevronRight } from "react-icons/hi2";
import heroImg from "../../../assets/home/hero-test.webp";

export default function Hero() {
  return (
    <section className="from-mint to-skyblue bg-gradient-to-br px-5 py-10 md:min-h-screen md:py-20">
      <div className="flex flex-col gap-8 md:container md:mx-auto lg:flex-row lg:items-center">
        {/* Hero Details Container */}
        <div className="w-full lg:w-1/2">
          <h1 className="text-navy text-center text-4xl font-medium lg:text-left lg:text-5xl">
            Craft Document, Collaborate, Share & Convert - all in one place
          </h1>
          <p className="text-uclablue my-6 text-center lg:text-left">
            Create, collaborate & format Document, Assignment, Disseration,
            Project with ease. From Personal to Professional use, Pensaki
            Blackboard brings Powerfull Features with PDF convertor, agenda,
            planner & note board at an Affordable Price
          </p>

          <div className="flex flex-col items-center gap-6 lg:flex-row">
            <Link
              to="https://office.bobosoho.com/login"
              className="bg-navy hover:bg-uclablue inline-block rounded border border-transparent px-4 py-2 text-lg text-white transition-colors duration-200 ease-in-out"
            >
              Sign in
            </Link>
            <Link
              to="/products"
              className="border-navy text-navy hover:bg-uclablue hover:border-uclablue group inline-flex items-center gap-1 rounded border py-2 pl-4 pr-3 text-lg capitalize transition-colors duration-200 ease-in-out hover:text-white"
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
            className="h-fit w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
