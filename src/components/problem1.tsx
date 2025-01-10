const Problem1 = () => {
  const calculateSum = () => {
    const index = 13;
    const sumAux = (k: number, soma: number): number => {
      if (k >= index) return soma;
      return sumAux(k + 1, soma + k + 1);
    };
    return sumAux(0, 0);
  };

  return (
    <div className="p-4 bg-gray-100 rounded shadow-md">
      <h2 className="text-xl font-bold mb-2">Problema 1</h2>
      <p>O valor final de SOMA é: {calculateSum()}</p>
    </div>
  );
};

export default Problem1;
