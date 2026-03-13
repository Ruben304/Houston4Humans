// Houston city data: walkability, transit, and flood zones
// Coordinates in GeoJSON format: [longitude, latitude]

export interface NeighborhoodFeature {
  id: string;
  name: string;
  walkScore: number;
  transitScore: number;
  bikeScore: number;
  population: number;
  description: string;
  improvements: string[];
}

export const HOUSTON_CENTER: [number, number] = [-95.3698, 29.7604];

// ─── Walkability GeoJSON ───────────────────────────────────────────────────

export const walkabilityData: GeoJSON.FeatureCollection = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      id: "downtown",
      properties: {
        name: "Downtown",
        walkScore: 88,
        description: "Houston's most walkable area with dense mixed-use development",
        improvements: ["Expand sidewalk network", "Add protected crosswalks"],
      },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [-95.387, 29.748], [-95.349, 29.748],
          [-95.349, 29.774], [-95.387, 29.774],
          [-95.387, 29.748],
        ]],
      },
    },
    {
      type: "Feature",
      id: "midtown",
      properties: {
        name: "Midtown",
        walkScore: 83,
        description: "High-density residential and commercial corridor",
        improvements: ["Complete sidewalk gaps", "Better lighting"],
      },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [-95.397, 29.736], [-95.358, 29.736],
          [-95.358, 29.752], [-95.397, 29.752],
          [-95.397, 29.736],
        ]],
      },
    },
    {
      type: "Feature",
      id: "montrose",
      properties: {
        name: "Montrose",
        walkScore: 80,
        description: "Vibrant arts district with walkable retail corridors",
        improvements: ["Widen sidewalks on Westheimer", "Add bike lanes"],
      },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [-95.415, 29.737], [-95.390, 29.737],
          [-95.390, 29.760], [-95.415, 29.760],
          [-95.415, 29.737],
        ]],
      },
    },
    {
      type: "Feature",
      id: "museum-district",
      properties: {
        name: "Museum District",
        walkScore: 78,
        description: "Cultural hub with museums, parks, and universities",
        improvements: ["Improve pedestrian connections to Hermann Park"],
      },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [-95.402, 29.716], [-95.368, 29.716],
          [-95.368, 29.740], [-95.402, 29.740],
          [-95.402, 29.716],
        ]],
      },
    },
    {
      type: "Feature",
      id: "medical-center",
      properties: {
        name: "Texas Medical Center",
        walkScore: 72,
        description: "World's largest medical complex with significant pedestrian demand",
        improvements: ["Covered walkways between facilities", "Bike-share expansion"],
      },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [-95.415, 29.698], [-95.380, 29.698],
          [-95.380, 29.718], [-95.415, 29.718],
          [-95.415, 29.698],
        ]],
      },
    },
    {
      type: "Feature",
      id: "heights",
      properties: {
        name: "The Heights",
        walkScore: 65,
        description: "Historic neighborhood with improving walkability along 19th St",
        improvements: ["Complete Hike & Bike Trail connections", "Traffic calming"],
      },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [-95.425, 29.778], [-95.372, 29.778],
          [-95.372, 29.812], [-95.425, 29.812],
          [-95.425, 29.778],
        ]],
      },
    },
    {
      type: "Feature",
      id: "upper-kirby",
      properties: {
        name: "Upper Kirby",
        walkScore: 71,
        description: "Commercial corridor with improving pedestrian infrastructure",
        improvements: ["Streetscape improvements on Kirby Dr"],
      },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [-95.430, 29.720], [-95.408, 29.720],
          [-95.408, 29.742], [-95.430, 29.742],
          [-95.430, 29.720],
        ]],
      },
    },
    {
      type: "Feature",
      id: "galleria",
      properties: {
        name: "Galleria / Uptown",
        walkScore: 65,
        description: "Major commercial hub but auto-dominated street design",
        improvements: ["Post Oak BRT pedestrian connections", "Shade infrastructure"],
      },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [-95.480, 29.728], [-95.440, 29.728],
          [-95.440, 29.758], [-95.480, 29.758],
          [-95.480, 29.728],
        ]],
      },
    },
    {
      type: "Feature",
      id: "eado",
      properties: {
        name: "EaDo (East Downtown)",
        walkScore: 52,
        description: "Rapidly developing area with emerging walkable blocks",
        improvements: ["Connect to rail stations", "Add street-level retail"],
      },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [-95.358, 29.743], [-95.322, 29.743],
          [-95.322, 29.765], [-95.358, 29.765],
          [-95.358, 29.743],
        ]],
      },
    },
    {
      type: "Feature",
      id: "third-ward",
      properties: {
        name: "Third Ward",
        walkScore: 48,
        description: "Historic Black neighborhood with significant infrastructure gaps",
        improvements: ["Repair sidewalk network", "Add crosswalks and lighting"],
      },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [-95.382, 29.716], [-95.348, 29.716],
          [-95.348, 29.742], [-95.382, 29.742],
          [-95.382, 29.716],
        ]],
      },
    },
    {
      type: "Feature",
      id: "northside",
      properties: {
        name: "Northside",
        walkScore: 38,
        description: "Large residential area with sparse pedestrian infrastructure",
        improvements: ["Priority sidewalk construction", "Safe routes to school"],
      },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [-95.425, 29.818], [-95.352, 29.818],
          [-95.352, 29.872], [-95.425, 29.872],
          [-95.425, 29.818],
        ]],
      },
    },
    {
      type: "Feature",
      id: "memorial",
      properties: {
        name: "Memorial",
        walkScore: 25,
        description: "Affluent suburb with almost no pedestrian infrastructure",
        improvements: ["Mandate sidewalks in new development", "Trail network"],
      },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [-95.498, 29.752], [-95.425, 29.752],
          [-95.425, 29.792], [-95.498, 29.792],
          [-95.498, 29.752],
        ]],
      },
    },
    {
      type: "Feature",
      id: "katy",
      properties: {
        name: "Katy",
        walkScore: 20,
        description: "Far western suburb entirely built around the automobile",
        improvements: ["Develop town center walkable districts", "Express transit to downtown"],
      },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [-95.870, 29.768], [-95.740, 29.768],
          [-95.740, 29.836], [-95.870, 29.836],
          [-95.870, 29.768],
        ]],
      },
    },
    {
      type: "Feature",
      id: "sugar-land",
      properties: {
        name: "Sugar Land",
        walkScore: 22,
        description: "Southwest suburb with isolated walkable pockets",
        improvements: ["Town Square expansion", "BRT connection to downtown"],
      },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [-95.660, 29.575], [-95.548, 29.575],
          [-95.548, 29.645], [-95.660, 29.645],
          [-95.660, 29.575],
        ]],
      },
    },

    // ── Beltway 8 / Mid-City Neighborhoods ──────────────────────────────────

    {
      type: "Feature",
      id: "fifth-ward",
      properties: {
        name: "Fifth Ward",
        walkScore: 45,
        description: "Historic Third Ward's northeast neighbor; underinvested sidewalk network and high pedestrian danger",
        improvements: ["Safe routes to school program", "Sidewalk repair priority", "Lighting along Hardy St"],
      },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [-95.358, 29.766], [-95.298, 29.766],
          [-95.298, 29.812], [-95.358, 29.812],
          [-95.358, 29.766],
        ]],
      },
    },
    {
      type: "Feature",
      id: "east-end",
      properties: {
        name: "East End / Magnolia Park",
        walkScore: 45,
        description: "Working-class Latino corridor east of EaDo; dense but lacking safe pedestrian crossings",
        improvements: ["Harrisburg Blvd streetscape", "Protected crossings on major arterials", "Connect to Green Line stations"],
      },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [-95.322, 29.720], [-95.238, 29.720],
          [-95.238, 29.762], [-95.322, 29.762],
          [-95.322, 29.720],
        ]],
      },
    },
    {
      type: "Feature",
      id: "jacinto-city",
      properties: {
        name: "Jacinto City",
        walkScore: 28,
        description: "Industrial east-side enclave inside Beltway 8; almost no pedestrian infrastructure",
        improvements: ["Sidewalks on residential streets", "Safe crossing at Market St", "Bus stop improvements"],
      },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [-95.238, 29.742], [-95.172, 29.742],
          [-95.172, 29.782], [-95.238, 29.782],
          [-95.238, 29.742],
        ]],
      },
    },
    {
      type: "Feature",
      id: "acres-homes",
      properties: {
        name: "Acres Homes",
        walkScore: 30,
        description: "Large northwest neighborhood with significant sidewalk gaps and high pedestrian fatality rates",
        improvements: ["Complete sidewalk network on W. Montgomery Rd", "Safe Routes to School", "Bus stop infrastructure"],
      },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [-95.500, 29.870], [-95.428, 29.870],
          [-95.428, 29.928], [-95.500, 29.928],
          [-95.500, 29.870],
        ]],
      },
    },
    {
      type: "Feature",
      id: "aldine",
      properties: {
        name: "Aldine",
        walkScore: 28,
        description: "Densely populated unincorporated north Houston community; major transit gaps and missing sidewalks on most streets",
        improvements: ["Aldine Mail Route sidewalks", "Greens Rd pedestrian improvements", "Connect to future Red Line extension"],
      },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [-95.438, 29.918], [-95.282, 29.918],
          [-95.282, 29.962], [-95.438, 29.962],
          [-95.438, 29.918],
        ]],
      },
    },
    {
      type: "Feature",
      id: "greenspoint",
      properties: {
        name: "Greenspoint",
        walkScore: 35,
        description: "North Houston commercial hub near I-45/Beltway 8 interchange; auto-centric design despite density",
        improvements: ["Pedestrian improvements at Greenspoint Mall", "Northline TC connectivity", "Red Line North extension priority stop"],
      },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [-95.498, 29.918], [-95.438, 29.918],
          [-95.438, 29.958], [-95.498, 29.958],
          [-95.498, 29.918],
        ]],
      },
    },
    {
      type: "Feature",
      id: "spring-branch",
      properties: {
        name: "Spring Branch",
        walkScore: 42,
        description: "Northwest inner-Beltway neighborhood; improving but fragmented sidewalk coverage along Long Point Rd",
        improvements: ["Long Point Rd complete streets", "Improve pedestrian crossings on Hammerly Blvd", "Trail connections to Memorial Park"],
      },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [-95.598, 29.793], [-95.492, 29.793],
          [-95.492, 29.855], [-95.598, 29.855],
          [-95.598, 29.793],
        ]],
      },
    },
    {
      type: "Feature",
      id: "westchase",
      properties: {
        name: "Westchase",
        walkScore: 40,
        description: "Major employment district with office parks and almost no pedestrian infrastructure between buildings",
        improvements: ["Westheimer BRT priority", "Shade infrastructure for pedestrians", "Mandate ground-floor retail on Westheimer"],
      },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [-95.608, 29.728], [-95.538, 29.728],
          [-95.538, 29.770], [-95.608, 29.770],
          [-95.608, 29.728],
        ]],
      },
    },
    {
      type: "Feature",
      id: "gulfton",
      properties: {
        name: "Gulfton",
        walkScore: 58,
        description: "One of Houston's densest neighborhoods; mostly affordable apartments and a walkable commercial strip on Hillcroft Ave",
        improvements: ["Hillcroft Ave pedestrian upgrades", "Connect to Westheimer BRT", "Crosswalk improvements at Fondren Rd"],
      },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [-95.538, 29.698], [-95.458, 29.698],
          [-95.458, 29.732], [-95.538, 29.732],
          [-95.538, 29.698],
        ]],
      },
    },
    {
      type: "Feature",
      id: "sharpstown",
      properties: {
        name: "Sharpstown",
        walkScore: 42,
        description: "Southwest mid-city neighborhood with some density but disconnected sidewalk grid",
        improvements: ["Bellaire Blvd streetscape", "Sharpstown Park trail links", "Southwest Freeway BRT station access"],
      },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [-95.608, 29.694], [-95.538, 29.694],
          [-95.538, 29.728], [-95.608, 29.728],
          [-95.608, 29.694],
        ]],
      },
    },
    {
      type: "Feature",
      id: "alief",
      properties: {
        name: "Alief",
        walkScore: 35,
        description: "Diverse far-southwest community near Beltway 8; almost entirely car-dependent with minimal sidewalk infrastructure",
        improvements: ["Beechnut St sidewalks", "Alief TC bus frequency", "Safe Routes to School for AISD"],
      },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [-95.688, 29.688], [-95.608, 29.688],
          [-95.608, 29.742], [-95.688, 29.742],
          [-95.688, 29.688],
        ]],
      },
    },
    {
      type: "Feature",
      id: "sunnyside",
      properties: {
        name: "Sunnyside / South Park",
        walkScore: 35,
        description: "Historically underinvested south Houston neighborhood; few safe walking routes despite residential density",
        improvements: ["MLK Blvd pedestrian safety", "Airport Blvd complete streets", "Sims Bayou greenway access"],
      },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [-95.428, 29.668], [-95.340, 29.668],
          [-95.340, 29.716], [-95.428, 29.716],
          [-95.428, 29.668],
        ]],
      },
    },
    {
      type: "Feature",
      id: "south-houston",
      properties: {
        name: "South Houston / Hobby",
        walkScore: 30,
        description: "Southeast corridor near Hobby Airport; auto-centric development with inadequate pedestrian connections to transit",
        improvements: ["Hobby Airport rail/bus link", "Telephone Rd sidewalk program", "Park & Ride expansion"],
      },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [-95.320, 29.638], [-95.218, 29.638],
          [-95.218, 29.700], [-95.320, 29.700],
          [-95.320, 29.638],
        ]],
      },
    },
  ],
};

