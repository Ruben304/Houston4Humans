import { Waves, AlertTriangle, CheckCircle, Home, DollarSign } from "lucide-react";
import { cityStats } from "@/data/houston";

const stats = [
  {
    value: cityStats.flooding.harveyCost,
    label: "Hurricane Harvey Damage",
    sub: "2017 — costliest US flood disaster",
    color: "text-purple-400",
  },
  {
    value: cityStats.flooding.homesFlooded.toLocaleString(),
    label: "Homes Flooded (Harvey)",
    sub: "Structures flooded (HCFCD Countywide Impacts report)",
    color: "text-red-400",
  },
  {
    value: `${cityStats.flooding.imperviousSurfacePct}%`,
    label: "Impervious Surface",
    sub: "Of Harris County covered by impervious surfaces (USGS)",
    color: "text-orange-400",
  },
  {
    value: cityStats.flooding.harrisBondProgram,
    label: "Harris County Bond Program",
    sub: "Voter-approved flood mitigation",
    color: "text-sky-400",
  },
];

const floodZones = [
  {
    name: "Addicks/Barker Reservoirs",
    risk: "Extreme",
    riskColor: "text-purple-400 bg-purple-500/10 border-purple-500/20",
    area: "West Houston",
    harveyClaims: "$2.7B",
    description:
      "Built in the 1940s and now surrounded by development, the Addicks and Barker reservoirs were intentionally released during Harvey, flooding over 12,000 homes that were outside the official floodplain.",
    solutions: ["Reservoir expansion", "Home buyouts", "Upstream detention", "No new development"],
  },
  {
    name: "Meyerland / Brays Bayou",
    risk: "High",
    riskColor: "text-red-400 bg-red-500/10 border-red-500/20",
    area: "SW Houston",
    harveyClaims: "$890M",
    description:
      "Meyerland has flooded in 2001, 2015, 2016, and 2017. The Brays Bayou corridor repeatedly overflows. Many homeowners have flooded 4+ times and struggle to sell or insure their homes.",
    solutions: ["Brays Bayou widening ($480M underway)", "Home elevation grants", "Voluntary buyouts"],
  },
  {
    name: "Greens Bayou / NE Houston",
    risk: "High",
    riskColor: "text-red-400 bg-red-500/10 border-red-500/20",
    area: "Northeast",
    harveyClaims: "$650M",
    description:
      "Lower-income communities of color in northeast Houston face repeated flooding with less political power and fewer resources to recover. Environmental justice is a critical dimension here.",
    solutions: ["Greens Bayou Greenway expansion", "Equity-focused FEMA buyouts", "Community resilience hubs"],
  },
  {
    name: "East Houston / San Jacinto",
    risk: "High",
    riskColor: "text-red-400 bg-red-500/10 border-red-500/20",
    area: "East Harris County",
    harveyClaims: "$780M",
    description:
      "The San Jacinto River overflows its banks in major storms, combined with contamination from industrial superfund sites. Flooding here carries health risks beyond water damage.",
    solutions: ["River channel improvements", "Industrial compliance enforcement", "Superfund cleanup"],
  },
  {
    name: "Fifth Ward / Buffalo Bayou",
    risk: "Medium",
    riskColor: "text-amber-400 bg-amber-500/10 border-amber-500/20",
    area: "Near NE Downtown",
    harveyClaims: "$420M",
    description:
      "Historic Black neighborhood vulnerable to Buffalo Bayou flooding. The nearby Buffalo Bayou Park improvements help but don't extend far enough east to protect Fifth Ward.",
    solutions: ["Extend Buffalo Bayou Park east", "Green infrastructure investment", "Community flood monitoring"],
  },
  {
    name: "Aldine / Hunting Bayou",
    risk: "High",
    riskColor: "text-red-400 bg-red-500/10 border-red-500/20",
    area: "North Houston",
    harveyClaims: "N/A (unincorporated)",
    description:
      "Hunting Bayou drains through one of Harris County's most densely populated unincorporated communities. Aldine's lack of city services means limited access to buyout programs and drainage investment — amplifying flood harm for lower-income residents.",
    solutions: ["Hunting Bayou channel improvements", "Expand buyouts to unincorporated areas", "Aldine ISD school flood alerts"],
  },
  {
    name: "Alief / Upper Brays Bayou",
    risk: "High",
    riskColor: "text-red-400 bg-red-500/10 border-red-500/20",
    area: "Southwest Houston",
    harveyClaims: "Est. $500M+",
    description:
      "Alief lies in the upper Brays Bayou watershed and flooded heavily during Harvey and the Tax Day 2016 storm. Many damaged homes were outside the official 100-year floodplain — illustrating how outdated FEMA maps undercount risk in rapidly developed suburbs.",
    solutions: ["Upper Brays detention expansion", "Equity buyout program (majority low-income)", "Update FEMA floodplain maps"],
  },
  {
    name: "Sims Bayou / Sunnyside",
    risk: "High",
    riskColor: "text-red-400 bg-red-500/10 border-red-500/20",
    area: "South Houston",
    harveyClaims: "Est. $300M+",
    description:
      "Sims Bayou runs east-west through Sunnyside and South Park — historically Black neighborhoods that have seen decades of underinvestment in flood infrastructure. The US Army Corps of Engineers' Sims Bayou project is ongoing but incomplete.",
    solutions: ["Complete USACE Sims Bayou project", "MLK Blvd drainage upgrades", "South Houston stormwater detention"],
  },
  {
    name: "Hobby Airport / SE Houston",
    risk: "High",
    riskColor: "text-red-400 bg-red-500/10 border-red-500/20",
    area: "Southeast Houston",
    harveyClaims: "Est. $400M+",
    description:
      "Clear Creek tributaries and Sims Bayou drainage threaten southeast Houston and Hobby Airport, which flooded during Harvey and disrupted regional emergency response. Many properties here sit in low-lying areas with inadequate drainage.",
    solutions: ["Clear Creek federal flood project expansion", "Hobby Airport resilience upgrades", "Telephone Rd elevated drainage"],
  },
  {
    name: "White Oak Bayou / Spring Branch",
    risk: "Medium",
    riskColor: "text-amber-400 bg-amber-500/10 border-amber-500/20",
    area: "Northwest Inner Loop",
    harveyClaims: "Est. $200M+",
    description:
      "White Oak Bayou's upper watershed through Spring Branch sees flash flooding during intense rain events. Dense impervious cover from commercial corridors on Long Point Rd and Hammerly Blvd limits natural absorption.",
    solutions: ["White Oak Bayou channel improvements", "Long Point Rd stormwater detention", "Increase tree canopy to reduce runoff"],
  },
  {
    name: "Ship Channel / Jacinto City",
    risk: "High",
    riskColor: "text-red-400 bg-red-500/10 border-red-500/20",
    area: "East Houston",
    harveyClaims: "Est. $250M+",
    description:
      "Jacinto City sits at the Hunting Bayou / Ship Channel confluence. Flooding here carries dual risk: structural damage and toxic contamination from adjacent petrochemical facilities and refineries — a documented environmental justice concern.",
    solutions: ["Industrial stormwater compliance", "Ship Channel levee improvements", "Mandatory toxic flood disclosure", "Community early-warning system"],
  },
];

