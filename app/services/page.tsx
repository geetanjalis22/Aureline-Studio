import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const services = [
  {
    number: "01",
    title: "Interior Architecture",
    description:
      "We shape the architectural character of a space through proportion, circulation, light, material and detail.",
    scope:
      "From early spatial planning to construction documentation, we develop interiors as complete architectural experiences.",
    includes: [
      "Spatial planning",
      "Concept development",
      "Material strategy",
      "Lighting design",
      "Technical detailing",
      "Construction documentation",
    ],
  },
  {
    number: "02",
    title: "Residential Interiors",
    description:
      "Personal homes designed around the people who inhabit them, balancing everyday comfort with a strong architectural identity.",
    scope:
      "Each residence is developed around its context, routines and individual character rather than a predetermined aesthetic.",
    includes: [
      "Apartments",
      "Private residences",
      "Villas",
      "Weekend homes",
      "Custom furniture",
      "Art & styling",
    ],
  },
  {
    number: "03",
    title: "Commercial & Hospitality",
    description:
      "Spaces that translate a brand's identity into physical experience through atmosphere, movement and material.",
    scope:
      "We create environments for hospitality, retail and commercial clients where function and identity work together.",
    includes: [
      "Restaurants & cafés",
      "Boutique hospitality",
      "Retail spaces",
      "Studios",
      "Showrooms",
      "Brand environments",
    ],
  },
  {
    number: "04",
    title: "Workplace Design",
    description:
      "Flexible workplaces designed to support focused work, collaboration and the changing needs of contemporary teams.",
    scope:
      "We consider the relationship between people, productivity and space to create workplaces that feel purposeful and adaptable.",
    includes: [
      "Office planning",
      "Creative studios",
      "Meeting spaces",
      "Collaborative areas",
      "Material palettes",
      "Furniture planning",
    ],
  },
  {
    number: "05",
    title: "Furniture & Joinery",
    description:
      "Custom furniture and architectural elements created specifically for the proportions and requirements of each project.",
    scope:
      "From a single statement piece to an entire joinery package, every element is designed as part of the architecture.",
    includes: [
      "Custom furniture",
      "Built-in storage",
      "Kitchens",
      "Wardrobes",
      "Vanities",
      "Architectural joinery",
    ],
  },
  {
    number: "06",
    title: "Styling & Art Direction",
    description:
      "The final layer that gives a space its personality through art, objects, textiles and carefully selected details.",
    scope:
      "We curate the elements that complete an interior and ensure that the final environment feels cohesive and lived-in.",
    includes: [
      "Art curation",
      "Furniture selection",
      "Objects & accessories",
      "Textiles",
      "Planting",
      "Final styling",
    ],
  },
];

