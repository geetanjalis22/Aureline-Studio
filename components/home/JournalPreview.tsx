import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const articles = [
  {
    category: "Materials",
    title: "The quiet character of natural stone",
    date: "September 2026",
  },
  {
    category: "Design",
    title: "Creating interiors that age beautifully",
    date: "August 2026",
  },
  {
    category: "Process",
    title: "Inside our approach to residential design",
    date: "July 2026",
  },
];

export default function JournalPreview() {
  return (
    <section className="bg-[#F4F1EB] px-6 py-24 md:px-12 md:py-32 lg:px-20">
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-xs tracking-[0.3em] text-[#8A7560]">
              JOURNAL
            </p>

            <h2 className="mt-5 text-4xl tracking-tight md:text-6xl">
              Notes from the studio.
            </h2>
          </div>

          <Link
            href="/journal"
            className="group flex w-fit items-center gap-2 border-b border-[#171715] pb-1 text-sm"
          >
            View journal
            <ArrowUpRight
              size={16}
              strokeWidth={1.5}
              className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </Link>
        </div>

        <div className="grid border-t border-[#D8D3C9] md:grid-cols-3">
          {articles.map((article, index) => (
            <Link
              href="/journal"
              key={article.title}
              className={`group py-8 md:px-8 md:py-10 ${
                index !== 0 ? "md:border-l md:border-[#D8D3C9]" : ""
              }`}
            >
              <div className="flex justify-between">
                <span className="text-xs uppercase tracking-[0.2em] text-[#8A7560]">
                  {article.category}
                </span>

                <ArrowUpRight
                  size={18}
                  strokeWidth={1.3}
                  className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </div>

              <h3 className="mt-20 max-w-sm text-2xl leading-tight tracking-tight md:text-3xl">
                {article.title}
              </h3>

              <p className="mt-6 text-xs text-[#6F6B64]">
                {article.date}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}