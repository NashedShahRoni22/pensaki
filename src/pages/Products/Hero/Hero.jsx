export default function Hero({ handleScrollToSection }) {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center bg-gradient-to-tl from-mint to-skyblue px-5 py-10 md:min-h-screen md:py-20">
      <p className="text-secondary mb-4 text-center text-xl">
        Pensaki Blackboard for Everyone
      </p>
      <h1 className="mb-12 text-center text-4xl font-medium text-primary lg:text-5xl">
        Your All-in-One Solution for Productivity & Collaboration
      </h1>
      <div className="text-center">
        <button
          onClick={handleScrollToSection}
          className="hover:bg-secondary rounded bg-primary px-5 py-3 text-xl text-white transition-all duration-200 ease-linear"
        >
          Explore Plans & Pricing
        </button>
      </div>
    </section>
  );
}
