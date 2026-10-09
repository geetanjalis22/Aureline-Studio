import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function StudioIntro() {
  return (
    <section className="bg-[#171715] px-6 py-24 text-[#F4F1EB] md:px-12 md:py-32 lg:px-20">
      <div className="mx-auto max-w-[1600px]">
        <div className="grid gap-16 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-4">
            <p className="text-xs tracking-[0.3em] text-[#A99C8C]">
              THE STUDIO
            </p>
          </div>

          <div className="md:col-span-8">
            <h2 className="max-w-5xl text-4xl leading-[1.08] tracking-tight md:text-6xl lg:text-7xl">
              We create interiors that feel considered, calm and deeply
              connected to the people who inhabit them.
            </h2>

            <div className="mt-12 grid gap-8 md:grid-cols-2">
              <p className="max-w-md text-sm leading-7 text-[#B8B3AA]">
                Aureline Studio is an interior architecture and design
                practice focused on creating thoughtful environments through
                architecture, material and light.
              </p>

              <p className="max-w-md text-sm leading-7 text-[#B8B3AA]">
                From private residences to carefully considered commercial
                spaces, we approach every project with curiosity, restraint
                and attention to detail.
              </p>
            </div>

            <Link
              href="/studio"
              className="group mt-12 inline-flex items-center gap-2 border-b border-[#A99C8C] pb-2 text-sm"
            >
              Discover the studio
              <ArrowUpRight
                size={16}
                strokeWidth={1.5}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}