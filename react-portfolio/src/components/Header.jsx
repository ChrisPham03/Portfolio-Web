import { useState, useEffect } from 'react';
import Button from './ui/Button';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // We'll change the color after scrolling 50px
      if (window.scrollY > 580) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Add the event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Dynamically set text color based on scroll position
  const headerClass = isScrolled 
    ? 'text-foreground' 
    : 'text-white';

  return (
    <header className={`fixed top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b transition-colors duration-300 ${headerClass}`}>
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <h1 className="text-lg font-medium">Chris Pham</h1>
            <span className="text-muted-foreground text-sm">UI/UX Enthusiast</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('projects')}
              className="hover:text-primary transition-colors"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="hover:text-primary transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className="hover:text-primary transition-colors"
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="hover:text-primary transition-colors"
            >
              Contact
            </button>
          </div>

          <Button 
            onClick={() => scrollToSection('contact')}
            variant="default"
            size="sm"
            className="hidden md:inline-flex w-fit bg-white text-black 
  hover:bg-gradient-to-r hover:from-regularCyan hover:to-veryLightBlue 
  hover:text-white transition-colors"

          >
            Get In Touch
          </Button>
        </nav>
      </div>
    </header>
  );
}

