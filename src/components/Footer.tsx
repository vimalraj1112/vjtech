"use client";

import { MessageCircle, Heart } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";
import { scrollToSection, getWhatsAppUrl } from "@/lib/utils";

const navLinks = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Experience", id: "experience" },
  { label: "Projects", id: "projects" },
  { label: "Skills", id: "skills" },
  { label: "Contact", id: "contact" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <button
              onClick={() => scrollToSection("home")}
              className="text-xl font-bold tracking-tight cursor-pointer mb-3 block"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              <span className="gradient-text">Vimal</span>
              <span className="text-muted">.</span>
            </button>
            <p className="text-sm text-muted leading-relaxed max-w-xs">
              Software Developer building modern digital experiences.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs text-muted uppercase tracking-wider mb-4 font-semibold">
              Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-sm text-muted hover:text-white transition-colors text-left cursor-pointer"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-xs text-muted uppercase tracking-wider mb-4 font-semibold">
              Connect
            </h4>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/vimalraj1112"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg border border-white/[0.06] text-muted hover:text-white hover:border-white/[0.12] hover:bg-white/[0.04] transition-all duration-300"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg border border-white/[0.06] text-muted hover:text-white hover:border-white/[0.12] hover:bg-white/[0.04] transition-all duration-300"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg border border-white/[0.06] text-muted hover:text-emerald-400 hover:border-emerald-400/20 hover:bg-emerald-400/[0.04] transition-all duration-300"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted flex items-center gap-1.5">
            Designed & Built by Vimal with{" "}
            <Heart className="w-3 h-3 text-red-400 fill-red-400" />
          </p>
          <p className="text-xs text-muted flex items-center gap-1.5">
            © {new Date().getFullYear()} Vimal. Built with{" "}
            <span className="font-semibold text-white">Next.js</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
