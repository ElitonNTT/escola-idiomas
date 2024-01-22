import About from "./sections/About";
import Accordions from "./sections/Accordions";
import Welcome from "./sections/Welcome";

export default function Home() {
  return (
    <div className="bg-gray-100 ">
      <Welcome />
      <About />
      <Accordions />
    </div>
  );
}
