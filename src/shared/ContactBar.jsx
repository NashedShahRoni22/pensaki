import { BiPhoneCall } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export default function ContactBar() {
  return (
    <section className="bg-skyblue py-2 text-sm">
      <div className="flex justify-between px-5 md:container md:mx-auto">
        <div className="flex items-center gap-1.5">
          <FaLocationDot className="text-primary text-lg" />8 rue de Dublin,
          34200, Sète, France.
        </div>

        <div className="flex items-center gap-4 md:gap-8">
          <a href="tel:+33666100010" className="flex items-center gap-2.5">
            <BiPhoneCall className="text-primary text-xl" />
            <span className="hidden lg:block">+ 33 6 66 10 00 10</span>
          </a>

          <a
            href="mailto:support@bobosohomail.com"
            className="flex items-center gap-2.5"
          >
            <MdEmail className="text-primary text-xl" />
            <span className="hidden lg:block">support@bobosohomail.com</span>
          </a>
        </div>
      </div>
    </section>
  );
}
