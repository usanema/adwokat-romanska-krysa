import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const Header = ({ activeTab }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navItems = [
        { id: 'home', label: 'Start', path: '/' },
        { id: 'about', label: 'O Mnie', path: '/about' },
        { id: 'services', label: 'Specjalizacje', path: '/services' },
        { id: 'contact', label: 'Kontakt', path: '/contact' },
    ];

    return (
        <>
            <header className="fixed w-full top-0 z-50 bg-cream border-b border-text/10 transition-transform duration-300">
                <div className="flex justify-between items-center h-[80px] px-6 md:px-12">

                    {/* 1. LOGO LEFT */}
                    {/* 1. LOGO LEFT */}
                    <a href="/" className="flex items-center hover:opacity-80 transition-opacity z-50">
                        <img src="/logo.png" alt="Romańska-Krysa Kancelaria Adwokacka" className="h-10 md:h-14 w-auto object-contain" />
                    </a>

                    {/* 2. CENTER NAV (Desktop) */}
                    <nav className="hidden md:flex gap-12 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        {navItems.map((item) => (
                            <a
                                key={item.id}
                                href={item.path}
                                className={`group relative px-2 py-1 text-xs font-bold uppercase tracking-[0.15em] text-text transition-colors duration-300 ${activeTab === item.id ? 'text-primary' : ''}`}
                            >
                                <span className="relative z-10">{item.label}</span>
                                <div className={`absolute -inset-x-3 -inset-y-2 border border-primary rounded-md pointer-events-none transition-all duration-300 ease-out ${activeTab === item.id ? 'opacity-100 scale-100' : 'opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100'}`}></div>
                            </a>
                        ))}
                    </nav>

                    {/* 3. CTA RIGHT (Desktop) */}
                    <div className="hidden md:flex items-center">
                        <a
                            href="/contact"
                            className="group flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-text hover:text-ochre transition-colors"
                        >
                            Umów Wizytę
                            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                        </a>
                    </div>

                    {/* Mobile Toggle */}
                    <button className="md:hidden z-50 text-text" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                        {isMobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 bg-cream z-40 flex flex-col items-center justify-center gap-8 px-6 transition-all duration-500 ease-in-out ${isMobileMenuOpen
                    ? 'opacity-100 visible pointer-events-auto'
                    : 'opacity-0 invisible pointer-events-none'
                    }`}
            >
                {navItems.map((item, index) => (
                    <a
                        key={item.id}
                        href={item.path}
                        className={`text-3xl md:text-2xl font-display font-light text-text lowercase hover:text-ochre hover:italic transition-all duration-500 transform ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                            }`}
                        style={{ transitionDelay: `${index * 100}ms` }}
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        {item.label}
                    </a>
                ))}
                <a
                    href="/contact"
                    className={`mt-8 px-8 py-3 bg-text text-cream font-display uppercase tracking-widest text-sm transition-all duration-500 transform ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                        }`}
                    style={{ transitionDelay: '500ms' }}
                    onClick={() => setIsMobileMenuOpen(false)}
                >
                    Umów Wizytę
                </a>
            </div>
        </>
    );
};

export default Header;
