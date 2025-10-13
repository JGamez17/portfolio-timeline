export interface TimelineEventType {
  id: string
  year: number
  title: string
  organization: string
  icon: string
  skills: string[]
  description: string
  category: "education" | "career" | "achievement"
}

export const timelineData: TimelineEventType[] = [
  {
    id: "1",
    year: 2011,
    title: "Bachelor's Degree",
    organization: "Utica College",
    icon: "🎓",
    skills: ["Critical Thinking", "Research", "Communication", "Problem Solving"],
    description:
      "Completed my undergraduate degree at Utica College, building a strong foundation in analytical thinking and establishing the groundwork for my future career in technology.",
    category: "education",
  },
  {
    id: "2",
    year: 2014,
    title: "Master's Degree",
    organization: "Utica College",
    icon: "📚",
    skills: ["Advanced Research", "Leadership", "Strategic Thinking", "Project Management"],
    description:
      "Pursued advanced studies to deepen my expertise and develop specialized knowledge. This experience enhanced my ability to tackle complex challenges and think strategically about problem-solving.",
    category: "education",
  },
  {
    id: "3",
    year: 2019,
    title: "Technical Specialist",
    organization: "Apple Inc.",
    icon: "",
    skills: [
      "Technical Troubleshooting & Root Cause Analysis",
      "Systematic Debugging & Diagnostics", 
      "Cross-Functional Collaboration",
      "User-Centric Technical Translation",
      "iOS & Mobile Ecosystem Expertise",
      "Creative Problem-Solving"
  ],
    description:
      "Launched my technical career at Apple,inc. rapidly developing expertise in diagnosing and resolving complex hardware and software issues. Mastered the art of deconstructing user-reported problems into actionable technical solutions, laying a foundational skill set for software engineering focused on user empathy, systematic debugging, and delivering robust outcomes.",
    category: "career",
  },
  {
    id: "4",
    year: 2021,
    title: "Health Software - QA Engineer",
    organization: "Apple Inc.",
    icon: "⚙️",
    skills: [
      "System Architecture & Infrastructure Design",
      "Low-Level Systems Engineering", 
      "Cross-Functional Technical Leadership",
      "Kernel & Operating Systems Development",
      "Technical Strategy & Roadmap Planning",
      "Engineering Partnership & Collaboration"
  ],
    description:
    "Selected for a technical role with Health QA engineering teams, where I accelerated my Python skills and enterprise software knowledge through direct contribution to critical projects. Systematically identified and documented reproducible software defects, driving issue resolution through close collaboration with development teams. This hands-on experience with test automation, QA processes, and engineering collaboration on infrastructure scaling to millions of devices provided comprehensive exposure to professional software engineering practices.",
    category: "career",
  },
  {
    id: "5",
    year: 2022,
    title: "Full-Stack Web Development Bootcamp",
    organization: "Flatiron School",
    icon: "💻",
    skills: [
      "Full-Stack Engineering",
      "React & Modern JavaScript", 
      "Ruby on Rails API Development",
      "RESTful API Design & Integration",
      "Relational Database Architecture (SQL)",
      "Version Control (Git) & Agile Workflows"
  ],
    description:
   "Accelerated my transition into software engineering through an intensive, project-driven curriculum focused on building scalable full-stack applications. Engineered and deployed multiple production-ready web applications, mastering modern development frameworks and establishing a robust foundation in software engineering principles and best practices.",
    category: "achievement",
  },
  {
    id: "6",
    year: 2023,
    title: "Software Engineer - CoreOS Team",
    organization: "Apple Inc.",
    icon: "⚙️",
    skills: [
      "System Architecture & Infrastructure Design",
      "Low-Level Systems Engineering",
      "Objective-C & iOS Development",
      "Enterprise Security Models",
      "Python", 
      "SDC & Internal Tools",
      "Unit Testing & Test Automation",
      "Git & Code Review",
      "Cross-Functional Technical Leadership",
      "Technical Strategy & Planning"
  ],
    description:
   "Partnered with cross-functional teams to design test strategies and author 60+ test cases for major features. Gained a deep, practical understanding of feature development and system architecture by analyzing the existing Objective-C codebase. Accelerated my knowledge of low-level systems, enterprise security models, and robust engineering practices by performing code reviews, mastering advanced Git concepts, and contributing to internal tools and unit testing frameworks within a large-scale SDC environment.",
    category: "career",
  },
]

