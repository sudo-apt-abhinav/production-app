"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function Artists() {
  return (
    <>
      {/* Landing Section */}
      <div className="flex flex-col items-center justify-center min-h-screen text-center px-4 w-full">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-yellow-400 mb-4">Vivek Parekh Productions</h1>
        <p className="text-lg sm:text-2xl text-gray-200 mb-8 max-w-2xl">
          Creative collaborations that shaped memorable brand experiences
        </p>
        <a
          href="#work"
          className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold text-lg px-8 py-4 rounded-full shadow-lg hover:from-yellow-500 hover:to-orange-600 transition-all"
        >
          Explore Our Work
        </a>
      </div>
      {/* Meet & Greet Slider Section */}
      <section id="work" className="w-full min-h-[60vh] flex flex-col items-center justify-center bg-[#181f2e] text-center px-2 py-20">
        <h2 className="text-2xl sm:text-3xl font-bold text-yellow-300 mb-4">Meet & Greet - Clients & Artists</h2>
        <blockquote className="text-lg sm:text-xl text-gray-300 italic max-w-2xl mx-auto mb-10">
          Partnerships that transformed creative visions into memorable brand experiences
        </blockquote>
        <div className="w-full max-w-5xl mx-auto">
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 7000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            spaceBetween={32}
            slidesPerView={1}
            speed={1200}
            className="rounded-2xl"
          >
            {/* Slide 1 */}
            <SwiperSlide>
              <div className="flex flex-col md:flex-row bg-[#232b39] rounded-2xl overflow-hidden shadow-lg border border-[#232b39]">
                {/* Left: Image */}
                <div className="md:w-1/2 w-full h-72 md:h-auto flex-shrink-0 relative">
                  <img
                    src="/placeholder-image.jpg"
                    alt="Srikanth Bolla group"
                    className="object-cover w-full h-full min-h-[18rem] md:min-h-[24rem]"
                    style={{ borderTopLeftRadius: '1rem', borderBottomLeftRadius: '1rem' }}
                  />
                  <div className="absolute left-0 bottom-0 w-full bg-gradient-to-t from-black/60 to-transparent px-6 py-4">
                    <div className="text-xl font-bold text-white">Srikanth Bolla</div>
                    <div className="text-yellow-400 text-xs font-medium">Featured movie</div>
                  </div>
                </div>
                {/* Right: Details (Updated) */}
                <div className="md:w-1/2 w-full flex flex-col justify-center p-6 gap-3 text-left">
                  {/* Logo and Name */}
                  <div className="flex items-center gap-3 mb-1">
                    <img src="/placeholder-logo.png" alt="Edify School Logo" className="w-12 h-12 rounded bg-white p-1 border border-gray-200" />
                    <div>
                      <div className="text-lg font-bold text-yellow-400 leading-tight">Edify School</div>
                      <div className="text-xs text-gray-300 font-medium">Strategic Partnership</div>
                    </div>
                  </div>
                  {/* Description */}
                  <div className="text-gray-200 mb-1 text-sm">Strategic partnership for educational outreach through cinema</div>
                  {/* Highlighted Box */}
                  <div className="bg-[#232b39] border-2 border-yellow-400 rounded-xl p-3 mb-1">
                    <div className="flex items-center gap-2 mb-1 text-yellow-400 font-semibold text-sm">
                      <span className="text-base">★</span> Collaboration Highlights
                    </div>
                    <div className="text-gray-100 text-sm">Educational institution collaboration</div>
                  </div>
                  {/* Tags Row */}
                  <div className="flex flex-row gap-2 mt-2">
                    <span className="bg-[#181f2e] border border-yellow-400 text-yellow-400 px-3 py-1 rounded-full text-xs font-semibold">Brand Integration</span>
                    <span className="bg-[#181f2e] border border-yellow-400 text-yellow-400 px-3 py-1 rounded-full text-xs font-semibold">360° Campaign</span>
                    <span className="bg-[#181f2e] border border-yellow-400 text-yellow-400 px-3 py-1 rounded-full text-xs font-semibold">Strategic Partnership</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            {/* Slide 2 */}
            <SwiperSlide>
              <div className="flex flex-col md:flex-row bg-[#232b39] rounded-2xl overflow-hidden shadow-lg border border-[#232b39]">
                {/* Left: Image */}
                <div className="md:w-1/2 w-full h-72 md:h-auto flex-shrink-0 relative">
                  <img
                    src="/placeholder-image.jpg"
                    alt="Bade Bhaiya Agarwal Packers & Movers group"
                    className="object-cover w-full h-full min-h-[18rem] md:min-h-[24rem]"
                    style={{ borderTopLeftRadius: '1rem', borderBottomLeftRadius: '1rem' }}
                  />
                  <div className="absolute left-0 bottom-0 w-full bg-gradient-to-t from-black/60 to-transparent px-6 py-4">
                    <div className="text-xl font-bold text-white">Bade Bhaiya Agarwal Packers & Movers</div>
                    <div className="text-yellow-400 text-xs font-medium">Featured campaign</div>
                  </div>
                </div>
                {/* Right: Details (Updated) */}
                <div className="md:w-1/2 w-full flex flex-col justify-center p-6 gap-3 text-left">
                  {/* Logo and Name */}
                  <div className="flex items-center gap-3 mb-1">
                    <img src="/placeholder-logo.png" alt="Agarwal Packers Logo" className="w-12 h-12 rounded bg-white p-1 border border-gray-200" />
                    <div>
                      <div className="text-lg font-bold text-yellow-400 leading-tight">Bade Bhaiya Agarwal Packers & Movers – DRS GROUP</div>
                      <div className="text-xs text-gray-300 font-medium">Strategic Partnership</div>
                    </div>
                  </div>
                  {/* Description */}
                  <div className="text-gray-200 mb-1 text-sm">Brand integration in regional cinema for maximum visibility</div>
                  {/* Highlighted Box */}
                  <div className="bg-[#232b39] border-2 border-yellow-400 rounded-xl p-3 mb-1">
                    <div className="flex items-center gap-2 mb-1 text-yellow-400 font-semibold text-sm">
                      <span className="text-base">★</span> Collaboration Highlights
                    </div>
                    <div className="text-gray-100 text-sm">Logistics brand integration</div>
                  </div>
                  {/* Tags Row */}
                  <div className="flex flex-row gap-2 mt-2">
                    <span className="bg-[#181f2e] border border-yellow-400 text-yellow-400 px-3 py-1 rounded-full text-xs font-semibold">Brand Integration</span>
                    <span className="bg-[#181f2e] border border-yellow-400 text-yellow-400 px-3 py-1 rounded-full text-xs font-semibold">360° Campaign</span>
                    <span className="bg-[#181f2e] border border-yellow-400 text-yellow-400 px-3 py-1 rounded-full text-xs font-semibold">Strategic Partnership</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      {/* Advertising Solutions Section */}
      <section className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-stretch gap-8 bg-[#181f2e] rounded-2xl mt-12 mb-16 px-4 py-12 shadow-lg">
        {/* Left: Content */}
        <div className="flex-1 flex flex-col justify-center gap-4 text-left">
          {/* Pill Label */}
          <span className="inline-block bg-yellow-400/90 text-[#232b39] text-xs font-semibold px-4 py-1 rounded-full mb-2 w-fit">Advertising Solutions</span>
          {/* Heading */}
          <div className="text-3xl sm:text-4xl font-extrabold mb-2 leading-tight">
            <span className="text-yellow-400 block">Our Advertising</span>
            <span className="text-white block">Excellence</span>
          </div>
          {/* Quote Box */}
          <div className="bg-[#232b39] border border-blue-900 rounded-xl p-5 mb-2 flex items-start gap-3 text-base sm:text-lg text-gray-100 shadow-sm">
            <span className="text-yellow-400 text-2xl font-bold mt-1">"</span>
            <span>Our most successful Movie association campaign has been with <span className="font-bold text-yellow-300">Radha TMT</span> which was run along on various media platforms – Airport, OOH (Hoardings), and electronics in Andhra Pradesh.</span>
          </div>
          {/* Description and List */}
          <div className="text-gray-200 text-sm sm:text-base mb-2">
            Today's brands must embody values that resonate with their core audiences. We develop innovative ideas that:
          </div>
          <ul className="space-y-2 mt-2">
            <li className="flex items-start gap-2">
              <span className="text-yellow-400 text-lg mt-1">&#8226;</span>
              <span className="font-semibold text-white">Capture attention</span><span className="text-gray-200"> through creative storytelling</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-yellow-400 text-lg mt-1">&#8226;</span>
              <span className="font-semibold text-white">Foster widespread connection</span><span className="text-gray-200"> with target demographics</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-yellow-400 text-lg mt-1">&#8226;</span>
              <span className="font-semibold text-white">Inspire action</span><span className="text-gray-200"> at critical decision moments</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-yellow-400 text-lg mt-1">&#8226;</span>
              <span className="font-semibold text-white">Drive measurable business and societal impact</span>
            </li>
          </ul>
        </div>
        {/* Right: Photo */}
        <div className="flex-1 flex flex-col items-center justify-center">
          <div className="w-full h-80 md:h-full rounded-2xl overflow-hidden shadow-md flex items-center justify-center bg-[#232b39]">
            {/* Replace with actual image */}
            <img src="/placeholder-image.jpg" alt="Advertising Solutions" className="object-cover w-full h-full" />
          </div>
        </div>
      </section>
      {/* Feature Boxes Below */}
      <section className="w-full max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-16 px-4">
        {/* Box 1 */}
        <div className="bg-[#232b39] rounded-2xl p-6 flex flex-col items-center text-center shadow-md h-full">
          <div className="text-3xl mb-2">✈️</div>
          <div className="font-bold text-yellow-400 mb-1">Airport Advertising</div>
          <div className="text-gray-300 text-sm">High visibility placements</div>
        </div>
        {/* Box 2 */}
        <div className="bg-[#232b39] rounded-2xl p-6 flex flex-col items-center text-center shadow-md h-full">
          <div className="text-3xl mb-2">🏙️</div>
          <div className="font-bold text-yellow-400 mb-1">OOH Hoardings</div>
          <div className="text-gray-300 text-sm">Strategic locations</div>
        </div>
        {/* Box 3 */}
        <div className="bg-[#232b39] rounded-2xl p-6 flex flex-col items-center text-center shadow-md h-full">
          <div className="text-3xl mb-2">📱</div>
          <div className="font-bold text-yellow-400 mb-1">Digital Campaigns</div>
          <div className="text-gray-300 text-sm">Targeted reach</div>
        </div>
        {/* Box 4 */}
        <div className="bg-[#232b39] rounded-2xl p-6 flex flex-col items-center text-center shadow-md h-full">
          <div className="text-3xl mb-2">🛍️</div>
          <div className="font-bold text-yellow-400 mb-1">Retail Activations</div>
          <div className="text-gray-300 text-sm">Consumer engagement</div>
        </div>
      </section>
      {/* Cinematic Achievements Section */}
      <section className="w-full min-h-screen flex flex-col items-center justify-center bg-[#101726] py-20 px-4">
        <div className="w-full max-w-4xl mx-auto text-center mb-10">
          <span className="inline-block bg-yellow-400/90 text-[#232b39] text-xs font-semibold px-4 py-1 rounded-full mb-4">CINEMATIC ACHIEVEMENTS</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-yellow-400 mb-2">Cinematic Achievements</h2>
          <p className="text-lg sm:text-xl text-gray-200">Celebrating our successful collaborations in film</p>
        </div>
        <div className="w-full max-w-4xl mx-auto flex items-center justify-center rounded-2xl overflow-hidden shadow-2xl min-h-[60vh] bg-[#232b39]">
          {/* Replace with actual poster image */}
          <img src="/placeholder-image.jpg" alt="Cinematic Achievements Poster" className="object-cover w-full h-full min-h-[60vh]" />
        </div>
      </section>

      {/* Media Planning & Buying Section */}
      <section className="w-full max-w-6xl mx-auto flex flex-col items-center justify-center bg-[#181f2e] rounded-2xl py-16 px-4 mb-16 shadow-lg">
        {/* Pill Label */}
        <span className="inline-block bg-yellow-400/90 text-[#232b39] text-xs font-semibold px-4 py-1 rounded-full mb-2 w-fit">Strategic Media Solutions</span>
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-yellow-400 mb-2">Media Planning & Buying</h2>
        <p className="text-base sm:text-lg text-gray-200 mb-8">Comprehensive 360° media solutions with measurable impact across all channels</p>
        <div className="w-16 h-1 bg-yellow-400 rounded-full mb-10"></div>
        {/* Feature Cards Row 1 */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* FM Radio Channels */}
          <div className="bg-[#232b39] rounded-xl p-6 flex flex-col gap-2 shadow border border-[#232b39]">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-yellow-400 text-xl">📻</span>
              <span className="font-bold text-white">FM Radio Channels</span>
            </div>
            <div className="text-gray-300 text-sm">Strategic radio advertising across popular stations</div>
            <div className="text-yellow-400 text-xs font-semibold mt-2">50+ stations nationwide</div>
          </div>
          {/* Outdoor Advertising */}
          <div className="bg-[#232b39] rounded-xl p-6 flex flex-col gap-2 shadow border border-[#232b39]">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-yellow-400 text-xl">🪧</span>
              <span className="font-bold text-white">Outdoor Advertising</span>
            </div>
            <div className="text-gray-300 text-sm">Hoardings, bus branding, pole kiosks, wall painting</div>
            <div className="text-yellow-400 text-xs font-semibold mt-2">1000+ locations covered</div>
          </div>
        </div>
        {/* Feature Cards Row 2 */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {/* Customized Events */}
          <div className="bg-[#232b39] rounded-xl p-6 flex flex-col gap-2 shadow border border-[#232b39]">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-yellow-400 text-xl">🎉</span>
              <span className="font-bold text-white">Customized Events</span>
            </div>
            <div className="text-gray-300 text-sm">Brand activations and promotional events</div>
            <div className="text-yellow-400 text-xs font-semibold mt-2">200+ successful events</div>
          </div>
          {/* TV Advertisements */}
          <div className="bg-[#232b39] rounded-xl p-6 flex flex-col gap-2 shadow border border-[#232b39]">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-yellow-400 text-xl">📺</span>
              <span className="font-bold text-white">TV Advertisements</span>
            </div>
            <div className="text-gray-300 text-sm">Prime time spots across national and regional channels</div>
            <div className="text-yellow-400 text-xs font-semibold mt-2">30+ channels partnered</div>
          </div>
        </div>
        {/* Our Media Network Grid */}
        <div className="w-full bg-[#232b39] rounded-2xl p-8 mt-4 shadow border border-[#232b39]">
          <h3 className="text-2xl font-bold text-yellow-400 mb-2 text-center">Our Media Network</h3>
          <p className="text-gray-300 text-center mb-6 text-sm sm:text-base">Comprehensive coverage across all major media channels and platforms</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-[#181f2e] rounded-lg p-6 flex flex-col items-center text-center h-36 min-h-[9rem]">
              <span className="text-white text-lg font-semibold mb-1">Newspaper Advertisements</span>
              <span className="text-gray-400 text-xs">National & Regional</span>
            </div>
            <div className="bg-[#181f2e] rounded-lg p-6 flex flex-col items-center text-center h-36 min-h-[9rem]">
              <span className="text-white text-lg font-semibold mb-1">Cinema Advertising</span>
              <span className="text-gray-400 text-xs">Multiplex & Single Screen</span>
            </div>
            <div className="bg-[#181f2e] rounded-lg p-6 flex flex-col items-center text-center h-36 min-h-[9rem]">
              <span className="text-white text-lg font-semibold mb-1">Digital Media</span>
              <span className="text-gray-400 text-xs">Programmatic Buying</span>
            </div>
            <div className="bg-[#181f2e] rounded-lg p-6 flex flex-col items-center text-center h-36 min-h-[9rem]">
              <span className="text-white text-lg font-semibold mb-1">In-theatre Ads</span>
              <span className="text-gray-400 text-xs">Pre-show & Interval</span>
            </div>
            <div className="bg-[#181f2e] rounded-lg p-6 flex flex-col items-center text-center h-36 min-h-[9rem]">
              <span className="text-white text-lg font-semibold mb-1">Transit Media</span>
              <span className="text-gray-400 text-xs">Buses, Autos, Taxis</span>
            </div>
            <div className="bg-[#181f2e] rounded-lg p-6 flex flex-col items-center text-center h-36 min-h-[9rem]">
              <span className="text-white text-lg font-semibold mb-1">Mall Activations</span>
              <span className="text-gray-400 text-xs">High Footfall Locations</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 