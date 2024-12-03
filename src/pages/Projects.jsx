import { useGSAP } from '@gsap/react';
import { Presentation } from 'lucide-react';
import React, { useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const Projects = () => {
  const projects = [
    {
      Title: "Pilo",
      color: "purple-500",
      role: "Development",
      techused: "MERN Stack",
      description: "Pilo deciphers product labels and analyzes the health impact of food products. ",
      link: "https://www.pilo.life/",
      techStack: ["React.js", "Node.js", "MongoDB", "Express"],
      image: "/pilo-preview.jpg"
    },
    {
      Title: "Code Prompt",
      color: "gray-200",
      role: "Development",
      techused: "Python",
      description: "Converts your codebase into a single LLM prompt with a source tree. it's a Gradio-based tool that simplifies debugging for React projects. It generates a text-based directory tree from your files, making it easy to share entire project structures with AI for assistance. Supporting ZIP, RAR, and 7z archives, it extracts contents, displays text files, and respects .gitignore patterns and common ignore rules.",
      link: "https://github.com/dryruffian/CodeCartographerUI",
      techStack: ["Python"],
      image: "/codepromt-preview.webp"
    },
    {
        Title: "Fake Tweet Detector",
      color: "primary-text",
      role: "Development",
      techused: "BERT",
      description: "This project is a machine learning based solution to identify fake news tweets. It uses the state-of-the-art BERT (Bidirectional Encoder Representations from Transformers) model for sequence classification. The model has been trained on a large dataset of tweets to differentiate between real and fake news tweets.",
      link: "/",
      techStack: ["Python", "Pytorch","NLP","BERT API"],
      image: "/Fake-tweet-preview.png"
    },
    {
      Title: "Portfolio",
      color: "blue-500",
      role: "Development",
      techused: "React.js",
      description: "Personal portfolio showcasing projects and skills",
      link: "/",
      techStack: ["React.js", "Tailwind CSS"],
      image: "/protfolio_preview.png"
    },{
        Title: "Cholropath Map",
        color: "blue-500",
        role: "Development",
        techused: "Python",
        description: "A data visualization project focusing on india it my first data visualization project ever and i just started my jorney in coding world. it was the first visuliation which had the new map of Chhattisgarh after the re-ditribution of the districts",
        link: "/",
        techStack: ["Python", "plotly","pandas","numpy"],
        image: "/map-perview.png" 
    }
  ];

  const titleRef = useRef(null);
  const projectRefs = useRef([]);

  useGSAP(() => {
    gsap.from(titleRef.current,{
        x: -50,
        opacity:0,
        duration:0.5,
        ease:"power1.in"
    })

    projectRefs.current.forEach((project, index) => {
        gsap.from(project, {
          scrollTrigger: {
            trigger: project,
            start: "top bottom-=100",
            end:"top center",
            scrub0:0.5,
          },
          y: 20,
          opacity: 0,
          duration: 0.3,
          ease: "power2.out",
          delay: index * 0.1
        })});
  })

  return (
    <main className="py-3 px-10 sm:px-28 space-y-12">
        <div ref={titleRef} className='flex justify-between items-center border-b border-bline pb-4 pt-40'>
            <h1 className='text-5xl text-primarytext font-semibold sm:text-9xl'>My Projects</h1>
            <div className='bg-primarytext rounded-full p-2  '>
                <Presentation stroke='black' size={50}/>
            </div>
        </div>

        <div className='flex flex-col gap-4 sm:px-40'>

      {projects.map((project, index) => (
          <div
          key={project.Title}
          ref={el => projectRefs.current[index] = el}
          className="group relative w-full border border-bline rounded-lg p-6 flex flex-col-reverse sm:flex-row gap-8 cursor-pointer hover:shadow-lg transition-all duration-300"
          onClick={() => window.location.href = project.link}
          >
          {/* Content Section */}
          <div className={`flex flex-col gap-4 flex-1 justify-center ${index % 2 === 1 ? 'sm:order-2' : ''}`}>
            <h1 className={`text-5xl font-bold text-${project.color} transition-colors duration-300 sm:text-6xl`}>
              {project.Title}
            </h1>
            
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                  <span 
                  key={tech} 
                  className={`border-bline border rounded-full px-3 py-1 text-sm bg-opacity-0 hover:bg-${project.color} hover:bg-opacity-10 transition-colors duration-300`}
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
          
          {/* Image Section */}
          <div className={`sm:w-2/5 ${index % 2 === 1 ? 'sm:order-1' : ''}`}>
            <div className="relative overflow-hidden rounded-lg group-hover:shadow-xl transition-shadow duration-300">
              <img 
                src={project.image}
                alt={`${project.Title} preview`}
                className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              <div className={`absolute inset-0 bg-${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
            </div>
          </div>
        </div>
      ))}
      </div>
    </main>
  );
};

export default Projects;