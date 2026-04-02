"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import StatCounter from "@/components/ui/StatCounter";
import EventCard from "@/components/ui/EventCard";
import { EVENTS, WHATSAPP_NUMBER, EMAIL } from "@/lib/constants";

const MARQUEE_ITEMS = [
  "الطهارة", "Purity", "التقوى", "Piety", "الهدف", "Purpose",
  "القرآن الكريم", "Quran", "التميز", "Excellence", "الإيمان", "Faith",
  "الطهارة", "Purity", "التقوى", "Piety", "الهدف", "Purpose",
  "القرآن الكريم", "Quran", "التميز", "Excellence", "الإيمان", "Faith",
];

const CURRICULUM_ITEMS = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
        <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
      </svg>
    ),
    title: "Islamic Arts & Science",
    desc: "Every subject infused with Tawhid. Students see the world through the lens of faith.",
    color: "bg-[#ffdad4]",
    iconColor: "text-[#570000]",
    span: "md:col-span-2",
    image: "/images/arabesque_pattern_1775112960360.png",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
        <path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18"/>
      </svg>
    ),
    title: "Future-Ready Tech",
    desc: "Robotics & AI Ethics from age 6.",
    color: "bg-[#570000]",
    iconColor: "text-[#ffb4a8]",
    textColor: "text-white",
    descColor: "text-white/70",
    span: "md:col-span-1",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
        <circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20"/>
      </svg>
    ),
    title: "Global Leaders",
    desc: "Western curriculum with an Islamic conscience.",
    color: "bg-[#ad2c00]",
    iconColor: "text-[#ffdbd1]",
    textColor: "text-white",
    descColor: "text-white/70",
    span: "md:col-span-1",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
        <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0"/>
      </svg>
    ),
    title: "Ethical Character",
    desc: "Weekly Halaqah sessions on Tazkiyah and prophetic leadership for modern challenges.",
    color: "bg-[#f4f3f2]",
    iconColor: "text-[#705d00]",
    span: "md:col-span-2",
  },
];

