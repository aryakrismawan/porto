import React, { useState, useEffect, useRef, useMemo } from "react";
import { ChevronDown } from "lucide-react";

// Inline Button component
export const Button = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ className = "", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={`inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

// BlurText animation component
interface BlurTextProps {
  text: string;
  delay?: number;
  animateBy?: "words" | "letters";
  direction?: "top" | "bottom";
  className?: string;
  style?: React.CSSProperties;
}

export const BlurText: React.FC<BlurTextProps> = ({
  text,
  delay = 50,
  animateBy = "words",
  direction = "top",
  className = "",
  style,
}) => {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const segments = useMemo(() => {
    return animateBy === "words" ? text.split(" ") : text.split("");
  }, [text, animateBy]);

  return (
    <p ref={ref} className={`inline-flex flex-wrap ${className}`} style={style}>
      {segments.map((segment, i) => (
        <span
          key={i}
          style={{
            display: "inline-block",
            filter: inView ? "blur(0px)" : "blur(10px)",
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : `translateY(${direction === "top" ? "-20px" : "20px"})`,
            transition: `all 0.5s ease-out ${i * delay}ms`,
          }}
        >
          {segment}
          {animateBy === "words" && i < segments.length - 1 ? "\u00A0" : ""}
        </span>
      ))}
    </p>
  );
};

export interface PortfolioHeroProps {
  firstName?: string;
  lastName?: string;
  tagline?: string;
  avatarUrl?: string;
}

export default function Component({
  firstName = "M. ARYA",
  lastName = "KRISMAWAN",
  tagline = "",
  avatarUrl = "/profile.png",
}: PortfolioHeroProps) {
  const [activeSection, setActiveSection] = useState("beranda");

  useEffect(() => {
    // Pure dark mode enforcement
    document.documentElement.classList.add("dark");
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["beranda", "profil", "proyek"];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { id: "beranda", label: "BERANDA", href: "#beranda" },
    { id: "profil", label: "PROFIL", href: "#profil" },
    { id: "proyek", label: "PROYEK", href: "#proyek" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div 
      id="beranda"
      className="relative min-h-screen text-foreground bg-black overflow-hidden flex flex-col justify-between"
    >
      {/* Background ambient glow effect */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#C3E41D]/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Top-Right Floating Navbar with Low-Opacity Blur (No Burger Icon) */}
      <header className="fixed top-5 right-5 sm:top-6 sm:right-8 z-50">
        <nav 
          className="flex items-center gap-1 sm:gap-2 px-2.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-neutral-900/30 backdrop-blur-md border border-white/10 shadow-lg shadow-black/40"
          aria-label="Main Navigation"
        >
          {menuItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className={`relative px-3 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "text-black bg-[#C3E41D] shadow-sm shadow-[#C3E41D]/30"
                    : "text-neutral-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>
      </header>

      {/* Hero Section */}
      <main className="relative min-h-screen flex flex-col items-center justify-center pt-16">
        {/* Centered Main Name - Always Perfectly Centered */}
        <div className="w-full px-4 flex flex-col items-center justify-center my-auto">
          <div className="relative text-center select-none">
            <div>
              <BlurText
                text={firstName}
                delay={90}
                animateBy="letters"
                direction="top"
                className="font-bold text-[75px] sm:text-[115px] md:text-[150px] lg:text-[190px] leading-[0.78] tracking-tighter uppercase justify-center whitespace-nowrap"
                style={{ color: "#C3E41D", fontFamily: "'Fira Code', monospace" }}
              />
            </div>
            <div>
              <BlurText
                text={lastName}
                delay={90}
                animateBy="letters"
                direction="top"
                className="font-bold text-[75px] sm:text-[115px] md:text-[150px] lg:text-[190px] leading-[0.78] tracking-tighter uppercase justify-center whitespace-nowrap"
                style={{ color: "#C3E41D", fontFamily: "'Fira Code', monospace" }}
              />
            </div>

            {/* Profile Picture */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
              <div 
                onClick={() => scrollToSection("#profil")}
                title="Lihat Profil"
                className="w-[70px] h-[115px] sm:w-[95px] sm:h-[155px] md:w-[115px] md:h-[190px] lg:w-[130px] lg:h-[220px] rounded-full overflow-hidden shadow-2xl transition-all duration-300 hover:scale-110 cursor-pointer border-2 border-black/60 ring-2 ring-[#C3E41D]/30 hover:ring-[#C3E41D]"
              >
                <img
                  src={avatarUrl}
                  alt="Profile"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Tagline (rendered only if provided) */}
        {tagline && (
          <div className="w-full px-6 mb-16 text-center">
            <div className="flex justify-center">
              <BlurText
                text={tagline}
                delay={120}
                animateBy="words"
                direction="top"
                className="text-[16px] sm:text-[19px] md:text-[21px] lg:text-[23px] text-center transition-colors duration-300 text-neutral-400 hover:text-white"
                style={{ fontFamily: "'Antic', sans-serif" }}
              />
            </div>
          </div>
        )}

        {/* Scroll Indicator - Smooth Scroll to Profil */}
        <button
          type="button"
          onClick={() => scrollToSection("#profil")}
          className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 p-2 rounded-full transition-all duration-300 hover:translate-y-1 cursor-pointer group"
          aria-label="Scroll down to Profil"
        >
          <ChevronDown className="w-6 h-6 md:w-8 md:h-8 text-neutral-500 group-hover:text-[#C3E41D] transition-colors duration-300 animate-bounce" />
        </button>
      </main>
    </div>
  );
}

export { Component as PortfolioHero };
