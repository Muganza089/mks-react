
import { useEffect, useState } from "react";

// images
import heroImg from "@assets/images/tech.jpg";
import itSupportImg from "@assets/images/IT support.jpg";
import installImg from "@assets/images/computerScience.jpg";
import softwareImg from "@assets/images/software.jpg";

export default function Informatique() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);

  /* ================= BOOTLOADER ================= */
  useEffect(() => {
    const html = document.documentElement;
    const loader = document.getElementById("bootloader");

    html.classList.remove("loading");

    if (loader) {
      loader.style.opacity = "0";
      loader.style.transform = "scale(1.05)";
      setTimeout(() => loader.remove(), 400);
    }
  }, []);

  /* ================= BACK TO TOP ================= */
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* ================= BACK TO TOP ================= */}
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-[9999]
                     flex items-center justify-center
                     w-12 h-12 rounded-full
                     bg-primary text-white shadow-lg
                     transition hover:scale-110"
        >
          <span className="material-icons text-2xl">
            keyboard_arrow_up
          </span>
        </button>
      )}

      {/* ================= HERO ================= */}
      <section className="relative w-full">
        <img
          src={heroImg}
          alt="IT & Solutions informatiques"
          className="w-full h-auto md:h-[450px] object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-3xl md:text-5xl font-extrabold text-center drop-shadow-lg">
            Informatique & Solutions Digitales
          </h1>
        </div>
      </section>

      {/* ================= IT SUPPORT ================= */}
      <Section
        title="Support Informatique & IT Support"
        image={itSupportImg}
      >
        Une infrastructure informatique fiable commence par une installation
        professionnelle des équipements. Nous assurons la mise en place
        complète du matériel informatique adapté aux besoins des entreprises.
      </Section>

      {/* ================= INSTALLATION ================= */}
      <Section
        gray
        title="Installation d’équipements informatiques"
        image={installImg}
      >
        Nous installons ordinateurs, serveurs, imprimantes, équipements réseau
        et systèmes de communication selon des normes strictes de sécurité.
      </Section>

      {/* ================= DEV ================= */}
      <Section
        title="Développement Web & Mobile"
        image={softwareImg}
      >
        MKS Engineering développe des applications web et mobiles modernes,
        sécurisées et évolutives pour accompagner la transformation digitale.
      </Section>

      {/* ================= MAP ================= */}
      <div className="w-full h-[450px] mt-12">
        <iframe
          title="map"
          className="w-full h-full border-0"
          loading="lazy"
          src="https://www.openstreetmap.org/export/embed.html?bbox=25.45,-10.70,25.55,-10.60&layer=mapnik"
        />
      </div>
    </>
  );
}

/* ================= SECTION COMPONENT ================= */
function Section({ title, image, children, gray }) {
  return (
    <section className={`w-full py-10 ${gray ? "bg-gray-50" : "bg-white"}`}>
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        <img
          src={image}
          alt={title}
          className="w-full max-w-md lg:max-w-full object-contain mx-auto"
        />

        <div>
          <h2 className="text-3xl font-extrabold mb-6">{title}</h2>
          <p className="text-lg leading-relaxed">{children}</p>
        </div>

      </div>
    </section>
  );
}
