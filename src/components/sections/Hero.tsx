'use client';

import Image from "next/image";
import { motion } from "motion/react";
import ViewProjects from "../buttons/ViewProjects";
import ContactButton from "../buttons/ContactButton";

function Hero() {
    return (
        <section className="w-full relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl lg:gap-16 h-[500px]">
            
            {/* Left Content */}
            <motion.div 
                className="flex-1 space-y-6 sm:space-y-8 max-w-xl w-full"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <div className="flex items-start gap-4 sm:gap-5">
                    <motion.div 
                        className="w-2 h-24 sm:h-32 lg:h-36 bg-gradient-to-b from-emerald-400 via-emerald-500 to-emerald-600 rounded-full mt-3 sm:mt-4 shadow-lg shadow-emerald-500/50"
                        animate={{ scaleY: [1, 1.05, 1], opacity: [0.8, 1, 0.8] }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <div className="space-y-3 sm:space-y-4">
                        <motion.h1 
                            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                        >
                            Hi, {"I'm"}{" "}
                            <motion.span 
                                className="bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-500 bg-clip-text text-transparent capitalize"
                                animate={{ backgroundPosition: ['0%', '100%', '0%'] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                style={{ backgroundSize: '200% 100%' }}
                            >
                                faris
                            </motion.span>
                        </motion.h1>
                        <motion.p 
                            className="text-xl sm:text-2xl lg:text-3xl text-white/80 font-light"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                        >
                            Passionate{" "}
                            <span className="text-emerald-400 font-semibold">Frontend Developer</span>
                        </motion.p>
                        <motion.p 
                            className="text-base sm:text-lg text-white/60 max-w-md"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                        >
                            Crafting beautiful, interactive experiences that bring ideas to life
                        </motion.p>
                    </div>
                </div>

                <motion.div 
                    className="flex flex-col sm:flex-row gap-4 ml-6 sm:ml-7 lg:ml-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                >
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                        <ViewProjects />
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                        <ContactButton className="w-full border-2 border-white/30 hover:border-emerald-500 text-white hover:text-white px-10 py-6 text-lg font-semibold bg-white/5 hover:bg-emerald-500/20 backdrop-blur-sm transition-all duration-300"/>
                    </motion.div>
                </motion.div>
            </motion.div>

            {/* Right Content */}
            <motion.div 
                className="absolute bottom-[85px] md:bottom-10 -right-1 md:right-20 lg:right-30 size-[300px] md:size-[400px] -z-10"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
                <Image 
                    src="/assets/desk-guy.png"
                    alt="hero image"
                    fill
                    className="object-cover"
                    priority
                />
            </motion.div>
        </section>
    );
}

export default Hero;
