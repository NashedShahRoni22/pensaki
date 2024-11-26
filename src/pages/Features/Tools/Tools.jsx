import featsAndTools from "../../../data/featsAndTools";
import ToolCard2 from "../../../components/ToolCard2";

export default function Tools({ sectionRef }) {
  return (
    <section ref={sectionRef} className="bg-[#f7f1e5]">
      <div className="px-5 py-10 md:container md:mx-auto md:py-20">
        <p className="mb-4 text-center text-xl text-mediumGray">
          Pensaki Tools
        </p>
        <h2 className="mb-12 text-center text-4xl font-medium text-dark lg:text-5xl">
          Powerful Features Built for you
        </h2>

        <div className="grid md:grid-cols-2 gap-5 lg:grid-cols-3">
          {featsAndTools.map((tool, i) => (
            <ToolCard2 key={i} data={tool} />
          ))}
        </div>
      </div>
    </section>
  );
}
