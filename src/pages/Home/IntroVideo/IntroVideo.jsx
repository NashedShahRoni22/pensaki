import ReactPlayer from "react-player";

export default function IntroVideo() {
  return (
    <section className="flex flex-col items-center justify-center py-10 md:py-20">
      <h2 className="text-center text-4xl font-medium text-primary lg:text-5xl">
        Discover Pensaki in Action
      </h2>
      <p className="mb-12 mt-4 text-center text-lg text-accent">
        Watch & Explore the features how we can boost your productivity
      </p>
      <ReactPlayer controls url="https://www.youtube.com/watch?v=CG0IyuqaeMQ" />
    </section>
  );
}
