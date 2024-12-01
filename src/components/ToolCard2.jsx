import { Link } from "react-router-dom";
import { HiChevronRight } from "react-icons/hi2";
import { RxDotFilled } from "react-icons/rx";

export default function ToolCard2({ data }) {
  const { link, image, title, features } = data;
  return (
    <Link
      to={link}
      className="hover:border-uclablue border-navy group relative flex flex-col rounded-lg border bg-white"
    >
      <div className="border-navy group-hover:border-uclablue border-b pb-5">
        <img
          src={image}
          alt=""
          className="size-28 rounded-full object-contain"
        />
        <h3 className="text-navy flex-1 px-4 text-2xl font-medium capitalize">
          {title}
        </h3>
      </div>

      <ul className="mt-5 flex-1 space-y-3 px-4">
        {features.map((tool, i) => (
          <li key={i} className="text-uclablue flex gap-1 text-sm">
            <RxDotFilled className="mt-1 min-w-fit text-base text-black" />
            {tool}
          </li>
        ))}
      </ul>

      <Link
        to={link}
        className="bg-navy group-hover:bg-uclablue mt-12 flex w-full items-center justify-center rounded-b-lg px-4 py-2.5 text-center text-white shadow"
      >
        <p className="flex items-center px-3">
          <span className="transition-transform duration-300 group-hover:-translate-x-2">
            View Details
          </span>
        </p>
        <HiChevronRight className="-ml-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </Link>
    </Link>
  );
}
