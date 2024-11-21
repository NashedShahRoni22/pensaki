import { Link } from "react-router-dom";
import { MdArrowDropDown } from "react-icons/md";
import heroImg from "../../../assets/home/hero.png";

export default function Hero() {
  return (
    <section className="flex h-screen max-h-[1080px] flex-col gap-y-8 px-5 py-10 md:container md:mx-auto md:flex-row md:items-center md:py-20">
      {/* Hero Details Container */}
      <div className="w-full md:w-1/2">
        <h1 className="text-dark text-center text-4xl font-medium md:text-left lg:text-5xl">
          Craft, collaborate & convert - All in One Place
        </h1>
        <p className="text-mediumGray my-6 text-center md:text-left">
          Create, collaborate & format documents with ease. From personal to
          professional use, Pensaki Blackboard brings powerful features at an
          affordable price.
        </p>

        <div className="flex flex-col items-center gap-6 md:flex-row">
          <Link
            to="/"
            className="bg-primary hover:bg-primaryHover inline-block rounded border border-transparent px-4 py-2 text-lg text-white transition-colors duration-200 ease-in-out"
          >
            Sign in
          </Link>
          <Link
            to="/"
            className="border-lightGray text-primary group inline-flex items-center gap-1 rounded border py-2 pl-4 pr-3 text-lg capitalize transition-colors duration-200 ease-in-out hover:bg-red-50"
          >
            <p>Try pensaki professional</p>
            <MdArrowDropDown className="text-2xl transition-transform duration-200 ease-linear group-hover:-rotate-90" />
          </Link>
        </div>
      </div>

      {/* Hero Image Container */}
      <div className="w-full md:w-1/2">
        <img
          src={heroImg}
          alt="pensaki blackboard"
          className="h-[400px] w-[600px] object-contain"
        />
      </div>
    </section>
  );
}
