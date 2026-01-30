// src/pages/Contact.jsx

import heroImg from "@assets/images/tech.jpg";
import phoneIcon from "@assets/icons/phone.png";
import mailIcon from "@assets/icons/gmail.png";
import locationIcon from "@assets/icons/location.png";
import facebookIcon from "@assets/icons/facebook.png";
import tiktokIcon from "@assets/icons/tiktok.png";

export default function Contact() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative w-full h-[320px] overflow-hidden">
        <img
          src={heroImg}
          alt="Contact MKS Engineering"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-extrabold tracking-wide">
            Home / Contact
          </h1>
        </div>
      </section>

      {/* ================= CONTENU ================= */}
      <section className="w-full bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">

            {/* ================= FORMULAIRE ================= */}
            <div className="flex flex-col justify-center p-10">
              <h2 className="text-3xl font-extrabold text-gray-700 mb-6 text-center">
                Contactez-nous
              </h2>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2 text-center">
                      Nom complet
                    </label>
                    <input
                      type="text"
                      placeholder="Votre nom"
                      className="w-full px-4 py-3 border border-gray-300
                                 bg-white text-gray-700 placeholder-gray-400
                                 focus:outline-none focus:ring-2 focus:ring-brand-emerald"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2 text-center">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="exemple@email.com"
                      className="w-full px-4 py-3 border border-gray-300
                                 bg-white text-gray-700 placeholder-gray-400
                                 focus:outline-none focus:ring-2 focus:ring-brand-emerald"
                    />
                  </div>

                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2 text-center">
                    Message
                  </label>
                  <textarea
                    rows="6"
                    placeholder="Écrivez votre message ici..."
                    className="w-full px-4 py-3 border border-gray-300
                               bg-white text-gray-700 placeholder-gray-400
                               focus:outline-none focus:ring-2 focus:ring-brand-emerald
                               resize-none"
                  ></textarea>
                </div>

                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="px-14 py-4 text-white font-bold uppercase tracking-wider
                               bg-gradient-to-br from-brand-gray via-brand-blue to-brand-emerald
                               shadow-xl hover:scale-105 transition duration-300"
                  >
                    Envoyer le message
                  </button>
                </div>
              </form>
            </div>

            {/* ================= COORDONNÉES ================= */}
            <div className="h-full">
              <div className="h-full flex items-center
                              bg-gradient-to-br from-brand-gray via-brand-blue to-brand-emerald
                              border border-black/10">

                <div className="p-10 w-full text-white text-center space-y-10">
                  <h3 className="text-3xl font-extrabold">
                    Nos coordonnées
                  </h3>

                  <div className="space-y-2">
                    <h4 className="text-xl font-bold">Téléphone</h4>
                    <img src={phoneIcon} className="w-8 h-8 mx-auto filter invert brightness-200" />
                    <p className="font-semibold">+243 972 717 272</p>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-xl font-bold">Email</h4>
                    <img src={mailIcon} className="w-8 h-8 mx-auto filter invert brightness-200" />
                    <p className="font-semibold">support@mksengineering.net</p>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-xl font-bold">Adresse</h4>
                    <img src={locationIcon} className="w-8 h-8 mx-auto filter invert brightness-200" />
                    <p className="font-semibold">Kolwezi – RDC</p>
                  </div>

                  <div className="flex justify-center gap-8 pt-6">
                    <a href="#" className="hover:scale-125 transition">
                      <img src={facebookIcon} className="w-7 h-7 filter invert brightness-200" />
                    </a>
                    <a href="#" className="hover:scale-125 transition">
                      <img src={tiktokIcon} className="w-7 h-7 filter invert brightness-200" />
                    </a>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>
    </>
  );
}
