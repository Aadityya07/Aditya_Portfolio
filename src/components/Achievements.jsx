import { motion } from 'framer-motion';

const achievementsData = [
    {
        id: "hackathons",
        title: "Hackathon Victories & Leadership",
        subtitle: "6+ Hackathons | Multiple Podiums",
        description: "Secured victories in multiple institutional hackathons including the Smart India Hackathon (SIH) internal rounds. Reached the national finals of the RIFT'26 Hackathon organized by PW Institute of Innovation. Consistently served as the primary technical lead for project teams like Team NeuroVanta.",
        badge: "Winner / Finalist"
    },
    {
        id: "saige",
        title: "Secretary – SAIGE",
        subtitle: "Society of Artificial Intelligence & Generative AI",
        description: "Spearheaded technical initiatives, organized campus-wide AI workshops, and coordinated structured Generative AI learning programs. Actively mentored undergraduate peers in Machine Learning algorithms and LLM integration.",
        badge: "Leadership"
    }
];

export const Achievements = () => {
    return (
        <section 
            id="achievements" 
            className="w-full min-h-screen flex flex-col justify-center pt-28 sm:pt-32 pb-16 px-[7vw] max-md:px-6 relative z-10 select-none bg-transparent font-sans overflow-hidden scroll-mt-28"
        >
            <div className="max-w-[1600px] mx-auto w-full my-auto">
                
                {/* Section Header */}
                <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-14 gap-3 border-b border-white/10 pb-6 md:border-none md:pb-0">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="font-display text-5xl md:text-6xl lg:text-7xl uppercase leading-none text-theme-text tracking-[-0.01em] max-md:text-[13vw]"
                    >
                        Achievements
                    </motion.h2>
                    
                    <motion.p 
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="text-theme-muted font-light text-xs sm:text-sm tracking-widest uppercase max-w-[280px] text-left sm:text-right max-md:text-[10px]"
                    >
                        Milestones & Leadership
                    </motion.p>
                </div>

                {/* Interactive Cards - Lightened background for premium feel */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 w-full mt-4 md:mt-0">
                    {achievementsData.map((item, idx) => {
                        return (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                whileHover={{ 
                                    y: -8, 
                                    scale: 1.01,
                                    transition: { duration: 0.3, ease: "easeOut" } 
                                }}
                                transition={{ duration: 0.6, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
                                /* FIXED: Replaced dark #1a1a1e with frosted white/5 for a brighter, cleaner box color */
                                className="group relative rounded-3xl p-6 sm:p-8 md:p-10 transition-colors duration-400 overflow-hidden bg-white/5 backdrop-blur-md border border-white/10 hover:border-theme-accent/50 shadow-[0_10px_30px_rgba(0,0,0,0.2)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] flex flex-col justify-between min-h-[240px] md:min-h-[280px] cursor-pointer"
                            >
                                {/* Top Rim Light Reflection */}
                                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 group-hover:via-theme-accent/50 to-transparent pointer-events-none transition-all duration-500" />

                                {/* Subtle Ambient Spotlight on Hover */}
                                <div className="absolute inset-0 bg-gradient-to-br from-theme-accent/[0.07] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                                <div className="relative z-10">
                                    <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
                                        <span className="text-[10px] md:text-xs font-mono tracking-widest text-theme-muted group-hover:text-white uppercase transition-colors duration-300">
                                            {item.subtitle}
                                        </span>

                                        {/* Card Badge */}
                                        <div className="w-max px-3 py-1 rounded-full text-[10px] md:text-xs font-mono tracking-wider uppercase bg-black/40 border border-white/10 text-white group-hover:border-theme-accent/40 group-hover:text-theme-accent group-hover:bg-theme-accent/10 transition-all duration-300">
                                            {item.badge}
                                        </div>
                                    </div>

                                    <h3 className="font-display text-2xl md:text-3xl lg:text-4xl uppercase tracking-wide text-white group-hover:text-theme-accent transition-colors duration-300 mb-3 md:mb-4 leading-tight">
                                        {item.title}
                                    </h3>

                                    <p className="text-sm md:text-base font-light text-white/70 leading-relaxed group-hover:text-white/90 transition-colors duration-300 max-md:text-[13.5px] max-md:leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
};