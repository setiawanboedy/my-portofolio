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

import { SiFlutter, SiGoland, SiKotlin, SiLaravel, SiNextdotjs, SiTailwindcss, SiTailwindCss } from "react-icons/si";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const about = {
  title: "About me",
  description:
    "Enthusiastic and driven software developer with 2-3 years of experience in Mobile and Backend Development. Proficient in Kotlin, Dart, Golang, and TypeScript, with a strong focus on delivering high-quality, secure, and user-centric applications. Seeking to leverage my skills and experience to excel in software development roles.",
  info: [
    {
      filedName: "Name",
      filedValue: "Budi Setiawan",
    },
    {
      filedName: "Phone",
      filedValue: "(+62) 81 946 358 409",
    },
    {
      filedName: "Experiece",
      filedValue: "2+ Years",
    },
    {
      filedName: "LinkedIn",
      filedValue: "setiawanboedy",
    },
    {
      filedName: "Nationality",
      filedValue: "Indonesia",
    },
    {
      filedName: "Email",
      filedValue: "budisetiawan.dev@gmail.com",
    },
    {
      filedName: "Freelance",
      filedValue: "Available",
    },
    {
      filedName: "Language",
      filedValue: "English, Indonesia",
    },
  ],
};

const experience = {
  title: "My Experience",
  description:
    "I heve many experience mobile and web development and willing to learn new thing.",
  items: [
    {
      company: "Itec",
      position: "Mobile Developer Trainer",
      duration: "Aug 2024 - Present",
    },
    // {
    //   company: "Cv. Lumbung Inovasi",
    //   position: "Freelance Mobile Developer",
    //   duration: "Feb 2024 - Present",
    // },
    {
      company: "Masjid Jalan Cahaya",
      position: "Freelance Fullstack Web Devloper",
      duration: "Nov 2023 - Aug 2024",
    },
    {
      company: "PT. Nawab Indonesia",
      position: "Freelance Fullstack Devloper",
      duration: "Jan 2024 - Mei 2024",
    },
    {
      company: "Bangkit Academy 2023 Batch 2",
      position: "Mentor Android Devloper",
      duration: "Aug 2023 - Feb 2024",
    },
    {
      company: "Bangkit Academy 2023 Batch 1",
      position: "Advisor of Capstone Android Developer",
      duration: "May 2023 - July 2023",
    },
    {
      company: "Kaki Keenam Startup Capstone",
      position: "Android Developer Devloper",
      duration: "Jan 2022 - Feb 2023",
    },
  ],
};

const education = {
  title: "My Education",
  description:
    "Physics can train my logic and implemented in programming.",
  items: [
    {
      institution: "Bangkit Academy 2021 x Google",
      degree: "Mobile Developer",
      duration: "Jan 2021 - Aug 2021",
    },
    {
      institution: "Mataram University",
      degree: "Bachelor of Physics",
      duration: "Aug 2023",
    },
  ],
};

const skills = {
  title: "My Skills",
  description:
    "Skill that i can handle.",
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
                <ScrollArea className="h-[650px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* Educatoin */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="skills" className="w-full h-full">
                <div className="flex flex-col gap-[30px]">  
                    <div className="flex flex-col gap-[30px] text-center xl:text-left">
                      <h3 className="text-4xl font-bold">{skills.title}</h3>
                      <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                    </div>
                    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                      {skills.items.map((item, index)=>{
                        return (
                          <li key={index}>
                            <TooltipProvider delayDuration={100}>
                              <Tooltip>
                                <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
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
            <TabsContent value="about" className="w-full text-center xl:text-left">
                <div className="flex flex-col gap-[30px]">  
                    <h3 className="text-4xl font-bold">{about.title}</h3>
                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                    <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                      {about.info.map((item, index)=>{
                        return (
                          <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                            <span className="text-white/60">{item.filedName}</span>
                            <span className="text-xl">{item.filedValue}</span>
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
