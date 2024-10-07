"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from "next/image";
import WorkSlideBtns from "@/components/WorkSlideBtns";

const projects = [
  {
    num: "01",
    category: "NoteKu",
    title: "project 1",
    description:
      "The Journal Note app and NoteKu, are modern Android applications designed for managing daily journal entries. It leverages a range of advanced Android technologies and frameworks to provide a seamless and efficient user experience. The app incorporates a declarative UI approach using Jetpack Compose, ensuring a clean and intuitive interface. As the Android Developer, I was responsible for the full development cycle of the Journal Note app, from planning and architecture to implementation and deployment.",
    stack: [
      { 
        name: "Kotlin" 
      },
      { 
        name: "Dagger Hilt" 
      },
      { 
        name: "Room" 
      },
      { 
        name: "MongoDB" 
      },
      { 
        name: "Firebase" 
      },
      { 
        name: "Jetpack Compose" 
      },
      { 
        name: "MVVM Architecture" 
      },
      { 
        name: "Material 3" 
      },

    ],
    image: "https://setiawanboedy.github.io/public/images/noteku.png",
    live: "",
    github: "",
  },
  {
    num: "02",
    category: "Masjid Digital",
    title: "project 2",
    description:
      "The digital mosque website is an online platform that provides easy access for Muslims to obtain various types of Islamic content digitally. This platform allows users to watch videos of lectures, sermons, or religious lessons interactively and flexibly, anytime and anywhere.",
    stack: [
      { 
        name: "PHP" 
      },
      { 
        name: "Laravel" 
      },
      { 
        name: "Tailwild" 
      },
      { 
        name: "Youtube API" 
      },

    ],
    image: "https://setiawanboedy.github.io/public/images/masjiddigital.png",
    live: "",
    github: "",
  },
  {
    num: "03",
    category: "Kaki Keenam",
    title: "project 3",
    description:
      "The Kaki Keenam app offers several features, including a user-friendly interface with smooth navigation and easy access to key product information. The app also displays the locations of vendors within a 20-meter radius of the user's location, facilitating interactions between users and nearby mobile vendors. Additionally, the app includes transaction capabilities, allowing users to make purchases and track their transaction history. The search feature enables users to easily find desired products.",
    stack: [
      { 
        name: "Flutter" 
      },
      { 
        name: "Dart" 
      },
      { 
        name: "FCM" 
      },
      { 
        name: "GMap SDK" 
      },
      { 
        name: "Firebase" 
      },
      { 
        name: "Getx" 
      },
      { 
        name: "MVVM Architecture" 
      },
      { 
        name: "Material 3" 
      },

    ],
    image: "https://setiawanboedy.github.io/public/images/kakikeenam1.png",
    live: "",
    github: "",
  },
  {
    num: "04",
    category: "Squid Hunter",
    title: "project 4",
    description:
      "The IT community is a platform that provides support, learning, and opportunities in the information technology industry. Joining an IT community can be a good step to continuously develop a career in the IT field. Typically, within the community, we will be challenged to create an out-of-the-box product to sharpen our programming skills. In West Nusa Tenggara, specifically on the island of Lombok, there are many tourist destinations that contribute significantly to the region's income. Considering this, to participate in a challenge organized by my community, I have an idea to create an application that can enhance tourism interest in Lombok Island. The name of the application is Squid Hunter.",
    stack: [
      { 
        name: "Flutter" 
      },
      { 
        name: "Dart" 
      },
      { 
        name: "FCM" 
      },
      { 
        name: "Gmap SDK" 
      },
      { 
        name: "Firebase" 
      },
      { 
        name: "Getx" 
      },
      { 
        name: "MVVM Architecture" 
      },
      { 
        name: "Material 3" 
      },

    ],
    image: "https://setiawanboedy.github.io/public/images/squidhunter.png",
    live: "",
    github: "",
  },
  {
    num: "05",
    category: "Hadir App",
    title: "project 5",
    description:
      "Hadir app is a mobile attendance solution designed to simplify employee attendance management in a company. This app offers interactive and userfriendly features for recording attendance, applying for leave, and viewing attendance summaries.",
    stack: [
      { 
        name: "Flutter" 
      },
      { 
        name: "Dart" 
      },
      { 
        name: "FCM" 
      },
      { 
        name: "Gmap SDK" 
      },
      { 
        name: "Riverpod" 
      },
      { 
        name: "Rest Api" 
      },
      { 
        name: "Material 3" 
      },

    ],
    image: "https://setiawanboedy.github.io/public/images/hadir1.png",
    live: "",
    github: "",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);
  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex])
  }
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn"}
       }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* project category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              {/* project description */}
              <p className="text-white/60">{project.description}</p>
              <ul className="flex gap-4 flex-wrap">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {/* remove last comma */}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* Border */}
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                {/* live project button */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* github project button */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
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
              {projects.map((item, index)=>{
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* overlay */}
                      <div className="absolute top-0 w-full h-full bg-black/10 z-10"></div>
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* Slide button */}
              <WorkSlideBtns 
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Work;
