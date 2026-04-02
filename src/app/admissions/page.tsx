import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";
import AdmissionsForm from "@/components/forms/AdmissionsForm";

export const metadata: Metadata = {
  title: "Admissions | Pure Essence School — Enroll Your Child Today",
  description:
    "Apply for admission to Pure Essence School, Ibogun, Ogun State. Creche, Nursery, Primary, and Secondary wings open. Islamic and modern education in Nigeria.",
  openGraph: {
    title: "Admissions Open | Pure Essence School",
    description: "Secure your child's place in the sanctuary of Purity, Piety, and Purpose. Apply online via WhatsApp or Email.",
  },
};

export default function AdmissionsPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="relative px-6 lg:px-16 py-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#570000]/4 rounded-bl-[20rem] -z-10" />
        <div className="absolute inset-0 flex items-center justify-center -z-10 pointer-events-none overflow-hidden">
          <span className="text-[12rem] lg:text-[18rem] font-headline text-[#570000]/[0.025] leading-none select-none">قبول</span>
        </div>
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <AnimatedSection>
              <span className="text-[#ad2c00] font-bold tracking-widest uppercase text-xs block mb-4">Admissions Open</span>
              <h1 className="text-5xl lg:text-7xl font-headline font-bold text-[#570000] leading-tight tracking-tight">
                Begin the<br />Journey of<br /><span className="text-[#ad2c00] italic">Essence.</span>
              </h1>
              <div className="text-lg lg:text-xl font-headline text-[#570000]/40">ابدأ رحلة الجوهر</div>
              <p className="text-[#5a413d] max-w-lg leading-relaxed mt-4">
                Secure a place in the sanctuary where piety meets purpose. Fill out the form below and our team will guide you through every step.
              </p>
            </AnimatedSection>
          </div>
          <AnimatedSection direction="right" delay={0.15} className="flex justify-center">
            <Image
              src="/images/hero_student_chibi_1775112714477.png"
              alt="Student applying for admission at Pure Essence School"
              width={400}
              height={400}
              className="object-contain drop-shadow-xl"
              priority
            />
          </AnimatedSection>
        </div>
      </section>

      <AdmissionsForm />
    </div>
  );
}