const process = [
  {
    number: "01",
    title: "Discover",
    description:
      "We understand the site, brief, context and ambitions behind the project.",
  },
  {
    number: "02",
    title: "Concept",
    description:
      "Spatial ideas, material directions and the overall design language begin to take shape.",
  },
  {
    number: "03",
    title: "Develop",
    description:
      "The concept is translated into drawings, details, materials, furniture and specifications.",
  },
  {
    number: "04",
    title: "Realise",
    description:
      "We coordinate the final stages to bring the intended design into the built environment.",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#F4F1EB] text-[#171715]">
      <Navbar />

      {/* HERO */}
      <section className="px-6 pb-20 pt-36 md:px-12 md:pb-28 md:pt-44 lg:px-20">
        <div className="mx-auto max-w-[1600px]">
          <div className="mb-12 flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-[#6F6B64]">
            <span className="h-px w-10 bg-[#8A7560]" />
            <span>Services</span>
          </div>

          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <h1 className="max-w-6xl text-[clamp(3.5rem,8vw,8.5rem)] font-light leading-[0.88] tracking-[-0.065em]">
              Design from
              <br />
              <span className="text-[#8A7560]">inside out.</span>
            </h1>

            <p className="max-w-md text-lg leading-8 text-[#6F6B64] md:text-xl">
              From spatial planning to the final detail, Aureline Studio
              creates considered environments where architecture, material and
              everyday life come together.
            </p>
          </div>
        </div>
      </section>

      {/* HERO IMAGE */}
      <section className="px-6 md:px-12 lg:px-20">
        <div className="mx-auto max-w-[1600px]">
          <div className="relative aspect-[16/8] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2400&q=90"
              alt="Contemporary interior designed by Aureline Studio"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 90vw"
            />
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="px-6 py-24 md:px-12 md:py-32 lg:px-20 lg:py-40">
        <div className="mx-auto grid max-w-[1600px] gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[#6F6B64]">
              What we do
            </p>
          </div>

          <div>
            <h2 className="max-w-5xl text-3xl font-light leading-tight tracking-[-0.035em] md:text-5xl lg:text-6xl">
              Every layer of a project is considered as part of one complete
              experience.
            </h2>

            <p className="mt-10 max-w-2xl text-base leading-8 text-[#6F6B64] md:text-lg">
              Our work moves between architecture, interiors, furniture and
              styling. By bringing these disciplines together, we create spaces
              where individual details contribute to a coherent whole.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="border-y border-[#D8D3C9]">
        <div className="mx-auto max-w-[1600px]">
          {services.map((service) => (
            <article
              key={service.number}
              className="grid border-b border-[#D8D3C9] last:border-b-0 lg:grid-cols-[140px_0.9fr_1.1fr]"
            >
              {/* NUMBER */}
              <div className="px-6 pt-8 md:px-12 lg:px-20 lg:pt-12">
                <span className="text-sm text-[#8A7560]">
                  {service.number}
                </span>
              </div>

              {/* TITLE */}
              <div className="px-6 py-8 md:px-12 md:py-10 lg:px-0 lg:py-12">
                <h2 className="text-3xl font-light tracking-[-0.03em] md:text-5xl">
                  {service.title}
                </h2>
              </div>

              {/* CONTENT */}
              <div className="px-6 pb-10 md:px-12 lg:py-12 lg:pr-20">
                <p className="max-w-2xl text-base leading-8 text-[#6F6B64] md:text-lg">
                  {service.description}
                </p>

                <p className="mt-8 max-w-2xl text-sm leading-7 text-[#6F6B64]">
                  {service.scope}
                </p>

                <div className="mt-10">
                  <p className="mb-5 text-xs uppercase tracking-[0.25em] text-[#8A7560]">
                    Scope
                  </p>

                  <div className="grid border-t border-[#D8D3C9] sm:grid-cols-2">
                    {service.includes.map((item) => (
                      <div
                        key={item}
                        className="border-b border-[#D8D3C9] py-3 text-sm text-[#6F6B64]"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* MATERIALITY */}
      <section className="px-6 py-24 md:px-12 md:py-32 lg:px-20 lg:py-40">
        <div className="mx-auto grid max-w-[1600px] gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1800&q=90"
              alt="Interior material and architectural details"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
          </div>

          <div className="flex flex-col justify-end lg:pl-12">
            <p className="mb-8 text-xs uppercase tracking-[0.3em] text-[#6F6B64]">
              Material & detail
            </p>

            <h2 className="text-4xl font-light leading-tight tracking-[-0.04em] md:text-6xl">
              The details are
              <br />
              <span className="text-[#8A7560]">the design.</span>
            </h2>

            <p className="mt-8 max-w-lg text-base leading-8 text-[#6F6B64]">
              Natural stone, timber, metal, fabric and plaster are selected not
              simply for appearance, but for how they age, feel and interact
              with light.
            </p>

            <p className="mt-6 max-w-lg text-base leading-8 text-[#6F6B64]">
              We believe that the quality of a space is often found in the
              moments that are closest to the hand and eye.
            </p>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-[#171715] px-6 py-24 text-[#F4F1EB] md:px-12 md:py-32 lg:px-20 lg:py-40">
        <div className="mx-auto max-w-[1600px]">
          <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[#B9B2A8]">
                Our process
              </p>
            </div>

            <div>
              <h2 className="max-w-4xl text-4xl font-light leading-tight tracking-[-0.04em] md:text-6xl">
                A clear process.
                <br />
                <span className="text-[#B9B2A8]">A considered result.</span>
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

                    <h3 className="text-2xl font-light md:text-3xl">
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

      {/* PROJECT CTA */}
      <section className="px-6 py-24 md:px-12 md:py-32 lg:px-20 lg:py-40">
        <div className="mx-auto max-w-[1600px] border-t border-[#D8D3C9] pt-16 md:pt-24">
          <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="mb-6 text-xs uppercase tracking-[0.3em] text-[#6F6B64]">
                Start a project
              </p>

              <h2 className="max-w-5xl text-4xl font-light leading-[0.95] tracking-[-0.05em] md:text-6xl lg:text-8xl">
                Let&apos;s create
                <br />
                something considered.
              </h2>
            </div>

            <Link
              href="/contact"
              className="group flex w-fit items-center gap-4 border-b border-[#171715] pb-3 text-sm uppercase tracking-[0.2em]"
            >
              Discuss your project

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