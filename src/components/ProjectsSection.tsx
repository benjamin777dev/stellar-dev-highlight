
import React, { useState } from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  demo?: string;
  featured: boolean;
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A full-featured e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product catalog, shopping cart, payment processing, and order management.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80",
    tags: ["React", "Node.js", "MongoDB", "Express", "Redux"],
    github: "https://github.com",
    demo: "https://demo.com",
    featured: true
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management application that allows teams to organize projects, assign tasks, track progress, and communicate effectively.",
    image: "https://images.unsplash.com/photo-1555421689-3f034debb7a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    tags: ["TypeScript", "React", "Firebase", "Tailwind CSS"],
    github: "https://github.com",
    demo: "https://demo.com",
    featured: true
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "A weather dashboard that displays current weather conditions and forecasts for multiple locations using data from a weather API.",
    image: "https://images.unsplash.com/photo-1532178910-7815d6919875?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
    tags: ["React", "API Integration", "Chart.js"],
    github: "https://github.com",
    featured: false
  },
  {
    id: 4,
    title: "Personal Finance Tracker",
    description: "An application that helps users track their income, expenses, and savings goals with interactive charts and reports.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    tags: ["Next.js", "PostgreSQL", "Prisma", "Recharts"],
    github: "https://github.com",
    demo: "https://demo.com",
    featured: true
  },
  {
    id: 5,
    title: "Recipe Sharing Platform",
    description: "A community-driven platform where users can discover, share, and rate recipes, as well as create shopping lists from ingredients.",
    image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1536&q=80",
    tags: ["React", "Node.js", "GraphQL", "MongoDB"],
    github: "https://github.com",
    featured: false
  },
  {
    id: 6,
    title: "Fitness Tracking App",
    description: "An application that allows users to track workouts, set fitness goals, and visualize progress over time.",
    image: "https://images.unsplash.com/photo-1594882645126-14020914d58d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1485&q=80",
    tags: ["React Native", "Firebase", "Redux"],
    github: "https://github.com",
    demo: "https://demo.com",
    featured: false
  }
];

const ProjectsSection = () => {
  const [filter, setFilter] = useState<'all' | 'featured'>('all');
  const filteredProjects = filter === 'all' ? projects : projects.filter(project => project.featured);
  
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl font-bold mb-4 inline-block border-b-2 border-accent pb-2">My Projects</h2>
          <div className="w-20 h-1 bg-accent mx-auto mt-2"></div>
          <p className="text-foreground/70 mt-6 max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each project is a unique piece
            of development that showcases different skills and technologies.
          </p>
        </div>
        
        <div className="flex justify-center mb-10">
          <div className="inline-flex rounded-md shadow-sm">
            <button
              onClick={() => setFilter('all')}
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-l-md",
                filter === 'all' 
                  ? "bg-accent text-white" 
                  : "bg-card hover:bg-accent/10 text-foreground"
              )}
            >
              All Projects
            </button>
            <button
              onClick={() => setFilter('featured')}
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-r-md",
                filter === 'featured' 
                  ? "bg-accent text-white" 
                  : "bg-card hover:bg-accent/10 text-foreground"
              )}
            >
              Featured
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card 
              key={project.id}
              className="bg-card border border-border/40 overflow-hidden hover:shadow-lg transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.slice(0, 3).map((tag, i) => (
                    <Badge key={i} variant="secondary" className="font-mono text-xs">
                      {tag}
                    </Badge>
                  ))}
                  {project.tags.length > 3 && (
                    <Badge variant="outline" className="font-mono text-xs">
                      +{project.tags.length - 3}
                    </Badge>
                  )}
                </div>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-foreground/70 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    {project.github && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-foreground/70 hover:text-accent transition-colors"
                        aria-label="GitHub Repository"
                      >
                        <Github size={20} />
                      </a>
                    )}
                    {project.demo && (
                      <a 
                        href={project.demo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-foreground/70 hover:text-accent transition-colors"
                        aria-label="Live Demo"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                  <Button variant="ghost" size="sm" className="group">
                    <a href="#" className="flex items-center">
                      Details
                      <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="group">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center"
            >
              View More Projects on GitHub
              <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
