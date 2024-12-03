import { Link } from "react-router-dom";
import { HiChevronRight } from "react-icons/hi2";
import heroImg from "../../../assets/shared/individual.png";

export default function Hero() {
  return (
    <section className="min-h-screen w-full bg-gradient-to-br from-mint to-skyblue py-10 md:py-20">
      <div className="flex flex-col items-center justify-center gap-8 px-5 md:container md:mx-auto lg:flex-row lg:items-center">
        {/* Hero Details Container */}
        <div className="w-full lg:w-1/2">
          <h1 className="text-pretty text-4xl font-medium text-primary lg:text-5xl">
            Craft Document, Collaborate, Share & Convert - all in one place
          </h1>
          <p className="text-secondary my-6">
            Create, collaborate & format Document, Assignment, Disseration,
            Project with ease. From Personal to Professional use, Pensaki
            Blackboard brings Powerfull Features with PDF convertor, agenda,
            planner & note board at an Affordable Price
          </p>

          <div className="flex flex-col gap-6 lg:flex-row lg:items-center">
            <Link
              to="https://office.bobosoho.com/login"
              className="hover:bg-secondary inline-block rounded border border-transparent bg-primary px-4 py-2 text-center text-lg text-white transition-colors duration-200 ease-in-out"
            >
              Sign in
            </Link>
            <Link
              to="/products"
              className="hover:border-secondary hover:bg-secondary group inline-flex items-center justify-center gap-1 rounded border border-primary py-2 pl-4 pr-3 text-lg capitalize text-primary transition-colors duration-200 ease-in-out hover:text-white"
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
            className="h-fit w-4/5 object-cover"
          />
        </div>
      </div>
    </section>
  );
}
