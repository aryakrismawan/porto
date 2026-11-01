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
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
function cn(...inputs: any[]) { return twMerge(clsx(inputs)) }

export interface TeamMemberCardProps {
  position?: 'left' | 'right'
  jobPosition?: string
  firstName?: string
  lastName?: string
  imageUrl?: string
  description?: string
  className?: string
  onCtaClick?: () => void
}

/**
 * Editorial-style team member card with overlapping portrait, large display
 * typography, circular CTA toggle, and staggered entrance animations.
 */
export default function TeamMemberCard({
  position = 'left',
  jobPosition = 'Backend Engineer',
  firstName = 'Jennie',
  lastName = 'Garcia',
  imageUrl = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&auto=format&fit=crop&q=80',
  description = 'Jennie is a skilled developer with expertise in modern web technologies and a passion for creating seamless user experiences.',
  className,
  onCtaClick,
}: TeamMemberCardProps) {
  const fullName = `${firstName} ${lastName}`
  const isPositionRight = position === 'right'

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn('relative w-full flex flex-col justify-center', className)}
    >
      {/* jobPosition label — editorial uppercase tracking */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <p
          className={cn(
            'mb-4 sm:mb-6 text-xs sm:text-sm font-medium tracking-[0.3em] text-zinc-500 uppercase dark:text-zinc-400',
            isPositionRight && 'text-right'
          )}
        >
          {jobPosition}
        </p>
      </motion.div>

      <div className='flex flex-col md:flex-row items-center justify-end gap-8 md:gap-0 w-full'>
        {/* Portrait image with reveal animation & fullscreen-proportioned height */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className={cn(
            'group relative h-[460px] w-full md:w-[380px] lg:w-[460px] xl:w-[540px] md:h-[72vh] lg:h-[78vh] max-h-[760px] shrink-0 overflow-hidden bg-zinc-100 shadow-2xl shadow-zinc-200/90',
            isPositionRight && 'md:order-1'
          )}
        >
          {/* Subtle bottom grain overlay for texture in Light Mode */}
          <div className='pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-black/20 via-transparent to-transparent' />
          <img
            src={imageUrl}
            alt={fullName}
            className='h-full w-full object-cover object-center origin-[50%_72%] scale-[1.55] transition-transform duration-700 ease-[0.22,1,0.36,1] group-hover:scale-[1.62]'
          />
        </motion.div>

        {/* Info block — overlaps image via negative margin across remaining fullscreen width */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className={cn(
            'relative md:-left-10 lg:-left-12 z-20 flex w-full md:w-[calc(100%-360px)] lg:w-[calc(100%-440px)] xl:w-[calc(100%-520px)] flex-col gap-10 md:gap-16 lg:gap-20',
            isPositionRight && 'md:left-10 lg:left-12 md:items-end'
          )}
        >
          {/* Display name — aligned vertically with bio description */}
          <div
            className={cn(
              'sm:pl-28 lg:pl-36',
              isPositionRight && 'sm:pl-0 lg:pl-0 sm:pr-28 lg:pr-36'
            )}
          >
            <p className='text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[1.08] font-extralight tracking-tight text-zinc-900 dark:text-white'>
              {firstName}
              <br />
              <span className='font-normal'>{lastName}</span>
            </p>
          </div>

          {/* Details row — toggle + bio */}
          <div className={cn('flex flex-col sm:flex-row items-start sm:items-center gap-8 lg:gap-12', isPositionRight && 'md:justify-end')}>
            {/* Circular CTA with hover pulse */}
            <motion.div
              onClick={onCtaClick}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={cn(
                'group flex h-20 w-20 lg:h-24 lg:w-24 shrink-0 cursor-pointer items-center justify-center rounded-full border border-zinc-300 bg-white/90 backdrop-blur-sm shadow-md shadow-zinc-200/60 transition-colors duration-300 hover:border-zinc-900 hover:bg-zinc-900 dark:border-white/20 dark:bg-zinc-900 dark:hover:border-white/60 dark:hover:bg-white/10',
                isPositionRight && 'sm:order-1'
              )}
            >
              <ArrowRight
                size={24}
                className={cn(
                  'text-zinc-700 transition-all duration-300 group-hover:-rotate-45 group-hover:text-white dark:text-zinc-400 dark:group-hover:text-white',
                  isPositionRight && 'rotate-180 group-hover:rotate-225'
                )}
              />
            </motion.div>

            {/* Bio copy — restrained body text */}
            <div className='w-full sm:max-w-md lg:max-w-xl'>
              <p
                className={cn(
                  'text-sm sm:text-base lg:text-lg leading-[1.8] text-zinc-600 dark:text-zinc-400',
                  isPositionRight && 'md:text-right'
                )}
              >
                {description}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
