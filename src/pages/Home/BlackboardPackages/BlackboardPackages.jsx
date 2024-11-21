import Marquee from "react-fast-marquee";
import featuresData from "../../../data/featuresData";

export default function BlackboardPackages() {
  return (
    <>
      <Marquee pauseOnHover>
        {featuresData.map((feat, i) => (
          <img key={i} src={feat.img} alt="" className="w-44" />
        ))}
      </Marquee>
    </>
  );
}
