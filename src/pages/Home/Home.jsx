import Hero from "./Hero/Hero";
import ToolsOverview from "./ToolsOverview/ToolsOverview";
import Features from "./Features/Features";
import Pricing from "./Pricing/Pricing";
import Faq from "./Faq/Faq";
import Blog from "../Blogs/Blogs";
import IntroVideo from "./IntroVideo/IntroVideo";

export default function Home() {
  return (
    <main>
      <Hero />
      <IntroVideo />
      <ToolsOverview />
      <Features />
      <Pricing />
      <Faq />
      <Blog />
    </main>
  );
}
