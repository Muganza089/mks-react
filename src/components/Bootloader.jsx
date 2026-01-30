import { useEffect, useState } from "react";

export default function Bootloader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Sécurité : si React est déjà monté, on ne relance jamais
    if (!visible) return;

    const html = document.documentElement;

    // React est monté → on libère la page
    html.classList.remove("loading");

    // Petite transition
    const timeout = setTimeout(() => {
      setVisible(false);

      const loader = document.getElementById("bootloader");
      if (loader) loader.remove();
    }, 300);

    return () => clearTimeout(timeout);
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      id="bootloader"
      className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-white transition-all duration-300"
    >
      <h1 className="text-2xl font-extrabold text-primary tracking-wide mb-6">
        MKS Engineering
      </h1>

      <div className="relative w-16 h-16">
        <div className="absolute inset-0 rounded-full border-4 border-primary/20" />
        <div className="absolute inset-0 rounded-full border-4 border-primary border-t-transparent animate-spin" />
      </div>

      <p className="mt-4 text-sm text-gray-500 tracking-wide">
        Chargement…
      </p>
    </div>
  );
}
