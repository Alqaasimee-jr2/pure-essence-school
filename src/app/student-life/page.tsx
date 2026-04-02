"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { WHATSAPP_NUMBER } from "@/lib/constants";

const ACTIVITIES = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18"/>
      </svg>
    ),
    title: "Robotics Lab",
    desc: "Building future-ready innovators every week.",
    border: "border-[#570000]",
    iconColor: "text-[#570000]",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/>
      </svg>
    ),
    title: "Artisan & Calligraphy",
    desc: "Traditional crafts and Arabic calligraphy as living art.",
    border: "border-[#ad2c00]",
    iconColor: "text-[#ad2c00]",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
      </svg>
    ),
    title: "Quran Circles",
    desc: "Daily Hifz sessions with certified huffadh teachers.",
    border: "border-[#c9a900]",
    iconColor: "text-[#705d00]",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/>
      </svg>
    ),
    title: "Leadership Club",
    desc: "Student councils, debates, and community projects.",
    border: "border-emerald-600",
    iconColor: "text-emerald-700",
  },
];

const SCHEDULE = [
  { day: "Monday", activities: ["Morning Adhkar Assembly", "Core Academics", "Arabic Language"] },
  { day: "Tuesday", activities: ["STEM & Coding Lab", "Sports Session", "Quran Revision"] },
  { day: "Wednesday", activities: ["Creative Arts", "Core Academics", "Islamic Studies"] },
  { day: "Thursday", activities: ["Robotics Club", "Sports Session", "Hifz Circle"] },
  { day: "Friday", activities: ["Jumu'ah Prep", "Weekly Halaqah", "Character Class"] },
];

