import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { WHATSAPP_NUMBER } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Academic Wings | Pure Essence School",
  description: "Explore our academic wings — Creche, Nursery, Primary, and Secondary — at Pure Essence School, Ogun State. Integrated Islamic and modern education.",
};

const WINGS = [
  {
    id: "01",
    title: "Creche & Early Years",
    subtitle: "Ages 0 – 3",
    desc: "A sanctuary of warmth where the first seeds of Iman and curiosity are sown. Our Creche provides a gentle, nurturing transition from home to school through sensory play, gentle Adhkar exposure, and structured motor skill development.",
    tags: ["Sensory Play", "Basic Adhkar", "Motor Skills", "Storytime", "Nutrition"],
    image: "/images/chibi_creche_student_1775112730850.png",
    color: "bg-sky-50",
    textColor: "text-sky-900",
    tagBg: "bg-sky-100 text-sky-700",
    btnBg: "bg-sky-600 hover:bg-sky-700",
    numberColor: "text-sky-200",
    curve: "rounded-tr-[6rem] rounded-bl-[6rem] rounded-tl-2xl rounded-br-2xl",
    reverse: false,
  },
  {
    id: "02",
    title: "Nursery Wing",
    subtitle: "Ages 3 – 5",
    desc: "Building language, numeracy, and social foundations through play-based and structured learning. Students begin formal Arabic letter recognition, phonics in English, and basic Islamic manners (Adab).",
    tags: ["Arabic Letters", "English Phonics", "Adab", "Maths Foundations", "Creative Arts"],
    image: "/images/chibi_creche_student_1775112730850.png",
    color: "bg-[#fffcf0]",
    textColor: "text-[#705d00]",
    tagBg: "bg-[#c9a900]/20 text-[#705d00]",
    btnBg: "bg-[#705d00] hover:bg-[#574800]",
    numberColor: "text-[#c9a900]/30",
    curve: "rounded-tl-[6rem] rounded-br-[6rem] rounded-tr-2xl rounded-bl-2xl",
    reverse: true,
  },
  {
    id: "03",
    title: "Primary Wing",
    subtitle: "Primary 1 – 6",
    desc: "Building the pillars of literacy, numeracy, and character. Our primary curriculum integrates global standards with the rich heritage of Islamic values. Students here begin Quran memorisation journeys and coding fundamentals.",
    tags: ["STEM Literacy", "Arabic Foundations", "Quran Hifz", "Coding Intro", "Character Dev"],
    image: "/images/chibi_primary_student_1775112747936.png",
    color: "bg-amber-50",
    textColor: "text-amber-900",
    tagBg: "bg-amber-100 text-amber-800",
    btnBg: "bg-amber-700 hover:bg-amber-800",
    numberColor: "text-amber-200",
    curve: "rounded-tr-[6rem] rounded-bl-[6rem] rounded-tl-2xl rounded-br-2xl",
    reverse: false,
  },
  {
    id: "04",
    title: "Secondary Academy",
    subtitle: "JSS 1 – SS 3",
    desc: "Preparing the leaders of tomorrow. High-rigor academics meet deep spiritual grounding to produce well-rounded, tech-savvy global citizens with strong moral compasses and career-ready skills.",
    tags: ["Coding & AI", "Leadership Lab", "Advanced Arabic", "Full Hifz", "WAEC/NECO Prep"],
    image: "/images/chibi_secondary_student_1775112762285.png",
    color: "bg-emerald-50",
    textColor: "text-emerald-900",
    tagBg: "bg-emerald-100 text-emerald-700",
    btnBg: "bg-emerald-700 hover:bg-emerald-800",
    numberColor: "text-emerald-200",
    curve: "rounded-tl-[6rem] rounded-br-[6rem] rounded-tr-2xl rounded-bl-2xl",
    reverse: true,
  },
];

const SPECIALIZED = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-10 h-10">
        <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
      </svg>
    ),
    title: "Full Tahfeedh Program",
    desc: "A dedicated pathway for students to memorise the entire Holy Quran with proper Tajweed and deep understanding — without compromising core academic progress. Our huffadh graduate with both Ijazah and full secondary qualifications.",
    color: "text-[#570000]",
    bg: "bg-[#ffdad4]",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-10 h-10">
        <path d="M3 21 l9-9m0 0l9-9M12 12l-9-9m9 9l9 9"/>
        <circle cx="12" cy="12" r="10"/>
      </svg>
    ),
    title: "Islamiyat & Character",
    desc: "Beyond academics — we focus on Tarbiyah of the heart. Detailed studies of Fiqh, Seerah, Tafseer, and Akhlaq are woven throughout all years. Every student graduates as a thoughtful, ethical Muslim.",
    color: "text-[#ad2c00]",
    bg: "bg-[#ffdad4]/40",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-10 h-10">
        <path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18"/>
      </svg>
    ),
    title: "Coding & Robotics Lab",
    desc: "From Scratch to Python, from circuits to autonomous robots — our STEM lab equips students with real-world tech skills treated as a survival necessity, not a luxury. Students build and demo projects each term.",
    color: "text-emerald-700",
    bg: "bg-emerald-50",
  },
];

