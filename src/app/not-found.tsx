import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#faf9f8] px-6 py-32 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <Image src="/images/arabesque_pattern_1775112960360.png" alt="" fill className="object-cover" />
      </div>
      
      <div className="text-center relative z-10 space-y-8 max-w-lg">
        <div className="relative inline-block">
          <span className="text-[12rem] font-headline font-bold text-[#570000]/5 leading-none select-none">٤٠٤</span>
          <div className="absolute inset-0 flex items-center justify-center">
             <h1 className="text-8xl font-headline font-bold text-[#ad2c00]">404</h1>
          </div>
        </div>
        
        <div className="space-y-4">
          <h2 className="text-3xl font-headline font-bold text-[#570000]">Path Not Found</h2>
          <p className="text-[#5a413d] text-balance leading-relaxed">
            It seems this path has wandered away from the sanctuary. Let us guide you back to the essence of our community.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Link 
            href="/" 
            className="px-8 py-4 bg-[#570000] text-white font-bold rounded-full hover:bg-[#ad2c00] transition-all shadow-xl hover:scale-105 btn-press"
          >
            Return to Sanctuary
          </Link>
          <Link 
            href="/contact" 
            className="px-8 py-4 border-2 border-[#570000]/10 text-[#570000] font-bold rounded-full hover:bg-[#570000]/5 transition-all"
          >
            Contact Support
          </Link>
        </div>
        
        <div className="pt-12">
           <p className="text-xs font-headline italic text-[#570000]/40 uppercase tracking-widest leading-loose">
             Pure Essence School<br/>
             مدرسة الجوهر النقي
           </p>
        </div>
      </div>
    </div>
  );
}
