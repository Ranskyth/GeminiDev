"use client";

import { getUser } from "@/lib/api/generated";
import { User } from "@/lib/api/model";
import { getCookie } from "cookies-next";
import { Filter } from "lucide-react";
import { useEffect, useState } from "react";

export default function Ranking() {
  const user = getCookie("nome_user");
  const [listRank, setListRank] = useState<User[]>();

  const topRank =
    listRank
      ?.sort((a, b) => (b.atributo?.xp ?? 0) - (a.atributo?.xp ?? 0))
      .slice(0, 5) ?? [];

  useEffect(() => {
    (async () => {
      const { data } = await getUser();
      setListRank(data);
    })();
  }, []);

  return (
    <div className="bg-[#1B1E26] flex-1 w-full h-screen px-20 py-5">
      <div>
        <div className="bg-[url('https://geminidev.com.br/images/bg_ranking.png')] overflow-hidden bg-cover w-full h-64 bg-no-repeat place-items-center bg-center rounded-[10px]  grid grid-cols-5">
          <div>
            <img className="w-10 h-10 mt-30 rounded-[50%]" src={`https://github.com/${topRank[4]?.github}.png`} alt="" />
            <h1>{topRank[4]?.nome}</h1>
            <div className="bg-red-500 mt-2 h-40 w-10 rounded-[5px]"></div>
          </div>
          <div>
            <img className="w-10 h-10 mt-20 rounded-[50%]" src={`https://github.com/${topRank[2]?.github}.png`} alt="" />
            <h1>{topRank[2]?.nome}</h1>
            <div className="bg-red-500 mt-2 h-40 w-10 rounded-[5px]"></div>
          </div>
          <div className="">
            <img className="w-10 h-10 rounded-[50%]" src={`https://github.com/${topRank[0]?.github}.png`} alt="" />
            <h1>{topRank[0]?.nome}</h1>
            <div className="bg-red-500 h-60 w-10 rounded-[5px]"></div>
          </div>
          <div>
            <img className="w-10 h-10 mt-20 rounded-[50%]" src={`https://github.com/${topRank[1]?.github}.png`} alt="" />
            <h1>{topRank[1]?.nome}</h1>
            <div className="bg-red-500 mt-2 h-40 w-10 rounded-[5px]"></div>
          </div>
          <div>
            <img className="w-10 h-10 mt-20 rounded-[50%]" src={`https://github.com/${topRank[3]?.github}.png`} alt="" />
            <h1 >{topRank[3]?.nome}</h1>
            <div className="bg-red-500 mt-2 h-40 w-10 rounded-[5px]"></div>
          </div>
        </div>
        <div className="flex justify-between px-5 mt-12 bg-[#1AAD8A] rounded-2xl m-3">
          <div>
            <h1>
              Parabéns <span>{user}</span>
            </h1>
            <p className="w-80">
              🎉 Parabéns, você está em primeiro lugar na turma Lembre-se que
              esse é apenas um parâmetro para você compreender o seu desempenho.
              Cada pessoa tem um rítmo diferente, busque fazer o seu melhor.
            </p>
          </div>
          <img
            className="w-46 h-46"
            src="https://geminidev.com.br/images/assets/trofeu.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
