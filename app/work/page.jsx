"use client";

import { motion } from 'framer-motion';
import React, { useState } from 'react'; // Fixed typo here
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { BsArrowUpRight, BsGithub } from 'react-icons/bs';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider, 
  TooltipTrigger
} from '@/components/ui/tooltip';

import Link from 'next/link';
import Image from 'next/image';
import WorkSliderBtns from '@/components/WorkSliderBtns'; 

const projects = [
  {
    num: "01",
    category: "Herseus",
    title: "Herseus: Smart and Autonomous Inventory Management",
    description: "Main objective for our solution was to automate the tedious Inventory Management System to reduce Human efforts, create efficient and optimized approach for increasing productivity.",
    stack: [{ name: "Engineering" }, { name: "Robotics" }, { name: "Computer Vision" }],
    image: "/assets/work/thumb1.png",
    live: "https://permutes.in/Herseus",
    github: "",
  },
  {
    num: "02",
    category: "Nixstay Website",
    title: "Nixstays",
    description: "Developed NixStays, a platform for managing student accommodations with integrated features for property listing and reservation management.",
    stack: [{ name: "JavaScript" }, { name: "Python" }, { name: "Database Management" }],
    image: "/assets/work/thumb2.png",
    live: "https://www.nixstays.com/",
    github: "https://github.com/Tanishq84/NixStays",
  },
  {
    num: "03",
    category: "Exoplanet Detection",
    title: "Exoplanet Detection",
    description: "Idea is to create machine learning model that can predict if an observation is a real candidate for an exoplanet or not. The data was collected by the Kepler mission that revealed thousands of planets out of our Solar System.",
    stack: [{ name: "Physics" }, { name: "Machine Learning" }, { name: "Research" }],
    image: "/assets/work/thumb3.png",
    live: "https://res.cloudinary.com/upwork-fp/image/upload/v1721838979/profile/portfolio/1665817817702133760/hkfwqn6xhtynq5d2it0m.pdf",
    github: "https://github.com/TanishqSom/Exoplanet-detection",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
      className='min-h-[80vh] flex flex-col justify-center py-12 xl:px-0'
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex gap-4">
                {project.stack.map((item, index) => (
                  <li key={index} className="text-xl text-accent">
                    {item.name}{index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

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
            <Swiper spaceBetween={30} slidesPerView={1} className="xl:h-[520px] mb-12" onSlideChange={handleSlideChange}>
              {projects.map((project, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                    <div className="relative w-full h-full">
                      <Image src={project.image} fill className="object-cover" />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all" />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
