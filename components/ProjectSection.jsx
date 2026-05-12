'use client';
import { portfolioData } from '@/data/portfolio';
import ProjectCard from './ProjectCard';
import { motion } from 'framer-motion';

export default function ProjectSection() {
    return (
        <section id="projects" className="pt-32 pb-24 bg-neutral-950">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-14 max-w-4xl"
                >
                    <p className="text-sm font-semibold tracking-[0.25em] uppercase text-cyan-300 mb-4">
                        Selected Work
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                        ผลงาน
                    </h2>
                    <p className="text-gray-400 leading-7">
                        โปรเจกต์ที่สะท้อนงานจริงด้านเว็บไซต์ ระบบอัตโนมัติ และ AI workflow ตั้งแต่เครื่องมือโพสต์หลายแพลตฟอร์ม ระบบจัดการเว็บบอร์ด ไปจนถึงเว็บวิเคราะห์ข้อมูลด้วย AI
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 items-stretch gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {portfolioData.projects.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
