import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import IconCloudDemo from "@/components/globe";
import { Code2, Database, Layout, Cpu, Cloud } from "lucide-react";

import { FaReact, FaPython, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiVite } from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";
import { BsFileEarmarkCode } from "react-icons/bs";

const SkillCard = ({ icon: Icon, title, skills, color }) => (
  <Card className="group relative overflow-hidden bg-gray-900/80 border-gray-700 hover:scale-[1.02] transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20">
    <CardContent className="p-6 relative z-10">
      <div className="flex items-center gap-4 mb-6">
        <div className={`p-3 rounded-xl bg-gray-800/50 ${color}`}>
          <Icon className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold text-white">{title}</h3>
      </div>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <Badge
            key={index}
            variant="outline"
            className="bg-gray-800 text-gray-100 border-gray-600 flex items-center gap-2 py-2 px-3"
          >
            {skill.icon}
            <span>{skill.name}</span>
          </Badge>
        ))}
      </div>
    </CardContent>
  </Card>
);

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Programming Languages",
      color: "text-blue-400",
      skills: [
        { name: "Java", icon: <BsFileEarmarkCode className="w-4 h-4 text-red-500" /> },
        { name: "C++", icon: <BsFileEarmarkCode className="w-4 h-4 text-blue-500" /> },
        { name: "Python", icon: <FaPython className="w-4 h-4 text-[#3776AB]" /> },
      ],
    },
    {
      icon: Layout,
      title: "Web Development",
      color: "text-green-400",
      skills: [
        { name: "React", icon: <FaReact className="w-4 h-4 text-[#61DAFB]" /> },
        { name: "HTML", icon: <BsFileEarmarkCode className="w-4 h-4 text-orange-500" /> },
        { name: "CSS", icon: <BsFileEarmarkCode className="w-4 h-4 text-blue-500" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="w-4 h-4 text-[#38B2AC]" /> },
        { name: "JavaScript", icon: <BsFileEarmarkCode className="w-4 h-4 text-yellow-400" /> },
      ],
    },
   {
  icon: Database,
  title: "Databases",
  color: "text-purple-400",
  skills: [
    { name: "MySQL", icon: <Database className="w-4 h-4 text-blue-400" /> },
    { name: "SQL", icon: <Database className="w-4 h-4 text-blue-300" /> },
    { name: "MongoDB", icon: <Database className="w-4 h-4 text-green-400" /> },
  ],
},
    {
      icon: Cpu,
      title: "AI & Data",
      color: "text-pink-400",
      skills: [
        { name: "Machine Learning", icon: <Cpu className="w-4 h-4 text-pink-400" /> },
        { name: "Data Analysis", icon: <Cpu className="w-4 h-4 text-pink-300" /> },
        { name: "Power BI", icon: <Cpu className="w-4 h-4 text-yellow-400" /> },
      ],
    },
    {
  icon: Cloud,
  title: "Cloud & DevOps",
  color: "text-orange-400",
  skills: [
    { name: "AWS", icon: <Cloud className="w-4 h-4 text-yellow-400" /> },
    { name: "Docker", icon: <Cloud className="w-4 h-4 text-blue-400" /> },
    { name: "Containers", icon: <Cloud className="w-4 h-4 text-cyan-400" /> },
    { name: "Kubernetes", icon: <Cloud className="w-4 h-4 text-purple-400" /> },
    { name: "Git", icon: <FaGitAlt className="w-4 h-4 text-[#F05032]" /> },
    { name: "GitHub", icon: <FaGitAlt className="w-4 h-4 text-white" /> },
    { name: "VS Code", icon: <TbBrandVscode className="w-4 h-4 text-[#007ACC]" /> },
    { name: "Vite", icon: <SiVite className="w-4 h-4 text-[#646CFF]" /> },
  ],
},
  ];

  return (
    <main className="pt-15 lg:pt-0 text-white min-h-screen bg-[#04081A] relative">
      <section className="container mx-auto px-4 py-11">
        <div className="flex justify-center items-center mb-10">
          <IconCloudDemo />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={index}
              icon={category.icon}
              title={category.title}
              skills={category.skills}
              color={category.color}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default SkillsSection;