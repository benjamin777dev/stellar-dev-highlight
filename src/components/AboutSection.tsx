
import React from 'react';
import { Button } from '@/components/ui/button';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-background to-card/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl font-bold mb-4 inline-block border-b-2 border-accent pb-2">About Me</h2>
          <div className="w-20 h-1 bg-accent mx-auto mt-2"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: "200ms" }}>
            <h3 className="text-2xl font-semibold">My Background</h3>
            <p className="text-foreground/80 leading-relaxed">
              Hello! I'm John, a passionate fullstack developer with over 5 years of experience building web applications.
              My journey in software development started during my computer science studies, where I fell in love with creating
              things that live on the internet.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              Fast-forward to today, I've had the privilege of working at a startup, a large corporation, and a student-led
              design studio. My main focus these days is building accessible, inclusive products and digital experiences
              for various clients.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              When I'm not coding, you'll find me hiking in the mountains, experimenting with new recipes in the kitchen,
              or engaging in community tech meetups. I'm always interested in new opportunities and challenges!
            </p>
            
            <div className="flex gap-4 pt-4">
              <Button variant="default">
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">Download Resume</a>
              </Button>
            </div>
          </div>
          
          <div className="relative animate-fade-in" style={{ animationDelay: "400ms" }}>
            <div className="absolute inset-0 bg-accent/10 rounded-lg transform rotate-3"></div>
            <div className="relative p-1 bg-card border border-foreground/10 rounded-lg shadow-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1555952517-2e8e729e0b44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="John Doe" 
                className="w-full h-auto rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <div className="text-sm font-mono bg-card/80 backdrop-blur-sm px-3 py-1 rounded-full inline-block">
                  <span className="text-accent">function</span> <span className="text-foreground">developAwesomeApps</span>() &#123; ... &#125;
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
