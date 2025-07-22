import Link from "next/link";

export default function About() {
  return (
    <>
      {/* About Company Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen w-full bg-white text-center px-4">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-black mb-6">About Our Company</h2>
        <p className="text-lg sm:text-2xl text-gray-800 max-w-3xl mx-auto">
          Crafting impactful brand stories across every medium from digital campaigns to cinematic experiences.
        </p>
      </section>

      {/* Vivek Parekh Bio Section */}
      <section className="w-full bg-white flex flex-col mx-auto md:flex-row items-center justify-center px-4 py-16 md:gap-16">
        {/* Left: Text Content */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-black mb-4">Vivek Parekh</h2>
          <p className="text-base sm:text-lg text-gray-800 mb-4 font-medium max-w-2xl">
            With over a decade of expertise in marketing solutions and productions, Vivek specializes in personal branding and compelling narrative creation across FMCG and entertainment industries.
          </p>
          <p className="text-sm sm:text-base text-gray-600 mb-6 max-w-2xl">
            Services include Movie Associations, strategic digital campaigns, and innovative film branding — all driven by creativity and client-centric focus.
          </p>
        </div>
        {/* Right: Image */}
        <div className="flex items-center justify-center mt-8 md:mt-0">
          <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-gray-200 bg-gray-100 max-w-xs md:max-w-sm">
            <img
              src="/about-vivek.jpg"
              alt="Vivek Parekh"
              className="object-cover w-full h-full min-h-[300px] min-w-[200px]"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="w-full bg-gray-100 flex flex-col items-center justify-center px-4 py-16">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-black mb-2 text-center">Why Choose Us</h2>
        <div className="w-24 h-1 bg-yellow-400 rounded-full mb-10"></div>
        <div className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch justify-center">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl shadow-lg flex flex-col items-start p-8 min-h-[220px] border border-gray-200">
            <span className="flex items-center justify-center w-12 h-12 rounded-full bg-yellow-100 mb-6">
              <svg width="28" height="28" fill="none" stroke="#FFC72C" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            </span>
            <h3 className="text-lg font-bold text-black mb-2">Relationship-Centric</h3>
            <p className="text-gray-700">We build strong, collaborative partnerships that last long past project delivery.</p>
          </div>
          {/* Card 2 */}
          <div className="bg-white rounded-2xl shadow-lg flex flex-col items-start p-8 min-h-[220px] border border-gray-200">
            <span className="flex items-center justify-center w-12 h-12 rounded-full bg-yellow-100 mb-6">
              <svg width="28" height="28" fill="none" stroke="#FFC72C" strokeWidth="2.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><path d="M9 9h.01"/><path d="M15 9h.01"/></svg>
            </span>
            <h3 className="text-lg font-bold text-black mb-2">Enjoyable Culture</h3>
            <p className="text-gray-700">A relaxed, fun environment that sparks creativity and supercharges productivity.</p>
          </div>
          {/* Card 3 */}
          <div className="bg-white rounded-2xl shadow-lg flex flex-col items-start p-8 min-h-[220px] border border-gray-200">
            <span className="flex items-center justify-center w-12 h-12 rounded-full bg-yellow-100 mb-6">
              <svg width="28" height="28" fill="none" stroke="#FFC72C" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M12 1v22"/><path d="M17 5H9.5a2.5 2.5 0 0 0 0 5H14.5a2.5 2.5 0 0 1 0 5H7"/><path d="M12 17v2"/></svg>
            </span>
            <h3 className="text-lg font-bold text-black mb-2">Value-Driven</h3>
            <p className="text-gray-700">Maximize ROI through strategic planning, thoughtful execution, and constant optimization.</p>
          </div>
          {/* Card 4 */}
          <div className="bg-white rounded-2xl shadow-lg flex flex-col items-start p-8 min-h-[220px] border border-gray-200">
            <span className="flex items-center justify-center w-12 h-12 rounded-full bg-yellow-100 mb-6">
              <svg width="28" height="28" fill="none" stroke="#FFC72C" strokeWidth="2.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
            </span>
            <h3 className="text-lg font-bold text-black mb-2">Time Respect</h3>
            <p className="text-gray-700">We guard your time fiercely—meeting deadlines so you can stay focused on your core goals.</p>
          </div>
        </div>
      </section>

      {/* Over 100 Films Section */}
      <section className="flex items-center justify-center min-h-screen w-full bg-[#ffffff] px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 w-full max-w-5xl mx-auto">
          {/* Left: Text Content */}
          <div className="flex-1 flex flex-col items-center justify-center text-center md:items-start md:text-left">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-black mb-4">Over 100 Films</h2>
            <p className="text-base sm:text-lg text-black mb-4 font-medium max-w-2xl">
              Partnered on 100+ in-film and out-of-film branding projects, captivating audiences on the big screen and beyond.
            </p>
            <p className="text-sm sm:text-base font-bold text-black mb-6 max-w-2xl">
              Specializing in Ad Film Making and Film Distribution for seamless production and release.
            </p>
          </div>
          {/* Right: Image */}
          <div className="flex-1 flex items-center justify-center mt-8 md:mt-0">
            <div className="rounded-3xl overflow-hidden shadow-2xl bg-[#dddde2b5] max-w-xs md:max-w-sm">
              <img
                src="/about-films.jpg"
                alt="Over 100 Films"
                className="object-cover w-full h-full min-h-[300px] min-w-[200px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="w-full bg-gray-100 flex flex-col items-center justify-center px-4 py-16">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-black mb-4 text-center">Our Mission</h2>
        <p className="text-lg sm:text-xl text-gray-100 mb-12 text-center max-w-2xl">We empower creators to reach the right audience through impactful advertising</p>
        <div className="w-full max-w-6xl flex flex-col md:flex-row gap-8 items-center justify-center">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl shadow-lg flex flex-col items-center justify-center px-8 py-8 w-full md:w-1/3 max-w-md text-center">
            <span className="text-yellow-400 text-4xl mb-4">
              <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path d="M3 8l7.89 5.26a2 2 0 0 0 2.22 0L21 8M5 19h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2z"/></svg>
            </span>
            <h3 className="text-xl font-bold mb-2 text-gray-900">Empower Creators</h3>
            <p className="text-gray-700 text-base">Providing tools and platforms for creators to showcase their work</p>
          </div>
          {/* Card 2 */}
          <div className="bg-white rounded-2xl shadow-lg flex flex-col items-center justify-center px-8 py-8 w-full md:w-1/3 max-w-md text-center">
            <span className="text-yellow-400 text-4xl mb-4">
              <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><circle cx="12" cy="12" r="5"/><path d="M21 21l-4.35-4.35"/></svg>
            </span>
            <h3 className="text-xl font-bold mb-2 text-gray-900">Targeted Reach</h3>
            <p className="text-gray-700 text-base">Connecting creative work with the most relevant audiences</p>
          </div>
          {/* Card 3 */}
          <div className="bg-white rounded-2xl shadow-lg flex flex-col items-center justify-center px-8 py-8 w-full md:w-1/3 max-w-md text-center">
            <span className="text-yellow-400 text-4xl mb-4">
              <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path d="M4 17v-2m4 2v-6m4 6v-4m4 4v-8"/></svg>
            </span>
            <h3 className="text-xl font-bold mb-2 text-gray-900">Impactful Results</h3>
            <p className="text-gray-700 text-base">Delivering advertising that makes a measurable difference</p>
          </div>
    </div>
      </section>
    </>
  );
} 