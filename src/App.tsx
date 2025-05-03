import React, { useState } from "react";
import Navigation from "./components/Navigation";
import DashboardHeader from "./components/DashboardHeader";
import Dashboard from "./pages/Dashboard";
import Modules from "./pages/Modules";
import Resources from "./pages/Resources";
import ModuleDetail from "./pages/ModuleDetail";

function App() {
  const [currentPage, setCurrentPage] = useState("dashboard");
  const [selectedModuleId, setSelectedModuleId] = useState<string | null>(null);

  // Handle module selection
  const handleModuleSelect = (moduleId: string) => {
    setSelectedModuleId(moduleId);
  };

  // Handle back navigation from module detail
  const handleBackFromModule = () => {
    setSelectedModuleId(null);
  };

  // Render the appropriate page based on the selected page
  const renderPage = () => {
    // If a module is selected, show the module detail page
    if (selectedModuleId) {
      return (
        <ModuleDetail
          moduleId={selectedModuleId}
          onBack={handleBackFromModule}
        />
      );
    }

    // Otherwise, show the selected main page
    switch (currentPage) {
      case "dashboard":
        return <Dashboard onSelectModule={handleModuleSelect} />;
      case "modules":
        return <Modules onSelectModule={handleModuleSelect} />;
      case "resources":
        return <Resources />;
      case "community":
        return (
          <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h1 className="text-2xl font-semibold text-gray-900">
                Community
              </h1>
              <div className="mt-6 bg-white rounded-xl shadow-sm p-6 text-center">
                <p className="text-gray-500">
                  Community page is under development.
                </p>
              </div>
            </div>
          </div>
        );
      case "certificates":
        return (
          <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h1 className="text-2xl font-semibold text-gray-900">
                Certificates
              </h1>
              <div className="mt-6 bg-white rounded-xl shadow-sm p-6 text-center">
                <p className="text-gray-500">
                  Certificates page is under development.
                </p>
              </div>
            </div>
          </div>
        );
      case "profile":
        return (
          <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h1 className="text-2xl font-semibold text-gray-900">
                User Profile
              </h1>
              <div className="mt-6 bg-white rounded-xl shadow-sm p-6 text-center">
                <p className="text-gray-500">
                  Profile page is under development.
                </p>
              </div>
            </div>
          </div>
        );
      default:
        return <Dashboard onSelectModule={handleModuleSelect} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />

      {/* Main content */}
      <div className="lg:pl-64">
        <DashboardHeader />
        <main className="pb-10">{renderPage()}</main>
      </div>
    </div>
  );
}

export default App;
