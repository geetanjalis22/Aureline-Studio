import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Plus } from "lucide-react";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Capabilities from "./Capabilities";

const principles = [
  {
    number: "01",
    title: "Context",
    description:
      "Every project begins with understanding its context — the architecture, landscape, people and everyday rituals that shape how a space should feel.",
  },
  {
    number: "02",
    title: "Materiality",
    description:
      "We work with honest materials, tactile surfaces and considered details to create interiors that become richer with time.",
  },
  {
    number: "03",
    title: "Proportion",
    description:
      "We believe that thoughtful proportion creates quiet impact. Every opening, object and transition is considered as part of the whole.",
  },
  {
    number: "04",
    title: "Light",
    description:
      "Natural light is treated as a design material. It changes throughout the day, revealing different qualities within the same space.",
  },
];

const capabilities = [
  "Interior Architecture",
  "Residential Interiors",
  "Hospitality & Commercial",
  "Workplace Design",
  "Furniture & Joinery",
  "Styling & Art Direction",
];

const process = [
  {
    number: "01",
    title: "Discover",
    description:
      "We begin by understanding the site, brief, lifestyle and ambitions behind each project.",
  },
  {
    number: "02",
    title: "Define",
    description:
      "Ideas are translated into spatial concepts, material directions and a clear design language.",
  },
  {
    number: "03",
    title: "Develop",
    description:
      "Plans, details, furniture and finishes are developed carefully to bring the concept into focus.",
  },
  {
    number: "04",
    title: "Realise",
    description:
      "We coordinate the final stages to ensure the intended design survives from drawing to finished space.",
  },
];

