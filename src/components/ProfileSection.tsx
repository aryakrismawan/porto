import React from "react";
import { motion } from "framer-motion";
import {
  User,
  Code2,
  Sparkles,
  Wrench,
  Cpu,
  Globe,
  ArrowUpRight,
  Mail,
} from "lucide-react";

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
  isHighlighted?: boolean;
}

export const ProfileSection: React.FC<ProfileSectionProps> = ({
  avatarUrl = "/profile.png",
  isHighlighted = false,
}) => {
  const hardSkills = [
    "Frontend & Web Development",
    "Software Engineering",
    "Internet of Things (IoT)",
    "Pemrograman Mikrokontroler",
    "Integrasi Sensor & REST API",
    "Responsive UI/UX Implementation",
  ];

  const softSkills = [
    "Problem Solving & Analisis",
    "Kolaborasi Tim (Teamwork)",
    "Komunikasi Efektif",
    "Manajemen Waktu & Proyek",
    "Adaptabilitas Cepat",
    "Berpikir Kritis & Detail",
  ];

  const webTools = [
    "React",
    "TypeScript",
    "JavaScript (ES6+)",
    "Tailwind CSS",
    "HTML5 & CSS3",
    "Node.js",
    "Vite",
    "Git & GitHub",
    "VS Code",
    "Cloudflare",
  ];

  const iotTools = [
    "Arduino IDE",
    "ESP32 & ESP8266",
    "Arduino Uno / Nano",
    "C / C++",
    "MQTT & HTTP Protocol",
    "Firebase Realtime DB",
    "Blynk IoT",
    "Sensor & Aktuator",
  ];

  return (
    <section
      id="profil"
      className="relative snap-center snap-always min-h-screen py-20 sm:py-24 px-6 sm:px-10 lg:px-16 xl:px-20 bg-zinc-50 border-t border-zinc-200/80 flex items-center overflow-hidden"
    >
      {/* Subtle radial spotlight when section is centered/highlighted */}
      <div
        className={`pointer-events-none absolute inset-0 transition-opacity duration-700 ${
          isHighlighted ? "opacity-100" : "opacity-0"
        }`}
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(24,24,27,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-screen-2xl mx-auto w-full relative z-10">
        {/* Section Header with Scroll-Reveal Animation */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center mb-12 sm:mb-14 text-center"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-zinc-200 text-zinc-700 text-xs font-mono mb-4 tracking-widest uppercase shadow-sm">
            <User className="w-3.5 h-3.5 text-zinc-900" />
            Tentang Saya
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight text-zinc-900 font-['Plus_Jakarta_Sans']">
            Membangun Solusi Digital dengan <span className="font-bold text-zinc-900">Presisi & Seni</span>
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="w-20 h-1 bg-zinc-900 mt-5 rounded-full origin-center"
          />
        </motion.div>

        {/* Main Content Grid: Left Column (Photo + Vertical Contact) & Right Column (Bio + Hard/Soft Skills + Tools) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left Column (4 cols): Profile Photo + Vertical Stacked Contact Card */}
          <motion.div
            initial={{ opacity: 0, x: -45, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 xl:col-span-4 flex flex-col justify-between gap-6"
          >
            {/* Studio Portrait Card (2:3 orientation preserved) */}
            <div
              className={`relative w-full max-w-[360px] lg:max-w-none mx-auto aspect-[2/3] lg:aspect-[4/4.6] rounded-3xl overflow-hidden border bg-white p-3.5 flex flex-col group transition-all duration-500 ${
                isHighlighted
                  ? "border-zinc-900/25 shadow-2xl shadow-zinc-300/80 ring-4 ring-zinc-900/5"
                  : "border-zinc-200/90 shadow-xl shadow-zinc-200/60"
              }`}
            >
              <div className="relative w-full flex-1 rounded-2xl overflow-hidden bg-gradient-to-b from-zinc-100 via-zinc-50 to-zinc-200/70 flex items-end justify-center pt-4">
                <img
                  src={avatarUrl}
                  alt="M. Arya Krismawan"
                  className="w-full h-full object-contain object-bottom group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Vertical Stacked Contact Card */}
            <div
              className={`p-5 sm:p-6 rounded-3xl bg-white border transition-all duration-500 ${
                isHighlighted
                  ? "border-zinc-900/20 shadow-xl shadow-zinc-300/60"
                  : "border-zinc-200/90 shadow-lg shadow-zinc-200/50"
              }`}
            >
              <p className="text-xs font-mono tracking-[0.2em] text-zinc-400 uppercase mb-3.5">
                Kontak & Media Sosial
              </p>
              <div className="flex flex-col gap-2.5">
                {/* WhatsApp */}
                <a
                  href="https://wa.me/6285863144773"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between gap-3 px-3.5 py-2.5 rounded-2xl bg-zinc-50 hover:bg-zinc-900 border border-zinc-200/90 hover:border-zinc-900 transition-all duration-300 cursor-pointer"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-9 h-9 rounded-xl bg-zinc-900 group-hover:bg-white/15 text-white flex items-center justify-center shrink-0 transition-colors">
                      <WhatsAppIcon className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] font-mono uppercase tracking-wider text-zinc-400">
                        WhatsApp
                      </p>
                      <p className="text-xs sm:text-sm font-semibold text-zinc-900 group-hover:text-white truncate">
                        +62 858-6314-4773
                      </p>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
                </a>

                {/* Email */}
                <a
                  href="mailto:krisarya8@gmail.com"
                  className="group flex items-center justify-between gap-3 px-3.5 py-2.5 rounded-2xl bg-zinc-50 hover:bg-zinc-900 border border-zinc-200/90 hover:border-zinc-900 transition-all duration-300 cursor-pointer"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-9 h-9 rounded-xl bg-zinc-900 group-hover:bg-white/15 text-white flex items-center justify-center shrink-0 transition-colors">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] font-mono uppercase tracking-wider text-zinc-400">
                        Email
                      </p>
                      <p className="text-xs sm:text-sm font-semibold text-zinc-900 group-hover:text-white truncate">
                        krisarya8@gmail.com
                      </p>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/m-arya-krismawan-070059394"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between gap-3 px-3.5 py-2.5 rounded-2xl bg-zinc-50 hover:bg-zinc-900 border border-zinc-200/90 hover:border-zinc-900 transition-all duration-300 cursor-pointer"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-9 h-9 rounded-xl bg-zinc-900 group-hover:bg-white/15 text-white flex items-center justify-center shrink-0 transition-colors">
                      <LinkedinIcon className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] font-mono uppercase tracking-wider text-zinc-400">
                        LinkedIn
                      </p>
                      <p className="text-xs sm:text-sm font-semibold text-zinc-900 group-hover:text-white truncate">
                        M. Arya Krismawan
                      </p>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column (8 cols): Bio + Split Hard/Soft Skills + Tools (Web & IoT) */}
          <motion.div
            initial={{ opacity: 0, x: 45, scale: 0.96 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 xl:col-span-8 flex flex-col"
          >
            <div
              className={`p-7 sm:p-9 lg:p-10 rounded-3xl bg-white border relative overflow-hidden flex-1 flex flex-col justify-between gap-7 transition-all duration-500 ${
                isHighlighted
                  ? "border-zinc-900/20 shadow-2xl shadow-zinc-300/70 ring-4 ring-zinc-900/5"
                  : "border-zinc-200/90 shadow-xl shadow-zinc-200/50"
              }`}
            >
              {/* 1. Bio Introduction */}
              <div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-zinc-900 mb-3.5">
                  M. Arya Krismawan, S.Kom.
                </h3>
                <p className="text-zinc-600 leading-relaxed mb-3 text-sm sm:text-base lg:text-lg">
                  Saya merupakan lulusan <strong className="text-zinc-900">Teknik Informatika</strong> dari <strong className="text-zinc-900">Universitas Muhammadiyah Sukabumi (UMMI)</strong> yang berfokus pada pengembangan aplikasi web modern serta rekayasa sistem <strong className="text-zinc-900">IoT & Mikrokontroler</strong>.
                </p>
                <p className="text-zinc-500 leading-relaxed text-xs sm:text-sm lg:text-base">
                  Selama masa studi, saya aktif mengembangkan produk dan inovasi bisnis melalui <strong className="text-zinc-800">Program Pembinaan Mahasiswa Wirausaha (P2MW)</strong>, serta dipercaya menjadi <strong className="text-zinc-800">Asisten Dosen pada mata kuliah Mikrokontroler dan IoT</strong> untuk membimbing praktikum perancangan perangkat keras dan pemrograman sistem tertanam.
                </p>
              </div>

              {/* 2. Split Skills: Hard Skills (Left) & Soft Skills (Right) */}
              <div className="pt-6 border-t border-zinc-200">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Hard Skills */}
                  <div className="p-5 rounded-2xl bg-zinc-50/80 border border-zinc-200/80">
                    <div className="flex items-center gap-2.5 mb-4 text-zinc-900 font-bold text-base">
                      <div className="w-8 h-8 rounded-lg bg-zinc-900 text-white flex items-center justify-center shrink-0">
                        <Code2 className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="block leading-none">Hard Skills</span>
                        <span className="text-[11px] font-mono font-normal text-zinc-400 uppercase tracking-wider">
                          Keahlian Teknis
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {hardSkills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white border border-zinc-200/90 text-xs sm:text-sm font-medium text-zinc-800 shadow-2xs"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-zinc-900 shrink-0" />
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Soft Skills */}
                  <div className="p-5 rounded-2xl bg-zinc-50/80 border border-zinc-200/80">
                    <div className="flex items-center gap-2.5 mb-4 text-zinc-900 font-bold text-base">
                      <div className="w-8 h-8 rounded-lg bg-zinc-900 text-white flex items-center justify-center shrink-0">
                        <Sparkles className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="block leading-none">Soft Skills</span>
                        <span className="text-[11px] font-mono font-normal text-zinc-400 uppercase tracking-wider">
                          Interpersonal & Kerja
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {softSkills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white border border-zinc-200/90 text-xs sm:text-sm font-medium text-zinc-800 shadow-2xs"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 shrink-0" />
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* 3. Tools & Teknologi (Web Development & IoT / Mikrokontroler) */}
              <div className="pt-6 border-t border-zinc-200">
                <div className="flex items-center gap-2 mb-4 text-zinc-900 font-bold text-base sm:text-lg">
                  <Wrench className="w-5 h-5 text-zinc-900" />
                  Tools & Teknologi yang Digunakan
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Web Development Tools */}
                  <div className="p-4 sm:p-5 rounded-2xl border border-zinc-200/90 bg-white">
                    <div className="flex items-center gap-2 mb-3 text-xs font-mono font-semibold uppercase tracking-wider text-zinc-500">
                      <Globe className="w-3.5 h-3.5 text-zinc-900" />
                      Pengembangan Web
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {webTools.map((tool, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-lg bg-zinc-100 hover:bg-zinc-900 text-zinc-700 hover:text-white text-xs font-medium transition-colors cursor-default"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* IoT & Microcontroller Tools */}
                  <div className="p-4 sm:p-5 rounded-2xl border border-zinc-200/90 bg-white">
                    <div className="flex items-center gap-2 mb-3 text-xs font-mono font-semibold uppercase tracking-wider text-zinc-500">
                      <Cpu className="w-3.5 h-3.5 text-zinc-900" />
                      IoT & Mikrokontroler
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {iotTools.map((tool, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-lg bg-zinc-100 hover:bg-zinc-900 text-zinc-700 hover:text-white text-xs font-medium transition-colors cursor-default"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
