import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div>
      <div className="relative bg-cover bg-center h-72 bg-[url('/image/bg.jpg')]">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto text-center text-white relative z-10  px-4 py-24">
          <h1 className="text-xl sm:text-3xl md:text-4xl lg:5xl font-bold mb-4">
            Welcome to CodeEase Blog
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8">
            Explore the world of programming, web development, and more!
          </p>
          <Link
            href="#latest-posts"
            className="bg-emerald-500 hover:bg-emerald-600 text-white py-2 px-6 rounded-full text-lg"
          >
            Read Latest Posts
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
