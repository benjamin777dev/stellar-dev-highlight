
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <header 
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300',
        scrolled ? 'bg-background/90 backdrop-blur-md py-2 shadow-md' : 'py-4'
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <a href="#home" className="text-xl font-bold text-foreground">
            <span className="text-accent">Dev</span>Folio
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a onClick={() => scrollToSection('about')} className="nav-link cursor-pointer">About</a>
            <a onClick={() => scrollToSection('skills')} className="nav-link cursor-pointer">Skills</a>
            <a onClick={() => scrollToSection('projects')} className="nav-link cursor-pointer">Projects</a>
            <a onClick={() => scrollToSection('contact')} className="nav-link cursor-pointer">Contact</a>
            <Button variant="outline" size="sm" className="ml-4">
              <a href="#contact">Hire Me</a>
            </Button>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-foreground"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div className={cn(
        'md:hidden fixed inset-0 bg-background/95 backdrop-blur-sm z-40 transition-all duration-300 ease-in-out',
        isMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'
      )}>
        <div className="flex flex-col items-center justify-center h-full space-y-8 text-lg">
          <a onClick={() => scrollToSection('about')} className="nav-link cursor-pointer">About</a>
          <a onClick={() => scrollToSection('skills')} className="nav-link cursor-pointer">Skills</a>
          <a onClick={() => scrollToSection('projects')} className="nav-link cursor-pointer">Projects</a>
          <a onClick={() => scrollToSection('contact')} className="nav-link cursor-pointer">Contact</a>
          <Button variant="default">
            <a href="#contact">Hire Me</a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
