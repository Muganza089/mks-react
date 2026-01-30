// src/pages/CCTV.jsx

import heroImg from "@assets/images/tech.jpg";
import cameraImg from "@assets/images/camera-installation.jpg";
// import guardImg from "@assets/images/security-guard.jpg";

export default function CCTV() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative w-full h-[320px] overflow-hidden">
        <img
          src={heroImg}
          alt="Gardiennage et Vidéosurveillance"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-extrabold tracking-wide text-center">
            Gardiennage & Vidéosurveillance (CCTV)
          </h1>
        </div>
      </section>

      {/* ================= INSTALLATION CCTV ================= */}
      <section className="w-full bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            <div className="w-full h-[420px] overflow-hidden">
              <img
                src={cameraImg}
                alt="Caméra de surveillance"
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <h2 className="text-3xl font-extrabold text-gray-800 mb-6">
                Installation de systèmes de vidéosurveillance
              </h2>

              <p className="text-gray-700 leading-relaxed text-lg">
                La vidéosurveillance est aujourd’hui un élément essentiel
                pour assurer la sécurité des personnes, des biens et des
                infrastructures.
                <br /><br />
                Nous assurons l’étude du site, le choix des équipements,
                l’installation des caméras, la configuration des enregistreurs
                et l’optimisation des angles de vue.
                <br /><br />
                Nos systèmes permettent un contrôle en temps réel,
                un enregistrement sécurisé et une consultation à distance.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= GARDIENNAGE ================= */}
      <section className="w-full bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            <div className="w-full h-[420px] overflow-hidden">
              <img
                src={guardImg}
                alt="Service de gardiennage"
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <h2 className="text-3xl font-extrabold text-gray-800 mb-6">
                Services de gardiennage et sécurité humaine
              </h2>

              <p className="text-gray-700 leading-relaxed text-lg">
                En complément des solutions technologiques, MKS Engineering
                propose des services de gardiennage assurés par des agents
                qualifiés et formés.
                <br /><br />
                Nos agents assurent la surveillance des sites industriels,
                commerciaux, résidentiels et événementiels.
                <br /><br />
                L’association du gardiennage humain et des systèmes CCTV
                renforce efficacement la sécurité globale.
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
