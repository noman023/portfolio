import Header from "@/components/Header";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default async function Home() {
  return (
    <main className="bg-slate-900 text-slate-50">
      <div className="container mx-auto">
        <Header />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
