'use client';
import './main.css'
import Info from './info';
import SepLine from './sepline';
import Bio from './bio';
import Skills from './skills';
import Desc from './desc';
import Toolbar from "./toolbar";
import ProjectList from './projectList';
import Contact from './contact_info';
import MapEmbed from './map';
import { motion } from "framer-motion";
export default function Main() {
    return (
        <main className="w-full min-h-screen bg-[#151312]">
            <Toolbar />
            <motion.section
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.12 }}
            >
            <section id='0'>
            <div className='info-block'>
                <Bio />
                <Desc />
            </div>
            </section>
            </motion.section>
            <motion.section
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.12 }}
            >
            <section id='1'>
            <div className='about-block'>
                <SepLine title="About Me" />
                <div className='info'>
                    <Info />
                    <Skills />
                </div>
            </div>
            </section>
            </motion.section>
            <motion.section
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.12 }}
            >
            <section id='2'>
            <div className='projects-block'>
                <SepLine title="Projects" />
                <div className='projects'>
                    <ProjectList />
                </div>
            </div>
            </section>
            </motion.section>
            <motion.section
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.12 }}
            >
            <section id='3'/>
            <div className='contact-block'>
                <SepLine title="Contact" />
                <div className='contact'>
                    <MapEmbed />
                    <Contact />
                </div>
            </div>
            </motion.section>
        </main>
    );
}