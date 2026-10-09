"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export type JournalArticle = {
  slug: string;
  category: string;
  date: string;
  readTime: string;
  title: string;
  excerpt: string;
  image: string;
};

type JournalFilterProps = {
  articles: JournalArticle[];
};

export default function JournalFilter({
  articles,
}: JournalFilterProps) {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    "Design Thinking",
    "Materials",
    "Projects",
    "Studio",
    "Objects",
  ];

  const filteredArticles =
    activeCategory === "All"
      ? articles
      : articles.filter(
          (article) => article.category === activeCategory
        );

  return (
    <>
      {/* =========================================================
          CATEGORY FILTER
      ========================================================= */}
      <section className="px-6 pt-24 md:px-12 md:pt-32 lg:px-20 lg:pt-40">
        <div className="mx-auto max-w-[1600px]">
          <div className="flex flex-wrap items-center gap-x-8 gap-y-4 border-y border-[#D8D3C9] py-5">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`text-xs uppercase tracking-[0.2em] transition-colors duration-300 ${
                  activeCategory === category
                    ? "text-[#171715]"
                    : "text-[#6F6B64] hover:text-[#171715]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          ARTICLE GRID
      ========================================================= */}
      <section className="px-6 py-20 md:px-12 md:py-28 lg:px-20 lg:py-32">
        <div className="mx-auto max-w-[1600px]">
          {filteredArticles.length > 0 ? (
            <div className="grid gap-x-8 gap-y-20 md:grid-cols-2 lg:gap-x-10 lg:gap-y-28">
              {filteredArticles.map((article) => (
                <Link
                  key={article.slug}
                  href={`/journal/${article.slug}`}
                  className="group"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />

                    <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10" />
                  </div>

                  <div className="mt-6">
                    <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.2em] text-[#8A7560]">
                      <span>{article.category}</span>

                      <span className="h-1 w-1 rounded-full bg-[#8A7560]" />

                      <span>{article.date}</span>

                      <span className="h-1 w-1 rounded-full bg-[#8A7560]" />

                      <span>{article.readTime}</span>
                    </div>

                    <div className="mt-4 flex items-start justify-between gap-6">
                      <h2 className="max-w-xl text-3xl font-light leading-tight tracking-[-0.035em] md:text-4xl">
                        {article.title}
                      </h2>

                      <span className="mt-1 shrink-0">
                        <ArrowUpRight
                          size={20}
                          strokeWidth={1.2}
                          className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                        />
                      </span>
                    </div>

                    <p className="mt-5 max-w-xl text-base leading-7 text-[#6F6B64]">
                      {article.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <p className="py-20 text-center text-sm text-[#6F6B64]">
              No articles found in this category.
            </p>
          )}
        </div>
      </section>
    </>
  );
}