import React from "react";
import { User, Code2, ArrowUpRight, Mail } from "lucide-react";

const WhatsAppIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
  </svg>
);

const LinkedinIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

interface ProfileSectionProps {
  avatarUrl?: string;
}

export const ProfileSection: React.FC<ProfileSectionProps> = ({
  avatarUrl = "/profile.png",
}) => {
  const skills = [
    "Software Engineering",
    "IoT",
    "Mikrokontroler",
  ];

  return (
    <section id="profil" className="relative min-h-screen py-28 px-6 sm:px-10 lg:px-16 xl:px-20 bg-neutral-950/80 border-t border-neutral-900 flex items-center">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#C3E41D]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-screen-2xl mx-auto w-full">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-[#C3E41D] text-xs font-mono mb-4 tracking-widest uppercase">
            <User className="w-3.5 h-3.5" />
            Tentang Saya
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-['Plus_Jakarta_Sans']">
            Membangun Solusi Digital dengan <span className="text-[#C3E41D]">Presisi & Seni</span>
          </h2>
          <div className="w-20 h-1 bg-[#C3E41D] mt-5 rounded-full" />
        </div>

        {/* Content Grid: Photo on the Left, Description on the Right (Expanded Margins) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left Column: Profile Photo */}
          <div className="lg:col-span-5 xl:col-span-4 flex items-center justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-none h-full min-h-[420px] sm:min-h-[480px] rounded-3xl overflow-hidden border border-neutral-800 bg-neutral-900/60 shadow-2xl p-3.5 flex flex-col group">
              <div className="relative w-full h-full rounded-2xl overflow-hidden">
                <img
                  src={avatarUrl}
                  alt="M. Arya Krismawan"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
              </div>
            </div>
          </div>

          {/* Right Column: Bio & Skills Description */}
          <div className="lg:col-span-7 xl:col-span-8 flex flex-col justify-between space-y-6">
            <div className="p-8 sm:p-10 lg:p-12 rounded-3xl bg-neutral-900/60 border border-neutral-800/80 backdrop-blur-sm relative overflow-hidden flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl sm:text-4xl font-bold text-white mb-5">
                  M. Arya Krismawan, S.Kom.
                </h3>
                <p className="text-neutral-300 leading-relaxed mb-5 text-base sm:text-xl">
                  Saya seorang <strong className="text-white">Frontend & Web Developer</strong> yang berfokus pada pembuatan antarmuka web interaktif, berkinerja tinggi, dan responsif. Menggabungkan estetika visual modern dengan arsitektur kode yang bersih dan scalable.
                </p>
                <p className="text-neutral-400 leading-relaxed text-sm sm:text-lg mb-10">
                  Berpengalaman dalam ekosistem React, TypeScript, dan Tailwind CSS. Selalu mengutamakan kepuasan pengguna (UI/UX) dan performa optimal di setiap proyek yang dikerjakan.
                </p>

                {/* Keahlian & Teknologi */}
                <div className="pt-8 border-t border-neutral-800/80">
                  <div className="flex items-center gap-2 mb-5 text-white font-bold text-xl">
                    <Code2 className="w-5 h-5 text-[#C3E41D]" />
                    Keahlian & Teknologi
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {skills.map((skill, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2.5 px-5 py-2.5 rounded-xl bg-neutral-800/60 border border-neutral-700/60 hover:border-[#C3E41D]/60 hover:bg-neutral-800 transition-all cursor-default group"
                      >
                        <span className="w-2.5 h-2.5 rounded-full bg-[#C3E41D] group-hover:scale-125 transition-transform" />
                        <span className="text-sm sm:text-base font-semibold text-neutral-200 group-hover:text-white">
                          {skill}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Social / Connect Buttons: WhatsApp, Email, LinkedIn */}
              <div className="flex flex-wrap items-center gap-4 pt-8 mt-10 border-t border-neutral-800/80">
                {/* WhatsApp */}
                <a
                  href="https://wa.me/6285863144773"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl bg-neutral-800/80 hover:bg-[#C3E41D] text-neutral-200 hover:text-black font-semibold text-sm transition-all shadow-md shadow-black/40 cursor-pointer"
                >
                  <WhatsAppIcon className="w-4 h-4" /> WhatsApp <ArrowUpRight className="w-4 h-4 opacity-60" />
                </a>

                {/* Email */}
                <a
                  href="mailto:krisarya8@gmail.com"
                  className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl bg-neutral-800/80 hover:bg-[#C3E41D] text-neutral-200 hover:text-black font-semibold text-sm transition-all shadow-md shadow-black/40 cursor-pointer"
                >
                  <Mail className="w-4 h-4" /> Email Me
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/m-arya-krismawan-070059394"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl bg-neutral-800/80 hover:bg-[#C3E41D] text-neutral-200 hover:text-black font-semibold text-sm transition-all shadow-md shadow-black/40 cursor-pointer"
                >
                  <LinkedinIcon className="w-4 h-4" /> LinkedIn <ArrowUpRight className="w-4 h-4 opacity-60" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