// ─── Transit GeoJSON ───────────────────────────────────────────────────────

export const transitData: GeoJSON.FeatureCollection = {
  type: "FeatureCollection",
  features: [
    // Existing METRORail Lines
    {
      type: "Feature",
      id: "red-line",
      properties: {
        name: "Red Line (Main Street)",
        type: "existing-rail",
        label: "Existing",
        ridership: "18,000/day",
        description: "Houston's original light rail, running N-S along Main Street",
      },
      geometry: {
        type: "LineString",
        coordinates: [
          [-95.383, 29.862], // Northline TC
          [-95.383, 29.840],
          [-95.383, 29.818],
          [-95.382, 29.800],
          [-95.381, 29.784],
          [-95.380, 29.774], // Downtown North
          [-95.378, 29.762], // Downtown Central
          [-95.375, 29.752], // Main St Square
          [-95.374, 29.742], // Ensemble/HCC
          [-95.373, 29.730], // Wheeler
          [-95.378, 29.718], // Museum District
          [-95.390, 29.708], // Hermann Park/Rice U
          [-95.398, 29.700], // TMC
          [-95.405, 29.692], // TMC Transit Center
          [-95.410, 29.685], // Reliant Park
        ],
      },
    },
    {
      type: "Feature",
      id: "green-line",
      properties: {
        name: "Green Line (East End)",
        type: "existing-rail",
        label: "Existing",
        ridership: "6,500/day",
        description: "Connects Downtown to East End and University of Houston",
      },
      geometry: {
        type: "LineString",
        coordinates: [
          [-95.378, 29.754], // Downtown Transfer
          [-95.368, 29.748],
          [-95.355, 29.742],
          [-95.342, 29.735],
          [-95.328, 29.726],
          [-95.315, 29.722], // UH
        ],
      },
    },
    {
      type: "Feature",
      id: "purple-line",
      properties: {
        name: "Purple Line (Southeast)",
        type: "existing-rail",
        label: "Existing",
        ridership: "5,800/day",
        description: "Runs from Downtown through Third Ward to Magnolia Park",
      },
      geometry: {
        type: "LineString",
        coordinates: [
          [-95.378, 29.754], // Downtown Transfer
          [-95.372, 29.745],
          [-95.364, 29.735],
          [-95.355, 29.724],
          [-95.345, 29.712],
          [-95.335, 29.700], // Southeast TC
        ],
      },
    },
    {
      type: "Feature",
      id: "uptown-brt",
      properties: {
        name: "Uptown BRT (Post Oak)",
        type: "existing-brt",
        label: "Existing BRT",
        ridership: "4,200/day",
        description: "Bus Rapid Transit along Post Oak Blvd in Uptown district",
      },
      geometry: {
        type: "LineString",
        coordinates: [
          [-95.461, 29.758], // North
          [-95.461, 29.748],
          [-95.461, 29.740],
          [-95.461, 29.733],
          [-95.461, 29.725], // South Galleria
        ],
      },
    },
    // Proposed Expansions
    {
      type: "Feature",
      id: "university-line",
      properties: {
        name: "University Line (Proposed)",
        type: "proposed-rail",
        label: "Proposed",
        priority: "High",
        cost: "$1.8B",
        description: "Long-planned E-W corridor connecting UH to Westchase via Midtown & Galleria",
      },
      geometry: {
        type: "LineString",
        coordinates: [
          [-95.315, 29.722], // UH East
          [-95.340, 29.724],
          [-95.360, 29.738], // Midtown
          [-95.380, 29.746], // Downtown connection
          [-95.408, 29.740], // Kirby
          [-95.432, 29.738], // Greenway Plaza
          [-95.461, 29.738], // Galleria connection
          [-95.500, 29.737], // Westchase
          [-95.540, 29.737], // Energy Corridor
        ],
      },
    },
    {
      type: "Feature",
      id: "north-rail-extension",
      properties: {
        name: "Red Line North Extension (Proposed)",
        type: "proposed-rail",
        label: "Proposed",
        priority: "High",
        cost: "$650M",
        description: "Extend Red Line north to serve growing Greenspoint and Bush Airport corridor",
      },
      geometry: {
        type: "LineString",
        coordinates: [
          [-95.383, 29.862], // Current Northline TC
          [-95.383, 29.892],
          [-95.380, 29.920],
          [-95.376, 29.952],
          [-95.370, 29.985], // Greenspoint
        ],
      },
    },
    {
      type: "Feature",
      id: "hobby-airport-rail",
      properties: {
        name: "Hobby Airport Rail (Proposed)",
        type: "proposed-rail",
        label: "Proposed",
        priority: "Medium",
        cost: "$480M",
        description: "Direct rail connection from Purple Line to Hobby Airport",
      },
      geometry: {
        type: "LineString",
        coordinates: [
          [-95.335, 29.700], // Southeast TC
          [-95.310, 29.680],
          [-95.285, 29.660],
          [-95.278, 29.645], // Hobby Airport
        ],
      },
    },
    {
      type: "Feature",
      id: "inner-loop-brt",
      properties: {
        name: "Inner Loop BRT Network (Proposed)",
        type: "proposed-brt",
        label: "Proposed BRT",
        priority: "High",
        cost: "$320M",
        description: "High-frequency BRT connecting inner loop neighborhoods (Heights, Montrose, Med Center)",
      },
      geometry: {
        type: "LineString",
        coordinates: [
          [-95.398, 29.808], // Heights
          [-95.400, 29.780],
          [-95.402, 29.760], // Montrose
          [-95.402, 29.740],
          [-95.400, 29.720], // Museum District
          [-95.400, 29.700], // Medical Center
        ],
      },
    },
    {
      type: "Feature",
      id: "westheimer-brt",
      properties: {
        name: "Westheimer BRT (Proposed)",
        type: "proposed-brt",
        label: "Proposed BRT",
        priority: "High",
        cost: "$280M",
        description: "High-capacity BRT along Westheimer, Houston's most-traveled corridor",
      },
      geometry: {
        type: "LineString",
        coordinates: [
          [-95.385, 29.738], // Midtown/Elgin
          [-95.406, 29.738],
          [-95.430, 29.738],
          [-95.455, 29.738],
          [-95.480, 29.738], // Galleria
          [-95.510, 29.738],
          [-95.540, 29.738], // Westchase
          [-95.570, 29.738], // Energy Corridor
        ],
      },
    },
  ],
};

