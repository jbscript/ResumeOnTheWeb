import { Button } from "@/components/ui/button";
import React, { useState } from "react";

export default function ProjectGrid({ title = "My Projects", projects = [] }) {
  const [activeTab, setActiveTab] = useState("all");

  const filteredProjects =
    activeTab === "all"
      ? projects
      : projects.filter((project) => project.status === activeTab);

  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
        <div className="flex items-center gap-2">
          {["all", "active", "acquired"].map((tab) => (
            <Button
              key={tab}
              variant={activeTab === tab ? "default" : "outline"}
              className={`text-sm ${
                activeTab === tab
                  ? "bg-gradient-to-r from-pink-500 to-orange-500 text-white"
                  : "bg-white"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </Button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </>
  );
}

function ProjectCard({ project }) {
  return (
    <div
      className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-all duration-300
          hover:translate-y-[-2px] border border-transparent hover:border-blue-200"
    >
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div
            className={`bg-gradient-to-br ${project.color} p-3 rounded-lg text-white`}
          >
            <span
              role="img"
              aria-label={project.emojiLabel}
              className="text-xl"
            >
              {project.emoji}
            </span>
          </div>
          <h3 className="font-semibold text-lg">{project.name}</h3>
        </div>
        {project.statusTag && (
          <span
            className={`bg-${project.statusTag.bgColor} text-${project.statusTag.textColor} text-xs px-2 py-1 rounded-full font-medium`}
          >
            {project.statusTag.label}
          </span>
        )}
      </div>
      <p className="text-gray-600 mt-2">{project.description}</p>
      <div className="flex items-center gap-2 mt-4">
        {project.tags.map((tag, index) => (
          <span
            key={index}
            className={`inline-block px-2 py-1 ${tag.bgColor} ${tag.textColor} text-xs rounded-full`}
          >
            {tag.label}
          </span>
        ))}
      </div>
    </div>
  );
}
