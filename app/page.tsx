import Navbar      from "@/components/Navbar";
import Hero        from "@/components/Hero";
import Services    from "@/components/Services";
import FeaturedWork from "@/components/FeaturedWork";
import Stats       from "@/components/Stats";
import Experience  from "@/components/Experience";
import Skills      from "@/components/Skills";
import Contact     from "@/components/Contact";
import Footer      from "@/components/Footer";
import { getProjects } from "@/lib/works";

export default async function Home() {
  const works = await getProjects();

  return (
    <main id="main-content" className="min-h-screen bg-bg text-ink antialiased">
      <Navbar />
      <Hero />
      <Services />
      <FeaturedWork projects={works} />
      <Stats />
      <Experience />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
