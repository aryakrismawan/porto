import React, { useEffect, useState } from "react";
import {
  ArrowLeft,
  Lightbulb,
  TrendingUp,
  FileText,
  Globe,
  RotateCw,
  Monitor,
  Tablet,
  Smartphone,
  Maximize2,
  Minimize2,
  Image as ImageIcon,
  MousePointerClick,
} from "lucide-react";
import type { ProjectItem } from "@/data/projects";

interface ProjectDetailProps {
  project: ProjectItem;
  onBack: () => void;
}

type ViewportSize = "desktop" | "tablet" | "mobile";
type PreviewMode = "live" | "image";

export const ProjectDetail: React.FC<ProjectDetailProps> = ({
  project,
  onBack,
}) => {
  const [viewport, setViewport] = useState<ViewportSize>("desktop");
  const [previewMode, setPreviewMode] = useState<PreviewMode>("live");
  const [isExpanded, setIsExpanded] = useState(false);
  const [iframeKey, setIframeKey] = useState(0);
  const [isIframeLoading, setIsIframeLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Fallback timeout so the loading overlay never gets stuck if external scripts delay onLoad
  useEffect(() => {
    if (!isIframeLoading) return;
    const timer = window.setTimeout(() => {
      setIsIframeLoading(false);
    }, 2500);
    return () => window.clearTimeout(timer);
  }, [isIframeLoading, iframeKey]);

  const handleReloadIframe = () => {
    setIsIframeLoading(true);
    setIframeKey((prev) => prev + 1);
  };

  const viewportWidthClass: Record<ViewportSize, string> = {
    desktop: "w-full",
    tablet: "w-full max-w-[768px]",
    mobile: "w-full max-w-[390px]",
  };

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 py-12 px-6 sm:px-10 lg:px-16 xl:px-20 selection:bg-zinc-900 selection:text-white">
      <div className="max-w-screen-2xl mx-auto w-full relative z-10">
        {/* Navigation Bar / Back button */}
        <div className="flex items-center justify-between mb-10 pb-6 border-b border-zinc-200">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white hover:bg-zinc-900 border border-zinc-200 text-zinc-700 hover:text-white transition-all cursor-pointer font-medium text-sm shadow-sm group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Kembali ke Daftar Proyek</span>
          </button>

          <span className="text-xs font-mono tracking-[0.25em] text-zinc-400 uppercase hidden sm:inline">
            {project.category}
          </span>
        </div>

        {/* Project Header with Title, Tech Stack, and Action Button */}
        <div className="mb-10 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div>
            <p className="text-xs sm:text-sm font-mono tracking-[0.2em] text-zinc-500 uppercase mb-2.5">
              {project.subtitle}
            </p>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-900 font-['Plus_Jakarta_Sans'] mb-5">
              {project.title}
            </h1>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((techItem, idx) => (
                <span
                  key={idx}
                  className="px-3.5 py-1 rounded-full bg-white border border-zinc-200 text-xs font-medium text-zinc-700 shadow-2xs"
                >
                  {techItem}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white font-semibold text-sm tracking-wider uppercase transition-all shadow-md shadow-zinc-300 cursor-pointer"
            >
              <Globe className="w-4 h-4" /> Buka di Tab Baru
            </a>
          </div>
        </div>

        {/* Interactive Live Website Remote Preview Studio */}
        <div className="mb-14 rounded-3xl overflow-hidden border border-zinc-200/90 bg-white shadow-2xl shadow-zinc-200/80">
          {/* Studio Browser Control Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 px-4 sm:px-6 py-3.5 bg-zinc-100/90 border-b border-zinc-200">
            {/* Left: Window Dots + Reload + Live URL Pill */}
            <div className="flex items-center gap-3 min-w-0 flex-1">
              <div className="hidden sm:flex items-center gap-1.5 shrink-0">
                <span className="w-3 h-3 rounded-full bg-red-400/80" />
                <span className="w-3 h-3 rounded-full bg-amber-400/80" />
                <span className="w-3 h-3 rounded-full bg-emerald-400/80" />
              </div>

              {previewMode === "live" && (
                <button
                  type="button"
                  onClick={handleReloadIframe}
                  title="Muat Ulang Web"
                  aria-label="Muat Ulang Web"
                  className="p-1.5 rounded-lg bg-white hover:bg-zinc-200/80 border border-zinc-200 text-zinc-600 hover:text-zinc-900 transition-colors cursor-pointer shrink-0"
                >
                  <RotateCw
                    className={`w-3.5 h-3.5 ${
                      isIframeLoading ? "animate-spin" : ""
                    }`}
                  />
                </button>
              )}

              <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white border border-zinc-200/90 text-xs font-mono text-zinc-600 min-w-0 max-w-md w-full shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                <span className="truncate">{project.liveUrl}</span>
              </div>
            </div>

            {/* Center/Right Controls: Mode Toggle (Live vs Image), Viewport Switcher, Expand */}
            <div className="flex items-center gap-2 flex-wrap">
              {/* Live vs Static Screenshot Toggle */}
              <div className="inline-flex items-center p-1 rounded-xl bg-zinc-200/70 border border-zinc-300/60">
                <button
                  type="button"
                  onClick={() => setPreviewMode("live")}
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    previewMode === "live"
                      ? "bg-zinc-900 text-white shadow-xs"
                      : "text-zinc-600 hover:text-zinc-900"
                  }`}
                >
                  <MousePointerClick className="w-3.5 h-3.5" />
                  <span>Live Interaktif</span>
                </button>
                <button
                  type="button"
                  onClick={() => setPreviewMode("image")}
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    previewMode === "image"
                      ? "bg-zinc-900 text-white shadow-xs"
                      : "text-zinc-600 hover:text-zinc-900"
                  }`}
                >
                  <ImageIcon className="w-3.5 h-3.5" />
                  <span>Gambar</span>
                </button>
              </div>

              {/* Device Viewport Switcher (Desktop / Tablet / Mobile) */}
              {previewMode === "live" && (
                <div className="hidden md:inline-flex items-center p-1 rounded-xl bg-zinc-200/70 border border-zinc-300/60">
                  <button
                    type="button"
                    onClick={() => setViewport("desktop")}
                    title="Tampilan Desktop"
                    aria-label="Tampilan Desktop"
                    className={`p-1.5 rounded-lg transition-all cursor-pointer ${
                      viewport === "desktop"
                        ? "bg-white text-zinc-900 shadow-xs"
                        : "text-zinc-500 hover:text-zinc-900"
                    }`}
                  >
                    <Monitor className="w-3.5 h-3.5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setViewport("tablet")}
                    title="Tampilan Tablet (768px)"
                    aria-label="Tampilan Tablet"
                    className={`p-1.5 rounded-lg transition-all cursor-pointer ${
                      viewport === "tablet"
                        ? "bg-white text-zinc-900 shadow-xs"
                        : "text-zinc-500 hover:text-zinc-900"
                    }`}
                  >
                    <Tablet className="w-3.5 h-3.5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setViewport("mobile")}
                    title="Tampilan Mobile (390px)"
                    aria-label="Tampilan Mobile"
                    className={`p-1.5 rounded-lg transition-all cursor-pointer ${
                      viewport === "mobile"
                        ? "bg-white text-zinc-900 shadow-xs"
                        : "text-zinc-500 hover:text-zinc-900"
                    }`}
                  >
                    <Smartphone className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}

              {/* Expand / Collapse Preview Height */}
              <button
                type="button"
                onClick={() => setIsExpanded((prev) => !prev)}
                title={isExpanded ? "Perkecil Layar" : "Perbesar Layar"}
                aria-label={isExpanded ? "Perkecil Layar" : "Perbesar Layar"}
                className="p-2 rounded-xl bg-white hover:bg-zinc-200/70 border border-zinc-200 text-zinc-700 transition-colors cursor-pointer"
              >
                {isExpanded ? (
                  <Minimize2 className="w-4 h-4" />
                ) : (
                  <Maximize2 className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>

          {/* Interactive Stage Area */}
          <div
            className={`relative w-full bg-zinc-100 flex items-center justify-center transition-all duration-500 overflow-hidden ${
              isExpanded
                ? "h-[82vh] min-h-[640px]"
                : "h-[540px] sm:h-[620px] lg:h-[680px]"
            }`}
          >
            {previewMode === "live" ? (
              <div
                className={`relative h-full ${viewportWidthClass[viewport]} bg-white shadow-xl transition-all duration-500 overflow-hidden border-x border-zinc-200/80`}
              >
                {/* Loading Skeleton while iframe fetches live site */}
                {isIframeLoading && (
                  <div className="absolute inset-0 z-10 bg-white flex flex-col items-center justify-center gap-3 p-6 text-center">
                    <div className="w-10 h-10 rounded-full border-2 border-zinc-200 border-t-zinc-900 animate-spin" />
                    <p className="text-sm font-medium text-zinc-700">
                      Menghubungkan ke situs asli {project.title}...
                    </p>
                    <p className="text-xs text-zinc-400 font-mono">
                      {project.liveUrl}
                    </p>
                  </div>
                )}

                <iframe
                  key={iframeKey}
                  src={project.liveUrl}
                  title={`Live Preview - ${project.title}`}
                  onLoad={() => setIsIframeLoading(false)}
                  className="w-full h-full border-0 bg-white"
                  allow="fullscreen; clipboard-read; clipboard-write"
                  referrerPolicy="no-referrer-when-downgrade"
                  loading="eager"
                />
              </div>
            ) : (
              <div className="relative w-full h-full flex items-center justify-center bg-zinc-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className={`w-full h-full ${
                    project.imageFit === "contain"
                      ? "object-contain object-center p-10 sm:p-16 bg-white"
                      : "object-cover object-top"
                  }`}
                />
              </div>
            )}
          </div>
        </div>

        {/* 3 Core Points: Deskripsi, Key Insight, Outcome */}
        <div className="space-y-10 mb-16">
          {/* 1. Deskripsi */}
          <section className="p-8 sm:p-10 rounded-3xl bg-white border border-zinc-200/90 shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 mb-6 flex items-center gap-3">
              <FileText className="w-6 h-6 text-zinc-900" />
              Deskripsi
            </h2>
            <p className="text-zinc-600 text-base sm:text-lg lg:text-xl leading-relaxed">
              {project.deskripsi}
            </p>
          </section>

          {/* 2. Key Insight */}
          <section className="p-8 sm:p-10 rounded-3xl bg-white border border-zinc-200/90 shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 mb-6 flex items-center gap-3">
              <Lightbulb className="w-6 h-6 text-zinc-900" />
              Key Insight
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {project.keyInsight.map((insight, index) => (
                <div
                  key={index}
                  className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200/80 hover:border-zinc-400 transition-colors flex flex-col justify-between"
                >
                  <div className="text-xs font-mono text-zinc-900 font-bold mb-3 tracking-widest uppercase">
                    Insight 0{index + 1}
                  </div>
                  <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
                    {insight}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* 3. Outcome */}
          <section className="p-8 sm:p-10 rounded-3xl bg-white border border-zinc-200/90 shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 mb-6 flex items-center gap-3">
              <TrendingUp className="w-6 h-6 text-zinc-900" />
              Outcome
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {project.outcome.map((item, index) => (
                <div
                  key={index}
                  className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200/80 hover:border-zinc-400 transition-colors flex flex-col justify-between"
                >
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-900 mb-3" />
                  <p className="text-zinc-700 text-sm sm:text-base leading-relaxed font-medium">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Bottom Navigation */}
        <div className="pt-10 border-t border-zinc-200 flex items-center justify-between">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white hover:bg-zinc-900 border border-zinc-200 text-zinc-700 hover:text-white transition-colors cursor-pointer text-sm font-medium shadow-sm"
          >
            <ArrowLeft className="w-4 h-4" /> Kembali ke Daftar Proyek
          </button>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-xs text-zinc-500 hover:text-zinc-900 transition-colors cursor-pointer"
          >
            Kembali ke Atas
          </button>
        </div>
      </div>
    </div>
  );
};
