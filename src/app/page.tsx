import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Expertise } from "@/components/sections/Expertise";
import { Projects } from "@/components/sections/Projects";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { Contact } from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Expertise />
      <Projects />
      <Services />
      <Process />
      <Contact />
    </>
  );
}
