import React, { useState } from "react";

export const Courses = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked((prev) => !prev);
  };

  return (
    <section className="flex flex-col justify-center items-start py-48 pr-[10%] pl-[10%] mt-9 w-full bg-neutral-100 max-md:px-5 max-md:py-24 max-md:mt-10">
      <div className="flex flex-col -mb-10 w-full max-w-[1540px] max-md:mb-2.5 max-md:max-w-full">
        <div className="tablet-stack flex gap-5 max-md:flex-col max-md:max-w-full">
          <div className="w-[42%] md:w-full max-md:ml-0 max-md:w-full">
            <article className="flex flex-col text-2xl tracking-wide leading-10 text-black max-md:mt-10 max-md:max-w-full">
              <h2 className="self-start text-5xl font-medium tracking-tighter leading-none max-md:text-4xl">
                Sri Vidya Courses
              </h2>
              <p className="mt-12 text-justify max-md:mt-10 max-md:max-w-full">
                Devipuram conducts regular Sri Vidya Courses - both online &
                residential. Stay connected with our social media to receive
                news about course announcements!
              </p>
              <p className="mt-12 text-justify max-md:mt-10 max-md:max-w-full">
                Devipuram conducts regular Sri Vidya Courses - both online &
                residential. Stay connected with our social media to receive
                news about course announcements!
              </p>
            </article>
          </div>
          <div className="ml-5 w-[58%] md:w-full max-md:ml-0 max-md:w-full">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/2b3aab135b374765b2e5b5958165ba0b/f28a9ec1150c680ba8ab97164a26e844c4ee295e?placeholderIfAbsent=true"
              alt="Course Image"
              className="object-contain grow mt-5 w-full rounded-none aspect-[1.58] max-md:mt-10 max-md:max-w-full"
            />
          </div>
        </div>

        <button
          onClick={handleClick}
          className={`self-start w-[263px] h-[66px] max-md:w-full mt-20 px-16 pt-4 pb-5 text-2xl font-semibold rounded-[52px] max-md:px-8 max-md:py-3 max-md:text-lg border transition-colors duration-300 ${
            isClicked
              ? "bg-[#46DE46] text-[#0C3D3D] border-[#46DE46]"
              : "bg-transparent text-black border-black hover:bg-[#46DE46] hover:text-[#0C3D3D] hover:border-[#46DE46]"
          }`}
        >
          Know More
        </button>
      </div>

      <style jsx>{`
        @media (min-width: 768px) and (max-width: 768px) {
          .tablet-stack {
            flex-direction: column;
          }
        }
      `}</style>
    </section>
  );
};
