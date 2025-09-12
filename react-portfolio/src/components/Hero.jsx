import Badge from './ui/Badge.jsx';
import Button from './ui/Button.jsx';

export default function Hero() {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
<section
  className="w-full mx-auto px-6 py-20 md:py-28 section-group"
  style={{
    background: ' linear-gradient(280deg, rgba(255, 255, 255, 0.1) 42.14%, rgba(255, 255, 255, 0.4) 83.36%, rgba(0, 0, 0, 0.2) 100%), linear-gradient(0deg, #000000, #000000)'
  }}
>
  <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
    {/* LEFT SIDE */}
    <div className="space-y-6 text-white  section-group-hover:scale-105 section-group-hover:drop-shadow-lg">
      <div className="space-y-4">
        <Badge 
          variant="secondary" 
          className="w-fit bg-gray-800 text-black "
        >
          Available for Internships (4-6 months)
        </Badge>

        <h1 className="text-4xl md:text-5xl lg:text-5xl font-medium leading-tight">
          <span className=" inline-block transition-transform duration-300 section-group-hover:scale-105 section-group-hover:drop-shadow-lg">
            Designing digital experiences that{' '}
          <span className="bg-gradient-to-r from-secondary to-white bg-clip-text text-transparent">
            delight users
          </span>
        </span>
        </h1>

        <p className="text-lg text-gray-300 max-w-lg">
          A Computer Science student driven by innovation and creativity. My work reflects a passion for exploring new ideas and transforming them into thoughtful, functional solutions.
        </p>
      </div>

      <div className="flex flex-row gap-4 section-group-hover:scale-105 section-group-hover:drop-shadow-lg">
        <Button 
          onClick={scrollToProjects} 
          size="lg" 
          className="w-fit bg-gradient-to-r from-primary to-secondary text-white hover:from-regularCyan hover:to-veryLightBlue"
        >
          View My Work
        </Button>
        <Button 
          variant="outline" 
          size="lg" 
          className="w-fit border-gray-400 text-gray-200 hover:accent-900 hover:text-primary"
          onClick={() => window.open('mailto:alex.chen@email.com', '_blank')}
        >
          Contact Me
        </Button>
      </div>
    </div>

    {/* RIGHT SIDE */}
    <div className="flex justify-center lg:justify-end section-group-hover:scale-105 section-group-hover:drop-shadow-lg">
      <div className="relative">
        <div className="w-80 h-80 rounded-full bg-gradient-to-br from-primary/30 to-accent/60 flex items-center justify-center">
          <div className="w-80 h-80 rounded-full bg-black border-primary border-8 border-white flex items-center justify-center overflow-hidden">
            <img 
              src="/images/chris.png" 
              alt="Chris Pham" 
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>

        {/* accent bubbles *<div className="absolute -top-4 -right-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
          <span className="text-white text-sm"></span>
        </div>
        <div className="absolute -bottom-2 -left-4 w-10 h-10 bg-accent rounded-full flex items-center justify-center">
          <span className="text-white text-sm"></span>
        </div> */}
      </div>
    </div>
  </div>
</section>

  );
}
