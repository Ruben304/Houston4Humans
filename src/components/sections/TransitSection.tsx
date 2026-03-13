import { Train, CheckCircle, Clock, TrendingUp } from "lucide-react";
import { cityStats } from "@/data/houston";

const problems = [
  {
    stat: `${cityStats.transit.transitScore}/100`,
    label: "Transit Score",
    sub: "vs. 72 for NYC, 60 for Chicago",
    color: "text-sky-400",
  },
  {
    stat: `${cityStats.transit.populationNearTransit}%`,
    label: "Near Frequent Transit",
    sub: "62% in comparable cities",
    color: "text-orange-400",
  },
  {
    stat: `${cityStats.transit.metroRailMiles}mi`,
    label: "Rail Network",
    sub: "vs. 100+ mi for peer cities",
    color: "text-sky-400",
  },
  {
    stat: "83",
    label: "Bus Routes",
    sub: "Many run only every 30–60 min",
    color: "text-orange-400",
  },
];

const existingLines = [
  {
    name: "Red Line (Main Street)",
    color: "#ef4444",
    miles: 12.8,
    stations: 25,
    ridership: "25,208/day",
    status: "Operating",
  },
  {
    name: "Green Line (East End)",
    color: "#22c55e",
    miles: 4.7,
    stations: 9,
    ridership: "3,727/day",
    status: "Operating",
  },
  {
    name: "Purple Line (Southeast)",
    color: "#a855f7",
    miles: 4.7,
    stations: 10,
    ridership: "3,986/day",
    status: "Operating",
  },
  {
    name: "Uptown BRT (Post Oak)",
    color: "#06b6d4",
    miles: 3.3,
    stations: 12,
    ridership: "~4,200/day",
    status: "Operating",
  },
];

const proposals = [
  {
    icon: "🚇",
    name: "University Line",
    type: "Light Rail",
    color: "border-orange-500/30 bg-orange-500/5",
    tagColor: "bg-orange-500/15 text-orange-400 border-orange-500/20",
    cost: "$1.8B",
    miles: 25,
    description:
      "Long-awaited east-west corridor from UH to Energy Corridor via Midtown, Montrose, and Galleria. Would connect Houston's two largest job centers.",
    impact: "35,000 daily riders projected",
    priority: "Critical",
    timeline: "2028–2032",
    notes: "Repeatedly delayed due to funding; METRO referendum needed",
  },
  {
    icon: "🚇",
    name: "Red Line North Extension",
    type: "Light Rail",
    color: "border-orange-500/30 bg-orange-500/5",
    tagColor: "bg-orange-500/15 text-orange-400 border-orange-500/20",
    cost: "$650M",
    miles: 8.5,
    description:
      "Extend the existing Red Line north to Greenspoint, serving one of Houston's most transit-dependent populations. Future phase could reach Bush IAH airport.",
    impact: "12,000 new daily riders",
    priority: "High",
    timeline: "2027–2030",
    notes: "Strong community support; land available along US-59 median",
  },
  {
    icon: "✈️",
    name: "Hobby Airport Rail Link",
    type: "Light Rail",
    color: "border-orange-500/30 bg-orange-500/5",
    tagColor: "bg-orange-500/15 text-orange-400 border-orange-500/20",
    cost: "$480M",
    miles: 6.2,
    description:
      "Direct rail connection from the Purple Line to William P. Hobby Airport. Would serve 13M annual passengers and eliminate taxi/rideshare dependency.",
    impact: "8,500 new daily riders",
    priority: "High",
    timeline: "2028–2031",
    notes: "Airport authority partnership could reduce public cost",
  },
  {
    icon: "🚌",
    name: "Inner Loop BRT Network",
    type: "Bus Rapid Transit",
    color: "border-yellow-500/30 bg-yellow-500/5",
    tagColor: "bg-yellow-500/15 text-yellow-400 border-yellow-500/20",
    cost: "$320M",
    miles: 18,
    description:
      "High-frequency BRT connecting Heights, Montrose, Museum District, and Medical Center — neighborhoods generating massive transit demand but unserved by rail.",
    impact: "22,000 new daily riders",
    priority: "High",
    timeline: "2026–2028",
    notes: "Can use existing road ROW; faster to implement than rail",
  },
  {
    icon: "🚌",
    name: "Westheimer Rapid Corridor",
    type: "Bus Rapid Transit",
    color: "border-yellow-500/30 bg-yellow-500/5",
    tagColor: "bg-yellow-500/15 text-yellow-400 border-yellow-500/20",
    cost: "$280M",
    miles: 22,
    description:
      "Dedicated bus lanes on Westheimer Rd from Midtown to Energy Corridor — Houston's highest-ridership bus corridor. Dedicated lanes would triple service speed.",
    impact: "28,000 new daily riders",
    priority: "High",
    timeline: "2026–2028",
    notes: "Westheimer carries 55,000 vehicles/day; lane conversion politically challenging",
  },
  {
    icon: "🚂",
    name: "Houston-Galveston Commuter Rail",
    type: "Commuter Rail",
    color: "border-blue-500/30 bg-blue-500/5",
    tagColor: "bg-blue-500/15 text-blue-400 border-blue-500/20",
    cost: "$2.2B",
    miles: 52,
    description:
      "Regional commuter rail connecting Houston to Galveston via the existing Union Pacific freight corridor, with stops in Pearland, Webster, and Clear Lake.",
    impact: "15,000 daily riders",
    priority: "Medium",
    timeline: "2030–2035",
    notes: "Requires freight railroad negotiations; strong tourism & commuter case",
  },
];

