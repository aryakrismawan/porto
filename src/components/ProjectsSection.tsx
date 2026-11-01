import React from "react";
import { ChevronUp } from "lucide-react";
import { DestinationCard } from "@/components/ui/card-21";
import { projectsData } from "@/data/projects";

interface ProjectsSectionProps {
  onSelectProject?: (projectId: number) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  const scrollToTop = () => {
    const hero = document.getElementById("beranda");
    if (hero) {
      hero.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDetailClick = (projectId: number) => {
    if (onSelectProject) {
      onSelectProject(projectId);
    } else {
      window.location.hash = `/proyek/${projectId}`;
    }
  };

  // Color theme per project for the glowing gradient and shadow
  const projectThemeColors: Record<number, { theme: string; flag: string }> = {
    1: { theme: "150 50% 25%", flag: "🇮🇩" }, // Lush Indonesian emerald glow
    2: { theme: "250 50% 30%", flag: "⚡" },   // Twilight tech sapphire/purple glow
  };

  return (
    <section id="proyek" className="relative min-h-screen py-28 px-6 sm:px-10 lg:px-16 xl:px-20 bg-black border-t border-neutral-900 flex flex-col justify-between">
      {/* Glow accent */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#C3E41D]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-screen-2xl mx-auto w-full">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-['Plus_Jakarta_Sans']">
            Proyek & <span className="text-[#C3E41D]">Karya Terbaru</span>
          </h2>
          <div className="w-20 h-1 bg-[#C3E41D] mt-5 rounded-full" />
        </div>

        {/* Project Cards Grid with DestinationCard style */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {projectsData.map((project) => {
            const config = projectThemeColors[project.id] || {
              theme: "74 79% 30%",
              flag: "🚀",
            };

            return (
              <div key={project.id} className="w-full h-[480px] sm:h-[520px] md:h-[560px]">
                <DestinationCard
                  imageUrl={project.image}
                  location={project.title}
                  flag={config.flag}
                  stats={`${project.category} • ${project.tech.slice(0, 3).join(", ")}`}
                  href={`#/proyek/${project.id}`}
                  themeColor={config.theme}
                  buttonText="Detail Proyek"
                  onCardClick={() => handleDetailClick(project.id)}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Footer / Back to top button */}
      <footer className="mt-24 pt-8 border-t border-neutral-900 flex items-center justify-center max-w-screen-2xl mx-auto w-full text-xs text-neutral-500">
        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-neutral-300 hover:text-[#C3E41D] transition-colors cursor-pointer"
        >
          <span>Kembali ke Atas</span>
          <ChevronUp className="w-4 h-4 text-[#C3E41D]" />
        </button>
      </footer>
    </section>
  );
};
