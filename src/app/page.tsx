import Navigation from "./ui/home/navigation";
import Footer from "./ui/home/footer";
import About from "./components/About";
import Skills from "./ui/home/skills";
import Projects from "./components/Projects";
import Hero from "./components/Hero";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Navigation />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
