'use client';

import React from 'react';
import { Mail, Clock, MapPin } from 'lucide-react';

// --- Utility Components for the Specific Typographic Style ---

// Component for the dashed line separator
const DashedDivider: React.FC<{ title: string }> = ({ title }) => (
    <div className="mb-4">
        <p className="text-sm font-mono tracking-widest uppercase text-gray-500 mb-1">
            {title}
        </p>
        <div className="w-full border-t border-dashed border-gray-700"></div>
    </div>
);

// Component for a styled link item
const FooterLink: React.FC<{ href: string, text: string, className?: string }> = ({ href, text, className = '' }) => (
    <a
        href={href}
        className={`block text-2xl font-extrabold text-white hover:text-cyan-400 transition-colors duration-200 py-1 ${className}`}
    >
        {text}
    </a>
);

// --- Footer Component ---

const Footer = () => {
    // Current time placeholder for the New York City section
    const getCurrentNYCTime = () => {
        return new Date().toLocaleString('en-US', {
            timeZone: 'America/New_York',
            hour: '2-digit',
            minute: '2-digit',
            hour12: true,
        });
    };

    return (
        <footer className="bg-gray-950 pt-24 pb-8 px-6 font-inter">
            <div className="container mx-auto max-w-7xl">
                
                {/* Main Grid Structure (Four Columns) */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 lg:gap-16 border-b border-gray-800 pb-16">
                    
                    {/* Column 1: PRIMARY */}
                    <div>
                        <DashedDivider title="PRIMARY" />
                        <nav className="space-y-1">
                            <FooterLink href="#approach" text="Approach" />
                            <FooterLink href="#clients" text="Clients" />
                            <FooterLink href="#awards" text="Awards" />
                            <FooterLink href="#services" text="Services" />
                        </nav>
                    </div>

                    {/* Column 2: GO DEEPER (Added Careers and Blog) */}
                    <div>
                        <DashedDivider title="GO DEEPER" />
                        <nav className="space-y-1">
                            <FooterLink href="#about" text="About" />
                            <FooterLink href="#careers" text="Careers" />
                            <FooterLink href="#blog" text="Blog" />
                        </nav>
                    </div>

                    {/* Column 3: SOCIAL (Added LinkedIn) */}
                    <div>
                        <DashedDivider title="SOCIAL" />
                        <nav className="space-y-1">
                            <FooterLink href="https://instagram.com" text="Instagram" />
                            <FooterLink href="https://x.com" text="X" />
                            <FooterLink href="https://linkedin.com" text="LinkedIn" />
                        </nav>
                    </div>

                    {/* Column 4: WANT TO SEE OUR WORK? (Updated description) */}
                    <div>
                        <DashedDivider title="WANT TO SEE OUR WORK?" />
                        <div className="space-y-4">
                            <a
                                href="mailto:hey@mantis.works"
                                className="block text-2xl font-extrabold text-indigo-400 hover:text-indigo-300 transition-colors py-1"
                            >
                                hey@mantis.works
                            </a>
                            <p className="text-sm font-light text-gray-400 max-w-xs">
                                Interested in partnering? Let's start the conversation and build something extraordinary together.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom Row - Copyright, Time, and Final Divider */}
                <div className="grid grid-cols-3 md:grid-cols-4 pt-4 border-b border-gray-800 pb-10">
                    
                    {/* Copyright (Updated Year to 2024) */}
                    <div className="col-span-1 text-xs font-mono tracking-wide text-gray-600 uppercase">
                        &copy; COPYRIGHT 2025 Moniruzzaman <br />
                        ALL RIGHTS RESERVED
                    </div>

                    {/* New York Time */}
                    <div className="col-span-1 text-xs font-mono tracking-wide text-gray-600 uppercase flex items-center">
                        <MapPin className="w-3 h-3 mr-1 text-gray-600" />
                        Dhaka <br />
                        <Clock className="w-3 h-3 ml-2 mr-1 text-gray-600" />
                        {getCurrentNYCTime()}
                    </div>
                    
                    {/* Filler Text/Final Divider */}
                    <div className="col-span-1 md:col-span-2 text-xs font-mono tracking-widest text-gray-600 uppercase text-right">
                        // Lets build something ///////////////////////////
                    </div>
                </div>

                {/* Final Massive Typography (Mantis) - REMOVED overflow-hidden */}
                {/* <div className="pt-8">
                    <h1 className="text-[12rem] sm:text-[18rem] md:text-[25rem] lg:text-[30rem] font-extrabold leading-none text-gray-900 select-none">
                        Mantis
                    </h1>
                </div> */}
            </div>
        </footer>
    );
};

export default Footer;