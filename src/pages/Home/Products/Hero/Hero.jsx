export default function Hero() {
  return (
    <section className="w-full">
      <div className="flex flex-col items-center justify-center bg-gradient-to-tl from-mint to-skyblue px-5 py-10 md:min-h-screen md:py-20">
        <p className="mb-4 text-center text-xl text-uclablue">
          Pensaki Blackboard for Everyone
        </p>
        <h1 className="mb-12 text-center text-4xl font-medium text-navy lg:text-5xl">
          Your All-in-One Solution for Productivity & Collaboration
        </h1>
        <div className="text-center">
          <button className="rounded bg-navy px-5 py-3 text-xl text-white">
            Explore Plans & Pricing
          </button>
        </div>
      </div>
    </section>
  );
}
