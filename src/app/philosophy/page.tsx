import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
  title: "Philosophy | Pure Essence School",
  description: "Discover the educational philosophy of Pure Essence School — Purity, Piety, and Purpose. Blending Quranic excellence with modern survival skills.",
};

export default function PhilosophyPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="relative px-6 lg:px-16 py-28 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-2/3 h-full bg-[#570000]/4 rounded-bl-[30rem]" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#c9a900]/8 curve-blob" />
        </div>
        {/* Arabic watermark */}
        <div className="absolute inset-0 flex items-center justify-end pr-20 -z-10 pointer-events-none overflow-hidden">
          <span className="text-[18rem] font-headline text-[#570000]/[0.03] leading-none select-none">الجوهر</span>
        </div>

        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <AnimatedSection>
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-[#f4f3f2] rounded-full">
                <span className="w-2 h-2 rounded-full bg-[#ad2c00]" />
                <span className="text-xs font-bold uppercase tracking-widest text-[#5a413d]">Purity, Piety, and Purpose</span>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <h1 className="text-6xl lg:text-7xl font-headline font-bold text-[#570000] leading-tight tracking-tight">
                The Fluid<br /><span className="text-[#ad2c00] italic">Sanctuary</span><br />of Knowledge
              </h1>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="text-2xl font-headline text-[#570000]/30">ملاذ المعرفة</div>
            </AnimatedSection>
            <AnimatedSection delay={0.3}>
              <p className="text-lg text-[#5a413d] leading-relaxed max-w-lg">
                At Pure Essence School, we redefine education by blending traditional spiritual anchors with future-ready survival skills. We don&apos;t just fill a bucket — we light a fire.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.4}>
              <Link href="/admissions" className="inline-flex items-center gap-2 px-10 py-5 bg-[#570000] text-white font-bold rounded-tl-3xl rounded-br-3xl rounded-tr-lg rounded-bl-lg hover:bg-[#ad2c00] transition-all shadow-xl btn-press">
                Discover Our Philosophy
              </Link>
            </AnimatedSection>
          </div>

          <AnimatedSection direction="right" delay={0.2}>
            <div className="relative max-w-lg mx-auto">
              <div className="curve-organic-1 overflow-hidden bg-[#ffdad4]/40 aspect-square shadow-2xl">
                <Image
                  src="/images/chibi_quran_student_1775112942326.png"
                  alt="Islamic student with Quran"
                  fill
                  className="object-contain p-8"
                  sizes="500px"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 glass rounded-3xl p-6 shadow-2xl max-w-[220px]">
                <p className="font-headline text-[#570000] text-base italic">&ldquo;Success is a habit of the soul.&rdquo;</p>
              </div>
              <div className="absolute -top-6 -right-6 bg-[#570000] rounded-3xl p-4 flex items-center gap-3 shadow-2xl">
                <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2} className="w-6 h-6">
                  <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                </svg>
                <span className="text-white font-bold text-sm">Piety First</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Three Pillars Deep-dive */}
      <section className="py-28 px-6 lg:px-16 bg-[#f4f3f2] relative overflow-hidden">
        <div className="max-w-screen-2xl mx-auto">
          <AnimatedSection className="text-center mb-20">
            <h2 className="text-5xl font-headline font-bold text-[#570000]">The Three Pillars</h2>
            <div className="text-2xl font-headline text-[#570000]/30 mt-3">الطهارة · التقوى · الهدف</div>
          </AnimatedSection>

          <div className="space-y-8">
            {[
              {
                no: "01",
                arabic: "الطهارة",
                title: "Purity",
                body: "A pure heart is the foundation of true intelligence. We cultivate Tazkiyah — purification of the soul — through Quranic recitation, daily Adhkar, and modelling prophetic character in every classroom interaction. We believe a child whose heart is clean will absorb knowledge with sincerity and retain it with barakah.",
                image: "/images/chibi_halqoh_1775112818948.png",
                reverse: false,
              },
              {
                no: "02",
                arabic: "التقوى",
                title: "Piety",
                body: "God-consciousness is not reserved for the Masjid — it permeates our maths lessons, our sports field, and our coding lab. We instil the understanding that every action is an ibadah when done with the right intention. Taqwa is the invisible thread woven through every subject and every interaction at Pure Essence.",
                image: "/images/chibi_primary_student_1775112747936.png",
                reverse: true,
              },
              {
                no: "03",
                arabic: "الهدف",
                title: "Purpose",
                body: "We equip students not just to survive, but to lead. From critical thinking frameworks to robotics, from leadership labs to Fiqh of contemporary issues — our students graduate with a clear sense of why they exist and what they are building. They are the beneficial scholars and innovators the Ummah needs.",
                image: "/images/chibi_secondary_student_1775112762285.png",
                reverse: false,
              },
            ].map((pillar, i) => (
              <AnimatedSection key={pillar.no} delay={0.1}>
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${pillar.reverse ? "" : ""}`}>
                  <div className={`space-y-6 ${pillar.reverse ? "lg:order-2" : ""}`}>
                    <div className="flex items-baseline gap-4">
                      <span className="text-7xl font-headline font-bold text-[#570000]/10">{pillar.no}</span>
                      <div>
                        <div className="text-2xl font-headline text-[#ad2c00]">{pillar.arabic}</div>
                        <h2 className="text-4xl font-headline font-bold text-[#570000]">{pillar.title}</h2>
                      </div>
                    </div>
                    <p className="text-[#5a413d] leading-relaxed text-base max-w-lg">{pillar.body}</p>
                  </div>
                  <div className={`${pillar.reverse ? "lg:order-1" : ""}`}>
                    <div className="curve-organic-2 overflow-hidden bg-[#ffdad4]/30 aspect-square max-w-sm mx-auto">
                      <Image src={pillar.image} alt={pillar.title} fill className="object-contain p-8" sizes="400px" />
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum of Survival */}
      <section className="py-28 px-6 lg:px-16 bg-white">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <AnimatedSection direction="left">
            <div className="relative">
              <div className="curve-organic-3 overflow-hidden bg-[#570000]/5 aspect-[4/5] max-w-md">
                <Image src="/images/chibi_robotics_1775112998397.png" alt="Robotics learning" fill className="object-contain p-10" sizes="450px" />
              </div>
              <div className="absolute -top-8 -left-8 bg-[#ad2c00] text-white rounded-3xl p-5 shadow-2xl max-w-[200px]">
                <p className="font-headline text-base">&ldquo;Technology is our Amanah.&rdquo;</p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={0.1}>
            <div className="space-y-10">
              <div>
                <span className="text-[#ad2c00] font-bold tracking-widest uppercase text-xs block mb-3">Our Methodology</span>
                <h2 className="text-5xl font-headline font-bold text-[#570000]">The Curriculum<br />of <span className="text-[#ad2c00]">Survival</span></h2>
              </div>
              <div className="space-y-8">
                {[
                  { no: "01", title: "Cognitive Agility", desc: "Moving beyond rote memorisation to analytical problem-solving and critical thinking frameworks grounded in Islamic epistemology." },
                  { no: "02", title: "Linguistic Mastery", desc: "Multilingual excellence in Arabic, English, and Programming Languages — three tongues that unlock the global stage." },
                  { no: "03", title: "Emotional Intelligence", desc: "Prophetic models of empathy and character-building for ethical leadership in a digital, post-modern age." },
                ].map((item) => (
                  <div key={item.no} className="flex gap-6 group cursor-default">
                    <span className="text-5xl font-headline font-bold text-[#e2bfb9] group-hover:text-[#ad2c00] transition-colors flex-shrink-0">{item.no}</span>
                    <div>
                      <h4 className="text-xl font-bold text-[#570000] mb-1">{item.title}</h4>
                      <p className="text-[#5a413d] text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 lg:px-16 bg-[#570000] relative overflow-hidden text-center">
        <div className="absolute inset-0 opacity-10">
          <Image src="/images/arabesque_pattern_1775112960360.png" alt="" fill className="object-cover pointer-events-none" />
        </div>
        <div className="relative z-10 space-y-8 max-w-3xl mx-auto">
          <AnimatedSection>
            <h2 className="text-5xl font-headline font-bold text-white">Join a Community<br />That Lights a Fire</h2>
            <p className="text-[#ffb4a8] text-lg mt-4 font-light">
              Education at Pure Essence is not about filling a bucket — it&apos;s about igniting a torch of moral clarity and intellectual vigour.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.2} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/admissions" className="px-12 py-5 bg-white text-[#570000] font-bold rounded-full hover:bg-[#ffdad4] hover:scale-105 transition-all shadow-xl btn-press">
              Start Your Journey
            </Link>
            <a
              href="/brochure.pdf"
              download="PureEssenceSchool-Brochure.pdf"
              className="px-12 py-5 border-2 border-white/30 text-white font-bold rounded-full hover:bg-white/10 transition-all flex items-center justify-center gap-2"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5">
                <path d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
              </svg>
              Download Brochure
            </a>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
