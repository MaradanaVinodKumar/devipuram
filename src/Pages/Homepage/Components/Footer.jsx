import React from "react";

export const Footer = () => {
  return (
    <footer className="relative w-full pt-16 pb-10 mt-48 max-md:mt-10">
      {/* Background Layer */}
      <div className="absolute inset-0 w-full bg-teal-950 -z-10" />

      <div className="mx-auto w-full max-w-[1920px] px-[10%] max-md:px-5 text-white">
        <div className="flex flex-wrap justify-between items-start gap-y-12 gap-x-10">

          {/* Helpful Links */}
          <nav className="flex flex-col min-w-[200px] text-lg">
            <h3 className="text-xl font-semibold uppercase mb-6">Helpful Links</h3>
            <a href="#" className="mb-4 hover:underline">Contact Us</a>
            <a href="#" className="hover:underline">Visitor Information</a>
          </nav>

          {/* About */}
          <nav className="flex flex-col min-w-[200px] text-lg">
            <h3 className="text-xl font-semibold uppercase mb-6">About</h3>
            <a href="#" className="mb-4 hover:underline">About Us</a>
            <a href="#" className="mb-4 hover:underline">Sri Vidya</a>
            <a href="#" className="mb-4 hover:underline">Daily Puja</a>
            <a href="#" className="hover:underline">Sponsor</a>
          </nav>

          {/* Contact */}
          <div className="flex flex-col min-w-[200px] text-lg">
            <h3 className="text-xl font-semibold uppercase mb-6">Contact</h3>
            <address className="not-italic leading-8">
              +91 9440845333<br />
              +91 9010445333<br />
              info@devipuram.org
            </address>
          </div>

          {/* Connect */}
          <div className="flex flex-col min-w-[260px]">
            <h3 className="text-xl font-bold uppercase mb-6">Connect</h3>
            <p className="text-lg mb-4">Join Our Newsletter</p>
            <form className="flex items-center gap-2 px-4 py-3 bg-white rounded-full w-full text-base text-gray-700">
              <input
                type="email"
                placeholder="Your Email"
                className="flex-1 py-2 px-1 outline-none bg-transparent"
              />
              <button type="submit">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/2b3aab135b374765b2e5b5958165ba0b/7711db7f87467942d00b79bd1b6ac6fcf3494fec?placeholderIfAbsent=true"
                  alt="Submit"
                  className="w-6 h-6"
                />
              </button>
            </form>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/2b3aab135b374765b2e5b5958165ba0b/b49380ded1fc2f2747b76fc8b905d9c9b308154c?placeholderIfAbsent=true"
              alt="Social Media"
              className="mt-6 w-[269px] max-w-full"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};
