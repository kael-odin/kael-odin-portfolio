import { useGSAP } from '@gsap/react';
import { Presentation } from 'lucide-react';
import { useRef } from 'react';
import gsap from 'gsap';
import { useLang } from '../i18n/LanguageContext.jsx';
import { projectsPage, projects } from '../i18n/content.js';

const Projects = () => {
  const { t } = useLang();
  const items = projects.items.map((p, i) => ({
    Title: p.title,
    color: p.color,
    role: t(p.role.zh, p.role.en),
    techused: p.tech,
    description: t(p.description.zh, p.description.en),
    link: p.link,
    techStack: p.tech.split(', '),
    image: p.image,
  }));

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
            <h1 className='text-5xl text-primarytext font-semibold sm:text-9xl'>{t(projectsPage.title.zh, projectsPage.title.en)}</h1>
            <div className='bg-primarytext rounded-full p-2  '>
                <Presentation stroke='black' size={50}/>
            </div>
        </div>

        <div className='flex flex-col gap-4 sm:px-40'>

      {items.map((project, index) => (
          <div
          key={project.Title}
          ref={el => projectRefs.current[index] = el}
          className="group relative w-full border border-bline rounded-lg p-6 flex flex-col-reverse sm:flex-row gap-8 cursor-pointer hover:shadow-lg transition-all duration-300 bg-bgcard"
          onClick={() => window.location.href = project.link}
          >
          {/* Content Section */}
          <div className={`flex flex-col gap-4 flex-1 justify-center ${index % 2 === 1 ? 'sm:order-2' : ''}`}>
            <h1 className={`text-5xl font-bold text-${project.color} transition-colors duration-300 sm:text-6xl`}>
              {project.Title}
            </h1>

            <div className="flex flex-wrap gap-2">
              {project.techStack.map((techItem) => (
                  <span
                  key={techItem}
                  className={`border-bline border text-sectext rounded-full px-3 py-1 text-sm bg-opacity-0 hover:bg-${project.color} hover:bg-opacity-10 transition-colors duration-300`}
                  >
                  {techItem}
                </span>
              ))}
            </div>

            <p className="text-lg text-sectext leading-relaxed max-w-2xl">
              {project.description}
            </p>

            <div className="flex items-center gap-3 text-sm text-sectext">
              <span className="font-semibold">{project.role}</span>
              <span className="w-1 h-1 rounded-full bg-neutral-300"></span>
              <span>{project.techused}</span>
            </div>
          </div>

          {/* Image Section */}
          <div className={`sm:w-2/5 ${index % 2 === 1 ? 'sm:order-1' : ''}`}>
            <div className="relative overflow-hidden rounded-lg group-hover:shadow-xl transition-shadow duration-300">
              {project.image ? (
                <img
                  src={project.image}
                  alt={`${project.Title} preview`}
                  className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
              ) : (
                <div className="w-full h-64 bg-background border border-bline rounded-lg flex items-center justify-center text-sectext">
                  {project.Title}
                </div>
              )}
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
