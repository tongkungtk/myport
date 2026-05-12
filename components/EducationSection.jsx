'use client';
import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolio';
import { GraduationCap } from 'lucide-react';

export default function EducationSection() {
    return (
        <section id="education" className="py-20 bg-neutral-950 border-t border-neutral-900">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-3xl"
                >
                    <p className="text-sm font-semibold tracking-[0.25em] uppercase text-cyan-300 mb-4">
                        Education
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                        การศึกษา
                    </h2>
                    <div className="rounded-lg border border-neutral-800 bg-black/70 p-6">
                        <div className="flex gap-4">
                            <GraduationCap className="w-7 h-7 text-cyan-300 shrink-0 mt-1" />
                            <div>
                                <p className="text-xl font-semibold text-white">{portfolioData.education.degree}</p>
                                <p className="text-gray-400 mt-2">{portfolioData.education.school}</p>
                                <p className="text-sm text-gray-500 mt-2">{portfolioData.education.period}</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
