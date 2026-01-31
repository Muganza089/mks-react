import trainingImg from "@/assets/images/training.png";
import formationsImg from "@/assets/images/formations.jpg";

const Formations = () => {
  return (
    <section className="w-full bg-white py-10">
      <div className="max-w-7xl mx-auto px-6 space-y-16">

        {/* IMAGE 1 (ILLUSTRATION FORMATION) */}
        <div className="relative w-full h-[320px] overflow-hidden">
          <img
            src={trainingImg}
            alt="Formations bureautiques"
            className="w-full h-full object-cover"
          />

          {/* COVER NOIR */}
          <div className="absolute inset-0 bg-primary/20"></div>
        </div>

        {/* IMAGE 2 + COMMENTAIRES */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* COMMENTAIRES (BUREAUTIQUE) */}
          <div className="space-y-6">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Formations bureautiques
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed">
              Nous offrons des formations pratiques et accessibles en{" "}
              <strong>Excel</strong>, <strong>Word</strong>,{" "}
              <strong>PowerPoint</strong> et <strong>Windows</strong>, adaptées
              aux débutants comme aux professionnels.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed">
              L’objectif est de renforcer votre productivité, améliorer la
              gestion des données, créer des documents professionnels et
              maîtriser les outils informatiques essentiels en milieu
              professionnel.
            </p>
          </div>

          {/* IMAGE 2 */}
          <div className="w-full h-[260px] overflow-hidden">
            <img
              src={formationsImg}
              alt="Formation Excel Word PowerPoint"
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Formations;

