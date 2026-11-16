"use client";

import {
  FaAndroid,
  FaCss3,
  FaFigma,
  FaHtml5,
  FaJava,
  FaJs,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import {
  SiFlutter,
  SiGoland,
  SiKotlin,
  SiLaravel,
  SiNextdotjs,
  SiTailwindcss,
} from "react-icons/si";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  AboutInfoItem,
  EducationItem,
  ExperienceItem,
  SkillItem,
} from "@/types";

interface AboutData {
  title: string;
  description: string;
  info: AboutInfoItem[];
}

interface ExperienceData {
  title: string;
  description: string;
  items: ExperienceItem[];
}

interface EducationData {
  title: string;
  description: string;
  items: EducationItem[];
}

interface SkillsData {
  title: string;
  description: string;
  items: SkillItem[];
}

const about: AboutData = {
  title: "About me",
  description:
    "Enthusiastic and results-driven Software Engineer with 3+ years of professional experience in Mobile (Kotlin, Flutter) and Backend Development (Golang, Laravel). Proven track record mentoring developers, building production applications on Google Play, and architecting scalable backend APIs. Seeking to drive impact in dynamic software engineering teams.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Budi Setiawan",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+62) 81 946 358 409",
    },
    {
      fieldName: "Experience",
      fieldValue: "3+ Years",
    },
    {
      fieldName: "LinkedIn",
      fieldValue: "setiawanboedy",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Indonesia",
    },
    {
      fieldName: "Email",
      fieldValue: "budisetiawan.dev@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Indonesian",
    },
  ],
};

const experience: ExperienceData = {
  title: "My Experience",
  description:
    "A journey of mentoring developers, building startup solutions, and delivering client applications across mobile and fullstack ecosystems.",
  items: [
    {
      company: "Itec",
      position: "Mobile Developer Trainer",
      duration: "Aug 2024 - Present",
      highlights: [
        "Delivered hands-on mobile engineering training in Kotlin and Flutter to 30+ students.",
        "Designed project-based curriculum covering state management, REST API integration, and Clean Architecture.",
      ],
    },
    {
      company: "Masjid Jalan Cahaya",
      position: "Freelance Fullstack Web Developer",
      duration: "Nov 2023 - Aug 2024",
      highlights: [
        "Architected and deployed a community media portal using Laravel, MySQL, and Tailwind CSS.",
        "Integrated YouTube Data API with automated caching to optimize video stream delivery.",
      ],
    },
    {
      company: "PT. Nawab Indonesia",
      position: "Freelance Fullstack Developer",
      duration: "Jan 2024 - Mei 2024",
      highlights: [
        "Built responsive client interfaces and robust backend REST API endpoints.",
        "Collaborated with cross-functional teams to deliver database schemas and business logic.",
      ],
    },
    {
      company: "Bangkit Academy 2023 Batch 2",
      position: "Mentor Android Developer",
      duration: "Aug 2023 - Feb 2024",
      highlights: [
        "Mentored 25+ cohort students in Google-certified Android curriculum.",
        "Conducted code reviews and consultations on Jetpack Compose, Coroutines, and MVVM.",
      ],
    },
    {
      company: "Bangkit Academy 2023 Batch 1",
      position: "Advisor of Capstone Android Developer",
      duration: "May 2023 - July 2023",
      highlights: [
        "Advised capstone teams on scalable architecture and cloud ML model integration.",
        "Evaluated code quality, security considerations, and deployment readiness.",
      ],
    },
    {
      company: "Kaki Keenam Startup Capstone",
      position: "Mobile Developer",
      duration: "Jan 2022 - Feb 2023",
      highlights: [
        "Developed cross-platform mobile marketplace app connecting nearby vendors with consumers.",
        "Integrated Google Maps SDK geolocation (20m radius) and Firebase Cloud Messaging.",
      ],
    },
  ],
};

const education: EducationData = {
  title: "My Education",
  description:
    "Combining strong analytical foundations in Physics with specialized Google-accredited software engineering training.",
  items: [
    {
      institution: "Bangkit Academy 2021 x Google",
      degree: "Mobile Developer Cohort",
      duration: "Jan 2021 - Aug 2021",
      highlights: [
        "Completed 900+ hours of rigorous mobile engineering training led by Google, GoTo, and Traveloka.",
      ],
    },
    {
      institution: "Mataram University",
      degree: "Bachelor of Physics (B.Sc.)",
      duration: "Graduated Aug 2023",
      highlights: [
        "Applied physics logic and computational thinking to software development and IoT sensor analysis.",
      ],
    },
  ],
};

const skills: SkillsData = {
  title: "My Skills",
  description:
    "Core programming languages, frameworks, and developer tools in my tech stack.",
  items: [
    {
      icon: <SiKotlin />,
      name: "kotlin",
    },
    {
      icon: <FaJava />,
      name: "java",
    },
    {
      icon: <SiFlutter />,
      name: "flutter",
    },
    {
      icon: <FaAndroid />,
      name: "android",
    },
    {
      icon: <SiGoland />,
      name: "Golang",
    },
    {
      icon: <SiLaravel />,
      name: "Laravel",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <FaFigma />,
      name: "figma",
    },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: "easeIn",
        },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[650px] pr-4">
                  <div className="grid grid-cols-1 gap-[24px]">
                    {experience.items.map((item, index) => {
                      return (
                        <div
                          key={index}
                          className="bg-[#232329] p-6 rounded-xl flex flex-col gap-3 border border-white/5 hover:border-accent/40 transition-colors"
                        >
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                            <h3 className="text-xl font-bold text-white">
                              {item.position}
                            </h3>
                            <span className="text-accent text-sm font-semibold px-3 py-1 bg-accent/10 rounded-full w-fit">
                              {item.duration}
                            </span>
                          </div>

                          <div className="flex items-center gap-2 text-white/70 font-medium">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p>{item.company}</p>
                          </div>

                          {item.highlights && item.highlights.length > 0 && (
                            <ul className="flex flex-col gap-1.5 pt-2 border-t border-white/10">
                              {item.highlights.map((highlight, hIdx) => (
                                <li
                                  key={hIdx}
                                  className="text-sm text-white/60 flex items-start gap-2 text-left"
                                >
                                  <span className="text-accent mt-1 text-xs">▹</span>
                                  <span>{highlight}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[500px] pr-4">
                  <div className="grid grid-cols-1 gap-[24px]">
                    {education.items.map((item, index) => {
                      return (
                        <div
                          key={index}
                          className="bg-[#232329] p-6 rounded-xl flex flex-col gap-3 border border-white/5 hover:border-accent/40 transition-colors"
                        >
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                            <h3 className="text-xl font-bold text-white">
                              {item.degree}
                            </h3>
                            <span className="text-accent text-sm font-semibold px-3 py-1 bg-accent/10 rounded-full w-fit">
                              {item.duration}
                            </span>
                          </div>

                          <div className="flex items-center gap-2 text-white/70 font-medium">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p>{item.institution}</p>
                          </div>

                          {item.highlights && item.highlights.length > 0 && (
                            <ul className="flex flex-col gap-1.5 pt-2 border-t border-white/10">
                              {item.highlights.map((highlight, hIdx) => (
                                <li
                                  key={hIdx}
                                  className="text-sm text-white/60 flex items-start gap-2 text-left"
                                >
                                  <span className="text-accent mt-1 text-xs">▹</span>
                                  <span>{highlight}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.items.map((item, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group border border-white/5 hover:border-accent/40 transition-colors">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {item.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{item.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* About me */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 leading-relaxed">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-lg font-medium">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
