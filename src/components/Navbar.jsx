import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { siteConfig, navigation } from "../data";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Top bar */}
      <div className="bg-primary-dark text-white text-sm py-2 px-4 flex flex-wrap justify-center gap-4 md:gap-8">
        <span>Teléfono: {siteConfig.phone}</span>
        <a href={`mailto:${siteConfig.email}`} className="underline">
          Email: {siteConfig.email}
        </a>
      </div>

      {/* Main nav */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-primary">
              🍎 {siteConfig.name}
            </span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-6">
            {navigation.map((item) => (
              <li key={item.path}>
                {item.path.startsWith("/#") ? (
                  <a
                    href={item.path}
                    className="text-gray-700 hover:text-primary font-medium transition-colors"
                  >
                    {item.label}
                  </a>
                ) : (
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `font-medium transition-colors ${
                        isActive
                          ? "text-primary border-b-2 border-primary"
                          : "text-gray-700 hover:text-primary"
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
            className="lg:hidden text-gray-700 focus:outline-none"
            aria-label="Toggle menu"
            type="button"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
          <ul className="lg:hidden bg-white border-t px-4 pb-4 space-y-2">
            {navigation.map((item) => (
              <li key={item.path}>
                {item.path.startsWith("/#") ? (
                  <a
                    href={item.path}
                    onClick={() => setOpen(false)}
                    className="block py-2 text-gray-700 hover:text-primary font-medium"
                  >
                    {item.label}
                  </a>
                ) : (
                  <NavLink
                    to={item.path}
                    onClick={() => setOpen(false)}
                    className="block py-2 text-gray-700 hover:text-primary font-medium"
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
