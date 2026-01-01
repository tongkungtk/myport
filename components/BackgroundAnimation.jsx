'use client';
import { motion } from 'framer-motion';

export default function BackgroundAnimation() {
    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden bg-black">
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                    x: [0, 100, -50, 0],
                    y: [0, -50, 50, 0],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    repeatType: "reverse",
                }}
                className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-900/40 rounded-full blur-[120px]"
            />
            <motion.div
                animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 0.6, 0.3],
                    x: [0, -100, 50, 0],
                    y: [0, 100, -50, 0],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: 2
                }}
                className="absolute top-[40%] right-[-10%] w-[400px] h-[400px] bg-blue-900/40 rounded-full blur-[100px]"
            />
            <motion.div
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.2, 0.4, 0.2],
                    x: [0, 50, -100, 0],
                    y: [0, 50, 50, 0],
                }}
                transition={{
                    duration: 22,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: 5
                }}
                className="absolute bottom-[-10%] left-[20%] w-[600px] h-[600px] bg-indigo-900/30 rounded-full blur-[140px]"
            />
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay pointer-events-none"></div>
        </div>
    );
}
