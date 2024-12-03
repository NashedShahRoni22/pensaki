import featuresData from "../../../data/featuresData";
import "./features.css";

export default function Features() {
  return (
    <section className="px-5 py-10 md:py-20">
      <h2 className="text-center text-4xl font-medium text-primary lg:text-5xl">
        Included Features & Services
      </h2>
      <p className="text-accent mt-4 text-center text-lg">
        Unlock powerful tools and services, all in one place with Pensaki
        Blackboard
      </p>

      <div className="mt-12 grid grid-cols-2 gap-12 md:container md:mx-auto md:grid-cols-3 lg:grid-cols-5">
        {featuresData.map((feat, i) => (
          <div key={i} className="container h-52 w-full">
            <div className="card relative h-full w-full transition duration-1000 hover:cursor-pointer">
              <div
                style={{
                  background: `url(${feat.img}) no-repeat center / contain`,
                }}
                className="front absolute flex h-full w-full items-end justify-center rounded-md shadow"
              >
                <p className="w-full rounded-b-md bg-primary px-2 py-1 text-center text-mint">
                  {feat.title}
                </p>
              </div>
              <div className="back absolute flex h-full w-full flex-col items-center justify-center gap-4 rounded-md bg-primary px-1 text-mint shadow">
                <p className="font-medium">{feat.title}</p>
                <p className="text-center text-sm font-light">{feat.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
