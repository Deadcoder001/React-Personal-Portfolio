"use client"

import React, { useState } from 'react';
import GlareHover from './GlareHover';
import { Highlighter } from "@/components/ui/highlighter";
import { InteractiveGridPattern } from "@/components/ui/interactive-grid-pattern";
import { cn } from "@/lib/utils";


// --- 1. Import your project images ---

import project1Img from '../assets/projects/project1.png';
import project2Img from '../assets/projects/project2.png';
import project3Img from '../assets/projects/Project3.png';
import project4Img from '../assets/projects/Project4.png';
import project5Img from '../assets/projects/project5.png';
import project6Img from '../assets/projects/project6.png';
import project7Img from '../assets/projects/project7.png';
import project8Img from '../assets/projects/project8.png';
import project9Img from '../assets/projects/project9.png';
import { Truck } from 'lucide-react';

// --- Data for the projects ---
const projectData = [
    {
        title: 'Sahityaa Sangamm',
        description: 'A modern e-commerce platform built with Blade and Laravel.',
        // Use your Cloudinary video URL here:
        videoUrl: 'https://res.cloudinary.com/dktapziq9/video/upload/v1764394626/1764393871242766_dqfnqn.mp4',
        imageUrl: project1Img, // optional fallback
        liveUrl: 'https://sahityaasangamm.in',
        repoUrl: '#',
        tags: ['Blade', 'Laravel', 'MySQL'],
    },
    {
        title: 'Portfolio Website',
        description: 'My personal portfolio website built with React and Tailwind CSS.',
        videoUrl: 'https://res.cloudinary.com/dktapziq9/video/upload/v1764395075/1764395026924189_ij9257.mov',
        imageUrl: project7Img,
        liveUrl: 'https://ashifelahi.netlify.app',
        repoUrl: 'https://github.com/Deadcoder001/React-Personal-Portfolio.git',
        tags: ['React', 'Tailwind CSS', 'GSAP', 'Spline', 'Framer Motion', 'Lenis'],
    },
    {
        title: 'ONS Trading Application',
        description: 'A real-time trading application using Django and Bootstrap 5.',
        videoUrl: 'https://res.cloudinary.com/dktapziq9/video/upload/v1764395357/1764395325884939_lrg7f4.mp4',
        imageUrl: project5Img,
        liveUrl: 'https://ons-trading.onrender.com',
        repoUrl: 'https://github.com/Deadcoder001/ons_trading.git',
        tags: ['Django', 'yfinance', 'Bootstrap 5'],
    },
    {
        title: 'Creatorhub',
        description: 'An Influencer Marketing platform for Creators and brands built with React.',
        videoUrl: 'https://res.cloudinary.com/dktapziq9/video/upload/v1764396382/1764396334647746_qruqaf.mp4',

        liveUrl: 'https://creatorhub.in',
        repoUrl: '#',
        tags: ['React', 'Node.js', 'MongoDB'],
    },
    {
        title: 'Tea Country',
        description: 'A Tourist website created with React.',
        // --- 2. Use the imported variable here ---
        imageUrl: project2Img,
        liveUrl: 'https://teacountry.in',
        repoUrl: '#',
        tags: ['React', 'Vue', 'Tailwind CSS'],
    },
    // {
    //     title: 'MeghaRise Products',
    //     description: 'A modern e-commerce platform using React (Its Frontend Only For Now).',
    //     // --- 2. Use the imported variable here ---
    //     imageUrl: project3Img,
    //     liveUrl: 'https://meghariseproducts.com',
    //     repoUrl: '#',
    //     tags: ['React', 'Vue', 'Tailwind CSS'],
    // },
    {
        title: 'Scabbard Tech',
        description: 'A Digital Marketing website built with React, Vue and Tailwind CSS.',
        videoUrl: 'https://res.cloudinary.com/dktapziq9/video/upload/v1764397211/1764397136159111_zlcckk.mp4',
        liveUrl: 'https://scabbardtech.com',
        repoUrl: '#',
        tags: ['React', 'Vue', 'Tailwind CSS'],
    },

        {
        title: 'Jana Kalyan Swastha sewa',
        description: 'A Healthcare website built with HTML and php.',
        imageUrl: project6Img,
        liveUrl: 'https://jkssewa.org',
        repoUrl: '#',
        tags: ['HTML', 'CSS', 'JavaScript','PHP', 'MySQL'],
    },
    {
        title: 'Janaewa',
        description: 'A NGO website built with HTML, CSS and JavaScript.',
        imageUrl: project8Img,
        liveUrl: 'https://janasewa.org',
        repoUrl: '#',
        tags: ['HTML', 'CSS', 'JavaScript'],
    },
        {
        title: 'Earmacs',
        description: 'A Hotel Management website built with Wordpress and PHP.',
        imageUrl: project9Img,
        liveUrl: 'https://earmacs.com',
        repoUrl: '#',
        tags: ['Wordpress', 'PHP'],
    },
];

