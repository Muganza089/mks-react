// src/pages/Soudure.jsx

import heroImg from "@assets/images/tech.jpg";
import buildingImg from "@assets/images/building.jpg";
import weldingImg from "@assets/images/welding.jpg";
// import trainingImg from "@assets/images/welding-training.jpg";

export default function Soudure() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative w-full h-[320px] overflow-hidden">
        <img
          src={heroImg}
          alt="Soudure et Construction"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-extrabold tracking-wide text-center">
            Soudure & Construction
          </h1>
        </div>
      </section>

      {/* ================= CONSTRUCTION ================= */}
      <section className="w-full bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            <div className="w-full h-[420px] overflow-hidden">
              <img
                src={buildingImg}
                alt="Travaux de construction"
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <h2 className="text-3xl font-extrabold text-gray-800 mb-6">
                Construction & Génie Civil
              </h2>

              <p className="text-gray-700 leading-relaxed text-lg">
                MKS Engineering intervient dans le domaine de la construction et
                du génie civil avec une approche professionnelle axée sur la qualité,
                la sécurité et la durabilité des ouvrages.
                <br /><br />
                Nous réalisons des travaux de construction, de réhabilitation et
                d’aménagement d’infrastructures destinées aux entreprises,
                institutions et particuliers.
                <br /><br />
                Notre équipe qualifiée assure un suivi complet des travaux,
                depuis l’étude du projet jusqu’à sa réalisation finale.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= SOUDURE ================= */}
      <section className="w-full bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            <div className="w-full h-[420px] overflow-hidden">
              <img
                src={weldingImg}
                alt="Travaux de soudure"
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <h2 className="text-3xl font-extrabold text-gray-800 mb-6">
                Soudure & Métallurgie
              </h2>

              <p className="text-gray-700 leading-relaxed text-lg">
                La soudure constitue un pilier essentiel dans la réalisation
                d’ouvrages métalliques solides et durables.
                <br /><br />
                Nous effectuons des travaux de soudure structurelle,
                d’assemblage métallique et de fabrication sur mesure.
                <br /><br />
                Nous garantissons des assemblages précis, résistants
                et conformes aux exigences techniques.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= FORMATION SOUDURE ================= */}
      <section className="w-full bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            <div className="w-full h-[420px] overflow-hidden">
              <img
                src={trainingImg}
                alt="Formation pratique en soudure"
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <h2 className="text-3xl font-extrabold text-gray-800 mb-6">
                Formation pratique en soudure pour élèves
              </h2>

              <p className="text-gray-700 leading-relaxed text-lg">
                MKS Engineering propose des formations pratiques en soudure
                destinées aux élèves des écoles secondaires.
                <br /><br />
                Les élèves acquièrent des bases solides, apprennent les règles
                de sécurité et découvrent les métiers techniques.
                <br /><br />
                L’objectif est de préparer les jeunes au monde professionnel
                et promouvoir les métiers techniques.
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
