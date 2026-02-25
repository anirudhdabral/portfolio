import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { projects } from "../utils/constants";
import type { TProject } from "../utils/types";
import { SectionHeading } from "./SectionHeading";

export function Projects() {
  if (!projects?.length) return null;

  return (
    <section id="projects" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeading
          title="Featured Projects"
          subtitle="A selection of recent work I've built. From simple landing pages to complex web applications."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: TProject; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group rounded-2xl bg-card border border-border/60 overflow-hidden hover-elevate flex flex-col h-full"
    >
      <div className="aspect-[16/10] overflow-hidden relative border-b border-border/60 bg-muted">
        {/* Placeholder if image fails, normally you'd use the project.imageUrl */}
        <img
          src={
            project.image ||
            `https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=500&fit=crop`
          }
          alt={project.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            e.currentTarget.src =
              "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=500&fit=crop";
          }}
        />

        <div className="absolute inset-0 bg-foreground/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-background text-foreground hover:scale-110 transition-transform"
              title="Live Demo"
            >
              <ExternalLink size={20} />
            </a>
          )}
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
          {project.name}
        </h3>
        <p className="text-muted-foreground text-sm mb-6 flex-grow text-justify">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {project.clientProject && (
            <span className="px-2.5 py-1 rounded-md bg-primary text-primary-foreground  text-xs font-medium border border-border/50">
              Client Project
            </span>
          )}
          {project.technologies?.map((tech, i) => (
            <span
              key={i}
              className="px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground text-xs font-medium border border-border/50"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