// --- Single Project Card Component ---
const ProjectCard = ({ project }) => (
    <GlareHover
        glareColor="#ffffff"
        glareOpacity={0.3}
        glareAngle={-30}
        glareSize={300}
        transitionDuration={1350}
        playOnce={true}
        width="100%"
        height="100%"
        background="#fff"
        borderRadius="16px"
        className="h-full"
        style={{ border: '1px solid #e5e7eb' }}
    >
        <div className="flex flex-col h-full bg-white rounded-[16px] overflow-hidden">
            {project.videoUrl ? (
                <video
                    src={project.videoUrl}
                    autoPlay
                    loop
                    muted
                    className="w-full h-1/2 object-cover"
                    poster={project.imageUrl}
                />
            ) : (
                <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-1/2 object-cover"
                />
            )}
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
                    {project.repoUrl && project.repoUrl !== '#' && (
                        <a
                            href={project.repoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-gray-900 font-semibold text-xs transition-colors duration-300"
                        >
                            View Code
                        </a>
                    )}
                </div>
            </div>
        </div>
    </GlareHover>
);

// --- Main Projects Section Component ---
export default function Projects() {
    const [showAll, setShowAll] = useState(false);
    const displayedProjects = showAll ? projectData : projectData.slice(0, 3);

    return (
        <section
            id="projects"
            // --- 1. Added bg-white (or bg-background) here ---
            className="relative w-full text-black py-20 overflow-hidden bg-white"
        >
            <InteractiveGridPattern
                className={cn(
                    "absolute inset-0 h-full w-full",
                    "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]"
                )}
                // --- 2. Added the missing props from your demo ---
                width={20}
                height={20}
                squares={[80, 80]}
                // You can set a static color for the squares
                squaresClassName="fill-gray-100"
            />

            <div className="relative z-10 px-2">
                <div className="text-center mb-12">
                    <h2 className="text-5xl font-bold font-pixel underline-wavy-yellow inline-block">
                        <Highlighter action="underline" color="#FFD700">
                            Projects 🚀
                        </Highlighter>
                    </h2>
                </div>
                <div className="grid grid-cols-3 gap-6 max-w-screen-lg mx-auto">
                    {displayedProjects.map((project, index) => (
                        <div key={index} className="aspect-square">
                            <ProjectCard project={project} />
                        </div>
                    ))}
                </div>

                {/* View More / View Less Button */}
                <div className="text-center mt-12">
                    {!showAll && projectData.length > 3 && (
                        <button
                            onClick={() => setShowAll(true)}
                            className="btn"
                        >
                            View More
                        </button>
                    )}
                    {showAll && (
                        <button
                            onClick={() => setShowAll(false)}
                            className="btn"
                        >
                            View Less
                        </button>
                    )}
                </div>
            </div>
        </section>
    );
}