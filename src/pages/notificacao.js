import React, { useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotificationPage = () => {
  const [notificationDate, setNotificationDate] = useState('');
  const [notificationDescription, setNotificationDescription] = useState('');
  const [dueDates, setDueDates] = useState([]);

  const formatDate = (date) => {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return new Date(date).toLocaleDateString(undefined, options);
  };

  const calculateDueDate = (date) => {
    if (!date) return null;

    const formattedDate = formatDate(date);

    return {
      date: formattedDate,
      description: notificationDescription,
    };
  };

  const handleAddNotification = () => {
    if (!notificationDate || !notificationDescription) {
      return;
    }

    const calculatedDueDate = calculateDueDate(notificationDate);
    setDueDates([...dueDates, calculatedDueDate]);
    setNotificationDate('');
    setNotificationDescription('');
  };

  return (
    <div className="bg-main min-h-screen flex flex-col ">
 <Navbar/>
    <div className="container mx-auto py-8 mt-10">
      <h1 className="text-3xl font-bold text-center mb-4">Notificações</h1>
      <div className="flex flex-col items-center space-y-4 items-center" >
        <input
          type="date"
          placeholder="Digite a data da notificação"
          value={notificationDate}
          onChange={(e) => setNotificationDate(e.target.value)}
          className="border p-2 rounded-lg"
        />
        <input
          type="text"
          placeholder="Digite a descrição da notificação"
          value={notificationDescription}
          onChange={(e) => setNotificationDescription(e.target.value)}
          className="border p-2 rounded-lg"
        />
        <button
          onClick={handleAddNotification}
          className="bg-blue-navbar text-white p-2 rounded-md hover:bg-blue-700"
        >
          Adicionar Notificação
        </button>
      </div>

      <h2 className="text-xl mt-4 font-bold text-center">Vencimentos:</h2>
      <ul className="mt-2">
        {dueDates.map((dueDate, index) => (
          <li
            key={index}
            className="border p-2 rounded-lg my-2 md:flex md:justify-between md:items-center"
          >
            <span className="md:w-1/2">
              <strong>Data:</strong> {dueDate.date}
            </span>
            <span className="md:w-1/2 text-right md:text-left">
              <strong>Descrição:</strong> {dueDate.description}
            </span>
          </li>
        ))}
      </ul>
    </div>
    <div className="mt-auto">
            <Footer /> </div>
    </div>
  );
};

export default NotificationPage;