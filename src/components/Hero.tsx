import { Avatar, useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";
import { hero, resumeURL } from "../utils/constants";

export function Hero() {
  if (!hero) return null;
  const isSmallScreen = useMediaQuery("(max-width:640px)");
  return (
    <section id="about" className="min-h-screen flex items-center pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ">
        <div className="space-y-5 md:space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 border border-primary/20">
              Open to Opportunities
            </span>
            <h1 className="text-4xl md:text-7xl font-bold leading-tight">
              Crafting <span className="text-gradient">digital</span>{" "}
              experiences that matter.
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed text-justify"
          >
            Hi, I'm <span className="text-primary font-bold">Anirudh Dabral</span>{", "}{hero.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap items-center gap-4"
          >
            <div className="flex items-center gap-4">
              {hero.socials.map((social) => (
                <SocialLink
                  key={social.id}
                  href={social.url}
                  icon={<social.icon size={22} />}
                />
              ))}
              <a
                href={resumeURL}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                Resume
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative block"
        >
          {/* Decorative elements for modern minimal look */}
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-purple-500/20 rounded-3xl blur-3xl -z-10 transform scale-95" />

          {/* Abstract creative coding hero visual */}
          <div className="w-full  rounded-3xl border border-border/50 bg-card shadow-2xl overflow-hidden relative">
            <div className="absolute top-0 w-full h-12 bg-muted/50 border-b border-border flex items-center px-4 gap-2">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
              <span className="text-muted-foreground text-sm">{" "}profile.ts</span>
            </div>
            <div className="flex p-8 pt-20 justify-between flex-wrap gap-6">
              <div className="font-mono text-sm text-muted-foreground/80">
                <p>
                  <span className="text-primary">const</span>{" "}
                  <span className="text-purple-500">developer</span> = {"{"}
                </p>
                <p className="ml-4">
                  name: <span className="text-green-500">'{hero.name}'</span>,
                </p>
                <p className="ml-4">
                  role: <span className="text-green-500">'{hero.role}'</span>,
                </p>
                <p className="ml-4">
                  passion:{" "}
                  <span className="text-green-500">'{hero.passion}'</span>,
                </p>
                <p className="ml-4">
                  skills: [
                  {hero.skills.map((skill, index) => (
                    <span key={index} className="text-green-500">
                      '{skill}'{index < hero.skills.length - 1 ? ", " : ""}
                    </span>
                  ))}
                  ]
                </p>
                <p>{"}"};</p>
                <br />
                <p>
                  <span className="text-primary">export default</span>{" "}
                  developer;
                </p>
              </div>
              <Avatar
                alt="Anirudh"
                src="/avatar.png"
                sx={{
                  border: "0.5px solid #ccc",
                  mx: "auto",
                  ...(isSmallScreen
                    ? { width: 100, height: 100 }
                    : { width: 200, height: 200 }),
                }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 rounded-full bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:shadow-md hover:-translate-y-1 transition-all duration-300"
    >
      {icon}
    </a>
  );
}
