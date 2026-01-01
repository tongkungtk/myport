'use client';
import { motion } from 'framer-motion';
import { portfolioData } from '@/data/portfolio';
import { Sparkles } from 'lucide-react';

export default function AboutSection() {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <section id="about" className="py-24 bg-black relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">เกี่ยวกับฉัน</h2>
                    <p className="text-gray-400 text-lg max-w-3xl">
                        {portfolioData.personalInfo.bio}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
                    <div>
                        <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                            <Sparkles className="w-5 h-5 text-purple-400" />
                            ทักษะและเทคโนโลยี
                        </h3>
                        <motion.div
                            variants={container}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="flex flex-wrap gap-3"
                        >
                            {portfolioData.skills.map((skill, i) => (
                                <motion.span
                                    key={i}
                                    variants={item}
                                    className="px-4 py-2 bg-neutral-900 border border-neutral-800 rounded-lg text-gray-300 text-sm hover:border-neutral-700 transition-colors"
                                >
                                    {skill}
                                </motion.span>
                            ))}
                        </motion.div>
                    </div>

                    <div className="p-8 bg-neutral-900/50 rounded-2xl border border-neutral-800">
                        <h3 className="text-xl font-semibold mb-6 text-white">ข้อมูลส่วนตัว</h3>
                        <ul className="space-y-4 text-gray-400">
                            <li className="flex items-start gap-3">
                                <span className="font-semibold text-white min-w-[100px]">ชื่อ:</span>
                                <span>{portfolioData.personalInfo.name}</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="font-semibold text-white min-w-[100px]">อาชีพ:</span>
                                <span>{portfolioData.personalInfo.role}</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="font-semibold text-white min-w-[100px]">ที่อยู่:</span>
                                <span>{portfolioData.personalInfo.location}</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="font-semibold text-white min-w-[100px]">อีเมล:</span>
                                <a href={`mailto:${portfolioData.personalInfo.contact}`} className="hover:text-blue-400 transition-colors">
                                    {portfolioData.personalInfo.contact}
                                </a>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="font-semibold text-white min-w-[100px]">GitHub:</span>
                                <a href={portfolioData.socialLinks.github} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                                    {portfolioData.socialLinks.github.replace('https://', '')}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
