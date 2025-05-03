import { Module } from "../types";

export const modules: Module[] = [
  {
    id: "1",
    title: "Introduction to DevOps",
    description:
      "Learn the fundamentals of DevOps culture, principles, and practices.",
    duration: "3 hours",
    level: "Beginner",
    completionPercentage: 0,
    icon: "Layers",
  },
  {
    id: "2",
    title: "Continuous Integration",
    description:
      "Master the art of integrating code changes frequently and automatically.",
    duration: "4 hours",
    level: "Beginner",
    completionPercentage: 0,
    icon: "GitMerge",
  },
  {
    id: "3",
    title: "Continuous Delivery",
    description:
      "Learn how to automate the delivery pipeline to production environments.",
    duration: "5 hours",
    level: "Intermediate",
    completionPercentage: 0,
    icon: "Rocket",
  },
  {
    id: "4",
    title: "Infrastructure as Code",
    description:
      "Discover how to manage infrastructure using code and automation.",
    duration: "6 hours",
    level: "Intermediate",
    completionPercentage: 0,
    icon: "Code2",
  },
  {
    id: "5",
    title: "Containerization with Docker",
    description:
      "Learn how to build, ship, and run applications using Docker containers.",
    duration: "5 hours",
    level: "Intermediate",
    completionPercentage: 0,
    icon: "Package",
  },
  {
    id: "6",
    title: "Kubernetes Orchestration",
    description:
      "Master container orchestration with Kubernetes for scalable applications.",
    duration: "8 hours",
    level: "Advanced",
    completionPercentage: 0,
    icon: "Ship",
  },
  {
    id: "7",
    title: "Monitoring and Observability",
    description:
      "Learn to implement effective monitoring and observability strategies.",
    duration: "4 hours",
    level: "Intermediate",
    completionPercentage: 0,
    icon: "LineChart",
  },
  {
    id: "8",
    title: "DevSecOps",
    description: "Integrate security into your DevOps pipeline and practices.",
    duration: "6 hours",
    level: "Advanced",
    completionPercentage: 0,
    icon: "Shield",
  },
];
