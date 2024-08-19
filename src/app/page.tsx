import Image from "next/image";
import Sidebar from "./component/Sidebar";
import About from "./component/About";
import Banner from "./component/Home";
import Projects from "./component/Projects";
import Contact from "./component/Contact";
import Experience from "./component/Experience";
export default function Home() {
  return (
    <main className=" flex min-h-screen flex-col items-center w-full overflow-x-scroll snap-x snap-mandatory ">
      <div id="home" className="w-full snap-start">
        <Banner />
      </div>
      <div id="about" className="w-full snap-start">
        <About />
      </div>
      <div id="experience" className="w-full snap-start">
        <Experience />
      </div>
      <div id="projects" className="w-full snap-start">
        <Projects />
      </div>
      <div id="contact" className="w-full snap-start">
        <Contact />
      </div>
    </main>
  );
}
