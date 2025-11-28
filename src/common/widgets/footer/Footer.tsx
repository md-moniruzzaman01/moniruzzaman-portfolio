'use client';

import React from 'react';
import { Mail, Clock, MapPin } from 'lucide-react';

// --- Utility Components ---

const DashedDivider: React.FC<{ title: string }> = ({ title }) => (
    <div className="mb-4">
        <p className="text-sm font-mono tracking-widest uppercase text-gray-500 mb-1">
            {title}
        </p>
        <div className="w-full border-t border-dashed border-gray-700"></div>
    </div>
);

const FooterLink: React.FC<{ href: string; text: string; className?: string }> = ({ href, text, className = '' }) => (
    <a
        href={href}
        className={`block text-2xl font-extrabold text-white hover:text-cyan-400 transition-colors duration-200 py-1 ${className}`}
    >
        {text}
    </a>
);

// --- Footer Component ---

const Footer = () => {
    const getCurrentTime = (timezone: string) => {
        return new Date().toLocaleString('en-US', {
            timeZone: timezone,
            hour: '2-digit',
            minute: '2-digit',
            hour12: true,
        });
    };

    return (
        <footer className="bg-gray-950 pt-24 pb-8 px-6 font-inter">
            <div className="container mx-auto max-w-7xl">

                {/* Main Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 lg:gap-16 border-b border-gray-800 pb-16">

                    {/* Column 1: Primary Links */}
                    <div>
                        <DashedDivider title="PRIMARY" />
                        <nav className="space-y-1">
                            <FooterLink href="#about" text="About me" />
                            <FooterLink href="#projects" text="Projects" />
                            <FooterLink href="#contact" text="Contact" />
                        </nav>
                    </div>

                    {/* Column 2: Explore */}
                    <div>
                        <DashedDivider title="EXPLORE" />
                        <nav className="space-y-1">
                            <FooterLink href="#about" text="About" />
                            <FooterLink href="#blog" text="Blog" />
                        </nav>
                    </div>

                    {/* Column 3: Social */}
                    <div>
                        <DashedDivider title="SOCIAL" />
                        <nav className="space-y-1">
                            <FooterLink href="https://www.linkedin.com/in/moniruzzaman-ripon/" text="LinkedIn" />
                            <FooterLink href="https://x.com/dev_moniruzaman" text="X" />
                            <FooterLink href="https://github.com/md-moniruzzaman01" text="Github" />
                        </nav>
                    </div>

                    {/* Column 4: Contact */}
                    <div>
                        <DashedDivider title="LET'S CONNECT" />
                        <div className="space-y-4">
                            <a
                                href="mailto:dev.moniruzzaman@gmail.com"
                                className="block text-2xl font-extrabold text-indigo-400 hover:text-indigo-300 transition-colors py-1"
                            >
                                dev.moniruzzaman@gmail.com
                            </a>
                            <p className="text-sm font-light text-gray-400 max-w-xs">
                                Interested in collaborating? Let’s create something extraordinary together.
                            </p>
                        </div>
                    </div>

                </div>

                {/* Bottom Row */}
                <div className="grid grid-cols-3 md:grid-cols-4 pt-4 border-b border-gray-800 pb-10">

                    <div className="col-span-1 text-xs font-mono tracking-wide text-gray-600 uppercase">
                        &copy; 2025 Moniruzzaman <br />
                        All Rights Reserved
                    </div>

                    <div className="col-span-1 text-xs font-mono tracking-wide text-gray-600 uppercase flex items-center">
                        <MapPin className="w-3 h-3 mr-1 text-gray-600" />
                        Dhaka <br />
                        <Clock className="w-3 h-3 ml-2 mr-1 text-gray-600" />
                        {getCurrentTime('Asia/Dhaka')}
                    </div>

                    <div className="col-span-1 md:col-span-2 text-xs font-mono tracking-widest text-gray-600 uppercase text-right">
                        // Let's build something remarkable together //
                    </div>

                </div>

                {/* Large Typographic Element */}
                <div className="pt-2">
                    <h1 className="text-[5rem] sm:text-[3rem] md:text-[15rem] lg:text-[20rem] font-extrabold leading-none text-gray-900 select-none">
                        Moniruzzaman
                    </h1>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