export default function HomePage() {
  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=Assalamu%20Alaikum%2C%20I%27d%20like%20to%20enquire%20about%20admissions%20at%20Pure%20Essence%20School.`;
  const featuredEvents = EVENTS.slice(0, 3);

  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-20 px-6 lg:px-16">
        {/* Background blobs */}
        <div className="absolute top-0 right-0 w-[55%] h-[75%] bg-[#570000]/4 rounded-bl-[40%] -z-10" />
        <div className="absolute bottom-0 left-0 w-[40%] h-[50%] bg-[#ad2c00]/3 rounded-tr-[40%] -z-10" />

        {/* Arabic watermark */}
        <div className="absolute inset-0 flex items-center justify-center -z-10 overflow-hidden pointer-events-none select-none">
          <span className="text-[22rem] font-headline leading-none text-[#570000]/[0.025]">الجوهر</span>
        </div>

        <div className="max-w-screen-2xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Text */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-3 px-4 py-2 bg-[#ffdad4] rounded-full"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ad2c00] opacity-60" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#ad2c00]" />
              </span>
              <span className="text-xs font-bold uppercase tracking-widest text-[#570000]">Admissions Now Open</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-6xl lg:text-7xl xl:text-8xl font-headline font-bold text-[#570000] leading-[1.05] tracking-tight"
            >
              Purity,<br />
              Piety, &amp;<br />
              <span className="text-[#ad2c00] italic">Purpose.</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25 }}
              className="text-2xl font-headline text-[#570000]/40 tracking-wide"
            >
              الطهارة · التقوى · الهدف
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg text-[#5a413d] max-w-lg leading-relaxed"
            >
              Bridging the gap between Quranic excellence and cutting-edge modern education. We nurture the whole child — from Creche to Secondary — for a digital world anchored in faith.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/admissions"
                className="px-10 py-5 bg-[#570000] text-white font-bold text-base rounded-tl-3xl rounded-br-3xl rounded-tr-lg rounded-bl-lg hover:bg-[#ad2c00] hover:scale-105 transition-all duration-300 shadow-xl shadow-[#570000]/20 text-center btn-press"
              >
                Apply for Admission
              </Link>
              <Link
                href="/academics"
                className="px-10 py-5 border-2 border-[#570000]/20 text-[#570000] font-bold text-base rounded-full hover:bg-[#570000] hover:text-white transition-all duration-300 text-center flex items-center justify-center gap-2"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5">
                  <path d="M12 7v10M7 12l5 5 5-5"/>
                </svg>
                Explore Curriculum
              </Link>
            </motion.div>
          </div>

          {/* Right: Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative curve-organic-1 overflow-hidden bg-[#ffdad4]/40 aspect-square max-w-xl mx-auto shadow-[0_60px_120px_-20px_rgba(87,0,0,0.2)]">
              <Image
                src="/images/hero_student_chibi_1775112714477.png"
                alt="Chibi Islamic student at Pure Essence School"
                fill
                className="object-contain p-8"
                priority
              />
            </div>
            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="absolute -bottom-6 -left-6 glass rounded-3xl px-6 py-4 shadow-2xl"
            >
              <div className="text-xs uppercase tracking-widest text-[#5a413d] font-bold mb-1">School Motto</div>
              <div className="font-headline text-[#570000] font-bold text-lg leading-tight">&ldquo;Piety First&rdquo;</div>
              <div className="text-[#5a413d]/60 text-xs mt-0.5">التقوى أولاً</div>
            </motion.div>
            {/* Arabesque corner ornament */}
            <motion.div
              initial={{ opacity: 0, rotate: -20 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ delay: 0.7, type: "spring" }}
              className="absolute -top-8 -right-8 w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-xl"
            >
              <Image
                src="/images/arabesque_pattern_1775112960360.png"
                alt="Arabesque ornament"
                fill
                className="object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ===== MARQUEE ===== */}
      <div className="bg-[#570000] py-5 overflow-hidden">
        <div className="flex whitespace-nowrap">
          <div className="marquee-track flex gap-12 items-center">
            {MARQUEE_ITEMS.map((item, i) => (
              <span key={i} className={`text-base font-bold ${i % 2 === 0 ? "text-white font-headline" : "text-[#ffb4a8] text-sm font-body"} px-2`}>
                {item} {i % 2 !== 0 && <span className="text-[#ad2c00]/60 mx-2">✦</span>}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ===== STATS ===== */}
      <AnimatedSection className="py-20 px-6 lg:px-16 bg-white">
        <div className="max-w-screen-xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-12">
          <StatCounter value={200} suffix="+" label="Students Enrolled" />
          <StatCounter value={9} label="Academic Programs" />
          <StatCounter value={15} suffix="+" label="Qualified Educators" />
          <StatCounter value={100} suffix="%" label="Parent Satisfaction" />
        </div>
      </AnimatedSection>

      {/* ===== DUAL PILLAR CURRICULUM (BENTO) ===== */}
      <section className="py-28 px-6 lg:px-16 bg-[#f4f3f2] relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#570000]/4 curve-blob pointer-events-none" />
        <div className="max-w-screen-2xl mx-auto">
          <AnimatedSection className="mb-16">
            <div className="flex flex-col md:flex-row justify-between items-end gap-6">
              <div>
                <span className="text-[#ad2c00] font-bold tracking-widest uppercase text-xs block mb-3">Our Offering</span>
                <h2 className="text-5xl font-headline font-bold text-[#570000]">The Dual Pillar<br />Curriculum</h2>
              </div>
              <p className="text-[#5a413d] max-w-sm text-base leading-relaxed">
                Two pillars, one vision: Deen and Dunya — woven inseparably together.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {CURRICULUM_ITEMS.map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.1} className={item.span || ""}>
                <motion.div
                  whileHover={{ y: -6, scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className={`${item.color} p-10 rounded-3xl relative overflow-hidden group cursor-pointer h-full min-h-[220px] flex flex-col justify-between`}
                >
                  {item.image && (
                    <div className="absolute inset-0 opacity-10 pointer-events-none">
                      <Image src={item.image} alt="" fill className="object-cover" />
                    </div>
                  )}
                  <div className={`${item.iconColor || "text-[#570000]"} mb-4`}>{item.icon}</div>
                  <div>
                    <h3 className={`text-xl font-bold font-headline mb-2 ${item.textColor || "text-[#570000]"}`}>{item.title}</h3>
                    <p className={`text-sm leading-relaxed ${item.descColor || "text-[#5a413d]"}`}>{item.desc}</p>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.4} className="mt-10 text-center">
            <Link href="/academics" className="inline-flex items-center gap-2 text-[#570000] font-bold border-2 border-[#570000]/20 px-8 py-4 rounded-full hover:bg-[#570000] hover:text-white hover:border-[#570000] transition-all duration-300">
              View Full Curriculum
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== THREE PILLARS ===== */}
      <section className="py-28 px-6 lg:px-16 bg-white relative overflow-hidden">
        <div className="max-w-screen-2xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-5xl font-headline font-bold text-[#570000] mb-4">Our Three Pillars</h2>
            <div className="text-2xl font-headline text-[#570000]/30">الطهارة · التقوى · الهدف</div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                arabic: "الطهارة",
                title: "Purity",
                desc: "Cultivating a heart that seeks excellence through Quranic wisdom and prophetic character.",
                icon: "✦",
                curve: "curve-organic-1",
                bg: "bg-[#ffdad4]",
              },
              {
                arabic: "التقوى",
                title: "Piety",
                desc: "Building God-consciousness in every action, academic pursuit, and social interaction.",
                icon: "☾",
                curve: "curve-organic-2",
                bg: "bg-[#570000]",
                dark: true,
              },
              {
                arabic: "الهدف",
                title: "Purpose",
                desc: "Producing purposeful leaders who transform their communities through knowledge and faith.",
                icon: "◈",
                curve: "curve-organic-3",
                bg: "bg-[#c9a900]/10",
              },
            ].map((pillar, i) => (
              <AnimatedSection key={i} delay={i * 0.15}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 250 }}
                  className={`${pillar.bg} ${pillar.curve} p-10 relative overflow-hidden min-h-[300px] flex flex-col justify-between`}
                >
                  <div className={`text-7xl font-headline absolute top-6 right-8 select-none ${pillar.dark ? "text-white/10" : "text-[#570000]/10"}`}>
                    {pillar.arabic}
                  </div>
                  <div className={`text-4xl ${pillar.dark ? "text-[#ffb4a8]" : "text-[#570000]"} mb-6`}>{pillar.icon}</div>
                  <div>
                    <h3 className={`text-3xl font-headline font-bold mb-3 ${pillar.dark ? "text-white" : "text-[#570000]"}`}>
                      {pillar.title}
                    </h3>
                    <div className={`text-sm mb-3 ${pillar.dark ? "text-[#ffb4a8]" : "text-[#ad2c00]"} font-headline`}>{pillar.arabic}</div>
                    <p className={`text-sm leading-relaxed ${pillar.dark ? "text-white/70" : "text-[#5a413d]"}`}>{pillar.desc}</p>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== NEWS & EVENTS ===== */}
      <section className="py-28 px-6 lg:px-16 bg-[#f4f3f2] relative overflow-hidden">
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#ad2c00]/4 curve-blob pointer-events-none" />
        <div className="max-w-screen-2xl mx-auto relative z-10">
          <AnimatedSection>
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div>
                <span className="text-[#ad2c00] font-bold tracking-widest uppercase text-xs block mb-3">Latest Updates</span>
                <h2 className="text-5xl font-headline font-bold text-[#570000]">
                  Essence in Motion:<br />
                  <span className="text-[#ad2c00]">News &amp; Events</span>
                </h2>
              </div>
              <Link href="/events" className="text-[#570000] font-bold text-sm border-2 border-[#570000]/20 px-6 py-3 rounded-full hover:bg-[#570000] hover:text-white hover:border-[#570000] transition-all">
                View All Events
              </Link>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredEvents.map((event, i) => (
              <AnimatedSection key={event.id} delay={i * 0.1}>
                <EventCard {...event} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="py-28 px-6 lg:px-16 bg-white">
        <div className="max-w-screen-2xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <span className="text-[#ad2c00] font-bold tracking-widest uppercase text-xs block mb-3">Parent Voices</span>
            <h2 className="text-5xl font-headline font-bold text-[#570000]">What Families Say</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "Pure Essence didn't just educate my child — it shaped his character. The Quran memorisation program is remarkable.",
                name: "Umm Ibrahim",
                role: "Parent · Primary Wing",
              },
              {
                quote: "The coding classes combined with Islamic studies is exactly what I was looking for. My daughter now builds apps AND leads Halaqah!",
                name: "Brother Yusuf",
                role: "Parent · Secondary Academy",
              },
              {
                quote: "I love how the teachers call each student by good names. The school has a warmth of a genuine Muslim community.",
                name: "Sister Fatimah",
                role: "Parent · Nursery & Primary",
              },
            ].map((t, i) => (
              <AnimatedSection key={i} delay={i * 0.12}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="glass p-8 rounded-3xl relative overflow-hidden"
                >
                  <div className="text-6xl font-headline text-[#570000]/10 absolute -top-2 -left-2 select-none">&ldquo;</div>
                  <p className="text-[#5a413d] leading-relaxed italic mb-6 relative z-10">&ldquo;{t.quote}&rdquo;</p>
                  <div>
                    <div className="font-bold text-[#570000]">{t.name}</div>
                    <div className="text-xs text-[#5a413d]/70 font-semibold uppercase tracking-wider mt-0.5">{t.role}</div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA BAND ===== */}
      <section className="relative overflow-hidden bg-[#570000] py-28 px-6 lg:px-16">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <Image src="/images/arabesque_pattern_1775112960360.png" alt="" fill className="object-cover" />
        </div>
        <div className="max-w-screen-xl mx-auto text-center relative z-10 space-y-8">
          <AnimatedSection>
            <div className="text-4xl font-headline text-[#ffb4a8]/60 mb-4">الجوهر النقي</div>
            <h2 className="text-5xl lg:text-6xl font-headline font-bold text-white">
              Begin the Journey<br />of Essence.
            </h2>
            <p className="text-xl text-[#ffb4a8] max-w-2xl mx-auto mt-6 leading-relaxed font-light">
              Our admissions are open for all wings. Secure a seat in the sanctuary where piety meets purpose.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.2} className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link
              href="/admissions"
              className="px-12 py-5 bg-white text-[#570000] font-bold text-lg rounded-full hover:bg-[#ffdad4] hover:scale-105 transition-all duration-300 shadow-xl btn-press"
            >
              Enroll Your Child
            </Link>
            <a
              href={`mailto:${EMAIL}`}
              className="px-12 py-5 border-2 border-white/30 text-white font-bold text-lg rounded-full hover:bg-white/10 transition-all duration-300"
            >
              Email Us
            </a>
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-12 py-5 border-2 border-[#ffb4a8]/30 text-[#ffb4a8] font-bold text-lg rounded-full hover:bg-white/5 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp Us
            </a>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
