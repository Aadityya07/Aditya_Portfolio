import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import navImg from '../assets/Image.png';

export const Navbar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeLink, setActiveLink] = useState('Home');

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Collapse when scrolling down, expand when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsCollapsed(true);
      } else {
        setIsCollapsed(false);
      }
      setLastScrollY(currentScrollY);

      // ============================================================
      // DYNAMIC SCROLL SPY: Tracks the active section while scrolling
      // ============================================================
      const sections = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'projects', label: 'Projects' },
        { id: 'experience', label: 'Resume' },
        { id: 'contact', label: 'Contact' },
      ];

      let currentActive = 'Home';
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          // Triggers the active state when the section reaches the upper 1/3rd of the screen
          if (currentScrollY >= element.offsetTop - window.innerHeight / 3) {
            currentActive = section.label;
          }
        }
      }
      setActiveLink(currentActive);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const slideTransition = {
    type: "spring",
    stiffness: 300,
    damping: 30,
    mass: 0.8
  };

  // Your links only (same hrefs as your desktop navbar)
  const mobileLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Resume', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* ============================================================ */}
      {/* TOP NAVBAR — LAPTOP ONLY (completely removed on mobile)      */}
      {/* ============================================================ */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="fixed top-6 left-1/2 -translate-x-1/2 z-[60] max-md:hidden"
      >
        <nav className="flex items-center justify-center rounded-full bg-theme-nav glass-blur border border-white/10 shadow-xl overflow-hidden text-sm font-medium transition-colors duration-500">
          {/* COLLAPSED STATE (Inward) — ORIGINAL, untouched */}
          <motion.div
            initial={false}
            animate={{
              width: isCollapsed ? "auto" : 0,
              opacity: isCollapsed ? 1 : 0
            }}
            transition={slideTransition}
            className="overflow-hidden whitespace-nowrap"
          >
            <div className="flex items-center gap-3 px-2 py-2 w-max">
              <img src={navImg} alt="Profile" className="w-12 h-12 p-[3px] rounded-full object-cover border border-white/20 shrink-0 bg-theme-bg" />
              <span className="text-theme-text font-medium pl-1 pr-2">Available for work</span>
              <div className="relative flex items-center justify-center w-2.5 h-2.5 mr-5 shrink-0">
                <span className="absolute w-2.5 h-2.5 bg-green-500 rounded-full"></span>
                <span className="absolute w-2.5 h-2.5 bg-green-500 rounded-full animate-slow-ping"></span>
              </div>
            </div>
          </motion.div>

          {/* EXPANDED STATE (Outward) — ORIGINAL, untouched */}
          <motion.div
            initial={false}
            animate={{
              width: !isCollapsed ? "auto" : 0,
              opacity: !isCollapsed ? 1 : 0
            }}
            transition={slideTransition}
            className="overflow-hidden whitespace-nowrap"
          >
            <div className="flex items-center justify-between gap-6 px-3 py-2 w-max">
              <div className="flex items-center gap-6 pl-1 shrink-0">
                <img src={navImg} alt="Profile" className="w-12 h-12 p-[3px] rounded-full object-cover hidden sm:block border border-white/20 bg-theme-bg" />
                <a href="#home" className="text-theme-text hover:text-theme-accent transition-colors">Home</a>
                <a href="#about" className="text-theme-text hover:text-theme-accent transition-colors">About</a>
                <a href="#projects" className="text-theme-text hover:text-theme-accent transition-colors">Projects</a>
              </div>
              <div className="flex items-center gap-4 pl-2 shrink-0">
                <a href="#experience" className="text-theme-text hover:text-theme-accent transition-colors">
                  Resume
                </a>
                <a href="#contact" className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-theme-accent hover:scale-105 transition-all duration-300">
                  Contact
                </a>
              </div>
            </div>
          </motion.div>
        </nav>
      </motion.div>

      {/* ============================================================ */}
      {/* BOTTOM NAVBAR — MOBILE ONLY, ALWAYS VISIBLE                  */}
      {/* ============================================================ */}
      <motion.nav
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 32, delay: 0.3 }}
        // FIX: Replaced overly transparent bg with dark tinted glass (#0d0d12/90) for perfect contrast
        className="fixed bottom-0 left-0 right-0 z-[70] md:hidden overflow-hidden backdrop-blur-2xl bg-[#0d0d12]/90 border-t border-x border-white/10 rounded-t-[2rem] shadow-[0_-20px_40px_rgba(0,0,0,0.8)]"
      >
        {/* Subtle top sheen line for extra glass depth */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none"></div>
        
        {/* FIX: Increased pt-6 and pb-5 to give the navbar a slightly taller, comfortable height */}
        <div className="relative flex items-center justify-between px-6 pt-6 pb-5">
          {mobileLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setActiveLink(link.label)}
              // FIX: Bumped font size to 15px and changed inactive text to white/70 for crisp legibility
              className={`text-[15px] tracking-wide transition-colors ${
                activeLink === link.label
                  ? 'text-theme-accent font-bold'
                  : 'text-white/70 font-medium hover:text-white'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
        {/* Safe-area spacer for phones with a home indicator */}
        <div className="h-[env(safe-area-inset-bottom)]"></div>
      </motion.nav>
    </>
  );
};