import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
    const projectsData = [
         { title: "EcoTrack Mobile App", description: "A comprehensive mobile application for tracking personal environmental impact...", image: "https://placehold.co/1080x400/1f2937/ffffff?text=EcoTrack+App", tags: ["Mobile UI", "React Native", "Figma", "User Research"], liveUrl: "https://example.com", githubUrl: "https://github.com", isLarge: true },
         { title: "Analytics Dashboard", description: "Clean and modern dashboard design for data visualization...", image: "https://placehold.co/600x400/374151/ffffff?text=Analytics+Dashboard", tags: ["Web UI", "React", "Data Viz", "Charts"], liveUrl: "https://example.com", githubUrl: "https://github.com" },
         { title: "Recipe Sharing Platform", description: "Social platform for sharing and discovering recipes...", image: "https://placehold.co/600x400/4b5563/ffffff?text=Recipe+Platform", tags: ["UI/UX", "Prototyping", "User Testing", "Figma"], liveUrl: "https://example.com" },
    ];
    return (
        <section id="projects" className="container mx-auto px-6 py-20">
            <div className="space-y-12">
                <div className="text-center space-y-4">
                    <h2 className="text-3xl md:text-4xl font-medium">Featured Projects</h2>
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
