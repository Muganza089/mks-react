import phoneIcon from "@assets/icons/phone.png";
import gmailIcon from "@assets/icons/gmail.png";
import locationIcon from "@assets/icons/location.png";

export default function Footer() {
  return (
    <footer className="bg-footer-color text-white relative">
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-3 gap-14">

          {/* CONTACT */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contacts</h3>
            <ul className="space-y-4 text-sm text-white/90">
              <li className="flex gap-3 items-center">
                <img src={phoneIcon} className="w-5 h-5" alt="Phone" />
                <span>+243 972 717 272</span>
              </li>

              <li className="flex gap-3 items-center">
                <img src={gmailIcon} className="w-5 h-5" alt="Email" />
                <span>support@mksengineering.net</span>
              </li>

              <li className="flex gap-3 items-start">
                <img
                  src={locationIcon}
                  className="w-5 h-5 mt-1"
                  alt="Location"
                />
                <span>Kolwezi – RDC</span>
              </li>
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="text-xl font-bold mb-6">Nos services</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li>Construction & Génie civil</li>
              <li>Soudure industrielle</li>
              <li>Solutions informatiques</li>
              <li>Formations</li>
              <li>Gardiennage & CCTV</li>
            </ul>
          </div>

          {/* NEWSLETTER */}
          <div>
            <h3 className="text-xl font-bold mb-6">Newsletter</h3>
            <p className="text-sm text-white/80 mb-4">
              Recevez nos offres et actualités.
            </p>
            <form className="flex gap-3">
              <input
                type="email"
                placeholder="Votre email"
                className="flex-1 px-4 py-2 rounded-lg text-gray-800"
              />
              <button
                type="submit"
                className="bg-white text-primary px-6 py-2 rounded-lg font-semibold hover:bg-gray-200 transition"
              >
                OK
              </button>
            </form>
          </div>

        </div>

        <p className="text-center text-sm text-white/70 mt-16 border-t border-white/20 pt-6">
          © 2026 MKS Engineering — Tous droits réservés
        </p>

      </div>
    </footer>
  );
}
