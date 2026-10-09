import Link from "next/link";

const navigation = [
  { name: "Projects", href: "/projects" },
  { name: "Studio", href: "/studio" },
  { name: "Services", href: "/services" },
  { name: "Journal", href: "/journal" },
  { name: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#171715] px-6 py-12 text-[#F4F1EB] md:px-12 md:py-16 lg:px-20">
      <div className="mx-auto max-w-[1600px]">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Link
              href="/"
              className="text-sm font-medium tracking-[0.28em]"
            >
              AURELINE
            </Link>

            <p className="mt-6 max-w-sm text-sm leading-7 text-[#A8A39A]">
              Interior architecture and design shaped around material,
              proportion, light and everyday life.
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="text-xs uppercase tracking-[0.2em] text-[#8A7560]">
              Explore
            </p>

            <div className="mt-5 flex flex-col gap-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="w-fit text-sm text-[#C8C3BA] transition-colors hover:text-[#F4F1EB]"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="md:col-span-4">
            <p className="text-xs uppercase tracking-[0.2em] text-[#8A7560]">
              Studio
            </p>

            <p className="mt-5 text-sm leading-7 text-[#C8C3BA]">
              Mumbai · India
              <br />
              hello@aureline.studio
            </p>
          </div>
        </div>

        <div className="mt-16 flex flex-col justify-between gap-4 border-t border-[#383733] pt-6 text-xs text-[#77736C] md:flex-row">
          <p>© 2026 Aureline Studio. All rights reserved.</p>

          <p>Interior Architecture & Design</p>
        </div>
      </div>
    </footer>
  );
}