import { useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  const [bank, setBank] = useState('');
  const [investmentType, setInvestmentType] = useState('');
  const [amount, setAmount] = useState('');
  const [estimatedReturn, setEstimatedReturn] = useState(null);

  const calculateReturn = () => {
    if (bank && investmentType && amount) {
      const estimatedAmount = Number(amount) * 1.1; // Exemplo: estimativa de 10% de retorno em 12 meses
      setEstimatedReturn(estimatedAmount);
    }
  };

  return (
    <div className="bg-main min-h-screen flex flex-col">
   <Navbar/>
    <div className=" flex flex-col items-center">
      <h1 className="text-3xl font-bold  mb-4">Investimento</h1>
      <div className="mb-3">
        <label htmlFor="bank" className="block font-semibold">Banco:</label>
        <input
          type="text"
          id="bank"
          value={bank}
          onChange={(e) => setBank(e.target.value)}
          className="border p-2 w-100 rounded"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="investmentType" className="block font-semibold">Tipo de Investimento:</label>
        <input
          type="text"
          id="investmentType"
          value={investmentType}
          onChange={(e) => setInvestmentType(e.target.value)}
          className="border p-2 w-100 rounded"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="amount" className="block font-semibold">Valor do Investimento:</label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="border p-2 w-100 rounded"
        />
      </div>
      <button onClick={calculateReturn} className="bg-blue-navbar text-white p-2 rounded hover:bg-blue-700">
        Calcular Rendimento
      </button>
      {estimatedReturn !== null && (
        <div className="mt-4">
          <p>Estimativa de Rendimento em 12 meses: R${estimatedReturn.toFixed(2)}</p>
          <p className="text-sm text-gray-500">
            * Esta é uma estimativa com base na taxa de juros atual do país.
          </p>
        </div>
      )}
    </div>
 <div className="mt-auto">
            <Footer />
          </div>
 </div> 
 
  );
}