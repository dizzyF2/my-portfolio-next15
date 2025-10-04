"use client"

import { motion } from "framer-motion"

function About() {
    return (
        <section
            id="about"
            className="md:-mt-36 self-start w-full max-w-4xl flex flex-col gap-6 px-4 py-16"
        >
            <motion.h4
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-sm uppercase tracking-widest text-gray-400"
            >
                Introduction
            </motion.h4>

            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-5xl sm:text-7xl font-extrabold"
            >
                <span className="text-white">Overview.</span>
            </motion.h2>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-base sm:text-lg leading-8 text-gray-300"
            >
                I`m a software engineer who enjoys building websites and web apps that look good and work smoothly.
                I focus mostly on the front end — the part users see and interact with — and I enjoy turning ideas into real, usable designs.
                <br/>Whether it`s a personal project or part of a team, I care about clean design, simple user experience, and writing code that works well.
            </motion.p>
        </section>
    )
}

export default About
