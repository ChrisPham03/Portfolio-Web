import React from 'react';

const Badge = ({ children }) => (
  <span className="bg-secondary text-foreground py-1 px-3 rounded-full text-xs font-medium w-fit">
    {children}
  </span>
);

export default Badge;
