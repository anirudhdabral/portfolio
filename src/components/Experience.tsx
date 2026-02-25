import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { experiences } from "../utils/constants";
import { SectionHeading } from "./SectionHeading";

export const Experience = () => {
  if (!experiences?.length) return null;

  return (
    <section id="experience" className="py-24">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <SectionHeading
          title="Work Experience"
          subtitle="My professional journey and the companies I've had the pleasure to work with."
        />

        <div className="relative border-l-2 border-primary/20 ml-3 md:ml-0">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-12 pl-8 relative last:mb-0"
            >
              {/* Timeline Dot */}
              <div className="absolute w-10 h-10 rounded-full bg-background border-4 border-primary flex items-center justify-center -left-[21px] top-0 shadow-sm">
                <Briefcase size={16} className="text-primary" />
              </div>

              <div className="bg-card rounded-2xl p-6 md:p-8 border border-border/50 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold">
                      {exp.position}
                    </h3>
                    <p className="text-lg text-primary font-medium">
                      {exp.company}
                    </p>
                  </div>
                  <span className="inline-block px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-medium whitespace-nowrap h-fit self-start md:self-auto">
                    {exp.startDate} — {exp.endDate}
                  </span>
                </div>

                <p className="text-muted-foreground leading-relaxed text-justify">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
