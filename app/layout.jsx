import "./globals.css";
import { Inter } from 'next/font/google'
import BackgroundAnimation from "@/components/BackgroundAnimation";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: "My Portfolio",
    description: "Senior Frontend Developer Portfolio",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className="dark scroll-smooth">
            <body className={inter.className}>
                <BackgroundAnimation />
                <div className="relative z-10">
                    {children}
                </div>
            </body>
        </html>
    );
}
