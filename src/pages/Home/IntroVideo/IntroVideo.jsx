import ReactPlayer from "react-player";

export default function IntroVideo() {
  return (
    <section className="flex flex-col items-center justify-center px-5 py-10 md:py-20">
      <h2 className="text-center text-4xl font-medium text-primary lg:text-5xl">
        Discover Pensaki in Action
      </h2>
      <p className="mb-12 mt-4 text-center text-lg text-accent">
        Watch & Explore the features how we can boost your productivity
      </p>

      <div className="md:hidden">
        <ReactPlayer
          controls
          width={360}
          height={203}
          url="https://www.youtube.com/watch?v=CG0IyuqaeMQ"
        />
      </div>

      <div className="hidden md:block">
        <ReactPlayer
          controls
          url="https://www.youtube.com/watch?v=CG0IyuqaeMQ"
        />
      </div>
    </section>
  );
}
