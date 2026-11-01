import { DestinationCard } from "@/components/ui/card-21";

const DestinationCardDemo = () => {
  return (
    <div className="flex min-h-screen w-full flex-col md:flex-row items-center justify-center gap-8 md:gap-12 p-8 bg-black">
      <div className="w-full max-w-[340px] h-[480px]">
        <DestinationCard
          imageUrl="https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=800&q=80"
          location="RMB Store"
          flag="🇮🇩"
          stats="E-Commerce • Korea & Indo"
          href="#"
          themeColor="74 79% 35%"
          buttonText="Detail Proyek"
        />
      </div>
      <div className="w-full max-w-[340px] h-[480px]">
        <DestinationCard
          imageUrl="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
          location="MEGS Web"
          flag="⚡"
          stats="Web App • Cloudflare Pages"
          href="#"
          themeColor="210 70% 30%"
          buttonText="Detail Proyek"
        />
      </div>
    </div>
  );
};

export default DestinationCardDemo;
