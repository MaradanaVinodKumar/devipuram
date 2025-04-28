import React from "react";

export const Testimonials = () => {
  return (
    <section className="flex flex-wrap gap-5 justify-between items-start self-center mt-72 w-full max-w-[1557px] max-md:mt-10 max-md:max-w-full">
      <h2 className="text-5xl font-medium tracking-tighter leading-none text-black max-md:max-w-full max-md:text-4xl">
        Here's what our customers say:*
      </h2>
      <div className="flex gap-9 mt-1">
        <button aria-label="Previous testimonial">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/2b3aab135b374765b2e5b5958165ba0b/6fb741868bd078f339666cdcc913fc73e0576cb6?placeholderIfAbsent=true"
            alt="Previous"
            className="object-contain shrink-0 w-16 aspect-square"
          />
        </button>
        <button aria-label="Next testimonial">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/2b3aab135b374765b2e5b5958165ba0b/aed9326080e6cfbfea43fe3a2c23696e77046a75?placeholderIfAbsent=true"
            alt="Next"
            className="object-contain shrink-0 w-16 aspect-square"
          />
        </button>
      </div>
      <div className="self-center mt-12 ml-44 w-full max-w-[1731px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          {/* Testimonial cards */}
          <article className="w-[29%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col items-start px-8 pt-9 pb-11 mx-auto w-full rounded bg-stone-100 max-md:px-5 max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-1">{/* Star rating images */}</div>
              <h3 className="mt-6 text-2xl font-bold leading-8 text-black">
                I feel awake, healthy, and well-prepared.
              </h3>
              <blockquote className="self-stretch mt-7 text-base italic leading-7 text-justify text-black">
                "As someone in their mid-forties with a young child, my energy
                level was often a daily challenge. But AG1 has truly changed
                everything in that regard..."
              </blockquote>
              <footer className="mt-9 text-sm leading-loose uppercase text-neutral-500">
                Mike R.
              </footer>
            </div>
          </article>
          {/* Similar structure for other testimonial cards */}
        </div>
      </div>
    </section>
  );
};
