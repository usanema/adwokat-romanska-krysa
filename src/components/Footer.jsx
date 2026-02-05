import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const Footer = () => (
    <footer className="bg-text text-cream pt-24 pb-12 px-6 md:px-12 border-t border-text">
        {/* Large CTA Heading */}
        <div className="mb-24 border-b border-cream/20 pb-24">
            <h2 className="font-display text-[12vw] leading-[0.85] text-cream uppercase">
                Rezerwacja <br />
                <span className="text-accent italic">Terminu</span>
            </h2>
            <div className="mt-12 flex justify-end">
                <a href="/contact" className="group hidden md:flex items-center gap-4 text-xl font-display uppercase tracking-widest hover:text-accent transition-colors">
                    Skontaktuj się ze mną
                    <div className="w-12 h-12 rounded-full border border-cream/30 flex items-center justify-center group-hover:bg-accent group-hover:border-accent group-hover:text-text transition-all">
                        <ArrowUpRight className="w-5 h-5" />
                    </div>
                </a>
            </div>
        </div>

        {/* Content Row: Text Columns + Map */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">

            {/* Left Side: Text Columns (Grid) */}
            <div className="w-full lg:w-1/3 grid grid-cols-1 sm:grid-cols-2 gap-12 font-sans text-sm tracking-wide text-cream/70">
                <div className="space-y-4">
                    <h4 className="text-cream font-bold uppercase tracking-widest">Kancelaria</h4>
                    <p>Adwokat Anna Romańska-Krysa</p>
                    <p>Katowice, ul. Mariacka 37</p>
                </div>

                <div className="space-y-4">
                    <h4 className="text-cream font-bold uppercase tracking-widest">Kontakt</h4>
                    <p><a href="mailto:kontakt@adwokat-romanska.pl" className="hover:text-accent transition">kontakt@adwokat-romanska.pl</a></p>
                    <p><a href="tel:+48123456789" className="hover:text-accent transition">+48 123 456 789</a></p>
                </div>

                <div className="space-y-4">
                    <h4 className="text-cream font-bold uppercase tracking-widest">Social</h4>
                    <div className="flex flex-col gap-2">
                        <a href="#" className="hover:text-accent transition">Instagram</a>
                        <a href="#" className="hover:text-accent transition">Facebook</a>
                        <a href="#" className="hover:text-accent transition">LinkedIn</a>
                    </div>
                </div>

                <div className="space-y-4 flex flex-col justify-end">
                    <p>&copy; {new Date().getFullYear()}</p>
                    <p className="text-xs opacity-50 text-wrap">Wszelkie prawa zastrzeżone.<br />Designed with precision.</p>
                </div>
            </div>

            {/* Right Side: Map Section */}
            <div className="w-full lg:w-2/3 h-[400px] relative overflow-hidden grayscale invert brightness-75 contrast-125">
                {/* Map Overlay for Dark Tone */}
                <div className="absolute inset-0 pointer-events-none z-10 bg-[#0F1F15] opacity-20 mix-blend-overlay"></div>

                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2551.0!2d19.0!3d50.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4716ce3685a73229%3A0x6a0a9c6870530!2sMariacka%2C%20Katowice!5e0!3m2!1spl!2spl!4v1700000000000!5m2!1spl!2spl"
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: 'grayscale(100%) invert(90%) contrast(1.2)' }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>

                {/* Custom Marker (Overlay) */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-full z-20 pointer-events-none">
                    <div className="bg-cream text-text p-3 shadow-xl">
                        <span className="block font-display font-medium text-sm leading-none uppercase tracking-wide">
                            Romańska-Krysa
                        </span>
                        <span className="block font-sans text-[8px] uppercase tracking-[0.2em] text-text/70 mt-1">
                            Kancelaria
                        </span>
                    </div>
                    {/* Triangle pointer - Inverted colors for Footer */}
                    <div className="w-0 h-0 border-l-[8px] border-l-transparent border-t-[8px] border-t-cream border-r-[8px] border-r-transparent mx-auto"></div>
                </div>
            </div>
        </div>

    </footer>
);

export default Footer;
