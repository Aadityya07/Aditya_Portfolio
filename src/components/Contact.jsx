import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import contactImg from '../assets/Image2.png';
import palmImg from '../assets/Palm.png'; 

export const Contact = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState("");
    const [showPalm, setShowPalm] = useState(true);

    // Natural alternating cycle between Palm and "Hi" (every 4 seconds)
    useEffect(() => {
        const interval = setInterval(() => {
            setShowPalm((prev) => !prev);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    // Formspree Integration Logic
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        const form = e.target;
        const data = new FormData(form);
        
        try {
            const response = await fetch("https://formspree.io/f/xaqlkqrq", {
                method: "POST",
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            });
            
            if (response.ok) {
                alert("Transmission successful! Your message has been sent.");
                form.reset();
                setSelectedCategory(""); 
            } else {
                alert("Error sending transmission. Please check your connection and try again.");
            }
        } catch (error) {
            alert("Error sending transmission. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="w-full relative z-10 select-none bg-transparent">
            
            {/* 1. Main Content Area - Enforces minimum 100vh to push the footer completely off-screen */}
            <div className="w-full min-h-screen flex flex-col justify-center pt-[15vh] pb-[15vh]">
                <div className="w-full max-w-[1150px] mx-auto px-[5vw] sm:px-[7vw] flex flex-col lg:flex-row gap-12 lg:gap-16 items-start justify-center">
                    
                    {/* Left: Image Container — MOBILE: smaller image like reference */}
                    <div className="relative w-full max-w-[320px] sm:max-w-[380px] shrink-0 mx-auto lg:mx-0 mt-0 lg:mt-[100px] max-md:max-w-[240px]">
                        <img
                            src={contactImg}
                            alt="Contact Profile"
                            className="w-full h-auto aspect-[4/5] object-cover rounded-[2rem]"
                        />

                        {/* Automated Floating Animation Button — MOBILE: smaller circle like reference */}
                        <div className="absolute -bottom-6 -left-6 md:-bottom-8 md:-left-10 w-32 h-32 md:w-[140px] md:h-[140px] bg-theme-accent rounded-full flex items-center justify-center shadow-xl text-black overflow-hidden pointer-events-none max-md:-bottom-4 max-md:-left-4 max-md:w-20 max-md:h-20">
                            <AnimatePresence mode="wait">
                                {showPalm ? (
                                    <motion.div
                                        key="palm"
                                        initial={{ opacity: 0, scale: 0.5 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.5 }}
                                        transition={{ duration: 0.3 }}
                                        className="flex items-center justify-center"
                                    >
                                        <motion.img
                                            src={palmImg}
                                            alt="Waving Palm"
                                            // Larger image, origin set to bottom-right for a natural wrist pivot
                                            className="w-16 h-16 md:w-20 md:h-20 object-contain origin-[80%_100%] max-md:w-10 max-md:h-10"
                                            animate={{ rotate: [0, 20, -10, 20, -10, 15, 0] }}
                                            transition={{ 
                                                duration: 1.5, 
                                                ease: "easeInOut",
                                                repeat: Infinity,
                                                repeatDelay: 1 // Pauses for 1 second between waves
                                            }}
                                        />
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="hi"
                                        initial={{ opacity: 0, scale: 0.5 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.5 }}
                                        transition={{ duration: 0.3 }}
                                        className="flex items-center justify-center"
                                    >
                                        <span className="text-4xl md:text-5xl font-medium text-black tracking-tight max-md:text-2xl">Hi</span>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* Right: Form & Text */}
                    <div className="flex-1 w-full flex flex-col justify-start">
                        
                        {/* Headings */}
                        <h2 className="font-display text-[12vw] sm:text-6xl md:text-[68px] uppercase text-theme-text mb-4 leading-[0.9]">
                            LET'S WORK TOGETHER
                        </h2>
                        <p className="text-theme-text/80 font-light text-sm md:text-base mb-8 max-w-[480px] leading-relaxed">
                            Have an opportunity, an idea, or a project in mind?
                            <br />
                            I'd love to hear about it and explore how we can build something meaningful together.
                        </p>

                        {/* Form connected to Formspree */}
                        <form className="flex flex-col gap-4 w-full max-w-[550px]" onSubmit={handleSubmit}>
                            
                            {/* Row 1: Name & Email - Placeholders updated to Aditya Yadav */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                <div className="flex-1 flex flex-col gap-1.5">
                                    <label className="text-theme-accent text-xs font-semibold tracking-wide">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        placeholder="Aditya Yadav"
                                        className="w-full bg-white/5 border border-transparent focus:border-theme-accent text-white placeholder-white/30 px-4 py-3.5 rounded-xl outline-none transition-colors text-sm"
                                    />
                                </div>
                                <div className="flex-1 flex flex-col gap-1.5">
                                    <label className="text-theme-accent text-xs font-semibold tracking-wide">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        placeholder="aditya.yadav@gmail.com"
                                        className="w-full bg-white/5 border border-transparent focus:border-theme-accent text-white placeholder-white/30 px-4 py-3.5 rounded-xl outline-none transition-colors text-sm"
                                    />
                                </div>
                            </div>

                            {/* Row 2: Category Dropdown */}
                            <div className="flex flex-col gap-1.5 relative">
                                <label className="text-theme-accent text-xs font-semibold tracking-wide">How can I categorize your message?</label>
                                <div className="relative">
                                    <select 
                                        name="inquiry_type" 
                                        value={selectedCategory}
                                        onChange={(e) => setSelectedCategory(e.target.value)}
                                        required
                                        className="w-full bg-white/5 border border-transparent focus:border-theme-accent text-white/70 px-4 py-3.5 rounded-xl outline-none appearance-none cursor-pointer transition-colors text-sm"
                                    >
                                        <option className="bg-[#1a1a1a] text-white" value="" disabled>Select...</option>
                                        <option className="bg-[#1a1a1a] text-white" value="Hiring Opportunity">Hiring Opportunity</option>
                                        <option className="bg-[#1a1a1a] text-white" value="Project Discussion">Project Discussion</option>
                                        <option className="bg-[#1a1a1a] text-white" value="Technical Consultation">Technical Consultation</option>
                                        <option className="bg-[#1a1a1a] text-white" value="Collaboration">Collaboration</option>
                                        <option className="bg-[#1a1a1a] text-white" value="Networking">Networking</option>
                                        <option className="bg-[#1a1a1a] text-white" value="Other">Other</option>
                                    </select>
                                    {/* Custom Dropdown Arrow */}
                                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-white/50">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="6 9 12 15 18 9"></polyline>
                                        </svg>
                                    </div>
                                </div>

                                {/* Dynamic 'Other' Input Field */}
                                <AnimatePresence>
                                    {selectedCategory === "Other" && (
                                        <motion.div 
                                            initial={{ opacity: 0, height: 0, marginTop: 0 }}
                                            animate={{ opacity: 1, height: 'auto', marginTop: 8 }}
                                            exit={{ opacity: 0, height: 0, marginTop: 0 }}
                                            transition={{ duration: 0.3, ease: "easeOut" }}
                                            className="overflow-hidden"
                                        >
                                            <input
                                                type="text"
                                                name="other_inquiry_type"
                                                required
                                                placeholder="Please specify your category..."
                                                className="w-full bg-white/5 border border-transparent focus:border-theme-accent text-white placeholder-white/30 px-4 py-3.5 rounded-xl outline-none transition-colors text-sm"
                                            />
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* Row 3: Textarea */}
                            <div className="flex flex-col gap-1.5">
                                <label className="text-theme-accent text-xs font-semibold tracking-wide">What Can I Help You...</label>
                                <textarea
                                    name="message"
                                    required
                                    rows="4"
                                    placeholder="Hello, I'd like to enquire about..."
                                    className="w-full bg-white/5 border border-transparent focus:border-theme-accent text-white placeholder-white/30 px-4 py-3.5 rounded-xl outline-none resize-none transition-colors text-sm"
                                ></textarea>
                            </div>

                            {/* Submit Button — MOBILE: full-width solid lime like reference */}
                            <div className="mt-4 pb-12 lg:pb-0">
                                <button 
                                    type="submit" 
                                    disabled={isSubmitting}
                                    className="group bg-transparent border-2 border-theme-accent rounded-full px-8 py-2.5 hover:bg-theme-accent transition-all duration-300 w-max cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed max-md:w-full max-md:bg-theme-accent max-md:py-3"
                                >
                                    <span className="text-theme-accent group-hover:text-black font-display uppercase tracking-widest text-lg pt-1 block max-md:text-black">
                                        {isSubmitting ? 'SUBMITTING...' : 'SUBMIT'}
                                    </span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            {/* 2. Solid Footer Component — MOBILE: inline rows like reference (Email : value on one line) */}
            <footer className="w-full bg-theme-accent text-black pt-12 pb-8 max-md:pb-28 px-[7vw] rounded-t-[3rem] shadow-[0_-10px_40px_rgba(217,255,102,0.1)] shrink-0">
                <div className="max-w-[1400px] mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10 mb-10 max-md:gap-5">
                        {/* Email */}
                        <div className="flex flex-col gap-1 max-md:flex-row max-md:items-baseline max-md:gap-2 max-md:flex-wrap">
                            <span className="text-sm font-medium opacity-80">Email :</span>
                            <a href="mailto:aditya.yadav.07.in@gmail.com" className="text-lg md:text-2xl font-bold hover:opacity-70 transition-opacity max-md:text-base">
                                aditya.yadav.07.in@gmail.com
                            </a>
                        </div>

                        {/* Phone */}
                        <div className="flex flex-col gap-1 max-md:flex-row max-md:items-baseline max-md:gap-2">
                            <span className="text-sm font-medium opacity-80">Call Today :</span>
                            <a href="tel:+919284699877" className="text-lg md:text-2xl font-bold hover:opacity-70 transition-opacity max-md:text-base">
                                +91 9284699877
                            </a>
                        </div>

                        {/* Socials */}
                        <div className="flex flex-col gap-2 md:items-end max-md:flex-row max-md:items-center max-md:gap-3">
                            <span className="text-sm font-medium opacity-80">Social :</span>
                            <div className="flex items-center gap-4 text-black">
                                <a href="https://x.com/AdityaYadavDS" target="_blank" rel="noreferrer" className="hover:scale-110 transition-transform">
                                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z"></path><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path></svg>
                                </a>
                                <a href="https://www.instagram.com/aadityya_06/?hl=en" target="_blank" rel="noreferrer" className="hover:scale-110 transition-transform">
                                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                                </a>
                                <a href="https://www.linkedin.com/in/aditya1610" target="_blank" rel="noreferrer" className="hover:scale-110 transition-transform">
                                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                                </a>
                                <a href="https://github.com/Aadityya07" target="_blank" rel="noreferrer" className="hover:scale-110 transition-transform">
                                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Copyright / Credit line */}
                    <div className="border-t border-black/20 pt-6 flex flex-col md:flex-row justify-between items-center gap-6 text-sm font-medium">
                        <p className="opacity-80">© Copyright 2026. All Rights Reserved by Aditya Yadav</p>
                        <div className="flex items-center gap-3">
                            <span className="opacity-80">Created by</span>
                            <div className="flex items-center gap-3 bg-black/5 rounded-full pl-1.5 pr-4 py-1.5 hover:bg-black/10 transition-colors">
                                <div className="w-8 h-8 rounded-full bg-black text-theme-accent flex items-center justify-center font-display text-xs tracking-wider">AY</div>
                                <span className="font-bold">Aditya Yadav</span>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </section>
    );
};