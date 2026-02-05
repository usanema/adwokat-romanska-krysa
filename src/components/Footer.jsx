import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => (
    <footer className="bg-text text-cream/60 py-16 font-sans text-sm">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-cream/10 pb-12">

            <div className="md:col-span-1">
                <span className="font-serif text-lg tracking-widest uppercase text-beige block mb-4">Adwokat Romańska-Krysa</span>
                <p className="leading-relaxed mb-6">
                    Profesjonalna pomoc prawna w Katowicach. Specjalizacja w prawie medycznym i cywilnym.
                </p>
                <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-cream/10 flex items-center justify-center hover:bg-beige hover:text-green transition cursor-pointer"><span className="font-serif">Fb</span></div>
                    <div className="w-8 h-8 rounded-full bg-cream/10 flex items-center justify-center hover:bg-beige hover:text-green transition cursor-pointer"><span className="font-serif">Ig</span></div>
                    <div className="w-8 h-8 rounded-full bg-cream/10 flex items-center justify-center hover:bg-beige hover:text-green transition cursor-pointer"><span className="font-serif">In</span></div>
                </div>
            </div>

            <div>
                <h4 className="text-cream uppercase tracking-widest mb-6 text-xs font-bold">Menu</h4>
                <ul className="space-y-3">
                    <li><a href="/about" className="hover:text-beige transition">O Mnie</a></li>
                    <li><a href="/services" className="hover:text-beige transition">Specjalizacje</a></li>
                    <li><a href="/blog" className="hover:text-beige transition">Blog Prawniczy</a></li>
                    <li><a href="/contact" className="hover:text-beige transition">Kontakt</a></li>
                </ul>
            </div>

            <div>
                <h4 className="text-cream uppercase tracking-widest mb-6 text-xs font-bold">Obszary Prawa</h4>
                <ul className="space-y-3">
                    <li><span className="hover:text-beige cursor-default transition">Prawo Medyczne</span></li>
                    <li><span className="hover:text-beige cursor-default transition">Błędy Lekarskie</span></li>
                    <li><span className="hover:text-beige cursor-default transition">Rozwody i Rodzina</span></li>
                    <li><span className="hover:text-beige cursor-default transition">Sprawy Karne</span></li>
                </ul>
            </div>

            <div>
                <h4 className="text-cream uppercase tracking-widest mb-6 text-xs font-bold">Kontakt</h4>
                <ul className="space-y-3">
                    <li className="flex gap-3 items-start">
                        <MapPin className="w-4 h-4 mt-1 text-beige" />
                        <span>ul. Mariacka XX/Y<br />40-000 Katowice</span>
                    </li>
                    <li className="flex gap-3 items-center">
                        <Phone className="w-4 h-4 text-beige" />
                        <span>+48 123 456 789</span>
                    </li>
                    <li className="flex gap-3 items-center">
                        <Mail className="w-4 h-4 text-beige" />
                        <span>kontakt@adwokat-romanska.pl</span>
                    </li>
                </ul>
            </div>
        </div>
        <div className="container mx-auto px-6 pt-8 flex flex-col md:flex-row justify-between items-center text-xs opacity-50">
            <p>&copy; 2026 Kancelaria Adwokacka Anna Romańska-Krysa. Wszelkie prawa zastrzeżone.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
                <a href="#" className="hover:text-white">Polityka Prywatności</a>
                <a href="#" className="hover:text-white">Regulamin</a>
            </div>
        </div>
    </footer>
);

export default Footer;
