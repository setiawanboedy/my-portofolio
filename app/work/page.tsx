"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";

import { BsArrowUpRight, BsGithub, BsLockFill } from "react-icons/bs";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from "next/image";
import WorkSlideBtns from "@/components/WorkSlideBtns";
import { Project } from "@/types";

const projects: Project[] = [
  {
    num: "01",
    category: "NoteKu (Journal Note)",
    title: "project 1",
    description:
      "Modern Android application engineered for daily journal entry management. Built with Jetpack Compose for declarative UI, Dagger Hilt for dependency injection, and offline-first Room database synchronized with Firebase and MongoDB. Published and actively used on the Google Play Store.",
    stack: [
      { name: "Kotlin" },
      { name: "Jetpack Compose" },
      { name: "Dagger Hilt" },
      { name: "Room DB" },
      { name: "MongoDB" },
      { name: "Firebase" },
      { name: "MVVM" },
    ],
    image: "/images/noteku.png",
    live: "https://play.google.com/store/apps/details?id=com.tafakkur.noteapp",
    github: "https://github.com/setiawanboedy/journal-note",
    badge: "Google Play Store",
  },
  {
    num: "02",
    category: "Masjid Digital",
    title: "project 2",
    description:
      "A fullstack web platform connecting communities to digital Islamic resources, sermons, and educational video streaming. Integrated YouTube Data API with automated video syncing and caching to optimize loading speed.",
    stack: [
      { name: "PHP" },
      { name: "Laravel" },
      { name: "Tailwind CSS" },
      { name: "YouTube API" },
      { name: "MySQL" },
    ],
    image: "/images/masjiddigital.png",
    live: "",
    github: "",
    badge: "Client Project",
  },
  {
    num: "03",
    category: "Kaki Keenam",
    title: "project 3",
    description:
      "Location-based mobile marketplace enabling real-time discovery of mobile street vendors within a 20-meter radius using Google Maps SDK and Firebase Cloud Messaging (FCM). Architected with Flutter and GetX state management.",
    stack: [
      { name: "Flutter" },
      { name: "Dart" },
      { name: "Google Maps SDK" },
      { name: "FCM" },
      { name: "Firebase" },
      { name: "GetX" },
    ],
    image: "/images/kakikeenam1.png",
    live: "",
    github: "https://github.com/Kaki-Keenam/aplikasi-pembeli",
    badge: "Startup Capstone",
  },
  {
    num: "04",
    category: "Squid Hunter",
    title: "project 4",
    description:
      "Community tourism exploration app for West Nusa Tenggara (Lombok). Features geolocation mapping, interactive points of interest, push notifications, and offline caching to boost local tourism and community engagement.",
    stack: [
      { name: "Flutter" },
      { name: "Dart" },
      { name: "Google Maps SDK" },
      { name: "FCM" },
      { name: "Firebase" },
      { name: "GetX" },
    ],
    image: "/images/squidhunter.png",
    live: "",
    github: "",
    badge: "Community Challenge",
  },
  {
    num: "05",
    category: "Hadir App",
    title: "project 5",
    description:
      "Enterprise mobile attendance and HR management system. Allows employees to log geofenced check-ins, submit leave requests, and view monthly attendance summaries with real-time biometric and location validation.",
    stack: [
      { name: "Flutter" },
      { name: "Dart" },
      { name: "Riverpod" },
      { name: "REST API" },
      { name: "Google Maps SDK" },
      { name: "FCM" },
    ],
    image: "/images/hadir1.png",
    live: "",
    github: "",
    badge: "Enterprise App",
  },
  {
    num: "06",
    category: "Heart Uno",
    title: "project 6",
    description:
      "IoT bio-signal hardware-software bridge connecting Arduino pulse sensors with a Flutter mobile app via serial port connector. Visualizes real-time electrocardiogram / PPG waveforms and calculates heart rate metrics.",
    stack: [
      { name: "Flutter" },
      { name: "Dart" },
      { name: "Arduino" },
      { name: "Serial Port" },
      { name: "Material 3" },
    ],
    image: "/images/heart.png",
    live: "",
    github: "https://github.com/setiawanboedy/heart-uno",
    badge: "Hardware & IoT",
  },
  {
    num: "07",
    category: "Momen (Money Management)",
    title: "project 7",
    description:
      "Personal finance tracking mobile application featuring multi-wallet management, categorized income/expense records, and financial summary charts with clean Material 3 UI design.",
    stack: [
      { name: "Flutter" },
      { name: "Dart" },
      { name: "REST API" },
      { name: "Material 3" },
    ],
    image: "/images/momen.png",
    live: "",
    github: "https://github.com/setiawanboedy/momen-frontend",
    badge: "Personal Project",
  },
  {
    num: "08",
    category: "Fishku Consumer",
    title: "project 8",
    description:
      "Fishery e-commerce and freshness scanning mobile application built for a commercial startup. Features seafood marketplace, payment gateway integration, and real-time order tracking notifications.",
    stack: [
      { name: "Flutter" },
      { name: "Dart" },
      { name: "FCM" },
      { name: "REST API" },
      { name: "Firebase" },
    ],
    image: "/images/fishku.PNG",
    live: "https://play.google.com/store/apps/details?id=id.fishku.consumer",
    github: "",
    badge: "Google Play Store",
  },
  {
    num: "09",
    category: "Scholar Unram",
    title: "project 9",
    description:
      "Academic research repository portal for the University of Mataram. Facilitates high-throughput scholarly search across thousands of international publications, featuring automated cron indexing and optimized pagination.",
    stack: [
      { name: "PHP" },
      { name: "Laravel" },
      { name: "MySQL" },
      { name: "Cron Jobs" },
      { name: "Tailwind CSS" },
    ],
    image: "/images/scholar.png",
    live: "https://scholar.unram.ac.id",
    github: "",
    badge: "Production University Platform",
  },
  {
    num: "10",
    category: "Earthquake Accelerometer",
    title: "project 10",
    description:
      "Seismic vibration detection and earthquake early-warning system. Ingests high-frequency sensor telemetry via MQTT broker, analyzes ground motion thresholds, and presents real-time waveform monitoring across Android and React dashboards.",
    stack: [
      { name: "Kotlin" },
      { name: "Jetpack Compose" },
      { name: "MQTT Broker" },
      { name: "React" },
      { name: "TypeScript" },
    ],
    image: "/images/accel.png",
    live: "",
    github: "",
    badge: "IoT & Seismic Research",
  },
];

