import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import JournalFilter from "@/components/journal/JournalFilter";
const featuredArticle = {
  slug: "the-art-of-materiality",
  category: "Materials",
  date: "September 18, 2026",
  readTime: "6 min read",
  title: "The Art of Materiality",
  excerpt:
    "Why texture, ageing and tactility matter as much as colour when creating interiors that feel timeless.",
  image:
    "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2200&q=90",
};

const articles = [
  {
    slug: "designing-with-natural-light",
    category: "Design Thinking",
    date: "September 08, 2026",
    readTime: "5 min read",
    title: "Designing With Natural Light",
    excerpt:
      "Light changes how architecture is experienced. We explore how orientation, openings and material influence an interior throughout the day.",
    image:
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1600&q=90",
  },
  {
    slug: "the-value-of-restraint",
    category: "Studio",
    date: "August 24, 2026",
    readTime: "4 min read",
    title: "The Value of Restraint",
    excerpt:
      "A considered interior does not need more. It needs the right elements, carefully edited and thoughtfully placed.",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=90",
  },
  {
    slug: "inside-the-material-library",
    category: "Materials",
    date: "August 11, 2026",
    readTime: "7 min read",
    title: "Inside the Material Library",
    excerpt:
      "A look at the surfaces, finishes and natural materials that inform the Aureline design language.",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=90",
  },
  {
    slug: "spaces-that-age-well",
    category: "Design Thinking",
    date: "July 29, 2026",
    readTime: "6 min read",
    title: "Spaces That Age Well",
    excerpt:
      "Good interiors become richer with time. We consider the materials and decisions that allow a space to evolve naturally.",
    image:
      "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=1600&q=90",
  },
  
  {
    slug: "objects-with-purpose",
    category: "Objects",
    date: "June 28, 2026",
    readTime: "5 min read",
    title: "Objects With Purpose",
    excerpt:
      "Furniture and objects become part of architecture when they are selected with proportion, function and context in mind.",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=90",
  },
];



export default function JournalPage() {
  return (
    <main className="min-h-screen bg-[#F4F1EB] text-[#171715]">
      <Navbar />

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="px-6 pb-20 pt-36 md:px-12 md:pb-28 md:pt-44 lg:px-20 lg:pb-36 lg:pt-48">
        <div className="mx-auto max-w-[1600px]">
          <div className="mb-12 flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-[#6F6B64] md:mb-16">
            <span className="h-px w-10 bg-[#8A7560]" />
            <span>The Journal</span>
          </div>

          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <h1 className="max-w-6xl text-[clamp(3.5rem,8.5vw,9rem)] font-light leading-[0.88] tracking-[-0.065em]">
              Ideas,
              <br />
              <span className="text-[#8A7560]">materials & spaces.</span>
            </h1>

            <p className="max-w-md text-lg leading-8 text-[#6F6B64] md:text-xl">
              A collection of thoughts, references and stories from Aureline
              Studio — exploring architecture, interiors, materials and the
              details that shape meaningful spaces.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          FEATURED ARTICLE
      ========================================================= */}
      <section className="px-6 md:px-12 lg:px-20">
        <div className="mx-auto max-w-[1600px]">
          <Link
            href={`/journal/${featuredArticle.slug}`}
            className="group grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-end"
          >
            <div className="relative aspect-[16/9] overflow-hidden">
              <Image
                src={featuredArticle.image}
                alt={featuredArticle.title}
                fill
                priority
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                sizes="(max-width: 1024px) 100vw, 70vw"
              />

              <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10" />
            </div>

            <div className="pb-2 lg:pb-0">
              <div className="mb-6 flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.2em] text-[#8A7560]">
                <span>{featuredArticle.category}</span>
                <span className="h-1 w-1 rounded-full bg-[#8A7560]" />
                <span>{featuredArticle.date}</span>
              </div>

              <h2 className="max-w-xl text-4xl font-light leading-[1] tracking-[-0.045em] md:text-5xl lg:text-6xl">
                {featuredArticle.title}
              </h2>

              <p className="mt-7 max-w-lg text-base leading-8 text-[#6F6B64] md:text-lg">
                {featuredArticle.excerpt}
              </p>

              <div className="mt-8 flex items-center gap-3 text-sm uppercase tracking-[0.2em]">
                Read article
                <ArrowUpRight
                  size={18}
                  strokeWidth={1.2}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </div>
            </div>
          </Link>
        </div>
      </section>

      <JournalFilter articles={articles} />

      {/* =========================================================
          NEWSLETTER / JOURNAL CTA
      ========================================================= */}
      <section className="bg-[#E8E3DA] px-6 py-24 md:px-12 md:py-32 lg:px-20 lg:py-40">
        <div className="mx-auto grid max-w-[1600px] gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <div>
            <p className="mb-7 text-xs uppercase tracking-[0.3em] text-[#6F6B64]">
              Stay curious
            </p>

            <h2 className="max-w-4xl text-4xl font-light leading-[0.98] tracking-[-0.05em] md:text-6xl lg:text-7xl">
              Notes on spaces,
              <br />
              materials & design.
            </h2>
          </div>

          <div>
            <p className="max-w-lg text-base leading-8 text-[#6F6B64] md:text-lg">
              Follow the ideas and references shaping our work. New journal
              stories will explore the thinking behind the spaces we create.
            </p>

            <Link
              href="/contact"
              className="group mt-8 inline-flex items-center gap-3 border-b border-[#171715] pb-3 text-sm uppercase tracking-[0.2em]"
            >
              Get in touch
              <ArrowUpRight
                size={18}
                strokeWidth={1.2}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================
          FOOTER
      ========================================================= */}
      <Footer />
    </main>
  );
}