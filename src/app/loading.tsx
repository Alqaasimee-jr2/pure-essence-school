export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#faf9f8]">
      <div className="relative flex flex-col items-center gap-8">
        {/* Animated logo/loader */}
        <div className="relative w-24 h-24">
          <div className="absolute inset-0 border-4 border-[#570000]/10 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-[#ad2c00] rounded-full border-t-transparent animate-spin"></div>
          <div className="absolute inset-0 flex items-center justify-center">
             <span className="text-2xl font-headline font-bold text-[#570000] animate-pulse">ج</span>
          </div>
        </div>
        
        <div className="text-center space-y-2">
          <div className="text-xs uppercase tracking-[0.3em] font-bold text-[#ad2c00] animate-pulse">Loading Essence</div>
          <div className="text-2xl font-headline text-[#570000]/40 italic">مدرسة الجوهر النقي</div>
        </div>
        
        {/* Shimmer bar */}
        <div className="w-48 h-1 bg-[#570000]/5 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-transparent via-[#ad2c00] to-transparent w-full animate-[shimmer_2s_infinite]"></div>
        </div>
      </div>
    </div>
  );
}
