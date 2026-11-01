import React, { useState, useCallback, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Globe,
  Layers,
} from "lucide-react";
import { projectsData } from "@/data/projects";

interface ProjectsSectionProps {
  onSelectProject?: (projectId: number) => void;
  isHighlighted?: boolean;
}

const AUTO_SLIDE_INTERVAL_MS = 4500;

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  onSelectProject,
  isHighlighted = false,
}) => {
  const [[currentIndex, direction], setSlide] = useState<[number, number]>([0, 1]);
  const [isPaused, setIsPaused] = useState(false);
  const pointerStartX = useRef<number | null>(null);
  const totalSlides = projectsData.length;

  const paginate = useCallback(
    (newDirection: number) => {
      setSlide(([prevIndex]) => {
        const nextIndex = (prevIndex + newDirection + totalSlides) % totalSlides;
        return [nextIndex, newDirection];
      });
    },
    [totalSlides]
  );

  // Automatic slide progression from RMB to MEGS (pauses on hover)
  useEffect(() => {
    if (isPaused || totalSlides <= 1) return;
    const timer = window.setInterval(() => {
      paginate(1);
    }, AUTO_SLIDE_INTERVAL_MS);

    return () => window.clearInterval(timer);
  }, [isPaused, currentIndex, paginate, totalSlides]);

  const goToSlide = (targetIndex: number) => {
    if (targetIndex === currentIndex) return;
    const newDirection = targetIndex > currentIndex ? 1 : -1;
    setSlide([targetIndex, newDirection]);
  };

  // Keyboard left/right arrow support when section is active
  useEffect(() => {
    if (!isHighlighted) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") paginate(-1);
      if (e.key === "ArrowRight") paginate(1);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [paginate, isHighlighted]);

  const handleDetailClick = (projectId: number) => {
    if (onSelectProject) {
      onSelectProject(projectId);
    } else {
      window.location.hash = `/proyek/${projectId}`;
    }
  };

  const handlePointerDown = (e: React.PointerEvent) => {
    pointerStartX.current = e.clientX;
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (pointerStartX.current === null) return;
    const deltaX = e.clientX - pointerStartX.current;
    if (deltaX < -70) {
      paginate(1);
    } else if (deltaX > 70) {
      paginate(-1);
    }
    pointerStartX.current = null;
  };

  const activeProject = projectsData[currentIndex] || projectsData[0];
  const formattedIndex = String(currentIndex + 1).padStart(2, "0");
  const formattedTotal = String(totalSlides).padStart(2, "0");

  return (
    <section
      id="proyek"
      className="relative snap-center min-h-screen py-20 sm:py-24 px-6 sm:px-10 lg:px-16 xl:px-20 bg-white border-t border-zinc-200/80 flex flex-col justify-center overflow-hidden"
    >
      {/* Subtle radial spotlight when section is centered/highlighted */}
      <div
        className={`pointer-events-none absolute inset-0 transition-opacity duration-700 ${
          isHighlighted ? "opacity-100" : "opacity-0"
        }`}
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(24,24,27,0.035) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-screen-2xl mx-auto w-full relative z-10">
        {/* Section Header + Top Slider Controls */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 gap-6"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-50 border border-zinc-200 text-zinc-600 text-xs font-medium mb-4 tracking-[0.25em] uppercase shadow-2xs">
              <Layers className="w-3.5 h-3.5 text-zinc-900" />
              Portofolio Interaktif
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extralight tracking-tight text-zinc-900 font-['Plus_Jakarta_Sans']">
              Proyek & <span className="font-semibold text-zinc-900">Karya Terbaru</span>
            </h2>
          </div>

          {/* Editorial Prev / Next Controls + Slide Counter */}
          <div className="flex items-center gap-4 self-start md:self-end">
            <div className="text-sm font-mono tracking-widest text-zinc-400 mr-2">
              <span className="text-zinc-900 font-bold text-base">{formattedIndex}</span>
              <span className="mx-1.5">/</span>
              <span>{formattedTotal}</span>
            </div>

            <button
              type="button"
              onClick={() => paginate(-1)}
              aria-label="Proyek Sebelumnya"
              title="Proyek Sebelumnya"
              className="group flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full border border-zinc-300 bg-white text-zinc-700 transition-all duration-300 hover:border-zinc-900 hover:bg-zinc-900 hover:text-white active:scale-95 shadow-sm cursor-pointer"
            >
              <ArrowLeft className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-0.5" />
            </button>

            <button
              type="button"
              onClick={() => paginate(1)}
              aria-label="Proyek Selanjutnya"
              title="Proyek Selanjutnya"
              className="group flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full border border-zinc-300 bg-white text-zinc-700 transition-all duration-300 hover:border-zinc-900 hover:bg-zinc-900 hover:text-white active:scale-95 shadow-sm cursor-pointer"
            >
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5" />
            </button>
          </div>
        </motion.div>

        {/* Interactive Project Carousel Stage */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerUp}
          className="relative w-full"
        >
          <motion.div
            key={activeProject.id}
            initial={{ opacity: 0, x: direction >= 0 ? 48 : -48 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch rounded-3xl bg-zinc-50/90 border p-5 sm:p-8 lg:p-10 transition-shadow duration-500 ${
              isHighlighted
                ? "border-zinc-900/25 shadow-2xl shadow-zinc-300/80 ring-4 ring-zinc-900/5"
                : "border-zinc-200/90 shadow-xl shadow-zinc-200/50"
            }`}
          >
            {/* Left Column (7 cols): Interactive Visual Showcase Frame */}
            <div className="lg:col-span-7 flex flex-col">
              <div
                onClick={() => handleDetailClick(activeProject.id)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    handleDetailClick(activeProject.id);
                  }
                }}
                className="group relative w-full h-[300px] sm:h-[380px] lg:h-[440px] rounded-2xl overflow-hidden border border-zinc-200/90 bg-white shadow-md flex flex-col cursor-pointer"
              >
                {/* Browser-style Top Bar */}
                <div className="flex items-center justify-between px-4 py-2.5 bg-zinc-100/90 border-b border-zinc-200/80 shrink-0">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-zinc-300 group-hover:bg-red-400 transition-colors" />
                    <span className="w-2.5 h-2.5 rounded-full bg-zinc-300 group-hover:bg-amber-400 transition-colors" />
                    <span className="w-2.5 h-2.5 rounded-full bg-zinc-300 group-hover:bg-emerald-400 transition-colors" />
                  </div>
                  <div className="px-3 py-0.5 rounded-md bg-white border border-zinc-200/80 text-[11px] font-mono text-zinc-400 truncate max-w-[220px] sm:max-w-xs">
                    {activeProject.liveUrl.replace(/^https?:\/\//, "")}
                  </div>
                  <span className="text-[11px] font-mono text-zinc-400 uppercase">
                    {activeProject.category}
                  </span>
                </div>

                {/* Project Visual Image */}
                <div className="relative flex-1 w-full overflow-hidden bg-white flex items-center justify-center p-6 sm:p-10">
                  <img
                    src={activeProject.image}
                    alt={activeProject.title}
                    draggable={false}
                    className={`max-h-full max-w-full transition-transform duration-700 ease-out group-hover:scale-105 ${
                      activeProject.imageFit === "contain"
                        ? "w-auto h-full max-h-[220px] sm:max-h-[280px] object-contain object-center"
                        : "w-full h-full object-cover object-top"
                    }`}
                  />
                  {/* Hover Overlay Badge */}
                  <div className="absolute inset-0 bg-zinc-900/0 group-hover:bg-zinc-900/10 transition-colors duration-300 flex items-end justify-end p-4">
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-zinc-900/90 text-white text-xs font-medium opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
                      Buka Detail & Live Web <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column (5 cols): Editorial Project Details & Actions */}
            <div className="lg:col-span-5 flex flex-col justify-between py-2">
              <div>
                {/* Index + Category Eyebrow */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 rounded-full bg-zinc-900 text-white text-xs font-mono font-semibold">
                    PROYEK {formattedIndex}
                  </span>
                  <span className="text-xs font-medium tracking-[0.2em] text-zinc-500 uppercase">
                    {activeProject.category}
                  </span>
                </div>

                {/* Project Title & Subtitle */}
                <h3 className="text-2xl sm:text-4xl font-bold tracking-tight text-zinc-900 mb-2">
                  {activeProject.title}
                </h3>
                <p className="text-sm sm:text-base font-medium text-zinc-500 mb-6">
                  {activeProject.subtitle}
                </p>

                {/* Project Description */}
                <p className="text-zinc-600 text-sm sm:text-base leading-relaxed mb-8">
                  {activeProject.description}
                </p>

                {/* Tech Stack Pills */}
                <div className="mb-8">
                  <p className="text-[11px] font-mono tracking-[0.2em] text-zinc-400 uppercase mb-3">
                    Teknologi Utama
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {activeProject.tech.map((techItem, idx) => (
                      <span
                        key={idx}
                        className="px-3.5 py-1.5 rounded-xl bg-white border border-zinc-200/90 text-xs sm:text-sm font-medium text-zinc-700 shadow-2xs"
                      >
                        {techItem}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-zinc-200/80">
                <button
                  type="button"
                  onClick={() => handleDetailClick(activeProject.id)}
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white font-semibold text-sm transition-all shadow-md shadow-zinc-300/80 cursor-pointer group"
                >
                  <span>Detail Proyek</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>

                <a
                  href={activeProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white hover:bg-zinc-100 border border-zinc-200 text-zinc-800 font-semibold text-sm transition-all shadow-2xs cursor-pointer"
                >
                  <Globe className="w-4 h-4" />
                  <span>Kunjungi Website</span>
                  <ArrowUpRight className="w-4 h-4 opacity-60" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Slide Selector / Pagination Pills */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
            {projectsData.map((item, idx) => {
              const isActive = idx === currentIndex;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => goToSlide(idx)}
                  className={`relative overflow-hidden flex items-center gap-3 px-4 py-2.5 rounded-2xl border text-left transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "bg-zinc-900 border-zinc-900 text-white shadow-md shadow-zinc-300/70"
                      : "bg-zinc-50 border-zinc-200 text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900"
                  }`}
                >
                  <span className="text-xs font-mono font-bold text-zinc-400">
                    0{idx + 1}
                  </span>
                  <span className="text-xs sm:text-sm font-semibold truncate max-w-[180px] sm:max-w-[220px]">
                    {item.title}
                  </span>

                  {/* Auto-slide visual progress bar on active tab */}
                  {isActive && !isPaused && (
                    <motion.span
                      key={`progress-${currentIndex}`}
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{
                        duration: AUTO_SLIDE_INTERVAL_MS / 1000,
                        ease: "linear",
                      }}
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/70 origin-left"
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
