"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Figma Clone",
    description: "A clone of figma, made with Liveblocks and Next.js",
    image: "/images/projects/Figma.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/yukiodesigns/figma-clone",
    previewUrl: "https://yukis-figma.vercel.app/",
  },
  {
    id: 2,
    title: "Yuki Jobs",
    description: "A job website made with Next.js",
    image: "/images/projects/jobs.png",
    tag: ["All", "Web", "UI/UX"],
    gitUrl: "https://github.com/yukiodesigns/yuki_jobs",
    previewUrl: "https://yuki-jobs.vercel.app/",
  },
  {
    id: 3,
    title: "Yuki Tours",
    description: "A tour website made with Next.js",
    image: "/images/projects/tours.png",
    tag: ["All", "Web","UI/UX"],
    gitUrl: "https://github.com/yukiodesigns/yukio_tours",
    previewUrl: "https://yukio-tours.vercel.app/",
  },
  {
    id: 4,
    title: "Glacier Foods",
    description: "A grocery shop made with Next.js",
    image: "/images/projects/glacier.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/yukiodesigns/glacier_foods",
    previewUrl: "https://glacier-foods.vercel.app/",
  },
  {
    id: 5,
    title: "Yuki AllInspire",
    description: "A prompt website made with Next.js and Clerk ",
    image: "/images/projects/yuki.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/elsieoduor/YukioAllinspire",
    previewUrl: "https://yukio-allinspire.vercel.app/", 
  },
  {
    id: 6,
    title: "Yukio Foods",
    description: "A restaurant website made with react.js",
    image: "/images/projects/food.png",
    tag: ["All", "Web", "UI/UX"],
    gitUrl: "https://github.com/elsieoduor/restaurant-webpage",
    previewUrl: "https://restaurant-webpage-sigma.vercel.app/", 
  },
  {
    id: 7,
    title: "Booking Clone",
    description: "A clone of the Bookings website made with React.js",
    image: "/images/projects/booking.png",
    tag: ["All", "Web", "UI/UX"],
    gitUrl: "https://github.com/elsieoduor/reservation_website",
    previewUrl: "https://reservation-website.vercel.app/",
  },
  {
    id: 8,
    title: "Yuki Estates",
    description: "A real estate website made with CLerk and Next.js",
    image: "/images/projects/estates.png",
    tag: ["All", "Web", "UI/UX"],
    gitUrl: "https://github.com/yukiodesigns/estates",
    previewUrl: "https://estates-eight.vercel.app/",
  },
  {
    id: 9,
    title: "Greetings App",
    description: "A greetings App made with Kotlin",
    image: "/images/projects/greeting.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/yukiodesigns/Greetings-App",
    previewUrl: "/",
  },
  {
    id: 10,
    title: "Counter App",
    description: "A counter App made with Kotlin",
    image: "/images/projects/greeting.png",
    tag: ["All", "Mobile", ],
    gitUrl: "https://github.com/yukiodesigns/Counter-App",
    previewUrl: "/",
  },
  {
    id: 11,
    title: "Currency Converter",
    description: "A currency converter made with Next.js and Django",
    image: "/images/projects/converter.jpg",
    tag: ["All", "Web","Backend" ],
    gitUrl: "https://github.com/yukiodesigns/CurrencyConverter",
    previewUrl: "/",
  },
  {
    id: 12,
    title: "Job-Listing-Backend",
    description: "A RESTful API made with Django",
    image: "/images/projects/resume.jpg",
    tag: ["All", "Backend", ],
    gitUrl: "https://github.com/yukiodesigns/job-listing-backend",
    previewUrl: "/",
  },
  {
    id: 13,
    title: "Inventory System",
    description: "A currency converter made with Node.js and Mongo",
    image: "/images/projects/inventory.jpg",
    tag: ["All","Backend" ],
    gitUrl: "https://github.com/yukiodesigns/Inventory-Stystem",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="UI/UX"
          isSelected={tag === "UI/UX"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Backend"
          isSelected={tag === "Backend"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
