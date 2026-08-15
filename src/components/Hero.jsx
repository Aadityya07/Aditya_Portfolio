import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import contactImg from '../assets/Image2.png';
import palmImg from '../assets/Palm.png';

export const Hero = () => {
  const [showPalm, setShowPalm] = useState(true);

  // MOBILE-ONLY feature: same 4s Palm <-> Hi cycle as Contact section
  useEffect(() => {
    const interval = setInterval(() => {
      setShowPalm((prev) => !prev);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen w-full flex flex-col justify-start pt-[12vh] relative select-none">
      {/* Top Left Name Identity — LAPTOP ONLY (hidden on mobile) */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="absolute top-8 left-[7vw] z-50 font-display text-3xl md:text-4xl tracking-wide text-theme-text max-md:hidden"
      >
        Aditya Yadav<span className="text-theme-accent">.</span>
      </motion.div>

      {/* Layout Wrapper — LAPTOP ONLY (hidden on mobile, 100% unchanged inside) */}
      <div className="w-full px-[10vw] md:px-[15vw] flex flex-col items-center relative z-20 mt-6 max-md:hidden">
        {/* Intro Line */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[18px] md:text-[24px] text-theme-muted mb-4 md:mb-6 text-center w-full font-light"
        >
          <span className="inline-block origin-bottom-right animate-wave">👋</span>, my name is Aditya and I am an
        </motion.div>
        {/* Main Typography Stack */}
        <div className="relative z-20 flex flex-col items-center w-full">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="font-display text-[11vw] xl:text-[130px] leading-[0.95] uppercase text-theme-text text-center tracking-[-0.01em] whitespace-nowrap"
          >
            AI Engineer
          </motion.h1>
          <div className="relative inline-block">
            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              className="font-display text-[11vw] xl:text-[130px] leading-[0.95] uppercase text-outline-stroke text-left tracking-[-0.01em] whitespace-nowrap"
            >
              & Full-Stack Developer
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute top-full left-0 mt-3 text-theme-muted text-base md:text-xl font-light tracking-wide z-30"
            >
              Crafted in Nashik, India.
            </motion.div>
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* MOBILE-ONLY HERO (never shows on laptop)                     */}
      {/* ============================================================ */}
      <div className="hidden max-md:flex flex-col items-center text-center w-full px-6 pb-16 relative z-20">
        {/* Small Name */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display uppercase tracking-[0.25em] text-theme-text text-sm mb-4"
        >
          Aditya Yadav<span className="text-theme-accent">.</span>
        </motion.div>

        {/* Big Heading Line 1 */}
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="font-display text-[13vw] leading-[0.95] uppercase text-theme-text tracking-[-0.01em]"
        >
          AI Engineer
        </motion.h1>

        {/* Portrait Card — Contact image + Palm/Hi animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-[75%] max-w-[300px] aspect-[4/5] mt-8 mb-6"
        >
          <img
            src={contactImg}
            alt="Aditya Yadav"
            className="w-full h-full object-cover object-top rounded-[2rem]"
          />
          {/* Floating Palm / Hi button — Reverted position to original corner */}
          <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-theme-accent rounded-full flex items-center justify-center text-black shadow-xl overflow-hidden pointer-events-none">
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
                    className="w-8 h-8 object-contain origin-[80%_100%]"
                    animate={{ rotate: [0, 20, -10, 20, -10, 15, 0] }}
                    transition={{ duration: 1.5, ease: "easeInOut", repeat: Infinity, repeatDelay: 1 }}
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
                  <span className="text-xl font-medium text-black tracking-tight">Hi</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Big Heading Line 2 */}
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.45 }}
          className="font-display text-[13vw] leading-[0.95] uppercase text-outline-stroke tracking-[-0.01em]"
        >
          & Full-Stack Developer
        </motion.h1>

        {/* Bottom line — only "Crafted in Nashik, India." */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-theme-muted mt-8 text-sm font-light leading-relaxed tracking-wide"
        >
          Crafted in Nashik, India.
        </motion.p>
      </div>
    </section>
  );
};