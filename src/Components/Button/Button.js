import React from 'react';

const Button = ({ text, className, type, children, ...props }) => {
	return (
		<button
			className={`rounded-xl text-primary font-semibold capitalize border border-primary bg-secondary lg:px-4 lg:py-2 px-3 py-1 inline-block hover:text-secondary hover:bg-primary transition-colors ${className} `}
			type={type ? type : ''}
			{...props}
		>
			{children && children}
			{text}
		</button>
	);
};

export default Button;
