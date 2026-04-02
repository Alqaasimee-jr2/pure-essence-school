import type { Metadata } from "next";
import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { PHONE_NUMBERS, SCHOOL_ADDRESS, SCHOOL_HOURS, EMAIL, WHATSAPP_NUMBER } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Us | Pure Essence School",
  description: "Reach Pure Essence School in Ibogun, Ogun State. Call us, WhatsApp us, or send an email — we are happy to answer all your questions.",
};

export default function ContactPage() {
  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=Assalamu%20Alaikum%2C%20I%20have%20an%20enquiry%20about%20Pure%20Essence%20School.`;

  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="relative px-6 lg:px-16 py-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#570000]/4 rounded-bl-[20rem] -z-10" />
        <div className="absolute inset-0 flex items-center justify-center -z-10 pointer-events-none overflow-hidden">
          <span className="text-[18rem] font-headline text-[#570000]/[0.025] leading-none select-none">تواصل</span>
        </div>
        <div className="max-w-screen-2xl mx-auto text-center space-y-6">
          <AnimatedSection>
            <span className="text-[#ad2c00] font-bold tracking-widest uppercase text-xs block mb-4">Purity, Piety, and Purpose</span>
            <h1 className="text-6xl lg:text-7xl font-headline font-bold text-[#570000] leading-tight tracking-tight">
              Connect With<br /><span className="text-[#ad2c00] italic">Our Community</span>
            </h1>
            <div className="text-2xl font-headline text-[#570000]/40 mt-4">مدرسة الجوهر النقي</div>
            <p className="text-[#5a413d] max-w-xl mx-auto mt-4 text-lg">
              We are always happy to hear from curious parents, prospective students, and community members. Reach out — we respond quickly.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="px-6 lg:px-16 py-16 pb-32">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* Phone Numbers */}
          <AnimatedSection direction="left" className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-10 shadow-sm border border-[#e2bfb9]/20 h-full">
              <h2 className="text-2xl font-headline font-bold text-[#570000] mb-2 flex items-center gap-3">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-7 h-7 text-[#ad2c00]">
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                One-Tap Admission Support
              </h2>
              <p className="text-[#5a413d] text-sm mb-8">Call any of our lines directly — our staff are available during school hours.</p>

              <div className="space-y-4">
                {PHONE_NUMBERS.map((p, i) => (
                  <a
                    key={p.number}
                    href={p.href}
                    className="group flex items-center justify-between p-6 bg-[#f4f3f2] rounded-2xl border-2 border-transparent hover:border-[#ad2c00] transition-all duration-300"
                  >
                    <div className="flex items-center gap-5">
                      <div className={`w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 ${i === 0 ? "bg-[#570000]" : i === 1 ? "bg-[#ad2c00]" : "bg-[#800000]"}`}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2} className="w-6 h-6">
                          <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-[#5a413d]">{p.label}</p>
                        <p className="text-2xl font-bold text-[#1a1c1c] mt-0.5">{p.number}</p>
                      </div>
                    </div>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-[#ad2c00] text-white px-5 py-2 rounded-full font-bold text-sm btn-press">
                      Call Now
                    </span>
                  </a>
                ))}

                {/* Email */}
                <a
                  href={`mailto:${EMAIL}`}
                  className="group flex items-center justify-between p-6 bg-[#f4f3f2] rounded-2xl border-2 border-transparent hover:border-[#c9a900] transition-all duration-300"
                >
                  <div className="flex items-center gap-5">
                    <div className="w-14 h-14 bg-[#705d00] rounded-full flex items-center justify-center flex-shrink-0">
                      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2} className="w-6 h-6">
                        <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-[#5a413d]">Email Us</p>
                      <p className="text-xl font-bold text-[#1a1c1c] mt-0.5 break-all">{EMAIL}</p>
                    </div>
                  </div>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-[#705d00] text-white px-5 py-2 rounded-full font-bold text-sm btn-press">
                    Email Now
                  </span>
                </a>

                {/* WhatsApp */}
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-6 bg-emerald-50 rounded-2xl border-2 border-transparent hover:border-emerald-600 transition-all duration-300"
                >
                  <div className="flex items-center gap-5">
                    <div className="w-14 h-14 bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg viewBox="0 0 24 24" fill="white" className="w-7 h-7">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-[#5a413d]">WhatsApp</p>
                      <p className="text-xl font-bold text-[#1a1c1c] mt-0.5">+234 802 758 5598</p>
                    </div>
                  </div>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-emerald-600 text-white px-5 py-2 rounded-full font-bold text-sm btn-press">
                    Chat Now
                  </span>
                </a>
              </div>
            </div>
          </AnimatedSection>

          {/* Right Column: Location + Hours */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Location Card */}
            <AnimatedSection direction="right">
              <div className="bg-[#570000] curve-organic-1 p-10 text-white relative overflow-hidden flex-grow">
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                  <Image src="/images/arabesque_pattern_1775112960360.png" alt="" fill className="object-cover" />
                </div>
                <div className="relative z-10 space-y-5">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-12 h-12 text-[#ffb4a8]">
                    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                  <h3 className="text-3xl font-headline font-bold">Visit Our Sanctuary</h3>
                  <p className="text-xl leading-relaxed text-white/90">{SCHOOL_ADDRESS}</p>
                  <div className="bg-white/10 backdrop-blur rounded-2xl px-5 py-4 flex items-center gap-4">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5 text-[#ffb4a8] flex-shrink-0">
                      <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    <div>
                      <div className="text-xs uppercase tracking-widest font-bold text-white/50">School Hours</div>
                      <div className="font-bold text-sm mt-0.5">{SCHOOL_HOURS}</div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Fees Notice */}
            <AnimatedSection direction="right" delay={0.1}>
              <div className="bg-[#c9a900]/10 border border-[#c9a900]/30 rounded-3xl p-8">
                <div className="flex items-start gap-4">
                  <span className="text-3xl">💳</span>
                  <div>
                    <h4 className="font-headline font-bold text-[#705d00] text-lg mb-2">Tuition Payments</h4>
                    <p className="text-[#5a413d] text-sm leading-relaxed">
                      All school fees are paid <strong>physically at the school</strong> office. No online payment is required. Our Registrar&apos;s Office will guide you through the process upon admission.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Quick Message CTA */}
            <AnimatedSection direction="right" delay={0.15}>
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-8 bg-emerald-600 rounded-3xl text-white group hover:bg-emerald-700 transition-all btn-press"
              >
                <div>
                  <div className="font-bold text-xl font-headline">Quick WhatsApp</div>
                  <div className="text-white/75 text-sm mt-1">We reply within minutes.</div>
                </div>
                <svg viewBox="0 0 24 24" fill="white" className="w-10 h-10 group-hover:scale-110 transition-transform">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </AnimatedSection>
          </div>
        </div>

        {/* Address Banner */}
        <div className="max-w-screen-xl mx-auto mt-12">
          <AnimatedSection>
            <div className="relative rounded-3xl overflow-hidden bg-[#570000] border border-[#570000]/20 shadow-2xl">
              <div className="absolute inset-0 opacity-10 pointer-events-none">
                <Image src="/images/arabesque_pattern_1775112960360.png" alt="" fill className="object-cover" />
              </div>
              <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-0">
                <div className="flex items-center gap-5 p-8 border-b md:border-b-0 md:border-r border-white/10">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={1.5} className="w-6 h-6">
                      <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-white/50 text-xs uppercase tracking-widest font-bold mb-1">Address</div>
                    <div className="text-white font-semibold text-sm leading-snug">Ibogun Olaogun Road,<br/>Iffo, Ogun State</div>
                  </div>
                </div>
                <div className="flex items-center gap-5 p-8 border-b md:border-b-0 md:border-r border-white/10">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={1.5} className="w-6 h-6">
                      <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-white/50 text-xs uppercase tracking-widest font-bold mb-1">School Hours</div>
                    <div className="text-white font-semibold text-sm">Mon – Fri<br/>8:00 AM – 4:00 PM</div>
                  </div>
                </div>
                <div className="flex items-center gap-5 p-8">
                  <div className="w-12 h-12 bg-emerald-500/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6 opacity-80">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-white/50 text-xs uppercase tracking-widest font-bold mb-1">Need Directions?</div>
                    <a
                      href={waLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-400 hover:text-emerald-300 font-bold text-sm transition-colors"
                    >
                      WhatsApp us for directions →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
