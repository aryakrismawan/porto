import { useState, useEffect } from "react";
import Component from "@/components/ui/portfolio-hero";
import { ProfileSection } from "@/components/ProfileSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ProjectDetail } from "@/components/ProjectDetail";
import { projectsData } from "@/data/projects";
import profileAvatar from "@/assets/profile.png";

export default function App() {
  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(null);

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
        el.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  const activeProject = projectsData.find((p) => p.id === selectedProjectId);

  // Render Project Detail Page if a project is selected
  if (selectedProjectId && activeProject) {
    return <ProjectDetail project={activeProject} onBack={handleBackToProjects} />;
  }

  // Render Main Portfolio
  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#C3E41D] selection:text-black">
      {/* 1. Halaman Beranda */}
      <Component
        firstName="M. ARYA"
        lastName="KRISMAWAN"
        avatarUrl={profileAvatar}
      />

      {/* 2. Halaman Profil (Foto di kiri, Deskripsi di kanan) */}
      <ProfileSection avatarUrl={profileAvatar} />

      {/* 3. Halaman Proyek (dengan tombol Detail Proyek) */}
      <ProjectsSection onSelectProject={handleSelectProject} />
    </div>
  );
}
