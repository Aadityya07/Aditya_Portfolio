import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValueEvent, AnimatePresence } from 'framer-motion';

import pythonImg from '../assets/skills/python1.png';
import aiImg from '../assets/skills/ai1.png';
import reactImg from '../assets/skills/react1.png';
import flaskImg from '../assets/skills/flask1.png';
import sqlImg from '../assets/skills/sql1.png';
import javascriptImg from '../assets/skills/javascript1.png';
import postmanImg from '../assets/skills/postman1.png';
import gitImg from '../assets/skills/git1.png';
import tailwindImg from '../assets/skills/Tailwind CSS.png';

const skillsData = [
    { id: 0, name: "Python", desc: "Core language for AI, data pipelines, and scalable backend services. Highly efficient for complex machine learning integration.", image: pythonImg, color: "#3776AB" },
    { id: 1, name: "AI & ML", desc: "Specializing in Machine Learning, Deep Learning, and Generative AI. Training models for real-world analytical applications.", image: aiImg, color: "#8A2BE2" },
    { id: 2, name: "React", desc: "Building interactive, state-driven frontends with modern hooks, complex state management, and highly reusable component architectures.", image: reactImg, color: "#61DAFB" },
    { id: 3, name: "JavaScript", desc: "Essential scripting for dynamic, interactive, and seamless web experiences across modern runtime environments.", image: javascriptImg, color: "#FFD43B" },
    { id: 4, name: "Tailwind CSS", desc: "Rapidly building custom, responsive, and modern user interfaces without leaving the HTML using utility-first styling.", image: tailwindImg, color: "#38B2AC" },
    { id: 5, name: "Flask", desc: "Designing lightweight, highly scalable RESTful backend architectures and seamless database integrations.", image: flaskImg, color: "#D3D3D3" },
    { id: 6, name: "SQL", desc: "Advanced data querying, indexing, complex joins, and scalable relational database analytics and architecture.", image: sqlImg, color: "#00758F" },
    { id: 7, name: "Postman", desc: "Testing, developing, and documenting robust and scalable REST APIs for seamless frontend-backend communication.", image: postmanImg, color: "#FF6C37" },
    { id: 8, name: "Git & GitHub", desc: "Version control, collaborative development, resolving merge conflicts, and maintaining seamless deployment pipelines.", image: gitImg, color: "#2a4c79" }
];

const wheelItems = [...skillsData, ...skillsData.slice(0, 6)];

