"use client";

import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { PopupButton } from "react-calendly";

// --- Theme and Styles (Dark Mode, Vibrant Accent) ---
const ACCENT_COLOR = "text-indigo-400";
const ACCENT_BG = "bg-indigo-600";
const MUTED_COLOR = "text-gray-400";
const FOREGROUND_COLOR = "text-gray-50";
const BACKGROUND_COLOR = "bg-gray-950";
const CARD_BG = "bg-gray-900";
const BORDER_COLOR = "border-gray-800";

// A simple Button component replacement for demonstration
const CustomButton: React.FC<{
  children: React.ReactNode;
  className?: string;
  href: string;
}> = ({ children, className, href }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`inline-flex items-center justify-center font-semibold rounded-full px-8 py-3 transition-all duration-300 ${className}`}
  >
    {children}
  </a>
);

// A simple Card component replacement, incorporating the modern aesthetic
const InfoCard: React.FC<{
  children: React.ReactNode;
  className?: string;
  icon: React.ReactNode;
}> = ({ children, className, icon }) => (
  <div
    className={`
      p-5 sm:p-6 
      flex flex-col sm:flex-row 
      gap-4 sm:gap-5 
      rounded-xl border 
      ${BORDER_COLOR} ${CARD_BG}
      transition-all duration-300 
      hover:border-indigo-500/50 
      hover:shadow-2xl hover:shadow-indigo-500/10 
      ${className}
    `}
  >
    {/* ICON WRAPPER */}
    <div
      className={`
        p-3 sm:p-4 
        rounded-xl 
        ${ACCENT_BG}/10 
        flex-shrink-0 
        flex items-center justify-center
        text-xl sm:text-2xl
      `}
    >
      {icon}
    </div>

    {/* CONTENT */}
    <div className="text-sm sm:text-base leading-relaxed">{children}</div>
  </div>
);

// --- CONTACT DATA ---
const emailAddress = "dev.moniruzzaman@gmail.com";
const phone = "+88 01618396301";
const meetingLink = "https://calendly.com/dev-moniruzzaman/30min";
// --- CONTACT COMPONENT ---
const Contact = () => {
  const [mounted, setMounted] = useState(false);

  // This ensures code runs only on the client
  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <section id="contact" className={`py-24 px-6  ${FOREGROUND_COLOR}`}>
      <div className="container mx-auto max-w-7xl">
        {/* HEADER */}
        <div className="text-center mb-16 space-y-4">
          <p
            className={`${ACCENT_COLOR.replace(
              "text-",
              "text-",
            )} text-sm tracking-widest uppercase font-mono`}
          >
            Partner with a Specialist
          </p>
          <h2 className="text-3xl md:text-6xl font-extrabold leading-tight text-gray-50 textZoom">
            Ready to Scale Your Business?
          </h2>
          <p
            className={`${MUTED_COLOR} max-w-3xl mx-auto text-lg pt-2 textZoom`}
          >
            I build high-conversion, scalable web applications that drive real
            business results. Let's discuss how modern development can
            accelerate your growth.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-center">
          {/* LEFT — CONTACT INFO (3/5 width on large screens) */}
          <div className="space-y-6 lg:col-span-3">
            <div className="space-y-4">
              <p
                className={`${ACCENT_COLOR.replace(
                  "text-",
                  "text-",
                )} text-sm tracking-widest uppercase font-mono`}
              >
                Let’s Talk Strategy
              </p>
              <h3 className="text-2xl md:text-4xl font-bold text-gray-100 textZoom wrap-break-word">
                Schedule Your Free Consultation
              </h3>
              <p
                className={`${MUTED_COLOR} text-base md:text-lg leading-relaxed pt-2`}
              >
                As an NYC-focused full-stack developer, I provide clear,
                actionable strategies to modernize outdated platforms, boost
                SEO, and deliver fast, user-friendly experiences using Next.js
                and React.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 pt-6">
              {/* EMAIL */}
              <InfoCard icon={<Mail className={`w-6 h-6  ${ACCENT_COLOR}`} />}>
                <p className="text-sm text-gray-500 ">Email</p>
                <a
                  href={`mailto:${emailAddress}`}
                  className={`font-semibold text-gray-100 hover:${ACCENT_COLOR} transition-colors text-lg wrap-anywhere`}
                >
                  {emailAddress}
                </a>
              </InfoCard>

              {/* PHONE */}
              <InfoCard icon={<Phone className={`w-6 h-6 ${ACCENT_COLOR}`} />}>
                <p className="text-sm text-gray-500">Phone</p>
                <a
                  href={`tel:${phone}`}
                  className={`font-semibold text-gray-100 hover:${ACCENT_COLOR} transition-colors text-lg`}
                >
                  {phone}
                </a>
              </InfoCard>

              {/* LOCATION */}
              <InfoCard
                icon={<MapPin className={`w-6 h-6 ${ACCENT_COLOR}`} />}
                className="md:col-span-2"
              >
                <p className="text-sm text-gray-500">Location</p>
                <p className="font-semibold text-gray-100 text-lg">
                  BD — Serving All Boroughs, Remote First
                </p>
              </InfoCard>
            </div>
          </div>

          <div className="lg:col-span-2 flex justify-center lg:justify-end w-full">
            <div
              className={`
                        relative w-full max-w-md p-10 rounded-2xl text-center space-y-6 
                        bg-gradient-to-br from-indigo-900/60 to-gray-900 
                        border border-indigo-700/50 
                        shadow-2xl shadow-indigo-500/20 
                        transform hover:scale-[1.02] transition-transform duration-500
                    `}
            >
              <div className="absolute inset-0 rounded-2xl opacity-50 blur-xl bg-indigo-900/50 -z-10" />

              <div className="space-y-4">
                <h3 className="text-3xl font-bold text-gray-50">
                  Start Your Project Today
                </h3>
                <p className={`${MUTED_COLOR} leading-relaxed`}>
                  Whether it's a critical redesign or a brand new application, I
                  deliver modern, reliable, and results-driven code.
                </p>
              </div>

              <CustomButton
                href={meetingLink}
                className={`
                                ${ACCENT_BG} text-white 
                                hover:bg-indigo-500 
                                shadow-lg shadow-indigo-500/40 
                                transform hover:translate-y-[-2px] float-btn
                            `}
              >
                Book a Free Strategy Meeting
                <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </CustomButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
