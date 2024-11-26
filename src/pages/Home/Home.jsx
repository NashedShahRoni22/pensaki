import Hero from "./Hero/Hero";
import BlackboardPackes from "./BlackboardPackages/BlackboardPackages";
import ToolsOverview from "./ToolsOverview/ToolsOverview";
import Features from "./Features/Features";

export default function Home() {
  return (
    <main>
      <Hero />
      {/* <BlackboardPackes /> */}
      <ToolsOverview />
      <Features />
    </main>
  );
}
