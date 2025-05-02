import React from "react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
const tabs = [
  { id: "projects", label: "Projects", icon: "⛑" },
  { id: "certificates", label: "Certificates", icon: "🔖" },
  { id: "techstack", label: "Tech Stack", icon: "⚙️" },
];

export default function Tabs({ activeTab, setActiveTab }) {
  return (
    <>
      <div className="relative flex justify-center gap-8 border-gray-500 border rounded-xl max-w-2xl mx-auto py-5 mb-6">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-4 rounded-lg text-sm font-semibold transition-all duration-300 ${
              activeTab === tab.id
                ? "bg-violet-600 text-white"
                : "bg-gray-700 text-gray-300 hover:bg-gray-600"
            }`}
          >
            {tab.icon} <span>{tab.label}</span>
          </button>
        ))}
      </div>
    </>
  );
}
