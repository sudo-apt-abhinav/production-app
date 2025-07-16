"use client";
import Link from "next/link";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const videoList = [
  "/videos/testimonial1.mp4",
  "/videos/testimonial2.mp4",
  "/videos/testimonial3.mp4",
  "/videos/testimonial4.mp4",
  "/videos/testimonial5.mp4",
  "/videos/testimonial6.mp4",
  "/videos/testimonial7.mp4",
  "/videos/testimonial8.mp4",
  "/videos/testimonial9.mp4",
  "/videos/testimonial10.mp4",
];

const photoList = Array.from({ length: 15 }, (_, i) => `/portfolio/photo${i + 1}.jpg`);
const galleryList = Array.from({ length: 20 }, (_, i) => `/gallery/gallery${i + 1}.jpg`);

export default function Promotion() {
  const [mainVideo, setMainVideo] = useState(videoList[0]);

  return (
    <div className="bg-[#101726] text-gray-100 min-h-screen flex flex-col items-center px-2 sm:px-8 py-10">
      {/* Heading */}
      <div className="w-full max-w-4xl mx-auto text-center mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-yellow-400 mb-2">Watch Our Client's Testimonials</h1>
        <p className="text-lg sm:text-xl text-gray-200">Experience the impact of our collaborations through these videos. Real stories, real results.</p>
      </div>
      {/* Main Video */}
      <div className="w-full flex justify-center items-center mb-8" style={{ minHeight: '60vh' }}>
        <video
          key={mainVideo}
          src={mainVideo}
          controls
          className="rounded-lg shadow-lg w-full max-w-5xl h-[60vh] object-cover bg-black"
        />
      </div>
      {/* Swiper Video Carousel with Arrows on Sides */}
      <div className="w-full max-w-5xl flex items-center justify-center relative mb-16">
        {/* Left Arrow */}
        <button
          className="swiper-button-prev-custom-video flex items-center justify-center w-10 h-10 rounded-full bg-[#222] text-yellow-400 shadow-lg mr-2 focus:outline-none"
          aria-label="Previous"
        >
          <span className="text-2xl">&#60;</span>
        </button>
        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: '.swiper-button-prev-custom-video',
            nextEl: '.swiper-button-next-custom-video',
          }}
          spaceBetween={16}
          slidesPerView={4}
          speed={500}
          breakpoints={{
            320: { slidesPerView: 2 },
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          className="h-[18vh] min-h-[120px] flex-1"
        >
          {videoList.map((video, idx) => (
            <SwiperSlide key={video}>
              <button
                onClick={() => setMainVideo(video)}
                className={`focus:outline-none border-2 rounded-lg transition-all duration-200 w-full h-full ${mainVideo === video ? 'border-yellow-400' : 'border-transparent'}`}
                style={{ height: '16vh', maxHeight: '180px', background: '#222', minWidth: '120px' }}
              >
                <video
                  src={video}
                  className="w-full h-full object-cover rounded"
                  muted
                  playsInline
                  preload="metadata"
                />
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Right Arrow */}
        <button
          className="swiper-button-next-custom-video flex items-center justify-center w-10 h-10 rounded-full bg-[#222] text-yellow-400 shadow-lg ml-2 focus:outline-none"
          aria-label="Next"
        >
          <span className="text-2xl">&#62;</span>
        </button>
      </div>

      {/* Portfolio Section */}
      <div className="w-full max-w-6xl mx-auto text-center mt-16 mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-yellow-400 mb-2">Our Creative Portfolio</h2>
        <p className="text-lg sm:text-xl text-gray-200">Explore our collection of stunning projects</p>
      </div>
      <div className="w-full max-w-6xl flex items-center justify-center relative mb-16">
        {/* Left Arrow for photo slider */}
        <button
          className="swiper-button-prev-photo flex items-center justify-center w-10 h-10 rounded-full bg-[#222] text-yellow-400 shadow-lg mr-2 focus:outline-none"
          aria-label="Previous"
        >
          <span className="text-2xl">&#60;</span>
        </button>
        <Swiper
          modules={[Navigation, Autoplay, Pagination]}
          navigation={{
            prevEl: '.swiper-button-prev-photo',
            nextEl: '.swiper-button-next-photo',
          }}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          spaceBetween={16}
          slidesPerView={3}
          speed={700}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="h-[32vh] min-h-[180px] flex-1"
        >
          {photoList.map((photo, idx) => (
            <SwiperSlide key={photo}>
              <div className="rounded-lg overflow-hidden w-full h-full bg-gray-700 flex items-center justify-center">
                {/* Replace with actual images */}
                <img
                  src={photo}
                  alt={`Portfolio ${idx + 1}`}
                  className="w-full h-full object-cover"
                  style={{ height: '30vh', maxHeight: '300px', minWidth: '120px' }}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Right Arrow for photo slider */}
        <button
          className="swiper-button-next-photo flex items-center justify-center w-10 h-10 rounded-full bg-[#222] text-yellow-400 shadow-lg ml-2 focus:outline-none"
          aria-label="Next"
        >
          <span className="text-2xl">&#62;</span>
        </button>
      </div>

      {/* Gallery Collage Section */}
      <div className="w-full flex justify-center mt-16">
        <div className="w-full max-w-6xl">
          <div className="grid grid-cols-4 sm:grid-cols-6 gap-2" style={{ gridAutoRows: '110px' }}>
            {galleryList.map((img, idx) => {
              // Use a more balanced pattern for collage
              let colSpan = '';
              let rowSpan = '';
              if (idx % 11 === 0) { colSpan = 'col-span-2'; rowSpan = 'row-span-2'; }
              else if (idx % 7 === 0) { colSpan = 'col-span-2'; }
              else if (idx % 5 === 0) { rowSpan = 'row-span-2'; }
              else if (idx % 3 === 0) { colSpan = 'col-span-2'; }
              return (
                <div
                  key={img}
                  className={`bg-[#232b39] border border-[#232b39] rounded-lg overflow-hidden flex items-center justify-center ${colSpan} ${rowSpan}`}
                >
                  <img
                    src={img}
                    alt={`Gallery ${idx + 1}`}
                    className="w-full h-full object-cover"
                    style={{ minHeight: 80, objectFit: 'cover' }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Hero Section Below Gallery */}
      <div className="w-full flex justify-center mt-16 mb-8">
        <div
          className="relative w-full max-w-6xl rounded-3xl overflow-hidden shadow-2xl border border-yellow-900"
          style={{ background: "#232b39" }}
        >
          {/* Background image with overlay */}
          <div className="absolute inset-0 z-0">
            <img
              src="/hero-bg.jpg"
              alt="Creative Office Background"
              className="w-full h-full object-cover opacity-30"
              style={{ filter: "brightness(0.5)" }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#232b39]/80 to-[#232b39]/90" />
          </div>
          {/* Content */}
          <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-16 sm:py-24">
            <h1 className="text-4xl sm:text-6xl font-extrabold text-yellow-400 mb-6 leading-tight">
              Empower Your Creative Vision
            </h1>
            <p className="text-xl sm:text-2xl text-gray-100 mb-8 max-w-3xl">
              We connect exceptional creators with the right audience through
              <span className="font-bold text-yellow-400"> strategic and impactful advertising</span>. Amplify your message—right where it matters.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact-me"
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold text-lg px-8 py-4 rounded-full shadow-lg hover:from-yellow-500 hover:to-orange-600 transition-all flex items-center justify-center gap-2"
              >
                Start Your Campaign <span className="text-2xl">→</span>
              </Link>
              <Link
                href="/clients/artists"
                className="border-2 border-yellow-400 text-white font-bold text-lg px-8 py-4 rounded-full shadow-lg hover:bg-yellow-400 hover:text-[#232b39] transition-all flex items-center justify-center gap-2"
              >
                See Success Stories
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 