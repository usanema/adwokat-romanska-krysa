import React from 'react';

const Button = ({ children, variant = 'primary', className = '', onClick, href }) => {
    const baseStyle = "px-8 py-3 transition-all duration-300 font-semibold tracking-wide text-sm uppercase font-sans cursor-pointer inline-block text-center";
    const variants = {
        primary: "bg-green text-beige hover:bg-[#0f4d3a] border border-green",
        outline: "bg-transparent text-green border border-green hover:bg-green hover:text-beige",
        gold: "bg-beige text-green hover:bg-[#e6d0bd] border border-beige"
    };

    if (href) {
        return (
            <a href={href} className={`${baseStyle} ${variants[variant]} ${className}`}>
                {children}
            </a>
        );
    }

    return (
        <button onClick={onClick} className={`${baseStyle} ${variants[variant]} ${className}`}>
            {children}
        </button>
    );
};

export default Button;
