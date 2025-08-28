/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { BACKEND } from "@/config/config";
import { AuthContext } from "@/context/auth-context";
import { getCookie, setCookie } from "cookies-next";
import { jwtDecode } from "jwt-decode";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";

interface UserToken{
  email:string,
  role:string,
}

export const LoginForms = () => {
  
  const router = useRouter();
  const {verifyToken} = useContext(AuthContext)
  const { register, handleSubmit } = useForm();

  const handleLogin = async (data: any) => {
    try {
      const res = await fetch(`${BACKEND}/api/v1/auth/login`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      });
      const resjson = await res.json();

      if (!res.ok) {
        return toast("Senha ou Email Invalido");
      }
      setCookie("auth_geminidev", resjson.token);
      setCookie("github_user", resjson.github);
      const cookie = await getCookie("auth_geminidev");

      verifyToken(String(cookie))
      
    } catch (err) {
      console.log(err);
      toast("Error...");
    }
  };
  return (
    <div className="bg-[#222533] h-96 w-[320px] p-5 rounded-2xl">
      <h1 className="text-[32px]">Login</h1>
      <form
        className="flex flex-col gap-2 mt-12"
        onSubmit={handleSubmit(handleLogin)}
      >
        <p>Login</p>
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
        <div className="flex justify-between">
          <div className="flex flex-col">
            <Link href={"/register"}>criar conta</Link>
            <Link href={"/reset-password"}>esqueci minha senha</Link>
          </div>

          <button className="bg-red-500 px-5 py-2 rounded-2xl">Entrar</button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};
