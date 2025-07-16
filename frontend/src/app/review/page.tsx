import Link from "next/link";

export default function Review() {
  return (
    <>
      {/* Star Logo and Heading */}
      <div className="flex flex-col items-center justify-center mt-10 mb-8">
        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-yellow-400/90 mb-4 shadow">
          <span className="text-2xl text-[#232b39]">★</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-yellow-400 mb-2 text-center">Client Experiences</h1>
        <p className="text-base sm:text-lg text-gray-200 text-center max-w-2xl">
          Discover how we've helped businesses grow and succeed through genuine partnerships and measurable results.
        </p>
      </div>
      {/* Testimonial Cards */}
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 px-4">
        {/* Testimonial 1 */}
        <div className="bg-[#232b39] rounded-2xl p-8 shadow-lg border border-gray-500/30 flex flex-col h-full relative">
          <div className="flex items-center gap-4 mb-4">
            <img src="/clients/gopal-logo.png" alt="Gopal Namkeen Logo" className="w-16 h-16 rounded-full border-2 border-yellow-400 bg-white object-contain" />
            <div>
              <div className="text-xl font-bold text-yellow-400">Jaydeep Mehta</div>
              <div className="text-sm text-gray-300">Marketing Head - Gopal Namkeen</div>
            </div>
            <span className="ml-auto text-4xl text-yellow-900/60 absolute top-6 right-8">&#8221;</span>
          </div>
          <div className="text-lg text-white mb-6">
            The enthusiasm and compassion you show towards your customers and colleagues are truly contagious and motivating. Vivek, your expertise and support have made working with you a fantastic experience!
          </div>
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-yellow-400 text-2xl">★</span>
            ))}
          </div>
        </div>
        {/* Testimonial 2 */}
        <div className="bg-[#232b39] rounded-2xl p-8 shadow-lg border border-gray-500/30 flex flex-col h-full relative">
          <div className="flex items-center gap-4 mb-4">
            <img src="/clients/radha-tmt-logo.png" alt="Radha TMT Logo" className="w-16 h-16 rounded-full border-2 border-yellow-400 bg-white object-contain" />
            <div>
              <div className="text-xl font-bold text-yellow-400">Neha Singh</div>
              <div className="text-sm text-gray-300">Marketing Head – Radha TMT</div>
            </div>
            <span className="ml-auto text-4xl text-yellow-900/60 absolute top-6 right-8">&#8221;</span>
          </div>
          <div className="text-lg text-white mb-6">
            Your charisma and sense of humor create a relaxed and enjoyable work environment. Loved working with you!
          </div>
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-yellow-400 text-2xl">★</span>
            ))}
          </div>
        </div>
      </div>
      {/* Empower Your Creative Vision Hero Box */}
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
    </>
  );
} 