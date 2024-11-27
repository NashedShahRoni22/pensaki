import { bfinitProducts } from "../data/bfinitProducts";
import { bfinitTerms } from "../data/bfinitTerms";

export default function GeneralCondition() {
  return (
    <section className="mx-auto w-full max-w-5xl px-5 py-10 text-dark md:py-20">
      <h1 className="mb-4 text-center text-3xl font-semibold">
        Terms and Conditions
      </h1>
      <p className="mb-20 text-center">
        Understand the Rules and Guidelines for Using Pensaki Services and
        Website
      </p>

      {/* Brand Overview */}
      <h2 className="text-xl font-semibold">
        Overview of Our Brands and Products
      </h2>
      <ul className="ml-5 mt-4 list-disc">
        <li>
          <h4 className="mb-2 font-semibold">BFIN SASU</h4>
          <p className="w-full max-w-3xl text-sm">
            Branded companies and products under the names of BFINIT, Omada,
            Clasico, Bobosoho, Bitss, Soho Hosting, IFGAAP Mobile Invoicing,
            Sosay, or any other product marketed under the BFINIT or BFIN SASU
            name must comply with the purchase and usage conditions outlined
            below:
          </p>
        </li>
        <li>
          <h4 className="mb-1.5 mt-4 font-semibold">Best Bitss</h4>
          <p className="w-full max-w-3xl text-sm">
            Recognized for its cost-effectiveness and effectiveness in cyber
            security, Bitss defends your business against hacking, malware,
            ransomware, and virus attacks.
          </p>
        </li>
      </ul>

      {/* Introduction */}
      <h2 className="mt-8 text-xl font-semibold">Introduction</h2>
      <p className="mb-2.5 mt-4">
        BFINIT-branded products are researched and developed by BFIN SASU, a
        French company with offices in France and Asia. BFINIT brands are
        designed to meet the needs of businesses of all sizes, providing
        cost-effective and efficient IT SaaS solutions that are accessible to
        all.
      </p>
      <p className="mb-2.5">
        The BFINIT Group’s headquarters (HQ) is located in France at BFIN SASU,
        8 Rue Dublin, 34200 Sète, France. Registration Number: 535217731 RCS
        Montpellier. Additionally, we have sales, support, and technology
        offices in Asia.
      </p>
      <p className="mb-2.5 text-sm">
        * Please note that the BFINIT Group does not outsource any of its
        technology development.
      </p>

      {/* BFINIT Products */}
      <h2 className="mt-8 text-xl font-semibold">BFINIT Products</h2>
      <p className="mb-2.5 mt-4">BFINIT offers the following products:</p>
      <ul className="mb-4 ml-5 list-disc space-y-4">
        {bfinitProducts.map(({ title, des }, i) => (
          <li key={i}>
            <h4 className="mb-2 font-semibold">{title}</h4>
            <p className="w-full max-w-3xl text-sm">{des}</p>
          </li>
        ))}
      </ul>
      <p className="text-sm">
        * Please note: all BFINIT products and services are eco-friendly and can
        either be installed directly on your device or accessed via a
        cloud-based SaaS connection.
      </p>

      {/* Support and Updates */}
      <h2 className="mt-8 text-xl font-semibold">Support and Updates</h2>
      <p className="mt-4">
        BFINIT products include software updates, training, and continued
        technical support at no additional cost with any paid subscription.
        Users also have the option to decline the support pack if desired.
      </p>

      {/* Terms of Service Overview */}
      <h2 className="mt-8 text-xl font-semibold">Terms of Service Overview</h2>
      <p className="my-4">
        These terms apply to all users and all BFINIT products and services.
        They outline usage guarantees, upgrading policies, support and training,
        payment terms, and client and BFINIT responsibilities.
      </p>
      <ul className="mb-4 ml-5 list-disc space-y-4">
        {bfinitTerms.map(({ title, des }, i) => (
          <li key={i}>
            <h4 className="mb-2 font-semibold">{title}</h4>
            {des.split("\n").map((line, i) => (
              <p key={i} className="mt-2 w-full max-w-3xl text-sm">
                {line}
              </p>
            ))}
          </li>
        ))}
      </ul>
    </section>
  );
}