const systemicProposals = [
  {
    icon: "🌿",
    title: "Green Infrastructure at Scale",
    description:
      "Require all new development to retain the first inch of rainfall onsite. Mandate bioswales, permeable pavement, and green roofs in commercial zones. Harris County is already ~33% impervious (USGS); aggressive green infrastructure can stabilize that as the county grows.",
    cost: "$1.2B in incentives + regulations",
    impact: "30% reduction in urban runoff",
    priority: "Critical",
  },
  {
    icon: "🏘️",
    title: "Voluntary Buyout Program Expansion",
    description:
      "Harris County has bought out 4,000 flood-prone homes. Scale this to 25,000+ homes over 10 years, prioritizing low-income residents and repeat-flood properties. Convert acquired land to parks and detention.",
    cost: "$3.5B (federally matched)",
    impact: "25,000 families moved to safety",
    priority: "Critical",
  },
  {
    icon: "🌊",
    title: "Bayou Restoration & Widening",
    description:
      "Continue and expand the Brays, White Oak, and Buffalo Bayou channel widening projects. Restore native vegetation along bayou banks. Add inline and offline detention across all major watersheds.",
    cost: "$2.8B",
    impact: "40% reduced peak flood flows",
    priority: "High",
  },
  {
    icon: "🏛️",
    title: "Floodplain Zoning Reform",
    description:
      "Adopt FEMA 500-year floodplain as minimum zoning standard. Prohibit new development in high-risk zones. Require elevation of 2+ feet above base flood elevation for all new construction.",
    cost: "Policy only",
    impact: "Prevent future at-risk development",
    priority: "High",
  },
  {
    icon: "💧",
    title: "Stormwater Infrastructure Overhaul",
    description:
      "Replace undersized culverts and pipes citywide. Houston's stormwater system was built for 25-year storms but now sees 100-year events regularly due to climate change.",
    cost: "$4.1B over 15 years",
    impact: "Doubled stormwater capacity",
    priority: "High",
  },
  {
    icon: "☀️",
    title: "Climate-Resilient Urban Forestry",
    description:
      "Trees are nature's stormwater system. Increase urban tree canopy to 35%, prioritizing flood-prone neighborhoods. A 10% canopy increase reduces peak runoff by 15%.",
    cost: "$400M over 10 years",
    impact: "15% runoff reduction citywide",
    priority: "Medium",
  },
];

