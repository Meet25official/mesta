import { Outlet, Link, useLocation } from "react-router";
import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Logo } from "./Logo";

export function Layout() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/services", label: "Services" },
    { path: "/work", label: "Our Work" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      if (isHomePage) {
        setIsScrolled(window.scrollY > 100);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  const navbarLight = !isHomePage || isScrolled;

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md transition-all duration-300 ${
        navbarLight
          ? "bg-white/95 border-b border-gray-200"
          : "bg-transparent border-b border-white/10"
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <Logo className="transition-transform group-hover:scale-110" />
              <span className={`text-2xl font-bold transition-colors duration-300 ${navbarLight ? "text-gray-900" : "text-white"}`}>
                MESTA<span className={navbarLight ? "text-[#4a9d2e]" : "text-[#c4ff61]"}>Digital</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-base transition-colors duration-300 ${
                    location.pathname === link.path
                      ? navbarLight ? "text-[#4a9d2e]" : "text-[#c4ff61]"
                      : navbarLight ? "text-gray-600 hover:text-gray-900" : "text-white/80 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className={`md:hidden transition-colors duration-300 ${navbarLight ? "text-gray-900" : "text-white"}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="md:hidden pt-4 pb-6 flex flex-col gap-4"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-base transition-colors duration-300 ${
                    location.pathname === link.path
                      ? navbarLight ? "text-[#4a9d2e]" : "text-[#c4ff61]"
                      : navbarLight ? "text-gray-600 hover:text-gray-900" : "text-white/80 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </motion.div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-20">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              <Link to="/" className="flex items-center gap-3 mb-4 group">
                <Logo className="transition-transform group-hover:scale-110" />
                <h3 className="text-2xl font-bold text-gray-900">
                  MESTA<span className="text-[#4a9d2e]">Digital</span>
                </h3>
              </Link>
              <p className="text-gray-600 text-sm">
                MESTA builds responsive websites, UI/UX experiences, digital marketing strategies and smart automation solutions for modern businesses.
              </p>
            </div>
            <div>
              <h4 className="text-gray-900 font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-600 text-sm hover:text-[#4a9d2e] transition-colors">
                    Responsive Websites
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 text-sm hover:text-[#4a9d2e] transition-colors">
                    UI/UX Design
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 text-sm hover:text-[#4a9d2e] transition-colors">
                    Digital Marketing
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 text-sm hover:text-[#4a9d2e] transition-colors">
                    Mini Automation
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-gray-900 font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/about" className="text-gray-600 text-sm hover:text-[#4a9d2e] transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/work" className="text-gray-600 text-sm hover:text-[#4a9d2e] transition-colors">
                    Our Work
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-600 text-sm hover:text-[#4a9d2e] transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="text-gray-600 text-sm hover:text-[#4a9d2e] transition-colors">
                    Services
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-8">
            <p className="text-gray-500 text-sm text-center">
              © 2026 MESTA. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}