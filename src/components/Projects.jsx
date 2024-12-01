
import { Presentation } from 'lucide-react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
 

function Projects() {
    const projects = [
        {
            Title: "Pilo",
            color: "purple-500",
            role:"Devlopment",
            techused: "MERN Stack",
        },{
            Title: "CodePropmt",
            color: "gray-200",
            role:"Devlopment",
            techused: "python"
        },{
            Title:"Protfolio",
            color:'',
            role:"Devlopment",
            techused:"React.js"
        }
    ];

    const handleMouseEnter = (element) => {
        gsap.to(element, {
            x: "10%",
            width: "80%",
            duration: 0.5,
            ease: "power2.out"
        });
    };

    const handleMouseLeave = (element) => {
        gsap.to(element, {
            x: "0%",
            width: "100%",
            duration: 0.5,
            ease: "power2.out"
        });
    };

    return (
        <main className="px-10">
            <div className="py-7 flex items-center justify-between text-3xl font-bold text-accentv">
                <h1>My Projects</h1>
                <div className="bg-primarytext p-4 rounded-full"> 
                    <Presentation className="w-6 h-6" stroke="black"/>
                </div>
            
            </div>

            <div className="relative w-full flex flex-col space-y-5 hidden sm:block">
                {projects.map((project, index) => (
                    <div 
                        key={index}
                        className="px-10 py-2 flex justify-between items-center border-b border-bline cursor-pointer transform-gpu "
                        ref={(el) => el && el.setAttribute('data-index', index)}
                        onMouseEnter={(e) => handleMouseEnter(e.currentTarget)}
                        onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
                    >
                        <div className="gap-5">
                            <h1 className={`text-4xl text-${project.color}`}>{project.Title}</h1>
                            <p className="text-gray-500">2024</p>
                        </div>
                        <div>
                            <h1 className="text-lg">{project.role}</h1>
                            <h2 className="text-sm">{project.techused}</h2>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}

export default Projects;