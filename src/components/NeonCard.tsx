
import React from "react";

interface NeonCardProps {
  children: React.ReactNode;
  className?: string;
}

const NeonCard = ({ children, className = "" }: NeonCardProps) => (
  <div className={`minimal-card p-4 rounded-xl mb-3 last:mb-0 shadow-md ${className}`}>
    {children}
  </div>
);

export default NeonCard;

