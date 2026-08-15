import { motion } from 'framer-motion';

const educationData = [
    {
        id: "be",
        level: "Bachelor of Engineering",
        degree: "Artificial Intelligence & Data Science",
        institution: "PVG's College of Engineering, Nashik, Maharashtra",
        duration: "August 2023 — June 2027",
        score: "CGPA: 8.50"
    },
    {
        id: "hsc",
        level: "Higher Secondary Certificate (HSC)",
        degree: "Science",
        institution: "G.D. Sawant Arts, Commerce, Science & B.C.S College, Nashik, Maharashtra",
        duration: "November 2020 — March 2022",
        score: "Score: 65.00%"
    },
    {
        id: "ssc",
        level: "Secondary School Certificate (SSC)",
        degree: "High School",
        institution: "K.K. Wagh English School, Nashik, Maharashtra",
        duration: "June 2010 — March 2020",
        score: "Score: 80.40%"
    }
];

export const Education = () => {
    return (
        <section 
            id="education" 
            className="w-full min-h-screen flex flex-col justify-center pt-28 sm:pt-32 pb-16 px-[7vw] relative z-10 select-none bg-transparent font-sans overflow-hidden scroll-mt-28"
        >
            <div className="max-w-[1600px] mx-auto w-full my-auto">
                
                {/* Compact Section Header */}
                <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 sm:mb-12 border-b border-white/10 pb-6 gap-4">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase leading-none text-theme-text tracking-[-0.01em]"
                    >
                        Education
                    </motion.h2>
                    
                    <motion.p 
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="text-theme-muted font-light text-xs sm:text-sm tracking-widest uppercase max-w-[280px] text-left sm:text-right"
                    >
                        Academic foundation & technical qualifications
                    </motion.p>
                </div>

                {/* Compact Architectural List - Designed to fit inside 100vh */}
                <div className="flex flex-col w-full">
                    {educationData.map((edu, idx) => {
                        const indexNumber = `0${idx + 1}`;
                        return (
                            <motion.div 
                                key={edu.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                                className="group relative border-b border-white/10 py-6 sm:py-7 md:py-8 transition-colors duration-400 hover:border-theme-accent/50"
                            >
                                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 items-start md:items-center">
                                    
                                    {/* Index Number */}
                                    <div className="md:col-span-1 flex items-center">
                                        <span className="font-display text-xl sm:text-2xl md:text-3xl text-theme-muted/40 group-hover:text-theme-accent transition-colors duration-300 font-bold">
                                            {indexNumber}
                                        </span>
                                    </div>

                                    {/* Degree & Major */}
                                    <div className="md:col-span-7 flex flex-col justify-center">
                                        <h3 className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl uppercase tracking-wide text-theme-text group-hover:text-theme-accent transition-colors duration-300 leading-tight mb-1">
                                            {edu.level}
                                        </h3>
                                        <p className="text-sm sm:text-base md:text-lg font-medium text-theme-text/90 tracking-wide">
                                            {edu.degree}
                                        </p>
                                        <p className="text-xs sm:text-sm font-light text-theme-muted mt-1 leading-relaxed max-w-[550px]">
                                            {edu.institution}
                                        </p>
                                    </div>

                                    {/* Duration & Performance Badge */}
                                    <div className="md:col-span-4 flex flex-row md:flex-col justify-between md:justify-center items-center md:items-end gap-2 sm:gap-3 pt-3 md:pt-0 border-t border-white/5 md:border-t-0 w-full">
                                        <div className="text-xs sm:text-sm font-mono tracking-widest text-theme-muted uppercase group-hover:text-theme-text transition-colors duration-300">
                                            {edu.duration}
                                        </div>
                                        
                                        <div className="px-3.5 py-1 sm:px-4 sm:py-1.5 rounded-full border border-theme-accent/30 bg-theme-accent/10 text-theme-accent font-mono text-xs sm:text-sm font-semibold tracking-wider uppercase group-hover:border-theme-accent group-hover:bg-theme-accent group-hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(217,255,102,0.05)]">
                                            {edu.score}
                                        </div>
                                    </div>

                                </div>
                            </motion.div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
};