// ─── Flood Zone GeoJSON ────────────────────────────────────────────────────

export const floodData: GeoJSON.FeatureCollection = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      id: "addicks-barker",
      properties: {
        name: "Addicks/Barker Reservoir Area",
        riskLevel: "extreme",
        label: "Extreme Risk",
        harveyClaim: "$2.7B",
        floodFrequency: "Repeated",
        description: "Catastrophically flooded during Harvey; reservoirs intentionally released",
        solutions: [
          "Reservoir expansion and modernization",
          "Voluntary buyouts of at-risk homes",
          "Upstream detention basins",
          "Green infrastructure corridors",
        ],
      },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [-95.680, 29.780], [-95.580, 29.780],
          [-95.580, 29.820], [-95.680, 29.820],
          [-95.680, 29.780],
        ]],
      },
    },
    {
      type: "Feature",
      id: "meyerland",
      properties: {
        name: "Meyerland",
        riskLevel: "high",
        label: "High Risk",
        harveyClaim: "$890M",
        floodFrequency: "Every major storm",
        description: "Flooded multiple times in 5 years; Brays Bayou overflow zone",
        solutions: [
          "Brays Bayou widening project",
          "Home elevation assistance",
          "Green stormwater infrastructure",
          "Buyout program for repeat-flood properties",
        ],
      },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [-95.498, 29.670], [-95.440, 29.670],
          [-95.440, 29.702], [-95.498, 29.702],
          [-95.498, 29.670],
        ]],
      },
    },
    {
      type: "Feature",
      id: "memorial-brays",
      properties: {
        name: "Memorial / Brays Bayou Corridor",
        riskLevel: "high",
        label: "High Risk",
        harveyClaim: "$1.1B",
        floodFrequency: "Frequent",
        description: "Low-lying areas along Brays Bayou prone to overflow flooding",
        solutions: [
          "Bayou channel expansion",
          "Riparian buffer restoration",
          "Floodplain acquisition",
        ],
      },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [-95.498, 29.742], [-95.425, 29.742],
          [-95.425, 29.762], [-95.498, 29.762],
          [-95.498, 29.742],
        ]],
      },
    },
    {
      type: "Feature",
      id: "greens-bayou",
      properties: {
        name: "Greens Bayou / NE Houston",
        riskLevel: "high",
        label: "High Risk",
        harveyClaim: "$650M",
        floodFrequency: "Regular",
        description: "Northeast corridor regularly inundated; lower-income area with fewer resources",
        solutions: [
          "Greens Bayou Greenway expansion",
          "Equity-focused flood mitigation funding",
          "Improved stormwater infrastructure",
        ],
      },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [-95.290, 29.830], [-95.180, 29.830],
          [-95.180, 29.900], [-95.290, 29.900],
          [-95.290, 29.830],
        ]],
      },
    },
    {
      type: "Feature",
      id: "east-houston",
      properties: {
        name: "East Houston / San Jacinto",
        riskLevel: "high",
        label: "High Risk",
        harveyClaim: "$780M",
        floodFrequency: "Regular",
        description: "San Jacinto River overflow and industrial area flooding",
        solutions: [
          "San Jacinto River Authority improvements",
          "Industrial stormwater compliance",
          "Community alert systems",
        ],
      },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [-95.200, 29.750], [-95.080, 29.750],
          [-95.080, 29.820], [-95.200, 29.820],
          [-95.200, 29.750],
        ]],
      },
    },
    {
      type: "Feature",
      id: "fifth-ward",
      properties: {
        name: "Fifth Ward / Buffalo Bayou",
        riskLevel: "medium",
        label: "Medium Risk",
        harveyClaim: "$420M",
        floodFrequency: "Occasional",
        description: "Historic Black neighborhood vulnerable to Buffalo Bayou flooding",
        solutions: [
          "Buffalo Bayou Park expansion eastward",
          "Green infrastructure investments",
          "Community resilience centers",
        ],
      },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [-95.360, 29.762], [-95.310, 29.762],
          [-95.310, 29.796], [-95.360, 29.796],
          [-95.360, 29.762],
        ]],
      },
    },
    {
      type: "Feature",
      id: "downtown-bayou",
      properties: {
        name: "Downtown / White Oak Bayou",
        riskLevel: "medium",
        label: "Medium Risk",
        harveyClaim: "$210M",
        floodFrequency: "Occasional",
        description: "Tunnel system helps but extreme events still cause flooding",
        solutions: [
          "Expand underground tunnel storage",
          "Green roof requirements for new buildings",
          "Enhanced Bayou Greenways program",
        ],
      },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [-95.388, 29.762], [-95.348, 29.762],
          [-95.348, 29.782], [-95.388, 29.782],
          [-95.388, 29.762],
        ]],
      },
    },
    {
      type: "Feature",
      id: "pearland-low",
      properties: {
        name: "Pearland (South Suburbs)",
        riskLevel: "low",
        label: "Lower Risk",
        floodFrequency: "Rare",
        description: "Newer development with improved drainage design, lower flood risk",
        solutions: [
          "Maintain green space requirements",
          "Monitor rapid development impacts",
        ],
      },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [-95.350, 29.538], [-95.230, 29.538],
          [-95.230, 29.608], [-95.350, 29.608],
          [-95.350, 29.538],
        ]],
      },
    },

    // ── Beltway 8 / Mid-City Flood Zones ────────────────────────────────────

    {
      type: "Feature",
      id: "aldine-hunting-bayou",
      properties: {
        name: "Aldine / Hunting Bayou",
        riskLevel: "high",
        label: "High Risk",
        floodFrequency: "Regular",
        description: "Hunting Bayou drains through densely populated Aldine; unincorporated status limits access to FEMA buyout programs and drainage investment",
        solutions: [
          "Hunting Bayou channel improvements",
          "Harris County buyout program expansion to unincorporated areas",
          "Green stormwater infrastructure on Greens Rd corridor",
          "Flood-alert notification system for Aldine ISD schools",
        ],
      },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [-95.440, 29.880], [-95.295, 29.880],
          [-95.295, 29.962], [-95.440, 29.962],
          [-95.440, 29.880],
        ]],
      },
    },
    {
      type: "Feature",
      id: "alief-brays-bayou",
      properties: {
        name: "Alief / Upper Brays Bayou",
        riskLevel: "high",
        label: "High Risk",
        floodFrequency: "Regular",
        description: "Upper Brays Bayou watershed; Alief flooded severely during Harvey and Tax Day 2016 floods — many homes outside official 100-year floodplain",
        solutions: [
          "Brays Bayou upper watershed detention",
          "Hwy 6 and Westheimer stormwater improvements",
          "Equity-focused buyout program (majority low-income households)",
          "Upstream green space acquisition",
        ],
      },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [-95.692, 29.688], [-95.502, 29.688],
          [-95.502, 29.748], [-95.692, 29.748],
          [-95.692, 29.688],
        ]],
      },
    },
    {
      type: "Feature",
      id: "sims-bayou-sunnyside",
      properties: {
        name: "Sims Bayou / Sunnyside Corridor",
        riskLevel: "high",
        label: "High Risk",
        floodFrequency: "Regular",
        description: "Sims Bayou runs east-west through south Houston; Sunnyside and South Park flooded repeatedly — historically underinvested in flood protection",
        solutions: [
          "Sims Bayou federal flood damage reduction project (USACE)",
          "South Houston stormwater detention ponds",
          "Restore bayou riparian buffers",
          "MLK Blvd and Airport Blvd drainage upgrades",
        ],
      },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [-95.436, 29.658], [-95.316, 29.658],
          [-95.316, 29.718], [-95.436, 29.718],
          [-95.436, 29.658],
        ]],
      },
    },
    {
      type: "Feature",
      id: "hobby-southeast",
      properties: {
        name: "Hobby Airport / Southeast Houston",
        riskLevel: "high",
        label: "High Risk",
        floodFrequency: "Regular",
        description: "Clear Creek and Sims Bayou tributaries; Hobby Airport flooded during Harvey — stranding travelers and disrupting emergency response",
        solutions: [
          "Clear Creek federal flood project expansion",
          "Telephone Rd elevated roadway drainage",
          "Hobby Airport resilience improvements",
          "Southeast Houston buyout and relocation program",
        ],
      },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [-95.330, 29.610], [-95.210, 29.610],
          [-95.210, 29.700], [-95.330, 29.700],
          [-95.330, 29.610],
        ]],
      },
    },
    {
      type: "Feature",
      id: "white-oak-spring-branch",
      properties: {
        name: "White Oak Bayou / Spring Branch",
        riskLevel: "medium",
        label: "Medium Risk",
        floodFrequency: "Occasional",
        description: "White Oak Bayou upper watershed through Spring Branch; flash flooding risk during intense rain events, exacerbated by dense impervious cover",
        solutions: [
          "White Oak Bayou channel improvements",
          "Long Point Rd stormwater detention",
          "Increase tree canopy to reduce runoff",
          "Spring Branch creek greenway development",
        ],
      },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [-95.502, 29.800], [-95.425, 29.800],
          [-95.425, 29.862], [-95.502, 29.862],
          [-95.502, 29.800],
        ]],
      },
    },
    {
      type: "Feature",
      id: "ship-channel-jacinto",
      properties: {
        name: "Ship Channel / Jacinto City",
        riskLevel: "high",
        label: "High Risk",
        floodFrequency: "Regular",
        description: "Industrial Ship Channel corridor and Hunting Bayou confluence; toxic flood risk compounded by proximity to refineries and chemical plants",
        solutions: [
          "Industrial stormwater compliance enforcement",
          "Levee improvements along Ship Channel",
          "Toxic flood risk disclosure requirements",
          "Community early-warning alert system",
        ],
      },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [-95.238, 29.728], [-95.203, 29.728],
          [-95.203, 29.790], [-95.238, 29.790],
          [-95.238, 29.728],
        ]],
      },
    },
  ],
};

