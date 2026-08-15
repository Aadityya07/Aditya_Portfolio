import { motion } from 'framer-motion';
import resumePdf from '../assets/resume.pdf'; 

export const About = () => {
    return (
        <section id="about-me" className="min-h-screen w-full flex items-start pt-32 pb-24 px-[7vw] relative z-10 select-none">
            <div className="max-w-[1600px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
                
                <div className="flex flex-col justify-start">
                    <motion.h2 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="font-display text-[10vw] sm:text-6xl md:text-7xl lg:text-[80px] uppercase mb-6 leading-[0.9] text-theme-text tracking-[-0.01em] max-md:text-[12vw]"
                    >
                        About Me
                    </motion.h2>
                    
                    {/* DESCRIPTION - Now pure text-white */}
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="text-white mb-12 max-w-[600px] text-base md:text-[1.1rem] font-light leading-relaxed tracking-wide max-md:text-[15px] max-md:leading-[1.8]"
                    >
                        I am an Artificial Intelligence and Data Science undergraduate passionate about building intelligent systems and scalable web applications. 
                        <br className="hidden max-md:block" /><br className="hidden max-md:block" />
                        I enjoy combining AI, Machine Learning, and modern software engineering to create practical solutions.
                    </motion.p>

                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="grid grid-cols-3 gap-6 mb-12 max-w-[600px] max-md:flex max-md:flex-col max-md:gap-10"
                    >
                        <div className="max-md:flex max-md:items-baseline max-md:gap-4">
                            <div className="text-4xl md:text-5xl lg:text-6xl font-display text-theme-accent mb-2 max-md:mb-0 max-md:text-6xl">04</div>
                            <div className="text-sm md:text-base font-semibold text-theme-text">Major Projects</div>
                        </div>
                        <div className="max-md:flex max-md:items-baseline max-md:gap-4">
                            <div className="text-4xl md:text-5xl lg:text-6xl font-display text-theme-accent mb-2 max-md:mb-0 max-md:text-6xl">12+</div>
                            <div className="text-sm md:text-base font-semibold text-theme-text">Skills</div>
                        </div>
                        <div className="max-md:flex max-md:items-baseline max-md:gap-4">
                            <div className="text-4xl md:text-5xl lg:text-6xl font-display text-theme-accent mb-2 max-md:mb-0 max-md:text-6xl">01</div>
                            <div className="text-sm md:text-base font-semibold text-theme-text">Internship</div>
                        </div>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="grid grid-cols-2 gap-8 mb-12 border-t border-b border-white/10 py-8 max-w-[600px] max-md:grid-cols-1 max-md:gap-5 max-md:border-0 max-md:py-0"
                    >
                        <div className="max-md:flex max-md:items-baseline max-md:gap-2 max-md:flex-wrap">
                            <div className="text-sm md:text-base text-theme-text font-bold mb-1 max-md:mb-0">Phone No. :</div>
                            {/* Values updated to text-white/80 for that "light white" look */}
                            <div className="text-white/80 text-sm md:text-base font-light">+91 9284699877</div>
                        </div>
                        <div className="max-md:flex max-md:items-baseline max-md:gap-2 max-md:flex-wrap">
                            <div className="text-sm md:text-base text-theme-text font-bold mb-1 max-md:mb-0">Email :</div>
                            {/* Values updated to text-white/80 for that "light white" look */}
                            <div className="text-white/80 text-sm md:text-base font-light break-words">aditya.yadav.07.in@gmail.com</div>
                        </div>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="flex flex-col sm:flex-row sm:items-center justify-between gap-8 max-w-[600px]"
                    >
                        <div className="flex gap-6 items-center">
                            <a href="https://github.com/Aadityya07" target="_blank" rel="noreferrer" className="text-theme-text hover:text-theme-accent transition-colors">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                            </a>
                            <a href="https://www.linkedin.com/in/aditya1610" target="_blank" rel="noreferrer" className="text-theme-text hover:text-theme-accent transition-colors">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                            </a>
                            <a href="https://x.com/AdityaYadavDS" target="_blank" rel="noreferrer" className="text-theme-text hover:text-theme-accent transition-colors">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z"></path><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path></svg>
                            </a>
                            <a href="https://www.instagram.com/aadityya_06/?hl=en" target="_blank" rel="noreferrer" className="text-theme-text hover:text-theme-accent transition-colors">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                            </a>
                        </div>
                        
                        <a href={resumePdf} download="Aditya_Yadav_Resume.pdf" className="border-2 border-theme-accent text-theme-accent px-8 py-3 rounded-full hover:bg-theme-accent hover:text-black font-semibold uppercase tracking-wide transition-colors text-center max-md:w-full max-md:bg-theme-accent max-md:text-black">
                            Download Resume
                        </a>
                    </motion.div>
                </div>

                <div className="hidden lg:block w-full h-[580px]"></div>

            </div>
        </section>
    );
};