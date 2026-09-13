"use client";

import { motion } from "framer-motion";
import { MessageCircle, ExternalLink } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";
import SectionHeading from "./SectionHeading";
import SpotlightCard from "./SpotlightCard";
import MagneticButton from "./MagneticButton";
import { getWhatsAppUrl } from "@/lib/utils";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 relative">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeading
          title="Let's Build Something Great."
          subtitle="Have an opportunity, project idea or just want to talk about software? Feel free to reach out."
        />

        <motion.div
          className="grid md:grid-cols-2 gap-6 mb-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* WhatsApp Card */}
          <motion.div variants={fadeInUp}>
            <SpotlightCard className="p-8 h-full group" spotlightColor="rgba(34, 197, 94, 0.06)">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 group-hover:border-emerald-500/40 transition-colors">
                  <MessageCircle className="w-5 h-5 text-emerald-400" />
                </div>
                <h3
                  className="text-lg font-bold"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  WhatsApp
                </h3>
              </div>

              <p className="text-muted text-sm mb-2">
                Let&apos;s chat directly
              </p>
              <p className="text-white font-mono text-sm mb-6">
                +91 90809 49422
              </p>

              <MagneticButton
                href={getWhatsAppUrl()}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/20 cursor-pointer bg-gradient-to-r from-emerald-500 to-green-600"
              >
                <MessageCircle className="w-4 h-4" />
                Chat Now
              </MagneticButton>
            </SpotlightCard>
          </motion.div>

          {/* Social Card */}
          <motion.div variants={fadeInUp}>
            <SpotlightCard className="p-8 h-full group" spotlightColor="rgba(59, 130, 246, 0.06)">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/20 group-hover:border-blue-500/40 transition-colors">
                  <ExternalLink className="w-5 h-5 text-blue-400" />
                </div>
                <h3
                  className="text-lg font-bold"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  Connect
                </h3>
              </div>

              <p className="text-muted text-sm mb-6">
                Find me on social platforms
              </p>

              <div className="flex gap-3">
                <a
                  href="https://github.com/vimalraj1112"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl border border-white/[0.06] text-muted hover:text-white hover:border-white/[0.12] hover:bg-white/[0.04] transition-all duration-300"
                  aria-label="GitHub"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl border border-white/[0.06] text-muted hover:text-white hover:border-white/[0.12] hover:bg-white/[0.04] transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>
              </div>
            </SpotlightCard>
          </motion.div>
        </motion.div>

        {/* Large WhatsApp CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center p-8 rounded-2xl border border-emerald-500/20 bg-emerald-500/[0.04] hover:bg-emerald-500/[0.08] transition-all duration-500 group"
          >
            <MessageCircle className="w-8 h-8 text-emerald-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
            <p
              className="text-xl font-bold mb-1"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Start a Conversation
            </p>
            <p className="text-sm text-muted">
              Open WhatsApp and send a message
            </p>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
