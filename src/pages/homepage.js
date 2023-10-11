import Navbar from "@/components/Navbar"; // Importa o componente Navbar de um caminho específico
import HChart from "@/components/HChart"; // Importa o componente HChart de um caminho específico
import React, { useState, useEffect } from 'react'; // Importa React, useState e useEffect do pacote 'react'
import UsuarioService from "../services/UsuarioService"; // Importa o serviço de usuário de um caminho específico
import { useRouter } from "next/router"; // Importa useRouter do pacote 'next/router'
import Footer from "@/components/Footer"; // Importa o componente Footer de um caminho específico

// Função assíncrona que busca os cadastros de uma API local
export const getStaticProps = async () => {
  const res = await fetch('http://localhost:3000/api/cadastros'); // Faz uma requisição para obter os cadastros
  const data = await res.json(); // Converte a resposta para JSON

  return {
    props: {
      cadastros: data, // Retorna os cadastros como props
    }
  };
}

// Componente funcional chamado Homepage
export default function Homepage(props) {
  const router = useRouter(); // Inicializa o hook useRouter para obter informações da rota
  const [cadastro, setCadastro] = useState({ nome: '', saldo: 0 }); // Inicializa o estado 'cadastro' como um objeto vazio

  // Efeito que é executado quando a rota está pronta
  useEffect(() => {
    if (router.isReady) {
      const cpf = router.query.cpf; // Obtém o CPF da rota
      const usuario = props.cadastros.find(cadastro => cadastro.cpf === cpf); // Encontra o usuário pelo CPF

      // Verifica se o usuário foi encontrado
      if (usuario) {
        setCadastro(usuario); // Atualiza o estado 'cadastro' com os dados do usuário
      }
    }
  }, [router.isReady, props.cadastros]); // Dependências do efeito

  // Retorna a interface do componente
  return (
    <div className="bg-main min-h-screen flex flex-col ">
      <Navbar /> {/* Renderiza o componente Navbar */}
      <div className="flex flex-col p-4 gap-4">
        <div className="lg:col-span-2 col-span-1">
          <div className="flex flex-col w-full pb-4 font-mukta justify-center items-center">
            <p className="text-3xl font-mukta"> Olá, {cadastro.nome}.</p> {/* Exibe saudação com o nome do cadastro */}
            <p className="text-xl font-mukta mt-4">Saldo atual: </p> {/* Exibe texto "Saldo atual:" */}
            <p className="text-3xl font-mukta">R${cadastro.saldo},00</p> {/* Exibe o saldo do cadastro */}
          </div>
          <div className="flex justify-center items-center ">
            <div className="">
              <HChart />    {/* Renderiza o componente HChart */}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-auto">
        <Footer />    {/* Renderiza o componente Footer */}
      </div>
    </div>
  );
}
