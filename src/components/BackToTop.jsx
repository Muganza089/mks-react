import { useEffect, useRef } from "react";

export default function BackToTop() {
  const btnRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!btnRef.current) return;

      if (window.scrollY > 400) {
        btnRef.current.classList.remove("hidden");
        btnRef.current.classList.add("flex");
      } else {
        btnRef.current.classList.add("hidden");
        btnRef.current.classList.remove("flex");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      ref={btnRef}
      onClick={scrollToTop}
      aria-label="Remonter en haut"
      className="
        fixed bottom-6 right-6 z-[9999]
        hidden items-center justify-center
        w-12 h-12 rounded-full
        bg-primary text-white
        shadow-lg
        transition-all duration-300
        hover:scale-110 hover:bg-black
      "
    >
      <span className="material-icons text-2xl">
        keyboard_arrow_up
      </span>
    </button>
  );
}
