import featuresData from "../../../data/featuresData";

export default function Features() {
  return (
    <section className="bg-[#fbfbfb] px-5 py-10 md:py-20">
      <h2 className="text-center text-4xl font-medium text-dark lg:text-5xl">
        Included Features & Services
      </h2>
      <p className="mt-4 text-center text-lg text-primary">
        Unlock powerful tools and services, all in one place with Pensaki
        Blackboard
      </p>

      <div className="mt-12 flex flex-wrap justify-between gap-x-4 gap-y-8 px-5 md:container md:mx-auto md:justify-center md:gap-x-16 md:gap-y-16">
        {featuresData.map((feat, i) => (
          <div
            key={i}
            className="group relative h-40 w-40 transform overflow-hidden rounded-full border transition-all hover:scale-105"
          >
            <img
              src={feat.img}
              alt=""
              className="h-full w-full object-contain"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-80 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="text-center font-medium text-white">
                {feat.title}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
