import React from 'react';

export const Biography = () => {
  return (
    <section className="w-full bg-white py-16 px-[10%] max-2xl:px-[8%] max-xl:px-[5%] max-lg:px-6 max-md:py-10 max-md:px-4">
      <div className="mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16 max-w-[1440px]">
        {/* Text Content - Left Side */}
        <div className="w-full lg:w-1/2 flex-shrink-0">
          <article className="flex flex-col text-black">
            <h2 className="text-4xl md:text-5xl font-medium leading-snug md:leading-[64px]">
              A Captivating<br />Biography
            </h2>

            <p className="mt-6 md:mt-8 text-lg md:text-2xl leading-relaxed md:leading-10 text-gray-800">
              Devipuram, envisioned as a learning temple, was established by Goddess Bala's Sankalpam through Sri Amritananda Natha Saraswathi and built from 1983 to 1994. Guru Amma and Guruji, an ex-nuclear scientist.
            </p>

            <p className="mt-8 md:mt-12 text-lg md:text-2xl font-semibold leading-relaxed md:leading-8 text-gray-900">
              Tracing the footsteps of our illustrious gurus to Sri Adi Sankaracharya — a 1200 years old parampara.
            </p>
          </article>
        </div>

        {/* Image - Right Side */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="w-full aspect-[1023/908] max-w-[800px] bg-white rounded-lg overflow-hidden"> {/* Set bg-white here */}
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F2b3aab135b374765b2e5b5958165ba0b%2F0096461262b447dfa23fee919bc04fe8"
              alt="Devipuram Temple"
              className="w-full h-full object-contain"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
