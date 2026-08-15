import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Services = () => {
    const [openIndex, setOpenIndex] = useState(null); 

    const servicesList = [
        {
            title: "AI & Machine Learning",
            items: [
                "Generative AI & Local LLM Integration",
                "Retrieval-Augmented Generation (RAG)",
                "Custom Convolutional Neural Networks",
                "Multimodal Agentic Workflows"
            ]
        },
        {
            title: "Full-Stack Web Development",
            items: [
                "React.js & Modern Frontend Interfaces",
                "Flask & Python Backend Architecture",
                "PostgreSQL Database Management",
                "RESTful API Design & Integration"
            ]
        },
        {
            title: "Data Science & Analytics",
            items: [
                "Data Cleaning & Preprocessing",
                "Feature Engineering",
                "Graph-Theoretic Algorithms",
                "Anomaly Detection"
            ]
        },
        {
            title: "Technical Leadership",
            items: [
                "End-to-end Project Orchestration",
                "Competitive Problem Solving",
                "Hackathon Prototyping",
                "Tech Stack Selection & Architecture"
            ]
        }
    ];

    return (
        <section id="about" className="min-h-screen w-full flex items-start pt-32 pb-24 px-[7vw] relative z-10 select-none">
            <div className="max-w-[1600px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
                
                <div className="flex flex-col justify-start">
                    <motion.h2 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="font-display text-[10vw] sm:text-6xl md:text-7xl lg:text-[80px] uppercase mb-6 leading-[0.9] text-theme-text tracking-[-0.01em]"
                    >
                        What I Specialize In
                    </motion.h2>
                    
                    {/* FIXED: Removed the forced line breaks for a smooth, natural flow */}
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="text-white mb-16 max-w-[600px] text-base md:text-[1.1rem] font-light leading-relaxed tracking-wide max-md:text-[15px] max-md:leading-[1.8] max-md:text-justify"
                    >
                        I am passionate about building intelligent AI solutions and scalable web applications by combining Artificial Intelligence, Machine Learning, and modern software engineering to create practical, real-world products.
                    </motion.p>

                    <div className="space-y-0 w-full max-w-[600px]">
                        {servicesList.map((service, idx) => {
                            const isOpen = openIndex === idx;
                            return (
                                <motion.div 
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.5, delay: 0.1 * idx }}
                                    className="border-b border-white/20 pb-4 pt-6"
                                >
                                    <button 
                                        onClick={() => setOpenIndex(isOpen ? null : idx)}
                                        className="w-full flex justify-between items-center text-2xl md:text-3xl lg:text-4xl font-display uppercase group tracking-wide text-theme-text text-left"
                                    >
                                        <div className="flex items-baseline gap-4">
                                            <span className="text-sm md:text-base font-sans font-light text-theme-muted tracking-widest opacity-70">
                                                0{idx + 1}
                                            </span>
                                            <span className={`transition-colors duration-400 ${isOpen ? 'text-theme-accent' : 'group-hover:text-theme-accent'}`}>
                                                {service.title}
                                            </span>
                                        </div>
                                        
                                        <motion.svg 
                                            animate={{ rotate: isOpen ? 0 : 180 }} 
                                            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                                            width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                                            className={`ml-4 shrink-0 transition-colors ${isOpen ? 'text-theme-accent' : 'text-theme-muted group-hover:text-theme-accent'}`}
                                        >
                                            <polyline points="18 15 12 9 6 15"></polyline>
                                        </motion.svg>
                                    </button>
                                    <AnimatePresence>
                                        {isOpen && (
                                            <motion.div 
                                                initial={{ height: 0, opacity: 0 }} 
                                                animate={{ height: 'auto', opacity: 1 }} 
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                                                className="overflow-hidden pl-10 md:pl-12"
                                            >
                                                <ul className="text-white/95 mt-6 mb-2 space-y-3 text-sm md:text-base font-light tracking-wide list-none">
                                                    {service.items.map((item, i) => (
                                                        <li key={i} className="flex items-start gap-2">
                                                            <span className="text-theme-accent opacity-60 mt-1.5 w-1.5 h-1.5 rounded-full bg-theme-accent shrink-0"></span>
                                                            {item}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                <div className="hidden lg:block w-full h-[580px]"></div>

            </div>
        </section>
    );
};