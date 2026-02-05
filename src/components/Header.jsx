import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = ({ activeTab }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { id: 'home', label: 'Start', path: '/' },
        { id: 'about', label: 'O Mnie', path: '/about' },
        { id: 'services', label: 'Specjalizacje', path: '/services' },
        { id: 'blog', label: 'Blog', path: '/blog' },
        { id: 'contact', label: 'Kontakt', path: '/contact' },
    ];

    return (
        <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-green text-cream py-3 shadow-lg' : 'bg-green text-cream py-5'}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <a href="/" className="cursor-pointer flex flex-col leading-none hover:opacity-90 transition-opacity">
                    <span className="font-serif text-xl tracking-widest uppercase text-beige">Adwokat</span>
                    <span className="font-serif text-2xl font-semibold">Anna Romańska-Krysa</span>
                </a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex gap-8 items-center text-sm font-medium tracking-wide uppercase">
                    {navItems.map((item) => (
                        <a
                            key={item.id}
                            href={item.path}
                            className={`relative px-2 py-1 transition-colors hover:text-beige ${activeTab === item.id ? 'text-beige' : 'text-cream'}`}
                        >
                            {item.label}
                            {activeTab === item.id && (
                                <span className="absolute bottom-0 left-0 w-full h-px bg-beige"></span>
                            )}
                        </a>
                    ))}
                    <a
                        href="/contact"
                        className="ml-4 px-5 py-2 border border-beige text-beige hover:bg-beige hover:text-green transition-all duration-300"
                    >
                        Umów Wizytę
                    </a>
                </nav>

                {/* Mobile Menu Toggle */}
                <button className="md:hidden text-beige" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Nav Overlay */}
            {isMobileMenuOpen && (
                <div className="absolute top-full left-0 w-full bg-green border-t border-cream/10 p-6 md:hidden shadow-xl flex flex-col gap-4 text-center">
                    {navItems.map((item) => (
                        <a
                            key={item.id}
                            href={item.path}
                            className={`py-3 uppercase tracking-widest text-sm ${activeTab === item.id ? 'text-beige' : 'text-white'}`}
                        >
                            {item.label}
                        </a>
                    ))}
                </div>
            )}
        </header>
    );
};

export default Header;
