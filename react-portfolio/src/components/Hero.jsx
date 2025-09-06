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
<section className="w-full mx-auto px-6 py-20 md:py-28 bg-black">
  <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
    {/* LEFT SIDE */}
    <div className="space-y-6 text-white">
      <div className="space-y-4">
        <Badge 
          variant="secondary" 
          className="w-fit bg-gray-800 text-black"
        >
          Available for Internships (4-6 months)
        </Badge>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-tight">
          Designing digital experiences that{' '}
          <span className="bg-gradient-to-r from-primary to-green bg-clip-text text-transparent">
            delight users
          </span>
        </h1>

        <p className="text-lg text-gray-300 max-w-lg">
          Computer Science student passionate about creating intuitive and beautiful user interfaces. 
          Currently pursuing my degree while building meaningful design solutions.
        </p>
      </div>

      <div className="flex flex-row gap-4">
        <Button 
          onClick={scrollToProjects} 
          size="lg" 
          className="w-fit bg-white text-black hover:bg-gray-200 hover:text-white"
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
    <div className="flex justify-center lg:justify-end">
      <div className="relative">
        <div className="w-80 h-80 rounded-full bg-gradient-to-br from-primary/30 to-accent/60 flex items-center justify-center">
          <div className="w-80 h-80 rounded-full bg-black border-2 border-gray-700 flex items-center justify-center overflow-hidden">
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
