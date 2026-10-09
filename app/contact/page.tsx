import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactForm from "@/components/contact/ContactForm";
export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#F4F1EB] text-[#171715]">
      <Navbar />

      {/* HERO */}
      <section className="px-6 pb-20 pt-36 md:px-12 md:pb-28 md:pt-44 lg:px-20 lg:pb-36 lg:pt-48">
        <div className="mx-auto max-w-[1600px]">
          <div className="mb-12 flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-[#6F6B64] md:mb-16">
            <span className="h-px w-10 bg-[#8A7560]" />
            <span>Contact Aureline</span>
          </div>

          <div className="grid gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
            <h1 className="max-w-6xl text-[clamp(4rem,9vw,9.5rem)] font-light leading-[0.86] tracking-[-0.07em]">
              Let&apos;s shape
              <br />
              <span className="text-[#8A7560]">something meaningful.</span>
            </h1>

            <p className="max-w-md text-lg leading-8 text-[#6F6B64] md:text-xl">
              Whether you are planning a new home, transforming an existing
              space or developing a hospitality project, we would love to hear
              about it.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT INFORMATION */}
      <section className="border-y border-[#D8D3C9] px-6 md:px-12 lg:px-20">
        <div className="mx-auto grid max-w-[1600px] md:grid-cols-3">
          <div className="border-b border-[#D8D3C9] py-10 md:border-b-0 md:border-r md:pr-10">
            <p className="mb-5 text-xs uppercase tracking-[0.25em] text-[#8A7560]">
              Studio
            </p>

            <p className="max-w-xs text-base leading-7 text-[#6F6B64]">
              Aureline Studio
              <br />
              Interior Architecture &amp; Design
              <br />
              Mumbai, India
            </p>
          </div>

          <div className="border-b border-[#D8D3C9] py-10 md:border-b-0 md:border-r md:px-10">
            <p className="mb-5 text-xs uppercase tracking-[0.25em] text-[#8A7560]">
              Enquiries
            </p>

            <a
              href="mailto:hello@aurelinestudio.com"
              className="group inline-flex items-center gap-2 text-lg font-light"
            >
              hello@aurelinestudio.com
              <ArrowUpRight
                size={17}
                strokeWidth={1.2}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </div>

          <div className="py-10 md:pl-10">
            <p className="mb-5 text-xs uppercase tracking-[0.25em] text-[#8A7560]">
              Availability
            </p>

            <p className="max-w-xs text-base leading-7 text-[#6F6B64]">
              Currently accepting selected residential, hospitality and
              commercial projects.
            </p>
          </div>
        </div>
      </section>

      {/* ENQUIRY */}
      <section className="px-6 py-24 md:px-12 md:py-32 lg:px-20 lg:py-40">
        <div className="mx-auto grid max-w-[1600px] gap-16 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
          {/* LEFT */}
          <div>
            <p className="mb-6 text-xs uppercase tracking-[0.3em] text-[#8A7560]">
              Start a project
            </p>

            <h2 className="max-w-md text-4xl font-light leading-[0.98] tracking-[-0.05em] md:text-5xl lg:text-6xl">
              Tell us about your space.
            </h2>

            <p className="mt-8 max-w-md text-base leading-8 text-[#6F6B64]">
              A few details about your project will help us understand your
              requirements and determine how we can work together.
            </p>

            <div className="mt-12 border-t border-[#D8D3C9] pt-6">
              <p className="text-sm leading-7 text-[#6F6B64]">
                We typically respond to new enquiries within 2–3 working days.
              </p>
            </div>
          </div>

          {/* FORM */}
          <ContactForm />
        </div>
      </section>

      {/* CLOSING STATEMENT */}
      <section className="bg-[#E8E3DA] px-6 py-24 md:px-12 md:py-32 lg:px-20 lg:py-40">
        <div className="mx-auto max-w-[1600px]">
          <p className="mb-8 text-xs uppercase tracking-[0.3em] text-[#6F6B64]">
            Aureline Studio
          </p>

          <h2 className="max-w-5xl text-4xl font-light leading-[0.98] tracking-[-0.055em] md:text-6xl lg:text-8xl">
            Thoughtful spaces begin
            <br />
            with a conversation.
          </h2>

          <Link
            href="/projects"
            className="group mt-10 inline-flex items-center gap-3 border-b border-[#171715] pb-3 text-sm uppercase tracking-[0.2em]"
          >
            Explore our projects
            <ArrowUpRight
              size={18}
              strokeWidth={1.2}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}