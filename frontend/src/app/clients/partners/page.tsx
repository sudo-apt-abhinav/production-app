import Link from "next/link";

const clientList = Array.from({ length: 10 }, (_, i) => ({
  img: `/clients/client${i + 1}.jpg`,
  name: `Client ${i + 1}`,
}));

const movieList = [
  { img: "/movies/movie1.jpg", name: "Movie One" },
  { img: "/movies/movie2.jpg", name: "Movie Two" },
  { img: "/movies/movie3.jpg", name: "Movie Three" },
  { img: "/movies/movie4.jpg", name: "Movie Four" },
];

export default function Partners() {
  return (
    <div className="bg-white text-gray-900 min-h-screen flex flex-col items-center px-2 sm:px-8 py-10">
      {/* Heading */}
      <div className="w-full max-w-6xl mx-auto text-center mt-20 mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-black mb-2">Our Partners</h1>
      </div>
      {/* Partner Boxes */}
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-28">
        <div className="bg-gray-100 rounded-2xl p-8 shadow-lg flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-2">
            <img src="/logo-multimedia.png" alt="Multimedia Logo" className="w-8 h-8 object-contain" />
            <h2 className="text-2xl font-bold text-black">MULTIMEDIA COMMUNICATION</h2>
          </div>
          <p className="text-gray-800">
            Multi Media Communications is connected to various media outlets like Print, FM Radio, Television, Outdoor, Cinema. Their services include Design (Print, Digital, Electronic), Media Planning & Buying (Pan India & Worldwide), Digital Advertising, In-theatre Advertising, and Events & PR services.
          </p>
        </div>
        <div className="bg-gray-100 rounded-2xl p-8 shadow-lg flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-2">
            <img src="/logo-equinox.png" alt="Equinox Logo" className="w-8 h-8 object-contain" />
            <h2 className="text-2xl font-bold text-black">EQUINOX - FILM CITY</h2>
          </div>
          <p className="text-gray-800">
            A production and promotion distribution house in Kolkata, founded in 2010 by Ms. Jhuma Paul, aims to create engaging narratives that inspire, entertain, and stimulate thought globally. They prioritize creativity, diversity, and excellence in cinematic storytelling.
          </p>
        </div>
      </div>

      {/* Our Valued Clients Section */}
      <div className="w-full max-w-6xl mx-auto text-center mt-10 mb-20">
        <h2 className="text-3xl sm:text-4xl font-bold text-black mb-10">Our Valued Clients</h2>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-8">
          {clientList.map((client, idx) => (
            <div key={client.name} className="flex flex-col items-center">
              <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-xl overflow-hidden bg-gray-100 flex items-center justify-center mb-2 shadow-md">
                <img
                  src={client.img}
                  alt={client.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-base font-semibold text-gray-800 text-center">
                {client.name}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cinematic Collaborations Section */}
      <div className="w-full max-w-6xl mx-auto text-center mt-10 mb-24">
        <h2 className="text-3xl sm:text-4xl font-bold text-black mb-2">Cinematic Collaborations</h2>
        <p className="text-lg sm:text-xl text-gray-800 mb-8">Blockbuster films we've proudly associated with</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 justify-center">
          {movieList.map((movie, idx) => (
            <div key={movie.name} className="relative group rounded-2xl overflow-hidden shadow-lg">
              <img
                src={movie.img}
                alt={movie.name}
                className="w-full h-64 object-cover transition-all duration-300 group-hover:brightness-50 group-hover:blur-sm"
              />
              <div className="absolute left-0 bottom-0 w-full px-4 py-3 flex items-end bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                <span className="text-lg font-bold text-yellow-400 drop-shadow-lg">{movie.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <section className="w-full flex flex-col items-center justify-center px-4 py-16 bg-gray-100">
        <div className="w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-yellow-400 mx-auto flex flex-col items-center justify-center px-6 py-16">
          <h1 className="text-5xl sm:text-7xl font-extrabold text-black mb-6 text-center">
            Empower Your Creative Vision
          </h1>
          <p className="text-xl sm:text-2xl text-black mb-10 text-center max-w-3xl">
            We connect exceptional creators with the right audience through <span className="font-bold text-yellow-400">strategic and impactful advertising</span>. Amplify your message—right where it matters.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/contact-me"
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold text-lg px-12 py-5 rounded-full shadow-lg hover:from-yellow-500 hover:to-orange-600 transition-all flex items-center justify-center gap-2 mb-4 sm:mb-0"
            >
              Start Your Campaign <span className="text-2xl">→</span>
            </Link>
            <Link
              href="/clients/artists"
              className="border-2 border-yellow-400 text-black font-bold text-lg px-12 py-5 rounded-full shadow-lg hover:bg-yellow-400 hover:text-[#232b39] transition-all flex items-center justify-center gap-2"
            >
              See Success Stories
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 