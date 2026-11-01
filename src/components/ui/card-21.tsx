import * as React from "react";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

export interface DestinationCardProps extends React.HTMLAttributes<HTMLDivElement> {
  imageUrl: string;
  imageFit?: "cover" | "contain";
  location: string;
  flag?: string;
  stats?: string;
  href?: string;
  themeColor: string;
  buttonText?: string;
  onCardClick?: () => void;
}

const DestinationCard = React.forwardRef<HTMLDivElement, DestinationCardProps>(
  (
    {
      className,
      imageUrl,
      imageFit = "cover",
      location,
      flag,
      stats,
      href = "#",
      themeColor,
      buttonText = "Detail Proyek",
      onCardClick,
      ...props
    },
    ref
  ) => {
    const handleClick = (e: React.MouseEvent) => {
      if (onCardClick) {
        e.preventDefault();
        onCardClick();
      }
    };

    return (
      <div
        ref={ref}
        style={
          {
            "--theme-color": themeColor,
          } as React.CSSProperties
        }
        className={cn("group w-full h-full", className)}
        {...props}
      >
        <a
          href={href}
          onClick={handleClick}
          className="relative block w-full h-full rounded-3xl overflow-hidden border border-zinc-200/80 bg-zinc-100 shadow-xl shadow-zinc-200/70
                     transition-all duration-500 ease-out cursor-pointer
                     group-hover:-translate-y-1.5 group-hover:shadow-2xl group-hover:shadow-zinc-300"
          aria-label={`Explore details for ${location}`}
        >
          {/* Image Layer — handles both full screenshots (cover) and transparent logos (contain) */}
          <img
            src={imageUrl}
            alt={location}
            className={cn(
              "absolute inset-0 w-full h-full transition-transform duration-700 ease-out group-hover:scale-105",
              imageFit === "contain"
                ? "object-contain object-top pt-8 px-14 pb-40 bg-zinc-100"
                : "object-cover object-top"
            )}
          />

          {/* Themed Gradient Overlay */}
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(to top, hsl(var(--theme-color) / 0.96) 0%, hsl(var(--theme-color) / 0.72) 42%, transparent 78%)`,
            }}
          />

          {/* Content */}
          <div className="relative flex flex-col justify-end h-full p-6 sm:p-8 md:p-10 text-white min-h-full">
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight leading-tight">
              {location} {flag && <span className="text-xl sm:text-2xl ml-1.5 align-middle">{flag}</span>}
            </h3>
            {stats && (
              <p className="text-sm sm:text-base text-white/85 mt-2 font-medium">
                {stats}
              </p>
            )}

            {/* Explore Button */}
            <div
              className="mt-6 sm:mt-8 flex items-center justify-between bg-white/15 backdrop-blur-md border border-white/25 
                         rounded-xl px-4 py-3 sm:px-5 sm:py-3.5 
                         transition-all duration-300 
                         group-hover:bg-white group-hover:text-zinc-900 group-hover:border-white group-hover:shadow-lg"
            >
              <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase">
                {buttonText}
              </span>
              <ArrowRight className="h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1.5" />
            </div>
          </div>
        </a>
      </div>
    );
  }
);
DestinationCard.displayName = "DestinationCard";

export { DestinationCard };
