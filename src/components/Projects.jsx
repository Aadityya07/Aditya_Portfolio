import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useScroll, useTransform } from 'framer-motion';
import diagnoImg from '../assets/DiagnoAI.png';
import insightImg from '../assets/InsightPDF.png';
import riftImg from '../assets/Money_Mulling.png';
import cullingImg from '../assets/Culling_Games.png';
import portfolioImg from '../assets/portfolio.png';

const featuredProjects = [
    {
        id: 'diagnoai',
        title: 'DiagnoAI',
        category: 'Agentic Healthcare',
        shortDesc: 'Multimodal AI diagnostic pipeline using local Vision-Language Models (LLaVA & Mistral) with deterministic filtering.',
        desc: 'An Agentic AI diagnostic assistant powered by Multimodal Orchestration, deterministic filtering, and local Vision-Language Models. It features a two-phase triage system, automated OCR extraction for clinical data, and a custom CNN Pathology Engine to generate hallucination-free, explainable medical insights with an interactive UI.',
        image: diagnoImg,
        github: 'https://github.com/Aadityya07/DiagnoAI',
        demo: 'https://youtu.be/WWGPjwHIVAg?si=qSX2lkQkbk1d9jkg'
    },
    {
        id: 'insightpdf',
        title: 'InSightPDF',
        category: 'Generative AI & RAG',
        shortDesc: 'Advanced RAG platform transforming static documents into interactive mind maps and AI podcasts.',
        desc: 'Far more than a simple summarizer, InSightPDF is an advanced full-stack platform utilizing FAISS vector search, all-MiniLM embeddings, and Local LLMs (Ollama/Mistral). It transforms static documents into interactive learning tools through Retrieval-Augmented Generation (RAG), automatically extracting hierarchical concepts into dynamic, zoomable UI mind maps, and synthesizing text into two-person podcast MP3s via Edge-TTS.',
        image: insightImg,
        github: 'https://github.com/Aadityya07/PDF-SUMMARIZER',
        demo: 'https://youtu.be/NroQp8KmH_Y?si=WhGPJW1t_vRMfSCE'
    },
    {
        id: 'rift',
        title: 'RIFT Forensics Engine',
        category: 'FinTech & Graph Theory',
        shortDesc: 'High-performance graph-theoretic platform uncovering sophisticated money muling networks.',
        desc: 'A high-performance, graph-theoretic web application designed to ingest raw financial transaction logs and expose sophisticated money muling networks. It bypasses traditional relational database limits by reconstructing latent fraud topologies, specifically targeting circular routing, temporal smurfing, and layered shell networks using constrained DFS and temporal motif mining algorithms.',
        image: riftImg,
        github: 'https://github.com/Aadityya07/-MONEY-MULING-DETECTION-RIFT-26',
        demo: 'https://www.linkedin.com/posts/aditya1610_graphtheory-frauddetection-fintech-ugcPost-7432855944696393728-Td_T'
    },
    {
        id: 'cullinggames',
        title: 'The Culling Games',
        category: 'Full-Stack Architecture',
        shortDesc: 'Enterprise-grade competitive event management platform with advanced RBAC and live leaderboards.',
        desc: 'An enterprise-grade, highly scalable competitive event management platform built for a 40-day intensive hackathon. Designed with a fully relational PostgreSQL database, secure JWT session revocation, media offloading via Cloudinary, and containerized microservices deployment (Google Cloud Run) to ensure zero downtime and absolute data integrity under heavy concurrent loads.',
        image: cullingImg,
        github: 'https://github.com/Aadityya07/Culling_Games',
        demo: null
    }
];

