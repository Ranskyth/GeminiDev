/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { BACKEND } from "@/config/config";
import { getAllInstituicaos, getAllTurma } from "@/lib/api/generated";
import { Instituicao, Turma } from "@/lib/api/model";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";

export default function Login() {
  const { register, handleSubmit } = useForm();
  const [turma, setTurma] = useState<Turma[]>([{} as Turma]);
  const [instituicao, setInstituicao] = useState<Instituicao[]>()
  const router = useRouter();

  useEffect(() => {
    (async () => {

      const {data: instituicao} = await getAllInstituicaos()
      setInstituicao(instituicao)
    })();
  }, []);

  const submit = (data: any) => {
    console.log(data);
    fetch(`${BACKEND}/api/v1/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(data),
    });
    toast("Usuario Cadastrado com Sucesso", { theme: "dark" });

    setTimeout(() => {
      router.back();
    }, 2000);
  };

  return (
    <div className="bg-[url('/login-bg.jpg')] justify-center p-15 flex bg-center bg-cover w-screen h-screen">
      <div className="items-center">
        <img
          src="logo-icon.png"
          className="w-9 object-cover mr-5 inline"
          alt=""
        />
      </div>
      <div className="bg-[#222533] h-fit w-[320px] p-5 rounded-2xl">
        <h1 className="text-[32px]">Login</h1>
        <form
          onSubmit={handleSubmit(submit)}
          className="flex flex-col gap-2 mt-12"
          action=""
        >
          <p>Nome</p>
          <input
            {...register("nome")}
            className="border-[#3f4150] px-5 h-12 border-1 rounded-2xl"
          />
          <p>Email</p>
          <input
            {...register("email")}
            className="border-[#3f4150] px-5 h-12 border-1 rounded-2xl"
            type="email"
            placeholder="email@example.com"
          />
          <p>Senha</p>
          <input
            {...register("senha")}
            className="border-[#3f4150] px-5 h-12 border-1 rounded-2xl"
            type="password"
          />
          <p>Github Nick Name</p>
          <input
            {...register("github")}
            className="border-[#3f4150] px-5 h-12 border-1 rounded-2xl"
          />
          <p>Diciplina</p>
          <select
            {...register("turma")}
            className="border-[#3f4150] border-1 px-5 h-12 rounded-2xl"
          >
            <option className="bg-[#222533]" value="">
              Selecione uma diciplinas
            </option>
            
            {instituicao?.map((instituicao) => 
                instituicao?.turma?.map((turma) => <option className="bg-[#222533]" key={turma.id} value={Number(turma.id)} >{instituicao.nome} - {turma.nome}</option>)
            )}
          </select>
          <div className="flex justify-between">
            <button type="submit" className="bg-red-500 px-5 py-2 rounded-2xl">
              Criar Conta
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}
