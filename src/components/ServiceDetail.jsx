import React from 'react';
import { ChevronRight } from 'lucide-react';

const ServiceDetail = ({ spec, index }) => (
    <div className="py-20 border-b border-gray-200 last:border-0">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">

            {/* Title & Icon */}
            <div className="md:col-span-4 sticky top-32">
                <div className="mb-6 text-ochre opacity-80">
                    {React.cloneElement(spec.icon, { size: 40, strokeWidth: 1 })}
                </div>
                <h2 className="text-4xl lg:text-5xl font-display font-light text-text mb-4 leading-tight">
                    {spec.title}
                </h2>
                <span className="text-xs font-mono border border-text/20 rounded-full px-3 py-1 mt-2 inline-block opacity-50">
                    0{index + 1}
                </span>
            </div>

            {/* Content */}
            <div className="md:col-span-1"></div> { /* Spacer */}

            <div className="md:col-span-7">
                <p className="text-xl md:text-2xl text-text/80 font-display font-light leading-relaxed mb-12">
                    {spec.desc}
                </p>

                <h4 className="font-bold text-xs uppercase tracking-widest mb-6 opacity-60">Zakres Współpracy</h4>
                <ul className="space-y-4">
                    {spec.detailedDesc.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-4 group border-l-2 border-transparent hover:border-ochre pl-4 transition-all duration-300">
                            <span className="text-sm font-sans text-text leading-relaxed group-hover:translate-x-1 transition-transform">
                                {item}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    </div>
);

export default ServiceDetail;
