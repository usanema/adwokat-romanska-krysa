import React, { useState } from 'react';
import { Plus, X } from 'lucide-react';

const AccordionItem = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-text/10">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center py-6 text-left group hover:text-ochre transition-colors"
            >
                <span className="font-display text-lg tracking-wide">{title}</span>
                <div className={`transition-transform duration-300 ${isOpen ? 'rotate-90' : 'rotate-0'}`}>
                    {isOpen ? <X className="w-5 h-5 text-ochre" /> : <Plus className="w-5 h-5 text-text/40 group-hover:text-ochre" />}
                </div>
            </button>

            <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100 mb-6' : 'max-h-0 opacity-0'}`}
            >
                <p className="font-sans text-sm text-text/70 leading-relaxed max-w-2xl">
                    {content}
                </p>
            </div>
        </div>
    );
};

const ServiceDetail = ({ spec, index }) => (
    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-32 ${index % 2 === 1 ? 'lg:mt-32' : ''}`}> {/* Stagger effect via top margin on odd items */}

        {/* Image Column */}
        <div className="relative group overflow-hidden" data-animate="fade">
            <div className="aspect-[4/5] overflow-hidden bg-gray-100">
                <img
                    src={spec.image}
                    alt={spec.title}
                    className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                />
            </div>
            {/* Number - Absolute */}
            <span className="absolute top-4 left-4 font-mono text-xs text-text bg-white/80 px-2 py-1 backdrop-blur-sm">
                0{index + 1}
            </span>
        </div>

        {/* Content Column */}
        <div className="flex flex-col justify-center" data-animate="fade">
            <span className="text-ochre text-xs font-bold uppercase tracking-[0.2em] mb-4 block">
                {spec.subtitle}
            </span>

            <h2 className="font-display text-4xl md:text-5xl text-text mb-8 leading-tight">
                {spec.title}
            </h2>

            <p className="font-sans text-text/70 leading-relaxed mb-12 text-lg">
                {spec.desc}
            </p>

            {/* Accordions */}
            <div className="border-t border-text/10">
                {spec.details.map((detail, idx) => (
                    <AccordionItem key={idx} title={detail.title} content={detail.content} />
                ))}
            </div>
        </div>

    </div>
);

export default ServiceDetail;
