"use client";

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { EVENTS } from "@/lib/constants";
import EventCard from "@/components/ui/EventCard";
import { useState } from "react";

// Note: metadata exports from client components need to be in a parent server page.
// For simplicity, metadata is set in the layout. This page handles interactivity.

const CATEGORIES = ["All", "Academic", "Islamic", "Sports"];

export default function EventsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? EVENTS
    : EVENTS.filter((e) => e.category === activeCategory);

  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="relative px-6 lg:px-16 py-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#570000]/4 rounded-bl-[20rem] -z-10" />
        <div className="max-w-screen-2xl mx-auto">
          <AnimatedSection>
            <span className="text-[#ad2c00] font-bold tracking-widest uppercase text-xs block mb-4">News &amp; Events</span>
            <h1 className="text-7xl lg:text-8xl font-headline font-bold text-[#570000] leading-none tracking-tighter mb-6">
              Essence in<br /><span className="text-[#ad2c00] italic">Motion.</span>
            </h1>
            <p className="text-xl text-[#5a413d] max-w-2xl leading-relaxed">
              Stay connected with everything happening at Pure Essence School — competitions, ceremonies, sports days, and community gatherings.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="px-6 lg:px-16 pb-6">
        <div className="max-w-screen-2xl mx-auto">
          <div className="flex gap-3 flex-wrap">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-[#570000] text-white shadow-lg"
                    : "bg-[#f4f3f2] text-[#5a413d] hover:bg-[#ffdad4] hover:text-[#570000]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-12 px-6 lg:px-16 pb-32">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((event, i) => (
              <AnimatedSection key={event.id} delay={i * 0.07}>
                <EventCard {...event} />
              </AnimatedSection>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-24 text-[#5a413d]">
              <div className="text-6xl mb-4">📅</div>
              <h3 className="text-2xl font-headline font-bold text-[#570000]">No events in this category</h3>
              <p className="text-sm mt-2">Check back soon for updates.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 lg:px-16 bg-[#570000] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <Image src="/images/arabesque_pattern_1775112960360.png" alt="" fill className="object-cover" />
        </div>
        <div className="max-w-2xl mx-auto text-center relative z-10 space-y-6">
          <AnimatedSection>
            <h2 className="text-4xl font-headline font-bold text-white">Never Miss an Essence Moment</h2>
            <p className="text-[#ffb4a8] text-base font-light mt-3 leading-relaxed">
              Follow school events, graduation ceremonies, and Quran competitions by reaching out and joining our parent&apos;s communication group.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.2} className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`https://wa.me/2348027585598?text=Assalamu%20Alaikum%2C%20I%27d%20like%20to%20stay%20updated%20on%20Pure%20Essence%20School%20events%20and%20programmes.`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 bg-emerald-500 text-white font-bold rounded-full hover:bg-emerald-600 hover:scale-105 transition-all shadow-xl flex items-center justify-center gap-2 btn-press"
            >
              <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Join Updates via WhatsApp
            </a>
            <Link href="/contact" className="px-10 py-4 border-2 border-white/30 text-white font-bold rounded-full hover:bg-white/10 transition-all">
              Contact School Office
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
