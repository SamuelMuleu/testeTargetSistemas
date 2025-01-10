import React from 'react';

const Problem4: React.FC = () => {
  type Estados = "SP" | "RJ" | "MG" | "ES" | "Outros";
  const faturamentoMensal: Record<Estados, number> = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53,
  };

  const total = Object.values(faturamentoMensal).reduce(
    (acc, val) => acc + val,
    0
  );

  const percentuais = Object.keys(faturamentoMensal).map((estado) => {
    const percentual = (faturamentoMensal[estado as Estados] / total) * 100;
    return `${estado}: ${percentual.toFixed(2)}%`;
  });
  return (
    <div className="p-4 bg-gray-100 rounded shadow-md">
      <h2 className="text-xl font-bold mb-2">Problema 4</h2>
      {percentuais.map((percentual, index) => (
        <p key={index}>{percentual}</p>
      ))}
    </div>
  );
};

export default Problem4;