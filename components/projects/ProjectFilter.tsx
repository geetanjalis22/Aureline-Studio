"use client";

import { useState } from "react";
import Link from "next/link";

export type Project = {
  slug: string;
  number: string;
  title: string;
  category: string;
  location: string;
  year: string;
  description: string;
  image: string;
};

type ProjectFilterProps = {
  projects: Project[];
};

export default function ProjectFilter({
  projects,
}: ProjectFilterProps) {
  const [activeFilter, setActiveFilter] = useState("All Projects");

  const filters = ["All Projects", "Residential", "Commercial"];

  const filteredProjects =
    activeFilter === "All Projects"
      ? projects
      : projects.filter(
          (project) => project.category === activeFilter
        );

  return (
    <section>
      {/* Filter Buttons */}
      <div className="mb-12 flex flex-wrap gap-8 border-b border-[#D8D3C9] pt-5 pb-5">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActiveFilter(filter)}
            className={`text-sm tracking-wide transition-colors ${
              activeFilter === filter
                ? "text-[#171715]"
                : "text-[#6F6B64] hover:text-[#171715]"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Project Grid */}
      <div className="grid gap-x-8 gap-y-16 md:grid-cols-2">
        {filteredProjects.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="group block"
          >
            <div className="overflow-hidden bg-[#E8E3DA]">
              <img
                src={project.image}
                alt={project.title}
                className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </div>

            <div className="mt-5 mb-8 flex items-start justify-between gap-6">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-[#6F6B64]">
                  {project.number}
                </p>

                <h3 className="mt-2 text-xl text-[#171715]">
                  {project.title}
                </h3>

                <p className="mt-1 text-sm text-[#6F6B64]">
                  {project.location}
                </p>
              </div>

              <span className="text-xs uppercase tracking-[0.15em] text-[#6F6B64]">
                {project.category}
              </span>
            </div>
          </Link>
        ))}
      </div>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <p className="py-20 text-center text-[#6F6B64]">
          No projects found in this category.
        </p>
      )}
    </section>
  );
}