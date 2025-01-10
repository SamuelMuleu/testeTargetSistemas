import { useState } from 'react'

const Problem2 = () => {
    const [num, setNum] = useState<number>(0);
    const [resultado, setResultado] = useState<string>('');
  
    const isFibonacci = (num: number): boolean => {
        const fib = (a: number, b: number): boolean => {
          if (b === num || num === 0) return true;
          if (b > num) return false;
          return fib(b, a + b);
        };
        return fib(0, 1);
      };
    const handleCheck = () => {
      setResultado(`O número ${num} ${isFibonacci(num) ? 'pertence' : 'não pertence'} à sequência de Fibonacci.`);
    };
    return (
      <div className="p-4 bg-gray-100 rounded shadow-md">
        <h2 className="text-xl font-bold mb-2">Problema 2</h2>
        <input
          type="number"
          value={num}
          onChange={(e) => setNum(Number(e.target.value))}
          className="border p-2 rounded mb-2"
        />
        <button onClick={handleCheck} className="bg-blue-500 text-white px-4 py-2 rounded">
          Verificar
        </button>
        <p className="mt-2">{resultado}</p>
      </div>
    );
  };

  
  export default Problem2;