export default function StudioPage() {
  return (
    <main className="min-h-screen bg-[#F4F1EB] text-[#171715]">
      <Navbar />

      {/* HERO */}
      <section className="px-6 pb-20 pt-36 md:px-10 md:pb-28 md:pt-44 lg:px-16">
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-12 flex items-center gap-4 text-xs uppercase tracking-[0.25em] text-[#6F6B64]">
            <span className="h-px w-10 bg-[#8A7560]" />
            <span>Studio</span>
          </div>

          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <h1 className="max-w-5xl text-[clamp(3.5rem,8vw,8.5rem)] font-light leading-[0.88] tracking-[-0.065em]">
              Spaces shaped
              <br />
              <span className="text-[#8A7560]">with intention.</span>
            </h1>

            <div className="max-w-md lg:pb-3">
              <p className="text-lg leading-8 text-[#6F6B64] md:text-xl">
                Aureline Studio is an interior architecture and design studio
                creating thoughtful spaces through material, proportion, light
                and restraint.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HERO IMAGE */}
      <section className="px-6 md:px-10 lg:px-16">
        <div className="mx-auto max-w-[1500px]">
          <div className="relative aspect-[16/8] overflow-hidden bg-[#D8D3C9]">
            <Image
              src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2400&q=90"
              alt="Aureline Studio interior"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 90vw"
            />
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="px-6 py-24 md:px-10 md:py-32 lg:px-16 lg:py-40">
        <div className="mx-auto grid max-w-[1500px] gap-16 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-[#6F6B64]">
              About Aureline
            </p>
          </div>

          <div className="max-w-4xl">
            <h2 className="text-3xl font-light leading-tight tracking-[-0.03em] md:text-5xl lg:text-6xl">
              We create interiors that feel considered, calm and deeply
              connected to the people who inhabit them.
            </h2>

            <div className="mt-10 grid gap-8 text-base leading-8 text-[#6F6B64] md:grid-cols-2">
              <p>
                Aureline Studio works across interior architecture, residential
                design, commercial spaces and custom furniture. Our approach
                combines architectural clarity with a sensitivity to material,
                light and everyday life.
              </p>

              <p>
                Rather than following a fixed aesthetic, we allow each project
                to develop its own identity. The result is a collection of
                spaces that are quiet in character but rich in detail.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STATEMENT */}
      <section className="border-y border-[#D8D3C9] px-6 md:px-10 lg:px-16">
        <div className="mx-auto grid max-w-[1500px] lg:grid-cols-2">
          <div className="border-b border-[#D8D3C9] py-16 lg:border-b-0 lg:border-r lg:py-24 lg:pr-20">
            <span className="text-[clamp(5rem,12vw,11rem)] font-light leading-none tracking-[-0.08em]">
              01
            </span>
            <p className="mt-8 max-w-md text-xl leading-8 text-[#6F6B64]">
              Thoughtful spaces begin with thoughtful questions.
            </p>
          </div>

          <div className="py-16 lg:py-24 lg:pl-20">
            <p className="max-w-2xl text-2xl font-light leading-relaxed md:text-4xl">
              We look beyond trends to understand how a space should function,
              age and ultimately feel.
            </p>
          </div>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="px-6 py-24 md:px-10 md:py-32 lg:px-16 lg:py-40">
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-16 grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
            <p className="text-xs uppercase tracking-[0.25em] text-[#6F6B64]">
              Our principles
            </p>

            <h2 className="max-w-4xl text-4xl font-light leading-tight tracking-[-0.04em] md:text-6xl">
              A quieter approach to design.
            </h2>
          </div>

          <div className="border-t border-[#D8D3C9]">
            {principles.map((principle) => (
              <div
                key={principle.number}
                className="grid gap-6 border-b border-[#D8D3C9] py-8 md:grid-cols-[100px_0.8fr_1.2fr] md:items-start md:py-10"
              >
                <span className="text-sm text-[#8A7560]">
                  {principle.number}
                </span>

                <h3 className="text-2xl font-light md:text-3xl">
                  {principle.title}
                </h3>

                <p className="max-w-xl text-base leading-7 text-[#6F6B64]">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMAGE + PHILOSOPHY */}
      <section className="px-6 md:px-10 lg:px-16">
        <div className="mx-auto grid max-w-[1500px] gap-8 lg:grid-cols-[1.25fr_0.75fr]">
          <div className="relative aspect-[4/5] overflow-hidden bg-[#D8D3C9]">
            <Image
              src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1800&q=90"
              alt="Material and architectural details"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
          </div>

          <div className="flex flex-col justify-end bg-[#E8E3DA] p-8 md:p-12 lg:p-16">
            <p className="mb-10 text-xs uppercase tracking-[0.25em] text-[#6F6B64]">
              Our philosophy
            </p>

            <h2 className="text-3xl font-light leading-tight tracking-[-0.03em] md:text-5xl">
              Less noise.
              <br />
              More meaning.
            </h2>

            <p className="mt-8 max-w-md text-base leading-8 text-[#6F6B64]">
              Good design does not need to announce itself. It reveals itself
              slowly — through the way light moves across a wall, the feel of a
              material or the ease with which a room becomes part of everyday
              life.
            </p>
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <Capabilities/>

      {/* PROCESS */}
      <section className="bg-[#171715] px-6 py-24 text-[#F4F1EB] md:px-10 md:py-32 lg:px-16 lg:py-40">
        <div className="mx-auto max-w-[1500px]">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-[#B9B2A8]">
                Process
              </p>
            </div>

            <div>
              <h2 className="max-w-4xl text-4xl font-light leading-tight tracking-[-0.04em] md:text-6xl">
                A considered process from concept to completion.
              </h2>

              <div className="mt-16 border-t border-white/20">
                {process.map((step) => (
                  <div
                    key={step.number}
                    className="grid gap-5 border-b border-white/20 py-8 md:grid-cols-[100px_0.8fr_1.2fr] md:py-10"
                  >
                    <span className="text-sm text-[#B9B2A8]">
                      {step.number}
                    </span>

                    <h3 className="text-2xl font-light">
                      {step.title}
                    </h3>

                    <p className="max-w-xl text-base leading-7 text-[#B9B2A8]">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CLOSING IMAGE */}
      <section className="px-6 py-24 md:px-10 md:py-32 lg:px-16">
        <div className="mx-auto max-w-[1500px]">
          <div className="relative aspect-[16/7] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=2400&q=90"
              alt="Aureline Studio interior architecture"
              fill
              className="object-cover"
              sizes="90vw"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24 md:px-10 md:pb-32 lg:px-16 lg:pb-40">
        <div className="mx-auto max-w-[1500px] border-t border-[#D8D3C9] pt-16 md:pt-24">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="mb-6 text-xs uppercase tracking-[0.25em] text-[#6F6B64]">
                Start a project
              </p>

              <h2 className="max-w-4xl text-4xl font-light leading-[1] tracking-[-0.05em] md:text-6xl lg:text-8xl">
                Have a space
                <br />
                in mind?
              </h2>
            </div>

            <Link
              href="/contact"
              className="group flex w-fit items-center gap-4 border-b border-[#171715] pb-3 text-sm uppercase tracking-[0.18em]"
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

      <Footer />
    </main>
  );
}