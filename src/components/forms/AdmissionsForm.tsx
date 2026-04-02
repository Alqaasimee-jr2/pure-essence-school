"use client";

import Image from "next/image";
import { useState } from "react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { ACADEMIC_LEVELS, HOW_HEARD, EMAIL, WHATSAPP_NUMBER, SCHOOL_ADDRESS, PHONE_NUMBERS } from "@/lib/constants";

const STEPS = [
  { no: "01", title: "Fill the Form", desc: "Complete the admission inquiry form below with accurate details." },
  { no: "02", title: "We Contact You", desc: "Our Registrar's Office will reach out within 24–48 hours." },
  { no: "03", title: "Visit the School", desc: "Schedule a tour and assessment session at our campus." },
  { no: "04", title: "Pay Physically", desc: "All tuition fees are paid on-site. No online payment required." },
];

export default function AdmissionsForm() {
  const [form, setForm] = useState({
    studentName: "", dob: "", gender: "", applyingFor: "",
    guardianName: "", guardianPhone: "", alternatePhone: "", guardianEmail: "",
    homeAddress: "", previousSchool: "", specialNeeds: "", howHeard: "", message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const buildWhatsAppMessage = () => encodeURIComponent(
    `*ADMISSION INQUIRY — Pure Essence School*\n\n` +
    `👤 *Student Name:* ${form.studentName}\n📅 *Date of Birth:* ${form.dob}\n⚧ *Gender:* ${form.gender}\n📚 *Applying For:* ${form.applyingFor}\n\n` +
    `👨‍👩‍👧 *Guardian Name:* ${form.guardianName}\n📞 *Gdn Phone:* ${form.guardianPhone}\n📞 *Alt Phone:* ${form.alternatePhone}\n✉️ *Gdn Email:* ${form.guardianEmail}\n🏠 *Home Address:* ${form.homeAddress}\n\n` +
    `🏫 *Previous School:* ${form.previousSchool || "N/A"}\n♿ *Special Needs:* ${form.specialNeeds || "None"}\n📣 *How They Heard:* ${form.howHeard}\n💬 *Message:* ${form.message || "None"}\n\n_Sent via Pure Essence School Website_`
  );

  const handleWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${buildWhatsAppMessage()}`, "_blank");
  };

  const handleEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Admission Inquiry: ${form.studentName}`);
    const body = encodeURIComponent(
      `ADMISSION INQUIRY — Pure Essence School\n\nStudent Name: ${form.studentName}\nDate of Birth: ${form.dob}\nGender: ${form.gender}\nApplying For: ${form.applyingFor}\n\nGuardian Name: ${form.guardianName}\nGuardian Phone: ${form.guardianPhone}\nAlternate Phone: ${form.alternatePhone}\nGuardian Email: ${form.guardianEmail}\nHome Address: ${form.homeAddress}\n\nPrevious School: ${form.previousSchool || "N/A"}\nSpecial Needs: ${form.specialNeeds || "None"}\nHow They Heard: ${form.howHeard}\n\nMessage: ${form.message || "None"}`
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <>
      {/* Steps */}
      <section className="px-6 lg:px-16 py-20 bg-[#f4f3f2]">
        <div className="max-w-screen-2xl mx-auto">
          <AnimatedSection className="text-center mb-14">
            <h2 className="text-4xl font-headline font-bold text-[#570000]">How It Works</h2>
          </AnimatedSection>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {STEPS.map((step, i) => (
              <AnimatedSection key={step.no} delay={i * 0.1}>
                <div className="bg-white rounded-3xl p-6 lg:p-8 text-center relative overflow-hidden group hover:bg-[#570000] transition-all duration-500">
                  <div className="text-5xl lg:text-6xl font-headline font-bold text-[#570000]/10 group-hover:text-white/10 mb-4 transition-colors">{step.no}</div>
                  <h4 className="font-bold text-[#570000] group-hover:text-white text-base lg:text-lg mb-2 transition-colors">{step.title}</h4>
                  <p className="text-xs lg:text-sm text-[#5a413d] group-hover:text-white/70 transition-colors">{step.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Fees Notice */}
      <div className="px-6 lg:px-16 py-6 bg-[#c9a900]/10">
        <div className="max-w-screen-xl mx-auto flex items-start gap-4 p-5 lg:p-6 bg-white rounded-2xl border border-[#c9a900]/30">
          <span className="text-2xl lg:text-3xl flex-shrink-0">💳</span>
          <div>
            <h4 className="font-bold text-[#705d00] text-base lg:text-lg">Tuition Fees are Paid Physically</h4>
            <p className="text-[#5a413d] text-xs lg:text-sm mt-1">No online payment needed. All fees are collected at the school office. Our Registrar will provide a detailed breakdown upon your visit.</p>
          </div>
        </div>
      </div>

      {/* Form */}
      <section className="px-6 lg:px-16 py-24">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection className="mb-10">
            <h2 className="text-3xl lg:text-4xl font-headline font-bold text-[#570000]">Admission Inquiry Form</h2>
            <p className="text-[#5a413d] mt-2 text-sm">Fill all required fields. Your information will be sent directly via WhatsApp or Email.</p>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <form className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-xs font-bold uppercase tracking-widest text-[#ad2c00] border-b border-[#e2bfb9] pb-2">Student Information</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#5a413d] mb-1.5 uppercase tracking-wider">Student&apos;s Full Name *</label>
                    <input name="studentName" value={form.studentName} onChange={handleChange} required placeholder="Full legal name" className="form-input-base" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#5a413d] mb-1.5 uppercase tracking-wider">Date of Birth *</label>
                    <input type="date" name="dob" value={form.dob} onChange={handleChange} required className="form-input-base" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#5a413d] mb-1.5 uppercase tracking-wider">Gender *</label>
                    <select name="gender" value={form.gender} onChange={handleChange} required className="form-input-base">
                      <option value="">Select gender</option>
                      <option>Male</option>
                      <option>Female</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#5a413d] mb-1.5 uppercase tracking-wider">Applying For (Class/Wing) *</label>
                    <select name="applyingFor" value={form.applyingFor} onChange={handleChange} required className="form-input-base">
                      <option value="">Select level</option>
                      {ACADEMIC_LEVELS.map((l) => <option key={l}>{l}</option>)}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#5a413d] mb-1.5 uppercase tracking-wider">Previous School (if applicable)</label>
                  <input name="previousSchool" value={form.previousSchool} onChange={handleChange} placeholder="Name and location of last school" className="form-input-base" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#5a413d] mb-1.5 uppercase tracking-wider">Special Needs / Considerations</label>
                  <input name="specialNeeds" value={form.specialNeeds} onChange={handleChange} placeholder="Any medical, learning, or accessibility needs" className="form-input-base" />
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xs font-bold uppercase tracking-widest text-[#ad2c00] border-b border-[#e2bfb9] pb-2">Guardian / Parent Information</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#5a413d] mb-1.5 uppercase tracking-wider">Guardian Full Name *</label>
                    <input name="guardianName" value={form.guardianName} onChange={handleChange} required placeholder="Parent or guardian name" className="form-input-base" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#5a413d] mb-1.5 uppercase tracking-wider">Primary Phone Number *</label>
                    <input type="tel" name="guardianPhone" value={form.guardianPhone} onChange={handleChange} required placeholder="e.g. 08012345678" className="form-input-base" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#5a413d] mb-1.5 uppercase tracking-wider">Alternate Phone Number</label>
                    <input type="tel" name="alternatePhone" value={form.alternatePhone} onChange={handleChange} placeholder="e.g. 09087654321" className="form-input-base" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#5a413d] mb-1.5 uppercase tracking-wider">Guardian Email Address</label>
                    <input type="email" name="guardianEmail" value={form.guardianEmail} onChange={handleChange} placeholder="your@email.com" className="form-input-base" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#5a413d] mb-1.5 uppercase tracking-wider">Home Address *</label>
                  <input name="homeAddress" value={form.homeAddress} onChange={handleChange} required placeholder="Full home address" className="form-input-base" />
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xs font-bold uppercase tracking-widest text-[#ad2c00] border-b border-[#e2bfb9] pb-2">Additional Information</h3>
                <div>
                  <label className="block text-xs font-bold text-[#5a413d] mb-1.5 uppercase tracking-wider">How Did You Hear About Us? *</label>
                  <select name="howHeard" value={form.howHeard} onChange={handleChange} required className="form-input-base">
                    <option value="">Select one</option>
                    {HOW_HEARD.map((h) => <option key={h}>{h}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#5a413d] mb-1.5 uppercase tracking-wider">Additional Message or Questions</label>
                  <textarea name="message" value={form.message} onChange={handleChange} placeholder="Any other information you'd like us to know..." rows={4} className="form-input-base resize-none" />
                </div>
              </div>

              <div className="space-y-4 pt-4">
                <p className="text-xs text-[#5a413d] text-center">Choose how you&apos;d like to send your application:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <button onClick={handleWhatsApp} type="submit" className="w-full py-5 rounded-2xl bg-emerald-600 text-white font-bold text-sm lg:text-base hover:bg-emerald-700 hover:scale-[1.02] transition-all shadow-xl flex items-center justify-center gap-3 btn-press">
                    <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5 flex-shrink-0">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Submit via WhatsApp
                  </button>
                  <button onClick={handleEmail} type="button" className="w-full py-5 rounded-2xl bg-[#570000] text-white font-bold text-sm lg:text-base hover:bg-[#ad2c00] hover:scale-[1.02] transition-all shadow-xl flex items-center justify-center gap-3 btn-press">
                    <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2} className="w-5 h-5 flex-shrink-0">
                      <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                    Submit via Email
                  </button>
                </div>
              </div>

              <div className="pt-2 text-center space-y-2 text-xs text-[#5a413d]">
                <p>Or call us directly:</p>
                <div className="flex justify-center gap-4 lg:gap-6 flex-wrap">
                  {PHONE_NUMBERS.map((p) => (
                    <a key={p.number} href={p.href} className="text-[#570000] font-bold hover:text-[#ad2c00] transition-colors">{p.number}</a>
                  ))}
                </div>
                <p className="text-[#5a413d]/60 mt-2">{SCHOOL_ADDRESS}</p>
              </div>
            </form>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
