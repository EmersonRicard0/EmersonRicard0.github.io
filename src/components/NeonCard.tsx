
import React from "react";

interface NeonCardProps {
  children: React.ReactNode;
}

const NeonCard = ({ children }: NeonCardProps) => (
  <div className="neon-card p-4 rounded-xl mb-3 last:mb-0 shadow-lg">
    {children}
  </div>
);

export default NeonCard;
