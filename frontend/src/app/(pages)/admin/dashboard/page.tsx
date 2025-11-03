/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { BACKEND } from "@/config/config";
import { CardsAdmin } from "@/components/cards-admin";
import { useEffect, useState } from "react";
import { getCookie } from "cookies-next";

export default function AdminHome() {
  const [userqt, setUserqt] = useState<number>(0);
  const [turmaqt, setTurmaqt] = useState<number>(0);
  const [instituicaoqt, setInstituicaoqt] = useState<number>(0);
  useEffect(() => {
    (async () => {
      const token = getCookie("auth_geminidev");
      const qtAlunos = await fetch(`${BACKEND}/api/v1/user/qt`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const qtTurmas = await fetch(`${BACKEND}/api/v1/turma/qt`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const qtInstuicao = await fetch(`${BACKEND}/api/v1/turma/qt`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setUserqt(await qtAlunos.json());
      setTurmaqt(await qtTurmas.json());
      setInstituicaoqt(await qtInstuicao.json());
    })();
  }, []);

  console.log(userqt);
  return (
    <div className="flex flex-1 bg-[#1B1E26] flex-col gap-5">
      <h1 className="text-[#ffffff] text-3xl text-center my-5">
        Painel do Administrador
      </h1>
      <div className="grid w-full grid-cols-3 gap-5 px-12">
        <CardsAdmin
          description="Quantidade de Usuarios"
          subdescription={String(userqt)}
        />
        <CardsAdmin
          description="Quantidade de Turmas"
          subdescription={String(turmaqt)}
        />
        <CardsAdmin
          description="Quantidade de Instituições Cadastradas"
          subdescription={String(instituicaoqt)}
        />
      </div>
    </div>
  );
}
