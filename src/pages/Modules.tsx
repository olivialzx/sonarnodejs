import React, { useState, useEffect } from "react";
import { Search, Filter, SlidersHorizontal } from "lucide-react";
import ModuleCard from "../components/ModuleCard";
import { Module } from "../types";
import { modules } from "../data/modules";

interface ModulesProps {
  onSelectModule: (moduleId: string) => void;
}

const Modules: React.FC<ModulesProps> = ({ onSelectModule }) => {
  const [filteredModules, setFilteredModules] = useState<Module[]>(modules);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLevel, setSelectedLevel] = useState<string>("All");

  const levels = ["All", "Beginner", "Intermediate", "Advanced"];

  useEffect(() => {
    // Filter modules based on search term and selected level
    let result = modules;

    if (searchTerm) {
      result = result.filter(
        (module) =>
          module.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          module.description.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    }

    if (selectedLevel !== "All") {
      result = result.filter((module) => module.level === selectedLevel);
    }

    setFilteredModules(result);
  }, [searchTerm, selectedLevel]);

  return (
    <div className="py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <h1 className="text-2xl font-semibold text-gray-900">
            Learning Modules
          </h1>

          <div className="mt-4 md:mt-0 flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
            {/* Search input */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </div>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-lg leading-5 bg-gray-50 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-colors duration-200"
                placeholder="Search modules..."
              />
            </div>

            {/* Filter dropdown */}
            <div className="relative">
              <div className="flex">
                <label htmlFor="level-filter" className="sr-only">
                  Filter by level
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Filter
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </div>
                  <select
                    id="level-filter"
                    value={selectedLevel}
                    onChange={(e) => setSelectedLevel(e.target.value)}
                    className="block w-full pl-10 pr-10 py-2 border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm appearance-none"
                  >
                    {levels.map((level) => (
                      <option key={level} value={level}>
                        {level === "All" ? "All Levels" : level}
                      </option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                    <SlidersHorizontal
                      className="h-4 w-4 text-gray-400"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Module grid */}
        <div className="mt-6">
          {filteredModules.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredModules.map((module) => (
                <ModuleCard
                  key={module.id}
                  module={module}
                  onSelect={onSelectModule}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="mt-2 text-sm font-medium text-gray-900">
                No modules found
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                Try adjusting your search or filter to find what you're looking
                for.
              </p>
              <div className="mt-6">
                <button
                  type="button"
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedLevel("All");
                  }}
                  className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Reset Filters
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modules;
