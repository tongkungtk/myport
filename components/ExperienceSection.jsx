'use client';
import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolio';
import { BriefcaseBusiness } from 'lucide-react';

export default function ExperienceSection() {
    return (
        <section id="experience" className="py-24 bg-black">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-sm font-semibold tracking-[0.25em] uppercase text-cyan-300 mb-4">
                            Experience
                        </p>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
                            ประสบการณ์ทำงาน
                        </h2>
                        <p className="text-gray-400 leading-7">
                            งานด้านเว็บไซต์ ระบบ Automation, IT Support, การอบรม และการประสานงานโครงการ
                        </p>
                    </motion.div>

                    <div className="space-y-5">
                        {portfolioData.experiences.map((experience, index) => (
                            <motion.article
                                key={`${experience.company}-${experience.role}`}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.08 }}
                                className="rounded-lg border border-neutral-800 bg-neutral-950/75 p-6"
                            >
                                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                                    <div className="flex gap-3">
                                        <BriefcaseBusiness className="w-6 h-6 text-cyan-300 shrink-0 mt-1" />
                                        <div>
                                            <h3 className="text-xl font-semibold text-white">{experience.role}</h3>
                                            <p className="text-gray-400 mt-1">{experience.company}</p>
                                        </div>
                                    </div>
                                    <span className="text-sm text-cyan-200 bg-cyan-500/10 border border-cyan-500/20 rounded-md px-3 py-1 w-fit">
                                        {experience.period}
                                    </span>
                                </div>
                                <p className="text-gray-300 leading-7 mb-4">{experience.description}</p>
                                <ul className="space-y-2 text-gray-400">
                                    {experience.items.map((item) => (
                                        <li key={item} className="flex gap-3">
                                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-300 shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
