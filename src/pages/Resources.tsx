import React, { useState, useEffect } from "react";
import { Search, Filter, SlidersHorizontal } from "lucide-react";
import ResourceCard from "../components/ResourceCard";
import { Resource } from "../types";
import { resources } from "../data/resources";

const ResourcesPage: React.FC = () => {
  const [filteredResources, setFilteredResources] =
    useState<Resource[]>(resources);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState<string>("All");

  const types = ["All", "Article", "Video", "Documentation", "Tool"];

  useEffect(() => {
    // Filter resources based on search term and selected type
    let result = resources;

    if (searchTerm) {
      result = result.filter(
        (resource) =>
          resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          resource.description.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    }

    if (selectedType !== "All") {
      result = result.filter((resource) => resource.type === selectedType);
    }

    setFilteredResources(result);
  }, [searchTerm, selectedType]);

  return (
    <div className="py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <h1 className="text-2xl font-semibold text-gray-900">
            Learning Resources
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
                placeholder="Search resources..."
              />
            </div>

            {/* Filter dropdown */}
            <div className="relative">
              <div className="flex">
                <label htmlFor="type-filter" className="sr-only">
                  Filter by type
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Filter
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </div>
                  <select
                    id="type-filter"
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="block w-full pl-10 pr-10 py-2 border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm appearance-none"
                  >
                    {types.map((type) => (
                      <option key={type} value={type}>
                        {type === "All" ? "All Types" : type}
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

        {/* Resource categories */}
        <div className="mt-6 pb-5 border-b border-gray-200">
          <nav className="-mb-px flex space-x-6">
            {types.map((type) => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`whitespace-nowrap pb-3 px-1 border-b-2 font-medium text-sm ${
                  selectedType === type
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                {type === "All" ? "All Resources" : `${type}s`}
              </button>
            ))}
          </nav>
        </div>

        {/* Resource grid */}
        <div className="mt-6">
          {filteredResources.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredResources.map((resource) => (
                <ResourceCard key={resource.id} resource={resource} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="mt-2 text-sm font-medium text-gray-900">
                No resources found
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
                    setSelectedType("All");
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

export default ResourcesPage;
