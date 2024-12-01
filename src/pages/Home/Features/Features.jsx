import featuresData from "../../../data/featuresData";
import "./features.css";

export default function Features() {
  return (
    <section
      /*  style={{
        background: `linear-gradient(to bottom right, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2)), url(${featuresBg}) center/cover`,
      }} */
      className="px-5 py-10 md:py-20"
    >
      <h2 className="text-navy text-center text-4xl font-medium lg:text-5xl">
        Included Features & Services
      </h2>
      <p className="mt-4 text-center text-lg text-primary">
        Unlock powerful tools and services, all in one place with Pensaki
        Blackboard
      </p>

      <div className="scrollbar mx-5 mt-12 flex justify-between gap-6 overflow-x-auto md:container md:mx-auto md:flex-wrap md:justify-center">
        {featuresData.map((feat, i) => (
          <div key={i} className="flex flex-col items-center gap-3">
            <div className="group relative h-40 w-40 transform overflow-hidden rounded-lg border transition-all hover:scale-105">
              <img
                src={feat.img}
                alt=""
                className="h-full w-full object-contain"
              />
              <div className="bg-navy absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="text-center font-medium text-white">
                  {feat.title}
                </span>
              </div>
            </div>
            <p className="max-w-44 text-center text-sm">{feat.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
