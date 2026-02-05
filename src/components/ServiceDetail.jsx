import React from 'react';
import { ChevronRight } from 'lucide-react';

const ServiceDetail = ({ spec, index }) => (
    <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center`}>
        <div className="w-full md:w-1/2">
            <div className="bg-white p-10 shadow-lg border-l-8 border-green">
                <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-cream rounded-full text-green">{spec.icon}</div>
                    <h2 className="text-2xl font-serif text-text">{spec.title}</h2>
                </div>
                <p className="text-text/80 mb-6 font-sans leading-relaxed">{spec.desc}</p>
                <h4 className="font-bold text-green text-sm uppercase tracking-wide mb-4">Zakres pomocy:</h4>
                <ul className="grid grid-cols-1 gap-2">
                    {spec.detailedDesc.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-text/70 font-sans">
                            <ChevronRight className="w-4 h-4 text-beige mt-1 shrink-0" />
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
            {/* Decorative icons large */}
            <div className="opacity-10 text-green">
                {React.cloneElement(spec.icon, { size: 300, strokeWidth: 0.5 })}
            </div>
        </div>
    </div>
);

export default ServiceDetail;
