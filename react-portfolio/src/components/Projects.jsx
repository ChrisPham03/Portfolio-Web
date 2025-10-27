import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
    const projectsData = [
         {
  "title": "HandyMan Hub",
  "description": "An end-to-end mobile UI/UX case study covering the user journey from job searching to direct messaging, complete with a comprehensive design system and reusable component library crafted in Figma.",
  "image": "/images/HandyHub.png",
  "tags": ["Mobile UI", "Figma", "UI/UX Case Study"],
  "liveUrl": "https://www.figma.com/proto/rclZ9suiVYdj5Z4AUf75Z3/Handy?node-id=72-9155\&t=dQOk1KZPtijJ16Rr-1\&scaling=scale-down\&content-scaling=fixed\&page-id=3\%3A25",
},
         {
  "title": "Full-Stack AI Salon Assistant",
  "description": "A full-stack, multi-service AI application featuring a containerized Rasa backend, multiple React frontends, and sophisticated Python Custom Actions to handle complex business logic.",
  "image": "/images/AiChatBot.png",
  "tags": ["Full-Stack", "AI", "Rasa", "Python", "React", "Docker"],
  "githubUrl": "https://github.com/ChrisPham03/Quick-Info"
},
         {
  "title": "Quick Info — Lead Generation CRM",
  "description": "A full-stack, web application for lead generation, featuring a React frontend, Node.js backend, real-time business discovery via the Google Maps API, and a server-side Redis cache for optimized performance.",
  "image": "/images/Quick.png",
  "tags": ["Full-Stack", "Next.js", "PostgreSQL", "Redis", "Google Maps API"],
  "liveUrl": "https://quick-info-crm.vercel.app/",
  "githubUrl": "https://github.com/ChrisPham03/Quick-Info"
},
        {
  "title": "Confidential Booking Schedule App",
  "description": "As a UI/UX Design Intern, I contributed to a booking schedule application. While I cannot share the UI due to a non-disclosure agreement, I am happy to discuss the design process, including user research, prototyping, and user testing.",
  "image": "/images/Schedule.png",
  "tags": ["UI/UX", "Prototyping", "User Research", "Figma", "Confidential"],
  "liveUrl": "N/A"
},
       {
  "title": "Blind Social Platform",
  "description": "My first experience with UI design, this full-stack social media app was built as a team practice project. It inspired my passion for innovation and creativity in UI, where I was responsible for designing the user experience in Figma and creating a reusable design system.",
  "image": "/images/BlindSocial.png",
  "tags": ["Full-Stack", "Next.js", "MongoDB", "Figma", "UI/UX"],
  "githubUrl": "https://github.com/BaoTran685/Social-Platform"
},
       {
  "title": "Customer Check-In and Booking App Interface",
  "description": "A responsive UI/UX component for a service booking app. I designed and implemented screens for customer check-in, registration, and service selection, incorporating animated advertisements and interactive elements.",
  "image": "/images/SalonCheckin.png",
  "tags": ["Flutter", "Dart", "UI/UX", "Mobile"],
  "githubUrl": "https://github.com/ChrisPham03/Booking-App"
},
         
    ];
    return (
       <section id="projects" className="container mx-auto px-8 py-20 section-group">
    <div className="space-y-12">
        <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-medium ">
                <span className=" bg-gradient-to-r from-secondary to-green bg-clip-text text-transparent inline-block transition-transform duration-300 section-group-hover:scale-110 section-group-hover:drop-shadow-lg">
                    Featured Project
                </span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-4xl mx-auto section-group-hover:scale-105 section-group-hover:text-secondary">
                A collection of UI/UX design projects showcasing my approach to creating user-centered digital experiences
            </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projectsData.map(p => <ProjectCard key={p.title} {...p} />)}
        </div>
    </div>
</section>
    );
};

export default Projects;
