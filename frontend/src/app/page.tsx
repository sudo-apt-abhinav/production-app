"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function Home() {
  const bgTextRef = useRef<HTMLDivElement | null>(null);
  const heroRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const splitRef = useRef<HTMLParagraphElement | null>(null);
  const missionRef = useRef<HTMLElement | null>(null);

  const [typedMissionText, setTypedMissionText] = useState("");
  const [typedClientText, setTypedClientText] = useState("");
  const fullMissionText =
    "We empower creators to reach the right audience through impactful advertising";
  const fullClientText = " We've had the privilege of working with some of the most innovative brands";

  useEffect(() => {
    const about = aboutRef.current;
    if (!about) return;

    let observer: IntersectionObserver;
    let typingStarted = false;

    const handleTyping = () => {
      let missionIndex = 0;
      let clientIndex = 0;

      const missionInterval = setInterval(() => {
        if (missionIndex < fullMissionText.length) {
          setTypedMissionText(prev => prev + fullMissionText[missionIndex]);
          missionIndex++;
        } else {
          clearInterval(missionInterval);

          // Start client typing after mission finishes
          const clientInterval = setInterval(() => {
            if (clientIndex < fullClientText.length) {
              setTypedClientText(prev => prev + fullClientText[clientIndex]);
              clientIndex++;
            } else {
              clearInterval(clientInterval);
            }
          }, 40);
        }
      }, 40);
    };




    if ("IntersectionObserver" in window) {
      observer = new IntersectionObserver(
        entries => {
          if (entries[0].isIntersecting && !typingStarted) {
            typingStarted = true;
            handleTyping();
            observer.disconnect();
          }
        },
        { threshold: 0.5 }
      );
      observer.observe(about);
    } else {
      // Fallback for older browsers
      handleTyping();
    }

    return () => {
      if (observer) observer.disconnect();
    };
  }, [fullMissionText]);

  useEffect(() => {
    const bgText = bgTextRef.current;
    const hero = heroRef.current;
    const img = imageRef.current;
    const about = aboutRef.current;
    const splitEl = splitRef.current;
    if (!bgText || !hero || !about || !splitEl) return;

    let animation: gsap.core.Tween | null = null;
    let resizeTimeout: NodeJS.Timeout | null = null;

    let split: SplitText;

    function setupSplitText() {
      if (split) split.revert();

      split = new SplitText(splitEl, { type: "lines" });
      split.lines.forEach(line => {
        (line as HTMLElement).style.display = "inline-block";
      });

      gsap.set(split.lines, { opacity: 0, y: 40 });

      gsap.to(split.lines, {
        opacity: 1,
        y: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: about,
          start: "top 80%",
          toggleActions: "play none none none",
          once: true,
          invalidateOnRefresh: true,
        },
      });
    }

    // Run only after fonts & layout are ready
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(() => {
        requestAnimationFrame(() => {
          setupSplitText();
          ScrollTrigger.refresh();
        });
      });
    } else {
      // Fallback if fonts API not supported
      window.addEventListener("load", () => {
        setupSplitText();
        ScrollTrigger.refresh();
      });
    }



    function setupBgAnimation() {
      if (animation) {
        animation.kill();
        animation = null;
      }
      ScrollTrigger.getAll().forEach(t => t.kill());

      if (!bgText) return;
      const lines = Array.from(bgText.children) as HTMLElement[];
      let maxLineWidth = 0;
      lines.forEach(line => {
        maxLineWidth = Math.max(maxLineWidth, line.offsetWidth);
      });

      const vw = window.innerWidth;
      const startX = vw / 2 - maxLineWidth / 2;
      const endX = vw - maxLineWidth;

      animation = gsap.fromTo(
        bgText,
        { x: startX },
        {
          x: endX,
          ease: "none",
          scrollTrigger: {
            trigger: hero,
            start: "center center",
            end: "bottom top",
            scrub: 0.5,
          },
        }
      );
    }

    setupBgAnimation();

    function handleResize() {
      if (resizeTimeout) clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        setupBgAnimation();
        setupSplitText();
        ScrollTrigger.refresh();
      }, 100);
    }



    window.addEventListener("resize", handleResize);

    if (document.fonts) {
      document.fonts.ready.then(() => ScrollTrigger.refresh());
    }

    if (img) {
      gsap.from(img, {
        x: -100,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: img,
          start: "top 80%",
          toggleActions: "play none none none",
          invalidateOnRefresh: true,
        },
      });
    }

    setTimeout(() => ScrollTrigger.refresh(), 100);
    window.addEventListener("load", () => ScrollTrigger.refresh());

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("load", () => ScrollTrigger.refresh());
      if (animation) animation.kill();
      split.revert();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <main className="w-full">
      {/* Hero with moving background text */}
      <section ref={heroRef} className="fixed top-0 left-0 w-full h-screen bg-[#101726] flex flex-col items-center justify-center text-center overflow-hidden z-[-10]">
        <h1 className="text-5xl sm:text-9xl font-extrabold text-white mb-4">Vivek Parekh</h1>
        <h2 className="text-3xl sm:text-5xl font-bold text-yellow-400 mb-6">Production, Creative Agency</h2>
        <div ref={bgTextRef} className="absolute top-1/2 left-0 w-max text-[7vw] sm:text-[6vw] font-extrabold text-gray-400 opacity-20 pointer-events-none select-none leading-[1.5]" style={{ transform: "translateY(-50%)" }}>
          <span>Where strategic marketing</span><br/><br/>
          <span>meets artisan film production to elevate luxury brands</span>
        </div>
      </section>

      <div className="h-screen" />

      {/* About section with SplitText */}
      <section ref={aboutRef} className="w-full bg-gray-100 flex flex-col items-center justify-center px-4 py-16">
        <div className="max-w-10xl bg-white border border-black rounded-3xl shadow-2xl p-8 md:p-10 flex flex-col md:flex-row gap-5">
          <div className="w-full md:w-1/3 flex justify-center">
            <div ref={imageRef} className="w-[170px] h-[370px] md:w-[220px] md:h-[320px] rounded-2xl shadow-xl bg-gray-200 flex items-center justify-center">
              <span className="text-gray-400 text-xl">Image</span>
            </div>
          </div>
          <div className="pl-5 pr-5">
            <p ref={splitRef} className="text-3xl font-bold text-black text-justify leading-12">
              With over a decade of expertise in marketing and production, Vivek Parekh crafts powerful brand stories that leave a lasting impact. His work spans industries from FMCG to entertainment, blending creativity with strategy to build iconic identities.<br/> Specializing in movie associations, strategic digital campaigns, and film branding solutions, Vivek's approach combines innovation with a client-first mindset — making him a trusted partner in brand elevation.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section with typewriter & hover cards */}
      <section
      ref={missionRef}
      className="w-full bg-gray-100 flex flex-col items-center justify-center px-4 py-16"
    >
      <h2 className="text-4xl sm:text-5xl font-extrabold text-black mb-4 text-center">
        Our Mission
      </h2>
      <p className="text-lg sm:text-xl text-gray-800 mb-12 text-center max-w-4xl min-h-[4rem]">
        {typedMissionText}
      </p>
      <div className="w-full max-w-6xl flex flex-col md:flex-row gap-8 items-center justify-center">
        {/* Card 1 */}
        <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-300 ease-in-out flex flex-col items-center justify-center px-8 py-8 w-full md:w-1/3 max-w-md text-center border border-gray-200 cursor-pointer">
          <span className="text-yellow-400 text-4xl mb-4">📢</span>
          <h3 className="text-xl font-bold mb-2 text-black">Empower Creators</h3>
          <p className="text-gray-700 text-base">
            Providing tools and platforms for creators to showcase their work
          </p>
        </div>
        {/* Card 2 */}
        <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-300 ease-in-out flex flex-col items-center justify-center px-8 py-8 w-full md:w-1/3 max-w-md text-center border border-gray-200 cursor-pointer">
          <span className="text-yellow-400 text-4xl mb-4">🎯</span>
          <h3 className="text-xl font-bold mb-2 text-black">Targeted Reach</h3>
          <p className="text-gray-700 text-base">
            Connecting creative work with the most relevant audiences
          </p>
        </div>
        {/* Card 3 */}
        <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-300 ease-in-out flex flex-col items-center justify-center px-8 py-8 w-full md:w-1/3 max-w-md text-center border border-gray-200 cursor-pointer">
          <span className="text-yellow-400 text-4xl mb-4">🚀</span>
          <h3 className="text-xl font-bold mb-2 text-black">Impactful Results</h3>
          <p className="text-gray-700 text-base">
            Delivering advertising that makes a measurable difference
          </p>
        </div>
      </div>
    </section>

      {/* Clients Section */}
      <section className="w-full bg-white flex flex-col items-center justify-center px-4 py-16">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-black mb-4 text-center">Our Clients</h2>
        <p className="text-lg sm:text-xl text-gray-800 mb-12 text-center max-w-4xl">
          {typedClientText}
        </p>
        <div className="w-full max-w-5xl grid grid-cols-2 sm:grid-cols-5 gap-8 items-center justify-center">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="flex items-center justify-center bg-gray-200 rounded-xl min-h-[80px] border border-gray-200">
              <span className="text-gray-400">Logo</span>
            </div>
          ))}
        </div>
      </section>

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
    </main>
  );
}
