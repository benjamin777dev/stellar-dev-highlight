
import React from 'react';
import { ArrowDownCircle, Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-background to-background/80 z-10"></div>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-setting-up-a-custom-computer-close-up-view-41710-large.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      
      <div className="container relative z-10 mx-auto px-4 md:px-6 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2 animate-fade-in" style={{ animationDelay: "200ms" }}>
              <p className="text-accent font-mono">Hello, my name is</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                John Doe
              </h1>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground/70 tracking-tight">
                I build things for the web.
              </h2>
            </div>
            
            <p className="text-foreground/70 text-lg max-w-xl animate-fade-in" style={{ animationDelay: "400ms" }}>
              I'm a fullstack developer specializing in building (and occasionally designing) 
              exceptional digital experiences. Currently, I'm focused on building accessible, 
              user-friendly applications at <span className="text-accent">Company XYZ</span>.
            </p>
            
            <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: "600ms" }}>
              <Button size="lg">
                <a href="#projects">View My Work</a>
              </Button>
              <Button variant="outline" size="lg">
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
            
            <div className="flex items-center space-x-5 pt-4 animate-fade-in" style={{ animationDelay: "800ms" }}>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-accent transition-colors">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-accent transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-accent transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div className="lg:col-span-5 hidden lg:flex justify-center animate-float">
            <div className="relative w-80 h-80">
              <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-primary/20 rounded-full blur-3xl opacity-50"></div>
              <div className="relative z-10 w-full h-full rounded-full border border-foreground/10 flex items-center justify-center bg-card/30 backdrop-blur-sm">
                <div className="text-center">
                  <div className="font-mono text-accent text-sm">&lt;code&gt;</div>
                  <div className="font-bold text-2xl my-2">Fullstack Developer</div>
                  <div className="font-mono text-accent text-sm">&lt;/code&gt;</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" aria-label="Scroll down">
            <ArrowDownCircle className="text-accent" size={32} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
