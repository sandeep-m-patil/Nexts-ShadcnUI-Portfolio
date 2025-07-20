import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Blog from './blog/page'

export default function Home() {
  return (
    <>
      <main className="max-h-screen">
        <Hero />
        <About />
        <Blog/>
        <Skills/>
        <Contact/>
        <Footer/>
      </main>
    </>
  );
}
