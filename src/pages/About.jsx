import { Link } from "react-router-dom";
import techImg from "@assets/images/tech.jpg";
import engineerImg from "@assets/images/eng2.png";
import expertiseImg from "@assets/images/expertise.jpg";
export default function About() {
  return (
    <>
      {/* ================= HERO HEADER ================= */}
      <section className="relative w-full h-[70vh] overflow-hidden">

        <img
          src={techImg}
          alt="Technologie et ingénierie"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white px-6">
          <p className="uppercase tracking-widest text-sm mb-4 text-gray-300">
            Home / À propos
          </p>

          <h1 className="text-4xl md:text-6xl font-extrabold">
            À propos de MKS Engineering
          </h1>

          <p className="max-w-2xl mt-6 text-lg text-gray-200">
            Mondela Kabwita Services d’Ingénieries – Une vision moderne au service
            du développement et de l’innovation.
          </p>
        </div>
      </section>

      {/* ================= CONTENU ================= */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 space-y-24">

          {/* QUI SOMMES-NOUS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">
                Qui sommes-nous ?
              </h2>

              <p className="text-gray-700 text-lg leading-relaxed">
                <strong>MKS Engineering</strong> est une société à responsabilité
                limitée basée à <strong>Kolwezi</strong>, spécialisée dans la
                fourniture de services professionnels multisectoriels.
              </p>

              <p className="text-gray-700 text-lg leading-relaxed">
                Grâce à une équipe qualifiée et à une approche orientée résultats,
                MKS Engineering intervient dans plusieurs domaines clés, allant
                des services informatiques au génie civil, en passant par la
                sécurité, le nettoyage professionnel et l’audiovisuel.
              </p>
            </div>

            <div className="w-full h-[340px] overflow-hidden rounded-2xl shadow-xl">
              <img
                src={engineerImg}
                alt="Équipe MKS Engineering"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* DOMAINES */}
          <div className="space-y-8 text-center">
            <h2 className="text-4xl font-bold text-gray-900">
              Nos domaines d’intervention
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed max-w-4xl mx-auto">
              Nous opérons dans une diversité de secteurs afin d’offrir une prise
              en charge complète et cohérente des besoins de nos clients :
              solutions informatiques, formations professionnelles, génie civil,
              sécurité industrielle, nettoyage, audiovisuel et logistique.
            </p>
          </div>

          {/* POURQUOI NOUS CHOISIR */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="w-full h-[320px] overflow-hidden rounded-2xl shadow-xl">
              <img
                src={expertiseImg}
                alt="Expertise professionnelle"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">
                Pourquoi nous choisir ?
              </h2>

              <p className="text-gray-700 text-lg leading-relaxed">
                Choisir MKS Engineering, c’est faire le choix d’un partenaire
                fiable, structuré et engagé. Nous privilégions la qualité,
                la rigueur et l’écoute du client pour proposer des solutions
                sur mesure, adaptées aux réalités locales tout en respectant
                les standards internationaux.
              </p>
            </div>
          </div>

          {/* OBJECTIF */}
          <div className="space-y-6 max-w-5xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900">
              Notre objectif
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed">
              Contribuer activement au développement économique et technologique
              en fournissant des services efficaces, durables et accessibles,
              et devenir une référence en ingénierie de services en Afrique
              centrale.
            </p>
          </div>
        </div>
      </section>

      {/* ================= CTA GLOW ================= */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 blur-2xl opacity-70" />

        <div className="relative z-10 max-w-5xl mx-auto text-center px-6 space-y-8">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            Construisons l’avenir ensemble
          </h2>

          <p className="text-gray-100 text-lg max-w-3xl mx-auto">
            Vous avez un projet, une idée ou un besoin spécifique ?
            MKS Engineering est prêt à vous accompagner avec expertise
            et engagement.
          </p>

          <Link
            to="/contact"
            className="inline-block px-10 py-4 bg-white text-blue-700 font-bold text-lg
                       shadow-xl hover:scale-105 transition-transform duration-300"
          >
            Travaillons ensemble
          </Link>
        </div>
      </section>
    </>
  );
}