const Work = () => {
  const [project, setProject] = useState<Project>(projects[0]);

  const handleSlideChange = (swiper: SwiperType) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[480px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[20px]">
              {/* header & badge */}
              <div className="flex items-center justify-between">
                <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                  {project.num}
                </div>
                {project.badge && (
                  <span className="text-xs uppercase tracking-wider font-semibold px-3 py-1 rounded-full border border-accent text-accent bg-accent/10">
                    {project.badge}
                  </span>
                )}
              </div>

              {/* project category */}
              <h2 className="text-[36px] xl:text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category}
              </h2>

              {/* project description */}
              <p className="text-white/60 leading-relaxed">{project.description}</p>

              {/* stack tags */}
              <ul className="flex gap-2 flex-wrap pt-2">
                {project.stack.map((item, index) => {
                  return (
                    <li
                      key={index}
                      className="text-sm font-medium px-3 py-1 rounded-md bg-[#232329] text-accent border border-white/5"
                    >
                      {item.name}
                    </li>
                  );
                })}
              </ul>

              {/* Border */}
              <div className="border border-white/10 my-2"></div>

              {/* action buttons */}
              <div className="flex items-center gap-4">
                {/* live project button */}
                {project.live ? (
                  <Link
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[60px] h-[60px] rounded-full bg-white/5 flex justify-center items-center group hover:bg-accent transition-all">
                          <BsArrowUpRight className="text-white text-2xl group-hover:text-primary transition-colors" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Live / Play Store</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                ) : (
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[60px] h-[60px] rounded-full bg-white/5 opacity-50 cursor-not-allowed flex justify-center items-center">
                        <BsLockFill className="text-white/60 text-xl" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Internal / Private Deployment</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                )}

                {/* github project button */}
                {project.github ? (
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[60px] h-[60px] rounded-full bg-white/5 flex justify-center items-center group hover:bg-accent transition-all">
                          <BsGithub className="text-white text-2xl group-hover:text-primary transition-colors" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>GitHub Repository</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                ) : (
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[60px] h-[60px] rounded-full bg-white/5 opacity-50 cursor-not-allowed flex justify-center items-center">
                        <BsLockFill className="text-white/60 text-xl" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Private / Proprietary Codebase</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                )}
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((item, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-black/40 rounded-xl overflow-hidden border border-white/10">
                      {/* overlay */}
                      <div className="absolute top-0 w-full h-full bg-black/20 z-10"></div>
                      <div className="relative w-full h-full">
                        <Image
                          src={item.image}
                          fill
                          className="object-contain p-4"
                          alt={item.category}
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* Slide button */}
              <WorkSlideBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all rounded-md shadow-lg"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Work;
