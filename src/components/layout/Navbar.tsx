"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS, SCHOOL_NAME_AR } from "@/lib/constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl shadow-[0_8px_40px_rgba(87,0,0,0.08)] rounded-b-[2.5rem]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-screen-2xl mx-auto px-6 lg:px-12 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex flex-col group">
          <span className="text-xl font-headline font-bold text-[#570000] leading-tight group-hover:text-[#ad2c00] transition-colors duration-300">
            {SCHOOL_NAME_AR}
          </span>
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#5a413d]/70 font-body">
            Pure Essence School
          </span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`relative font-body text-sm font-semibold transition-colors duration-200 ${
                    isActive
                      ? "text-[#570000]"
                      : "text-[#5a413d] hover:text-[#570000]"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#ad2c00] rounded-full"
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="/admissions"
            className="px-7 py-3 bg-[#570000] text-white font-body font-bold text-sm rounded-full hover:bg-[#ad2c00] hover:scale-105 transition-all duration-300 shadow-lg shadow-[#570000]/20 btn-press"
          >
            Apply Now
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden flex flex-col gap-1.5 p-2 rounded-xl hover:bg-[#f4f3f2] transition-colors"
          aria-label="Toggle menu"
        >
          <motion.span
            animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            className="block w-6 h-0.5 bg-[#570000] rounded-full origin-center"
          />
          <motion.span
            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
            className="block w-6 h-0.5 bg-[#570000] rounded-full"
          />
          <motion.span
            animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            className="block w-6 h-0.5 bg-[#570000] rounded-full origin-center"
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden bg-white/95 backdrop-blur-2xl border-t border-[#e2bfb9]/30"
          >
            <div className="max-w-screen-2xl mx-auto px-6 py-6 space-y-1">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className={`block py-3 px-4 rounded-xl font-body font-semibold text-base transition-all ${
                      pathname === link.href
                        ? "bg-[#ffdad4] text-[#570000]"
                        : "text-[#5a413d] hover:bg-[#f4f3f2] hover:text-[#570000]"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: NAV_LINKS.length * 0.05 }}
                className="pt-4"
              >
                <Link
                  href="/admissions"
                  className="block w-full text-center py-4 bg-[#570000] text-white font-bold rounded-full hover:bg-[#ad2c00] transition-all"
                >
                  Apply Now
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
