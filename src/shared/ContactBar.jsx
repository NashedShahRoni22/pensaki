import { BiPhoneCall } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export default function ContactBar() {
  return (
    <section className="bg-primary py-2 text-sm text-white">
      <div className="mx-5 flex justify-between md:container md:mx-auto">
        <div className="flex items-center gap-1.5">
          <FaLocationDot />8 rue de Dublin, 34200, Sète, France.
        </div>

        <div className="flex items-center gap-4 md:gap-8">
          <a href="tel:+33666100010" className="flex items-center gap-2.5">
            <BiPhoneCall />
            <span className="hidden lg:block">+ 33 6 66 10 00 10</span>
          </a>

          <a
            href="mailto:support@bobosohomail.com"
            className="flex items-center gap-2.5"
          >
            <MdEmail />
            <span className="hidden lg:block">support@bobosohomail.com</span>
          </a>
        </div>
      </div>
    </section>
  );
}
