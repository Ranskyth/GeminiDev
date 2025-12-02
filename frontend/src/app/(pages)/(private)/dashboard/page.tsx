"use client";

import { CardMissao } from "@/components/card-missao";
import { CardVazio } from "@/components/card-vazio";
import { getAllMissoes, getByIdAtributos, getUserById } from "@/lib/api/generated";

import { getUserCookie, getUserTokenDecode } from "@/lib/auth";

import { useEffect, useState } from "react";
import type { Missoes } from "@/lib/api/model/missoes";
import { Atributo } from "@/lib/api/model/atributo";
import { useLanguage } from "@/context/language-context";

type MissionWithStatus = Missoes & { status: "pendente" | "concluida" | "atrasada" };

export default function Dashboard() {
  const [atributos, setAtributos] = useState<Atributo>()
  const [missions, setMissions] = useState<MissionWithStatus[]>([])
  const { t } = useLanguage()

  const user = getUserTokenDecode()
  const { name } = getUserCookie()

  useEffect(() => {
    (async () => {
      const {data: userById} = await getUserById({id: Number(user.sub)})

      const {data: atributos} = await getByIdAtributos(Number(userById.atributo?.id))
      setAtributos(atributos)

      const { data: missionsData } = await getAllMissoes()

      let submissions = []
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080'}/api/v1/missoes-submissoes/user/${user.sub}`)
        if (response.ok) {
          submissions = await response.json()
        }
      } catch (error) {
        console.error('Error fetching mission submissions:', error)
      }

      const missionsWithStatus: MissionWithStatus[] = missionsData.slice(0, 2).map((mission) => {
        const submission = submissions.find((s: any) => s.missao?.id === mission.id)
        let status: "pendente" | "concluida" | "atrasada" = "pendente"

        if (submission) {
          if (submission.status === "APROVADO") {
            status = "concluida"
          } else if (submission.status === "PENDENTE") {
            status = "pendente"
          } else if (submission.status === "REPROVADO" || submission.status === "ATRASADO") {
            status = "atrasada"
          }
        }

        return {
          ...mission,
          status
        }
      })
      setMissions(missionsWithStatus)
    })()
  },[])
  return (
    <div className="bg-[#1B1E26] flex-1 w-full h-screen px-10 py-5">
      <div>
        <div className="bg-[#9A32EF] mb-5 rounded-[0.50rem] h-42 flex justify-between px-5">
          <div className="flex justify-center flex-col gap-3">
            <h1>
              {t("Olá,")} <span className="text-[1.2rem] font-bold">{name}</span>
            </h1>
            <p>
              {t("chegou a hora de entrar na aventura")} <span>{t("no conecimento")}</span>
            </p>
          </div>
          <img
            className="object-contain"
            src="https://geminidev.com.br/images/astronauta-tocando.png"
            alt=""
          />
        </div>
        <h1 className="text-2xl">{t("Meu Desempenho")}</h1>
        <div className="bg-[#222533] p-5 grid grid-cols-4 mt-3 rounded-[0.50rem] w-full h-[200px]">
          <div className="text-center content-center">
            <div className="w-full">
              <img
                className="w-12 m-auto"
                src="https://geminidev.com.br/images/assets/star.png"
                alt=""
              />
            </div>

            <h1>{atributos?.xp}</h1>
            <p>{t("essa é a sua avaliação no sistema")}</p>
          </div>
          <div className="text-center content-center">
            <img
              className="w-12 m-auto"
              src="https://geminidev.com.br/images/assets/coin_copper.png"
              alt=""
            />
            <h1>{atributos?.moedas}</h1>
            <p>{t("use para comprar itens na loja")}</p>
          </div>
          <div className="text-center content-center">
            <img
              className="w-12 m-auto"
              src="https://geminidev.com.br/images/assets/shield.png"
              alt=""
            />
            <h1>0</h1>
            <p>0 {t("pts para o próximo level")}</p>
          </div>
          <div className="text-center content-center">
            <img
              className="w-12 m-auto"
              src="https://geminidev.com.br/images/assets/badge.png"
              alt=""
            />
            <h1>0</h1>
            <p>🎉 {t("Parabéns, você está em primeiro lugar na turma")}</p>
          </div>
        </div>
        <h1 className="mt-5 text-2xl mb-3">{t("Missões")}</h1>
        <div className="grid grid-cols-2 gap-5">
          {missions.length > 0 ? (
            missions.map((mission) => (
              <CardMissao key={mission.id} missao={mission} status={mission.status} />
            ))
          ) : (
            <>
              <CardVazio />
              <CardVazio />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
