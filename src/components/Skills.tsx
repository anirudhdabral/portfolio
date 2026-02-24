import { motion } from "framer-motion";
import { useMemo } from "react";
import { skillCategories, skills } from "../utils/constants";
import { DynamicIcon } from "./DynamicIcon";
import { SectionHeading } from "./SectionHeading";

export function Skills() {
  if (!skills?.length) return null;

  // Group skills by category
  const groupedSkills = useMemo(()=>{
    return skillCategories.map((category)=>{
      return {
        category,
        skills: skills.filter((skill) => skill.category === category),
      };
    });
  },[]);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  return (
    <section id="skills" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeading
          title="Technical Arsenal"
          subtitle="The tools and technologies I use to bring ideas to life."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {groupedSkills.map((item, index) => (
              <motion.div
                key={item.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-card rounded-3xl p-8 border border-border/50 shadow-sm"
              >
                <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                  <div className="w-2 h-8 bg-primary rounded-full" />
                  {item.category}
                </h3>

                <motion.div
                  variants={container}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="grid grid-cols-2 sm:grid-cols-3 gap-4"
                >
                  {item.skills.map((skill) => (
                    <motion.div
                      key={skill.id}
                      className="flex flex-col items-center justify-center p-4 rounded-xl bg-background border border-border/50 hover:border-primary/50 hover:shadow-md transition-all duration-300 group"
                    >
                      <div className="text-4xl text-muted-foreground group-hover:text-primary transition-colors mb-3">
                        <DynamicIcon name={skill.icon} />
                      </div>
                      <span className="text-sm font-medium text-center">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
