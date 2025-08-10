/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { CardsAdmin } from "@/components/cards-admin";
import { useEffect, useState } from "react";

export default function AdminHome() {
  const [userqt, setUserqt] = useState<number>(0)
  const [turmaqt, setTurmaqt] = useState<number>(0)
  useEffect(() => {
    (async() => {
      const data = await fetch("http://localhost:3333/api/v1/user/qt", {method:"GET" ,headers:{"Authorization":"Basic dXNlcjo5MTk4MDYzMy05ZjI0LTQ1ZjYtOWVlZS02OTI2YTdiYTIwMDI="}})
      const data2 = await fetch("http://localhost:3333/api/v1/turmas/qt", {method:"GET" ,headers:{"Authorization":"Basic dXNlcjo5MTk4MDYzMy05ZjI0LTQ1ZjYtOWVlZS02OTI2YTdiYTIwMDI="}})
    
      const json = await data.json()
      const json2 = await data2.json()
      
      setUserqt(json)
      setTurmaqt(json2)
    })()



  },[])
  
  console.log(userqt)
  return (
    <div className="flex flex-1 bg-[#1B1E26] flex-col gap-5">
      <h1 className="text-[#ffffff] text-3xl text-center my-5">Painel do Administrador</h1>
      <div className="grid w-full grid-cols-4 gap-5 px-12">
        <CardsAdmin description="Quantidade de Usuarios" subdescription={String(userqt)}/>
        <CardsAdmin description="Quantidade de Turmas" subdescription={String(turmaqt)}/>
        <CardsAdmin/>
        <CardsAdmin/>
      </div>
    </div>
  );
}
