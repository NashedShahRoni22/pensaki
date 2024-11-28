import Hero from "./Hero/Hero";
import BlackboardPackes from "./BlackboardPackages/BlackboardPackages";
import ToolsOverview from "./ToolsOverview/ToolsOverview";
import Features from "./Features/Features";
import Pricing from "./Pricing/Pricing";
import Faq from "./Faq/Faq";
import Blog from "../Blogs/Blogs";

export default function Home() {
  return (
    <main>
      <Hero />
      {/* <BlackboardPackes /> */}
      <ToolsOverview />
      <Features />
      <Pricing />
      <Faq />
      <Blog />
    </main>
  );
}
