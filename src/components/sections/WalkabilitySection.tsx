import { Footprints, AlertTriangle, CheckCircle, TrendingUp } from "lucide-react";
import { cityStats } from "@/data/houston";

const problems = [
  {
    title: "Missing Sidewalks",
    stat: `${100 - cityStats.walkability.percentWithSidewalks}%`,
    desc: "of Houston streets lack sidewalks — over 4,700 miles of gaps",
  },
  {
    title: "Pedestrian Deaths",
    stat: `${cityStats.walkability.annualPedestrianFatalities}`,
    desc: "pedestrian fatalities in 2023 — 3rd highest rate of any US city (federal data)",
  },
  {
    title: "Heat & Shade",
    stat: "93°F",
    desc: "average summer high makes uncovered sidewalks dangerous and unusable",
  },
  {
    title: "Vehicle Miles Traveled",
    stat: "#1",
    desc: "highest vehicle miles traveled per capita among major US cities (Texas A&M TTI)",
  },
];

const proposals = [
  {
    icon: "🚶",
    title: "Complete Streets Program",
    description:
      "Mandate sidewalks, protected bike lanes, and shade trees on all arterial roads. Prioritize school zones, transit corridors, and low-income neighborhoods first.",
    cost: "$2.1B over 10 years",
    impact: "2,300 miles of new sidewalks",
    priority: "High",
  },
  {
    icon: "🌳",
    title: "Urban Tree Canopy Expansion",
    description:
      "Increase tree canopy from 18% (current, per USDA Forest Service) to 30%+ citywide. The city's own goal is 22% by 2030. Prioritize high-heat, low-income neighborhoods where canopy deficit is greatest.",
    cost: "$180M over 5 years",
    impact: "500,000 new trees",
    priority: "High",
  },
  {
    icon: "🏙️",
    title: "Mixed-Use Zoning Reform",
    description:
      "Houston's lack of formal zoning is an asset. Encourage mixed-use development along transit corridors with density bonuses and reduced parking minimums.",
    cost: "Policy change (low cost)",
    impact: "10+ walkable neighborhoods",
    priority: "High",
  },
  {
    icon: "🚲",
    title: "Connected Trail Network",
    description:
      "Expand Bayou Greenways and hike-and-bike trails from 186 miles to a fully connected 450-mile network linking neighborhoods, parks, and job centers.",
    cost: "$620M",
    impact: "264 new trail miles",
    priority: "Medium",
  },
  {
    icon: "🏪",
    title: "Ground-Floor Activation",
    description:
      "Require ground-floor commercial or active uses on Main Street corridors. Eliminate drive-throughs and surface parking lots within the Inner Loop.",
    cost: "Policy change",
    impact: "Vibrant street-level activity",
    priority: "Medium",
  },
  {
    icon: "🛑",
    title: "Traffic Speed Reduction",
    description:
      "Lower speed limits on neighborhood streets from 35 to 25 mph. Add roundabouts and road diets on high-crash corridors. Pedestrian fatality risk drops 70% at 20 mph vs. 40 mph.",
    cost: "$85M",
    impact: "40% reduction in pedestrian deaths",
    priority: "High",
  },
];

const neighborhoods = [
  { name: "Downtown", score: 88, color: "bg-green-500" },
  { name: "Midtown", score: 83, color: "bg-green-500" },
  { name: "Montrose", score: 80, color: "bg-green-400" },
  { name: "Museum District", score: 78, color: "bg-lime-500" },
  { name: "Gulfton", score: 58, color: "bg-lime-400" },
  { name: "Heights", score: 65, color: "bg-lime-400" },
  { name: "Galleria", score: 65, color: "bg-lime-400" },
  { name: "EaDo", score: 52, color: "bg-yellow-500" },
  { name: "Third Ward", score: 48, color: "bg-orange-500" },
  { name: "Fifth Ward", score: 45, color: "bg-orange-500" },
  { name: "East End", score: 45, color: "bg-orange-500" },
  { name: "Spring Branch", score: 42, color: "bg-orange-400" },
  { name: "Sharpstown", score: 42, color: "bg-orange-400" },
  { name: "Westchase", score: 40, color: "bg-orange-400" },
  { name: "Greenspoint", score: 35, color: "bg-orange-400" },
  { name: "Northside", score: 38, color: "bg-orange-400" },
  { name: "Alief", score: 35, color: "bg-orange-400" },
  { name: "Sunnyside", score: 35, color: "bg-orange-400" },
  { name: "Acres Homes", score: 30, color: "bg-red-500" },
  { name: "South Houston", score: 30, color: "bg-red-500" },
  { name: "Aldine", score: 28, color: "bg-red-500" },
  { name: "Jacinto City", score: 28, color: "bg-red-500" },
  { name: "Memorial", score: 25, color: "bg-red-500" },
  { name: "Sugar Land", score: 22, color: "bg-red-500" },
  { name: "Katy", score: 20, color: "bg-red-600" },
];

