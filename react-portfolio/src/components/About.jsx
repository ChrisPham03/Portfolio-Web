import React from 'react';
import { Card } from './ui/Card';

const About = () => (
    <section id="about" className="bg-muted/30 py-20">
        <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h2 className="text-3xl md:text-4xl font-medium">About Me</h2>
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                        <p>I'm a Computer Science student at Stanford University with a passion for creating digital experiences that make technology more accessible and enjoyable for everyone.</p>
                        <p>My journey in design began during my freshman year when I discovered the perfect intersection between my technical skills and creative interests.</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <Card><div className="p-6 text-center space-y-2"><div className="text-2xl font-medium text-primary">3+</div><p className="text-sm text-muted-foreground">Years of Design</p></div></Card>
                    <Card><div className="p-6 text-center space-y-2"><div className="text-2xl font-medium text-primary">15+</div><p className="text-sm text-muted-foreground">Projects Completed</p></div></Card>
                </div>
            </div>
        </div>
    </section>
);

export default About;
