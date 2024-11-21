import React from "react";
import about from "../assets/about.png";
import logo1 from "../assets/logos/logo1.png";
import logo2 from "../assets/logos/logo2.png";
import logo3 from "../assets/logos/logo3.png";
import logo4 from "../assets/logos/logo4.png";
import logo5 from "../assets/logos/logo5.png";
import logo6 from "../assets/logos/logo6.png";
import logo7 from "../assets/logos/logo7.png";
import logo8 from "../assets/logos/logo8.png";
import logo9 from "../assets/logos/logo10.png";
import logo10 from "../assets/logos/bobosoho.jpg";

export default function () {
  const items = [
    { text: "Pensaki Doc Writer", src: logo1 },
    { text: "Bitss Cybersecurity", src: logo2 },
    { text: "Omada HR Payroll", src: logo3 },
    { text: "Pensaki PDF Converter", src: logo4 },
    { text: "Clasico Payslips", src: logo5 },
    { text: "Omada Project Manager", src: logo6 },
    { text: "Pensaki Vault Cloud Storage", src: logo7 },
    { text: "IFgaap GL Accounting", src: logo8 },
    { text: "IFgaap Invoicing", src: logo9 },
    {
      text: "Bobosoho private email chat share (photos, videos, and docs)",
      src: logo10,
    },
  ];

  return (
    <section className="flex flex-col lg:flex-row gap-5  items-center lg:p-0 py-10 md:container md:mx-auto mx-5">
      <div className="lg:w-1/2 order-1 lg:order-2">
        <img className="p-0 lg:p-20" src={about} alt="" />
      </div>
      <div className="lg:w-1/2 flex flex-col order-2 lg:order-1 gap-5 px-5 lg:px-0">
        <p className="text-lg lg:text-xl">
          PENSAKI is a bundle of SaaS software for Individual ,Family and
          Friends, and Business user. Users can be added online. pensaki is a a
          low cost package with high professional software features and
          includes:
        </p>
        <div className="grid lg:grid-cols-2 grid-cols-1">
          <div>
            <ul className="flex flex-col gap-4">
              {items.slice(0, 5).map((item, index) => (
                <li key={index} className="flex flex-row items-center">
                  <img className="w-[50px] mr-5" src={item.src} alt="" />
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <ul className="flex flex-col gap-4">
              {items.slice(5).map((item, index) => (
                <li key={index + 5} className="flex flex-row items-center">
                  <img className="w-[50px] mr-5" src={item.src} alt="" />
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="text-lg lg:text-xl">
          * The bundle is accessable via the pensaki blackboard panel, each
          users receives their own dedicated panel.
        </p>
      </div>
    </section>
  );
}
