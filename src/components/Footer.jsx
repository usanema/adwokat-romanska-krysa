import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const Footer = () => (
    <footer className="bg-text text-cream pt-24 pb-12 px-6 md:px-12 border-t border-text">
        {/* Large CTA Heading */}
        <div className="mb-24 border-b border-cream/20 pb-24">
            <h2 className="font-display text-[12vw] leading-[0.85] text-cream uppercase">
                Rezerwacja <br />
                <span className="text-ochre italic">Terminu</span>
            </h2>
            <div className="mt-12 flex justify-end">
                <a href="/contact" className="group hidden md:flex items-center gap-4 text-xl font-display uppercase tracking-widest hover:text-ochre transition-colors">
                    Skontaktuj się ze mną
                    <div className="w-12 h-12 rounded-full border border-cream/30 flex items-center justify-center group-hover:bg-ochre group-hover:border-ochre group-hover:text-text transition-all">
                        <ArrowUpRight className="w-5 h-5" />
                    </div>
                </a>
            </div>
        </div>

        {/* Columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 font-sans text-sm tracking-wide text-cream/70">
            <div className="space-y-4">
                <h4 className="text-cream font-bold uppercase tracking-widest">Kancelaria</h4>
                <p>Adwokat Anna Romańska-Krysa</p>
                <p>Katowice, ul. Mariacka XX/Y</p>
            </div>

            <div className="space-y-4">
                <h4 className="text-cream font-bold uppercase tracking-widest">Kontakt</h4>
                <p><a href="mailto:kontakt@adwokat-romanska.pl" className="hover:text-ochre transition">kontakt@adwokat-romanska.pl</a></p>
                <p><a href="tel:+48123456789" className="hover:text-ochre transition">+48 123 456 789</a></p>
            </div>

            <div className="space-y-4">
                <h4 className="text-cream font-bold uppercase tracking-widest">Social</h4>
                <div className="flex flex-col gap-2">
                    <a href="#" className="hover:text-ochre transition">Instagram</a>
                    <a href="#" className="hover:text-ochre transition">Facebook</a>
                    <a href="#" className="hover:text-ochre transition">LinkedIn</a>
                </div>
            </div>

            <div className="space-y-4 md:text-right flex flex-col justify-end">
                <p>&copy; {new Date().getFullYear()}</p>
                <p className="text-xs opacity-50">Designed with precision.</p>
            </div>
        </div>
    </footer>
);

export default Footer;
