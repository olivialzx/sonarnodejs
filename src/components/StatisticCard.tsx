import React from "react";

interface StatisticCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  change?: {
    value: string;
    type: "increase" | "decrease";
  };
}

const StatisticCard: React.FC<StatisticCardProps> = ({
  title,
  value,
  icon,
  change,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-md">
      <div className="px-6 py-5">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-500">{title}</p>
            <p className="mt-1 text-2xl font-semibold text-gray-900">{value}</p>

            {change && (
              <div className="mt-1 flex items-center">
                <span
                  className={`text-xs font-medium ${
                    change.type === "increase"
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {change.type === "increase" ? "↑" : "↓"} {change.value}
                </span>
                <span className="text-xs text-gray-500 ml-1">
                  from last week
                </span>
              </div>
            )}
          </div>
          <div className="p-3 bg-blue-50 rounded-lg">{icon}</div>
        </div>
      </div>
    </div>
  );
};

export default StatisticCard;
