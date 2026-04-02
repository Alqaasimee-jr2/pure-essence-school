import Link from "next/link";
import Image from "next/image";
import {
  SCHOOL_NAME_AR,
  SCHOOL_TAGLINE,
  FOOTER_LINKS,
  PHONE_NUMBERS,
  SCHOOL_ADDRESS,
  EMAIL,
  WHATSAPP_NUMBER,
} from "@/lib/constants";

export default function Footer() {
  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=Assalamu%20Alaikum%2C%20I%20have%20an%20enquiry%20about%20Pure%20Essence%20School.`;

  return (
    <footer className="bg-[#2a0000] text-stone-300 rounded-t-[4rem] mt-20 relative overflow-hidden">
      {/* Arabesque watermark */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none bg-cover bg-center"
        style={{ backgroundImage: `url(/images/arabesque_pattern_1775112960360.png)` }}
      />

      {/* Arabic calligraphy watermark text */}
      <div className="absolute bottom-0 right-0 p-8 pointer-events-none select-none">
        <span className="text-[10rem] leading-none font-headline text-white/5">الجوهر</span>
      </div>

      <div className="relative z-10 max-w-screen-2xl mx-auto px-8 lg:px-20 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand */}
          <div className="lg:col-span-1 space-y-5">
            <div className="flex items-center gap-4">
              <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-white/10 shadow-2xl">
                <Image
                  src="/icon.png"
                  alt="Pure Essence School"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <div className="text-2xl font-headline text-white font-bold">{SCHOOL_NAME_AR}</div>
                <div className="text-[10px] uppercase tracking-[0.25em] text-orange-400 mt-1">Pure Essence School</div>
              </div>
            </div>
            <p className="text-sm text-stone-400 leading-relaxed max-w-xs">
              A sanctuary for intellectual and spiritual growth. Nurturing the pure essence of every child through {SCHOOL_TAGLINE}.
            </p>
            <blockquote className="border-l-2 border-orange-600/40 pl-4 italic text-stone-400 text-xs leading-relaxed">
              &ldquo;Seeking knowledge is an obligation upon every Muslim.&rdquo;
            </blockquote>
            {/* Social icons */}
            <div className="flex gap-3">
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center hover:bg-orange-600 hover:border-orange-600 transition-all duration-300 text-stone-400 hover:text-white"
                aria-label="WhatsApp"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center hover:bg-orange-600 hover:border-orange-600 transition-all duration-300 text-stone-400 hover:text-white"
                aria-label="Email"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-5">
            <h5 className="text-orange-500 font-bold uppercase tracking-widest text-xs">Quick Links</h5>
            <ul className="space-y-3">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-stone-400 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/careers"
                  className="text-orange-400 hover:text-orange-300 hover:translate-x-1 transition-all duration-200 inline-block text-sm font-semibold"
                >
                  🎓 Join Our Team (Careers)
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-5">
            <h5 className="text-orange-500 font-bold uppercase tracking-widest text-xs">Contact Us</h5>
            <ul className="space-y-3">
              {PHONE_NUMBERS.map((p) => (
                <li key={p.number}>
                  <a
                    href={p.href}
                    className="flex items-center gap-3 text-stone-400 hover:text-white transition-colors group text-sm"
                  >
                    <span className="w-7 h-7 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-orange-600 transition-colors flex-shrink-0">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-3 h-3">
                        <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                      </svg>
                    </span>
                    <span>{p.number}</span>
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-center gap-3 text-stone-400 hover:text-white transition-colors group text-sm"
                >
                  <span className="w-7 h-7 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-orange-600 transition-colors flex-shrink-0">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-3 h-3">
                      <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                  </span>
                  <span className="break-all">{EMAIL}</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Address + fees note */}
          <div className="space-y-5">
            <h5 className="text-orange-500 font-bold uppercase tracking-widest text-xs">Visit Our Sanctuary</h5>
            <div className="flex items-start gap-3 text-sm text-stone-400">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4 mt-0.5 flex-shrink-0 text-orange-500">
                <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
              <span className="leading-relaxed">{SCHOOL_ADDRESS}</span>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-xs text-stone-400 leading-relaxed">
              <span className="text-orange-400 font-bold block mb-1">💳 Tuition Payments</span>
              All fee payments are made physically at the school. No online payments required.
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-stone-500">
            © {new Date().getFullYear()} Pure Essence School. Purity, Piety, and Purpose.
          </p>
          <div className="flex items-center gap-2 text-stone-600 text-xs italic">
            <span className="font-headline">الجوهر النقي</span>
            <span>·</span>
            <span>Excellence through Faith</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
