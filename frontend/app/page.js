import Header from "@/components/Header";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export default async function Home() {
  return (
    <main className="bg-slate-900 text-slate-50">
      <div className="container mx-auto">
        <Header />
        <About />
        <Projects />
        <Footer />
      </div>
    </main>
  );
}
