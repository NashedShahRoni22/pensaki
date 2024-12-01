import { Link } from "react-router-dom";
import { LuDot } from "react-icons/lu";

export default function ToolCard({ data }) {
  const { img, title, subTitle, features } = data;

  return (
    <div className="bg-mint rounded border px-4 pb-8 pt-6">
      <div className="flex items-center gap-2.5 border-b pb-2.5 text-dark">
        <img src={img} className="size-20" />
        <div>
          <h3 className="text-navy text-xl font-medium">{title}</h3>
          <p className="text-uclablue mt-1 max-w-sm font-light">{subTitle}</p>
        </div>
      </div>

      <ul className="mt-4 space-y-1.5 font-light">
        <p className="text-navy font-medium">Key Features :</p>
        {features.map((feat, i) => (
          <li key={i} className="text-uclablue flex items-center gap-1">
            <LuDot />
            {feat}
          </li>
        ))}
      </ul>

      <div className="mt-10">
        <Link
          to="/features"
          className="bg-navy hover:bg-uclablue inline-block rounded px-6 py-2 font-medium text-white transition duration-200"
        >
          Explore Details
        </Link>
      </div>
    </div>
  );
}
