import React, { useState } from 'react';

// --- 1. Import your project images ---
// (This assumes you have a folder at 'src/assets/projects/')
import project1Img from '../assets/projects/project1.png';
import project2Img from '../assets/projects/project2.png';
import project3Img from '../assets/projects/Pronject3.png';

// --- Data for the projects ---
const projectData = [
    {
        title: 'Project One',
        description: 'A modern e-commerce platform built with React and Node.js.',
        // --- 2. Use the imported variable here ---
        imageUrl: project1Img,
        liveUrl: '#',
        repoUrl: '#',
        tags: ['React', 'Node.js', 'MongoDB'],
    },
    {
        title: 'Project Two',
        description: 'A data visualization dashboard created with Next.js and D3.js.',
        // --- 2. Use the imported variable here ---
        imageUrl: project2Img,
        liveUrl: '#',
        repoUrl: '#',
        tags: ['Next.js', 'D3.js', 'Tailwind CSS'],
    },
    {
        title: 'Project Three',
        description: 'A collaborative task management application using TypeScript.',
        // --- 2. Use the imported variable here ---
        imageUrl: project3Img,
        liveUrl: '#',
        repoUrl: '#',
        tags: ['TypeScript', 'Firebase', 'Figma'],
    },
    {
        title: 'Project Four',
        description: 'A portfolio website built with Next.js and Tailwind CSS.',
        imageUrl: 'https://via.placeholder.com/400x400/171717/FFFFFF?text=Project+Four',
        liveUrl: '#',
        repoUrl: '#',
        tags: ['Next.js', 'Tailwind CSS'],
    },
    {
        title: 'Project Five',
        description: 'A real-time chat app using Node.js and Socket.io.',
        imageUrl: 'https://via.placeholder.com/400x400/171717/FFFFFF?text=Project+Five',
        liveUrl: '#',
        repoUrl: '#',
        tags: ['Node.js', 'Socket.io'],
    },
    {
        title: 'Project Six',
        description: 'A blog platform powered by React and Express.',
        imageUrl: 'https://via.placeholder.com/400x400/171717/FFFFFF?text=Project+Six',
        liveUrl: '#',
        repoUrl: '#',
        tags: ['React', 'Express'],
    },
];

// --- Single Project Card Component ---
const ProjectCard = ({ project }) => (
    <div className="shadow-lg bg-white rounded-lg overflow-hidden w-full h-full flex flex-col transition-transform duration-300 hover:-translate-y-2">
        <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-1/2 object-cover"
        />
        <div className="p-4 flex-grow flex flex-col">
            <h3 className="text-lg font-bold text-gray-900 mb-1">
                {project.title}
            </h3>
            <p className="text-gray-600 text-xs mb-2 flex-grow">
                {project.description}
            </p>
            <div className="flex flex-wrap gap-1 mb-2">
                {project.tags.map((tag) => (
                    <span
                        key={tag}
                        className="bg-gray-200 text-gray-800 text-[10px] font-semibold px-2 py-0.5 rounded-full"
                    >
                        {tag}
                    </span>
                ))}
            </div>
            <div className="flex items-center justify-start space-x-3 mt-auto pt-1">
                <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 font-semibold text-xs transition-colors duration-300"
                >
                    Live Demo
                </a>
                <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-900 font-semibold text-xs transition-colors duration-300"
                >
                    View Code
                </a>
            </div>
        </div>
    </div>
);

// --- Main Projects Section Component ---
export default function Projects() {
    const [showAll, setShowAll] = useState(false);
    const displayedProjects = showAll ? projectData : projectData.slice(0, 3);

    return (
        <section
            id="projects"
            className="w-full text-black py-20 grid-wrapper"
        >
            <div className="grid-background"></div>

            <div className="relative z-10 px-2">
                <div className="text-center mb-12">
                    <h2 className="text-5xl font-bold font-pixel underline-wavy-yellow inline-block">
                        Projects
                    </h2>
                </div>
                <div className="grid grid-cols-3 gap-6 max-w-screen-lg mx-auto">
                    {displayedProjects.map((project, index) => (
                        <div key={index} className="aspect-square">
                            <ProjectCard project={project} />
                        </div>
                    ))}
                </div>

                {!showAll && projectData.length > 3 && (
                    <div className="text-center mt-12">
                        <button
                            onClick={() => setShowAll(true)}
                            className="btn" 
                        >
                            {/* 3. Kept your new button text */}
                            View More
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}