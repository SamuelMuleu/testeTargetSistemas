const Problem5 = () => {
  const reverseString = (str: string): string => {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
      reversed += str[i];
    }
    return reversed;
  };

  const inputString = "Exemplo de string";
  const reversedString = reverseString(inputString);
  return (
    <div className="p-4 bg-gray-100 rounded shadow-md">
      <h2 className="text-xl font-bold mb-2">Problema 5</h2>
      <p>String original: {inputString}</p>
      <p>String invertida: {reversedString}</p>
    </div>
  );
};

export default Problem5;
