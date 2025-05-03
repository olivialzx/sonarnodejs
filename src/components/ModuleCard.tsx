import React from "react";
import { ArrowRight, Clock, BarChart } from "lucide-react";
import * as LucideIcons from "lucide-react";
import { Module } from "../types";

interface ModuleCardProps {
  module: Module;
  onSelect: (moduleId: string) => void;
}

const ModuleCard: React.FC<ModuleCardProps> = ({ module, onSelect }) => {
  // Dynamically get the icon component from the module's icon property
  const IconComponent =
    (LucideIcons as Record<string, React.FC<{ className?: string }>>)[
      module.icon
    ] || LucideIcons.FileText;

  // Determine background gradient based on level
  const getBgGradient = (level: string) => {
    switch (level) {
      case "Beginner":
        return "from-green-500 to-emerald-400";
      case "Intermediate":
        return "from-blue-500 to-cyan-400";
      case "Advanced":
        return "from-purple-500 to-indigo-400";
      default:
        return "from-gray-500 to-gray-400";
    }
  };

  return (
    <div
      className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-md hover:translate-y-[-4px] cursor-pointer"
      onClick={() => onSelect(module.id)}
    >
      <div className="px-6 py-5">
        <div className="flex justify-between items-start">
          <div
            className={`p-3 rounded-lg bg-gradient-to-br ${getBgGradient(module.level)}`}
          >
            <IconComponent className="h-6 w-6 text-white" />
          </div>
          <span
            className={`text-xs font-semibold px-2.5 py-1 rounded ${
              module.level === "Beginner"
                ? "bg-green-100 text-green-800"
                : module.level === "Intermediate"
                  ? "bg-blue-100 text-blue-800"
                  : "bg-purple-100 text-purple-800"
            }`}
          >
            {module.level}
          </span>
        </div>

        <h3 className="mt-4 text-lg font-semibold text-gray-900 line-clamp-2">
          {module.title}
        </h3>
        <p className="mt-2 text-sm text-gray-600 line-clamp-3">
          {module.description}
        </p>

        <div className="mt-4 flex items-center text-sm text-gray-500">
          <Clock className="mr-1.5 h-4 w-4 text-gray-400" />
          <span>{module.duration}</span>

          <div className="ml-auto flex items-center space-x-1">
            <BarChart className="h-4 w-4 text-gray-400" />
            <span>{module.completionPercentage}%</span>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
          <span className="text-sm font-medium text-blue-600">
            {module.completionPercentage === 0
              ? "Start Module"
              : module.completionPercentage === 100
                ? "Review"
                : "Continue"}
          </span>
          <ArrowRight className="h-4 w-4 text-blue-600" />
        </div>
      </div>
    </div>
  );
};

export default ModuleCard;
