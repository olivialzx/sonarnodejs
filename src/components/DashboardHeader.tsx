import React from "react";
import { Bell, Search } from "lucide-react";
import { user } from "../data/user";

const DashboardHeader: React.FC = () => {
  return (
    <header className="bg-white shadow-sm lg:pl-64">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex flex-1">
            <div className="flex-1 flex items-center lg:ml-6">
              <div className="max-w-lg w-full">
                <label htmlFor="search" className="sr-only">
                  Search
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </div>
                  <input
                    id="search"
                    name="search"
                    className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-lg leading-5 bg-gray-50 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-colors duration-200"
                    placeholder="Search for modules, resources..."
                    type="search"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <button
              type="button"
              className="p-1 ml-3 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <span className="sr-only">View notifications</span>
              <Bell className="h-6 w-6" aria-hidden="true" />
            </button>

            {/* Profile dropdown */}
            <div className="ml-3 relative flex-shrink-0">
              <div>
                <div className="flex items-center">
                  <div className="hidden lg:flex lg:flex-col lg:items-end lg:mr-4">
                    <span className="text-sm font-medium text-gray-900">
                      {user.name}
                    </span>
                    <span className="text-xs text-gray-500">{user.email}</span>
                  </div>
                  <img
                    className="h-8 w-8 rounded-full object-cover"
                    src={user.profilePicture}
                    alt="User"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
