const Problem3 = () => {
  const faturamentoDiario = [
    100, 200, 0, 300, 400, 0, 500, 600, 0, 700, 800, 0, 900, 1000, 0,
  ];

  const validos = faturamentoDiario.filter((valor) => valor > 0);
  const menor = Math.min(...validos);
  const maior = Math.max(...validos);
  const media = validos.reduce((acc, val) => acc + val, 0) / validos.length;
  const diasAcimaDaMedia = validos.filter((valor) => valor > media).length;

  return (
    <div className="p-4 bg-gray-100 rounded shadow-md">
      <h2 className="text-xl font-bold mb-2">Problema 3</h2>
      <p>Menor valor: {menor}</p>
      <p>Maior valor: {maior}</p>
      <p>Dias acima da média: {diasAcimaDaMedia}</p>
    </div>
  );
};

export default Problem3;
