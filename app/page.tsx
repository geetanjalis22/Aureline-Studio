import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import StudioIntro from "@/components/home/StudioIntro";
import Philosophy from "@/components/home/Philosophy";
import Services from "@/components/home/Services";
import Process from "@/components/home/Process";
import JournalPreview from "@/components/home/JournalPreview";
import CTA from "@/components/home/CTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F4F1EB] text-[#171715]">
      <Navbar />

      {/* 01 — Hero */}
      <section className="flex min-h-screen items-center px-6 pt-24 md:px-12 lg:px-20">
        <div className="mx-auto w-full max-w-[1600px]">
          <div className="max-w-5xl">
            <p className="mb-8 text-xs tracking-[0.3em] text-[#6F6B64]">
              INTERIOR ARCHITECTURE & DESIGN STUDIO
            </p>

            <h1 className="text-6xl leading-[0.95] tracking-tight sm:text-7xl md:text-8xl lg:text-[9rem]">
              Spaces shaped
              <br />
              with intention.
            </h1>

            <p className="mt-8 max-w-md text-base leading-7 text-[#6F6B64] md:text-lg">
              Thoughtful interiors where architecture, material and everyday
              life come together.
            </p>
          </div>
        </div>
      </section>

      {/* 02 — Featured Projects */}
      <FeaturedProjects />

      {/* 03 — Studio */}
      <StudioIntro />

      {/* 04 — Philosophy */}
      <Philosophy />

      {/* 05 — Services */}
      <Services />

      {/* 06 — Process */}
      <Process />

      {/* 07 — Journal */}
      <JournalPreview />

      {/* 08 — CTA */}
      <CTA />

      {/* 09 — Footer */}
      <Footer />
    </main>
  );
}