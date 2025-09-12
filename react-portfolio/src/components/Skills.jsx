import React from 'react';
import Card from './ui/Card.jsx';
import Badge from './ui/Badge.jsx';
import { DesignToolsIcon, DevelopmentIcon, FrameworkIcon, CertificationIcon} from './Icons.jsx';
import { SiPython, SiOpenjdk, SiTypescript, SiJavascript, SiHtml5, SiCss3, SiReact, SiFigma, SiNextdotjs} from "react-icons/si";
import { FaFlask, FaRobot, FaNodeJs, FaAws } from "react-icons/fa";
import TechBadge from "./ui/TechBadge";

const Skills = () => (
    <section id="skills" className="container mx-auto px-6 py-20 section-group">
        <div className="space-y-12">
            <div className="text-center space-y-4">
                <h2 className="text-3xl md:text-4xl font-medium "> <span className="bg-gradient-to-r from-secondary to-green bg-clip-text text-transparent inline-block transition-transform duration-300 section-group-hover:scale-110 section-group-hover:drop-shadow-lg">
                            Skills
                        </span></h2>
                <p className="text-muted-foreground text-lg max-w-4xl mx-auto section-group-hover:scale-105 section-group-hover:text-secondary">A blend of design thinking and technical implementation to create meaningful user experiences</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 section-group-hover:scale-105">
                <Card className="hover:shadow-md transition-shadow">
                    <div className="p-6 space-y-4">
                        <div className="flex items-center space-x-3">
                            <div className="p-2 bg-primary/10 rounded-lg text-primary"><DesignToolsIcon /></div>
                            <h3 className="text-lg font-medium">Design Tools</h3>
                        </div>
                        <div className="flex flex-wrap gap-2"><TechBadge label="Figma" color="#000000" logo={SiFigma} /></div>
                    </div>
                </Card>
                <Card className="hover:shadow-md transition-shadow">
                    <div className="p-6 space-y-4">
                        <div className="flex items-center space-x-3">
                            <div className="p-2 bg-primary/10 rounded-lg text-primary"><DevelopmentIcon /></div>
                            <h3 className="text-lg font-medium">Development</h3>
                        </div>
                        <div className="flex flex-wrap gap-2"> <TechBadge label="React" color="#61DAFB" logo={SiReact} textColor="#000" logoColor="#000" />
  <TechBadge label="JavaScript" color="#F7DF1E" logo={SiJavascript} textColor="#000" logoColor="#000" />
  <TechBadge label="TypeScript" color="#007ACC" logo={SiTypescript} />
  <TechBadge label="Tailwind CSS" color="#38BDF8" />
  <TechBadge label="Python" color="#3776AB" logo={SiPython} />
  <TechBadge label="C/C++" color="#00599C" />
  <TechBadge label="Dart" color="#0175C2" />
  <TechBadge label="CSS" color="#1572B6" logo={SiCss3} />
  <TechBadge label="HTML" color="#E34F26" logo={SiHtml5} /></div>
                    </div>
                </Card>
                 <Card className="hover:shadow-md transition-shadow">
                    <div className="p-6 space-y-4">
                        <div className="flex items-center space-x-3">
                            <div className="p-2 bg-primary/10 rounded-lg text-primary"><FrameworkIcon /></div>
                            <h3 className="text-lg font-medium">Framework/Library</h3>
                        </div>
                        <div className="flex flex-wrap gap-2"> <TechBadge label="React" color="#61DAFB" logo={SiReact} textColor="#000" logoColor="#000" />
  <TechBadge label="Next.js" color="#000000" logo={SiNextdotjs}/>
  <TechBadge label="Tailwind CSS" color="#38BDF8" />
  <TechBadge 
  label="Express" 
  color="#303030" 
  logo={FaNodeJs} 
  textColor="#fff" 
  logoColor="#fff" 
/>

  <TechBadge 
  label="Node.js" 
  color="#339933" 
  logo={FaNodeJs} 
  textColor="#fff" 
  logoColor="#fff" 
/>
<TechBadge 
  label="Flask" 
  color="#f2f2f2" 
  logo={FaFlask} 
  textColor="#000000" 
  logoColor="#000000" 
/>

<TechBadge 
  label="Rasa" 
  color="#5A17EE"   // Rasa purple
  logo={FaRobot} 
  textColor="#fff"  // white text
  logoColor="#fff"  // white icon
/>

</div>
                    </div>
                </Card>
                 <Card className="hover:shadow-md transition-shadow">
                    <div className="p-6 space-y-4">
                        <div className="flex items-center space-x-3">
                            <div className="p-2 bg-primary/10 rounded-lg text-primary"><CertificationIcon /></div>
                            <h3 className="text-lg font-medium">Certifications</h3>
                        </div>
                        <div className="flex flex-wrap gap-2"> <TechBadge 
  label="AWS Certified Cloud Practitioner" 
  color="#252E3D"      // background
  logo={FaAws} 
  textColor="#FF9900"  // orange text
  logoColor="#FF9900"  // orange logo to match
/>


</div>
                    </div>
                </Card>
            </div>
             <div className="bg-gray-50 rounded-xl p-8 text-center space-y-4 group hover:scale-110">
    <h3 className="text-xl font-medium group-hover:scale-110">Design Philosophy</h3>
    <blockquote className="text-muted-foreground italic text-lg max-w-3xl mx-auto group-hover:scale-110 group-hover:text-secondary">
        <p>“It is easy to make things hard, but hard to make them easy”</p>
        <footer className="mt-4 not-italic text-base text-gray-500">
            — Rutger Bregman, <span className="italic">Humankind: A Hopeful History</span>
        </footer>
    </blockquote>
</div>
        </div>
    </section>
);

export default Skills;
