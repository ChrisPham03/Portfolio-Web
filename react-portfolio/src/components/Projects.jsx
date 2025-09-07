import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
    const projectsData = [
         { title: "HandyMan Hub", description: "A comprehensive mobile application for tracking personal environmental impact...", image: "/images/HandyHub.png", tags: ["Mobile UI", "React Native", "Figma", "User Research"], liveUrl: "https://example.com", githubUrl: "https://github.com"},
         { title: "Recipe Sharing Platform", description: "Social platform for sharing and discovering recipes...", image: "/images/AiChatBot.png", tags: ["UI/UX", "Prototyping", "User Testing", "Figma"], liveUrl: "https://example.com" },
         { title: "Analytics Dashboard", description: "Clean and modern dashboard design for data visualization...", image: "/images/QuickInfo.png", tags: ["Web UI", "React", "Data Viz", "Charts"], liveUrl: "https://example.com", githubUrl: "https://github.com" },
         { title: "Recipe Sharing Platform", description: "Social platform for sharing and discovering recipes...", image: "/images/Schedule.png", tags: ["UI/UX", "Prototyping", "User Testing", "Figma"], liveUrl: "https://example.com" },
        { title: "Recipe Sharing Platform", description: "Social platform for sharing and discovering recipes...", image: "/images/BlindSocial.png", tags: ["UI/UX", "Prototyping", "User Testing", "Figma"], liveUrl: "https://example.com" },
        { title: "Recipe Sharing Platform", description: "Social platform for sharing and discovering recipes...", image: "/images/SalonCheckin.png", tags: ["UI/UX", "Prototyping", "User Testing", "Figma"], liveUrl: "https://example.com" },
         
    ];
    return (
        <section id="projects" className="container mx-auto px-8 py-20">
            <div className="space-y-12">
                <div className="text-center space-y-4">
                    <h2 className="text-3xl md:text-4xl font-medium ">
                        <span className="bg-gradient-to-r from-green to-primary bg-clip-text text-transparent">
                            Featured Project
                        </span>
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">A collection of UI/UX design projects showcasing my approach to creating user-centered digital experiences</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projectsData.map(p => <ProjectCard key={p.title} {...p} />)}
                </div>
            </div>
        </section>
    );
};

export default Projects;