const allProjects = [
    ...featuredProjects,
    {
        id: 'portfolio',
        title: 'Cinematic Portfolio',
        category: 'Frontend Engineering',
        shortDesc: 'Immersive, narrative-driven personal portfolio built with GSAP and React.',
        desc: 'A highly immersive, narrative-driven personal portfolio built to bridge the gap between advanced web engineering and cinematic storytelling. It features a frame-by-frame HTML5 canvas engine, precise GSAP ScrollTrigger animations, pure glassmorphism UI, and a suspenseful terminal breach preloader.',
        image: portfolioImg,
        github: 'https://github.com/Aadityya07/interactive-portfolio',
        demo: 'https://aditya-yadav-dev.vercel.app/'
    }
];

export const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [showAllProjects, setShowAllProjects] = useState(false);
    const [isHoveringImage, setIsHoveringImage] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState(null);

    useEffect(() => {
        if (selectedProject || showAllProjects) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [selectedProject, showAllProjects]);

    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: containerRef });
    const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 25, restDelta: 0.001 });

    const headerY = useTransform(smoothProgress, [0.14, 0.2], ["0vh", "-30vh"]);
    const headerOpacity = useTransform(smoothProgress, [0.14, 0.18], [1, 0]);

    const scrollIndicatorOpacity = useTransform(smoothProgress, [0.02, 0.08], [1, 0]);

    const y0 = useTransform(smoothProgress, [0.05, 0.2], ["100vh", "0vh"]);
    const y1 = useTransform(smoothProgress, [0.25, 0.4], ["100vh", "0vh"]);
    const y2 = useTransform(smoothProgress, [0.45, 0.6], ["100vh", "0vh"]);
    const y3 = useTransform(smoothProgress, [0.65, 0.8], ["100vh", "0vh"]);
    const yTransforms = [y0, y1, y2, y3];

    const s0 = useTransform(smoothProgress, [0.25, 0.4], [1, 0.92]);
    const s1 = useTransform(smoothProgress, [0.45, 0.6], [1, 0.92]);
    const s2 = useTransform(smoothProgress, [0.65, 0.8], [1, 0.92]);
    const s3 = useTransform(smoothProgress, [0.85, 1], [1, 1]);
    const sTransforms = [s0, s1, s2, s3];

    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);
    const cursorXSpring = useSpring(cursorX, { damping: 25, stiffness: 400, mass: 0.5 });
    const cursorYSpring = useSpring(cursorY, { damping: 25, stiffness: 400, mass: 0.5 });

    useEffect(() => {
        const moveCursor = (e) => {
            cursorX.set(e.clientX - 40); 
            cursorY.set(e.clientY - 40);
        };
        window.addEventListener('mousemove', moveCursor);
        return () => window.removeEventListener('mousemove', moveCursor);
    }, [cursorX, cursorY]);

    return (
        <>
            <section id="projects" className="w-full relative z-10 select-none bg-transparent">
                
                <motion.div 
                    className="fixed top-0 left-0 w-20 h-20 rounded-full bg-theme-accent z-[9999] pointer-events-none flex items-center justify-center hidden md:flex"
                    style={{ x: cursorXSpring, y: cursorYSpring }}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ 
                        scale: isHoveringImage && !selectedProject && !showAllProjects ? 1 : 0, 
                        opacity: isHoveringImage && !selectedProject && !showAllProjects ? 1 : 0 
                    }}
                    transition={{ duration: 0.2 }}
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="7" y1="17" x2="17" y2="7"></line>
                        <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                </motion.div>

                {/* ============================================================ */}
                {/* 400vh Scroll-Stacking Container — LAPTOP ONLY                */}
                {/* ============================================================ */}
                <div ref={containerRef} className="relative w-full h-[450vh] max-md:hidden">
                    <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-end">
                        
                        <motion.div 
                            style={{ y: headerY, opacity: headerOpacity }}
                            className="absolute top-[25vh] left-0 w-full px-[7vw] z-0 pointer-events-none"
                        >
                            <h2 className="font-display text-[10vw] sm:text-6xl md:text-7xl lg:text-[80px] uppercase leading-[0.9] text-theme-text tracking-[-0.01em] mb-4">
                                Featured Projects
                            </h2>
                            <p className="text-theme-muted max-w-[600px] text-base md:text-[1.1rem] font-light leading-relaxed tracking-wide">
                                These selected projects reflect my passion for building robust, scalable systems and solving complex real-world problems through data-driven AI architectures.
                            </p>
                        </motion.div>

                        <motion.div 
                            style={{ opacity: scrollIndicatorOpacity }}
                            className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-0 pointer-events-none"
                        >
                            <span className="text-theme-muted text-xs md:text-sm tracking-[0.25em] uppercase font-light">
                                Scroll Down
                            </span>
                            <div className="w-[1.5px] h-10 bg-white/10 overflow-hidden relative">
                                <motion.div 
                                    animate={{ y: ["-100%", "200%"] }} 
                                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                                    className="w-full h-[40%] bg-theme-accent"
                                />
                            </div>
                        </motion.div>
                        
                        {featuredProjects.map((project, idx) => (
                            <motion.div 
                                key={project.id}
                                style={{ y: yTransforms[idx], scale: sTransforms[idx], zIndex: 10 + idx }}
                                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[95vw] md:w-[85vw] h-[80vh] md:h-[90vh] origin-bottom overflow-hidden rounded-[2rem] md:rounded-[3rem] border border-white/10 shadow-[0_-20px_50px_rgba(0,0,0,0.7)] pointer-events-auto cursor-none bg-theme-bg"
                                onClick={() => {
                                    setSelectedProject(project);
                                    setIsHoveringImage(false);
                                }}
                                onMouseEnter={() => {
                                    setHoveredIndex(idx);
                                    setIsHoveringImage(true);
                                }}
                                onMouseLeave={() => {
                                    setHoveredIndex(null);
                                    setIsHoveringImage(false);
                                }}
                            >
                                <img 
                                    src={project.image} 
                                    alt={project.title} 
                                    className={`w-full h-full object-cover object-top transition-all duration-500 ease-out ${
                                        hoveredIndex === idx ? 'scale-105 blur-md brightness-[0.3]' : 'scale-100 blur-0 brightness-100'
                                    }`} 
                                />
                                
                                <div 
                                    className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-500 ease-out pointer-events-none ${
                                        hoveredIndex === idx ? 'opacity-100' : 'opacity-0'
                                    }`}
                                >
                                    <div className="text-black font-bold tracking-widest uppercase mb-6 text-sm md:text-base border-2 border-theme-accent bg-theme-accent px-8 py-2 rounded-full shadow-[0_0_20px_rgba(217,255,102,0.3)]">
                                        {project.category}
                                    </div>
                                    <h3 className="text-5xl md:text-7xl lg:text-8xl font-display uppercase text-white tracking-wider drop-shadow-[0_10px_10px_rgba(0,0,0,0.8)] leading-none text-center px-4">
                                        {project.title}
                                    </h3>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* ============================================================ */}
                {/* MOBILE-ONLY STATIC LIST (no scroll animation)                */}
                {/* ============================================================ */}
                <div className="hidden max-md:flex flex-col gap-12 px-6 pt-24 pb-4">
                    {/* Mobile Header */}
                    <div>
                        <h2 className="font-display text-[11vw] uppercase leading-[0.9] text-theme-text tracking-[-0.01em] mb-4">
                            Featured Projects
                        </h2>
                        <p className="text-white text-sm font-light leading-relaxed tracking-wide">
                            These selected projects reflect my passion for building robust, scalable systems and solving complex real-world problems through data-driven AI architectures.
                        </p>
                    </div>

                    {/* Project Cards */}
                    {featuredProjects.map((project) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6 }}
                            className="flex flex-col gap-3 cursor-pointer"
                            onClick={() => setSelectedProject(project)}
                        >
                            <div className="w-full aspect-video rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl bg-theme-bg">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover object-top"
                                />
                            </div>
                            <h3 className="font-display uppercase text-2xl text-theme-text leading-tight mt-1">
                                {project.title}
                            </h3>
                            <div>
                                <p className="text-white text-sm font-light leading-relaxed tracking-wide line-clamp-2">
                                    {project.shortDesc}
                                </p>
                                <span className="text-theme-accent text-sm font-semibold tracking-wider uppercase mt-1 inline-block">More</span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Browse All Button */}
                <div className="w-full flex justify-center py-32 px-[7vw] max-md:px-6 max-md:py-16">
                    <button 
                        onClick={() => setShowAllProjects(true)}
                        className="border-2 border-theme-accent text-theme-accent px-10 py-4 rounded-full hover:bg-theme-accent hover:text-black font-semibold uppercase tracking-widest transition-colors text-center shadow-[0_0_20px_rgba(217,255,102,0.1)] hover:shadow-[0_0_30px_rgba(217,255,102,0.3)] max-md:w-full max-md:bg-theme-accent max-md:text-black max-md:px-6 max-md:py-3"
                    >
                        Browse All Projects
                    </button>
                </div>
            </section>

            {/* ============================================================ */}
            {/* Single Project Modal                                         */}
            {/* ============================================================ */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div 
                        initial={{ opacity: 0, y: "100%" }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: "100%" }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="fixed inset-0 z-[9999] bg-theme-bg overflow-y-auto"
                    >
                        <div className="sticky top-0 w-full p-6 md:p-10 flex justify-between items-center bg-gradient-to-b from-theme-bg to-transparent z-50 max-md:bg-theme-bg max-md:p-4">
                            <button 
                                onClick={() => setSelectedProject(null)}
                                className="flex items-center gap-3 text-theme-text hover:text-theme-accent transition-colors group"
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-x-1 transition-transform">
                                    <line x1="19" y1="12" x2="5" y2="12"></line>
                                    <polyline points="12 19 5 12 12 5"></polyline>
                                </svg>
                                <span className="font-display uppercase tracking-widest text-lg mt-1">Back</span>
                            </button>
                        </div>

                        <div className="max-w-[1200px] mx-auto px-[7vw] pb-32 pt-10 max-md:px-6 max-md:pt-4 max-md:pb-24">
                            <h2 className="text-5xl md:text-7xl font-display uppercase text-theme-text mb-4 leading-none max-md:text-4xl">{selectedProject.title}</h2>
                            <div className="text-theme-accent font-semibold tracking-widest uppercase mb-12 text-sm md:text-base border border-theme-accent px-4 py-1 rounded-full w-max max-md:mb-8">
                                {selectedProject.category}
                            </div>
                            
                            <img src={selectedProject.image} alt={selectedProject.title} className="w-full aspect-video md:aspect-[16/9] object-cover object-top border border-white/10 mb-12 shadow-2xl rounded-[2rem] max-md:mb-8" />
                            
                            <p className="text-theme-muted text-lg md:text-xl font-light leading-relaxed mb-12 max-w-[900px] max-md:text-white max-md:text-base max-md:mb-8">
                                {selectedProject.desc}
                            </p>

                            <div className="flex flex-wrap gap-6 max-md:gap-3">
                                {selectedProject.github && (
                                    <a href={selectedProject.github} target="_blank" rel="noreferrer" className="flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-bold uppercase tracking-wide hover:bg-theme-accent transition-colors max-md:gap-2 max-md:px-5 max-md:py-2.5 max-md:text-xs">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="max-md:w-4 max-md:h-4"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                                        View on GitHub
                                    </a>
                                )}
                                {selectedProject.demo && (
                                    <a href={selectedProject.demo} target="_blank" rel="noreferrer" className="flex items-center gap-3 border border-white/20 text-white px-8 py-4 rounded-full font-bold uppercase tracking-wide hover:border-theme-accent hover:text-theme-accent transition-colors max-md:gap-2 max-md:px-5 max-md:py-2.5 max-md:text-xs">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="max-md:w-4 max-md:h-4"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                                        Live Demo
                                    </a>
                                )}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* ============================================================ */}
            {/* All Projects Archive Modal                                   */}
            {/* ============================================================ */}
            <AnimatePresence>
                {showAllProjects && (
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="fixed inset-0 z-[9999] bg-theme-bg overflow-y-auto"
                    >
                        <div className="sticky top-0 w-full p-6 md:p-10 flex justify-between items-center bg-gradient-to-b from-theme-bg to-transparent z-50 max-md:bg-theme-bg max-md:p-4">
                            <button 
                                onClick={() => setShowAllProjects(false)}
                                className="flex items-center gap-3 text-theme-text hover:text-theme-accent transition-colors group"
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-x-1 transition-transform">
                                    <line x1="19" y1="12" x2="5" y2="12"></line>
                                    <polyline points="12 19 5 12 12 5"></polyline>
                                </svg>
                                <span className="font-display uppercase tracking-widest text-lg mt-1">Back</span>
                            </button>
                        </div>

                        <div className="max-w-[1600px] mx-auto px-[7vw] pb-32 pt-10 max-md:px-6 max-md:pt-4 max-md:pb-24">
                            <h2 className="text-4xl md:text-6xl font-display uppercase text-theme-text mb-16 leading-none max-md:mb-8">Project Archive</h2>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-md:gap-10">
                                {allProjects.map((project, idx) => (
                                    <motion.div 
                                        key={project.id}
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: idx * 0.1, duration: 0.5 }}
                                        className="group relative rounded-[2rem] overflow-hidden border border-white/10 bg-[#111] max-md:bg-white/5 flex flex-col"
                                    >
                                        {/* Image wrapper */}
                                        <div className="relative w-full aspect-video md:aspect-video overflow-hidden">
                                            <img src={project.image} alt={project.title} className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
                                            
                                            {/* LAPTOP ONLY: Overlay Details */}
                                            <div className="absolute inset-0 bg-black/85 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 md:p-12 max-md:hidden">
                                                <div className="translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                                                    <h3 className="text-3xl md:text-4xl font-display uppercase text-theme-accent mb-2">{project.title}</h3>
                                                    <p className="text-theme-text font-light text-sm md:text-base leading-relaxed mb-6">
                                                        {project.shortDesc}
                                                    </p>
                                                    
                                                    <div className="flex gap-4">
                                                        {project.github && (
                                                            <a href={project.github} target="_blank" rel="noreferrer" className="p-3 bg-white text-black rounded-full hover:bg-theme-accent transition-colors">
                                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                                                            </a>
                                                        )}
                                                        {project.demo && (
                                                            <a href={project.demo} target="_blank" rel="noreferrer" className="p-3 border border-white/20 text-white rounded-full hover:text-theme-accent hover:border-theme-accent transition-colors">
                                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                                                            </a>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* MOBILE ONLY: Content below the image with completely transparent background */}
                                        <div className="hidden max-md:flex flex-col p-5 pt-6 bg-transparent">
                                            <h3 className="text-2xl font-display uppercase text-theme-accent mb-2">{project.title}</h3>
                                            <p className="text-theme-text font-light text-sm leading-relaxed mb-5 line-clamp-3">
                                                {project.shortDesc}
                                            </p>
                                            <div className="flex gap-3">
                                                {project.github && (
                                                    <a href={project.github} target="_blank" rel="noreferrer" className="p-2.5 bg-white text-black rounded-full hover:bg-theme-accent transition-colors">
                                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                                                    </a>
                                                )}
                                                {project.demo && (
                                                    <a href={project.demo} target="_blank" rel="noreferrer" className="p-2.5 border border-white/20 text-white rounded-full hover:text-theme-accent hover:border-theme-accent transition-colors">
                                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};