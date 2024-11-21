import logo1 from "../assets/logos/logo1.png";
import logo2 from "../assets/logos/logo7.png";
import logo3 from "../assets/student.png";
import logo4 from "../assets/logo/logo.png";

export default function FeatureContent() {
  const features = [
    {
      image: logo1,
      title: "Pensaki Doc writer",
      description: [
        "Effortless Document Creation",
        "Advanced Formatting Options",
        "Secure Cloud Integration",
      ],
    },
    {
      image: logo3,
      title: "Pensaki Student assignment writer ",
      description: [
        "Full doc writer features",
        "PDF import convertor",
        "Assignemnt reference page",
      ],
    },
    {
      image: logo2,
      title: "Pensaki vault cloud storage",
      description: [
        "5G storage expandable online",
        "It helps to save documents, video, and photos",
      ],
    },
    {
      image: logo4,
      title: "Bundle of SaaS 9 Products",
      description: [
        "Pensaki Doc writer",
        "Pensaki Pdf convertor",
        "Pensaki vault cloud storage",
      ],
    },
  ];

  return (
    <section className="mx-5 flex flex-col items-center justify-center md:container md:mx-auto lg:w-[90~%]">
      <h1 className="text-3xl font-semibold lg:text-5xl">Pensaki pack</h1>
      <div className="grid grid-cols-1 gap-10 bg-cover bg-center md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, i) => (
          <div
            key={i}
            className="relative m-0 my-5 flex flex-col items-center justify-start rounded-[2.5rem] border-4 pb-20 shadow-2xl transition-all duration-300"
          >
            <div className="ml-5 mt-5 w-full">
              <img
                className="w-[80px] rounded-full border-[2px] border-black p-2"
                src={feature.image}
                alt={feature.title}
              />
            </div>

            <div>
              <h1 className="mb-10 mt-10 px-2 text-center text-xl lg:text-3xl">
                {feature.title}
              </h1>
            </div>

            <div>
              <ul className="flex w-full max-w-full flex-col gap-5 px-5">
                {feature.description.map((descri, idc) => (
                  <li
                    className='relative px-1 pl-6 before:absolute before:left-0 before:text-green-500 before:content-["✓"]'
                    key={idc}
                  >
                    {descri}
                  </li>
                ))}
              </ul>
            </div>
            <a
              className="absolute bottom-0 my-5 transform rounded-3xl bg-gradient-to-tl from-[#8627E2] to-[#BE2EE6] px-6 py-3 text-white transition-all duration-700 ease-in-out hover:scale-105 hover:bg-gradient-to-br"
              href="/features"
            >
              Know more
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
