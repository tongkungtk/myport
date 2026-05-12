'use client';
import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolio';
import { ArrowUpRight, Mail, MapPin, Phone, Sparkles } from 'lucide-react';

export default function AboutSection() {
    const mainSkills = portfolioData.skillGroups.flatMap((group) => group.skills).slice(0, 12);

    return (
        <section id="about" className="bg-black pt-28 pb-16">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_360px] lg:items-start">
                    <motion.div
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.45 }}
                        className="max-w-4xl"
                    >
                        <h1 className="text-4xl font-bold leading-tight text-white md:text-6xl">
                            {portfolioData.personalInfo.name}
                        </h1>
                        <p className="mt-2 text-2xl font-semibold text-gray-400">
                            {portfolioData.personalInfo.englishName}
                        </p>
                        <p className="mt-6 max-w-3xl text-base leading-8 text-gray-300 md:text-lg">
                            {portfolioData.personalInfo.bio}
                        </p>

                        <div className="mt-6 flex flex-wrap gap-2">
                            {portfolioData.highlights.map((highlight) => (
                                <span
                                    key={highlight.value}
                                    className="rounded-md border border-cyan-500/20 bg-cyan-500/10 px-3 py-2 text-sm font-semibold text-cyan-100"
                                >
                                    {highlight.value}
                                </span>
                            ))}
                        </div>

                        <div className="mt-7 flex flex-wrap gap-3">
                            <a
                                href="#projects"
                                className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-black transition-colors hover:bg-cyan-100"
                            >
                                ดูผลงาน
                                <ArrowUpRight className="h-4 w-4" />
                            </a>
                            <a
                                href={`mailto:${portfolioData.personalInfo.contact}`}
                                className="inline-flex items-center gap-2 rounded-lg border border-neutral-700 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-cyan-300 hover:text-cyan-200"
                            >
                                <Mail className="h-4 w-4" />
                                ติดต่อ
                            </a>
                        </div>
                    </motion.div>

                    <motion.aside
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.45, delay: 0.08 }}
                        className="rounded-lg border border-neutral-800 bg-neutral-950/80 p-5"
                    >
                        <h2 className="mb-4 text-lg font-semibold text-white">ข้อมูลติดต่อ</h2>
                        <ul className="space-y-3 text-sm text-gray-300">
                            <li className="flex gap-3">
                                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />
                                <span>{portfolioData.personalInfo.location}</span>
                            </li>
                            <li className="flex gap-3">
                                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />
                                <a href={`tel:${portfolioData.personalInfo.phone}`} className="hover:text-cyan-200">
                                    {portfolioData.personalInfo.phone}
                                </a>
                            </li>
                            <li className="flex gap-3">
                                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />
                                <a href={`mailto:${portfolioData.personalInfo.contact}`} className="break-all hover:text-cyan-200">
                                    {portfolioData.personalInfo.contact}
                                </a>
                            </li>
                        </ul>
                    </motion.aside>
                </div>

                <div className="mt-12 rounded-lg border border-neutral-800 bg-neutral-950/70 p-5">
                    <h2 className="mb-4 flex items-center gap-2 text-xl font-bold text-white">
                        <Sparkles className="h-5 w-5 text-cyan-300" />
                        ทักษะหลัก
                    </h2>
                    <div className="flex flex-wrap gap-2">
                        {mainSkills.map((skill) => (
                            <span
                                key={skill}
                                className="rounded-md border border-neutral-700 bg-black px-3 py-1.5 text-sm text-gray-300"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
