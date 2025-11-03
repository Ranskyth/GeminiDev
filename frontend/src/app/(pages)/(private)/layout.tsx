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
