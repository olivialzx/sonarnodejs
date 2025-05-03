import React, { useState } from "react";
import {
  Menu,
  X,
  Home,
  BookOpen,
  Award,
  User,
  FileText,
  MessageSquare,
} from "lucide-react";
import { user } from "../data/user";

interface NavigationProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({
  currentPage,
  setCurrentPage,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: "Dashboard", icon: Home, page: "dashboard" },
    { name: "Modules", icon: BookOpen, page: "modules" },
    { name: "Resources", icon: FileText, page: "resources" },
    { name: "Community", icon: MessageSquare, page: "community" },
    { name: "Certificates", icon: Award, page: "certificates" },
    { name: "Profile", icon: User, page: "profile" },
  ];

  return (
    <>
      {/* Mobile menu button */}
      <div className="lg:hidden absolute top-4 right-4 z-50">
        <button
          type="button"
          className="p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Desktop sidebar */}
      <div className="hidden lg:flex lg:flex-col lg:w-64 lg:fixed lg:inset-y-0 lg:border-r lg:border-gray-200 lg:bg-white">
        <div className="flex flex-col flex-grow pt-5 pb-4 overflow-y-auto">
          <div className="flex items-center flex-shrink-0 px-4 space-x-2">
            <div className="bg-gradient-to-r from-blue-600 to-cyan-500 p-2 rounded-lg">
              <BookOpen className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-xl font-bold text-gray-900">DevOps Academy</h1>
          </div>
          <nav className="mt-8 flex-1 px-2 space-y-1">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => setCurrentPage(item.page)}
                className={`group flex items-center px-4 py-3 text-sm font-medium rounded-md w-full transition-all duration-150 ${
                  currentPage === item.page
                    ? "bg-gradient-to-r from-blue-50 to-cyan-50 text-blue-700"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                <item.icon
                  className={`mr-3 h-5 w-5 transition-colors ${
                    currentPage === item.page
                      ? "text-blue-500"
                      : "text-gray-400 group-hover:text-gray-500"
                  }`}
                />
                {item.name}
                {currentPage === item.page && (
                  <div className="ml-auto w-1 h-6 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full" />
                )}
              </button>
            ))}
          </nav>
        </div>
        <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
          <div className="flex-shrink-0 group block">
            <div className="flex items-center">
              <div>
                <img
                  className="inline-block h-9 w-9 rounded-full object-cover"
                  src={user.profilePicture}
                  alt="Profile"
                />
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                  {user.name}
                </p>
                <p className="text-xs font-medium text-gray-500 group-hover:text-gray-700">
                  {user.level}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 flex z-40">
          <div
            className="fixed inset-0 bg-gray-600 bg-opacity-75"
            onClick={() => setIsOpen(false)}
          ></div>
          <div className="relative flex-1 flex flex-col max-w-xs w-full bg-white">
            <div className="absolute top-0 right-0 -mr-12 pt-2">
              <button
                type="button"
                className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                onClick={() => setIsOpen(false)}
              >
                <X className="h-6 w-6 text-white" />
              </button>
            </div>
            <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
              <div className="flex-shrink-0 flex items-center px-4 space-x-2">
                <div className="bg-gradient-to-r from-blue-600 to-cyan-500 p-2 rounded-lg">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                <h1 className="text-xl font-bold text-gray-900">
                  DevOps Academy
                </h1>
              </div>
              <nav className="mt-5 px-2 space-y-1">
                {navigation.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => {
                      setCurrentPage(item.page);
                      setIsOpen(false);
                    }}
                    className={`group flex items-center px-4 py-3 text-base font-medium rounded-md w-full ${
                      currentPage === item.page
                        ? "bg-gradient-to-r from-blue-50 to-cyan-50 text-blue-700"
                        : "text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    <item.icon
                      className={`mr-4 h-6 w-6 ${
                        currentPage === item.page
                          ? "text-blue-500"
                          : "text-gray-400 group-hover:text-gray-500"
                      }`}
                    />
                    {item.name}
                  </button>
                ))}
              </nav>
            </div>
            <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
              <div className="flex-shrink-0 group block">
                <div className="flex items-center">
                  <div>
                    <img
                      className="inline-block h-10 w-10 rounded-full object-cover"
                      src={user.profilePicture}
                      alt="Profile"
                    />
                  </div>
                  <div className="ml-3">
                    <p className="text-base font-medium text-gray-700 group-hover:text-gray-900">
                      {user.name}
                    </p>
                    <p className="text-sm font-medium text-gray-500 group-hover:text-gray-700">
                      {user.level}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
