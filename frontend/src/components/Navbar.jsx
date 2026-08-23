import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const messages = [
    "✦ Capture your thoughts",
    "✦ Organize your ideas",
    "✦ Turn thoughts into action",
    "✦ Your ideas, beautifully organized",
    "✦ Think. Write. Remember."
];

const Navbar = () => {
    const [currentMessage, setCurrentMessage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentMessage((prev) => (prev + 1) % messages.length);
        }, 2500);

        return () => clearInterval(interval);
    }, []);

    return (
        <header className="navbar bg-base-300 border-b border-base-content/10">
            <div className="mx-auto w-full max-w-6xl px-4 py-4">

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">

                    {/* Logo */}
                    <h1 className="text-2xl sm:text-4xl font-bold text-primary tracking-tight shrink-0">
                        Notes Tool😃
                    </h1>

                    {/* Animated Message */}
                    <div className="relative h-7 w-full sm:w-96 overflow-hidden text-center sm:ml-16">

                        <AnimatePresence mode="wait">

                            <motion.p
                                key={currentMessage}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{
                                    duration: 0.5,
                                    ease: "easeInOut"
                                }}
                                className="absolute inset-0 flex items-center justify-center text-sm sm:text-xl font-medium text-base-content/60 whitespace-nowrap"
                            >
                                {messages[currentMessage]}
                            </motion.p>

                        </AnimatePresence>

                    </div>

                </div>

            </div>
        </header>
    );
};

export default Navbar;