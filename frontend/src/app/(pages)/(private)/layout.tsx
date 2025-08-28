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
  });

  console.log(auth);

  if (!auth) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-2xl font-bold">Token de sessão invalido</h1>
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
