import { motion } from "framer-motion";
import contactData from "../static/contact-me.json";
import aboutData from "../static/about-me.json";
import { LiquidContainer } from "../components/LiquidContainer.js";
import Header from "../components/Header.js";
import { Linkedin, Github, MailCheck, PhoneCall } from "lucide-react";
import { pageVariants } from "../utils/animations.js";

export default function ContactView() {
    return (
        <motion.div
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="min-h-screen bg-transparent overflow-x-hidden flex flex-col"
        >
            <Header title={contactData.title} subtitle={contactData.subtitle} />
            <div className="max-w-5xl mx-auto px-4 md:px-8 pt-28 md:pt-36 pb-12 w-full flex-grow flex items-center justify-center">
                <LiquidContainer className="w-full p-6 md:p-12">
                    <div className="flex flex-col items-center gap-8 md:gap-12">
                        <div className="w-full max-w-4xl">
                            {/* Links Data */}
                            {(() => {
                                const contactLinks = [
                                    { icon: Linkedin, href: aboutData.social.linkedin, label: "Connect on LinkedIn", color: "text-blue-400" },
                                    { icon: Github, href: aboutData.social.github, label: "Visit GitHub Profile", color: "text-gray-100" },
                                    { icon: MailCheck, href: "mailto:" + aboutData.social.email, label: "Get in Touch via Email", color: "text-red-400" },
                                    { icon: PhoneCall, href: aboutData.social.phone, label: "Contact via Phone", color: "text-green-400" },
                                ];
                                return (
                                    <>
                                        <div className="flex flex-col gap-4 w-full md:hidden">
                                            {contactLinks.map((item, idx) => (
                                                <a
                                                    key={idx}
                                                    href={item.href}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="relative group flex items-center justify-between px-6 py-4 bg-white/5 dark:bg-white/5 rounded-2xl hover:bg-white/10 dark:hover:bg-white/10 transition-all border border-black/10 dark:border-white/10 hover:border-white/20 hover:scale-[1.02] cursor-pointer"
                                                >
                                                    <div className="flex items-center gap-4">
                                                        <div className={`p-2 rounded-lg bg-white/5 ${item.color}`}>
                                                            <item.icon className="w-6 h-6" />
                                                        </div>
                                                        <span className="font-medium text-lg text-gray-800 dark:text-white group-hover:text-blue-400 transition-colors">
                                                            {item.label}
                                                        </span>
                                                    </div>
                                                    <span className="text-gray-400 group-hover:translate-x-1 transition-transform">→</span>
                                                </a>
                                            ))}
                                        </div>
                                        {/* Desktop View: Grid Layout*/}
                                        <div className="hidden md:grid grid-cols-2 gap-4 w-full">
                                            {contactLinks.map((item, idx) => (
                                                <a
                                                    key={idx}
                                                    href={item.href}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center justify-center gap-3 px-5 py-4 bg-white/10 rounded-xl hover:bg-white/20 transition-all border border-white/10 hover:scale-105 group"
                                                >
                                                    <item.icon className="w-5 h-5 text-white group-hover:text-cyan-400 transition-colors" />
                                                    <span className="font-semibold text-white tracking-wide text-sm">{item.label}</span>
                                                </a>
                                            ))}
                                        </div>
                                    </>
                                );
                            })()}
                        </div>
                    </div>
                </LiquidContainer >
            </div >
        </motion.div>
    );
}
