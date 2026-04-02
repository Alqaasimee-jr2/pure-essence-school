import Image from "next/image";
import Link from "next/link";

interface EventCardProps {
  title: string;
  date: string;
  category: string;
  status: string;
  excerpt: string;
  badge: string;
  badgeColor: string;
  image: string;
}

export default function EventCard({
  title,
  date,
  excerpt,
  badge,
  badgeColor,
  image,
}: EventCardProps) {
  return (
    <div className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-[#e2bfb9]/20 flex flex-col">
      <div className="relative h-52 overflow-hidden bg-[#f4f3f2]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-contain p-4 group-hover:scale-105 transition-transform duration-700"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        <span className={`absolute top-4 left-4 ${badgeColor} text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider`}>
          {badge}
        </span>
      </div>
      <div className="p-6 flex flex-col flex-grow space-y-3">
        <div className="flex items-center gap-2 text-[#5a413d] text-xs font-semibold">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-3.5 h-3.5">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
            <line x1="16" y1="2" x2="16" y2="6"/>
            <line x1="8" y1="2" x2="8" y2="6"/>
            <line x1="3" y1="10" x2="21" y2="10"/>
          </svg>
          {date}
        </div>
        <h3 className="text-lg font-headline font-bold text-[#570000] group-hover:text-[#ad2c00] transition-colors leading-tight">
          {title}
        </h3>
        <p className="text-sm text-[#5a413d] leading-relaxed flex-grow">{excerpt}</p>
        <Link
          href="/events"
          className="inline-flex items-center gap-1.5 text-[#ad2c00] font-bold text-sm hover:gap-3 transition-all duration-200 mt-2"
        >
          Read More
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="w-3.5 h-3.5">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </Link>
      </div>
    </div>
  );
}
