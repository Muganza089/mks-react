import { useEffect } from "react";

export default function Cursor() {
  useEffect(() => {
    const cursor = document.getElementById("cursor");
    const pupil = cursor.querySelector(".pupil");

    const maxOffset = 6; // distance max vers le bord de l'œil

    const move = (e) => {
      // Position du curseur custom
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;

      // Centre de l'œil
      const rect = cursor.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Direction regard
      const dx = e.clientX - centerX;
      const dy = e.clientY - centerY;

      const distance = Math.sqrt(dx * dx + dy * dy);
      const ratio = Math.min(distance / 40, 1);

      const offsetX = (dx / distance) * maxOffset * ratio || 0;
      const offsetY = (dy / distance) * maxOffset * ratio || 0;

      pupil.style.transform = `
        translate(-50%, -50%)
        translate(${offsetX}px, ${offsetY}px)
      `;
    };

    window.addEventListener("mousemove", move);

    window.addEventListener("mousedown", () =>
      cursor.classList.add("boost")
    );

    window.addEventListener("mouseup", () =>
      cursor.classList.remove("boost")
    );

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <div id="cursor">
      <div className="pupil"></div>
      <div className="orbit o1"></div>
      <div className="orbit o2"></div>
      <div className="orbit o3"></div>
    </div>
  );
}
