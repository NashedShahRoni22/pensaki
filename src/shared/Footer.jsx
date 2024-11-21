import logo from "../assets/logo/logo.png";
import { Link } from "react-router-dom";

export default function Footer() {
  const Hosting = [
    {
      name: "Fully Managed Dedicated Server",
      link: "https://bfinit.com/fully-managed-dedicated-server",
    },
    {
      name: "Fully Managed Virtual Dedicated Server",
      link: "https://bfinit.com/fully-managed-virtual-dedicated-server",
    },
    {
      name: "Self Managed Dedicated Server",
      link: "https://bfinit.com/self-managed-dedicated-server",
    },
    {
      name: "Fully Managed Pure Website Hosting",
      link: "https://bfinit.com/fully-managed-pure-web-hosting",
    },
    {
      name: "Self Managed Pure Website Hosting",
      link: "https://bfinit.com/self-managed-pure-web-hosting",
    },
  ];

  const Products = [
    {
      name: "Bitss Cyber Security",
      link: "https://bitss.fr/",
    },
    {
      name: "Omada-HR payroll",
      link: "https://omada-clasico.org/",
    },
    {
      name: "Ifgaap Acounting & Invoicing",
      link: "https://ifgaap.org/",
    },
    {
      name: "Sosay Social Media",
      link: "https://sosay.org/",
    },
  ];

  const Quicklinks = [
    {
      name: "Features",
      link: "/features",
    },
    {
      name: "Products",
      link: "/products",
    },
    {
      name: "FAQ?",
      link: "/faq",
    },
    {
      name: "Global support",
      link: "/support",
    },
  ];

  return (
    <div className="bg-teal-600">
      <section className="mx-5 py-10 md:container md:mx-auto">
        <div className="grid grid-cols-1 text-white lg:grid-cols-2">
          {/* logo section */}
          <div className="flex flex-col gap-5">
            <div>
              <img className="mix-blend-darken" src={logo} alt="" />
            </div>
            <div className="flex flex-col gap-10">
              <h1 className="text-2xl font-semibold lg:text-4xl">
                Join Bfinit Cosmopolitan
              </h1>
              <p className="text-lg lg:text-xl">
                Get additional two months of free subscription
              </p>
              <div className="flex flex-col gap-5 lg:flex-row">
                <input
                  type="email"
                  className="rounded-lg px-4 py-2 outline-double outline-orange-900"
                  placeholder="Enter your email"
                />
                <button className="mml-0 rounded-lg bg-orange-400 px-6 py-2 lg:ml-4">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Link section */}
          <div>
            <h1 className="py-10 text-center text-2xl font-semibold underline lg:text-4xl">
              Pensaki by BFINIT
            </h1>
            <div className="grid gap-5 lg:grid-cols-3">
              {/* Hosting products */}
              <div>
                <h1 className="text-2xl font-semibold">Hosting Products</h1>
                <div className="flex flex-col gap-5">
                  {Hosting.map((hosting, i) => (
                    <Link target="_blank" to={hosting.link} key={i}>
                      {hosting.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Products */}
              <div>
                <h1 className="text-2xl font-semibold">Products</h1>
                <div className="flex flex-col gap-5">
                  {Products.map((products, i) => (
                    <Link to={products.link} key={i} className="flex">
                      {products.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Pages */}
              <div>
                <h1 className="text-2xl font-semibold">Quick links</h1>
                <div className="flex flex-col gap-5">
                  {Quicklinks.map((links, i) => (
                    <Link to={links.link} key={i} className="flex">
                      {links.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
