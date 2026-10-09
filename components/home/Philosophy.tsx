const principles = [
  {
    number: "01",
    title: "Material",
    description:
      "Natural materials, considered textures and honest finishes create spaces with depth and character.",
  },
  {
    number: "02",
    title: "Light",
    description:
      "We work with natural and architectural light to shape atmosphere throughout the day.",
  },
  {
    number: "03",
    title: "Proportion",
    description:
      "Every element is considered in relation to scale, balance and the architecture around it.",
  },
  {
    number: "04",
    title: "Living",
    description:
      "Beautiful spaces should also work effortlessly around the people who use them.",
  },
];

export default function Philosophy() {
  return (
    <section className="bg-[#F4F1EB] px-6 py-24 md:px-12 md:py-32 lg:px-20">
      <div className="mx-auto max-w-[1600px]">
        <div className="grid gap-16 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-4">
            <p className="text-xs tracking-[0.3em] text-[#8A7560]">
              OUR APPROACH
            </p>

            <h2 className="mt-6 max-w-sm text-4xl tracking-tight md:text-5xl">
              Designed with intention.
            </h2>
          </div>

          <div className="md:col-span-8">
            <div className="divide-y divide-[#D8D3C9] border-y border-[#D8D3C9]">
              {principles.map((principle) => (
                <div
                  key={principle.number}
                  className="grid gap-6 py-8 md:grid-cols-12 md:gap-8"
                >
                  <span className="text-xs text-[#8A7560] md:col-span-2">
                    {principle.number}
                  </span>

                  <h3 className="text-2xl tracking-tight md:col-span-3 md:text-3xl">
                    {principle.title}
                  </h3>

                  <p className="max-w-lg text-sm leading-7 text-[#6F6B64] md:col-span-7">
                    {principle.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}