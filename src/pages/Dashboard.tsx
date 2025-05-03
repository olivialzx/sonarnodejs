import React from "react";
import { Clock, BookOpen, Award, Users } from "lucide-react";
import StatisticCard from "../components/StatisticCard";
import ProgressCard from "../components/ProgressCard";
import UpcomingEventCard from "../components/UpcomingEventCard";
import ModuleCard from "../components/ModuleCard";
import { modules } from "../data/modules";

interface DashboardProps {
  onSelectModule: (moduleId: string) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onSelectModule }) => {
  // Filter modules for recommended and in progress
  const recommendedModules = modules.slice(0, 3);
  const inProgressModules = modules
    .filter(
      (module) =>
        module.completionPercentage > 0 && module.completionPercentage < 100,
    )
    .slice(0, 2);

  return (
    <div className="py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>

        {/* Statistics Row */}
        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <StatisticCard
            title="Study Time"
            value="24h"
            icon={<Clock className="h-6 w-6 text-blue-500" />}
            change={{ value: "2h", type: "increase" }}
          />
          <StatisticCard
            title="Modules Completed"
            value="3/8"
            icon={<BookOpen className="h-6 w-6 text-green-500" />}
            change={{ value: "1", type: "increase" }}
          />
          <StatisticCard
            title="Certificates Earned"
            value="1"
            icon={<Award className="h-6 w-6 text-yellow-500" />}
          />
          <StatisticCard
            title="Community Members"
            value="2,542"
            icon={<Users className="h-6 w-6 text-purple-500" />}
            change={{ value: "12%", type: "increase" }}
          />
        </div>

        {/* Main Content */}
        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            {/* Continue Learning Section */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-medium text-gray-900">
                  Continue Learning
                </h2>
                <button className="text-sm font-medium text-blue-600 hover:text-blue-500">
                  View All
                </button>
              </div>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                {inProgressModules.length > 0
                  ? inProgressModules.map((module) => (
                      <ModuleCard
                        key={module.id}
                        module={module}
                        onSelect={onSelectModule}
                      />
                    ))
                  : recommendedModules
                      .slice(0, 2)
                      .map((module) => (
                        <ModuleCard
                          key={module.id}
                          module={module}
                          onSelect={onSelectModule}
                        />
                      ))}
              </div>
            </div>

            {/* Recommended Modules Section */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-medium text-gray-900">
                  Recommended For You
                </h2>
                <button className="text-sm font-medium text-blue-600 hover:text-blue-500">
                  View All
                </button>
              </div>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                {recommendedModules.map((module) => (
                  <ModuleCard
                    key={module.id}
                    module={module}
                    onSelect={onSelectModule}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            <ProgressCard />
            <UpcomingEventCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
