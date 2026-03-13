"use client";

import { useState, useCallback, useRef } from "react";
import Map, {
  Layer,
  Source,
  NavigationControl,
  Popup,
  MapMouseEvent,
} from "react-map-gl/mapbox";
import type { ExpressionSpecification } from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

// Convenience cast so Mapbox expression arrays satisfy the strict TS type
const expr = (e: unknown) => e as ExpressionSpecification;

import {
  walkabilityData,
  transitData,
  floodData,
  HOUSTON_CENTER,
} from "@/data/houston";
import MapControls from "./MapControls";

export type ActiveLayer = "walkability" | "transit" | "flooding";

interface PopupInfo {
  longitude: number;
  latitude: number;
  title: string;
  content: string;
  badge?: string;
  badgeColor?: string;
}

// Walk score → hex color
function walkScoreColor(score: number): string {
  if (score >= 80) return "#22c55e";
  if (score >= 65) return "#86efac";
  if (score >= 50) return "#fbbf24";
  if (score >= 35) return "#f97316";
  return "#ef4444";
}

// Flood risk → hex color
function floodRiskColor(risk: string): string {
  switch (risk) {
    case "extreme": return "#7c3aed";
    case "high": return "#dc2626";
    case "medium": return "#f59e0b";
    case "low": return "#22c55e";
    default: return "#6b7280";
  }
}

const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

