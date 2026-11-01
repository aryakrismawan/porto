import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import TeamMemberCard from "@/components/ui/team-member-card";
import { ProfileSection } from "@/components/ProfileSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ProjectDetail } from "@/components/ProjectDetail";
import { projectsData } from "@/data/projects";
import profileAvatar from "@/assets/profile.png";
import aryaPhoto from "@/assets/arya_photo.png";

export default function App() {
  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(null);
  const [activeSection, setActiveSection] = useState("beranda");

  // Sync with URL hash for browser history, direct links, and back button support
  useEffect(() => {
    const parseHash = () => {
      const hash = window.location.hash;
      const match = hash.match(/#\/(?:project|proyek)\/(\d+)/);
      if (match && match[1]) {
        setSelectedProjectId(Number(match[1]));
      } else {
        setSelectedProjectId(null);
      }
    };

    parseHash();
    window.addEventListener("hashchange", parseHash);
    return () => window.removeEventListener("hashchange", parseHash);
  }, []);

  // Enable magnetic scroll-snap on main portfolio, disable on ProjectDetail
  useEffect(() => {
    const htmlEl = document.documentElement;
    if (!selectedProjectId) {
      htmlEl.classList.add("portfolio-snap");
    } else {
      htmlEl.classList.remove("portfolio-snap");
    }
    return () => htmlEl.classList.remove("portfolio-snap");
  }, [selectedProjectId]);

  // Track centered active section using IntersectionObserver
  useEffect(() => {
    if (selectedProjectId) return;

    const sectionIds = ["beranda", "profil", "proyek"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "-35% 0px -35% 0px",
        threshold: 0.05,
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [selectedProjectId]);

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  const handleSelectProject = (id: number) => {
    window.location.hash = `/proyek/${id}`;
    setSelectedProjectId(id);
  };

  const handleBackToProjects = () => {
    window.location.hash = "proyek";
    setSelectedProjectId(null);
    setTimeout(() => {
      const el = document.getElementById("proyek");
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }, 100);
  };

  const activeProject = projectsData.find((p) => p.id === selectedProjectId);

  // Render Project Detail Page if a project is selected
  if (selectedProjectId && activeProject) {
    return <ProjectDetail project={activeProject} onBack={handleBackToProjects} />;
  }

  const menuItems = [
    { id: "beranda", label: "BERANDA", href: "#beranda" },
    { id: "profil", label: "PROFIL", href: "#profil" },
    { id: "proyek", label: "PROYEK", href: "#proyek" },
  ];

  // Render Main Portfolio (Light Mode with Magnetic Center Scroll & Motion)
  return (
    <div className="min-h-screen bg-white text-zinc-900 selection:bg-zinc-900 selection:text-white">
      {/* Floating Top Navigation with Animated Active Highlight Pill */}
      <header className="fixed top-5 right-5 sm:top-6 sm:right-8 z-50">
        <nav
          className="flex items-center gap-1 sm:gap-1.5 p-1.5 rounded-full bg-white/85 backdrop-blur-md border border-zinc-200/90 shadow-lg shadow-zinc-200/60"
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
                className={`relative px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium tracking-wider transition-colors duration-300 cursor-pointer ${
                  isActive
                    ? "text-white"
                    : "text-zinc-600 hover:text-zinc-900"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeNavHighlight"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    className="absolute inset-0 rounded-full bg-zinc-900 shadow-sm -z-10"
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </a>
            );
          })}
        </nav>
      </header>

      {/* Side Section Progress Dots (Desktop) */}
      <aside
        className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-center gap-3.5"
        aria-label="Section Indicator"
      >
        {menuItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollToSection(item.href)}
              aria-label={`Ke bagian ${item.label}`}
              title={item.label}
              className="group relative flex items-center justify-center p-1 cursor-pointer"
            >
              <span
                className={`block rounded-full transition-all duration-500 ${
                  isActive
                    ? "w-2.5 h-8 bg-zinc-900 shadow-sm"
                    : "w-2 h-2 bg-zinc-300 group-hover:bg-zinc-500"
                }`}
              />
            </button>
          );
        })}
      </aside>

      {/* 1. Halaman Beranda (Editorial TeamMemberCard Fullscreen) */}
      <section
        id="beranda"
        className="relative snap-center snap-always flex flex-col items-center justify-center min-h-screen w-full bg-white px-6 sm:px-10 lg:px-16 xl:px-20 py-12"
      >
        <div className="w-full max-w-screen-2xl mx-auto my-auto">
          <TeamMemberCard
            position="left"
            jobPosition="Frontend & Web Developer"
            firstName="M. Arya"
            lastName="Krismawan"
            imageUrl={profileAvatar}
            description="Lulusan Teknik Informatika yang berfokus pada pembuatan antarmuka web interaktif, berkinerja tinggi, dan responsif dengan pengalaman pengguna yang intuitif."
            onCtaClick={() => scrollToSection("#profil")}
          />
        </div>
      </section>

      {/* 2. Halaman Profil (Foto di kiri, Deskripsi di kanan) */}
      <ProfileSection
        avatarUrl={aryaPhoto}
        isHighlighted={activeSection === "profil"}
      />

      {/* 3. Halaman Proyek (Interactive Showcase Slider) */}
      <ProjectsSection
        onSelectProject={handleSelectProject}
        isHighlighted={activeSection === "proyek"}
      />
    </div>
  );
}
