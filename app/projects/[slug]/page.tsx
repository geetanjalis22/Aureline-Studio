import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const projects = [
  {
    slug: "casa-verde",
    number: "01",
    title: "Casa Verde",
    category: "Residential",
    location: "Mumbai, India",
    year: "2026",
    area: "3,200 sq. ft.",
    services: "Interior Architecture · Residential Design · Styling",

    heroImage:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2200&q=90",

    images: [
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=2200&q=90",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=2200&q=90",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2200&q=90",
    ],

    introduction:
      "A warm residential interior built around natural materials, soft light and a quiet palette.",

    concept:
      "Casa Verde was conceived as a calm urban retreat where architecture, furniture and materiality work together without visual excess.",

    materials:
      "Natural oak, limestone, linen, textured plaster and muted brass create a warm and tactile material language.",

    approach:
      "The planning focuses on natural light, clear circulation and carefully framed moments between the home's private and social spaces.",
  },

 {
  slug: "monochrome-house",
  number: "02",
  title: "The Monochrome House",
  category: "Residential",
  location: "Pune, India",
  year: "2026",
  area: "4,600 sq. ft.",
  services: "Interior Architecture · Residential Design · Custom Furniture",

  heroImage:
    "https://images.unsplash.com/photo-1773754532196-014342510e64?auto=format&fit=crop&w=2200&q=90",

  images: [
    "https://images.unsplash.com/photo-1774199679021-db3b421867c3?auto=format&fit=crop&w=2200&q=90",
    "https://images.unsplash.com/photo-1744126405278-b8c428f309ce?auto=format&fit=crop&w=2200&q=90",
    "https://images.unsplash.com/photo-1763478958822-0a770c389bef?auto=format&fit=crop&w=2200&q=90",
  ],

  introduction:
    "A restrained home where stone, timber and muted tones create a calm contemporary atmosphere.",

  concept:
    "The Monochrome House explores contrast through texture rather than colour, allowing architectural form and natural materials to define each room.",

  materials:
    "Travertine, dark timber, brushed metal and soft neutral fabrics establish a sophisticated monochromatic palette.",

  approach:
    "Furniture was designed around the architecture, creating strong lines while maintaining warmth and everyday comfort.",
},

  {
    slug: "atelier-27",
    number: "03",
    title: "Atelier 27",
    category: "Commercial",
    location: "Mumbai, India",
    year: "2025",
    area: "4,200 sq. ft.",
    services: "Interior Architecture · Workplace Design · Furniture",

    heroImage:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=2200&q=90",

    images: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2200&q=90",
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=2200&q=90",
      "https://images.unsplash.com/photo-1497366412874-3415097a27e7?auto=format&fit=crop&w=2200&q=90",
    ],

    introduction:
      "Atelier 27 is a contemporary creative workplace designed around openness, natural light and focused collaboration.",

    concept:
      "The interior uses a restrained material palette and carefully framed views to create a workspace that feels calm without becoming sterile.",

    materials:
      "Oak, textured plaster, natural stone and brushed metal create a tactile and understated material language.",

    approach:
      "Planning was driven by the relationship between focused work areas, informal meeting spaces and shared creative zones.",
  },

  {
    slug: "earth-house",
    number: "04",
    title: "Earth House",
    category: "Residential",
    location: "Goa, India",
    year: "2025",
    area: "3,800 sq. ft.",
    services: "Interior Architecture · Residential Design · Styling",

    heroImage:
      "https://images.unsplash.com/photo-1600585152915-d208bec867a1?auto=format&fit=crop&w=2200&q=90",

    images: [
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=2200&q=90",
      "https://images.unsplash.com/photo-1600566753051-f0b89df2dd90?auto=format&fit=crop&w=2200&q=90",
      "https://images.unsplash.com/photo-1600607688960-e095ff83135c?auto=format&fit=crop&w=2200&q=90",
    ],

    introduction:
      "Earth House is a relaxed coastal residence shaped by its relationship with the surrounding landscape.",

    concept:
      "The design draws from the earth tones, textures and slower rhythm of Goa, creating interiors that transition naturally between indoor and outdoor living.",

    materials:
      "Limestone, timber, linen, terracotta and hand-finished surfaces establish a warm and grounded atmosphere.",

    approach:
      "Spaces were arranged around natural light, cross ventilation and visual connections to the landscape.",
  },

  {
  slug: "studio-north",
  number: "05",
  title: "Studio North",
  category: "Commercial",
  location: "Bengaluru, India",
  year: "2025",
  area: "5,100 sq. ft.",
  services: "Workplace Design · Interior Architecture · Branding",

  heroImage:
    "https://images.unsplash.com/photo-1761818645928-47e5dad8ec76?auto=format&fit=crop&w=2200&q=90",

  images: [
    "https://images.unsplash.com/photo-1765366417030-16d9765d920a?auto=format&fit=crop&w=2200&q=90",
    "https://images.unsplash.com/photo-1763306934305-39de4bbf19d9?auto=format&fit=crop&w=2200&q=90",
    "https://images.unsplash.com/photo-1758630737900-a28682c5aa69?auto=format&fit=crop&w=2200&q=90",
  ],

  introduction:
    "Studio North is a light-filled creative workplace designed for a growing multidisciplinary team.",

  concept:
    "The studio balances structured work areas with informal spaces that encourage conversation, collaboration and creative exchange.",

  materials:
    "Pale timber, concrete, glass and neutral textiles create a clean material palette with subtle warmth.",

  approach:
    "The layout prioritises daylight, flexible working arrangements and a clear visual connection between different teams.",
},

 {
  slug: "quiet-residence",
  number: "06",
  title: "Quiet Residence",
  category: "Residential",
  location: "Mumbai, India",
  year: "2024",
  area: "2,900 sq. ft.",
  services: "Interior Architecture · Residential Design · Custom Furniture",

  heroImage:
    "https://images.unsplash.com/photo-1771888703723-01d85da1dae1?auto=format&fit=crop&w=2200&q=90",

  images: [
    "https://images.unsplash.com/photo-1761679296802-09d4d4687723?auto=format&fit=crop&w=2200&q=90",
    "https://images.unsplash.com/photo-1758448755952-42b404bc6f39?auto=format&fit=crop&w=2200&q=90",
    "https://images.unsplash.com/photo-1744126405278-b8c428f309ce?auto=format&fit=crop&w=2200&q=90",
  ],

  introduction:
    "Quiet Residence is a minimal Mumbai home centred around proportion, natural textures and carefully controlled light.",

  concept:
    "The design removes visual noise and allows the architecture, materials and changing daylight to become the primary experience.",

  materials:
    "Travertine, oak, linen, limewashed walls and muted stone tones establish a soft and timeless interior.",

  approach:
    "Every space was considered as part of a continuous sequence, with custom furniture and restrained detailing supporting the overall calm.",
},
];


