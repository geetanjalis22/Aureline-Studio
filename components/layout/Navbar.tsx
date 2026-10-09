"use client";

import Link from "next/link";
import { ArrowUpRight, Menu } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navigation = [
  {
    name: "Projects",
    href: "/projects",
  },
  {
    name: "Studio",
    href: "/studio",
  },
  {
    name: "Services",
    href: "/services",
  },
  {
    name: "Journal",
    href: "/journal",
  },
];

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-[1600px] px-5 py-5 sm:px-8 lg:px-12">
        <nav className="flex items-center justify-between">
          
          {/* Logo */}
          <Link
            href="/"
            className="text-sm font-medium tracking-[0.28em]"
          >
            AURELINE
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm text-[#6F6B64] transition-colors duration-300 hover:text-[#171715]"
              >
                {item.name}
              </Link>
            ))}

            <Link
              href="/contact"
              className="group flex items-center gap-1 text-sm font-medium"
            >
              Contact

              <ArrowUpRight
                size={15}
                strokeWidth={1.5}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger
                aria-label="Open navigation menu"
                className="flex items-center justify-center"
              >
                <Menu
                  size={24}
                  strokeWidth={1.5}
                />
              </SheetTrigger>

              <SheetContent
                side="right"
                className="w-full border-l-0 bg-[#F4F1EB] px-6 sm:max-w-md"
              >
                <SheetTitle className="sr-only">
                  Navigation menu
                </SheetTitle>

                <div className="flex h-full flex-col">

                  {/* Mobile Links */}
                  <div className="mt-16 flex flex-col">
                    {navigation.map((item, index) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="border-b border-[#D8D3C9] py-5 text-3xl font-light tracking-tight"
                      >
                        <span className="mr-4 text-xs text-[#8A7560]">
                          0{index + 1}
                        </span>

                        {item.name}
                      </Link>
                    ))}

                    {/* Contact */}
                    <Link
                      href="/contact"
                      className="flex items-center gap-2 py-5 text-3xl font-light tracking-tight"
                    >
                      Contact

                      <ArrowUpRight
                        size={24}
                        strokeWidth={1.5}
                      />
                    </Link>
                  </div>

                  {/* Mobile Footer */}
                  <div className="mt-auto border-t border-[#D8D3C9] pb-6 pt-6">
                    <p className="text-xs uppercase tracking-[0.2em] text-[#6F6B64]">
                      Interior Architecture & Design
                    </p>

                    <p className="mt-3 text-sm text-[#6F6B64]">
                      Mumbai · India
                    </p>
                  </div>

                </div>
              </SheetContent>
            </Sheet>
          </div>

        </nav>
      </div>
    </header>
  );
}