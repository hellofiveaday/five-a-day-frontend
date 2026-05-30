import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { siteConfig, navigation } from "../data";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Top contact bar — dark purple, larger font */}
      <div className="bg-primary-dark text-white text-base py-2.5 px-4 flex flex-wrap justify-center gap-4 md:gap-10">
        <a
          href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
          className="flex items-center gap-2 hover:text-accent-green transition-colors"
        >
          <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          {siteConfig.phone}
        </a>
        <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2 hover:text-accent-green transition-colors">
          <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          {siteConfig.email}
        </a>
      </div>

      {/* Main nav — white, sticky */}
      <nav className={`bg-white/95 backdrop-blur-sm sticky top-0 z-50 transition-shadow duration-300 ${scrolled ? "shadow-lg" : "shadow-sm"}`}>
        <div className="max-w-[980px] mx-auto px-4 flex items-center justify-between h-32">
          <Link to="/" className="flex items-center shrink-0">
            <img src="/images/logo_transparent.png" alt="Five a Day English Academy" className="h-28 w-auto" />
          </Link>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-4">
            {navigation.map((item) => (
              <li key={item.path}>
                {item.path.startsWith("#") ? (
                  <a
                    href={item.path}
                    className="font-heading text-xs font-semibold text-primary-dark hover:text-primary transition-colors uppercase tracking-wide"
                  >
                    {item.label}
                  </a>
                ) : (
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `font-heading text-xs font-semibold uppercase tracking-wide transition-colors ${
                        isActive
                          ? "text-primary border-b-2 border-primary pb-1"
                          : "text-primary-dark hover:text-primary"
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-primary-dark focus:outline-none"
            aria-label="Toggle menu"
            type="button"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <ul className="lg:hidden bg-white border-t border-purple-100 px-4 pb-4 space-y-1">
            {navigation.map((item) => (
              <li key={item.path}>
                {item.path.startsWith("#") ? (
                  <a
                    href={item.path}
                    onClick={() => setOpen(false)}
                    className="block py-3 font-heading text-sm font-semibold text-primary-dark hover:text-primary uppercase tracking-wide"
                  >
                    {item.label}
                  </a>
                ) : (
                  <NavLink
                    to={item.path}
                    onClick={() => setOpen(false)}
                    className="block py-3 font-heading text-sm font-semibold text-primary-dark hover:text-primary uppercase tracking-wide"
                  >
                    {item.label}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>
        )}
      </nav>
    </>
  );
}
