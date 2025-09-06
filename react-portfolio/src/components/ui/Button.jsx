import React from 'react';

const Button = ({ children, onClick, variant = 'primary', size = 'lg', className = '' }) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';
  const sizeClasses = { sm: 'px-3 py-1.5 text-sm', lg: 'px-6 py-3 text-lg' };
  const variantClasses = {
    primary: 'bg-primary text-primary-foreground hover:bg-primary/90 focus:ring-primary',
    outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground focus:ring-ring',
  };
  return (
    <button onClick={onClick} className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}>
      {children}
    </button>
  );
};

export default Button;
