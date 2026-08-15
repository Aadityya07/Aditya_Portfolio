import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import companyLogo from '../assets/c1.png';

const experienceData = {
    role: "Full Stack Developer Intern",
    company: "Nexonica Systems",
    duration: "January 2026 – February 2026",
    responsibilities: [
        "Built and optimized backend systems using Flask and designed REST APIs for scalable architecture.",
        "Worked with PostgreSQL database integration to improve overall database efficiency and backend structure.",
        "Developed AI-powered applications using Python, implementing custom text-processing pipelines.",
        "Built production-ready projects combining Generative AI with real-world full-stack deployment."
    ],
    tech: ["Flask", "Python", "PostgreSQL", "React", "REST APIs"]
};

export const Experience = () => {
    const [isMobileExpanded, setIsMobileExpanded] = useState(false);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.1 }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, x: 100 },
        visible: { 
            opacity: 1, 
            x: 0,
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
        }
    };

    return (
        <section id="experience" className="w-full min-h-screen flex flex-col justify-center relative z-10 select-none bg-transparent py-12 px-[7vw] overflow-hidden max-md:pt-28 max-md:pb-10 max-md:px-6">
            <div className="max-w-[1600px] mx-auto w-full">
                
                <motion.h2 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="font-display text-4xl md:text-6xl lg:text-7xl uppercase mb-8 md:mb-10 text-theme-text tracking-wide max-md:text-[11vw] max-md:leading-[0.95] max-md:mb-6"
                >
                    Where I've Worked
                </motion.h2>

                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="flex flex-col lg:flex-row gap-6 w-full max-md:gap-8"
                >
                    {/* LEFT SIDE: FEATURED EXPERIENCE (Main Card) */}
                    <div className="flex-1 flex flex-col">
                        <div className="text-theme-muted font-light tracking-widest text-xs md:text-sm uppercase mb-3 pl-2">
                            Featured Experience
                        </div>
                        
                        <motion.div 
                            variants={cardVariants}
                            className="flex flex-col md:flex-row w-full h-full bg-[#111111]/60 backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden hover:border-theme-accent/30 transition-colors duration-500 shadow-2xl"
                        >
                            {/* Company Branding Column */}
                            <div className="w-full md:w-[35%] bg-black/40 p-8 flex flex-col items-center justify-center text-center border-b md:border-b-0 md:border-r border-white/5 relative group max-md:py-8 max-md:px-6">
                                <div className="absolute inset-0 bg-theme-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl pointer-events-none"></div>
                                
                                <img 
                                    src={companyLogo} 
                                    alt="Nexonica Systems Logo" 
                                    className="w-20 h-20 mb-6 object-contain relative z-10 drop-shadow-xl group-hover:scale-105 transition-transform duration-500 max-md:w-16 max-md:h-16 max-md:mb-4" 
                                />
                                
                                <h3 className="text-xl md:text-2xl font-display uppercase tracking-wider text-theme-text mb-2 relative z-10 max-md:mb-1">
                                    {experienceData.company}
                                </h3>
                                <p className="text-theme-muted font-light text-xs md:text-sm tracking-widest uppercase relative z-10 max-md:text-[10px]">
                                    {experienceData.duration}
                                </p>
                            </div>

                            {/* Details Column */}
                            <div className="w-full md:w-[65%] p-6 md:p-8 flex flex-col justify-between relative max-md:p-6">
                                <div>
                                    <h3 className="text-2xl md:text-4xl font-display uppercase text-theme-text mb-6 leading-tight max-md:text-[7vw] max-md:mb-2">
                                        {experienceData.role}
                                    </h3>
                                    
                                    {/* MOBILE ONLY: "More" / "Hide" Button */}
                                    <button 
                                        onClick={() => setIsMobileExpanded(!isMobileExpanded)}
                                        className="hidden max-md:inline-block text-theme-accent text-sm font-semibold tracking-wider uppercase transition-colors"
                                    >
                                        {isMobileExpanded ? "Hide" : "More"}
                                    </button>

                                    {/* MOBILE EXPANDABLE WRAPPER (Always open on laptop) */}
                                    <motion.div
                                        initial={false}
                                        animate={{ 
                                            height: isMobileExpanded ? "auto" : 0, 
                                            opacity: isMobileExpanded ? 1 : 0
                                        }}
                                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                                        className="overflow-hidden md:!h-auto md:!opacity-100"
                                    >
                                        <div className="pt-5 md:pt-0">
                                            <h4 className="text-theme-accent font-semibold tracking-widest text-xs md:text-sm uppercase mb-4 max-md:mb-3">
                                                Key Contributions & Impact
                                            </h4>
                                            
                                            <ul className="space-y-3 mb-8 max-md:mb-6">
                                                {experienceData.responsibilities.map((item, i) => (
                                                    <li key={i} className="flex items-start gap-4 group max-md:gap-3">
                                                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-white/20 shrink-0 group-hover:bg-theme-accent transition-colors"></div>
                                                        <p className="text-theme-muted font-light leading-relaxed text-sm group-hover:text-white transition-colors max-md:text-[13px] max-md:leading-[1.7] max-md:text-white/90">
                                                            {item}
                                                        </p>
                                                    </li>
                                                ))}
                                            </ul>

                                            <div>
                                                <h4 className="text-theme-muted font-light tracking-widest text-xs uppercase mb-3 max-md:text-[10px]">
                                                    Technologies Used
                                                </h4>
                                                <div className="flex flex-wrap gap-2">
                                                    {experienceData.tech.map((tech, i) => (
                                                        <span key={i} className="px-3 py-1 md:px-4 md:py-1.5 rounded-full border border-white/10 bg-white/5 text-theme-text text-xs md:text-sm hover:border-theme-accent/50 transition-colors max-md:text-[11px]">
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* RIGHT SIDE: MORE ROLES */}
                    <div className="w-full lg:w-[320px] shrink-0 flex flex-col mt-8 lg:mt-0 max-md:mt-0">
                        <div className="text-theme-muted font-light tracking-widest text-xs md:text-sm uppercase mb-3 pl-2">
                            More Roles
                        </div>
                        
                        <motion.div 
                            variants={cardVariants}
                            className="flex-1 min-h-[250px] bg-[#111111]/20 border border-dashed border-white/20 rounded-3xl p-8 flex flex-col items-center justify-center text-center group hover:bg-[#111111]/40 hover:border-theme-accent/50 transition-all duration-500 cursor-default max-md:min-h-[180px] max-md:p-6"
                        >
                            <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-theme-accent/10 group-hover:border-theme-accent/30 transition-all duration-500 max-md:w-12 max-md:h-12 max-md:mb-4">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-theme-muted group-hover:text-theme-accent transition-colors md:w-6 md:h-6">
                                    <line x1="12" y1="5" x2="12" y2="19"></line>
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                </svg>
                            </div>
                            
                            <h3 className="text-lg md:text-xl font-display uppercase tracking-widest text-theme-text mb-2 group-hover:text-theme-accent transition-colors max-md:mb-1">
                                Next Chapter
                            </h3>
                            <p className="text-theme-muted font-light text-xs md:text-sm tracking-wider uppercase max-md:text-[10px]">
                                Open to Opportunities
                            </p>
                        </motion.div>
                    </div>

                </motion.div>
            </div>
        </section>
    );
};