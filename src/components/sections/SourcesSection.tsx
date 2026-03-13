import { ExternalLink, BookOpen } from "lucide-react";

type Source = {
  claim: string;
  source: string;
  url: string;
  note?: string;
};

const categories: { label: string; color: string; sources: Source[] }[] = [
  {
    label: "Walkability",
    color: "text-green-400 border-green-500/20 bg-green-500/5",
    sources: [
      {
        claim: "Walk Score 47/100 (Car-Dependent)",
        source: "Walk Score — Houston, TX",
        url: "https://www.walkscore.com/TX/Houston",
      },
      {
        claim: "~41% of Houston streets have sidewalks",
        source: "LINK Houston — Closing the Gaps 2024 / Houston Public Works Sidewalk Program",
        url: "https://www.houstonpublicworks.org/sidewalk-program",
        note: "City estimates full sidewalk + repair cost at $13.2B",
      },
      {
        claim: "98 pedestrian fatalities in 2023 (3rd highest in US)",
        source: "Federal Highway Administration / Click2Houston, Nov 2025",
        url: "https://www.click2houston.com/news/local/2025/11/28/houston-records-third-highest-pedestrian-deaths-in-the-nation-federal-data-shows/",
      },
      {
        claim: "Transit Score 43/100",
        source: "Walk Score — Houston, TX",
        url: "https://www.walkscore.com/TX/Houston",
      },
      {
        claim: "Tree canopy at 18% of city area",
        source: "USDA Forest Service — Houston's Urban Forest (2015)",
        url: "https://research.fs.usda.gov/treesearch/54109",
        note: "City's stated goal is 22% canopy by 2030",
      },
      {
        claim: "Houston is #1 in vehicle miles traveled per capita",
        source: "Texas A&M Transportation Institute — Urban Mobility Report",
        url: "https://mobility.tamu.edu/umr/",
      },
    ],
  },
  {
    label: "Public Transit",
    color: "text-sky-400 border-sky-500/20 bg-sky-500/5",
    sources: [
      {
        claim: "METRORail: 22.7 miles, Red/Green/Purple lines",
        source: "METRO Houston — METRORail System",
        url: "https://www.ridemetro.org/riding-metro/transit-services/metrorail",
      },
      {
        claim: "Red Line: 25,208 avg weekday riders; Green Line: 3,727; Purple Line: 3,986 (Jan 2026)",
        source: "METRO Houston — January 2026 Ridership Report (ridemetro.org)",
        url: "https://www.ridemetro.org/about/records-reports/ridership-reports",
        note: "Includes per-station boardings. Red Line = 77% of all rail ridership.",
      },
      {
        claim: "Route 82 (Westheimer) carries 13,282 weekday riders — busiest bus route",
        source: "METRO Houston — January 2026 Ridership Report",
        url: "https://www.ridemetro.org/about/records-reports/ridership-reports",
        note: "More riders than the entire Green Line rail service",
      },
      {
        claim: "Top Red Line stations: Dryden/TMC (2,336), Smith Lands (1,963), Memorial Hermann (1,823)",
        source: "METRO Houston — January 2026 Ridership Report, Station-Level Data",
        url: "https://www.ridemetro.org/about/records-reports/ridership-reports",
      },
      {
        claim: "Red Line: 12.8 miles, 25 stations (Northline to Fannin South)",
        source: "METRO Houston / Wikipedia — METRORail Red Line",
        url: "https://en.wikipedia.org/wiki/METRORail_Red_Line",
      },
      {
        claim: "Uptown BRT (Post Oak Silver Line): 3.3 miles, 12 stations",
        source: "Uptown Houston — Post Oak BRT",
        url: "https://www.uptown-houston.com/infrastructure/post-oak-brt/",
      },
      {
        claim: "University Line — long-planned east-west light rail corridor",
        source: "METRO Houston Long Range Plan",
        url: "https://www.ridemetro.org/about/metro-finances-and-planning/long-range-plan",
      },
    ],
  },
  {
    label: "Flooding & Resilience",
    color: "text-blue-400 border-blue-500/20 bg-blue-500/5",
    sources: [
      {
        claim: "Hurricane Harvey: $125 billion in damage",
        source: "NOAA National Hurricane Center — Tropical Cyclone Report: Harvey",
        url: "https://www.nhc.noaa.gov/data/tcr/AL092017_Harvey.pdf",
        note: "Second-costliest US hurricane on record",
      },
      {
        claim: "~136,000 structures flooded during Harvey in Harris County",
        source: "Harris County Flood Control District — Countywide Impacts",
        url: "https://www.hcfcd.org/About/Harris-Countys-Flooding-History/Hurricane-Harvey/Countywide-Impacts",
      },
      {
        claim: "Addicks/Barker reservoirs — intentional release flooded ~25,000 properties",
        source: "Texas Tribune / ProPublica — Harvey Reservoirs Investigation",
        url: "https://apps.texastribune.org/harvey-reservoirs/",
        note: "Many flooded homes were outside the official 100-year floodplain",
      },
      {
        claim: "Harris County $2.5B flood bond (Proposition A)",
        source: "Harris County Flood Control District — 2018 Bond Program",
        url: "https://www.hcfcd.org/2018-bond-program",
        note: "Passed August 25, 2018 with 85% of votes",
      },
      {
        claim: "~4,000 homes bought out through HCFCD buyout program (since 1985)",
        source: "Harris County Flood Control District — Home Buyout Program",
        url: "https://www.hcfcd.org/Activity/Additional-Programs/Home-Buyout-Program",
      },
      {
        claim: "~33% of Harris County is impervious surface",
        source: "USGS / ReduceFlooding.com — Harris County Impervious Cover Study",
        url: "https://reduceflooding.com/2021/08/05/usgs-says-one-third-of-harris-county-now-impervious-cover/",
      },
      {
        claim: "Meyerland flooded in 2001 (Allison), 2015, 2016, and 2017 (Harvey)",
        source: "Wikipedia — Meyerland, Houston",
        url: "https://en.wikipedia.org/wiki/Meyerland,_Houston",
      },
      {
        claim: "Houston experiences major flood events roughly every 2–3 years",
        source: "Kinder Institute for Urban Research — Rice University",
        url: "https://kinder.rice.edu/urbanedge/despite-increasing-risk-harris-county-more-people-are-living-flood-plains",
      },
    ],
  },
  {
    label: "General / Demographics",
    color: "text-gray-400 border-white/10 bg-white/3",
    sources: [
      {
        claim: "Houston is the 4th largest US city, population ~2.39M",
        source: "US Census Bureau — July 2024 Population Estimates",
        url: "https://www.houstontx.gov/abouthouston/houstonfacts.html",
      },
      {
        claim: "Rapid urbanization and floodplain development patterns",
        source: "Kinder Institute — Rapid Urbanization of Houston",
        url: "https://kinder.rice.edu/urbanedge/rapid-urbanization-houston-how-it-happened-and-why-it-matters",
      },
      {
        claim: "Houston tree canopy goal of 22% by 2030 / 4.6M trees",
        source: "Kinder Institute — How Houston Plans to Plant 4.6 Million New Trees",
        url: "https://kinder.rice.edu/urbanedge/how-houston-plans-plant-46-million-new-trees-2030",
      },
    ],
  },
];