export default function TransitSection() {
  return (
    <section id="transit" className="py-24 px-6 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-sky-500/10 border border-sky-500/20 rounded-full text-sky-400 text-sm mb-5">
            <Train size={14} />
            Public Transit
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Connecting{" "}
            <span className="text-sky-400">Every Neighborhood</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
            Houston has one of America's least developed transit systems for its size.
            The METRORail system's 22.7 miles of track (Red, Green, and Purple lines) serves just a fraction of residents.
            Strategic expansion can transform mobility for millions.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {problems.map((p) => (
            <div
              key={p.label}
              className="bg-white/3 border border-white/8 rounded-xl p-5"
            >
              <div className={`text-3xl font-bold mb-1 ${p.color}`}>{p.stat}</div>
              <div className="text-white text-sm font-medium">{p.label}</div>
              <div className="text-gray-500 text-xs mt-0.5">{p.sub}</div>
            </div>
          ))}
        </div>

        {/* Existing network */}
        <div className="bg-white/3 border border-white/8 rounded-2xl p-8 mb-16">
          <h3 className="text-white font-semibold text-lg mb-6">
            Current METRORail Network
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left text-gray-500 pb-3 font-medium">Line</th>
                  <th className="text-right text-gray-500 pb-3 font-medium">Miles</th>
                  <th className="text-right text-gray-500 pb-3 font-medium">Stations</th>
                  <th className="text-right text-gray-500 pb-3 font-medium">Daily Riders</th>
                  <th className="text-right text-gray-500 pb-3 font-medium">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {existingLines.map((line) => (
                  <tr key={line.name}>
                    <td className="py-3 flex items-center gap-2.5">
                      <span
                        className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                        style={{ backgroundColor: line.color }}
                      />
                      <span className="text-gray-200">{line.name}</span>
                    </td>
                    <td className="py-3 text-right text-gray-400">{line.miles}</td>
                    <td className="py-3 text-right text-gray-400">{line.stations}</td>
                    <td className="py-3 text-right text-gray-300 font-medium">
                      {line.ridership}
                    </td>
                    <td className="py-3 text-right">
                      <span className="text-xs bg-green-500/15 text-green-400 border border-green-500/20 px-2 py-0.5 rounded-full">
                        {line.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="border-t border-white/10">
                  <td className="pt-3 text-gray-300 font-semibold">Rail Total</td>
                  <td className="pt-3 text-right text-gray-300 font-semibold">22.7</td>
                  <td className="pt-3 text-right text-gray-500 font-semibold text-xs">—</td>
                  <td className="pt-3 text-right text-sky-400 font-semibold">32,921/day</td>
                  <td />
                </tr>
              </tfoot>
            </table>
          </div>
        </div>

        {/* Key Findings from official ridership data */}
        <div className="mb-16">
          <h3 className="text-white font-semibold text-2xl mb-6 flex items-center gap-2">
            <TrendingUp size={20} className="text-sky-400" />
            What the January 2026 Data Reveals
          </h3>
          <p className="text-gray-500 text-xs mb-6">
            Source: METRO Houston Ridership Report, January 2026 (ridemetro.org/about/records-reports/ridership-reports)
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            <div className="bg-red-500/5 border border-red-500/20 rounded-xl p-5">
              <div className="text-2xl font-bold text-red-400 mb-1">77%</div>
              <div className="text-white text-sm font-medium mb-1">Red Line carries almost all rail riders</div>
              <p className="text-gray-400 text-xs leading-relaxed">
                The Red Line alone carries 25,208 of the system's 32,921 weekday rail riders.
                The Green (3,727) and Purple (3,986) lines combined serve fewer riders than the
                Red Line serves at its top three stations. This imbalance shows how concentrated
                Houston's transit demand is on the Main Street/TMC corridor.
              </p>
            </div>

            <div className="bg-orange-500/5 border border-orange-500/20 rounded-xl p-5">
              <div className="text-2xl font-bold text-orange-400 mb-1">TMC = Rail's Engine</div>
              <div className="text-white text-sm font-medium mb-1">Medical Center stations dominate ridership</div>
              <p className="text-gray-400 text-xs leading-relaxed">
                The three busiest Red Line stations are all at the Texas Medical Center:
                Dryden/TMC (2,336/day), Smith Lands (1,963), and Memorial Hermann/Houston Zoo (1,823).
                Healthcare workers, students, and patients are the system's primary daily users —
                reinforcing the case for more transit into and around the TMC.
              </p>
            </div>

            <div className="bg-yellow-500/5 border border-yellow-500/20 rounded-xl p-5">
              <div className="text-2xl font-bold text-yellow-400 mb-1">13,282</div>
              <div className="text-white text-sm font-medium mb-1">Westheimer bus riders per weekday</div>
              <p className="text-gray-400 text-xs leading-relaxed">
                Route 82 (Westheimer) is METRO's single busiest bus route with 13,282 average
                weekday boardings — more than the entire Green Line rail service. This is the
                clearest possible argument for the proposed Westheimer BRT: the demand already
                exists, it just has no dedicated infrastructure.
              </p>
            </div>

            <div className="bg-sky-500/5 border border-sky-500/20 rounded-xl p-5">
              <div className="text-2xl font-bold text-sky-400 mb-1">−10%</div>
              <div className="text-white text-sm font-medium mb-1">Light rail ridership fell year-over-year</div>
              <p className="text-gray-400 text-xs leading-relaxed">
                Despite bus ridership growing 8% in January 2026 vs. January 2025, light rail
                ridership dropped 10% (partly due to scheduled service interruptions). Pre-pandemic
                (FY2019) the Red Line averaged ~40,000 riders/day — today it sits at 25,208.
                Restoring and growing that ridership requires the frequency, reliability, and
                network expansion that only capital investment can deliver.
              </p>
            </div>

          </div>
        </div>

        {/* Proposed expansions */}
        <h3 className="text-white font-semibold text-2xl mb-8 flex items-center gap-2">
          <CheckCircle size={20} className="text-sky-400" />
          Proposed Expansions
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {proposals.map((p) => (
            <div
              key={p.name}
              className={`border rounded-xl p-6 hover:opacity-90 transition-opacity ${p.color}`}
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="flex items-center gap-2.5">
                  <span className="text-2xl">{p.icon}</span>
                  <div>
                    <h4 className="text-white font-semibold text-sm">{p.name}</h4>
                    <span className={`text-[10px] px-2 py-0.5 rounded-full border font-medium ${p.tagColor}`}>
                      {p.type}
                    </span>
                  </div>
                </div>
                <span
                  className={`text-[10px] px-2 py-1 rounded-full font-medium flex-shrink-0 ${
                    p.priority === "Critical"
                      ? "bg-red-500/15 text-red-400 border border-red-500/20"
                      : p.priority === "High"
                      ? "bg-orange-500/15 text-orange-400 border border-orange-500/20"
                      : "bg-blue-500/15 text-blue-400 border border-blue-500/20"
                  }`}
                >
                  {p.priority}
                </span>
              </div>

              <p className="text-gray-400 text-xs leading-relaxed mb-4">
                {p.description}
              </p>

              <div className="grid grid-cols-2 gap-3 text-xs mb-3">
                <div>
                  <span className="text-gray-500">Estimated Cost</span>
                  <div className="text-white font-medium mt-0.5">{p.cost}</div>
                </div>
                <div>
                  <span className="text-gray-500">New Miles</span>
                  <div className="text-white font-medium mt-0.5">{p.miles} mi</div>
                </div>
                <div>
                  <span className="text-gray-500">Projected Impact</span>
                  <div className="text-sky-400 font-medium mt-0.5">{p.impact}</div>
                </div>
                <div>
                  <span className="text-gray-500 flex items-center gap-1">
                    <Clock size={10} /> Timeline
                  </span>
                  <div className="text-gray-300 font-medium mt-0.5">{p.timeline}</div>
                </div>
              </div>

              {p.notes && (
                <div className="text-[10px] text-gray-500 bg-white/5 rounded-lg px-3 py-2 mt-2 leading-relaxed">
                  ⚠ {p.notes}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Total investment */}
        <div className="mt-12 bg-sky-500/5 border border-sky-500/20 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-white font-bold text-2xl mb-1">
              Total Investment: $5.7B
            </h3>
            <p className="text-gray-400 text-sm">
              Adds 73+ miles of new rail/BRT, nearly tripling the existing network
            </p>
          </div>
          <div className="flex gap-8 flex-shrink-0">
            <div className="text-center">
              <div className="text-3xl font-bold text-sky-400">100K+</div>
              <div className="text-gray-400 text-xs mt-1">New daily riders</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-sky-400">73mi</div>
              <div className="text-gray-400 text-xs mt-1">New network miles</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-sky-400">2M+</div>
              <div className="text-gray-400 text-xs mt-1">Residents served</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
