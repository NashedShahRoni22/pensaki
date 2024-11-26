import ToolCard from "../../../components/ToolCard";
import toolsData from "../../../data/toolsData";

export default function ToolsOverview() {
  return (
    <section className="bg-[#fbfbfb] px-5 py-10 md:py-20">
      <h2 className="text-center text-4xl font-medium text-dark lg:text-5xl">
        Office Tools Tailored for You
      </h2>
      <p className="mt-4 text-center text-lg text-primary">
        Get more done without having to leave Pensaki
      </p>

      {/* Pensaki Tools Container */}
      <div className="mt-12 grid gap-5 md:container md:mx-auto md:grid-cols-2">
        {toolsData.map((tool, i) => (
          <ToolCard key={i} data={tool} />
        ))}
      </div>
    </section>
  );
}
