import * as React from "react";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

// Define the props for the DestinationCard component
export interface DestinationCardProps extends React.HTMLAttributes<HTMLDivElement> {
  imageUrl: string;
  location: string;
  flag?: string;
  stats?: string;
  href?: string;
  themeColor: string; // e.g., "150 50% 25%" or "74 79% 50%"
  buttonText?: string;
  onCardClick?: () => void;
}

const DestinationCard = React.forwardRef<HTMLDivElement, DestinationCardProps>(
  (
    {
      className,
      imageUrl,
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
            // CSS custom properties
            "--theme-color": themeColor,
          } as React.CSSProperties
        }
        className={cn("group w-full h-full", className)}
        {...props}
      >
        <a
          href={href}
          onClick={handleClick}
          className="relative block w-full h-full rounded-3xl overflow-hidden shadow-lg 
                     transition-all duration-500 ease-in-out cursor-pointer
                     group-hover:scale-[1.02] group-hover:shadow-[0_0_60px_-15px_hsl(var(--theme-color)/0.6)]"
          aria-label={`Explore details for ${location}`}
          style={{
            boxShadow: `0 0 40px -15px hsl(var(--theme-color) / 0.5)`,
          }}
        >
          {/* Background Image with Parallax Zoom */}
          <div
            className="absolute inset-0 bg-cover bg-center 
                       transition-transform duration-700 ease-in-out group-hover:scale-110"
            style={{ backgroundImage: `url(${imageUrl})` }}
          />

          {/* Themed Gradient Overlay - Identical rich gradient across PC & Mobile */}
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(to top, hsl(var(--theme-color) / 0.95), hsl(var(--theme-color) / 0.6) 40%, transparent 75%)`,
            }}
          />

          {/* Content: Structured consistently on Mobile & PC */}
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
              className="mt-6 sm:mt-8 flex items-center justify-between bg-[hsl(var(--theme-color)/0.25)] backdrop-blur-md border border-[hsl(var(--theme-color)/0.35)] 
                         rounded-xl px-4 py-3 sm:px-5 sm:py-3.5 
                         transition-all duration-300 
                         group-hover:bg-[hsl(var(--theme-color)/0.45)] group-hover:border-[hsl(var(--theme-color)/0.55)] group-hover:shadow-lg"
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
