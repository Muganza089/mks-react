import { useEffect } from "react";

export default function Cursor() {
  useEffect(() => {
    const cursor = document.getElementById("cursor");

    const move = (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
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
