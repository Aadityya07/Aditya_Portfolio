import { motion, useScroll, useTransform, useSpring, useMotionTemplate } from 'framer-motion';
import profileCutout from '../assets/profile.png';
import deskImg from '../assets/desk.png';
import image1 from '../assets/Image1.png';

export const ImageTransition = () => {
    const { scrollY } = useScroll();
    
    const smoothScroll = useSpring(scrollY, {
        stiffness: 80,
        damping: 25,
        restDelta: 0.001
    });

    const stages = [
        0, 150, 300, 450, 600, 750,        
        900, 1050, 1200, 1350, 1500, 1650 
    ];

    const x = useTransform(smoothScroll, stages, [
        "-50%", "-35%", "-15%", "0%", "10%", "20%", 
        "20%", "20%", "20%", "20%", "20%", "20%" 
    ]);
    
    const yBase = useTransform(smoothScroll, stages, [
        "0vh", "-2vh", "-4vh", "-8vh", "-12vh", "-15vh", 
        "-15vh", "-15vh", "-15vh", "-15vh", "-15vh", "-15vh"
    ]);

    const yOffset = useTransform(scrollY, [1650, 10000], [0, -8350]);
    const y = useMotionTemplate`calc(${yBase} + ${yOffset}px)`;
    
    const rotateY = useTransform(smoothScroll, stages, [
        0, 30, 60, 90, 135, 180, 
        180, 210, 240, 270, 315, 360
    ]);
    
    const rotateZ = useTransform(smoothScroll, stages, [
        0, 0, 0, 0, 0, 7, 
        7, 0, 0, 0, 0, 7
    ]);
    
    const borderRadius = useTransform(smoothScroll, [0, 150], ["0rem", "2rem"]);
    
    const profileOpacity = useTransform(smoothScroll, [400, 500], [1, 0]);
    const deskOpacity = useTransform(smoothScroll, [400, 500, 1300, 1400], [0, 1, 1, 0]);
    const image1Opacity = useTransform(smoothScroll, [1300, 1400], [0, 1]);

    const neonOpacity = useTransform(smoothScroll, [0, 150], [0, 0.15]);
    const borderOpacity = useTransform(smoothScroll, [0, 80], [0, 1]);

    return (
        <motion.div 
            // FIX: Added 'hidden md:block' here to completely disable this on mobile!
            className="hidden md:block max-md:hidden fixed bottom-0 left-1/2 z-[50] w-[320px] md:w-[380px] aspect-[4/5] perspective-[1200px] pointer-events-none"
            style={{ x, y, rotateZ, willChange: "transform" }}
        >
            <motion.div 
                className="w-full h-full relative"
                style={{ rotateY, transformStyle: "preserve-3d" }}
            >
                <motion.div 
                    className="absolute inset-0 w-full h-full overflow-hidden bg-transparent"
                    style={{ borderRadius, backfaceVisibility: "hidden" }}
                >
                    <motion.div 
                        className="absolute inset-0 border border-white/5 z-30 pointer-events-none"
                        style={{ borderRadius, opacity: borderOpacity }}
                    />

                    <motion.div 
                        className="absolute inset-0 bg-theme-accent w-full h-full z-0" 
                        style={{ opacity: neonOpacity }}
                    />
                    
                    <motion.img 
                        src={profileCutout} 
                        style={{ opacity: profileOpacity }}
                        className="absolute inset-0 w-full h-full object-cover object-bottom z-10" 
                        alt="Aditya Yadav" 
                    />
                    
                    <motion.img 
                        src={image1} 
                        style={{ opacity: image1Opacity }}
                        className="absolute inset-0 w-full h-full object-cover z-20" 
                        alt="Aditya About" 
                    />
                </motion.div>
                
                <motion.div 
                    className="absolute inset-0 w-full h-full overflow-hidden bg-theme-bg border border-white/5 shadow-2xl"
                    style={{ borderRadius: "2rem", opacity: deskOpacity, rotateY: 180, backfaceVisibility: "hidden" }}
                >
                    <img src={deskImg} className="w-full h-full object-cover" alt="Workspace" />
                </motion.div>
            </motion.div>
        </motion.div>
    );
};