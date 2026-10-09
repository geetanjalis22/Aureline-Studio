import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="bg-[#8A7560] px-6 py-24 text-[#F4F1EB] md:px-12 md:py-32 lg:px-20">
      <div className="mx-auto max-w-[1600px]">
        <p className="text-xs tracking-[0.3em] text-[#DED9D0]">
          START A PROJECT
        </p>

        <div className="mt-8 flex flex-col justify-between gap-12 md:flex-row md:items-end">
          <h2 className="max-w-5xl text-5xl leading-[0.95] tracking-tight md:text-7xl lg:text-8xl">
            Let&apos;s create
            <br />
            something considered.
          </h2>

          <Link
            href="/contact"
            className="group flex w-fit shrink-0 items-center gap-3 border-b border-[#F4F1EB] pb-2 text-sm"
          >
            Get in touch

            <ArrowUpRight
              size={18}
              strokeWidth={1.5}
              className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}