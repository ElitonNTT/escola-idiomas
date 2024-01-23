import About from "./sections/About";
import Accordions from "./sections/Accordions";
import Welcome from "./sections/Welcome";

export default function Home() {
  return (
    <div className="relative w-full">
      <Welcome />
      <About />
      <Accordions />
    </div>
  );
}