export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const projectIndex = projects.findIndex(
    (project) => project.slug === slug
  );

  const project = projects[projectIndex];

  if (!project) {
    return (
      <main className="min-h-screen bg-[#F4F1EB] px-6 py-32 text-[#171715]">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs tracking-[0.3em] text-[#8A7560]">
            PROJECT NOT FOUND
          </p>

          <h1 className="mt-8 text-5xl tracking-tight md:text-7xl">
            This project does not exist.
          </h1>

          <Link
            href="/projects"
            className="mt-10 inline-flex items-center gap-2 border-b border-[#171715] pb-2 text-sm"
          >
            <ArrowLeft size={16} />
            Back to projects
          </Link>
        </div>
      </main>
    );
  }

  const previousProject =
    projects[(projectIndex - 1 + projects.length) % projects.length];

  const nextProject =
    projects[(projectIndex + 1) % projects.length];

  return (
    <main className="min-h-screen bg-[#F4F1EB] text-[#171715]">
      <Navbar />

      {/* HERO */}
      <section className="px-6 pb-16 pt-36 md:px-12 md:pb-24 md:pt-44 lg:px-20">
        <div className="mx-auto max-w-[1600px]">
          <div className="grid gap-12 md:grid-cols-12 md:items-end">
            <div className="md:col-span-8">
              <div className="flex items-center gap-4 text-xs tracking-[0.25em] text-[#8A7560]">
                <span>{project.number}</span>
                <span>/</span>
                <span>{project.category}</span>
              </div>

              <h1 className="mt-8 max-w-6xl text-6xl leading-[0.9] tracking-tight sm:text-7xl md:text-8xl lg:text-[8rem]">
                {project.title}
              </h1>
            </div>

            <div className="md:col-span-4">
              <p className="max-w-sm text-sm leading-7 text-[#6F6B64]">
                {project.introduction}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HERO IMAGE */}
      <section className="px-6 md:px-12 lg:px-20">
        <div className="mx-auto max-w-[1600px]">
          <div className="aspect-[16/9] overflow-hidden bg-[#DED9D0]">
            <img
              src={project.heroImage}
              alt={project.title}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* PROJECT INFORMATION */}
      <section className="px-6 py-20 md:px-12 md:py-28 lg:px-20">
        <div className="mx-auto max-w-[1600px]">
          <div className="grid gap-12 border-y border-[#D8D3C9] py-8 md:grid-cols-4">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#8A7560]">
                Location
              </p>
              <p className="mt-3 text-sm">{project.location}</p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#8A7560]">
                Year
              </p>
              <p className="mt-3 text-sm">{project.year}</p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#8A7560]">
                Area
              </p>
              <p className="mt-3 text-sm">{project.area}</p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#8A7560]">
                Services
              </p>
              <p className="mt-3 max-w-xs text-sm leading-6">
                {project.services}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECT INTRODUCTION */}
      <section className="px-6 pb-24 md:px-12 md:pb-32 lg:px-20">
        <div className="mx-auto grid max-w-[1600px] gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="text-xs tracking-[0.3em] text-[#8A7560]">
              THE PROJECT
            </p>
          </div>

          <div className="md:col-span-8">
            <h2 className="max-w-5xl text-3xl leading-[1.15] tracking-tight md:text-5xl lg:text-6xl">
              {project.concept}
            </h2>
          </div>
        </div>
      </section>

      {/* IMAGE + TEXT */}
      <section className="bg-[#DED9D0] px-6 py-20 md:px-12 md:py-28 lg:px-20">
        <div className="mx-auto grid max-w-[1600px] gap-12 md:grid-cols-12 md:items-center">
          <div className="md:col-span-7">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={project.images[0]}
                alt={`${project.title} interior`}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="md:col-span-4 md:col-start-9">
            <p className="text-xs tracking-[0.3em] text-[#8A7560]">
              MATERIAL LANGUAGE
            </p>

            <h2 className="mt-6 text-3xl tracking-tight md:text-4xl">
              Material as atmosphere.
            </h2>

            <p className="mt-6 text-sm leading-7 text-[#6F6B64]">
              {project.materials}
            </p>
          </div>
        </div>
      </section>

      {/* SECOND IMAGE */}
      <section className="px-6 py-20 md:px-12 md:py-32 lg:px-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="aspect-[4/3] overflow-hidden bg-[#DED9D0]">
            <img
              src={project.images[1]}
              alt={`${project.title} detail`}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* DESIGN APPROACH */}
      <section className="px-6 pb-24 md:px-12 md:pb-32 lg:px-20">
        <div className="mx-auto grid max-w-[1600px] gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="text-xs tracking-[0.3em] text-[#8A7560]">
              DESIGN APPROACH
            </p>
          </div>

          <div className="md:col-span-7 md:col-start-6">
            <p className="text-2xl leading-[1.3] tracking-tight md:text-4xl">
              {project.approach}
            </p>
          </div>
        </div>
      </section>

      {/* FULL WIDTH IMAGE */}
      <section className="px-6 md:px-12 lg:px-20">
        <div className="mx-auto max-w-[1600px]">
          <div className="aspect-[16/9] overflow-hidden bg-[#DED9D0]">
            <img
              src={project.images[2]}
              alt={`${project.title} interior detail`}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* BACK TO PROJECTS */}
      <section className="px-6 py-24 md:px-12 md:py-32 lg:px-20">
        <div className="mx-auto max-w-[1600px]">
          <Link
            href="/projects"
            className="group inline-flex items-center gap-3 border-b border-[#171715] pb-2 text-sm"
          >
            <ArrowLeft
              size={17}
              strokeWidth={1.4}
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />
            Back to all projects
          </Link>
        </div>
      </section>

      {/* PREVIOUS / NEXT */}
      <section className="border-y border-[#D8D3C9]">
        <div className="mx-auto grid max-w-[1600px] md:grid-cols-2">
          <Link
            href={`/projects/${previousProject.slug}`}
            className="group border-b border-[#D8D3C9] px-6 py-12 md:border-b-0 md:border-r md:px-12 md:py-16 lg:px-20"
          >
            <p className="flex items-center gap-2 text-xs tracking-[0.2em] text-[#8A7560]">
              <ArrowLeft size={14} />
              PREVIOUS PROJECT
            </p>

            <h3 className="mt-5 text-3xl tracking-tight md:text-5xl">
              {previousProject.title}
            </h3>

            <p className="mt-3 text-sm text-[#6F6B64]">
              {previousProject.category} · {previousProject.location}
            </p>
          </Link>

          <Link
            href={`/projects/${nextProject.slug}`}
            className="group px-6 py-12 md:px-12 md:py-16 lg:px-20"
          >
            <p className="flex items-center justify-end gap-2 text-xs tracking-[0.2em] text-[#8A7560]">
              NEXT PROJECT
              <ArrowRight size={14} />
            </p>

            <h3 className="mt-5 text-right text-3xl tracking-tight md:text-5xl">
              {nextProject.title}
            </h3>

            <p className="mt-3 text-right text-sm text-[#6F6B64]">
              {nextProject.category} · {nextProject.location}
            </p>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#8A7560] px-6 py-24 text-[#F4F1EB] md:px-12 md:py-32 lg:px-20">
        <div className="mx-auto max-w-[1600px]">
          <p className="text-xs tracking-[0.3em] text-[#DED9D0]">
            HAVE A PROJECT IN MIND?
          </p>

          <div className="mt-8 flex flex-col justify-between gap-12 md:flex-row md:items-end">
            <h2 className="max-w-5xl text-5xl leading-[0.95] tracking-tight md:text-7xl lg:text-8xl">
              Let&apos;s shape
              <br />
              your space.
            </h2>

            <Link
              href="/contact"
              className="group flex w-fit shrink-0 items-center gap-3 border-b border-[#F4F1EB] pb-2 text-sm"
            >
              Start a conversation

              <ArrowUpRight
                size={18}
                strokeWidth={1.4}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
