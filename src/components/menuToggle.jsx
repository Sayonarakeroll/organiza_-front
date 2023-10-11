import React, { useState } from 'react';

function LeftAccordionMenu() {
  const [menu, setMenu] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  const items = [
    'Item 1',
    'Item 2',
    'Item 3',
    'Item 4',
    'Item 5',
  ];

  const menuToggle = (index) => {
    if (activeItem === index) {
      setActiveItem(null);
      setMenu(false);
    } else {
      setActiveItem(index);
      setMenu(true);
    }
  };

  return (
    <div className="h-screen w-1/4 bg-gray-800 p-4">
      <h1 className="text-white text-2xl font-semibold mb-4">Accordion Menu</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index} className="mb-2">
            <button
              onClick={() => menuToggle(index)}
              className="text-white hover:text-blue-500 focus:outline-none w-full text-left"
            >
              {item}
            </button>
            {menu && activeItem === index && (
              <div className="text-white pl-4">Conteúdo do {item}</div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LeftAccordionMenu;
