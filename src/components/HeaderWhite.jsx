import logo from "@assets/images/logo1.jpg";
import { useState } from "react";
import { Link } from "react-router-dom";
import phoneIcon from "@assets/icons/phone.png";
import gmailIcon from "@assets/icons/gmail.png";
import locationIcon from "@assets/icons/location.png";
import facebookIcon from "@assets/icons/facebook.png";
import tiktokIcon from "@assets/icons/tiktok.png";

export default function HeaderWhite() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav className="w-full bg-white sticky top-0 z-50 shadow-xl">
        <div className="relative max-w-7xl mx-auto px-6 h-16 flex items-center">

          {/* LOGO */}
          <div className="flex-shrink-0 z-10">
            <Link to="/" className="flex items-center gap-2">
              <img
                src={logo}
                alt="MKS Engineering"
                className="h-12 md:h-14 object-contain"
              />
            </Link>
          </div>

          {/* MENU DESKTOP */}
          <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex">
            <ul className="flex items-center space-x-2 font-semibold uppercase text-sm h-16">

              <NavLink to="/">Accueil</NavLink>

              {/* SERVICES */}
              <li className="relative h-full flex items-center group">
                <span className="relative h-full flex items-center gap-1 px-4 text-gray-800 hover:text-primary cursor-pointer">
                  Services
                  <svg className="w-4 h-4 transition-transform group-hover:rotate-180"
                       fill="none" stroke="currentColor" strokeWidth="2"
                       viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"/>
                  </svg>
                </span>

                {/* DROPDOWN */}
                <ul className="absolute left-0 top-full w-64 bg-white text-gray-800 shadow-xl border border-black/10
                               opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <DropdownLink to="/welding_construction">Construction & Soudure</DropdownLink>
                  <DropdownLink to="/computer">Solutions informatiques</DropdownLink>
                  <DropdownLink to="/cctv">Gardiennage & CCTV</DropdownLink>
                </ul>
              </li>

              <NavLink to="/contact">Contacts</NavLink>
              <NavLink to="/about">À propos</NavLink>
            </ul>
          </div>

          <div className="ml-auto hidden md:block w-[120px]" />

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden ml-auto p-2 text-primary hover:bg-gray-100 z-10"
          >
            {!menuOpen ? (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2"
                   viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2"
                   viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"/>
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* OVERLAY */}
      <div
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 bg-black/60 transition-all duration-500 z-[9999]
          ${menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      />

      {/* MOBILE MENU */}
      <aside
        className={`fixed top-0 left-0 h-full w-72 bg-primary z-[10000] md:hidden
          transition-transform duration-300 flex flex-col justify-between
          ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}
      >

        <div className="px-6 py-8 space-y-2 text-white font-semibold uppercase text-sm">
          <MobileLink to="/" close={() => setMenuOpen(false)}>Home</MobileLink>

          <button
            onClick={() => setServicesOpen(!servicesOpen)}
            className="w-full flex items-center justify-between py-2 hover:bg-white/10"
          >
            Services
            <svg className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                 fill="none" stroke="currentColor" strokeWidth="2"
                 viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"/>
            </svg>
          </button>

          {servicesOpen && (
            <div className="ml-4 space-y-1 text-sm font-medium">
              <MobileLink to="/welding_construction" close={() => setMenuOpen(false)}>Construction & Soudure</MobileLink>
              <MobileLink to="/computer" close={() => setMenuOpen(false)}>Solutions informatiques</MobileLink>
              <MobileLink to="/cctv" close={() => setMenuOpen(false)}>Gardiennage & CCTV</MobileLink>
            </div>
          )}

          <MobileLink to="/contact" close={() => setMenuOpen(false)}>Contacts</MobileLink>
          <MobileLink to="/about" close={() => setMenuOpen(false)}>À propos</MobileLink>
        </div>

        {/* CONTACTS BOTTOM */}
        <div className="px-6 py-6 border-t border-white/20 text-white text-sm space-y-3">
          <ContactItem icon={phoneIcon} text="+243 972 717 272" />
          <ContactItem icon={gmailIcon} text="support@mksengineering.net" />
          <ContactItem icon={locationIcon}   text="Kolwezi – RDC" />
          <div className="flex gap-4 pt-2">
            <img src={facebookIcon} className="w-5 h-5 invert" />
            <img src={tiktokIcon} className="w-5 h-5 invert" />
          </div>
        </div>
      </aside>
    </>
  );
}

/* ======= SMALL COMPONENTS ======= */

const NavLink = ({ to, children }) => (
  <li className="h-full flex items-center">
    <Link to={to} className="px-4 text-gray-800 hover:text-primary">
      {children}
    </Link>
  </li>
);

const DropdownLink = ({ to, children }) => (
  <li>
    <Link to={to} className="block px-5 py-3 hover:bg-primary hover:text-white">
      {children}
    </Link>
  </li>
);

const MobileLink = ({ to, children, close }) => (
  <Link to={to} onClick={close} className="block py-2 hover:bg-white/10">
    {children}
  </Link>
);

const ContactItem = ({ icon, text }) => (
  <div className="flex items-center gap-2">
    <img src={`/icons/${icon}.png`} className="w-5 h-5 invert" />
    <span>{text}</span>
  </div>
);