// ─── Statistics ────────────────────────────────────────────────────────────

export const cityStats = {
  walkability: {
    cityAvgWalkScore: 47,          // Walk Score (walkscore.com/TX/Houston)
    nationalAvg: 49,
    percentWithSidewalks: 41,      // LINK Houston / Houston Public Works
    milesOfTrails: 186,            // Bayou Greenways 2020 program
    projectedMilesNeeded: 2300,
    annualPedestrianFatalities: 98, // 2023 federal data (3rd highest in US)
  },
  transit: {
    metroRailMiles: 22.7,          // METRO — full Red/Green/Purple system
    metroRailStations: 39,         // METRO ridemetro.org
    dailyRidership: 220000,
    busRoutes: 83,
    transitScore: 43,              // Walk Score Transit Score
    populationNearTransit: 38,
    proposedNewMiles: 73,
    proposedCost: "3.5B",
  },
  flooding: {
    harveyCost: "$125B",           // NOAA/NHC Tropical Cyclone Report AL092017
    homesFlooded: 136000,          // HCFCD Countywide Impacts report
    annualFloodEvents: 12,
    floodplainResidents: 800000,
    buyoutHomes: 4000,             // HCFCD Home Buyout Program (historical total)
    harrisBondProgram: "$2.5B",    // Harris County Prop A, Aug 25 2018
    imperviousSurfacePct: 33,      // USGS / ReduceFlooding.com (Harris County)
  },
};
