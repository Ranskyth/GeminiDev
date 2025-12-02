"use client";

import { CardMissao } from "@/components/card-missao";
import { getCookie } from "cookies-next";
import { getAllMissoes } from "@/lib/api/generated";
import type { Missoes } from "@/lib/api/model/missoes";
import { useEffect, useState } from "react";
import { useLanguage } from "@/context/language-context";

type MissionWithStatus = Missoes & { status: "pendente" | "concluida" | "atrasada" };

export default function Missoes() {
  const user = getCookie("name_user");
  const [missions, setMissions] = useState<MissionWithStatus[]>([]);
  const [activeTab, setActiveTab] = useState<"pendente" | "concluida" | "atrasada">("pendente");
  const [loading, setLoading] = useState(true);
  const { t } = useLanguage();

  const loadMissions = async () => {
    try {
      const { data } = await getAllMissoes();
      const missionsWithStatus: MissionWithStatus[] = data.map((mission) => ({
        ...mission,
        status: "pendente" as const
      }));
      setMissions(missionsWithStatus);
    } catch (error) {
      console.error("Error loading missions:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadMissions();
  }, []);

  const filteredMissions = missions.filter(mission => mission.status === activeTab);

  const tabCounts = {
    pendente: missions.filter(m => m.status === "pendente").length,
    concluida: missions.filter(m => m.status === "concluida").length,
    atrasada: missions.filter(m => m.status === "atrasada").length,
  };

  return (
    <div className="bg-[#1B1E26] flex-1 w-full h-screen px-20 py-5">
      <div>
        <div className="bg-[#5BBCE5] rounded-[0.80rem] flex justify-between px-5 py-6">
          <div className="flex flex-col w-69 gap-7 ">
            <h1 className="text-2xl font-bold">
              {t("Olá,")} <span className="text-[#A650F0]">{user}</span>
            </h1>
            <p>
              {t("Aqui você encontra as missões que precisa realizar. Uma missão pode ser uma tarefa ou um questionário")}
            </p>
          </div>
          <img
            width={200}
            src="https://geminidev.com.br/images/caldeirao.png"
            alt=""
          />
        </div>

        <div className="mt-5">
          <ul className="flex gap-5">
            <li>
              <button
                onClick={() => setActiveTab("pendente")}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  activeTab === "pendente"
                    ? "bg-[#9733EE] text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {t("Pendentes")} ({tabCounts.pendente})
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveTab("concluida")}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  activeTab === "concluida"
                    ? "bg-[#9733EE] text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {t("Concluídas")} ({tabCounts.concluida})
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveTab("atrasada")}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  activeTab === "atrasada"
                    ? "bg-[#9733EE] text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {t("Atrasadas")} ({tabCounts.atrasada})
              </button>
            </li>
          </ul>
        </div>

        <div className="mt-5">
          {loading ? (
            <div className="flex justify-center items-center py-20">
              <div className="text-white">{t("Carregando missões...")}</div>
            </div>
          ) : filteredMissions.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-400 text-lg">
                {activeTab === "pendente" ? t("Nenhuma missão pendente encontrada.") :
                 activeTab === "concluida" ? t("Nenhuma missão concluída encontrada.") :
                 t("Nenhuma missão atrasada encontrada.")}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 overflow-auto h-[50vh] lg:grid-cols-3 gap-5">
              {filteredMissions.map((mission) => (
                <CardMissao
                  key={mission.id}
                  missao={mission}
                  status={mission.status}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
