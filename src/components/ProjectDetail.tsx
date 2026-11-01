import React, { useEffect } from "react";
import { ArrowLeft, Lightbulb, TrendingUp, FileText, Globe } from "lucide-react";
import type { ProjectItem } from "@/data/projects";

const GithubIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
    />
  </svg>
);

interface ProjectDetailProps {
  project: ProjectItem;
  onBack: () => void;
}

export const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onBack }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen bg-black text-white py-12 px-6 sm:px-10 lg:px-16 xl:px-20 selection:bg-[#C3E41D] selection:text-black">
      {/* Background ambient glow effect */}
      <div className="fixed top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C3E41D]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-screen-2xl mx-auto w-full relative z-10">
        {/* Navigation Bar / Back button */}
        <div className="flex items-center justify-start mb-10 pb-6 border-b border-neutral-900">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-neutral-900/60 hover:bg-neutral-800 border border-neutral-800 text-neutral-300 hover:text-[#C3E41D] transition-all cursor-pointer font-medium text-sm group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Kembali ke Beranda</span>
          </button>
        </div>

        {/* Project Header with Title and Action Buttons (Kunjungi Website & GitHub) */}
        <div className="mb-10">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-['Plus_Jakarta_Sans'] mb-6">
            {project.title}
          </h1>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#C3E41D] hover:bg-[#b0ce19] text-black font-bold text-sm tracking-wider uppercase transition-all shadow-md shadow-[#C3E41D]/20 cursor-pointer"
            >
              <Globe className="w-4 h-4" /> Kunjungi Website
            </a>

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-neutral-200 hover:text-white font-semibold text-sm tracking-wider uppercase transition-all shadow-md shadow-black/40 cursor-pointer"
              >
                <GithubIcon className="w-4 h-4" /> GitHub
              </a>
            )}
          </div>
        </div>

        {/* Hero Image Banner */}
        <div className="relative aspect-[16/8] w-full rounded-3xl overflow-hidden border border-neutral-800 bg-neutral-950 mb-14 shadow-2xl group">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        </div>

        {/* 3 Core Points: Deskripsi, Key Insight, Outcome */}
        <div className="space-y-10 mb-16">
          {/* 1. Deskripsi */}
          <section className="p-8 sm:p-10 rounded-3xl bg-neutral-950/70 border border-neutral-800/80 backdrop-blur-sm">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <FileText className="w-6 h-6 text-[#C3E41D]" />
              Deskripsi
            </h2>
            <p className="text-neutral-300 text-base sm:text-lg lg:text-xl leading-relaxed">
              {project.deskripsi}
            </p>
          </section>

          {/* 2. Key Insight */}
          <section className="p-8 sm:p-10 rounded-3xl bg-neutral-950/70 border border-neutral-800/80 backdrop-blur-sm">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <Lightbulb className="w-6 h-6 text-[#C3E41D]" />
              Key Insight
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {project.keyInsight.map((insight, index) => (
                <div
                  key={index}
                  className="p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800/80 hover:border-[#C3E41D]/40 transition-colors flex flex-col justify-between"
                >
                  <div className="text-xs font-mono text-[#C3E41D] font-bold mb-3 tracking-widest uppercase">
                    Insight 0{index + 1}
                  </div>
                  <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
                    {insight}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* 3. Outcome */}
          <section className="p-8 sm:p-10 rounded-3xl bg-neutral-950/70 border border-neutral-800/80 backdrop-blur-sm">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <TrendingUp className="w-6 h-6 text-[#C3E41D]" />
              Outcome
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {project.outcome.map((item, index) => (
                <div
                  key={index}
                  className="p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800/80 hover:border-[#C3E41D]/40 transition-colors flex flex-col justify-between"
                >
                  <div className="w-2.5 h-2.5 rounded-full bg-[#C3E41D] mb-3" />
                  <p className="text-neutral-300 text-sm sm:text-base leading-relaxed font-medium">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Bottom Navigation */}
        <div className="pt-10 border-t border-neutral-900 flex items-center justify-between">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-neutral-300 hover:text-[#C3E41D] transition-colors cursor-pointer text-sm font-medium"
          >
            <ArrowLeft className="w-4 h-4" /> Kembali ke Beranda
          </button>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-xs text-neutral-500 hover:text-white transition-colors cursor-pointer"
          >
            Kembali ke Atas
          </button>
        </div>
      </div>
    </div>
  );
};
