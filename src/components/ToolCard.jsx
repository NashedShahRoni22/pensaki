import { Link } from "react-router-dom";
import { LuDot } from "react-icons/lu";

export default function ToolCard({ data }) {
  const { img, title, subTitle, features } = data;

  return (
    <div className="rounded border px-4 pb-8 pt-6">
      <div className="flex items-center gap-2.5 border-b pb-2.5 text-primary">
        <img src={img} loading="lazy" className="size-20" />
        <div>
          <h3 className="text-xl font-medium text-primary">{title}</h3>
          <p className="mt-1 max-w-sm font-light text-secondary">{subTitle}</p>
        </div>
      </div>

      <ul className="mt-4 space-y-1.5 font-light">
        <p className="font-medium text-primary">Key Features :</p>
        {features.map((feat, i) => (
          <li key={i} className="flex items-center gap-1 text-secondary">
            <LuDot />
            {feat}
          </li>
        ))}
      </ul>

      <div className="mt-10">
        <Link
          to="/features"
          className="inline-block rounded bg-primary px-6 py-2 font-medium text-white transition duration-200 hover:bg-secondary"
        >
          Explore Details
        </Link>
      </div>
    </div>
  );
}
