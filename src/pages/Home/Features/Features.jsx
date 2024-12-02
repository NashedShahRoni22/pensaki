import featuresData from "../../../data/featuresData";
import "./features.css";

export default function Features() {
  return (
    <section className="px-5 py-10 md:py-20">
      <h2 className="text-center text-4xl font-medium text-navy lg:text-5xl">
        Included Features & Services
      </h2>
      <p className="mt-4 text-center text-lg text-primary">
        Unlock powerful tools and services, all in one place with Pensaki
        Blackboard
      </p>

      <div className="mt-12 grid grid-cols-2 gap-12 md:container md:mx-auto md:grid-cols-3 lg:grid-cols-5">
        {featuresData.map((feat, i) => (
          <div key={i} className="flex flex-col items-center gap-3">
            <div className="group relative h-40 w-40 transform overflow-hidden rounded-lg border transition-all hover:scale-105">
              <img
                src={feat.img}
                alt=""
                className="h-full w-full object-contain"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-navy opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="text-center font-medium text-white">
                  {feat.title}
                </span>
              </div>
            </div>
            <p className="text-center font-semibold text-navy">{feat.title}</p>
            <p className="max-w-44 text-center text-sm font-light text-uclablue">
              {feat.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
