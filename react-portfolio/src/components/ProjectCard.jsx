import Card from './ui/Card';
import Badge from './ui/Badge';
import Button from './ui/Button';
import { GithubIcon, ExternalLinkIcon } from './Icons';

export default function ProjectCard({ 
  title, 
  description, 
  image, 
  tags, 
  liveUrl, 
  githubUrl, 
  isLarge = false 
}) {
  return (
    <div className={`group rounded-lg border overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${isLarge ? 'col-span-1 md:col-span-2' : ''}`}>
      <div
  className={`relative overflow-hidden ${
    isLarge ? "aspect-[16/8]" : "aspect-[16/10]"
  }`}
>

        <img 
          src={image}
          alt={title}
          className={`w-full h-full object-cover transition-transform duration-300 group-hover:scale-105`}
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
      </div>
      
      <div className="p-4 space-y-4 bg-card">
        <div className="space-y-2">
          <h3 className={`font-medium group-hover:text-primary transition-colors ${
            isLarge ? 'text-xl' : 'text-lg'
          }`}>
            {title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {description}
          </p>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
        
        <div className="flex gap-2 pt-2">
          {liveUrl && (
            <Button 
              size="sm" 
              variant="outline"
              onClick={() => window.open(liveUrl, '_blank')}
              className="text-xs h-8"
            >
              <ExternalLinkIcon className="w-3 h-3 mr-1" />
              Live Demo
            </Button>
          )}
          {githubUrl && (
            <Button 
              size="sm" 
              variant="outline"
              onClick={() => window.open(githubUrl, '_blank')}
              className="text-xs h-8"
            >
              <GithubIcon className="w-3 h-3 mr-1" />
              Code
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

