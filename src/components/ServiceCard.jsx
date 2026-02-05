import React from 'react';
import { ArrowRight } from 'lucide-react';

const ServiceCard = ({ icon, title, desc, href }) => {
    return (
        <div className="group bg-white p-8 shadow-sm hover:shadow-xl transition-all duration-300 border-t-4 border-transparent hover:border-green h-full">
            <div className="text-green mb-6 group-hover:scale-110 transition duration-300">
                {icon}
            </div>
            <h3 className="text-xl font-serif text-text mb-3">{title}</h3>
            <p className="text-sm text-text/70 mb-6 font-sans leading-relaxed">{desc}</p>
            {href && (
                <a
                    href={href}
                    className="text-green font-bold text-xs uppercase tracking-wider flex items-center gap-2 group-hover:gap-3 transition-all"
                >
                    Więcej <ArrowRight className="w-4 h-4" />
                </a>
            )}
        </div>
    );
};

export default ServiceCard;