export default function FloodSection() {
  return (
    <section id="flooding" className="py-24 px-6 bg-gray-950">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm mb-5">
            <Waves size={14} />
            Flood Resilience
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Building a{" "}
            <span className="text-blue-400">Flood-Resilient</span> Houston
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
            Houston sits on flat coastal prairie with high rainfall — and over a third
            of Harris County is now covered by impervious surfaces (USGS), making
            natural drainage increasingly impossible. Decades of unchecked floodplain
            development have put hundreds of thousands of residents at risk.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-white/3 border border-white/8 rounded-xl p-5"
            >
              <div className={`text-2xl font-bold mb-1 ${s.color}`}>{s.value}</div>
              <div className="text-white text-sm font-medium">{s.label}</div>
              <div className="text-gray-500 text-xs mt-0.5">{s.sub}</div>
            </div>
          ))}
        </div>

        {/* Flood zones */}
        <h3 className="text-white font-semibold text-2xl mb-8 flex items-center gap-2">
          <AlertTriangle size={20} className="text-red-400" />
          High-Risk Flood Areas
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-16">
          {floodZones.map((zone) => (
            <div
              key={zone.name}
              className="bg-white/3 border border-white/8 rounded-xl p-6 hover:border-white/15 transition-colors"
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <div>
                  <h4 className="text-white font-semibold text-sm">{zone.name}</h4>
                  <span className="text-gray-500 text-xs">{zone.area}</span>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <span
                    className={`text-[10px] px-2 py-0.5 rounded-full border font-medium ${zone.riskColor}`}
                  >
                    {zone.risk} Risk
                  </span>
                  <span className="text-xs text-gray-400 flex items-center gap-1">
                    <DollarSign size={10} />
                    {zone.harveyClaims}
                  </span>
                </div>
              </div>

              <p className="text-gray-400 text-xs leading-relaxed mb-4">
                {zone.description}
              </p>

              <div className="space-y-1">
                {zone.solutions.map((s) => (
                  <div key={s} className="flex items-start gap-1.5 text-xs text-gray-300">
                    <span className="text-blue-400 mt-0.5 flex-shrink-0">→</span>
                    {s}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Systemic solutions */}
        <h3 className="text-white font-semibold text-2xl mb-8 flex items-center gap-2">
          <CheckCircle size={20} className="text-blue-400" />
          Citywide Solutions
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {systemicProposals.map((p) => (
            <div
              key={p.title}
              className="bg-white/3 border border-white/8 rounded-xl p-6 hover:border-blue-500/30 hover:bg-white/5 transition-all"
            >
              <div className="text-3xl mb-3">{p.icon}</div>
              <div className="flex items-start justify-between gap-2 mb-2">
                <h4 className="text-white font-semibold text-sm">{p.title}</h4>
                <span
                  className={`text-[10px] px-2 py-0.5 rounded-full font-medium flex-shrink-0 ${
                    p.priority === "Critical"
                      ? "bg-purple-500/15 text-purple-400 border border-purple-500/20"
                      : p.priority === "High"
                      ? "bg-red-500/15 text-red-400 border border-red-500/20"
                      : "bg-blue-500/15 text-blue-400 border border-blue-500/20"
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
                  <span className="text-blue-400 text-xs font-medium">{p.impact}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom callout */}
        <div className="bg-gradient-to-r from-blue-950/60 to-purple-950/60 border border-blue-900/40 rounded-2xl p-8">
          <div className="flex items-start gap-4">
            <Home size={28} className="text-blue-400 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="text-white font-bold text-xl mb-2">
                Climate Reality Check
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed max-w-3xl">
                Houston experiences a major flood event roughly every 3 years. As climate change
                intensifies rainfall events, the city faces a choice: continue reactive
                emergency response, or make the systemic investments needed to protect residents
                permanently. The Harris County $2.5B bond is a start — but analysts estimate
                full flood resilience requires $35B+ in sustained investment over 30 years.
                The cost of inaction — measured in lives, property, and displacement — is far greater.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
