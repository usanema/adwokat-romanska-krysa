import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const Header = ({ activeTab }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navItems = [
        { id: 'home', label: 'Start', path: '/' },
        { id: 'about', label: 'O Mnie', path: '/about' },
        { id: 'services', label: 'Specjalizacje', path: '/services' },
        { id: 'blog', label: 'Blog', path: '/blog' },
        { id: 'contact', label: 'Kontakt', path: '/contact' },
    ];

    return (
        <>
            <header className="fixed w-full top-0 z-50 bg-cream border-b border-text/10 transition-transform duration-300">
                <div className="flex justify-between items-center h-[80px] px-6 md:px-12">

                    {/* 1. LOGO LEFT */}
                    <a href="/" className="flex flex-col leading-none hover:opacity-70 transition-opacity z-50">
                        <span className="font-display font-medium text-lg uppercase tracking-wider text-text">
                            Romańska-Krysa
                        </span>
                        <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-text/60">
                            Kancelaria Adwokacka
                        </span>
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
            {isMobileMenuOpen && (
                <div className="fixed inset-0 bg-cream z-40 flex flex-col items-center justify-center gap-8 animate-fade-in">
                    {navItems.map((item) => (
                        <a
                            key={item.id}
                            href={item.path}
                            className="text-2xl font-display font-light text-text hover:text-ochre hover:italic transition-all"
                        >
                            {item.label}
                        </a>
                    ))}
                    <a
                        href="/contact"
                        className="mt-8 px-8 py-3 bg-text text-cream font-display uppercase tracking-widest text-sm"
                    >
                        Umów Wizytę
                    </a>
                </div>
            )}
        </>
    );
};

export default Header;
