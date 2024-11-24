import { useRef } from "react";
import Hero from "./Hero/Hero";
import Tools from "./Tools/Tools";

export default function Features() {
  const sectionRef = useRef();

  const handleScrollToSection = () => {
    sectionRef.current.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <main>
      <Hero handleScrollToSection={handleScrollToSection} />
      <Tools sectionRef={sectionRef} />
    </main>
  );
}
