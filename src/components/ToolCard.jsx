import { Link } from "react-router-dom";
import { LuDot } from "react-icons/lu";

export default function ToolCard({ data }) {
  const { img, title, subTitle, features } = data;

  return (
    <div className="rounded border bg-white px-4 pb-8 pt-6 duration-300 ease-linear hover:scale-[1.015] hover:shadow">
      <div className="flex items-center gap-2.5 border-b pb-2.5 text-dark">
        <img src={img} className="size-20" />
        <div>
          <h3 className="text-xl font-medium">{title}</h3>
          <p className="mt-1 max-w-sm font-light text-mediumGray">{subTitle}</p>
        </div>
      </div>

      <ul className="mt-4 space-y-1.5 font-light">
        <p className="font-medium text-dark">Key Features :</p>
        {features.map((feat, i) => (
          <li key={i} className="flex items-center gap-1 text-mediumGray">
            <LuDot />
            {feat}
          </li>
        ))}
      </ul>

      <div className="mt-10">
        <Link
          to="/features"
          className="inline-block rounded bg-primary px-6 py-2 font-medium text-white transition duration-200 hover:bg-redAccentHover"
        >
          Explore Details
        </Link>
      </div>
    </div>
  );
}
