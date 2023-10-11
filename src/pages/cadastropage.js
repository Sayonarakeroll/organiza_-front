import UsuarioService from '../services/UsuarioService'
import React, { useState } from 'react'
import Router from "next/router"
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const getStaticProps = async () => {

    const res = await fetch('http://localhost:3000/api/cadastros')
    const data = await res.json()

    return {
        props: {
            cadastros: data,
        }
    }
}


const cadastropage = props => {
    const [cpf, setCpf] = useState('')
    const [senha, setSenha] = useState('')
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [email2, setEmail2] = useState('')
    const [data, setData] = useState('')
    const [senha2, setSenha2] = useState('')

    const [alerta, setAlerta] = useState('')

    const saveCadastro = (e) => {
        e.preventDefault();
        if (senha == senha2 && email == email2 && cpf.length == 11 && senha != '') {
            var validarCpf = props.cadastros.filter(cadastro => cadastro.cpf == cpf).length
            var validarEmail = props.cadastros.filter(cadastro => cadastro.email == email).length

            if (validarCpf == 0 && validarEmail == 0) {
                var entradas = [];
                var saidas = [];
                var saldo = 0;
                const usuario = { cpf, senha, nome, email, data, entradas, saidas, saldo }

                UsuarioService.createUsuario(usuario).then((response) => {
                    console.log(response.data)
                    Router.push('/')
                }).catch(error => {
                    console.log(error)
                    setAlerta("Algo deu errado")
                })
            } else {
                setAlerta(<span className="text-red">Já existe cadastro com CPF e/ou e-mail registrado</span>)
            }
        } else if (senha == '') {
            setAlerta(<span className="text-red">É necessário uma senha</span>)
        } else if (cpf.length != 11) {
            setAlerta(<span className="text-red">É necessário um CPF válido</span>)
        } else {
            setAlerta(<span className="text-red">E-mails e/ou senhas não correspondem</span>)
        }

    }

    return (
        <section class="bg-main min-h-screen flex flex-col">
            <Navbar />
            <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0 md:flex-row">
                <div class="w-full bg-blue-800 rounded-lg md:mt-0 sm:max-w-md xl:p-0 dark:bg-blue-950 ">
                    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 class="text-xl font-bold leading-tight tracking-tight md:text-2xl dark:text-white">
                            Crie uma conta
                        </h1>
                        <form class="space-y-4 md:space-y-6" action="#">
                            <div>
                                <input type="string" name="nome" id="nome" value={nome} onChange={(e) => setNome(e.target.value)} class="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Nome completo" required="" />
                            </div>
                            <div>
                                <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} class="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="E-mail" required="" />
                            </div>
                            <div>
                                <input type="email" name="email2" id="email2" value={email2} onChange={(e) => setEmail2(e.target.value)} class="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Confirme seu e-mail" required="" />
                            </div>
                            <div className="flex justify-between space-x-2">
                                <input type="date" name="data" id="data" value={data} onChange={(e) => setData(e.target.value)} placeholder="Date" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                                <input type="cpf" name="cpf" id="cpf" value={cpf} onChange={(e) => setCpf(e.target.value)} placeholder="CPF" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                            </div>
                            <div className="flex justify-between space-x-2">
                                <input type="password" name="senha" id="senha" value={senha} onChange={(e) => setSenha(e.target.value)} placeholder="Senha" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                                <input type="password" name="senha2" id="senha2" value={senha2} onChange={(e) => setSenha2(e.target.value)} placeholder="Confirme sua senha" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                            </div>
                            <div className="flex justify-center">
                                <button type="submit" onClick={(e) => saveCadastro(e)} class=" w-full md:w-2/3 text-white bg-blue-navbar ring-2 ring-white hover:bg-blue-700 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Próximo</button>
                            </div>
                        </form>
                        <div className="flex justify-center">
                            <h1 className="w-full bg-red-600 text-white rounded-lg text-center sm:w-1/2 md:w-1/2">{alerta}</h1>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className="mt-auto">
            <Footer />
          </div>
        </section>
    )
}
export default cadastropage