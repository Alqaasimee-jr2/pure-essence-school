import type { Metadata } from "next";
import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";
import CareersForm from "@/components/forms/CareersForm";

export const metadata: Metadata = {
  title: "Careers | Teach at Pure Essence School, Ogun State",
  description:
    "Join the Pure Essence School teaching team — an Islamic school in Ibogun, Ogun State, Nigeria. Open roles for Quran, Arabic, STEM, and core subject teachers.",
  openGraph: {
    title: "Teaching Careers | Pure Essence School",
    description: "Teach with Purpose. Join a school where your faith is your foundation and your classroom is your ibadah.",
  },
};

const OPEN_ROLES = [
  { title: "Arabic Language Teacher", type: "Full-Time", level: "Primary & Secondary" },
  { title: "Quran / Tahfeedh Teacher", type: "Full-Time", level: "All Wings" },
  { title: "Computing & Coding Teacher", type: "Full-Time", level: "Primary & Secondary" },
  { title: "Early Years Educator", type: "Full-Time", level: "Creche & Nursery" },
  { title: "Islamic Studies Teacher", type: "Full-Time", level: "All Wings" },
  { title: "Mathematics Teacher", type: "Full-Time", level: "Primary & Secondary" },
];

const PERKS = [
  { icon: "🌙", title: "Spiritual Environment", desc: "Work in a school where your values are celebrated, not tolerated." },
  { icon: "📚", title: "CPD & Training", desc: "Continuous professional development and Islamic pedagogy training." },
  { icon: "🤝", title: "Tight-Knit Community", desc: "Join a family of educators who genuinely care for each other." },
  { icon: "🌱", title: "Growth Opportunities", desc: "Clear pathways to senior academic and administrative roles." },
];

export default function CareersPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="relative px-6 lg:px-16 py-28 overflow-hidden">
        <div className="absolute top-0 right-0 w-2/3 h-full bg-[#570000]/4 rounded-bl-[30rem] -z-10" />
        <div className="absolute inset-0 flex items-center justify-center -z-10 pointer-events-none overflow-hidden">
          <span className="text-[12rem] lg:text-[18rem] font-headline text-[#570000]/[0.025] leading-none select-none">توظيف</span>
        </div>
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-7">
            <AnimatedSection>
              <span className="text-[#ad2c00] font-bold tracking-widest uppercase text-xs block mb-4">Join Our Mission</span>
              <h1 className="text-5xl lg:text-7xl font-headline font-bold text-[#570000] leading-tight tracking-tight">
                Teach with<br /><span className="text-[#ad2c00] italic">Purpose.</span>
              </h1>
              <div className="text-lg lg:text-xl font-headline text-[#570000]/40">درِّس بهدف</div>
              <p className="text-[#5a413d] leading-relaxed max-w-lg mt-4">
                Join a team of educators who believe that teaching is a noble calling — not just a career. At Pure Essence, your work is ibadah.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <a href="#apply" className="inline-flex items-center gap-2 px-10 py-5 bg-[#570000] text-white font-bold rounded-full hover:bg-[#ad2c00] transition-all shadow-xl hover:scale-105 btn-press">
                Apply Now
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </AnimatedSection>
          </div>
          <AnimatedSection direction="right" delay={0.15} className="flex justify-center">
            <Image
              src="/images/chibi_teacher_1775112786507.png"
              alt="Teacher at Pure Essence School"
              width={420}
              height={420}
              className="object-contain drop-shadow-2xl"
              priority
            />
          </AnimatedSection>
        </div>
      </section>

      {/* Why Teach Here */}
      <section className="py-24 px-6 lg:px-16 bg-[#f4f3f2]">
        <div className="max-w-screen-2xl mx-auto">
          <AnimatedSection className="text-center mb-14">
            <h2 className="text-4xl lg:text-5xl font-headline font-bold text-[#570000]">Why Teach at<br />Pure Essence?</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PERKS.map((perk, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="bg-white rounded-3xl p-8 hover:-translate-y-2 transition-all duration-400 shadow-sm hover:shadow-xl">
                  <div className="text-4xl mb-4">{perk.icon}</div>
                  <h3 className="font-headline font-bold text-[#570000] text-lg mb-2">{perk.title}</h3>
                  <p className="text-[#5a413d] text-sm leading-relaxed">{perk.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Open Roles */}
      <section className="py-24 px-6 lg:px-16 bg-white">
        <div className="max-w-screen-2xl mx-auto">
          <AnimatedSection className="mb-12">
            <h2 className="text-4xl lg:text-5xl font-headline font-bold text-[#570000]">Open Positions</h2>
            <p className="text-[#5a413d] mt-3">Current vacancies at Pure Essence School.</p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {OPEN_ROLES.map((role, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="group flex items-center justify-between p-5 lg:p-6 rounded-2xl border border-[#e2bfb9]/30 hover:border-[#570000] hover:bg-[#570000] transition-all duration-300 cursor-pointer">
                  <div>
                    <div className="font-bold text-[#570000] group-hover:text-white transition-colors">{role.title}</div>
                    <div className="text-xs text-[#5a413d] group-hover:text-white/60 mt-1 transition-colors">{role.level} · {role.type}</div>
                  </div>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5 text-[#ad2c00] group-hover:text-white flex-shrink-0 transition-colors">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CareersForm />
    </div>
  );
}