export default function WalkabilitySection() {
  return (
    <section id="walkability" className="py-24 px-6 bg-gray-950">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-sm mb-5">
            <Footprints size={14} />
            Walkability
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Making Houston{" "}
            <span className="text-green-400">Walkable</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
            With a Walk Score of 48, Houston is among the least walkable major US cities.
            Decades of auto-centric planning have made walking dangerous, uncomfortable,
            and often impossible. This must change.
          </p>
        </div>

        {/* Problems grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {problems.map((p) => (
            <div
              key={p.title}
              className="bg-red-950/20 border border-red-900/30 rounded-xl p-5"
            >
              <AlertTriangle size={16} className="text-red-400 mb-3" />
              <div className="text-3xl font-bold text-red-400 mb-1">{p.stat}</div>
              <div className="text-white text-sm font-medium mb-1">{p.title}</div>
              <div className="text-gray-500 text-xs leading-relaxed">{p.desc}</div>
            </div>
          ))}
        </div>

        {/* Neighborhood scores */}
        <div className="bg-white/3 border border-white/8 rounded-2xl p-8 mb-16">
          <h3 className="text-white font-semibold text-lg mb-6 flex items-center gap-2">
            <TrendingUp size={18} className="text-green-400" />
            Walk Scores by Neighborhood
          </h3>
          <div className="space-y-3">
            {neighborhoods.map((n) => (
              <div key={n.name} className="flex items-center gap-4">
                <span className="text-gray-400 text-sm w-32 flex-shrink-0">{n.name}</span>
                <div className="flex-1 bg-white/5 rounded-full h-2.5 overflow-hidden">
                  <div
                    className={`h-full rounded-full ${n.color} transition-all`}
                    style={{ width: `${n.score}%` }}
                  />
                </div>
                <span className="text-white text-sm font-medium w-8 text-right">
                  {n.score}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-4 flex items-center gap-6 text-xs text-gray-500">
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-green-500 inline-block" /> 80+ Walker's Paradise
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500 inline-block" /> 50–65 Moderate
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500 inline-block" /> Below 35 Car-Dependent
            </span>
          </div>
        </div>

        {/* Proposals */}
        <h3 className="text-white font-semibold text-2xl mb-8 flex items-center gap-2">
          <CheckCircle size={20} className="text-green-400" />
          Proposed Solutions
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {proposals.map((p) => (
            <div
              key={p.title}
              className="bg-white/3 border border-white/8 rounded-xl p-6 hover:border-green-500/30 hover:bg-white/5 transition-all"
            >
              <div className="text-3xl mb-3">{p.icon}</div>
              <div className="flex items-start justify-between gap-2 mb-2">
                <h4 className="text-white font-semibold text-sm">{p.title}</h4>
                <span
                  className={`text-[10px] px-2 py-0.5 rounded-full font-medium flex-shrink-0 ${
                    p.priority === "High"
                      ? "bg-green-500/15 text-green-400 border border-green-500/20"
                      : "bg-yellow-500/15 text-yellow-400 border border-yellow-500/20"
                  }`}
                >
                  {p.priority}
                </span>
              </div>
              <p className="text-gray-400 text-xs leading-relaxed mb-4">{p.description}</p>
              <div className="flex flex-col gap-1 pt-3 border-t border-white/5">
                <div className="flex items-center justify-between">
                  <span className="text-gray-500 text-xs">Cost</span>
                  <span className="text-gray-300 text-xs font-medium">{p.cost}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-500 text-xs">Impact</span>
                  <span className="text-green-400 text-xs font-medium">{p.impact}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
