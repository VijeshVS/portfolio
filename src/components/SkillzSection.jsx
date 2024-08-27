import React from "react";
import {
  FaDocker,
  FaGithub,
  FaJava,
  FaLaptopCode,
  FaNodeJs,
  FaPython,
  FaReact,
} from "react-icons/fa6";
import SkillCard from "../components/ui/SkillCard";
import {
  SiApachekafka,
  SiExpress,
  SiMongodb,
  SiPostgresql,
} from "react-icons/si";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { IoLogoFirebase } from "react-icons/io5";
import { DiMysql, DiRedis } from "react-icons/di";

const SkillzSection = ({ skillsRef }) => {
  return (
    <div
      ref={skillsRef}
      className="flex space-y-2 flex-col py-16 bg-gradient-to-r from-violet-600 to-indigo-600"
    >
      <div className="flex py-6 text-white text-2xl lg:text-3xl font-bold justify-center items-center">
      <FaLaptopCode 

    className="text-3xl lg:text-4xl" 
  />
        <h1 className="ml-3">Skillz &</h1>
        <h1 className="ml-1 bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-400 text-transparent bg-clip-text">
          Technologies
        </h1>
      </div>
      <div className="w-[330px] rounded-xl lg:w-[800px] mx-auto p-4 bg-violet-500">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
          <SkillCard skill={"React"}>
            <FaReact color="cyan" fontSize={96} />
          </SkillCard>
          <SkillCard skill={"Express"}>
            <SiExpress color="yellow" fontSize={96} />
          </SkillCard>
          <SkillCard skill={"NextJS"}>
            <RiNextjsFill fontSize={96} />
          </SkillCard>
          <SkillCard skill={"NodeJS"}>
            <FaNodeJs fontSize={96} color="lightgreen" />
          </SkillCard>
          <SkillCard skill={"Postgres"}>
            <SiPostgresql fontSize={96} color="#336791" />
          </SkillCard>
          <SkillCard skill={"MongoDB"}>
            <SiMongodb fontSize={96} color="green" />
          </SkillCard>
          <SkillCard skill={"Firebase"}>
            <IoLogoFirebase fontSize={96} color="#FFCA28" />
          </SkillCard>
          <SkillCard skill={"Tailwind"}>
            <RiTailwindCssFill fontSize={96} color="#1E40AF" />
          </SkillCard>
          <SkillCard skill={"Docker"}>
            <FaDocker fontSize={96} color="#2496ED" />
          </SkillCard>
          <SkillCard skill={"Redis"}>
            <DiRedis fontSize={96} color="#D82C20" />
          </SkillCard>
          <SkillCard skill={"Git"}>
            <FaGithub fontSize={96} color="#181717" />
          </SkillCard>
          <SkillCard skill={"Python"}>
            <FaPython fontSize={96} color="#306998" />
          </SkillCard>
          <SkillCard skill={"Kafka"}>
            <SiApachekafka fontSize={96} color="#000000" />
          </SkillCard>
          <SkillCard skill={"My SQL"}>
            <DiMysql fontSize={96} color="#000000" />
          </SkillCard>
          <SkillCard skill={"Java"}>
            <FaJava fontSize={96} color="lightcyan" />
          </SkillCard>
        </div>
      </div>
    </div>
  );
};

export default SkillzSection;
