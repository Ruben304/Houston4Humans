"use client";

import { Footprints, Train, Waves, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import type { ActiveLayer } from "./HoustonMap";

interface Props {
  activeLayers: Set<ActiveLayer>;
  onToggle: (layer: ActiveLayer) => void;
}

const layers: {
  id: ActiveLayer;
  label: string;
  icon: React.ReactNode;
  description: string;
  legendItems: { color: string; label: string }[];
}[] = [
  {
    id: "walkability",
    label: "Walkability",
    icon: <Footprints size={16} />,
    description: "Neighborhood walk scores (0–100)",
    legendItems: [
      { color: "#22c55e", label: "80–100 Walker's Paradise" },
      { color: "#86efac", label: "65–79 Very Walkable" },
      { color: "#fbbf24", label: "50–64 Somewhat Walkable" },
      { color: "#f97316", label: "35–49 Car-Dependent" },
      { color: "#ef4444", label: "0–34 Almost No Walkability" },
    ],
  },
  {
    id: "transit",
    label: "Transit",
    icon: <Train size={16} />,
    description: "Existing & proposed rail/BRT",
    legendItems: [
      { color: "#3b82f6", label: "Existing Rail" },
      { color: "#06b6d4", label: "Existing BRT" },
      { color: "#f97316", label: "Proposed Rail" },
      { color: "#fbbf24", label: "Proposed BRT" },
    ],
  },
  {
    id: "flooding",
    label: "Flood Risk",
    icon: <Waves size={16} />,
    description: "Flood probability zones",
    legendItems: [
      { color: "#7c3aed", label: "Extreme Risk" },
      { color: "#dc2626", label: "High Risk" },
      { color: "#f59e0b", label: "Medium Risk" },
      { color: "#22c55e", label: "Lower Risk" },
    ],
  },
];

export default function MapControls({ activeLayers, onToggle }: Props) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="absolute top-4 left-4 z-10 w-64">
      <div className="bg-gray-950/90 backdrop-blur-md border border-white/10 rounded-xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div
          className="flex items-center justify-between px-4 py-3 cursor-pointer border-b border-white/10"
          onClick={() => setCollapsed((c) => !c)}
        >
          <span className="text-white text-sm font-semibold">Map Layers</span>
          {collapsed ? (
            <ChevronDown size={16} className="text-gray-400" />
          ) : (
            <ChevronUp size={16} className="text-gray-400" />
          )}
        </div>

        {!collapsed && (
          <div className="p-3 flex flex-col gap-2">
            {layers.map((layer) => {
              const isActive = activeLayers.has(layer.id);
              return (
                <div key={layer.id} className="flex flex-col gap-1.5">
                  {/* Toggle button */}
                  <button
                    onClick={() => onToggle(layer.id)}
                    className={`flex items-center gap-2.5 w-full px-3 py-2 rounded-lg text-sm transition-all ${
                      isActive
                        ? "bg-white/10 text-white border border-white/20"
                        : "bg-transparent text-gray-400 border border-white/5 hover:bg-white/5"
                    }`}
                  >
                    {/* Checkbox */}
                    <span
                      className={`w-4 h-4 rounded border-2 flex items-center justify-center flex-shrink-0 transition-colors ${
                        isActive
                          ? "bg-sky-500 border-sky-500"
                          : "border-gray-600 bg-transparent"
                      }`}
                    >
                      {isActive && (
                        <svg
                          width="8"
                          height="6"
                          viewBox="0 0 8 6"
                          fill="none"
                        >
                          <path
                            d="M1 3l2 2 4-4"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      )}
                    </span>
                    <span className="flex items-center gap-1.5">
                      {layer.icon}
                      {layer.label}
                    </span>
                  </button>

                  {/* Legend */}
                  {isActive && (
                    <div className="pl-3 flex flex-col gap-1">
                      {layer.legendItems.map((item) => (
                        <div
                          key={item.label}
                          className="flex items-center gap-2"
                        >
                          <span
                            className="w-3 h-3 rounded-sm flex-shrink-0"
                            style={{ backgroundColor: item.color, opacity: 0.85 }}
                          />
                          <span className="text-[10px] text-gray-400 leading-tight">
                            {item.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* Tip */}
        <div className="px-4 py-2 border-t border-white/5">
          <p className="text-[10px] text-gray-500">Click map features for details</p>
        </div>
      </div>
    </div>
  );
}
