import React from "react";
import ProjectCard from "./ui/ProjectCard";
import { IoIosRocket } from "react-icons/io";

const Projects = ({projRef}) => {
  const projects = [
    {
      title: "RSS Buddy",
      description: "RSS Buddy is a user-friendly and efficient tool designed to help dealers in the petrol bunk to manage and track the credits provided to truck owners.",
      image: "./rss.png",
      link: "https://github.com/VijeshVS/rssbuddy",
      tech: "Flask | Python"
    },
    {
      title: "EatMyUrl",
      description: "A link shortening website. Allows you to create custom shortlinks and qrcodes. Provides detailed analysis of links shortened.",
      image: "./eurl.png",
      link: "https://eurl.dev/",
      tech: "NextJS | Express | Kafka | Clickhouse"
    },
    {
      title: "Chat-RTC",
      description: "A real-time chatting application with a user-friendly UI that allows one-to-one communication with people.",
      image: "./chatrtc.png",
      link: "https://chat-rtc.vercel.app/",
      tech: "React | Express | Socket.io"
    }
  ];

  return (
    <div ref={projRef} className="bg-gradient-to-r py-16 from-violet-600 to-indigo-600 flex flex-col">
      <div className="flex font-bold justify-center">
        <IoIosRocket className="text-4xl text-white" />
        <h1 className="ml-2 text-white text-3xl">My </h1>
        <h1 className="ml-2 text-yellow-300 text-3xl">Projects</h1>
      </div>
    <div className="grid mt-8 grid-cols-1 md:grid-cols-3 gap-8 p-8">
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          description={project.description}
          image={project.image}
          link={project.link}
          tech={project.tech}
        />
      ))}
    </div>
    </div>
  );
};

export default Projects;