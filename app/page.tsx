import Navbar      from "@/components/Navbar";
import Hero        from "@/components/Hero";
import Services    from "@/components/Services";
import FeaturedWork from "@/components/FeaturedWork";
import Stats       from "@/components/Stats";
import Experience  from "@/components/Experience";
import Skills      from "@/components/Skills";
import Contact     from "@/components/Contact";
import Footer      from "@/components/Footer";
import { projects as staticProjects } from "@/lib/data";
import type { Project } from "@/lib/data";

/** Fetch works from the API route at build/request time (Server Component). */
async function getWorks(): Promise<Project[]> {
  try {
    // In production build the absolute URL must be provided; during dev Next.js
    // resolves relative URLs from process.env.NEXT_PUBLIC_BASE_URL or localhost.
    const base =
      process.env.NEXT_PUBLIC_BASE_URL?.replace(/\/$/, "") ??
      "http://localhost:3000";

    const res = await fetch(`${base}/api/works`, {
      next: { revalidate: 3600 }, // ISR — revalidate once per hour
    });

    if (!res.ok) throw new Error(`/api/works responded ${res.status}`);
    return res.json();
  } catch (err) {
    // Fall back to static data so the page always renders
    console.warn("[page] Using static project data:", (err as Error).message);
    return staticProjects;
  }
}

export default async function Home() {
  const works = await getWorks();

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
