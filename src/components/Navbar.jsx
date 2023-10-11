import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineMenu, AiOutlineClose, AiOutlineInstagram, AiOutlineTwitter, AiOutlineFacebook } from 'react-icons/ai';

const DenseAppBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-primary h-24 shadow-xl font-poppins bg-blue-navbar">
      <div className="container mx-auto flex justify-between items-center h-full px-4 2x1:px-16 text-black">
        <Link href="/homepage">
          <div className="cursor-pointer ml-4">
            <Image src="/Logo.png" alt="Logo" width={200} height={40} />
          </div>
        </Link>
        <div className="hidden sm:flex ">
                    <ul className="hidden sm:flex text-white" >
                        <Link href='/'>
                            <li className="ml-10 uppercase hover:border-b text-lg">Home</li>
                        </Link>
                        <Link href='/receitas-despesas'>
                            <li className="ml-10 uppercase hover:border-b text-lg">Receitas e Despesas</li>
                        </Link>
                        <Link href='/notificacao'>
                            <li className="ml-10 uppercase hover:border-b text-lg">Notificações</li>
                        </Link>
                        <Link href='/investimentos'>
                            <li className="ml-10 uppercase hover:border-b text-lg">Investimento</li>
                        </Link>
                        <Link href='/orcamento'>
                            <li className="ml-10 uppercase hover:border-b text-lg">Orçamento</li>
                        </Link>
                    </ul>
                </div>
                <div onClick={handleNav} className="sm:hidden cursor-pointer pl-24 text-white">
                    <AiOutlineMenu size={25} />
                </div>
            </div>
            <div className={
                menuOpen
                    ? 'fixed left-0 top-0 w-[100vw] h-[55%] sm:hidden bg-[#D9D9D9] p-10 ease-in duration-500 text-[#000000]'
                    : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
            }
            >
                <div className="flex w-full items-center justify-end">
                    <div onClick={handleNav} className="cursor-pointer text-black">
                        <AiOutlineClose size={25} />
                    </div>
                </div>
                <div className="flex-col py-4 text-black">
                    <ul>
                    <img className="w-30 h-8 mr-2 ml-0" src="/logobgwhite.png" alt="logo" />
                        <Link href='/homepage'>
                            <li
                                onClick={() => setMenuOpen(false)}
                                className="py-4 cursor-pointer"
                            >
                                Home
                            </li>
                        </Link>
                        <Link href='/receitas-despesas'>
                            <li
                                onClick={() => setMenuOpen(false)}
                                className="py-4 cursor-pointer"
                            >
                                Receitas e Despesas
                            </li>
                        </Link>
                        <Link href='/notificacao'>
                            <li
                                onClick={() => setMenuOpen(false)}
                                className="py-4 cursor-pointer"
                            >
                                Notificações
                            </li>
                        </Link>
                           <Link href='/investimentos'>
                            <li
                                onClick={() => setMenuOpen(false)}
                                className="py-4 cursor-pointer"
                            >
                                Investimentos
                            </li>
                        </Link>
                        <Link href='/orcamento'>
                            <li
                                onClick={() => setMenuOpen(false)}
                                className="py-4 cursor-pointer"
                            >
                                Orçamento
                            </li>
                        </Link>
                    </ul>
                </div>
                </div>
    </nav>
  );
  
};

export default DenseAppBar;
 { /*  
        <div className={` ${menuOpen ? 'block' : 'hidden'}`}>
          <ul className="flex space-x-10 uppercase text-sm">
            <Link href="/">
              <li onClick={() => setMenuOpen(false)} className="hover:border-b cursor-pointer">
                Home
              </li>
            </Link>
            <Link href="/despesas">
              <li onClick={() => setMenuOpen(false)} className="hover:border-b cursor-pointer">
                Despesas
              </li>
            </Link>
            <Link href="/configuracao">
              <li onClick={() => setMenuOpen(false)} className="hover:border-b cursor-pointer">
                Configuração
              </li>
            </Link>
          </ul>
        </div>
        <div onClick={handleNav} className="sm:hidden cursor-pointer">
          <AiOutlineMenu size={25} />
        </div>*/}