export default function HoustonMap() {
  const [activeLayers, setActiveLayers] = useState<Set<ActiveLayer>>(
    new Set(["walkability"])
  );
  const [popup, setPopup] = useState<PopupInfo | null>(null);
  const mapRef = useRef(null);

  const toggleLayer = useCallback((layer: ActiveLayer) => {
    setActiveLayers((prev) => {
      const next = new Set(prev);
      if (next.has(layer)) next.delete(layer);
      else next.add(layer);
      return next;
    });
  }, []);

  const handleMapClick = useCallback((e: MapMouseEvent) => {
    const features = e.features;
    if (!features || features.length === 0) {
      setPopup(null);
      return;
    }

    const f = features[0];
    const props = f.properties as Record<string, string>;

    if (!props) return;

    let badge = "";
    let badgeColor = "";
    let content = props.description || "";

    if (props.walkScore) {
      badge = `Walk Score: ${props.walkScore}`;
      const score = parseInt(props.walkScore);
      badgeColor =
        score >= 80 ? "bg-green-500" :
        score >= 65 ? "bg-lime-500" :
        score >= 50 ? "bg-yellow-500" :
        score >= 35 ? "bg-orange-500" : "bg-red-500";
    } else if (props.riskLevel) {
      badge = props.label || props.riskLevel;
      badgeColor =
        props.riskLevel === "extreme" ? "bg-purple-600" :
        props.riskLevel === "high" ? "bg-red-600" :
        props.riskLevel === "medium" ? "bg-amber-500" : "bg-green-500";
    } else if (props.type) {
      badge = props.label || props.type;
      badgeColor = props.type.includes("existing") ? "bg-blue-600" : "bg-orange-500";
    }

    setPopup({
      longitude: e.lngLat.lng,
      latitude: e.lngLat.lat,
      title: props.name || "Feature",
      content,
      badge,
      badgeColor,
    });
  }, []);

  if (!MAPBOX_TOKEN) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center bg-gray-900 text-center px-8 gap-4">
        <div className="text-5xl">🗺️</div>
        <h3 className="text-white text-xl font-semibold">Mapbox Token Required</h3>
        <p className="text-gray-400 max-w-sm text-sm leading-relaxed">
          Add your Mapbox public token to <code className="text-sky-400 bg-gray-800 px-1.5 py-0.5 rounded">.env.local</code> to enable the interactive map.
        </p>
        <code className="text-xs bg-gray-800 text-green-400 px-4 py-2.5 rounded-lg font-mono">
          NEXT_PUBLIC_MAPBOX_TOKEN=pk.eyJ1...
        </code>
        <p className="text-gray-500 text-xs">
          Get a free token at{" "}
          <span className="text-sky-400">mapbox.com</span>
        </p>
      </div>
    );
  }

  // Build walkability fill-color expression
  const walkFillColor = [
    "case",
    [">=", ["get", "walkScore"], 80], "#22c55e",
    [">=", ["get", "walkScore"], 65], "#86efac",
    [">=", ["get", "walkScore"], 50], "#fbbf24",
    [">=", ["get", "walkScore"], 35], "#f97316",
    "#ef4444",
  ];

  // Build flood fill-color expression
  const floodFillColor = [
    "match",
    ["get", "riskLevel"],
    "extreme", "#7c3aed",
    "high", "#dc2626",
    "medium", "#f59e0b",
    "low", "#22c55e",
    "#6b7280",
  ];

  const transitLineColor = [
    "match",
    ["get", "type"],
    "existing-rail", "#3b82f6",
    "existing-brt", "#06b6d4",
    "proposed-rail", "#f97316",
    "proposed-brt", "#fbbf24",
    "#9ca3af",
  ];

  const transitLineDash = [
    "match",
    ["get", "type"],
    "proposed-rail", ["literal", [4, 3]],
    "proposed-brt", ["literal", [2, 2]],
    ["literal", [1]],
  ];

  const interactiveLayerIds = [
    activeLayers.has("walkability") ? "walkability-fill" : null,
    activeLayers.has("flooding") ? "flood-fill" : null,
    activeLayers.has("transit") ? "transit-line" : null,
  ].filter(Boolean) as string[];

  return (
    <div className="relative w-full h-full">
      <Map
        ref={mapRef}
        mapboxAccessToken={MAPBOX_TOKEN}
        initialViewState={{
          longitude: HOUSTON_CENTER[0],
          latitude: HOUSTON_CENTER[1],
          zoom: 9.8,
        }}
        style={{ width: "100%", height: "100%" }}
        mapStyle="mapbox://styles/mapbox/dark-v11"
        interactiveLayerIds={interactiveLayerIds}
        onClick={handleMapClick}
        cursor="pointer"
      >
        <NavigationControl position="bottom-right" />

        {/* ── Walkability Layer ── */}
        {activeLayers.has("walkability") && (
          <Source id="walkability" type="geojson" data={walkabilityData}>
            <Layer
              id="walkability-fill"
              type="fill"
              paint={{
                "fill-color": expr(walkFillColor),
                "fill-opacity": 0.45,
              }}
            />
            <Layer
              id="walkability-outline"
              type="line"
              paint={{
                "line-color": expr(walkFillColor),
                "line-width": 1.5,
                "line-opacity": 0.8,
              }}
            />
            <Layer
              id="walkability-label"
              type="symbol"
              layout={{
                "text-field": expr(["concat", ["get", "name"], "\n", ["to-string", ["get", "walkScore"]]]),
                "text-font": ["DIN Offc Pro Medium", "Arial Unicode MS Bold"],
                "text-size": 11,
                "text-anchor": "center",
                "text-allow-overlap": false,
              }}
              paint={{
                "text-color": "#ffffff",
                "text-halo-color": "#000000",
                "text-halo-width": 1.5,
              }}
            />
          </Source>
        )}

        {/* ── Transit Layer ── */}
        {activeLayers.has("transit") && (
          <Source id="transit" type="geojson" data={transitData}>
            <Layer
              id="transit-line-shadow"
              type="line"
              paint={{
                "line-color": "#000000",
                "line-width": 6,
                "line-opacity": 0.3,
              }}
              layout={{ "line-cap": "round", "line-join": "round" }}
            />
            <Layer
              id="transit-line"
              type="line"
              paint={{
                "line-color": expr(transitLineColor),
                "line-width": expr([
                  "match",
                  ["get", "type"],
                  "existing-rail", 4,
                  "existing-brt", 3,
                  "proposed-rail", 3,
                  "proposed-brt", 2.5,
                  2,
                ]),
                "line-dasharray": expr(transitLineDash),
                "line-opacity": 0.95,
              }}
              layout={{ "line-cap": "round", "line-join": "round" }}
            />
            <Layer
              id="transit-label"
              type="symbol"
              layout={{
                "text-field": expr(["get", "name"]),
                "symbol-placement": "line",
                "text-size": 10,
                "text-font": ["DIN Offc Pro Medium", "Arial Unicode MS Bold"],
                "text-offset": [0, -1],
                "text-allow-overlap": false,
              }}
              paint={{
                "text-color": "#ffffff",
                "text-halo-color": "#000000",
                "text-halo-width": 2,
              }}
            />
          </Source>
        )}

        {/* ── Flood Layer ── */}
        {activeLayers.has("flooding") && (
          <Source id="flooding" type="geojson" data={floodData}>
            <Layer
              id="flood-fill"
              type="fill"
              paint={{
                "fill-color": expr(floodFillColor),
                "fill-opacity": 0.4,
              }}
            />
            <Layer
              id="flood-outline"
              type="line"
              paint={{
                "line-color": expr(floodFillColor),
                "line-width": 2,
                "line-opacity": 0.9,
              }}
            />
            <Layer
              id="flood-label"
              type="symbol"
              layout={{
                "text-field": expr(["get", "name"]),
                "text-font": ["DIN Offc Pro Medium", "Arial Unicode MS Bold"],
                "text-size": 10,
                "text-anchor": "center",
                "text-allow-overlap": false,
              }}
              paint={{
                "text-color": "#ffffff",
                "text-halo-color": "#000000",
                "text-halo-width": 1.5,
              }}
            />
          </Source>
        )}

        {/* ── Popup ── */}
        {popup && (
          <Popup
            longitude={popup.longitude}
            latitude={popup.latitude}
            onClose={() => setPopup(null)}
            closeButton={true}
            closeOnClick={false}
            maxWidth="280px"
            className="houston-popup"
          >
            <div className="bg-gray-900 text-white rounded-lg p-3 min-w-[200px]">
              {popup.badge && (
                <span
                  className={`inline-block text-xs font-semibold px-2 py-0.5 rounded-full mb-2 text-white ${popup.badgeColor}`}
                >
                  {popup.badge}
                </span>
              )}
              <p className="font-semibold text-sm mb-1">{popup.title}</p>
              {popup.content && (
                <p className="text-gray-300 text-xs leading-relaxed">
                  {popup.content}
                </p>
              )}
            </div>
          </Popup>
        )}
      </Map>

      {/* Controls overlay */}
      <MapControls activeLayers={activeLayers} onToggle={toggleLayer} />
    </div>
  );
}
