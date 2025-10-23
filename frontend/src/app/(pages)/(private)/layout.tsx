"use client";
import { Header } from "@/components/header";
import { SiderbarClient } from "@/components/siderbar";
import { AuthContext } from "@/context/auth-context";
import { getCookie } from "cookies-next";
import { useContext, useEffect } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { auth, verifyToken } = useContext(AuthContext);

  const token = getCookie("auth_geminidev");

  useEffect(() => {
    verifyToken(String(token));
    console.log(token);
  }, [auth]);

  console.log(auth);

  if (auth == undefined) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-spinner loading-xl"></span>
      </div>
    );
  }

  if (auth == false) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-2xl font-semibold">Usuario Não Autenticado</h1>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <div className="flex">
        <SiderbarClient />

        {children}
      </div>
    </div>
  );
}
