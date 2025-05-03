import React from "react";
import { Calendar } from "lucide-react";

interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  type: "Webinar" | "Workshop" | "Live Q&A";
}

const events: Event[] = [
  {
    id: "1",
    title: "Introduction to CI/CD Pipelines",
    date: "October 15, 2025",
    time: "2:00 PM - 3:30 PM",
    type: "Webinar",
  },
  {
    id: "2",
    title: "Docker & Kubernetes Workshop",
    date: "October 22, 2025",
    time: "1:00 PM - 4:00 PM",
    type: "Workshop",
  },
  {
    id: "3",
    title: "DevOps Best Practices Q&A",
    date: "October 29, 2025",
    time: "11:00 AM - 12:00 PM",
    type: "Live Q&A",
  },
];

const UpcomingEventCard: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-md">
      <div className="px-6 py-5">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">
            Upcoming Events
          </h3>
          <Calendar className="h-5 w-5 text-blue-500" />
        </div>
        <div className="mt-4 space-y-4">
          {events.map((event) => (
            <div
              key={event.id}
              className="p-3 rounded-lg border border-gray-100 hover:border-blue-200 transition-colors"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="text-sm font-medium text-gray-900">
                    {event.title}
                  </h4>
                  <p className="mt-1 text-xs text-gray-500">
                    {event.date} · {event.time}
                  </p>
                </div>
                <span
                  className={`text-xs font-semibold px-2 py-1 rounded ${
                    event.type === "Webinar"
                      ? "bg-blue-100 text-blue-800"
                      : event.type === "Workshop"
                        ? "bg-purple-100 text-purple-800"
                        : "bg-green-100 text-green-800"
                  }`}
                >
                  {event.type}
                </span>
              </div>
            </div>
          ))}
        </div>
        <button className="mt-4 w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
          View All Events
        </button>
      </div>
    </div>
  );
};

export default UpcomingEventCard;