export default function SourcesSection() {
  return (
    <section id="sources" className="py-24 px-6 bg-gray-900 border-t border-white/8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-gray-400 text-sm mb-5">
            <BookOpen size={14} />
            Data &amp; Sources
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Where the Data Comes From
          </h2>
          <p className="text-gray-400 text-base max-w-2xl leading-relaxed">
            Every statistic on this site is drawn from government reports, peer-reviewed
            studies, or established advocacy organizations. Click any source to verify.
          </p>
        </div>

        <div className="space-y-8">
          {categories.map((cat) => (
            <div key={cat.label} className={`border rounded-2xl p-6 ${cat.color}`}>
              <h3 className="font-semibold text-sm uppercase tracking-wider mb-5 opacity-80">
                {cat.label}
              </h3>
              <div className="space-y-4">
                {cat.sources.map((s) => (
                  <div
                    key={s.claim}
                    className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4 pb-4 border-b border-white/5 last:pb-0 last:border-0"
                  >
                    {/* Claim */}
                    <div className="flex-1 min-w-0">
                      <p className="text-white text-sm font-medium leading-snug">
                        {s.claim}
                      </p>
                      {s.note && (
                        <p className="text-gray-500 text-xs mt-0.5 leading-relaxed">
                          {s.note}
                        </p>
                      )}
                    </div>
                    {/* Source link */}
                    <a
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-shrink-0 inline-flex items-center gap-1.5 text-xs text-gray-400 hover:text-white transition-colors underline underline-offset-2 decoration-white/20 hover:decoration-white/60 sm:text-right sm:max-w-xs"
                    >
                      <ExternalLink size={11} className="flex-shrink-0" />
                      {s.source}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="text-gray-600 text-xs text-center mt-10">
          Proposals and cost estimates are derived from METRO Long Range Plans, Harris County
          Flood Control studies, and comparable city infrastructure projects. They are
          illustrative, not official budgets.
        </p>
      </div>
    </section>
  );
}
