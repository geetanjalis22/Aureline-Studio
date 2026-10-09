import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    number: "01",
    title: "Casa Verde",
    category: "Residential Interior",
    location: "Mumbai, India",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=85",
  },
  {
    number: "02",
    title: "The Monochrome House",
    category: "Residential Interior",
    location: "Pune, India",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=85",
  },
  {
    number: "03",
    title: "Atelier 27",
    category: "Commercial Interior",
    location: "Mumbai, India",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1800&q=85",
  },
];

export default function FeaturedProjects() {
  return (
    <section className="bg-[#F4F1EB] px-6 py-24 md:px-12 md:py-32 lg:px-20">
      <div className="mx-auto max-w-[1600px]">
        {/* Section heading */}
        <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-xs tracking-[0.3em] text-[#8A7560]">
              SELECTED WORK
            </p>

            <h2 className="max-w-2xl text-4xl leading-tight tracking-tight md:text-6xl">
              Spaces designed
              <br />
              around living.
            </h2>
          </div>

          <Link
            href="/projects"
            className="group flex w-fit items-center gap-2 border-b border-[#171715] pb-1 text-sm"
          >
            View all projects
            <ArrowUpRight
              size={16}
              strokeWidth={1.5}
              className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* Projects */}
        <div className="space-y-20 md:space-y-28">
          {projects.map((project, index) => (
            <Link
              href="/projects"
              key={project.number}
              className={`group block ${
                index === 1 ? "md:ml-[16%]" : ""
              } ${index === 2 ? "md:ml-[8%]" : ""}`}
            >
              {/* Image */}
              <div className="relative overflow-hidden bg-[#DED9D0]">
                <img
                  src={project.image}
                  alt={project.title}
                  className={`w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03] ${
                    index === 0
                      ? "aspect-[16/9]"
                      : index === 1
                        ? "aspect-[4/3]"
                        : "aspect-[16/9]"
                  }`}
                />
              </div>

              {/* Project information */}
              <div className="mt-5 flex flex-col gap-3 border-t border-[#D8D3C9] pt-4 md:flex-row md:items-start md:justify-between">
                <div className="flex gap-5">
                  <span className="text-xs text-[#8A7560]">
                    {project.number}
                  </span>

                  <div>
                    <h3 className="text-xl tracking-tight md:text-2xl">
                      {project.title}
                    </h3>

                    <p className="mt-1 text-sm text-[#6F6B64]">
                      {project.category}
                    </p>
                  </div>
                </div>

                <p className="text-sm text-[#6F6B64]">
                  {project.location}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}