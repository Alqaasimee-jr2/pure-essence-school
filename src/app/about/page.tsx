import type { Metadata } from "next";
import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
  title: "About Us | Pure Essence School",
  description: "Learn about Pure Essence School — our founding story, mission, vision, and the values that shape everything we do in Ibogun, Ogun State.",
};

const VALUES = [
  { icon: "✦", title: "Tawhid", desc: "All knowledge flows from the One — every subject taught through the lens of divine unity." },
  { icon: "☾", title: "Tarbiyah", desc: "Deliberate character formation, not accidental. Every teacher is a mentor in Akhlaaq." },
  { icon: "◈", title: "Ilm", desc: "Knowledge is worship. We pursue excellence in deen and dunya with equal vigour." },
  { icon: "⬡", title: "Amanah", desc: "Trust — with parents, students, and society — is the foundation of our institution." },
  { icon: "◎", title: "Excellence", desc: "Mediocrity is not an option. Every child is capable of greatness with the right nurturing." },
  { icon: "⟐", title: "Community", desc: "School is not a building — it is a community of learning, worship, and care." },
];

export default function AboutPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="relative px-6 lg:px-16 py-28 overflow-hidden">
        <div className="absolute top-0 right-0 w-2/3 h-full bg-[#570000]/4 rounded-bl-[30rem] -z-10" />
        <div className="absolute inset-0 flex items-center justify-center -z-10 pointer-events-none overflow-hidden">
          <span className="text-[20rem] font-headline text-[#570000]/[0.025] leading-none select-none">عن</span>
        </div>
        <div className="max-w-screen-2xl mx-auto">
          <AnimatedSection>
            <span className="text-[#ad2c00] font-bold tracking-widest uppercase text-xs block mb-4">Our Story</span>
            <h1 className="text-7xl lg:text-8xl font-headline font-bold text-[#570000] leading-none tracking-tighter mb-6">
              About<br /><span className="text-[#ad2c00] italic">Pure Essence.</span>
            </h1>
            <p className="text-xl text-[#5a413d] max-w-2xl leading-relaxed">
              Born from a deep desire to give Muslim children in Nigeria an education worthy of their potential — and their Deen.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 px-6 lg:px-16 bg-white">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <AnimatedSection direction="left">
            <div className="space-y-6">
              <h2 className="text-5xl font-headline font-bold text-[#570000]">Our Founding<br />Story</h2>
              <div className="space-y-4 text-[#5a413d] leading-relaxed">
                <p>
                  Pure Essence School was established with a singular conviction: that the children of this community deserve an education that honours both their <em>deen</em> and their intellect. The school was founded in Ibogun, Ogun State, by educators who saw a gap — schools that taught secular subjects excellently but neglected the soul, and Islamic schools that nurtured the heart but left the mind underdeveloped.
                </p>
                <p>
                  Our founders resolved to build something different. A school where a child could memorise Quran in the morning, write Python code in the afternoon, and lead a Halaqah circle by evening — all in the same compound, under the same roof, with the same sense of purpose.
                </p>
                <p>
                  Today, Pure Essence stands as a testament to what is possible when piety meets purpose. Our graduates are not just academically excellent — they are morally grounded, community-conscious, and future-ready.
                </p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={0.15}>
            <div className="relative">
              <div className="curve-organic-1 overflow-hidden bg-[#ffdad4]/40 aspect-square max-w-lg mx-auto">
                <Image
                  src="/images/chibi_teacher_1775112786507.png"
                  alt="Pure Essence School teacher"
                  fill
                  className="object-contain p-8"
                  sizes="500px"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 glass rounded-3xl p-6 shadow-2xl max-w-xs">
                <div className="text-xs uppercase tracking-widest text-[#5a413d] font-bold mb-2">School Motto</div>
                <div className="font-headline text-[#570000] font-bold text-lg">&ldquo;Knowledge is the Light of the Soul&rdquo;</div>
                <div className="text-[#5a413d]/60 font-headline text-sm mt-1">العلم نور الروح</div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-28 px-6 lg:px-16 bg-[#f4f3f2] relative overflow-hidden">
        <div className="absolute -top-16 -right-16 w-72 h-72 bg-[#c9a900]/6 curve-blob -z-0 pointer-events-none" />
        <div className="max-w-screen-2xl mx-auto relative z-10">
          <AnimatedSection className="text-center mb-20">
            <h2 className="text-5xl font-headline font-bold text-[#570000]">Mission &amp; Vision</h2>
            <div className="text-xl font-headline text-[#570000]/30 mt-3">الرسالة والرؤية</div>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <AnimatedSection direction="left">
              <div className="bg-[#570000] curve-organic-1 p-14 relative overflow-hidden h-full">
                <div className="absolute top-4 right-6 text-7xl font-headline text-white/5 select-none pointer-events-none">رسالة</div>
                <div className="text-[#ffb4a8] text-xs font-bold uppercase tracking-widest mb-4">Our Mission</div>
                <h3 className="text-3xl font-headline font-bold text-white mb-6">Raising Faithful<br />Thinkers</h3>
                <p className="text-white/80 leading-relaxed">
                  To provide a holistic, values-driven education that equips every child with Quranic grounding, critical thinking, and the technical skills to serve their communities and contribute to the global advancement of human civilisation — as Muslims.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.1}>
              <div className="bg-white curve-organic-2 p-14 relative overflow-hidden h-full border border-[#e2bfb9]/30">
                <div className="absolute top-4 right-6 text-7xl font-headline text-[#570000]/5 select-none pointer-events-none">رؤية</div>
                <div className="text-[#ad2c00] text-xs font-bold uppercase tracking-widest mb-4">Our Vision</div>
                <h3 className="text-3xl font-headline font-bold text-[#570000] mb-6">To be Nigeria&apos;s<br />Premier Islamic School</h3>
                <p className="text-[#5a413d] leading-relaxed">
                  To be the most trusted Islamic educational institution in Nigeria — recognised for producing graduates who excel in academic achievement, professional excellence, and uncompromising moral character, wherever they go in the world.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-28 px-6 lg:px-16 bg-white">
        <div className="max-w-screen-2xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-5xl font-headline font-bold text-[#570000]">Core Values</h2>
            <div className="text-xl font-headline text-[#570000]/30 mt-3">قيمنا الأساسية</div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {VALUES.map((v, i) => (
              <AnimatedSection key={v.title} delay={i * 0.08}>
                <div className="group bg-[#f4f3f2] rounded-3xl p-8 hover:bg-[#570000] transition-all duration-500 cursor-default">
                  <div className="text-4xl text-[#ad2c00] group-hover:text-[#ffb4a8] mb-4 transition-colors">{v.icon}</div>
                  <h3 className="text-xl font-headline font-bold text-[#570000] group-hover:text-white mb-3 transition-colors">{v.title}</h3>
                  <p className="text-sm text-[#5a413d] group-hover:text-white/70 leading-relaxed transition-colors">{v.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team Teaser */}
      <section className="py-28 px-6 lg:px-16 bg-[#f4f3f2]">
        <div className="max-w-screen-2xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-5xl font-headline font-bold text-[#570000] mb-4">Our Educators</h2>
            <p className="text-[#5a413d] max-w-xl mx-auto mb-14 leading-relaxed">
              Every teacher at Pure Essence is a carefully selected mentor — qualified, pious, and passionate about guiding the next generation.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { role: "Quranic Studies", label: "Ustaz / Ustazah" },
              { role: "Arabic Language", label: "Certified Arabist" },
              { role: "Computing & Robotics", label: "Tech Educator" },
              { role: "Core Subjects", label: "Academic Faculty" },
            ].map((member, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all group">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-[#ffdad4]/40 relative">
                    <Image
                      src="/images/chibi_teacher_1775112786507.png"
                      alt={member.role}
                      fill
                      className="object-contain p-2"
                    />
                  </div>
                  <div className="text-xs uppercase tracking-widest text-[#ad2c00] font-bold mb-1">{member.label}</div>
                  <div className="font-headline font-bold text-[#570000] text-sm">{member.role}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.4} className="mt-12">
            <p className="text-[#5a413d] text-sm">
              Interested in joining our teaching team?{" "}
              <a href="/careers" className="text-[#ad2c00] font-bold hover:underline">View Open Positions →</a>
            </p>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
