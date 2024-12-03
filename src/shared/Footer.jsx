import { Link } from "react-router-dom";
import logo from "../assets/logo/logo.png";

export default function Footer() {
  const hostingProducts = [
    {
      name: "Fully Managed Dedicated Server",
      link: "/fully-managed-dedicated-server",
    },
    {
      name: "Fully Managed Virtual Dedicated Server",
      link: "/fully-managed-virtual-dedicated-server",
    },
    {
      name: "Self Managed Dedicated Server",
      link: "/self-managed-dedicated-server",
    },
    {
      name: "Fully Managed Pure Website Hosting",
      link: "fully-managed-pure-web-hosting",
    },
    {
      name: "Self Managed Pure Website Hosting",
      link: "/self-managed-pure-web-hosting",
    },
  ];

  const Products = [
    {
      name: "Bitss Cyber Security",
      link: "https://bitss.fr/",
    },
    {
      name: "Pensaki Blackboard",
      link: "https://pensaki.org/",
    },
    {
      name: "Omada HR Payroll",
      link: "https://omada-clasico.org/",
    },
    {
      name: "Ifgaap Acounting & Invoicing",
      link: "https://ifgaap.org/",
    },
    {
      name: "BFINIT Saas Software",
      link: "https://officetools.bobosoho.com/special-software/",
    },
    {
      name: "BFINIT White Label",
      link: "https://bfin.company/software/white_label/",
    },
    {
      name: "Sosay Social Media",
      link: "https://sosay.org/",
    },
  ];

  const Pages = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About Us",
      link: "/about",
    },
    {
      name: "Contact Us",
      link: "/contact",
    },
    {
      name: "Blogs",
      link: "/blogs",
    },
    {
      name: "Cookie Policy",
      link: "/cookie",
    },
    {
      name: "Privacy Policy",
      link: "/privacy",
    },
    {
      name: "General Condition",
      link: "/general",
    },
  ];

  return (
    <footer>
      {/* email joining section */}
      <section className="bg-accent-dark py-10 text-center text-white md:px-5 md:py-20">
        <div className="md:container md:mx-auto">
          <h2 className="text-2xl font-semibold tracking-wider lg:text-5xl">
            Join BFINIT Cosmopolitan
          </h2>
          <p className="mt-2 text-lg tracking-wide">
            Enjoy up to 2 Months Free with Your Subscription!
          </p>
          <div className="mx-auto mt-8 flex w-3/4 items-center justify-center text-primary md:w-2/5">
            <input
              className="w-full rounded-l px-4 py-2.5 shadow outline-none"
              type="email"
              placeholder="Enter your Email"
            />
            <button
              type="submit"
              className="bg-accent rounded-r px-4 py-2.5 text-white"
            >
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* footer section */}
      <section className="bg-primary text-white md:px-5">
        <div className="mx-5 grid grid-cols-1 gap-8 py-10 md:container md:mx-auto md:grid-cols-2 md:py-28 lg:grid-cols-4">
          <div className="">
            <Link to={"/"}>
              <img className="w-44" src={logo} alt="bobosoho logo" />
            </Link>
            <p className="mt-3 text-2xl">By BFINIT Cosmopolitan</p>
            <p className="mb-6 mt-3">
              Securely empowering you to create, collaborate and store documents
              with ease—tailored for personal and professional productivity
            </p>
            <a
              className="underline"
              href="mailto:support@bobosohomail.com"
              target="_blanck"
            >
              support@bobosohomail.com
            </a>
          </div>
          {/* hosting products */}
          <div>
            <h1 className="text-accent font-semibold underline underline-offset-8">
              Hosting Products
            </h1>
            <div className="ml-2 mt-4 flex flex-col gap-2">
              {hostingProducts.map((product, i) => (
                <Link
                  to={product.link}
                  key={i}
                  className="hover:text-accent flex gap-2.5 transition-all"
                >
                  {product.name}
                </Link>
              ))}
            </div>
          </div>
          {/* other products */}
          <div>
            <h1 className="text-accent font-semibold underline underline-offset-8">
              Other Products
            </h1>
            <div className="ml-2 mt-4 flex flex-col gap-2">
              {Products.map((product, i) => (
                <Link
                  to={product.link}
                  key={i}
                  className="hover:text-accent flex gap-2.5 transition-all"
                >
                  {product.name}
                </Link>
              ))}
            </div>
          </div>
          {/* pages */}
          <div>
            <h1 className="text-accent font-semibold underline underline-offset-8">
              Quick Links to BFINIT
            </h1>
            <div className="ml-2 mt-4 flex flex-col gap-2">
              {Pages.map((product, i) => (
                <Link
                  to={product.link}
                  key={i}
                  className="hover:text-accent flex gap-2.5 transition-all"
                >
                  {product.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}
