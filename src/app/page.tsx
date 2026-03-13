import { Users } from "lucide-react";
import Header from "@/components/Header";
import HeroSection from "@/components/sections/HeroSection";
import WalkabilitySection from "@/components/sections/WalkabilitySection";
import TransitSection from "@/components/sections/TransitSection";
import FloodSection from "@/components/sections/FloodSection";
import SourcesSection from "@/components/sections/SourcesSection";
import MapWrapper from "@/components/MapWrapper";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        {/* Hero */}
        <HeroSection />

        {/* Interactive Map */}
        <section id="map" className="relative" style={{ height: "100svh" }}>
          <div className="absolute inset-0">
            <MapWrapper />
          </div>
          {/* Section label */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
            <div className="bg-gray-950/80 backdrop-blur border border-white/10 rounded-full px-5 py-2 text-sm text-gray-400 text-center">
              Interactive map — toggle layers using the panel on the left
            </div>
          </div>
        </section>

        {/* Content sections */}
        <WalkabilitySection />
        <TransitSection />
        <FloodSection />
        <SourcesSection />

        {/* Footer */}
        <footer className="border-t border-white/8 py-12 px-6 bg-gray-950">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-sky-500 flex items-center justify-center">
                <Users size={14} className="text-white" />
              </div>
              <span className="font-semibold text-white text-sm">
                Houston<span className="text-sky-400">4Humans</span>
              </span>
            </div>
            <p className="text-gray-500 text-xs text-center">
              Data sources: Walk Score API, METRO Houston, Harris County Flood Control District,
              FEMA FIRM Maps, Harvey Task Force Reports. For educational purposes.
            </p>
            <p className="text-gray-600 text-xs">© 2025</p>
          </div>
        </footer>
      </main>
    </>
  );
}
