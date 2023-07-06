import About from "@/components/About";
import Header from "@/components/Header";

export default async function Home() {
  return (
    <main className="bg-slate-900 text-slate-50 px-6">
      <Header />
      <About />
    </main>
  );
}