export default function StudentLifePage() {
  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=Assalamu%20Alaikum%2C%20I%27d%20like%20to%20know%20more%20about%20student%20life%20at%20Pure%20Essence%20School.`;

  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="relative px-6 lg:px-16 py-28 overflow-hidden min-h-[70vh] flex items-center">
        <div className="absolute top-0 right-0 w-2/3 h-full bg-[#570000]/4 rounded-bl-[30rem] -z-10" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#c9a900]/6 curve-blob -z-10" />
        <div className="absolute inset-0 flex items-center justify-center -z-10 pointer-events-none overflow-hidden">
          <span className="text-[20rem] font-headline text-[#570000]/[0.025] leading-none select-none">حياة</span>
        </div>

        <div className="max-w-4xl space-y-8">
          <AnimatedSection>
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-[#f4f3f2] rounded-full">
              <span className="w-2 h-2 rounded-full bg-[#ad2c00]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#5a413d]">Student Life</span>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h1 className="text-6xl lg:text-8xl font-headline font-bold text-[#570000] leading-tight tracking-tight">
              The 360°<br /><span className="text-[#ad2c00] italic">Essence.</span>
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-xl text-[#5a413d] max-w-2xl leading-relaxed">
              We don&apos;t just teach — we cultivate. Every activity at Pure Essence is an intentional step toward personal excellence, spiritual depth, and community service.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.3}>
            <Link href="/admissions" className="inline-flex items-center gap-2 px-10 py-5 bg-[#570000] text-white font-bold rounded-full hover:bg-[#ad2c00] transition-all shadow-xl hover:scale-105 btn-press">
              Explore Programs
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </AnimatedSection>
        </div>

        {/* Floating chibi */}
        <motion.div
          animate={{ y: [0, -16, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          className="hidden lg:block absolute right-20 top-1/4 w-72 h-72"
        >
          <Image
            src="/images/chibi_sports_1775112805705.png"
            alt="Students playing sports"
            fill
            className="object-contain drop-shadow-2xl"
          />
        </motion.div>
      </section>

      {/* Physical & Spiritual Split */}
      <section className="py-28 px-6 lg:px-16 bg-white">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Sports */}
          <AnimatedSection direction="left">
            <div className="curve-organic-1 bg-emerald-50 p-12 relative overflow-hidden h-full min-h-[420px] flex flex-col justify-between group">
              <div className="absolute -top-10 -right-6 opacity-20">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1} className="w-40 h-40 text-emerald-600">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 8l4 4-4 4-4-4 4-4z"/>
                </svg>
              </div>
              <div className="space-y-5">
                <div className="w-14 h-14 bg-emerald-600 text-white rounded-2xl flex items-center justify-center shadow-lg -rotate-6 group-hover:rotate-0 transition-transform">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-7 h-7">
                    <path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064"/>
                  </svg>
                </div>
                <h2 className="text-4xl font-headline font-bold text-emerald-900">Weekly Sports</h2>
                <p className="text-emerald-800/80 leading-relaxed">Strength, discipline, and teamwork forged on our courts. From traditional archery to modern football, we treat physical health as a vessel for the soul.</p>
                <div className="flex flex-wrap gap-3">
                  {["Football", "Athletics", "Archery", "Volleyball", "Table Tennis"].map((s) => (
                    <span key={s} className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-bold">{s}</span>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white/60 backdrop-blur rounded-2xl px-5 py-3 mt-6 w-fit">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4 text-emerald-700">
                  <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span className="font-bold text-emerald-800 text-sm">Every Tuesday &amp; Thursday</span>
              </div>
            </div>
          </AnimatedSection>

          {/* Halaqah */}
          <AnimatedSection direction="right" delay={0.1}>
            <div className="curve-organic-2 bg-[#ffdad4]/40 p-12 relative overflow-hidden h-full min-h-[420px] flex flex-col justify-between group border-r-4 border-[#570000]/10">
              <div className="absolute -top-10 -left-6 opacity-10">
                <span className="text-[8rem] font-headline text-[#570000]">○</span>
              </div>
              <div className="space-y-5 text-right flex flex-col items-end">
                <div className="w-14 h-14 bg-[#570000] text-white rounded-2xl flex items-center justify-center shadow-lg rotate-6 group-hover:rotate-0 transition-transform">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-7 h-7">
                    <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                  </svg>
                </div>
                <h2 className="text-4xl font-headline font-bold text-[#570000]">Weekly Halaqah</h2>
                <p className="text-[#5a413d] leading-relaxed text-right">Deepening roots in faith and character. Our circles of knowledge provide a sanctuary for Quranic Tajweed, prophetic biography, and guided community discussion.</p>
                <div className="flex flex-wrap gap-3 justify-end">
                  {["Tajweed", "Seerah", "Fiqh", "Tarbiyah", "Du'a Practice"].map((s) => (
                    <span key={s} className="px-3 py-1 bg-[#ffdad4] text-[#570000] rounded-full text-xs font-bold">{s}</span>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white/60 backdrop-blur rounded-2xl px-5 py-3 mt-6 w-fit self-end">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4 text-[#570000]">
                  <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span className="font-bold text-[#570000] text-sm">Every Friday Afternoon</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Boarding & After School Bento */}
      <section className="py-24 px-6 lg:px-16 bg-[#f4f3f2]">
        <div className="max-w-screen-2xl mx-auto">
          <AnimatedSection className="mb-14">
            <h2 className="text-5xl font-headline font-bold text-[#570000]">Flexible<br /><span className="text-[#ad2c00]">Excellence</span></h2>
            <p className="text-[#5a413d] mt-3 max-w-lg">Programs designed to fit your family&apos;s rhythm while maintaining the highest standards.</p>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 min-h-[500px]">
            {/* Day & Boarding */}
            <AnimatedSection direction="left" className="lg:col-span-7">
              <div className="relative group overflow-hidden rounded-3xl bg-[#570000] h-full min-h-[420px] flex flex-col justify-end p-10">
                <div className="absolute inset-0 opacity-20 pointer-events-none">
                  <Image src="/images/arabesque_pattern_1775112960360.png" alt="" fill className="object-cover" />
                </div>
                <Image
                  src="/images/chibi_halqoh_1775112818948.png"
                  alt="Boarding life"
                  width={200}
                  height={200}
                  className="absolute top-8 right-8 object-contain drop-shadow-xl group-hover:scale-110 transition-transform duration-700"
                />
                <div className="relative z-10">
                  <span className="bg-[#ad2c00] text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider inline-block mb-4">Premium Living</span>
                  <h3 className="text-4xl font-headline font-bold text-white mb-3">Day &amp; Boarding</h3>
                  <p className="text-white/75 max-w-sm mb-6 text-sm leading-relaxed">A full-immersion educational sanctuary. Our boarding facility is structured for Tahajjud, Fajr, and nightly study — a true home for the sincere student.</p>
                  <Link href="/admissions" className="inline-block bg-white text-[#570000] px-8 py-3 rounded-full font-bold hover:bg-[#ffdad4] transition-all btn-press text-sm">
                    Learn More
                  </Link>
                </div>
              </div>
            </AnimatedSection>

            {/* After School */}
            <AnimatedSection direction="right" delay={0.1} className="lg:col-span-5">
              <div className="bg-[#ad2c00] rounded-3xl p-10 h-full min-h-[420px] flex flex-col justify-between relative overflow-hidden">
                <div>
                  <div className="w-12 h-12 bg-white/20 backdrop-blur rounded-2xl flex items-center justify-center mb-6">
                    <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2} className="w-6 h-6">
                      <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <h3 className="text-3xl font-headline font-bold text-white mb-3">After School</h3>
                  <p className="text-white/85 text-sm leading-relaxed">Coding clubs, creative arts, additional Quran study sessions, and supervised homework rooms — extending the sanctuary hours for holistic development.</p>
                </div>
                <div className="mt-8">
                  <div className="flex items-center gap-4 text-white/70 text-xs font-semibold uppercase tracking-widest">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
                      <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    3:30 PM – 5:30 PM Daily
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Activities Grid */}
      <section className="py-28 px-6 lg:px-16 bg-white">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection>
            <div className="space-y-6">
              <h2 className="text-5xl font-headline font-bold text-[#570000]">All Activities</h2>
              <p className="text-[#5a413d] leading-relaxed">Every programme at Pure Essence is purposefully designed — nothing is accidental, everything is intentional.</p>
              <div className="space-y-4 mt-8">
                {ACTIVITIES.map((act, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ x: 6 }}
                    className={`flex items-center gap-5 p-5 bg-white shadow-sm rounded-2xl hover:shadow-lg transition-all border-l-4 ${act.border}`}
                  >
                    <span className={act.iconColor}>{act.icon}</span>
                    <div>
                      <h4 className="font-bold text-[#570000]">{act.title}</h4>
                      <p className="text-xs text-[#5a413d] mt-0.5">{act.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={0.15}>
            <Image
              src="/images/chibi_sports_1775112805705.png"
              alt="Sports activities"
              width={500}
              height={500}
              className="object-contain w-full"
            />
          </AnimatedSection>
        </div>
      </section>

      {/* Weekly Schedule */}
      <section className="py-28 px-6 lg:px-16 bg-[#f4f3f2]">
        <div className="max-w-screen-2xl mx-auto">
          <AnimatedSection className="text-center mb-14">
            <h2 className="text-5xl font-headline font-bold text-[#570000]">Weekly Schedule</h2>
            <p className="text-[#5a413d] mt-3">A structured week that balances Deen, Dunya, and development.</p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {SCHEDULE.map((day, i) => (
              <AnimatedSection key={day.day} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all"
                >
                  <div className="text-[#ad2c00] font-bold text-sm uppercase tracking-widest mb-4">{day.day}</div>
                  <div className="space-y-2">
                    {day.activities.map((act) => (
                      <div key={act} className="text-xs text-[#5a413d] bg-[#f4f3f2] rounded-xl px-3 py-2 leading-snug">{act}</div>
                    ))}
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 lg:px-16 bg-[#570000] relative overflow-hidden text-center">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <Image src="/images/arabesque_pattern_1775112960360.png" alt="" fill className="object-cover" />
        </div>
        <div className="relative z-10 space-y-6 max-w-2xl mx-auto">
          <AnimatedSection>
            <h2 className="text-5xl font-headline font-bold text-white">Experience Life at<br />Pure Essence</h2>
            <p className="text-[#ffb4a8] mt-4 text-lg font-light">A balanced life of learning, worship, sport, and community — all under one roof.</p>
          </AnimatedSection>
          <AnimatedSection delay={0.2} className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link href="/admissions" className="px-10 py-5 bg-white text-[#570000] font-bold rounded-full hover:bg-[#ffdad4] hover:scale-105 transition-all shadow-xl btn-press">
              Enroll Your Child
            </Link>
            <a href={waLink} target="_blank" rel="noopener noreferrer" className="px-10 py-5 border-2 border-white/30 text-white font-bold rounded-full hover:bg-white/10 transition-all flex items-center justify-center gap-2">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp Us
            </a>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
