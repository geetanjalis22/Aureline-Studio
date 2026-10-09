const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We begin by understanding your space, needs, lifestyle, aspirations and the opportunities within the project.",
  },
  {
    number: "02",
    title: "Define",
    description:
      "Ideas become a clear design direction through spatial planning, references, materials and visual language.",
  },
  {
    number: "03",
    title: "Develop",
    description:
      "The design is refined through detailed drawings, materials, furniture, lighting and architectural elements.",
  },
  {
    number: "04",
    title: "Deliver",
    description:
      "We coordinate the final stages with care, bringing the design together into a cohesive finished environment.",
  },
];

export default function Process() {
  return (
    <section className="bg-[#F4F1EB] px-6 py-24 md:px-12 md:py-32 lg:px-20">
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-16">
          <p className="text-xs tracking-[0.3em] text-[#8A7560]">
            HOW WE WORK
          </p>

          <h2 className="mt-5 max-w-2xl text-4xl tracking-tight md:text-6xl">
            From first idea
            <br />
            to final detail.
          </h2>
        </div>

        <div className="grid border-t border-[#D8D3C9] md:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className="border-b border-[#D8D3C9] py-8 md:border-b-0 md:border-r md:px-8 md:py-10 md:first:pl-0 md:last:border-r-0"
            >
              <span className="text-xs text-[#8A7560]">
                {step.number}
              </span>

              <h3 className="mt-12 text-2xl tracking-tight">
                {step.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-[#6F6B64]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}