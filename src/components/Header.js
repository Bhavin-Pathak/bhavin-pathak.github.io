import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BackButton } from "./BackButton.js";
import PropTypes from "prop-types";

export default function Header({ title, subtitle }) {
    // state to track if the user has scrolled
    const [isScrolled, setIsScrolled] = useState(false);
    // useEffect to update the state when the user scrolls
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? "bg-black/50 backdrop-blur-md" : "bg-transparent"}`}>
            <div className="w-full h-16 flex items-center justify-center relative px-4 md:px-8">
                {/* Back Button */}
                <div className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-50">
                    <BackButton />
                </div>
                {/* Title & Subtitle */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.5, y: -20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "backOut", delay: 0.2 }}
                    className="text-center pt-1"
                >
                    <h2 className="text-xl md:text-3xl font-bold text-white tracking-tight whitespace-nowrap">
                        {title}
                    </h2>
                    <p className="text-[10px] md:text-sm text-gray-400 mt-0.5 opacity-100">
                        {subtitle}
                    </p>
                </motion.div>
            </div>
        </div>
    );
}


Header.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
};
