
import React from 'react';
import { cn } from '@/lib/utils';

interface Skill {
  name: string;
  level: number;
  icon: string;
}

const frontendSkills: Skill[] = [
  { name: "React", level: 90, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "TypeScript", level: 85, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "Next.js", level: 80, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "Tailwind CSS", level: 90, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" },
];

const backendSkills: Skill[] = [
  { name: "Node.js", level: 85, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Express", level: 80, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  { name: "MongoDB", level: 75, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "PostgreSQL", level: 70, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
];

const otherSkills: Skill[] = [
  { name: "Git", level: 90, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "Docker", level: 65, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "AWS", level: 60, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" },
  { name: "GraphQL", level: 75, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 bg-card/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl font-bold mb-4 inline-block border-b-2 border-accent pb-2">My Skills</h2>
          <div className="w-20 h-1 bg-accent mx-auto mt-2"></div>
          <p className="text-foreground/70 mt-6 max-w-2xl mx-auto">
            I've worked with a variety of technologies in the web development world.
            Here are the main skills and technologies I use to bring projects to life.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <SkillCategory title="Frontend" skills={frontendSkills} delay={200} />
          <SkillCategory title="Backend" skills={backendSkills} delay={400} />
          <SkillCategory title="Other" skills={otherSkills} delay={600} />
        </div>
      </div>
    </section>
  );
};

interface SkillCategoryProps {
  title: string;
  skills: Skill[];
  delay: number;
}

const SkillCategory = ({ title, skills, delay }: SkillCategoryProps) => {
  return (
    <div 
      className="bg-card border border-border/40 rounded-lg p-6 shadow-lg animate-fade-in"
      style={{ animationDelay: `${delay}ms` }}
    >
      <h3 className="text-xl font-semibold mb-6 text-center">{title}</h3>
      <div className="space-y-6">
        {skills.map((skill, index) => (
          <div key={index} className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <img 
                  src={skill.icon} 
                  alt={skill.name} 
                  className="w-6 h-6 mr-3"
                />
                <span>{skill.name}</span>
              </div>
              <span className="text-sm text-foreground/70">{skill.level}%</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2.5">
              <div 
                className={cn(
                  "h-2.5 rounded-full bg-accent transition-all duration-1000 ease-out",
                  skill.level > 80 ? "bg-accent" : skill.level > 60 ? "bg-blue-500" : "bg-blue-400"
                )}
                style={{ width: `${skill.level}%`, transitionDelay: `${index * 100 + 500}ms` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
