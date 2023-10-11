import React, { useState, useEffect } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Orcamento = () => {
  const [categories, setCategories] = useState([]);
  const [alerts, setAlerts] = useState([]);
  const [newExpenseValues, setNewExpenseValues] = useState({
    categoryId: 0,
    newExpense: 0,
  });
  const [newCategory, setNewCategory] = useState({ name: '', budget: 0 });
  const [showAlert, setShowAlert] = useState(false);

  const handleCategoryNameChange = (categoryId, newName) => {
    setCategories((prevCategories) =>
      prevCategories.map((category) =>
        category.id === categoryId ? { ...category, name: newName } : category
      )
    );
  };

  const handleCategoryBudgetChange = (categoryId, newBudget) => {
    setCategories((prevCategories) =>
      prevCategories.map((category) =>
        category.id === categoryId
          ? {
              ...category,
              budget: parseFloat(newBudget),
              expenses: Math.min(category.expenses, parseFloat(newBudget)),
            }
          : category
      )
    );
  };

  const handleAddExpense = () => {
    setCategories((prevCategories) =>
      prevCategories.map((category) =>
        category.id === newExpenseValues.categoryId
          ? {
              ...category,
              expenses: category.expenses + parseFloat(newExpenseValues.newExpense),
              budget: category.budget - parseFloat(newExpenseValues.newExpense),
            }
          : category
      )
    );

    // Limpa os campos após a adição de despesa
    setNewExpenseValues({ categoryId: 0, newExpense: 0 });
  };

  const handleAddCategory = () => {
    // Faça a validação dos campos da nova categoria aqui, por exemplo, se o nome não estiver vazio e o orçamento for um número válido.

    // Adicione a nova categoria à lista de categorias
    setCategories((prevCategories) => [
      ...prevCategories,
      {
        id: prevCategories.length + 1,
        name: newCategory.name,
        budget: parseFloat(newCategory.budget),
        expenses: 0,
      },
    ]);

    // Limpe os campos do formulário de nova categoria
    setNewCategory({ name: '', budget: 0 });
  };

  const handleDeleteCategory = (categoryId) => {
    // Filtra as categorias para remover a categoria com o ID correspondente
    setCategories((prevCategories) =>
      prevCategories.filter((category) => category.id !== categoryId)
    );
  };

  useEffect(() => {
    // Verificar os gastos em relação ao orçamento e fornecer alertas
    const newAlerts = categories
      .filter((category) => category.expenses > category.budget)
      .map((category) => category.name);

    if (newAlerts.length > 0) {
      setAlerts(newAlerts);

      // Mostrar o alerta
      setShowAlert(true);

      // Remover os alertas após 3 segundos
      setTimeout(() => {
        setAlerts([]);
        setShowAlert(false);
      }, 3000);
    }
  }, [categories]);

  return (
    <div className="bg-main min-h-screen flex flex-col">
        <Navbar/>
      <div className="container mx-auto py-8 mt-10">
        <h1 className="text-3xl font-bold text-center mb-4">Orçamento</h1>
        <div className="flex flex-col lg:flex-row items-center space-y-2 lg:space-y-0 lg:space-x-4">
          <div className="border p-4 rounded-lg shadow-md w-full lg:w-2/3 mx-auto">
            {categories.map((category) => (
              <div key={category.id} className="flex justify-between">
                <div>
                  <strong>Nome da Categoria:</strong> {category.name}
                  <br />
                  <strong>Orçamento:</strong> R$ {category.budget.toFixed(2)}
                  <br />
                  <strong>Despesas:</strong> R$ {category.expenses.toFixed(2)}
                </div>
                <button
                  onClick={() => handleDeleteCategory(category.id)}
                  className="bg-red-500 text-red py-2 px-4 rounded-md hover:bg-red-700"
                >
                  Excluir
                </button>
              </div>
            ))}
          </div>
          <div className="border p-4 rounded-lg shadow-md w-full lg:w-1/3">
            <h2 className="text-xl font-bold text-center">Adicionar Despesa</h2>
            <div className="flex flex-col items-center space-y-2">
              <select
                value={newExpenseValues.categoryId}
                onChange={(e) =>
                  setNewExpenseValues({
                    ...newExpenseValues,
                    categoryId: parseInt(e.target.value),
                  })
                }
                className="border p-2 rounded-lg w-full"
              >
                <option value={0}>Selecione uma categoria</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
              <input
                type="number"
                value={newExpenseValues.newExpense}
                onChange={(e) =>
                  setNewExpenseValues({
                    ...newExpenseValues,
                    newExpense: parseFloat(e.target.value),
                  })
                }
                placeholder="Valor da despesa"
                className="border p-2 rounded-lg w-full"
              />
              <button
                onClick={handleAddExpense}
                className="bg-blue-navbar text-white py-2 px-4 rounded-md hover:bg-blue-700 w-full"
              >
                Adicionar Despesa
              </button>
            </div>
            <h2 className="text-xl font-bold text-center mt-4">Adicionar Categoria</h2>
            <div className="flex flex-col items-center space-y-2">
              <input
                type="text"
                placeholder="Nome da Categoria"
                value={newCategory.name}
                onChange={(e) =>
                  setNewCategory({ ...newCategory, name: e.target.value })
                }
                className="border p-2 rounded-lg w-full"
              />
              <input
                type="number"
                placeholder="Orçamento"
                value={newCategory.budget}
                onChange={(e) =>
                  setNewCategory({ ...newCategory, budget: parseFloat(e.target.value) })
                }
                className="border p-2 rounded-lg w-full"
              />
              <button
                onClick={handleAddCategory}
                className="bg-blue-navbar text-white py-2 px-4 rounded-md hover:bg-green-700 w-full"
              >
                Adicionar Categoria
              </button>
            </div>
          </div>
        </div>
      </div>
      {showAlert && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-cards text-red py-2 px-4 rounded-lg shadow-md">
          Você excedeu o limite de orçamento em "{alerts.join(', ')}"!
        </div>
      )}
       <div className="mt-auto">
            <Footer />
          </div>
    </div>
  );
};

export default Orcamento;