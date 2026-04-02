"use client";

import { useState } from "react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { TEACHER_ROLES, WHATSAPP_NUMBER, EMAIL, SCHOOL_ADDRESS } from "@/lib/constants";

export default function CareersForm() {
  const [form, setForm] = useState({
    fullName: "", email: "", phone: "", role: "",
    qualifications: "", experience: "", coverLetter: "", cvLink: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const buildWhatsAppMessage = () => encodeURIComponent(
    `*TEACHER APPLICATION — Pure Essence School*\n\n` +
    `👤 *Name:* ${form.fullName}\n✉️ *Email:* ${form.email}\n📞 *Phone:* ${form.phone}\n📌 *Role:* ${form.role}\n\n` +
    `🎓 *Qualifications:* ${form.qualifications}\n📅 *Experience:* ${form.experience} years\n\n` +
    `💬 *About / Cover Letter:*\n${form.coverLetter}\n\n` +
    `🔗 *CV Link:* ${form.cvLink || "Not provided"}\n\n_Sent via Pure Essence School Website_`
  );

  const handleWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${buildWhatsAppMessage()}`, "_blank");
  };

  const handleEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Teacher Application: ${form.fullName} — ${form.role}`);
    const body = encodeURIComponent(
      `TEACHER APPLICATION — Pure Essence School\n\nName: ${form.fullName}\nEmail: ${form.email}\nPhone: ${form.phone}\nRole: ${form.role}\n\nQualifications: ${form.qualifications}\nYears of Experience: ${form.experience}\n\nCover Letter:\n${form.coverLetter}\n\nCV Link: ${form.cvLink || "Not provided"}`
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="apply" className="px-6 lg:px-16 py-24 bg-[#f4f3f2]">
      <div className="max-w-3xl mx-auto">
        <AnimatedSection className="mb-10">
          <h2 className="text-3xl lg:text-4xl font-headline font-bold text-[#570000]">Teacher Application Form</h2>
          <p className="text-[#5a413d] mt-2 text-sm">Complete the form and submit via WhatsApp or Email. We review all applications within 5 working days.</p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <form className="bg-white rounded-3xl p-8 lg:p-10 shadow-sm space-y-6 border border-[#e2bfb9]/20">
            <div className="space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#ad2c00] border-b border-[#e2bfb9] pb-2">Personal Information</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#5a413d] mb-1.5 uppercase tracking-wider">Full Name *</label>
                  <input name="fullName" value={form.fullName} onChange={handleChange} required placeholder="Your full name" className="form-input-base" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#5a413d] mb-1.5 uppercase tracking-wider">Phone Number *</label>
                  <input type="tel" name="phone" value={form.phone} onChange={handleChange} required placeholder="e.g. 08012345678" className="form-input-base" />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-[#5a413d] mb-1.5 uppercase tracking-wider">Email Address *</label>
                  <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="your@email.com" className="form-input-base" />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#ad2c00] border-b border-[#e2bfb9] pb-2">Application Details</h3>
              <div>
                <label className="block text-xs font-bold text-[#5a413d] mb-1.5 uppercase tracking-wider">Role Applying For *</label>
                <select name="role" value={form.role} onChange={handleChange} required className="form-input-base">
                  <option value="">Select a role</option>
                  {TEACHER_ROLES.map((r) => <option key={r}>{r}</option>)}
                </select>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#5a413d] mb-1.5 uppercase tracking-wider">Highest Qualification *</label>
                  <input name="qualifications" value={form.qualifications} onChange={handleChange} required placeholder="e.g. B.Ed Islamic Studies" className="form-input-base" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#5a413d] mb-1.5 uppercase tracking-wider">Years of Teaching Experience *</label>
                  <input type="number" name="experience" value={form.experience} onChange={handleChange} required placeholder="e.g. 3" min={0} className="form-input-base" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-[#5a413d] mb-1.5 uppercase tracking-wider">Cover Letter / About You *</label>
                <textarea name="coverLetter" value={form.coverLetter} onChange={handleChange} required placeholder="Tell us about yourself, your teaching philosophy, and why you want to join Pure Essence..." rows={5} className="form-input-base resize-none" />
              </div>
              <div>
                <label className="block text-xs font-bold text-[#5a413d] mb-1.5 uppercase tracking-wider">CV / Portfolio Link (Optional)</label>
                <input name="cvLink" value={form.cvLink} onChange={handleChange} placeholder="e.g. Google Drive or Dropbox link to your CV" className="form-input-base" />
              </div>
            </div>

            <div className="space-y-4 pt-2">
              <p className="text-xs text-[#5a413d] text-center">Choose how to submit your application:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button onClick={handleWhatsApp} type="submit" className="w-full py-5 rounded-2xl bg-emerald-600 text-white font-bold hover:bg-emerald-700 hover:scale-[1.02] transition-all shadow-xl flex items-center justify-center gap-3 btn-press">
                  <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5 flex-shrink-0">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Submit via WhatsApp
                </button>
                <button onClick={handleEmail} type="button" className="w-full py-5 rounded-2xl bg-[#570000] text-white font-bold hover:bg-[#ad2c00] hover:scale-[1.02] transition-all shadow-xl flex items-center justify-center gap-3 btn-press">
                  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2} className="w-5 h-5 flex-shrink-0">
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                  Submit via Email
                </button>
              </div>
              <p className="text-center text-xs text-[#5a413d]/60 mt-3">{SCHOOL_ADDRESS}</p>
            </div>
          </form>
        </AnimatedSection>
      </div>
    </section>
  );
}
