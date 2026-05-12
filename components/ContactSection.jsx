'use client';
import { portfolioData } from '@/data/portfolio';
import { Github, Mail, Phone } from 'lucide-react';

export default function ContactSection() {
    return (
        <section id="contact" className="py-20 bg-neutral-950 border-t border-neutral-900">
            <div className="container mx-auto px-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
                    <div className="min-w-0">
                        <p className="text-sm font-semibold tracking-[0.25em] uppercase text-cyan-300 mb-4">
                            Contact
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                        <a
                            href={`mailto:${portfolioData.personalInfo.contact}`}
                            className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-black hover:bg-cyan-100 transition-colors"
                        >
                            <Mail className="w-4 h-4" />
                            Email
                        </a>
                        <a
                            href={`tel:${portfolioData.personalInfo.phone}`}
                            className="inline-flex items-center justify-center gap-2 rounded-lg border border-neutral-700 px-5 py-3 text-sm font-semibold text-white hover:border-cyan-300 hover:text-cyan-200 transition-colors"
                        >
                            <Phone className="w-4 h-4" />
                            โทร
                        </a>
                        <a
                            href={portfolioData.socialLinks.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 rounded-lg border border-neutral-700 px-5 py-3 text-sm font-semibold text-white hover:border-cyan-300 hover:text-cyan-200 transition-colors"
                        >
                            <Github className="w-4 h-4" />
                            GitHub
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
