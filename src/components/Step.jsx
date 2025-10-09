import React from "react";

// children - Permite renderizar el "contenido" del componente
export const Step = ({ children, stepNumber }) => {
  return (
    <div className="step">
      <div className="step-number">{stepNumber}</div>
      <div className="step-content">{children}</div>
    </div>
  );
};
