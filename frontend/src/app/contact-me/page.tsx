import Link from "next/link";

export default function ContactMe() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen w-full bg-white px-4">
      <div className="w-full max-w-lg bg-gray-100 rounded-2xl shadow-xl p-8 flex flex-col items-center">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-black mb-6 text-center">Contact Me</h1>
        <form className="w-full flex flex-col gap-5">
          <div>
            <label htmlFor="name" className="block text-gray-900 font-semibold mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-3 rounded-lg bg-white text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-800/80"
              placeholder="Your Name"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-900 font-semibold mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-3 rounded-lg bg-white text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-800/80"
              placeholder="you@email.com"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-900 font-semibold mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              className="w-full px-4 py-3 rounded-lg bg-white text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-800/80"
              placeholder="Type your message here..."
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gray-800/90 hover:bg-gray-800 text-white font-bold py-3 rounded-lg shadow-lg transition-all text-lg mt-2"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
} 