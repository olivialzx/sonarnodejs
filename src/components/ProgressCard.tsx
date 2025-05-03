import React from "react";
import { TrendingUp } from "lucide-react";
import { user } from "../data/user";

const ProgressCard: React.FC = () => {
  const { progress } = user;
  const modulePercentage = Math.round(
    (progress.completedModules / progress.totalModules) * 100,
  );
  const lessonPercentage = Math.round(
    (progress.completedLessons / progress.totalLessons) * 100,
  );

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-md">
      <div className="px-6 py-5">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">Your Progress</h3>
          <TrendingUp className="h-5 w-5 text-blue-500" />
        </div>
        <div className="mt-4 space-y-4">
          <div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-500">
                Modules Completed
              </span>
              <span className="text-sm font-semibold text-gray-900">
                {progress.completedModules}/{progress.totalModules}
              </span>
            </div>
            <div className="mt-2 w-full bg-gray-100 rounded-full h-2.5">
              <div
                className="bg-gradient-to-r from-blue-500 to-cyan-400 h-2.5 rounded-full"
                style={{ width: `${modulePercentage}%` }}
              ></div>
            </div>
            <div className="mt-1 text-xs font-medium text-blue-500">
              {modulePercentage}% Complete
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-500">
                Lessons Completed
              </span>
              <span className="text-sm font-semibold text-gray-900">
                {progress.completedLessons}/{progress.totalLessons}
              </span>
            </div>
            <div className="mt-2 w-full bg-gray-100 rounded-full h-2.5">
              <div
                className="bg-gradient-to-r from-blue-500 to-cyan-400 h-2.5 rounded-full"
                style={{ width: `${lessonPercentage}%` }}
              ></div>
            </div>
            <div className="mt-1 text-xs font-medium text-blue-500">
              {lessonPercentage}% Complete
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressCard;
