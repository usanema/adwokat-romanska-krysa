import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const Footer = ({ showMap = true, showCTA = true }) => (
    <footer className="bg-text text-cream pt-12 md:pt-24 pb-12 px-6 md:px-12 border-t border-text">
        {/* Subtle CTA Section */}
        {showCTA && (
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12 md:mb-20 border-b border-cream/20 pb-12">
                <div>
                    <h3 className="font-display text-3xl md:text-4xl text-cream mb-2">
                        Potrzebujesz wsparcia?
                    </h3>
                    <p className="font-sans text-cream/60 text-sm md:text-base tracking-wide">
                        Skontaktuj się, aby omówić Twoją sprawę.
                    </p>
                </div>

                <a href="/contact" className="group flex items-center gap-3 bg-cream text-text px-8 py-4 uppercase tracking-[0.15em] text-xs font-bold hover:bg-accent transition-colors duration-300">
                    Umów Konsultację
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
            </div>
        )}

        {/* Content Row: Text Columns + Map */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">

            {/* Left Side: Text Columns (Grid) */}
            <div className={`w-full ${showMap ? 'lg:w-1/3' : 'lg:w-full'} grid grid-cols-1 sm:grid-cols-2 ${showMap ? '' : 'lg:grid-cols-4'} gap-12 font-sans text-sm tracking-wide text-cream/70`}>
                <div className="space-y-4">
                    <h4 className="text-cream font-bold uppercase tracking-widest">Kancelaria</h4>
                    <p>Adwokat Anna Romańska-Krysa</p>
                    <p>ul. Henryka Jordana 13a lok. 2<br />40-056 Katowice</p>
                    <div className="pt-2 text-xs opacity-60 font-mono">
                        <p>NIP: 9542897741</p>
                        <p>REGON: 543220497</p>
                    </div>
                </div>

                <div className="space-y-4">
                    <h4 className="text-cream font-bold uppercase tracking-widest">Kontakt</h4>
                    <p><a href="mailto:kontakt@adwokatromanskakrysa.pl" className="hover:text-accent transition">kontakt@adwokatromanskakrysa.pl</a></p>
                    <p><a href="tel:+48660293665" className="hover:text-accent transition">+48 660 293 665</a></p>
                </div>

                <div className="space-y-4">
                    <h4 className="text-cream font-bold uppercase tracking-widest">Social</h4>
                    <div className="flex flex-col gap-2">
                        <a href="#" className="hover:text-accent transition">Instagram</a>
                        <a href="#" className="hover:text-accent transition">Facebook</a>
                        <a href="#" className="hover:text-accent transition">LinkedIn</a>
                    </div>
                </div>

                <div className="space-y-4 flex flex-col justify-end hidden lg:flex">
                    <p>&copy; {new Date().getFullYear()}</p>
                    <p className="text-xs opacity-50 text-wrap">Wszelkie prawa zastrzeżone.</p>
                </div>
            </div>

            {/* Right Side: Map Section */}
            {showMap && (
                <div className="w-full lg:w-2/3 h-[300px] lg:h-[400px] relative overflow-hidden grayscale invert brightness-75 contrast-125">
                    {/* Map Overlay for Dark Tone */}
                    <div className="absolute inset-0 pointer-events-none z-10 bg-[#0F1F15] opacity-20 mix-blend-overlay"></div>

                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2551.1550275591703!2d19.01016007666527!3d50.25168880165497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4716cff8a4395793%3A0xc1ec742445cdace6!2sul.%20Henryka%20Jordana%2013a%2C%20Katowice!5e0!3m2!1spl!2spl!4v1771250905256!5m2!1spl!2spl"
                        className="absolute w-full h-[calc(100%+300px)] -top-[150px] left-0 pointer-events-none"
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
            )}

            {/* Mobile Copyright (Moved below Map on mobile) */}
            <div className="lg:hidden w-full space-y-4 flex flex-col justify-end text-cream/70 font-sans text-sm tracking-wide">
                <p>&copy; {new Date().getFullYear()}</p>
                <p className="text-xs opacity-50 text-wrap">Wszelkie prawa zastrzeżone</p>
            </div>
        </div>

    </footer>
);

export default Footer;
