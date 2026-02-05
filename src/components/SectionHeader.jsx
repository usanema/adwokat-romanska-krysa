import React from 'react';

const SectionHeader = ({ title, subtitle, align = 'center' }) => (
    <div className={`mb-12 ${align === 'center' ? 'text-center' : 'text-left'}`}>
        <h2 className="text-3xl md:text-4xl font-serif text-green mb-4">{title}</h2>
        {subtitle && <div className="w-24 h-1 bg-beige mx-auto mb-6"></div>}
        {subtitle && <p className="text-text/80 max-w-2xl mx-auto font-sans leading-relaxed">{subtitle}</p>}
    </div>
);

export default SectionHeader;
