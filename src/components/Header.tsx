import { Drawer } from "@mui/material";
import { useEffect, useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { MdDarkMode, MdLightMode } from "react-icons/md";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDark(false);
    }
  }, []);

  const toggleTheme = () => {
    const nowDark = document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", nowDark ? "dark" : "light");
    setIsDark(nowDark);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-nav py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <a
          href="#"
          className="text-2xl font-bold font-display tracking-tighter hover:text-primary transition-colors"
        >
          Dev<span className="text-primary">Portfolio</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <a
            href="mailto:anirudhdabral49@gmail.com"
            className="px-5 py-2.5 rounded-full bg-primary text-primary-foreground font-medium text-sm hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5 transition-all duration-300"
          >
            Say Hello
          </a>
          <button
            onClick={toggleTheme}
            className="relative flex items-center w-24 h-10 p-1 bg-muted rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary/20"
            aria-label="Toggle theme"
          >
            <div
              className={`absolute w-9 h-8 bg-background rounded-full shadow-sm transition-transform duration-300 ease-in-out transform ${
                isDark ? "translate-x-13" : "translate-x-0"
              }`}
            />
            <div className="relative flex justify-between items-center w-full px-2 z-10 pointer-events-none">
              {!isDark && (
                <div
                  className={`flex items-center justify-between gap-1 text-[10px] font-bold uppercase tracking-wider transition-colors duration-300 text-foreground w-100`}
                >
                  <MdLightMode size={20} className="text-yellow-500" />
                  <span>Light</span>
                </div>
              )}
              {isDark && (
                <div
                  className={`flex items-center justify-between gap-1 text-[10px] font-bold uppercase tracking-wider transition-colors duration-300 text-foreground w-100`}
                >
                  <span>Dark</span>
                  <MdDarkMode size={20} />
                </div>
              )}
            </div>
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <CiMenuBurger />
        </button>
      </div>
      {/* Mobile Nav */}
      <Drawer
        open={mobileMenuOpen}
        anchor={"top"}
        onClose={() => setMobileMenuOpen(false)}
        sx={{
          "& .MuiDrawer-paper": {
            backgroundColor: "transparent",
            boxShadow: "none",
          },
        }}
      >
        <div className="flex flex-col px-6 py-4 gap-4 glass-nav glass-nav">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-medium text-foreground py-2 border-b border-border/50"
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={toggleTheme}
            className="relative flex items-center w-24 h-10 p-1 bg-muted rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary/20"
            aria-label="Toggle theme"
          >
            <div
              className={`absolute w-9 h-8 bg-background rounded-full shadow-sm transition-transform duration-300 ease-in-out transform ${
                isDark ? "translate-x-13" : "translate-x-0"
              }`}
            />
            <div className="relative flex justify-between items-center w-full px-2 z-10 pointer-events-none">
              {!isDark && (
                <div
                  className={`flex items-center justify-between gap-1 text-[10px] font-bold uppercase tracking-wider transition-colors duration-300 text-foreground w-100`}
                >
                  <MdLightMode size={20} className="text-yellow-500" />
                  <span>Light</span>
                </div>
              )}
              {isDark && (
                <div
                  className={`flex items-center justify-between gap-1 text-[10px] font-bold uppercase tracking-wider transition-colors duration-300 text-foreground w-100`}
                >
                  <span>Dark</span>
                  <MdDarkMode size={20} />
                </div>
              )}
            </div>
          </button>
        </div>
      </Drawer>
    </header>
  );
}
