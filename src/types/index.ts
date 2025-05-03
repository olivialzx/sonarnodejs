export interface Module {
  id: string;
  title: string;
  description: string;
  duration: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  completionPercentage: number;
  icon: string;
}

export interface Lesson {
  id: string;
  moduleId: string;
  title: string;
  content: string;
  completed: boolean;
  duration: string;
}

export interface Resource {
  id: string;
  title: string;
  description: string;
  url: string;
  type: "Article" | "Video" | "Documentation" | "Tool";
}

export interface User {
  name: string;
  email: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  profilePicture: string;
  progress: {
    completedModules: number;
    totalModules: number;
    completedLessons: number;
    totalLessons: number;
  };
}