export const Skills = () => {
    const containerRef = useRef(null);
    const modalScrollRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [showToolKit, setShowToolKit] = useState(false);
    const [modalScrollIndex, setModalScrollIndex] = useState(0);

    useEffect(() => {
        if (showToolKit) {
            document.body.style.overflow = 'hidden';
            const navs = document.querySelectorAll('nav');
            navs.forEach(nav => nav.style.display = 'none');
        } else {
            document.body.style.overflow = 'unset';
            const navs = document.querySelectorAll('nav');
            navs.forEach(nav => nav.style.display = '');
        }
        return () => {
            document.body.style.overflow = 'unset';
            const navs = document.querySelectorAll('nav');
            navs.forEach(nav => nav.style.display = '');
        };
    }, [showToolKit]);

    const handleModalScroll = () => {
        if (!modalScrollRef.current) return;
        const { scrollTop, scrollHeight, clientHeight } = modalScrollRef.current;
        const progress = scrollTop / (scrollHeight - clientHeight || 1);
        const dashIndex = Math.min(Math.floor(progress * 4), 3);
        setModalScrollIndex(dashIndex);
    };

    const scrollToSection = (index) => {
        if (!modalScrollRef.current) return;
        const { scrollHeight, clientHeight } = modalScrollRef.current;
        const targetTop = (index / 3) * (scrollHeight - clientHeight);
        modalScrollRef.current.scrollTo({ top: targetTop, behavior: 'smooth' });
    };

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 40,
        damping: 20,
        mass: 1,
        restDelta: 0.001
    });

    const wheelRotation = useTransform(smoothProgress, [0, 0.12, 0.88, 1], [0, 0, 192, 192]);

    const dynamicRotate = useTransform(smoothProgress, (latest) => {
        let p = (latest - 0.12) / (0.88 - 0.12);
        p = Math.min(Math.max(p, 0), 1);
        const currentAngle = p * 192;
        return wheelItems.map((_, i) => {
            const step = 24;
            const baseAngle = -i * step;
            const netAngle = baseAngle + currentAngle;
            if (netAngle >= -4) return 0;
            const tilt = Math.abs(netAngle + 4);
            return -tilt * 0.35;
        });
    });

    const dynamicTiltX = useTransform(smoothProgress, (latest) => {
        let p = (latest - 0.12) / (0.88 - 0.12);
        p = Math.min(Math.max(p, 0), 1);
        const currentAngle = p * 192;
        return wheelItems.map((_, i) => {
            const step = 24;
            const baseAngle = -i * step;
            const netAngle = baseAngle + currentAngle;
            if (netAngle >= -4) return 0;
            const tilt = Math.abs(netAngle + 4);
            return Math.min(tilt * 0.45, 35);
        });
    });

    useMotionValueEvent(wheelRotation, "change", (latestAngle) => {
        const exactIndex = Math.round(latestAngle / 24);
        const safeIndex = Math.min(Math.max(exactIndex, 0), skillsData.length - 1);
        if (safeIndex !== activeIndex) {
            setActiveIndex(safeIndex);
        }
    });

    const activeSkill = skillsData[activeIndex];

    return (
        <section id="skills" className="w-full relative z-10 select-none font-sans bg-[#0d0d12] max-md:bg-transparent max-md:z-auto">
            <div ref={containerRef} className="relative w-full h-[400vh] max-md:hidden">
                <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#0d0d12]">
                    <motion.div
                        animate={{ backgroundColor: activeSkill.color }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                        className="absolute top-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full mix-blend-screen blur-[140px] opacity-[0.25] pointer-events-none"
                    />

                    <div className="relative z-30 w-full pt-[10vh] px-[8vw] pointer-events-none flex flex-col items-start">
                        <h2 className="text-white text-[56px] md:text-[72px] font-bold tracking-tight leading-none mb-6">
                            My Skills
                        </h2>
                        <p className="text-[#a0a0a0] text-sm md:text-base font-light leading-relaxed w-full text-justify mb-8">
                           A collection of the technologies, frameworks, and tools I use to build intelligent applications and modern web experiences. My stack includes Python, React, JavaScript, Tailwind CSS, Flask, SQL, PostgreSQL, Git & GitHub, Postman, and AI/ML technologies, allowing me to work across both frontend and backend development while integrating intelligent features where needed.
                        </p>
                        <motion.div className="pointer-events-auto" layout>
                            <motion.button
                                onClick={() => setShowToolKit(true)}
                                animate={{
                                    backgroundColor: activeSkill.color,
                                    boxShadow: `0 0 25px ${activeSkill.color}50`
                                }}
                                transition={{ duration: 0.8, ease: "easeInOut" }}
                                className="px-8 py-2.5 rounded-full text-black font-semibold tracking-wide text-sm transition-transform duration-300 hover:scale-105 cursor-pointer"
                            >
                                see more
                            </motion.button>
                        </motion.div>
                    </div>

                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none flex flex-col justify-end items-center">
                        <div className="relative w-[600px] h-[600px] md:w-[800px] md:h-[800px] translate-y-[45%] shrink-0 aspect-square">
                            <div className="absolute inset-0 rounded-full border-[1.5px] border-white/40"></div>
                            <div className="absolute inset-[80px] rounded-full border-[1.5px] border-white/40"></div>

                            <motion.div
                                style={{ rotate: wheelRotation }}
                                className="w-full h-full relative rounded-full"
                            >
                                {wheelItems.map((skill, index) => {
                                    const step = 24;
                                    const baseAngle = -index * step;
                                    const isActive = index === activeIndex;

                                    return (
                                        <div
                                            key={`${skill.id}-${index}`}
                                            className="absolute top-1/2 left-1/2"
                                            style={{
                                                transform: `translate(-50%, -50%) rotate(${baseAngle}deg)`
                                            }}
                                        >
                                            <div className="-translate-y-[260px] md:-translate-y-[360px]">
                                                <motion.div
                                                    style={{
                                                        rotate: useTransform(wheelRotation, (currentWheelAngle) => {
                                                            return -currentWheelAngle - baseAngle;
                                                        }),
                                                        rotateZ: useTransform(dynamicRotate, (vals) => vals[index] || 0),
                                                        rotateX: useTransform(dynamicTiltX, (vals) => vals[index] || 0),
                                                        transformPerspective: 800
                                                    }}
                                                    className="relative flex items-center justify-center w-[100px] h-[100px] md:w-[120px] md:h-[120px]"
                                                >
                                                    <div style={{ rotate: -baseAngle }} className="relative flex items-center justify-center w-full h-full">
                                                        <motion.div
                                                            animate={{
                                                                opacity: isActive ? 0.85 : 0,
                                                                scale: isActive ? 1.4 : 0.5
                                                            }}
                                                            transition={{ duration: 0.4, ease: "easeOut" }}
                                                            className="absolute inset-[-10px] rounded-full blur-[25px] -z-10"
                                                            style={{ backgroundColor: skill.color }}
                                                        />
                                                        <motion.div
                                                            animate={{ scale: isActive ? 1.35 : 1 }}
                                                            transition={{ duration: 0.4, type: "spring", bounce: 0.4 }}
                                                            className="w-full h-full flex items-center justify-center bg-transparent"
                                                        >
                                                            <img
                                                                src={skill.image}
                                                                alt={skill.name}
                                                                className="w-[95%] h-[95%] object-contain drop-shadow-xl"
                                                            />
                                                        </motion.div>
                                                    </div>
                                                </motion.div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </motion.div>

                            <div className="absolute top-[28%] md:top-[30%] left-1/2 -translate-x-1/2 w-[90vw] max-w-[650px] flex items-center justify-center pointer-events-auto">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeSkill.id}
                                        initial={{ opacity: 0, y: 15, filter: "blur(5px)" }}
                                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                        exit={{ opacity: 0, y: -15, filter: "blur(5px)" }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                        className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-6 md:gap-10 relative p-4"
                                    >
                                        <div className="relative shrink-0 flex items-center justify-center">
                                            <div
                                                className="absolute inset-0 rounded-full blur-[45px] opacity-60 -z-10"
                                                style={{ backgroundColor: activeSkill.color }}
                                            />
                                            <img
                                                src={activeSkill.image}
                                                alt={activeSkill.name}
                                                className="w-[110px] h-[110px] md:w-[130px] md:h-[130px] object-contain drop-shadow-2xl"
                                            />
                                        </div>
                                        <div className="flex flex-col justify-center max-w-[380px]">
                                            <h3 className="text-white font-bold text-[32px] md:text-[42px] tracking-tight leading-none mb-3">
                                                {activeSkill.name}
                                            </h3>
                                            <p className="text-[#a0a0a0] text-xs md:text-sm font-light leading-relaxed">
                                                {activeSkill.desc}
                                            </p>
                                        </div>
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="hidden max-md:flex flex-col items-center px-6 pt-24 pb-16 relative z-10 text-center">
                <h2 className="font-display text-[13vw] uppercase leading-[0.9] text-theme-text tracking-[-0.01em] mb-4">
                    My Skills
                </h2>
                <p className="text-white/80 text-[14px] font-light leading-[1.8] mb-8 text-center max-w-[400px]">
                    A collection of the technologies, frameworks, and tools I use to build intelligent applications and modern web experiences.
                </p>

                <div className="flex flex-wrap justify-center gap-3 mb-10 w-full max-w-[400px]">
                    {skillsData.map((skill) => (
                        <div key={skill.id} className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 shadow-lg">
                            <img src={skill.image} alt={skill.name} className="w-5 h-5 object-contain" />
                            <span className="text-white/90 text-[11px] font-medium tracking-wide uppercase">{skill.name}</span>
                        </div>
                    ))}
                </div>

                <button
                    onClick={() => setShowToolKit(true)}
                    className="w-max bg-theme-accent text-black px-8 py-3.5 rounded-full font-semibold uppercase tracking-widest transition-transform duration-300 hover:scale-105 text-center shadow-[0_0_20px_rgba(217,255,102,0.3)] text-xs sm:text-sm"
                >
                    View Full Tool Kit
                </button>
            </div>

            <AnimatePresence>
                {showToolKit && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-[999999] bg-black/90 max-md:bg-[#0d0d12] flex items-center justify-center p-4 sm:p-6 md:p-10"
                    >
                        <motion.div
                            initial={{ scale: 0.95, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.95, y: 20 }}
                            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                            className="bg-[#18181c] border border-white/10 rounded-3xl shadow-2xl w-full max-w-[1100px] max-h-[85vh] md:max-h-[90vh] flex flex-col overflow-hidden relative"
                        >
                            <button
                                onClick={() => setShowToolKit(false)}
                                className="absolute top-4 right-4 md:top-6 md:right-6 z-50 p-2 text-[#a0a0a0] hover:text-white bg-white/5 hover:bg-white/10 rounded-full transition-all cursor-pointer hover:scale-105"
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                </svg>
                            </button>

                            <div className="pt-8 pb-6 px-6 md:px-16 text-center border-b border-white/5 relative z-10 shrink-0 max-md:pt-6 max-md:pb-4">
                                <h3 className="text-3xl md:text-5xl font-display uppercase tracking-wide text-[#FACC15] mb-2 max-md:text-2xl">
                                    Tool Kit
                                </h3>
                                <p className="text-[#a0a0a0] text-[10px] md:text-sm font-light max-w-[650px] mx-auto leading-relaxed mb-1">
                                    A comprehensive overview of the technical skills, languages, frameworks, and developer tools I leverage to engineer robust, AI-powered systems and modern full-stack web applications.
                                </p>
                            </div>

                            <div className="flex-1 overflow-y-auto p-4 md:p-10 flex flex-col md:flex-row items-center gap-6 md:gap-10 relative z-10 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] max-md:pb-12"
                                 ref={modalScrollRef}
                                 onScroll={handleModalScroll}
                            >
                                <div className="hidden sm:flex items-center gap-3 shrink-0 self-center">
                                    <span className="text-white font-bold tracking-widest uppercase text-base md:text-lg -rotate-90 origin-center whitespace-nowrap">
                                        Skills
                                    </span>
                                    <div className="w-1 h-16 bg-[#FACC15] rounded-full"></div>
                                </div>

                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6 w-full my-auto py-2">
                                    {skillsData.map((skill) => (
                                        <div
                                            key={skill.id}
                                            className="bg-[#121214] border border-white/5 hover:border-white/10 rounded-2xl p-4 md:p-6 flex flex-col items-center justify-center text-center group transition-all duration-300 shadow-md hover:-translate-y-1 aspect-square"
                                        >
                                            <div className="w-10 h-10 md:w-16 md:h-16 flex items-center justify-center mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                                                <img
                                                    src={skill.image}
                                                    alt={skill.name}
                                                    className="w-full h-full object-contain"
                                                />
                                            </div>
                                            <span className="text-white font-semibold uppercase tracking-wider text-[10px] md:text-sm">
                                                {skill.name}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                <div className="hidden md:flex flex-col justify-center gap-3 shrink-0 self-center pl-2">
                                    {[0, 1, 2, 3].map((idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => scrollToSection(idx)}
                                            className={`w-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                                                modalScrollIndex === idx
                                                    ? 'h-9 bg-[#FACC15]'
                                                    : 'h-5 bg-white/20 hover:bg-white/40'
                                            }`}
                                            aria-label={`Scroll to section ${idx + 1}`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};