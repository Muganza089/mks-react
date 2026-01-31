import { Link } from "react-router-dom";
import computerImg from "@assets/icons/computer.png";
import weldingImg from "@assets/icons/constructor.jpg";
import cctvImg from "@assets/icons/shield.jpg";
import videoCameraImg from "@assets/icons/video-camera.jpg";
import sproutImg from "@assets/icons/sprout.jpg";
import fashionImg from "@assets/icons/fashion.jpg";
export default function Services() {
  return (
    <section className="bg-primary/5 py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* TITRE */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-black mb-4">
            Nos services
          </h2>
          <p className="text-black text-lg max-w-2xl mx-auto">
            Nous mettons à votre disposition une expertise multisectorielle pour
            répondre efficacement à vos besoins professionnels, techniques et
            opérationnels.
          </p>
        </div>

        {/* GRILLE */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

          {/* SERVICE 1 */}
          <Link to="/computer" className="group block">
            <ServiceCard
              title="Informatique & IT Support"
              icon={computerImg}
              text="Support informatique, maintenance, réseaux, solutions numériques
                    et accompagnement technologique pour entreprises et particuliers."
            />
          </Link>

          {/* SERVICE 2 */}
          <Link to="/welding-construction" className="group block">
            <ServiceCard
              title="Soudure & Construction"
              icon={weldingImg}
              text="Travaux de soudure professionnelle, construction métallique
                    et formation pratique en soudure pour élèves du secondaire."
            />
          </Link>

          {/* SERVICE 3 */}
          <Link to="/cctv" className="group block">
            <ServiceCard
              title="Gardiennage & CCTV"
              icon={cctvImg}
              text="Sécurisation des biens et des personnes avec agents qualifiés
                    et installation de systèmes de caméras de surveillance modernes."
            />
          </Link>

          {/* SERVICE 4 */}
          <Link to="/" className="group block">
            <ServiceCard
              title="MKS Medias"
              icon={videoCameraImg}
              text="Captation vidéo, sonorisation, montage et couverture audiovisuelle
                    professionnelle pour événements et projets médias."
            />
          </Link>

          {/* SERVICE 5 */}
          <Link to="/services/agropastoral" className="group block">
            <ServiceCard
              title="MKS Green"
              icon={sproutImg}
              text="Agriculture et élevage orientés vers une production durable,
                    locale et adaptée aux réalités du terrain."
            />
          </Link>

          {/* SERVICE 6 */}
          <Link to="/services/habillement" className="group block">
            <ServiceCard
              title="MKS Fashion"
              icon={fashionImg}
              text="Vêtements professionnels, uniformes et équipements adaptés
                    aux exigences des métiers."
            />
          </Link>

        </div>
      </div>
    </section>
  );
}

/* ================= SERVICE CARD ================= */
function ServiceCard({ title, icon, text }) {
  return (
    <div
      className="p-[2px]
                 bg-gradient-to-br from-brand-gray via-brand-blue to-brand-emerald
                 transition-all duration-500
                 group-hover:shadow-glow group-hover:-translate-y-1"
    >
      <div
        className="h-full bg-white p-8 text-center
                   transition-all duration-500
                   group-hover:bg-transparent"
      >
        <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-white">
          {title}
        </h3>

        <img
          src={icon}
          alt={title}
          className="mx-auto mb-5 w-12 h-12 transition group-hover:invert"
        />

        <p className="text-gray-700 group-hover:text-white/90">
          {text}
        </p>
      </div>
    </div>
    
  );
}