export default function AcademicsPage() {
  const tourWaLink = `https://wa.me/${WHATSAPP_NUMBER}?text=Assalamu%20Alaikum%2C%20I%27d%20like%20to%20schedule%20a%20school%20tour%20at%20Pure%20Essence%20School.%20Please%20advise%20on%20available%20dates.`;
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="relative px-6 lg:px-16 py-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#570000]/3 rounded-bl-[20rem] -z-10" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#c9a900]/5 curve-blob -z-10" />
        <div className="max-w-screen-2xl mx-auto">
          <AnimatedSection>
            <span className="text-[#ad2c00] font-bold tracking-widest uppercase text-xs block mb-4">Our Curriculum</span>
            <h1 className="text-7xl lg:text-9xl font-headline font-bold text-[#570000] leading-none tracking-tighter mb-6">
              Academic<br /><span className="text-[#ad2c00] italic">Wings.</span>
            </h1>
            <p className="text-xl text-[#5a413d] max-w-2xl leading-relaxed">
              Nurturing intellectual and spiritual growth through a fluid, multi-disciplinary approach. From the first steps of curiosity to the heights of secondary excellence.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Wings */}
      <section className="px-6 lg:px-16 pb-28 space-y-36">
        <div className="max-w-screen-2xl mx-auto">
          {WINGS.map((wing, i) => (
            <AnimatedSection key={wing.id} delay={0.1} className="mb-0">
              <div className={`grid grid-cols-1 lg:grid-cols-12 items-center gap-12`}>
                <div className={`lg:col-span-7 ${wing.curve} ${wing.color} p-12 lg:p-20 relative overflow-hidden shadow-xl ${wing.reverse ? "lg:order-2" : ""}`}>
                  <span className={`absolute top-6 right-8 text-8xl font-headline font-bold select-none ${wing.numberColor}`}>{wing.id}</span>
                  <h2 className={`text-5xl font-headline font-bold ${wing.textColor} mb-2`}>{wing.title}</h2>
                  <div className={`text-sm font-bold uppercase tracking-widest ${wing.textColor}/60 mb-6`}>{wing.subtitle}</div>
                  <p className={`text-base ${wing.textColor}/80 leading-relaxed mb-8 max-w-lg`}>{wing.desc}</p>
                  <div className="flex flex-wrap gap-3 mb-10">
                    {wing.tags.map((tag) => (
                      <span key={tag} className={`px-4 py-1.5 rounded-full text-xs font-bold ${wing.tagBg}`}>{tag}</span>
                    ))}
                  </div>
                  <Link
                    href="/admissions"
                    className={`inline-flex items-center gap-2 ${wing.btnBg} text-white px-8 py-4 rounded-full font-bold transition-all hover:scale-105 shadow-lg btn-press`}
                  >
                    Apply for This Wing
                  </Link>
                </div>

                <div className={`lg:col-span-5 flex justify-center ${wing.reverse ? "lg:order-1" : ""}`}>
                  <div className="w-full max-w-sm aspect-square relative">
                    <div className={`w-full h-full ${wing.curve} overflow-hidden ${wing.color}/50`}>
                      <Image
                        src={wing.image}
                        alt={wing.title}
                        fill
                        className="object-contain p-8"
                        sizes="(max-width: 768px) 100vw, 400px"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Specialized Programs */}
      <section className="py-28 px-6 lg:px-16 bg-[#f4f3f2]">
        <div className="max-w-screen-2xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <span className="text-[#ad2c00] font-bold tracking-widest uppercase text-xs block mb-4">Beyond the Classroom</span>
            <h2 className="text-5xl font-headline font-bold text-[#570000]">Specialized Excellence</h2>
            <div className="w-24 h-1 bg-[#ad2c00] mx-auto rounded-full mt-6" />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SPECIALIZED.map((prog, i) => (
              <AnimatedSection key={i} delay={i * 0.12}>
                <div className={`${prog.bg} p-12 rounded-3xl group hover:-translate-y-2 transition-all duration-500 h-full`}>
                  <div className={`${prog.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>{prog.icon}</div>
                  <h3 className={`text-2xl font-headline font-bold ${prog.color} mb-4`}>{prog.title}</h3>
                  <p className="text-[#5a413d] leading-relaxed text-sm">{prog.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32 px-6 lg:px-16 bg-[#570000] overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <Image src="/images/arabesque_pattern_1775112960360.png" alt="" fill className="object-cover" />
        </div>
        <div className="max-w-screen-xl mx-auto text-center relative z-10 space-y-8">
          <AnimatedSection>
            <h2 className="text-5xl lg:text-6xl font-headline font-bold text-white">Begin the Journey<br />of Essence.</h2>
            <p className="text-[#ffb4a8] max-w-2xl mx-auto mt-4 text-lg font-light leading-relaxed">
              Our admissions are currently open for all wings. Secure your child&apos;s place in the sanctuary where piety meets purpose.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.2} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/admissions" className="px-12 py-5 bg-white text-[#570000] font-bold rounded-full hover:bg-[#ffdad4] hover:scale-105 transition-all shadow-xl btn-press text-lg">
              Enroll Your Child
            </Link>
            <a
              href={tourWaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-12 py-5 border-2 border-white/30 text-white font-bold rounded-full hover:bg-white/10 transition-all text-lg flex items-center justify-center gap-2"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Request a Tour
            </a>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
