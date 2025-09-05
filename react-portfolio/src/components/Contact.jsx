import React from 'react';
import { Card } from './ui/Card';
import { MailIcon, LinkedInIcon, GithubIcon } from './Icons';

const Contact = () => (
    <section id="contact" className="bg-muted/30 py-20">
        <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto space-y-12">
                <div className="text-center space-y-4">
                    <h2 className="text-3xl md:text-4xl font-medium">Let's Work Together</h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">I'm currently seeking internship opportunities and freelance projects. Let's create something amazing together!</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Card onClick={() => window.open('mailto:alex.chen@email.com', '_blank')} className="group hover:shadow-md transition-shadow cursor-pointer"><div className="p-6 text-center space-y-4"><div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors"><MailIcon /></div><div><h3 className="font-medium mb-1">Email</h3><p className="text-sm text-muted-foreground">alex.chen@email.com</p></div></div></Card>
                    <Card onClick={() => window.open('https://linkedin.com', '_blank')} className="group hover:shadow-md transition-shadow cursor-pointer"><div className="p-6 text-center space-y-4"><div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors"><LinkedInIcon /></div><div><h3 className="font-medium mb-1">LinkedIn</h3><p className="text-sm text-muted-foreground">linkedin.com/in/alexchen</p></div></div></Card>
                    <Card onClick={() => window.open('https://github.com', '_blank')} className="group hover:shadow-md transition-shadow cursor-pointer"><div className="p-6 text-center space-y-4"><div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors"><GithubIcon /></div><div><h3 className="font-medium mb-1">GitHub</h3><p className="text-sm text-muted-foreground">github.com/alexchen</p></div></div></Card>
                </div>
            </div>
        </div>
    </section>
);

export default Contact;
