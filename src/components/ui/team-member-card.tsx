'use client'

/**
 * @author: @emerald-ui
 * @description: Editorial-style team member card with overlapping layers and motion
 * @version: 2.0.0
 * @date: 2026-02-19
 * @license: MIT
 * @website: https://emerald-ui.com
 *
 */
import { ArrowRight, ChevronDown } from 'lucide-react'
import { motion } from 'framer-motion'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { useState, useEffect } from 'react'

function cn(...inputs: any[]) {
  return twMerge(clsx(inputs))
}

export interface TeamMemberCardProps {
  position?: 'left' | 'right'
  jobPosition?: string
  firstName?: string
  lastName?: string
  imageUrl?: string
  description?: string
  className?: string
  onCtaClick?: () => void
  showNavbar?: boolean
}

/**
 * Editorial-style team member card with overlapping portrait, large display
 * typography, circular CTA toggle, and staggered entrance animations.
 */
export default function TeamMemberCard({
  position = 'left',
  jobPosition = 'Frontend & Web Developer',
  firstName = 'M. ARYA',
  lastName = 'KRISMAWAN',
  imageUrl = '/profile.png',
  description = 'Lulusan Teknik Informatika yang berfokus pada pembuatan antarmuka web interaktif, performa optimal, dan pengalaman pengguna berfriksi rendah.',
  className,
  onCtaClick,
  showNavbar = true,
}: TeamMemberCardProps) {
  const fullName = `${firstName} ${lastName}`
  const isPositionRight = position === 'right'
  const [activeSection, setActiveSection] = useState('beranda')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['beranda', 'profil', 'proyek']
      const scrollPos = window.scrollY + 200

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    { id: 'beranda', label: 'BERANDA', href: '#beranda' },
    { id: 'profil', label: 'PROFIL', href: '#profil' },
    { id: 'proyek', label: 'PROYEK', href: '#proyek' },
  ]

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleCta = () => {
    if (onCtaClick) {
      onCtaClick()
    } else {
      scrollToSection('#profil')
    }
  }

  return (
    <section
      id="beranda"
      className={cn(
        'relative min-h-screen w-full bg-black text-white overflow-hidden flex flex-col justify-between pt-24 pb-12 px-6 sm:px-10 lg:px-16 xl:px-20',
        className
      )}
    >
      {/* Background radial ambient accent */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#C3E41D]/10 rounded-full blur-[150px] pointer-events-none" />

      {/* Floating Top Navbar */}
      {showNavbar && (
        <header className="fixed top-5 right-5 sm:top-6 sm:right-8 z-50">
          <nav
            className="flex items-center gap-1 sm:gap-2 px-2.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-neutral-900/60 backdrop-blur-md border border-white/10 shadow-lg shadow-black/50"
            aria-label="Main Navigation"
          >
            {menuItems.map((item) => {
              const isActive = activeSection === item.id
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection(item.href)
                  }}
                  className={cn(
                    'relative px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider transition-all duration-300 cursor-pointer',
                    isActive
                      ? 'text-black bg-[#C3E41D] shadow-sm shadow-[#C3E41D]/30'
                      : 'text-neutral-400 hover:text-white hover:bg-white/5'
                  )}
                >
                  {item.label}
                </a>
              )
            })}
          </nav>
        </header>
      )}

      {/* Editorial Card Presentation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-screen-2xl mx-auto w-full my-auto flex flex-col justify-center"
      >
        {/* jobPosition label — editorial uppercase tracking */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-4 sm:mb-6"
        >
          <div className={cn("inline-flex items-center gap-2.5", isPositionRight && "justify-end w-full")}>
            <span className="w-2 h-2 rounded-full bg-[#C3E41D] animate-pulse" />
            <p
              className={cn(
                'text-xs sm:text-sm font-mono font-medium tracking-[0.3em] text-[#C3E41D] uppercase',
                isPositionRight && 'text-right'
              )}
            >
              {jobPosition}
            </p>
          </div>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center lg:items-center justify-between gap-8 lg:gap-0">
          {/* Portrait image with reveal animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className={cn(
              'relative h-[380px] sm:h-[460px] lg:h-125 w-[280px] sm:w-[340px] lg:w-90 shrink-0 overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-900/60 shadow-2xl p-2 group',
              isPositionRight && 'lg:order-1'
            )}
          >
            <div className="relative w-full h-full rounded-2xl overflow-hidden">
              {/* Subtle grain overlay for texture */}
              <div className="pointer-events-none absolute inset-0 z-10 bg-linear-to-t bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <img
                src={imageUrl}
                alt={fullName}
                className="h-full w-full object-cover object-top duration-700 ease-[0.22,1,0.36,1] group-hover:scale-105"
              />
            </div>
          </motion.div>

          {/* Info block — overlaps image on desktop via negative margin */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className={cn(
              'relative z-2 z-[2] flex flex-col gap-6 sm:gap-8 lg:gap-14 w-full lg:w-[calc(100%-350px)]',
              isPositionRight ? 'lg:left-8 lg:items-end' : 'lg:-left-8 lg:items-start'
            )}
          >
            {/* Display name — large editorial type */}
            <div>
              <p className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.08] font-extralight tracking-tight text-white font-sans">
                {firstName}
                <br />
                <span className="font-extrabold text-[#C3E41D]">{lastName}</span>
              </p>
            </div>

            {/* Details row — toggle + bio */}
            <div
              className={cn(
                'flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8',
                isPositionRight && 'lg:justify-end'
              )}
            >
              {/* Circular CTA with hover pulse */}
              <motion.button
                type="button"
                onClick={handleCta}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={cn(
                  'group flex h-16 w-16 sm:h-20 sm:w-20 shrink-0 cursor-pointer items-center justify-center rounded-full border border-neutral-700 bg-neutral-900/80 transition-all duration-300 hover:border-[#C3E41D] hover:bg-[#C3E41D] shadow-lg shadow-black/50',
                  isPositionRight && 'order-1'
                )}
                title="Lihat Profil & Karya"
                aria-label="Lihat Profil & Karya"
              >
                <ArrowRight
                  size={24}
                  className={cn(
                    'text-neutral-300 transition-all duration-300 group-hover:-rotate-45 group-hover:text-black',
                    isPositionRight && 'rotate-180 group-hover:rotate-225'
                  )}
                />
              </motion.button>

              {/* Bio copy — restrained body text */}
              <div className="w-full sm:w-[50%] lg:w-[40%]">
                <p
                  className={cn(
                    'text-sm sm:text-base leading-[1.8] text-neutral-400',
                    isPositionRight && 'lg:text-right'
                  )}
                >
                  {description}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom Scroll Indicator */}
      <button
        type="button"
        onClick={() => scrollToSection('#profil')}
        className="mx-auto mt-6 p-2 rounded-full transition-all duration-300 hover:translate-y-1 cursor-pointer group flex flex-col items-center gap-1"
        aria-label="Scroll down to Profil"
      >
        <span className="text-[10px] tracking-widest text-neutral-500 uppercase font-mono group-hover:text-[#C3E41D]">
          Scroll
        </span>
        <ChevronDown className="w-5 h-5 text-neutral-500 group-hover:text-[#C3E41D] transition-colors duration-300 animate-bounce" />
      </button>
    </section>
  )
}
