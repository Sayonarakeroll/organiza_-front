import React, { useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function App() {
  const [entries, setEntries] = useState([]);
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');
  const [category, setCategory] = useState('Receita'); // Padrão: Receita

  const addEntry = () => {
    if (description && value) {
      const entry = {
        description,
        value: parseFloat(value),
        category,
        date: new Date().toLocaleDateString(),
      };

      setEntries([...entries, entry]);
      setDescription('');
      setValue('');
    }
  };

  const deleteEntry = (index) => {
    const updatedEntries = [...entries];
    updatedEntries.splice(index, 1);
    setEntries(updatedEntries);
  };

  const editEntry = (index, newDescription, newValue) => {
    const updatedEntries = [...entries];
    updatedEntries[index].description = newDescription;
    updatedEntries[index].value = parseFloat(newValue);
    setEntries(updatedEntries);
  };

  const totalBalance = entries.reduce((total, entry) => {
    return entry.category === 'Receita'
      ? total + entry.value
      : total - entry.value;
  }, 0);

  const totalReceitas = entries.reduce((total, entry) => {
    return entry.category === 'Receita' ? total + entry.value : total;
  }, 0);

  const totalDespesas = entries.reduce((total, entry) => {
    return entry.category === 'Despesa' ? total + entry.value : total;
  }, 0);

  return (
    <div className="bg-main min-h-screen flex flex-col">
        <Navbar/>
   

      <div className='grid lg:grid-cols-5 gap-4 p-4'>
        <div className='lg:col-span-2 col-span-1 flex justify-between w-full border p-4 rounded-lg'>
            <div className='flex flex-col w-full pb-4'>
                <p className='text-2xl font-bold'>R${totalReceitas.toFixed(2)}</p>
                <p className='text-gray-600'>Entrada</p>
            </div>
        </div>
        <div className='lg:col-span-2 col-span-1 flex justify-between w-full border p-4 rounded-lg'>
            <div className='flex flex-col w-full pb-4'>
                <p className='text-2xl font-bold'>R${totalDespesas.toFixed(2)}</p>
                <p className='text-gray-600'>Saída</p>
            </div>
        </div>
        <div className='flex justify-between w-full border p-4 rounded-lg'>
            <div className='flex flex-col w-full pb-4'>
                <p className='text-2xl font-bold'>R${totalBalance.toFixed(2)}</p>
                <p className='text-gray-600'>Saldo total</p>
            </div>
        </div>
    </div>
    <h1 className="text-2xl font-bold mb-4 mx-auto">Registro de Receitas e Despesas</h1>
 <div className="container p-4 flex items-center mx-auto"> 
      <div className="mb-4 mx-auto">
      <input
          type="text"
          className="p-2 border rounded w-1/8 mr-2"
          placeholder="Descrição"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
            <input
          type="number"
          className="p-2 border rounded w-1/8 mr-2"
          placeholder="Valor"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <select
          className="p-2 border rounded w-1/8"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="Receita">Receita</option>
          <option value="Despesa">Despesa</option>
        </select>
        <button
          className="bg-blue-navbar text-white hover:bg-blue-700 font-bold py-2 px-4 rounded ml-2"
          onClick={addEntry}
        >
          Adicionar
        </button>
      </div>
    </div>
    <div className='mx-auto'>
        <h2 className="text-xl font-semibold mb-2">Histórico de Registros</h2>
        <ul>
          {entries.map((entry, index) => (
            <li key={index} className="mb-2">
              {entry.description} ({entry.category}): R$ {entry.value.toFixed(2)} ({entry.date})
              <button
                className="bg-editar hover:bg-yellow-700 text-white font-bold py-1 px-1 rounded ml-2 "
                onClick={() => editEntry(index, prompt('Nova descrição:', entry.description), prompt('Novo valor:', entry.value))}
              >
                Editar
              </button>
              <button
                className="bg-red hover:bg-red-700 text-white font-bold py-1 px-1 rounded ml-2 W"
                onClick={() => deleteEntry(index)}
              >
                Excluir
              </button>
            </li>
          ))}
        </ul>
    </div>
    <div className="mt-auto">
            <Footer />
          </div>
    </div>
  );
}

export default App;
