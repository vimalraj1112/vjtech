"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
  const [showMore, setShowMore] = useState(false);
  const flagshipProjects = projects.filter((p) => p.flagship);
  const otherProjects = projects.filter((p) => !p.flagship);

  return (
    <section id="projects" className="py-24 md:py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          title="Selected Work"
          subtitle="Projects where ideas became working software."
        />

        {/* Flagship Projects */}
        <div className="space-y-6 mb-8">
          {flagshipProjects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <button
                onClick={() => setShowMore(!showMore)}
                className="flex items-center gap-2 mx-auto px-5 py-2.5 rounded-xl border border-white/[0.06] text-sm text-muted hover:text-white hover:border-white/[0.12] hover:bg-white/[0.04] transition-all duration-300 cursor-pointer"
              >
                {showMore ? "Show Less" : "More Projects"}
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${
                    showMore ? "rotate-180" : ""
                  }`}
                />
              </button>
            </motion.div>

            {showMore && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="space-y-6"
              >
                {otherProjects.map((project, i) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    index={i}
                  />
                ))}
              </motion.div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
