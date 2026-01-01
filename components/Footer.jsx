import { portfolioData } from '@/data/portfolio';

export default function Footer() {
    return (
        <footer className="py-8 bg-black border-t border-neutral-900 text-center">
            <div className="container mx-auto px-6">
                <p className="text-gray-500 text-sm">
                    © {new Date().getFullYear()} {portfolioData.personalInfo.name}. สงวนลิขสิทธิ์. สร้างด้วย Next.js & Tailwind.
                </p>
            </div>
        </footer>
    );
}
