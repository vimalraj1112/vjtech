"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "./SocialIcons";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [4, -4]), {
    stiffness: 200,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-4, 4]), {
    stiffness: 200,
    damping: 30,
  });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  // Open the project's live URL when the card is clicked/tapped.
  const openProject = (e?: React.SyntheticEvent) => {
    e?.preventDefault();
    if (project.live) window.open(project.live, "_blank", "noopener,noreferrer");
  };

  const handleCardKeyDown = (e: React.KeyboardEvent) => {
    if (project.live && (e.key === "Enter" || e.key === " ")) {
      e.preventDefault();
      openProject();
    }
  };

  const clickable = Boolean(project.live);

  return (
    <motion.div
      className={`relative ${clickable ? "cursor-pointer" : ""} ${project.flagship ? "md:col-span-2" : ""}`}
      onClick={clickable ? openProject : undefined}
      onKeyDown={clickable ? handleCardKeyDown : undefined}
      role={clickable ? "link" : undefined}
      tabIndex={clickable ? 0 : undefined}
      aria-label={clickable ? `Open ${project.title} live demo` : undefined}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <motion.div
        className="group relative rounded-2xl border border-white/[0.06] bg-card overflow-hidden transition-colors duration-500 hover:border-white/[0.12] h-full"
        style={{
          perspective: 800,
          rotateX,
          rotateY,
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Gradient border effect */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: "linear-gradient(135deg, rgba(59,130,246,0.1), rgba(139,92,246,0.1), rgba(6,182,212,0.1))",
            mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            maskComposite: "exclude",
            WebkitMaskComposite: "xor",
            padding: "1px",
          }}
        />

        <div className={`p-6 md:p-8 ${project.flagship ? "md:flex md:gap-8" : ""}`}>
          {/* Screenshot Area */}
          <div className={`rounded-xl overflow-hidden mb-6 bg-[#0B0D10] border border-white/[0.04] ${project.flagship ? "md:w-1/2 md:mb-0" : ""}`}>
            <div className="relative h-52 md:h-64 overflow-hidden group/screenshot">
              {project.image ? (
                <>
                  <img
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover/screenshot:scale-105"
                  />
                  {/* Subtle bottom gradient fade */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D10]/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                    <span
                      className="text-lg font-bold text-white drop-shadow-lg"
                      style={{ fontFamily: "var(--font-space-grotesk)" }}
                    >
                      {project.title}
                    </span>
                    <span className="text-[10px] text-white/60 bg-black/40 backdrop-blur-sm px-2 py-1 rounded-md">
                      {project.category}
                    </span>
                  </div>
                </>
              ) : (
                <div className="h-full flex items-center justify-center relative">
                  {/* Abstract fallback visualization */}
                  <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-4 left-4 right-4 h-2 rounded-full bg-white/[0.06]" />
                    <div className="absolute top-8 left-4 w-1/3 h-1 rounded-full bg-white/[0.04]" />
                    <div className="absolute top-8 left-1/3 ml-2 w-1/4 h-1 rounded-full bg-violet-500/20" />
                    <div className="absolute top-14 left-4 right-4 bottom-4 grid grid-cols-3 gap-2">
                      {[...Array(6)].map((_, j) => (
                        <div
                          key={j}
                          className="rounded-lg bg-white/[0.03] border border-white/[0.04]"
                          style={{ animationDelay: `${j * 0.1}s` }}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="relative z-10 text-center">
                    <div
                      className="text-2xl font-bold gradient-text mb-1"
                      style={{ fontFamily: "var(--font-space-grotesk)" }}
                    >
                      {project.title}
                    </div>
                    <div className="text-xs text-muted">{project.category}</div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Content */}
          <div className={project.flagship ? "md:w-1/2" : ""}>
            <div className="flex items-start justify-between gap-4 mb-3">
              <div>
                <h3
                  className="text-xl md:text-2xl font-bold"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  {project.title}
                </h3>
                <p className="text-sm text-violet-400 mt-1">{project.category}</p>
              </div>
            </div>

            <p className="text-sm text-muted leading-relaxed mb-5">
              {project.description}
            </p>

            {/* Features */}
            <div className="mb-5">
              <div className="flex flex-wrap gap-x-4 gap-y-1.5">
                {project.features.map((feature) => (
                  <span
                    key={feature}
                    className="text-xs text-muted flex items-center gap-1.5"
                  >
                    <span className="w-1 h-1 rounded-full bg-violet-400" />
                    {feature}
                  </span>
                ))}
              </div>
            </div>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-2 mb-5">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-xs font-medium rounded-md bg-blue-500/10 text-blue-300 border border-blue-500/20"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex items-center gap-3">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  onKeyDown={(e) => e.stopPropagation()}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg border border-white/[0.06] text-sm text-muted hover:text-white hover:border-white/[0.12] hover:bg-white/[0.04] transition-all duration-300"
                >
                  <GithubIcon className="w-4 h-4" />
                  Code
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  onKeyDown={(e) => e.stopPropagation()}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-white transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/20"
                  style={{
                    background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
                  }}
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
