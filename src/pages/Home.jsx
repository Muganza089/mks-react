import { useEffect } from "react";
import { Swiper } from "swiper";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import videoIT from "@assets/videos/IT.mp4";
import videoWelder from "@assets/videos/welder.mp4";
import ImgConstruction from "@assets/images/construction.png";
import ImgEngineer from "@assets/images/eng3.png";
import Services from "@pages/Services";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Home() {
  useEffect(() => {
    new Swiper(".swiper", {
      modules: [Autoplay, Pagination, Navigation],
      loop: true,
      speed: 900,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next-custom",
        prevEl: ".swiper-button-prev-custom",
      },
    });
  }, []);

  return (
    <>
      {/* ================= HERO SLIDER ================= */}
      <section className="relative w-full bg-black overflow-hidden h-auto md:h-screen">
        <div className="swiper w-full h-full relative">
          <div className="swiper-wrapper">

            {/* ================= SLIDE 1 : SOUDURE ================= */}
            <div className="swiper-slide relative flex items-center justify-center aspect-video md:aspect-auto md:h-full">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-contain md:object-cover video-blue-tone"
              >
                <source src={videoWelder} type="video/mp4" />
              </video>

              <div className="relative z-20 text-center px-4">
                <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
                  Soudure
                </h2>

                <a
                  href="/welding-construction"
                  className="inline-block px-4 py-2 text-sm sm:px-6 sm:py-3 sm:text-base md:px-8 md:py-4 md:text-lg bg-primary text-white font-bold uppercase tracking-wider hover:bg-white hover:text-primary transition"
                >
                  Voir plus
                </a>
              </div>
            </div>

            {/* ================= SLIDE 2 : CONSTRUCTION ================= */}
            <div className="swiper-slide relative flex items-center justify-center aspect-video md:aspect-auto md:h-full">
              <img
                src={ImgConstruction}
                alt="Construction"
                className="absolute inset-0 w-full h-full object-contain md:object-cover grayscale"
              />

              <div className="relative z-20 text-center px-4">
                <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
                  Construction & Génie Civil
                </h2>

                <a
                  href="/welding-construction"
                  className="inline-block px-4 py-2 text-sm sm:px-6 sm:py-3 sm:text-base md:px-8 md:py-4 md:text-lg bg-primary text-white font-bold uppercase tracking-wider hover:bg-white hover:text-primary transition"
                >
                  Voir plus
                </a>
              </div>
            </div>

            {/* ================= SLIDE 3 : IT ================= */}
            <div className="swiper-slide relative flex items-center justify-center aspect-video md:aspect-auto md:h-full">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-contain md:object-cover video-blue-tone"
              >
                <source src={videoIT} type="video/mp4" />
              </video>

              <div className="relative z-20 text-center px-4">
                <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
                  Informatique & IT Support
                </h2>

                <a
                  href="/computer"
                  className="inline-block px-4 py-2 text-sm sm:px-6 sm:py-3 sm:text-base md:px-8 md:py-4 md:text-lg bg-primary text-white font-bold uppercase tracking-wider hover:bg-white hover:text-primary transition"
                >
                  Voir plus
                </a>
              </div>
            </div>
          </div>

          <div className="swiper-pagination"></div>

          {/* NAVIGATION */}
          <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 z-30 flex gap-3">
            <button className="swiper-button-prev-custom bg-black/40 hover:bg-primary text-white p-3 rounded-full transition">
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button className="swiper-button-next-custom bg-black/40 hover:bg-primary text-white p-3 rounded-full transition">
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* OVERLAY DESKTOP */}
        <div className="hidden md:block pointer-events-none absolute inset-0 bg-primary/30 mix-blend-color z-10"></div>
      </section>

      {/* ================= HERO SECTION ================= */}
      <section id="hero-section" className="w-full bg-white">
        <div className="relative w-full py-16 md:py-24">
          <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-4 md:px-6">
            <div className="flex flex-col md:flex-row items-center gap-10">

              <div className="flex justify-center md:w-1/2 w-full">
                <img
                  src={ImgEngineer}
                  alt="Engineer illustration"
                  className="w-[92vw] max-w-md sm:w-[80vw] md:w-80 lg:w-96 object-contain mx-auto"
                />
              </div>

              <div className="md:w-1/2 bg-white/90 backdrop-blur-xl p-6 sm:p-8 md:p-12 border border-black/5">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">
                  À propos de <span className="text-primary">MKS Engineering</span>
                </h2>

                <p className="text-xs sm:text-sm uppercase tracking-widest text-gray-500 mb-6">
                  Mondela Kabwita Services d’Ingénieries
                </p>

                <p className="text-gray-800 text-base sm:text-lg leading-relaxed mb-4">
                  <strong>MKS Engineering</strong> est une société spécialisée dans
                  la fourniture de <strong>services multisectoriels professionnels</strong>.
                </p>

                <p className="text-gray-800 text-base sm:text-lg leading-relaxed">
                  Des solutions fiables, modernes et conformes aux standards internationaux.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>
      <Services />

      {/* STYLES */}
      <style>
        {`
          .video-blue-tone {
            filter: grayscale(70%) brightness(0.9) contrast(1.05);
          }
        `}
      </style>
    </>
  );
}
