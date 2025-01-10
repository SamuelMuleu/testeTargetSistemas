import Problem1 from "./components/problem1"
import Problem2 from "./components/problem2"
import Problem3 from "./components/problem3"
import Problem4 from "./components/problem4"
import Problem5 from "./components/problem5"

function App() {


  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Resolução de Problemas</h1>
      <div className="space-y-4">
        <Problem1 />
        <Problem2 />
        <Problem3 />
        <Problem4 />
        <Problem5 />
      </div>
    </div>
  );
}

export default App
