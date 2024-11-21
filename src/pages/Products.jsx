import React from 'react';
import individualPack from '../assets/individual pack.png';
import familyPack from '../assets/family-pack.png';
import businesspack from '../assets/business-pack.png';

export default function Products() {
  const packs = [
    {
      id: 1,
      title: "Individual Pensaki Pack",
      subtitle: "Pensaki Pack - All-in-One Business Solution",
      description: `For individual use, includes a all in one office study solution with  Doc Writer, students assignments, private email, 
      access to bobosoho private secured email, call voice video, chat and share.  Pensaki vault cloud storage for your videos, documents, photos 
      in total security.  On option you may request free and one of the following SaaS prodcuts Bitss Cyber Security, Pensaki.one Email Anti-Spam
       Manager (Ad-Free), Omada HR, Omada Project Manager for all R&D, assignments, or individual projects,  Clasico Payslips, IFgaap Invoicing, 
       IFgaap GL Accounting, ,all for just 3 euros per year for individual use.`,
      price: "2€/Year",
      image: individualPack,
      link: "https://www.bobosohomail.com/email_ins/signUp_email.php"
    },
    {
      id: 2,
      title: "Individual Family and Friends Plan",
      subtitle: "Share the Pensaki Pack with up to 30 family members and friends ",
      description: `Includes all as in individual pack, each member receives their own dedicated pensaki dashboard. Each dashboard dedicated and
       private to each user with full product features. Share the Pensaki Pack with up to 30 family members and friends for just €9.50 per year—an
        ideal solution for group access to premium features at a shared cost or gift `,
      price: "9.50€/Year",
      image: familyPack,
      link: "https://www.bobosohomail.com/email_ins/signUp_email.php"
    },
    {
      id: 3,
      title: "Business Pensaki Pack",
      subtitle: "Unlock the Power of All-in-One SaaS Solutions for your Business",
      description: `Your ultimate solution for comprehensive digital tools designed to enhance your business efficiency, gain access to all our 
      premium SaaS products, each employee has a unique dedciated pack , do c writer, pdf convertor, cloud vault storage, email, and access to 
      bobosoho with full features? SaaS products access controled by  the administrator. "Add to business, never loose date when an employee is absent over long periods".`,
      price: "39.50€/Year for 100 users",
      image: businesspack,
      link: "https://www.bobosohomail.com/email_ins/signUp_email.php"
    },
  ];

  return (
    <section className='mx-5 md:container md:mx-auto'>
      <h1 className='mt-10 text-center text-3xl lg:text-5xl font-semibold'>OUR PRODUCTS</h1>
      <div>
        {packs.map((pack, index) => (
          <div key={pack.id} className={`flex flex-col lg:flex-row py-5 lg:my-14 ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}>
            <div className="lg:w-1/2 flex justify-center">
              <img className="lg:p-10" src={pack.image} alt={pack.title} />
            </div>
            <div className="lg:w-1/2 flex flex-col gap-5 justify-center">
              <h1 className="text-3xl lg:text-5xl text-center font-semibold">{pack.title}</h1>
              <h2 className="text-xl">{pack.subtitle}</h2>
              <p className="px-5 lg:px-0 text-lg">{pack.description}</p>
              <h1 className="lg:text-5xl text-3xl text-center lg:text-left">Price: {pack.price}</h1>
              <div className="flex gap-5 justify-center lg:justify-start items-center my-5">
                <a href={pack.link} className="px-6 py-2 lg:px-8 lg:py-3 bg-white lg:text-lg lg:bg-orange-400 rounded-lg border-2 border-black">
                  Buy Now
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
