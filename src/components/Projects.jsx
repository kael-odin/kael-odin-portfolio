import { useState, useEffect, useRef } from 'react';
import { Presentation, ExternalLink } from 'lucide-react';
import { MagneticButton } from './Aboutme';
import { useLang } from '../i18n/LanguageContext.jsx';
import { projects } from '../i18n/content.js';

const ProjectCard = ({ project, onMouseEnter, onMouseLeave }) => {
  const { t } = useLang();
  return (
  <div className="relative group">
    <div
      className="px-10 py-6 flex justify-between items-center border-b border-bline cursor-pointer transform-gpu"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="space-y-2">
        <h1 className={`text-4xl font-bold text-${project.color}`}>
          {project.title}
        </h1>
        <p className="text-gray-500">{t(project.year?.zh ?? '2024', project.year?.en ?? '2024')}</p>
      </div>
      <div className="text-right">
        <div className="flex items-center gap-2 justify-end">
          <h1 className="text-lg font-medium text-primarytext">{t(project.role.zh, project.role.en)}</h1>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <ExternalLink className="w-5 h-5 text-primarytext hover:text-gray-400" />
          </a>
        </div>
        <h2 className="text-sm text-gray-600">{project.tech}</h2>
      </div>
    </div>
  </div>
  );
};

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
      className="absolute z-10 bg-[#3c3c36] text-primarytext border border-bline px-4 py-2 rounded-lg shadow-lg max-w-xs"
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

const DetailedProjectCard = ({ project, index }) => {
  const { t } = useLang();
  return (
  <div
    className="group relative w-full border border-bline rounded-lg p-6 flex flex-col-reverse sm:flex-row gap-8 cursor-pointer hover:shadow-lg transition-all duration-300 bg-bgcard"
    onClick={() => window.location.href = project.link}
  >
    <div className={`flex flex-col gap-4 flex-1 justify-center ${index % 2 === 1 ? 'sm:order-2' : ''}`}>
      <h1 className={`text-3xl font-bold text-${project.color} transition-colors duration-300 sm:text-6xl`}>
        {project.title}
      </h1>

      <div className="flex flex-wrap gap-2">
        {project.tech.split(", ").map((techItem) => (
          <span
            key={techItem}
            className="border-bline border text-sectext rounded-full px-3 py-1 text-sm bg-opacity-0 hover:bg-opacity-10 transition-colors duration-300"
          >
            {techItem}
          </span>
        ))}
      </div>

      <p className="text-lg text-sectext leading-relaxed max-w-2xl">
        {t(project.description.zh, project.description.en)}
      </p>

      <div className="flex items-center gap-3 text-sm text-sectext">
        <span className="font-semibold">{t(project.role.zh, project.role.en)}</span>
        <span className="w-1 h-1 rounded-full bg-neutral-300"></span>
        <span>{project.tech}</span>
      </div>
    </div>

    <div className={`sm:w-2/5 ${index % 2 === 1 ? 'sm:order-1' : ''}`}>
      <div className="relative overflow-hidden rounded-lg group-hover:shadow-xl transition-shadow duration-300">
        {project.image ? (
          <img
            src={project.image}
            alt={`${project.title} preview`}
            className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-64 bg-background border border-bline rounded-lg flex items-center justify-center text-sectext">
            {project.title}
          </div>
        )}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
      </div>
    </div>
  </div>
  );
};

const Projects = () => {
  const { t } = useLang();
  const [activeDescription, setActiveDescription] = useState(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const items = projects.items.map((p) => ({ ...p, year: { zh: '2024', en: '2024' } }));

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
      <div className="py-7 flex items-center justify-between text-3xl font-bold text-primarytext">
        <h1>{t(projects.title.zh, projects.title.en)}</h1>
        <div className="bg-primarytext p-4 rounded-full">
          <Presentation className="w-6 h-6" stroke='black'/>
        </div>
      </div>

      <div className="relative w-full flex-col space-y-5 hidden sm:flex" onMouseMove={handleMouseMove}>
        {items.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            onMouseEnter={(e) => handleMouseEnter(e.currentTarget, index)}
            onMouseLeave={(e) => handleMouseLeave(e.currentTarget, index)}
          />
        ))}

        {activeDescription !== null && (
          <Tooltip
            content={t(items[activeDescription].description.zh, items[activeDescription].description.en)}
            position={position}
          />
        )}
      </div>

      <div className="sm:hidden space-y-6">
        {items.map((project, index) => (
          <DetailedProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>

      <div className="mt-5 flex justify-center" onClick={() => {
        window.location.hash = "#/projects"
      }}>

      <MagneticButton>
        <div className='flex gap-2 text-xl items-center'>
        {t(projects.loadMore.zh, projects.loadMore.en)}
        <ExternalLink className="w-5 h-5 text-primarytext hover:text-gray-400" />
        </div>
      </MagneticButton>
      </div>
    </section>
  );
};

export default Projects;
