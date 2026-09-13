"use client";

import { motion } from "framer-motion";
import {
  Layout,
  Server,
  Database,
  Wrench,
} from "lucide-react";
import SectionHeading from "./SectionHeading";
import SpotlightCard from "./SpotlightCard";
import { skillCategories } from "@/data/skills";
import { fadeInUp, staggerContainer } from "@/lib/animations";

type IconComponent = React.FC<{ className?: string }>;

const iconMap: Record<string, IconComponent> = {
  Layout,
  Server,
  Database,
  Wrench,
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          title="Technologies I Work With"
          subtitle="Tools and technologies I use to build real-world applications."
        />

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skillCategories.map((category) => {
            const Icon = iconMap[category.icon] || Layout;
            return (
              <motion.div key={category.title} variants={fadeInUp}>
                <SpotlightCard className="p-6 h-full group" spotlightColor="rgba(59, 130, 246, 0.06)">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="p-2 rounded-lg bg-violet-500/10 border border-violet-500/20 group-hover:border-violet-500/40 transition-colors">
                      <Icon className="w-4 h-4 text-violet-400" />
                    </div>
                    <h3
                      className="text-sm font-semibold uppercase tracking-wider"
                      style={{ fontFamily: "var(--font-space-grotesk)" }}
                    >
                      {category.title}
                    </h3>
                  </div>

                  <div className="space-y-2">
                    {category.skills.map((skill) => (
                      <motion.div
                        key={skill.name}
                        className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-white/[0.03] transition-colors group/skill"
                        whileHover={{ x: 4 }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 25,
                        }}
                      >
                        <span className="text-sm font-medium">
                          {skill.name}
                        </span>
                        <span className="text-xs text-muted opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300 hidden sm:block">
                          {skill.description}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
