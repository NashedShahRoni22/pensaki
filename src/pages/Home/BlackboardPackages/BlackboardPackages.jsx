import Marquee from "react-fast-marquee";
import docWriter from "../../../assets/logo/docwriter.png";
import pdfConverter from "../../../assets/logo/pdf-converter.png";
import cloudStorage from "../../../assets/logo/cloud-storage.png";
import hrPayroll from "../../../assets/logo/hr-payroll.png";
import projectManager from "../../../assets/logo/project-manager.png";
import payslips from "../../../assets/logo/payslips.png";
import cyberSecurity from "../../../assets/logo/cyber-security.png";
import invoicing from "../../../assets/logo/invoicing.png";
import accounting from "../../../assets/logo/accounting.png";

export default function BlackboardPackages() {
  return (
    <>
      <Marquee pauseOnHover>
        <img src={docWriter} alt="" className="w-44" />
        <img src={pdfConverter} alt="" className="w-44" />
        <img src={cloudStorage} alt="" className="w-44" />
        <img src={hrPayroll} alt="" className="w-44" />
        <img src={projectManager} alt="" className="w-44" />
        <img src={payslips} alt="" className="w-44" />
        <img src={cyberSecurity} alt="" className="w-44" />
        <img src={invoicing} alt="" className="w-44" />
        <img src={accounting} alt="" className="w-44" />
      </Marquee>
    </>
  );
}
