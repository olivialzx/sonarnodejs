import React, { useState } from "react";
import { Clock, BarChart, CheckCircle, ArrowLeft, Lock } from "lucide-react";
import * as LucideIcons from "lucide-react";
import { Module } from "../types";
import { modules } from "../data/modules";

interface ModuleDetailProps {
  moduleId: string;
  onBack: () => void;
}

// Mock lessons for the selected module
const generateLessons = (moduleId: string) => {
  const lessons = [];
  const lessonCount = Math.floor(Math.random() * 3) + 3; // 3-5 lessons per module

  for (let i = 1; i <= lessonCount; i++) {
    lessons.push({
      id: `${moduleId}-${i}`,
      title: `Lesson ${i}: ${i === 1 ? "Introduction" : `Advanced Concept ${i - 1}`}`,
      duration: `${Math.floor(Math.random() * 30) + 15} min`,
      completed: i === 1, // First lesson is completed
      locked: i > 2, // Lessons after the second are locked
    });
  }

  return lessons;
};

const ModuleDetail: React.FC<ModuleDetailProps> = ({ moduleId, onBack }) => {
  const [activeTab, setActiveTab] = useState<
    "content" | "resources" | "discussion"
  >("content");

  // Find the selected module
  const module = modules.find((m) => m.id === moduleId) as Module;

  if (!module) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-gray-900">
            Module not found
          </h2>
          <button
            onClick={onBack}
            className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Modules
          </button>
        </div>
      </div>
    );
  }

  // Get icon component
  const IconComponent =
    (LucideIcons as Record<string, React.FC<{ className?: string }>>)[
      module.icon
    ] || LucideIcons.FileText;

  // Get lessons for this module
  const lessons = generateLessons(module.id);

  // Determine background gradient based on level
  const getBgGradient = (level: string) => {
    switch (level) {
      case "Beginner":
        return "from-green-500 to-emerald-400";
      case "Intermediate":
        return "from-blue-500 to-cyan-400";
      case "Advanced":
        return "from-purple-500 to-indigo-400";
      default:
        return "from-gray-500 to-gray-400";
    }
  };

  return (
    <div className="py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back button */}
        <button
          onClick={onBack}
          className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700"
        >
          <ArrowLeft className="mr-1 h-4 w-4" /> Back to Modules
        </button>

        {/* Module header */}
        <div className="mt-4 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-start">
              <div
                className={`p-4 rounded-lg bg-gradient-to-br ${getBgGradient(module.level)} mb-4 sm:mb-0 sm:mr-6`}
              >
                <IconComponent className="h-8 w-8 text-white" />
              </div>

              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span
                    className={`text-xs font-semibold px-2.5 py-1 rounded ${
                      module.level === "Beginner"
                        ? "bg-green-100 text-green-800"
                        : module.level === "Intermediate"
                          ? "bg-blue-100 text-blue-800"
                          : "bg-purple-100 text-purple-800"
                    }`}
                  >
                    {module.level}
                  </span>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="mr-1.5 h-4 w-4 text-gray-400" />
                    <span>{module.duration}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <BarChart className="mr-1.5 h-4 w-4 text-gray-400" />
                    <span>{module.completionPercentage}% Complete</span>
                  </div>
                </div>

                <h1 className="text-2xl font-bold text-gray-900">
                  {module.title}
                </h1>
                <p className="mt-2 text-gray-600">{module.description}</p>

                <div className="mt-4 pt-4 border-t border-gray-100 flex flex-wrap gap-4">
                  <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                    {module.completionPercentage === 0
                      ? "Start Module"
                      : module.completionPercentage === 100
                        ? "Review Module"
                        : "Continue Module"}
                  </button>
                  <button className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                    Download Materials
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs navigation */}
        <div className="mt-6 border-b border-gray-200">
          <nav className="-mb-px flex space-x-8">
            <button
              onClick={() => setActiveTab("content")}
              className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === "content"
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              Module Content
            </button>
            <button
              onClick={() => setActiveTab("resources")}
              className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === "resources"
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              Resources
            </button>
            <button
              onClick={() => setActiveTab("discussion")}
              className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === "discussion"
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              Discussion
            </button>
          </nav>
        </div>

        {/* Tab content */}
        <div className="mt-6">
          {activeTab === "content" && (
            <div className="bg-white shadow-sm rounded-xl border border-gray-100 divide-y divide-gray-100">
              {lessons.map((lesson, index) => (
                <div key={lesson.id} className="p-4 sm:p-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 pt-0.5">
                      {lesson.completed ? (
                        <CheckCircle className="h-6 w-6 text-green-500" />
                      ) : lesson.locked ? (
                        <Lock className="h-6 w-6 text-gray-400" />
                      ) : (
                        <div className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-gray-300 bg-white">
                          <span className="text-xs font-medium text-gray-500">
                            {index + 1}
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="ml-4 flex-1">
                      <h3
                        className={`text-base font-medium ${lesson.locked ? "text-gray-400" : "text-gray-900"}`}
                      >
                        {lesson.title}
                      </h3>
                      <div className="flex flex-wrap mt-1 items-center space-x-4">
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="mr-1.5 h-4 w-4 text-gray-400" />
                          <span>{lesson.duration}</span>
                        </div>
                        {lesson.completed && (
                          <span className="text-xs font-medium text-green-500">
                            Completed
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="ml-4">
                      <button
                        disabled={lesson.locked}
                        className={`px-3 py-1.5 text-sm font-medium rounded-md ${
                          lesson.locked
                            ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                            : lesson.completed
                              ? "bg-green-50 text-green-700 hover:bg-green-100"
                              : "bg-blue-50 text-blue-700 hover:bg-blue-100"
                        }`}
                      >
                        {lesson.completed
                          ? "Review"
                          : lesson.locked
                            ? "Locked"
                            : "Start"}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "resources" && (
            <div className="bg-white shadow-sm rounded-xl border border-gray-100 p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">
                Module Resources
              </h2>
              <ul className="divide-y divide-gray-200">
                <li className="py-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <FileText className="h-5 w-5 text-gray-400" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">
                        Module Slides
                      </p>
                      <p className="text-sm text-gray-500">
                        PDF presentation of the module content
                      </p>
                    </div>
                    <div className="ml-auto">
                      <button className="text-sm text-blue-600 font-medium">
                        Download
                      </button>
                    </div>
                  </div>
                </li>
                <li className="py-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <FileText className="h-5 w-5 text-gray-400" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">
                        Practice Exercises
                      </p>
                      <p className="text-sm text-gray-500">
                        Hands-on exercises to test your knowledge
                      </p>
                    </div>
                    <div className="ml-auto">
                      <button className="text-sm text-blue-600 font-medium">
                        Download
                      </button>
                    </div>
                  </div>
                </li>
                <li className="py-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <FileText className="h-5 w-5 text-gray-400" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">
                        Cheat Sheet
                      </p>
                      <p className="text-sm text-gray-500">
                        Quick reference guide for key concepts
                      </p>
                    </div>
                    <div className="ml-auto">
                      <button className="text-sm text-blue-600 font-medium">
                        Download
                      </button>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          )}

          {activeTab === "discussion" && (
            <div className="bg-white shadow-sm rounded-xl border border-gray-100 p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">
                Discussion Forum
              </h2>
              <div className="bg-blue-50 rounded-lg p-4 mb-6">
                <p className="text-sm text-blue-700">
                  Ask questions, share insights, and discuss topics related to
                  this module with fellow learners.
                </p>
              </div>
              <div className="mb-6">
                <label
                  htmlFor="comment"
                  className="block text-sm font-medium text-gray-700"
                >
                  Post a new question or comment
                </label>
                <div className="mt-1">
                  <textarea
                    id="comment"
                    name="comment"
                    rows={3}
                    className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border border-gray-300 rounded-md"
                    placeholder="What's on your mind?"
                  ></textarea>
                </div>
                <div className="mt-2 flex justify-end">
                  <button
                    type="button"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Post
                  </button>
                </div>
              </div>
              <div className="space-y-4">
                <p className="text-sm text-gray-500 text-center py-8">
                  No discussions yet. Be the first to start a conversation!
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ModuleDetail;
