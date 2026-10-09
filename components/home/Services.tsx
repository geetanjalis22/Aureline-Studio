import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    number: "01",
    title: "Interior Architecture",
    description:
      "Spatial planning, architectural detailing and interior environments developed as one cohesive design.",
  },
  {
    number: "02",
    title: "Interior Design",
    description:
      "Material palettes, furniture, lighting and styling carefully selected to create a unified atmosphere.",
  },
  {
    number: "03",
    title: "Residential",
    description:
      "Personal and considered homes designed around how people actually live.",
  },
  {
    number: "04",
    title: "Commercial",
    description:
      "Distinctive environments for hospitality, workspaces, retail and emerging businesses.",
  },
];

export default function Services() {
  return (
    <section className="bg-[#DED9D0] px-6 py-24 md:px-12 md:py-32 lg:px-20">
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-xs tracking-[0.3em] text-[#8A7560]">
              WHAT WE DO
            </p>

            <h2 className="mt-5 text-4xl tracking-tight md:text-6xl">
              Services
            </h2>
          </div>

          <Link
            href="/services"
            className="group flex w-fit items-center gap-2 border-b border-[#171715] pb-1 text-sm"
          >
            Explore services
            <ArrowUpRight
              size={16}
              strokeWidth={1.5}
              className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </Link>
        </div>

        <div className="grid border-t border-[#BDB7AD] md:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.number}
              className="border-b border-[#BDB7AD] py-8 md:min-h-[260px] md:px-8 md:py-10"
            >
              <div className="flex h-full flex-col justify-between gap-12">
                <div className="flex justify-between">
                  <span className="text-xs text-[#8A7560]">
                    {service.number}
                  </span>

                  <ArrowUpRight size={18} strokeWidth={1.3} />
                </div>

                <div>
                  <h3 className="text-2xl tracking-tight md:text-3xl">
                    {service.title}
                  </h3>

                  <p className="mt-4 max-w-md text-sm leading-7 text-[#6F6B64]">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}