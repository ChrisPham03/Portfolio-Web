import Card from './ui/Card.jsx';
import Button from './ui/Button.jsx';
import { MailIcon, LinkedInIcon, GithubIcon, FileTextIcon } from './Icons.jsx';

export default function Contact() {
  const contactMethods = [
    {
      title: "Email",
      value: "chrisph0303@gmail.com",
      icon: <MailIcon className="w-5 h-5" />,
      href: "mailto:chrisph0303@gmail.com"
    },
    {
      title: "LinkedIn",
      value: "linkedin.com/in/chrispham03",
      icon: <LinkedInIcon className="w-5 h-5" />,
      href: "www.linkedin.com/in/chrispham03"
    },
    {
      title: "GitHub",
      value: "github.com/ChrisPham03",
      icon: <GithubIcon className="w-5 h-5" />,
      href: "https://github.com/ChrisPham03"
    }
  ];

  return (
    <section id="contact" className="bg-muted/30 py-20 section-group">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-medium"><span className="bg-gradient-to-r from-green to-secondary bg-clip-text text-transparent inline-block transition-transform duration-300 section-group-hover:scale-110 section-group-hover:drop-shadow-lg">
                            Let's Work Together
                        </span></h2>
            <p className="text-muted-foreground text-lg max-w-4xl mx-auto  section-group-hover:scale-105 section-group-hover:text-secondary ">
              I'm currently seeking internship opportunities and freelance projects. 
              Let's create something amazing together!
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 section-group-hover:scale-105">
            {contactMethods.map((method) => (
              <Card key={method.title} className="hover:shadow-md transition-shadow cursor-pointer group">
                <div 
                  className="p-6 text-center space-y-4"
                  onClick={() => window.open(method.href, '_blank')}
                >
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    {method.icon}
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">{method.title}</h3>
                    <p className="text-sm text-muted-foreground">{method.value}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="text-center space-y-6">
            <div className="flex flex-col sm:flex-row gap-4 justify-center  section-group-hover:scale-105">
              <Button 
                size="lg"
                onClick={() => window.open('mailto:chrisph0303@gmail.com', '_blank')}
                 className="text-white  bg-gradient-to-r from-primary to-secondary hover:bg-gray-200 hover:from-regularCyan hover:to-veryLightBlue hover:text-white"
              >
                <MailIcon className="w-4 h-4 mr-2" />
                Send Message
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => window.open('/resume.pdf', '_blank')}
                className="hover:text-primary"
              >
                <FileTextIcon className="w-4 h-4 mr-2" />
                Download Resume
              </Button>
            </div>
            
            <div className="pt-8 border-t">
              <p className="text-muted-foreground text-sm">
                Based in Ottawa, ON • Open to remote work and relocation
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

