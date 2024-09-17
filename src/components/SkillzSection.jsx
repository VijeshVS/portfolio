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
        <h1 className="ml-3">Skills &</h1>
        <h1 className="ml-1 bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-400 text-transparent bg-clip-text">
          Technologies
        </h1>
      </div>
      <div className="w-[330px] rounded-xl lg:w-[800px] mx-auto p-8 bg-violet-800">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <SkillCard skill={"React"}>
            <img src="./icons/react.svg" className="h-24 w-24"/>
          </SkillCard>
          <SkillCard skill={"NextJS"}>
          <img src="./icons/nextjs.svg" className="h-24 w-24"/>
          </SkillCard>
          <SkillCard skill={"Tailwind"}>
          <img src="./icons/tailwind.svg" className="h-24 w-24"/>
          </SkillCard>
          <SkillCard skill={"Git"}>
          <img src="./icons/git.svg" className="h-24 w-24"/>
          </SkillCard>
          <SkillCard skill={"NodeJS"}>
          <img src="./icons/nodejs.svg" className="h-24 w-24"/>
          </SkillCard>
          <SkillCard skill={"MongoDB"}>
          <img src="./icons/mongodb.svg" className="h-24 w-24"/>
          </SkillCard>
          <SkillCard skill={"Firebase"}>
          <img src="./icons/firebase.svg" className="h-24 w-24"/>
          </SkillCard>
          <SkillCard skill={"Studio"}>
          <img src="./icons/andr.svg" className="h-24 w-24"/>
          </SkillCard>
          <SkillCard skill={"Docker"}>
          <img src="./icons/docker.svg" className="h-24 w-24"/>
          </SkillCard>
          <SkillCard skill={"Redis"}>
          <img src="./icons/redis.svg" className="h-24 w-24"/>
          </SkillCard>
          <SkillCard skill={"Kafka"}>
          <img src="./icons/kafka.svg" className="h-24 w-24"/>
          </SkillCard>
          <SkillCard skill={"Postgres"}>
          <img src="./icons/postgres.svg" className="h-24 w-24"/>
          </SkillCard>
        </div>
      </div>
    </div>
  );
};

export default SkillzSection;
