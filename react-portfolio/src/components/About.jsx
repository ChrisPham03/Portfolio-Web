import Card from './ui/Card.jsx';

export default function About() {
  return (
    <section id="about" className="bg-muted/30 py-20 section-group">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-medium"><span className="bg-gradient-to-r from-green to-secondary bg-clip-text text-transparent inline-block transition-transform duration-300 section-group-hover:scale-110 section-group-hover:drop-shadow-lg">About Me</span></h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed section-group-hover:scale-105 section-group-hover:drop-shadow-lg ">
              <p >
                <span className="bg-black bg-clip-text text-transparent  section-group-hover:scale-105 section-group-hover:text-secondary">Currently a Computer Science student at Carleton University, my passion for this 
                work truly came alive during my design internship. Seeing a client's genuine happiness
                 with a mockup I created was a defining moment, and it motivates me to always put the user first.
                 </span>
              </p>
              <p>
                 <span className="bg-black bg-clip-text text-transparent section-group-hover:scale-105 section-group-hover:text-secondary">I thrive on learning and am currently focused on improving the designer-to-developer handoff process.
                 I'm looking for an opportunity to contribute my skills in React, Next.js, and Figma to a team that
                values clean code and great design.
                 </span>
              </p>
              <p>
                 <span className="bg-black bg-clip-text text-transparent section-group-hover:scale-105 section-group-hover:text-secondary"> 
                Outside of tech, I’m a huge sports lover—spending my free time playing soccer, volleyball, and basketball. 
                Whether you want to talk about building beautiful UIs, or either the latest Manchester United match (must be Manchester United !), or a potential project,
                 I'd love to connect!
                 </span>
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 section-group-hover:scale-105">
            <Card>
              <div className="p-6 text-center space-y-2 section-group-hover:shadow-md">
                <div className="text-2xl font-medium text-primary">3rd</div>
                <p className="text-sm text-muted-foreground">Study Year</p>
              </div>
            </Card>
            <Card>
              <div className="p-6 text-center space-y-2 section-group-hover:shadow-md">
                <div className="text-2xl font-medium text-primary">3+</div>
                <p className="text-sm text-muted-foreground">Projects Completed</p>
              </div>
            </Card>
            <Card>
              <div className="p-6 text-center space-y-2 section-group-hover:shadow-md">
                <div className="text-2xl font-medium text-primary">1</div>
                <p className="text-sm text-muted-foreground">Design Internships</p>
              </div>
            </Card>
            <Card>
              <div className="p-6 text-center space-y-2 section-group-hover:shadow-md">
                <div className="text-2xl font-medium text-primary">98%</div>
                <p className="text-sm text-muted-foreground">Client Satisfaction</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

