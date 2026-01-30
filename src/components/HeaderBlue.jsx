import phoneIcon from "@assets/icons/phone.png";
import gmailIcon from "@assets/icons/gmail.png";
import locationIcon from "@assets/icons/location.png";
import facebookIcon from "@assets/icons/facebook.png";
import tiktokIcon from "@assets/icons/tiktok.png";

export default function HeaderBlue() {
  return (
    <header className="bg-primary border-b border-white/10 nav-glow">
      <div className="max-w-7xl mx-auto px-6 py-3">

        {/* INFOS CENTRÉES */}
        <nav
          className="
            hidden lg:flex items-center justify-center
            gap-8 text-sm text-white font-medium
          "
        >

          <div className="flex items-center gap-2 hover:text-white/80 transition">
            <img src={phoneIcon} className="w-5 h-5 invert" alt="Phone" />
            <span>+243 972 717 272</span>
          </div>

          <div className="flex items-center gap-2 hover:text-white/80 transition">
            <img src={gmailIcon} className="w-5 h-5 invert" alt="Email" />
            <span>support@mksengineering.net</span>
          </div>

          <div className="flex items-center gap-2 hover:text-white/80 transition">
            <img src={locationIcon} className="w-5 h-5 invert" alt="Location" />
            <span>Kolwezi – RDC</span>
          </div>

          {/* RÉSEAUX SOCIAUX */}
          <div className="flex items-center gap-4 ml-6">
            <a href="#" className="hover:scale-110 transition">
              <img src={facebookIcon} className="w-5 h-5 invert" alt="Facebook" />
            </a>
            <a href="#" className="hover:scale-110 transition">
              <img src={tiktokIcon} className="w-5 h-5 invert" alt="TikTok" />
            </a>
          </div>

        </nav>

      </div>
    </header>
  );
}
