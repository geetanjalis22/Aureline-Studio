"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

const capabilities = [
  {
    number: "01",
    title: "Interior Architecture",
    description:
      "We shape the architectural character of interiors through spatial planning, proportion, circulation, lighting and materiality.",
  },
  {
    number: "02",
    title: "Residential Interiors",
    description:
      "Thoughtful homes designed around the people who live in them, balancing everyday functionality with warmth, character and timeless detail.",
  },
  {
    number: "03",
    title: "Hospitality & Commercial",
    description:
      "Distinctive environments for hospitality and businesses, designed to strengthen identity while creating memorable experiences.",
  },
  {
    number: "04",
    title: "Workplace Design",
    description:
      "Flexible workplaces that support focused work, collaboration and the evolving ways modern teams use space.",
  },
  {
    number: "05",
    title: "Furniture & Joinery",
    description:
      "Custom furniture and architectural joinery designed specifically for each project, from statement pieces to integrated storage.",
  },
  {
    number: "06",
    title: "Styling & Art Direction",
    description:
      "The final layer of a project — furniture, objects, artwork, textiles and visual details that give each interior its personality.",
  },
];

export default function Capabilities() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleCapability = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="px-6 py-24 md:px-10 md:py-32 lg:px-16 lg:py-40">
      <div className="mx-auto max-w-[1500px]">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          {/* LEFT */}
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-[#6F6B64]">
              Capabilities
            </p>

            <p className="mt-6 max-w-xs text-sm leading-7 text-[#6F6B64]">
              From spatial planning to the final object, we bring together
              every layer required to create a complete interior.
            </p>
          </div>

          {/* RIGHT */}
          <div>
            <h2 className="mb-14 max-w-3xl text-4xl font-light leading-tight tracking-[-0.04em] md:text-6xl">
              From the first idea to the final detail.
            </h2>

            <div className="border-t border-[#D8D3C9]">
              {capabilities.map((capability, index) => {
                const isOpen = activeIndex === index;

                return (
                  <div
                    key={capability.number}
                    className="border-b border-[#D8D3C9]"
                  >
                    <button
                      type="button"
                      onClick={() => toggleCapability(index)}
                      aria-expanded={isOpen}
                      className="group flex w-full items-center gap-6 py-7 text-left md:py-8"
                    >
                      {/* NUMBER */}
                      <span className="w-8 shrink-0 text-xs text-[#8A7560]">
                        {capability.number}
                      </span>

                      {/* TITLE */}
                      <span className="flex-1 text-xl font-light transition-transform duration-300 group-hover:translate-x-1 md:text-2xl">
                        {capability.title}
                      </span>

                      {/* PLUS */}
                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#D8D3C9] transition-all duration-300 ${
                          isOpen
                            ? "rotate-45 bg-[#171715] text-[#F4F1EB]"
                            : "bg-transparent text-[#171715]"
                        }`}
                      >
                        <Plus size={17} strokeWidth={1.2} />
                      </span>
                    </button>

                    {/* DESCRIPTION */}
                    <div
                      className={`grid transition-[grid-template-rows,opacity] duration-400 ease-out ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="grid gap-6 pb-8 pl-14 md:grid-cols-[1fr_1fr] md:pl-14">
                          <p className="max-w-xl text-base leading-7 text-[#6F6B64]">
                            {capability.description}
                          </p>

                          <div className="hidden md:block">
                            <span className="text-xs uppercase tracking-[0.2em] text-[#8A7560]">
                              Aureline Studio
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}