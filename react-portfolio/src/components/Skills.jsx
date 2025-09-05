import React from 'react';
import Card from './ui/Card.jsx';
import Badge from './ui/Badge.jsx';
import { DesignToolsIcon, DevelopmentIcon } from './Icons.jsx';

const Skills = () => (
    <section id="skills" className="container mx-auto px-6 py-20">
        <div className="space-y-12">
            <div className="text-center space-y-4">
                <h2 className="text-3xl md:text-4xl font-medium">Skills & Expertise</h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">A blend of design thinking and technical implementation to create meaningful user experiences</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="hover:shadow-md transition-shadow">
                    <div className="p-6 space-y-4">
                        <div className="flex items-center space-x-3">
                            <div className="p-2 bg-primary/10 rounded-lg text-primary"><DesignToolsIcon /></div>
                            <h3 className="text-lg font-medium">Design Tools</h3>
                        </div>
                        <div className="flex flex-wrap gap-2">{["Figma", "Adobe XD", "Sketch"].map(s => <Badge key={s}>{s}</Badge>)}</div>
                    </div>
                </Card>
                <Card className="hover:shadow-md transition-shadow">
                    <div className="p-6 space-y-4">
                        <div className="flex items-center space-x-3">
                            <div className="p-2 bg-primary/10 rounded-lg text-primary"><DevelopmentIcon /></div>
                            <h3 className="text-lg font-medium">Development</h3>
                        </div>
                        <div className="flex flex-wrap gap-2">{["React", "TypeScript", "Tailwind CSS"].map(s => <Badge key={s}>{s}</Badge>)}</div>
                    </div>
                </Card>
            </div>
        </div>
    </section>
);

export default Skills;
