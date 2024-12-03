import { useRef } from "react";
import Hero from "./Hero/Hero";
import ProductDetails from "./ProductDetails/ProductDetails";

export default function Products() {
  const sectionRef = useRef();

  const handleScrollToSection = () => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main>
      <Hero handleScrollToSection={handleScrollToSection} />
      <ProductDetails sectionRef={sectionRef} />
    </main>
  );
}
