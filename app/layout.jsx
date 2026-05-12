import "./globals.css";
import { Inter } from 'next/font/google'
import BackgroundAnimation from "@/components/BackgroundAnimation";
import MouseFollower from "@/components/MouseFollower";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: "Theeranan Phetsuk | Portfolio",
    description: "Portfolio of Theeranan Phetsuk, featuring web development, AI automation, and IT projects.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="th" className="dark scroll-smooth">
            <body className={inter.className}>
                <BackgroundAnimation />
                <MouseFollower />
                <div className="relative z-10">
                    {children}
                </div>
            </body>
        </html>
    );
}
