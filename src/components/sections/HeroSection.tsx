import { ArrowDown, MapPin } from "lucide-react";
import { cityStats } from "@/data/houston";

const stats = [
  {
    value: `${cityStats.walkability.cityAvgWalkScore}/100`,
    label: "Walk Score",
    sub: "Car-Dependent",
    color: "text-orange-400",
  },
  {
    value: `${cityStats.transit.transitScore}/100`,
    label: "Transit Score",
    sub: `${cityStats.transit.metroRailMiles} miles of rail`,
    color: "text-sky-400",
  },
  {
    value: cityStats.flooding.harveyCost,
    label: "Harvey Damage",
    sub: `${cityStats.flooding.homesFlooded.toLocaleString()} homes flooded`,
    color: "text-purple-400",
  },
  {
    value: "18%",
    label: "Tree Canopy",
    sub: "Goal: 22% by 2030 (USDA Forest Service)",
    color: "text-green-400",
  },
];

export default function HeroSection() {
  return (
    <section
      id="overview"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-16 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(14,165,233,0.12)_0%,_transparent_60%)] pointer-events-none" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-5xl w-full mx-auto text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-sky-500/10 border border-sky-500/20 rounded-full text-sky-400 text-sm mb-8">
          <MapPin size={14} />
          Houston, Texas — Population 2.3M
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-[1.05] mb-6">
          A Better{" "}
          <span className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
            Houston
          </span>{" "}
          is Possible
        </h1>

        <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed mb-12">
          The fourth-largest US city sits at a crossroads. With the right investments in
          walkability, public transit, and flood resilience, Houston can transform into
          a more livable, equitable, and sustainable metropolis.
        </p>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white/5 border border-white/10 rounded-xl p-5 text-left hover:bg-white/8 transition-colors"
            >
              <div className={`text-3xl font-bold mb-1 ${stat.color}`}>
                {stat.value}
              </div>
              <div className="text-white text-sm font-medium">{stat.label}</div>
              <div className="text-gray-500 text-xs mt-0.5">{stat.sub}</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#map"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
        >
          Explore the map
          <ArrowDown size={16} className="animate-bounce" />
        </a>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-950 to-transparent pointer-events-none" />
    </section>
  );
}
