import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProjectFilter, {
  type Project,
} from "@/components/projects/ProjectFilter";
const projects: Project[] = [
  {
    slug: "casa-verde",
    number: "01",
    title: "Casa Verde",
    category: "Residential",
    location: "Mumbai, India",
    year: "2026",
    description:
      "A warm residential interior built around natural materials, soft light and a quiet palette.",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=85",
  },
  {
    slug: "monochrome-house",
    number: "02",
    title: "The Monochrome House",
    category: "Residential",
    location: "Pune, India",
    year: "2026",
    description:
      "A restrained home where stone, timber and muted tones create a calm contemporary atmosphere.",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2000&q=85",
  },
  {
    slug: "atelier-27",
    number: "03",
    title: "Atelier 27",
    category: "Commercial",
    location: "Mumbai, India",
    year: "2025",
    description:
      "A contemporary workspace designed to balance focused work with moments of connection.",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2000&q=85",
  },
  {
    slug: "earth-house",
    number: "04",
    title: "Earth House",
    category: "Residential",
    location: "Goa, India",
    year: "2025",
    description:
      "An earthy retreat inspired by the surrounding landscape and the simplicity of coastal living.",
    image:
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=2000&q=85",
  },
  {
    slug: "studio-north",
    number: "05",
    title: "Studio North",
    category: "Commercial",
    location: "Bengaluru, India",
    year: "2025",
    description:
      "A light-filled creative studio combining functional planning with tactile materiality.",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=2000&q=85",
  },
  {
    slug: "quiet-residence",
    number: "06",
    title: "Quiet Residence",
    category: "Residential",
    location: "Mumbai, India",
    year: "2024",
    description:
      "A minimal residence shaped by proportion, natural textures and carefully framed views.",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=2000&q=85",
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#F4F1EB] text-[#171715]">
      <Navbar />

      {/* 01 — Page Header */}
      <section className="px-6 pb-20 pt-36 md:px-12 md:pb-28 md:pt-44 lg:px-20">
        <div className="mx-auto max-w-[1600px]">
          <p className="text-xs tracking-[0.3em] text-[#8A7560]">
            SELECTED WORK
          </p>

          <div className="mt-8 flex flex-col justify-between gap-10 md:flex-row md:items-end">
            <h1 className="max-w-5xl text-6xl leading-[0.95] tracking-tight sm:text-7xl md:text-8xl lg:text-[8rem]">
              Projects.
            </h1>

            <p className="max-w-sm text-sm leading-7 text-[#6F6B64]">
              A collection of residential and commercial spaces shaped
              through architecture, material, light and everyday life.
            </p>
          </div>
        </div>
      </section>

      {/* 02 — Project Categories & Grid */}
<section className="border-y border-[#D8D3C9] px-6 md:px-12 lg:px-20">
  <div className="mx-auto max-w-[1600px]">
    <ProjectFilter projects={projects} />
  </div>
</section>

      {/* 04 — Closing Statement */}
      <section className="bg-[#171715] px-6 py-24 text-[#F4F1EB] md:px-12 md:py-32 lg:px-20">
        <div className="mx-auto max-w-[1600px]">
          <p className="text-xs tracking-[0.3em] text-[#A99C8C]">
            AURELINE STUDIO
          </p>

          <h2 className="mt-8 max-w-5xl text-4xl leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
            Every project begins with listening, observing and understanding
            how a space should feel.
          </h2>
        </div>
      </section>

      <Footer />
    </main>
  );
}