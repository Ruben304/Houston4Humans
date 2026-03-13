"use client";

import dynamic from "next/dynamic";

const HoustonMap = dynamic(() => import("@/components/HoustonMap"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center bg-gray-900">
      <div className="flex flex-col items-center gap-3 text-gray-500">
        <div className="w-8 h-8 border-2 border-sky-500 border-t-transparent rounded-full animate-spin" />
        <span className="text-sm">Loading map…</span>
      </div>
    </div>
  ),
});

export default function MapWrapper() {
  return <HoustonMap />;
}
