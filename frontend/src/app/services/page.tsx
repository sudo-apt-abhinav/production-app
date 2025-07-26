"use client";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";

export default function Services() {
  const navbarRef = useRef<HTMLDivElement>(null);
  const landingRef = useRef<HTMLDivElement>(null);
  const [landingHeight, setLandingHeight] = useState("100vh");

  useEffect(() => {
    function updateHeight() {
      const navbar = document.getElementById("main-navbar");
      const navbarHeight = navbar ? navbar.offsetHeight : 0;
      setLandingHeight(`calc(100vh - ${navbarHeight}px)`);
    }
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  const scrollToNext = () => {
    const nextSection = document.getElementById("movie-association");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-white text-gray-900 min-h-screen px-0 sm:px-0">
      {/* Landing Section */}
      <section
        ref={landingRef}
        style={{ height: landingHeight, minHeight: landingHeight }}
        className="w-full flex flex-col justify-center items-center text-center relative overflow-hidden m-0 p-0 bg-white"
      >
        <div className="absolute inset-0 flex flex-col justify-center items-center">
          <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-black">Our Services</h1>
          <p className="text-lg sm:text-xl text-gray-700">Comprehensive marketing solutions tailored to elevate your brand's presence</p>
        </div>
        {/* Scroll Down Indicator */}
        <button
          type="button"
          onClick={scrollToNext}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-10 focus:outline-none"
          aria-label="Scroll to next section"
        >
          <span className="text-black font-bold text-3xl">↓</span>
        </button>
      </section>

      {/* Movie Association Section */}
      <section className="max-w-5xl mx-auto mb-16 mt-8" id="movie-association">
        <h2 className="text-2xl font-semibold text-black mb-4">Movie Association</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-4">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center aspect-[2/3] border border-gray-200">
              {/* Replace with actual poster images */}
              <span className="text-gray-400 text-sm">Poster {i + 1}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Co-Branding and Advertising Section (new layout) */}
      <section className="max-w-6xl mx-auto mb-16 mt-8">
        {/* Top: Co-Branding and Success Story Side by Side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mb-8">
          {/* Left: Co-Branding Info */}
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-yellow-400 rounded-md p-2 text-white text-2xl">🎬</span>
              <h2 className="text-2xl font-bold text-black">Co-Branding</h2>
            </div>
            <p className="mb-2 text-gray-700">Secure advertising slots at entertainment rates and leverage the promotional surge surrounding films.</p>
            <p className="mb-2 text-blue-700">In-film & out-film placements integrate branded products directly into the storyline or setting.</p>
          </div>
          {/* Right: Success Story */}
          <div className="flex items-center h-full">
            <div className="bg-gray-100 border border-gray-200 rounded-lg p-4 w-full max-w-md">
              <span className="font-semibold text-yellow-500">Success Story</span>
              <p className="mt-1 text-gray-900">Our most successful campaign was with <span className="font-bold text-yellow-500">Radha TMT</span> across multiple media platforms.</p>
            </div>
          </div>
        </div>
        {/* Below: Photo and Advertising Content Side by Side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left: Photo */}
          <div className="rounded-lg overflow-hidden aspect-video bg-gray-200 flex items-center justify-center">
            {/* Replace with actual image */}
            <Image src="/promotion-advertising.jpg" alt="Advertising" width={400} height={250} className="object-cover w-full h-full" />
          </div>
          {/* Right: Advertising Content */}
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-yellow-400 rounded-md p-2 text-white text-2xl">🔑</span>
              <h2 className="text-2xl font-bold text-black">Advertising</h2>
            </div>
            <div className="font-semibold text-gray-900 mb-2">Brands must embody values that resonate with core audiences.</div>
            <p className="text-gray-700">
              We craft creative ideas that capture attention, foster connection, and inspire action. Today’s brands are expected to do more than just represent a business; they must embody values that resonate with their core audiences. A successful brand actively engages with these values. We develop innovative ideas for our clients' brands and businesses that capture attention, foster widespread connection, and inspire action at the critical moment, ultimately driving both business and societal progress.
            </p>
          </div>
        </div>
      </section>

      {/* Media Planning & Buying Section */}
      <section className="max-w-6xl mx-auto mb-16 mt-8">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="bg-yellow-400 rounded-md p-2 text-white text-2xl">📺</span>
            <h2 className="text-2xl font-bold text-black">Media Planning & Buying</h2>
          </div>
          <p className="text-gray-700 mb-2">Offering comprehensive 360° ATL & BTL media solutions with expert insight into today's media landscape.</p>
          <ul className="list-disc list-inside text-gray-700 space-y-1 pl-2">
            <li>FM Radio Channels</li>
            <li>Outdoor Advertising</li>
            <li>Customized Events</li>
            <li>TV Advertisements</li>
            <li>Newspaper Ads</li>
            <li>Cinema Multiplex Ads</li>
          </ul>
        </div>
      </section>

      {/* Film Distribution Section */}
      <section className="max-w-6xl mx-auto mb-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="bg-yellow-400 rounded-md p-2 text-white text-2xl">🎞️</span>
            <h2 className="text-2xl font-bold text-black">Film Distribution</h2>
          </div>
          <p className="text-gray-700">Led by Mrs. Jhuma Paul, distributing and promoting over 23 regional films since 2010 across West Bengal.</p>
        </div>
        <div className="rounded-lg overflow-hidden aspect-video bg-gray-200 flex items-center justify-center">
          {/* Replace with actual image */}
          <span className="text-gray-400">Photo</span>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-2xl font-bold text-black mb-2 text-center">Our Mission</h2>
        <p className="text-lg text-center text-gray-800 mb-8">We empower creators to reach the right audience through impactful advertising</p>
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <div className="flex-1 flex flex-col items-center bg-gray-100 rounded-lg p-6 border border-gray-200">
            <span className="bg-yellow-400 rounded-full p-3 mb-2 text-white text-2xl">💡</span>
            <h3 className="text-lg font-bold text-black mb-2">Empower Creators</h3>
            <p className="text-gray-700 text-sm">Providing tools and platforms for creators to showcase their work</p>
          </div>
          <div className="flex-1 flex flex-col items-center bg-gray-100 rounded-lg p-6 border border-gray-200">
            <span className="bg-yellow-400 rounded-full p-3 mb-2 text-white text-2xl">🎯</span>
            <h3 className="text-lg font-bold text-black mb-2">Targeted Reach</h3>
            <p className="text-gray-700 text-sm">Connecting creative work with the most relevant audiences</p>
          </div>
          <div className="flex-1 flex flex-col items-center bg-gray-100 rounded-lg p-6 border border-gray-200">
            <span className="bg-yellow-400 rounded-full p-3 mb-2 text-white text-2xl">📈</span>
            <h3 className="text-lg font-bold text-black mb-2">Impactful Results</h3>
            <p className="text-gray-700 text-sm">Delivering advertising that makes a measurable difference</p>
          </div>
        </div>
      </section>
    </div>
  );
} 