"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { navItems } from "@/data/navigation";
import { personalInfo } from "@/data/personal";
import { Button } from "@/components/ui/Button";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Active section detection
      const sections = ["hero", "about", "expertise", "projects", "services", "process", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
        isScrolled
          ? "bg-[#09090B]/85 backdrop-blur-md border-b border-white/10 py-3 shadow-lg shadow-black/20"
          : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Name */}
          <Link
            href="#hero"
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="Sahil Arman - Home"
          >
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center font-mono font-bold text-white text-sm shadow-md shadow-violet-600/30 group-hover:scale-105 transition-transform">
              SA
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold tracking-wider text-[#F4F4F5] uppercase group-hover:text-white transition-colors">
                {personalInfo.name}
              </span>
              <span className="text-[10px] font-mono tracking-widest text-violet-400">
                SENIOR DEVELOPER
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-[#151519]/80 border border-white/5 rounded-full px-4 py-1.5 backdrop-blur-sm">
            {navItems.map((item) => {
              const sectionId = item.href.replace("#", "");
              const isActive = activeSection === sectionId;

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    "px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200",
                    isActive
                      ? "text-white bg-violet-600/20 text-violet-300 border border-violet-500/30"
                      : "text-[#A1A1AA] hover:text-[#F4F4F5] hover:bg-white/5"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              href="#contact"
              variant="primary"
              size="sm"
              rightIcon={<ArrowUpRight className="w-3.5 h-3.5" />}
            >
              Let&apos;s Talk
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-[#A1A1AA] hover:text-white hover:bg-white/5 transition-colors focus:outline-none focus:ring-2 focus:ring-violet-500"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[61px] bg-[#09090B]/95 backdrop-blur-xl border-b border-white/10 px-6 py-6 shadow-2xl transition-all">
          <div className="flex flex-col space-y-3">
            {navItems.map((item) => {
              const sectionId = item.href.replace("#", "");
              const isActive = activeSection === sectionId;

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={closeMobileMenu}
                  className={cn(
                    "px-4 py-2.5 rounded-lg text-sm font-medium transition-colors",
                    isActive
                      ? "text-violet-400 bg-violet-500/10 border border-violet-500/20"
                      : "text-[#A1A1AA] hover:text-white hover:bg-white/5"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
            <div className="pt-4 border-t border-white/10">
              <Button
                href="#contact"
                variant="primary"
                size="md"
                className="w-full justify-center"
                onClick={closeMobileMenu}
              >
                Let&apos;s Talk
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
