import Link from "next/link";

export default function ContactMe() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <h1 className="text-3xl font-bold mb-4">Contact Me</h1>
        <p className="text-gray-600 dark:text-gray-300">This is the Contact Me page.</p>
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