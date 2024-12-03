import React, { useState, useEffect, useRef } from 'react';
import { Presentation, ExternalLink } from 'lucide-react';
import { MagneticButton } from './Aboutme';

const ProjectCard = ({ project, onMouseEnter, onMouseLeave }) => (
  <div className="relative group">
    <div
      className="px-10 py-6 flex justify-between items-center border-b border-bline cursor-pointer transform-gpu"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="space-y-2">
        <h1 className={`text-4xl font-bold text-${project.color}`}>
          {project.Title}
        </h1>
        <p className="text-gray-500">2024</p>
      </div>
      <div className="text-right">
        <div className="flex items-center gap-2 justify-end">
          <h1 className="text-lg font-medium">{project.role}</h1>
          <a 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <ExternalLink className="w-5 h-5 text-primarytext hover:text-gray-400" />
          </a>
        </div>
        <h2 className="text-sm text-gray-600">{project.techused}</h2>
      </div>
    </div>
  </div>
);

const Tooltip = ({ content, position }) => {
  const tooltipRef = useRef(null);

  useEffect(() => {
    if (tooltipRef.current) {
      const element = tooltipRef.current;
      element.style.opacity = '0';
      element.style.transform = 'scale(0.95)';
      
      requestAnimationFrame(() => {
        element.style.transition = 'opacity 0.2s ease-out, transform 0.2s ease-out';
        element.style.opacity = '1';
        element.style.transform = 'scale(1)';
      });
    }

    return () => {
      if (tooltipRef.current) {
        tooltipRef.current.style.transition = 'none';
      }
    };
  }, []);

  return (
    <div
      ref={tooltipRef}
      className="absolute z-10 bg-[#3c3c36] text-primarytext border-bline px-4 py-2 rounded-lg shadow-lg max-w-xs"
      style={{
        pointerEvents: 'none',
        left: position.x,
        top: position.y,
        willChange: 'transform',
      }}
    >
      {content}
    </div>
  );
};

const DetailedProjectCard = ({ project, index }) => (
  <div
    className="group relative w-full border border-bline rounded-lg p-6 flex flex-col-reverse sm:flex-row gap-8 cursor-pointer hover:shadow-lg transition-all duration-300"
    onClick={() => window.location.href = project.link}
  >
    <div className={`flex flex-col gap-4 flex-1 justify-center ${index % 2 === 1 ? 'sm:order-2' : ''}`}>
      <h1 className={`text-3xl font-bold text-${project.color} transition-colors duration-300 sm:text-6xl`}>
        {project.Title}
      </h1>
      
      <div className="flex flex-wrap gap-2">
        {project.techused.split(", ").map((tech) => (
          <span 
            key={tech} 
            className="border-bline border rounded-full px-3 py-1 text-sm bg-opacity-0 hover:bg-opacity-10 transition-colors duration-300"
          >
            {tech}
          </span>
        ))}
      </div>
      
      <p className="text-lg text-neutral-600 leading-relaxed max-w-2xl">
        {project.description}
      </p>
      
      <div className="flex items-center gap-3 text-sm text-neutral-500">
        <span className="font-semibold">{project.role}</span>
        <span className="w-1 h-1 rounded-full bg-neutral-300"></span>
        <span>{project.techused}</span>
      </div>
    </div>
    
    <div className={`sm:w-2/5 ${index % 2 === 1 ? 'sm:order-1' : ''}`}>
      <div className="relative overflow-hidden rounded-lg group-hover:shadow-xl transition-shadow duration-300">
        <img 
          src={project.image}
          alt={`${project.Title} preview`}
          className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
      </div>
    </div>
  </div>
);

const Projects = () => {
  const [activeDescription, setActiveDescription] = useState(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  
  const projects = [
    {
      Title: "Pilo",
      color: "purple-500",
      role: "Development",
      techused: "MERN Stack, MongoDB, Express, React, Node.js",
      description: "Pilo deciphers product labels and analyzes the health impact of food products",
      link: "https://www.pilo.life/",
      image: "/pilo-preview.jpg"
    },
    {
      Title: "CodePrompt",
      color: "gray-200",
      role: "Development",
      techused: "Python, Natural Language Processing, Git Integration",
      description: "Converts your codebase into a single LLM prompt with a source tree",
      link: "https://github.com/dryruffian/CodeCartographerUI",
      image: "/codepromt-preview.webp"
    },
    {
      Title: "Portfolio",
      color: "blue-500",
      role: "Development",
      techused: "React.js, Tailwind CSS, GSAP",
      description: "Personal portfolio showcasing projects and skills",
      link: "/",
      image: "/protfolio_preview.png"
    }
  ];

  const handleMouseMove = (e) => {
    if (activeDescription !== null) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      setPosition({
        x: x + 20,
        y: y + 20
      });
    }
  };

  const handleMouseEnter = (element, index) => {
    setActiveDescription(index);
    element.style.transform = 'translateX(5%)';
    element.style.width = '90%';
    element.style.transition = 'transform 0.5s ease-out, width 0.5s ease-out';
  };

  const handleMouseLeave = (element, index) => {
    setActiveDescription(null);
    element.style.transform = 'translateX(0%)';
    element.style.width = '100%';
    element.style.transition = 'transform 0.5s ease-out, width 0.5s ease-out';
  };

  return (
    <section className="relative px-10">
      <div className="py-7 flex items-center justify-between text-3xl font-bold">
        <h1>My Projects</h1>
        <div className="bg-primarytext p-4 rounded-full">
          <Presentation className="w-6 h-6" stroke='black'/>
        </div>
      </div>

      <div className="relative w-full flex flex-col space-y-5 hidden sm:block" onMouseMove={handleMouseMove}>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            onMouseEnter={(e) => handleMouseEnter(e.currentTarget, index)}
            onMouseLeave={(e) => handleMouseLeave(e.currentTarget, index)}
          />
        ))}

        {activeDescription !== null && (
          <Tooltip 
            content={projects[activeDescription].description}
            position={position}
          />
        )}
      </div>

      <div className="sm:hidden space-y-6">
        {projects.map((project, index) => (
          <DetailedProjectCard key={project.Title} project={project} index={index} />
        ))}
      </div>

      <div className="mt-5 flex justify-center" onClick={() => {
        window.location.href = "/projects"
      }}>

      <MagneticButton>
        <div className='flex gap-2 text-xl items-center'>
        Load More
        <ExternalLink className="w-5 h-5 text-primarytext hover:text-gray-400" />
        </div>
      </MagneticButton>
      </div>
    </section>
  );
};

export default Projects;