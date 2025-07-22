import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#000000] shadow-[0_-8px_32px_0_rgba(0,0,0,0.45)] text-gray-100 pt-10 pb-4 px-4 sm:px-6 md:px-0">
      <div className="max-w-7xl mx-auto flex flex-col gap-8">
        {/* Top Row: Logo and Tagline */}
        <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-evenly gap-4 sm:gap-8 mb-4 w-full">
          {/* Placeholder for logo */}
          <div className="flex-shrink-0 mb-2 sm:mb-0">
            <div className="w-28 h-12 sm:w-32 sm:h-16 bg-[#b5acacbe] flex items-center justify-center rounded-md font-bold text-lg sm:text-xl text-[#101726]">Logo</div>
          </div>
          <p className="text-center sm:text-left text-base sm:text-lg text-gray-200 max-w-xs sm:max-w-2xl px-2 sm:px-0">
            Empowering brands with strategic marketing & cinematic storytelling that inspires and drives engagement.
          </p>
        </div>
        {/* Footer Columns */}
        <div className="flex flex-col sm:flex-row justify-evenly w-full gap-8 sm:gap-4 md:gap-8">
          {/* Quick Links */}
          <div className="w-full sm:w-1/2 md:w-1/4 mb-4 sm:mb-0">
            <h3 className="text-base sm:text-lg font-bold text-yellow-400 mb-2">Quick Links</h3>
            <ul className="space-y-1">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/clients">Clients</Link></li>
              <li><Link href="/contact-me">Contact</Link></li>
            </ul>
          </div>
          {/* Services */}
          <div className="w-full sm:w-1/2 md:w-1/4 mb-4 sm:mb-0">
            <h3 className="text-base sm:text-lg font-bold text-yellow-400 mb-2">Services</h3>
            <ul className="space-y-1">
              <li>Co-Branding</li>
              <li>Advertising</li>
              <li>Social Media Planning & Buying</li>
              <li>Film Distribution</li>
            </ul>
          </div>
          {/* Contact Us */}
          <div className="w-full sm:w-1/2 md:w-1/4 mb-4 sm:mb-0">
            <h3 className="text-base sm:text-lg font-bold text-yellow-400 mb-2">Contact Us</h3>
            <ul className="space-y-1 text-gray-300 text-sm sm:text-base">
              <li className="flex items-start gap-2"><span>📍</span>123 Creative Street, Mumbai, India 400001</li>
              <li className="flex items-center gap-2"><span>✉️</span>info@vpproduction.com</li>
              <li className="flex items-center gap-2"><span>📞</span>+91 98765 43210</li>
            </ul>
          </div>
          {/* Connect With Us */}
          <div className="w-full sm:w-1/2 md:w-1/4 flex flex-col items-center sm:items-start">
            <h3 className="text-base sm:text-lg font-bold text-yellow-400 mb-2">Connect With Us</h3>
            <div className="flex flex-row gap-4 mt-2">
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-[#192132] hover:bg-yellow-400 hover:text-[#101726] transition-colors">
                <span className="text-xl">f</span>
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-[#192132] hover:bg-yellow-400 hover:text-[#101726] transition-colors">
                <span className="text-xl">&#x1F30D;</span>
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-[#192132] hover:bg-yellow-400 hover:text-[#101726] transition-colors">
                <span className="text-xl">in</span>
              </a>
            </div>
          </div>
        </div>
        <hr className="my-8 border-gray-700" />
        <div className="text-center text-gray-400 text-xs sm:text-sm">
          © 2025 VP Production. All rights reserved.
        </div>
      </div>
    </footer>
  );
} 