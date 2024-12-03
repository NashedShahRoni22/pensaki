import { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { accordionItems } from "../../../data/accordionItems";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

export default function Faq() {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <section className="px-5 py-10 md:container md:mx-auto md:py-20">
      <h2 className="text-center text-4xl font-medium text-primary lg:text-5xl">
        Need Help? We&apos;ve Got You Covered
      </h2>
      <p className="text-accent mt-4 text-center text-lg">
        Find clear answers to common questions about our products and services
      </p>

      <div className="mt-16">
        {accordionItems.map((item) => (
          <Accordion
            key={item.id}
            open={open === item.id}
            icon={<Icon id={item.id} open={open} />}
          >
            <AccordionHeader onClick={() => handleOpen(item.id)}>
              <p className="py-2.5 text-primary">{item.title}</p>
            </AccordionHeader>
            <AccordionBody>
              <p className="text-secondary p-4 font-poppins text-lg">
                {item.body}
              </p>
            </AccordionBody>
          </Accordion>
        ))}
      </div>
    </section>
  );
}
