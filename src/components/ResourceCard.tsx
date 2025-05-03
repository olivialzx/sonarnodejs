import React from "react";
import { FileText, Video, Book, PenTool as Tool } from "lucide-react";
import { Resource } from "../types";

interface ResourceCardProps {
  resource: Resource;
}

const ResourceCard: React.FC<ResourceCardProps> = ({ resource }) => {
  // Get the appropriate icon based on the resource type
  const getResourceIcon = (type: string) => {
    switch (type) {
      case "Article":
        return <FileText className="h-5 w-5 text-gray-400" />;
      case "Video":
        return <Video className="h-5 w-5 text-gray-400" />;
      case "Documentation":
        return <Book className="h-5 w-5 text-gray-400" />;
      case "Tool":
        return <Tool className="h-5 w-5 text-gray-400" />;
      default:
        return <FileText className="h-5 w-5 text-gray-400" />;
    }
  };

  return (
    <a
      href={resource.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-md hover:border-blue-200"
    >
      <div className="px-6 py-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            {getResourceIcon(resource.type)}
            <span className="text-xs font-medium text-gray-500">
              {resource.type}
            </span>
          </div>
        </div>
        <h3 className="mt-3 text-lg font-semibold text-gray-900">
          {resource.title}
        </h3>
        <p className="mt-2 text-sm text-gray-600 line-clamp-2">
          {resource.description}
        </p>
        <div className="mt-4 text-sm font-medium text-blue-600">
          View resource →
        </div>
      </div>
    </a>
  );
};

export default ResourceCard;
