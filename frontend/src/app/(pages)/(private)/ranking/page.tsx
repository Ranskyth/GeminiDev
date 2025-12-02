"use client";

import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { getTurmas, getUser, getUserById } from "@/lib/api/generated";
import { User } from "@/lib/api/model";
import { getCookie } from "cookies-next";
import { getUserTokenDecode } from "@/lib/auth";
import { useEffect, useState } from "react";

export default function Ranking() {
  const user = getCookie("name_user");
  const [listRank, setListRank] = useState<User[]>();

  const fullRank =
    listRank
      ?.filter((rank) => rank.role === "USER")
      ?.sort((a, b) => (b.atributo?.xp ?? 0) - (a.atributo?.xp ?? 0)) ?? [];

  const topRank = fullRank.slice(0, 5);

  const userIndex = fullRank.findIndex((rank) => rank.nome === user);


  useEffect(() => {
    (async () => {
      try {
        const tokenData = getUserTokenDecode();
        const currentUserId = tokenData.sub as string;
        const { data: currentUser } = await getUserById({ id: parseInt(currentUserId) });
        const { data: allUsers } = await getUser();

        const filteredUsers = allUsers.filter(user =>
          user.turma?.id === currentUser.turma?.id
        );

        setListRank(filteredUsers);
      } catch (error) {
        console.error("Error fetching ranking data:", error);
        const { data } = await getUser();
        setListRank(data);
      }
    })();
  }, []);

  return (
    <div className="bg-[#1B1E26] flex-1 w-full h-screen px-20 py-5">
      <div>
        <div className="bg-[url('https://geminidev.com.br/images/bg_ranking.png')] overflow-hidden bg-cover w-full h-80 bg-no-repeat place-items-center bg-center rounded-[10px] grid grid-cols-5">
          <div className="flex flex-col items-center">
            <Tooltip>
              <TooltipTrigger asChild>
                <img
                  className="w-12 h-12 mt-20 rounded-full border-2 border-purple-400 shadow-lg"
                  src={`https://github.com/${topRank[4]?.github}.png`}
                  alt=""
                />
              </TooltipTrigger>
              <TooltipContent>
                <div className="text-center">
                  <p className="font-semibold">{topRank[4]?.nome}</p>
                  <p className="text-sm">{topRank[4]?.atributo?.xp} XP</p>
                </div>
              </TooltipContent>
            </Tooltip>
            <Badge className="bg-gradient-to-r from-purple-500 to-purple-600 text-white font-semibold mt-2">
              {topRank[4]?.atributo?.xp}
            </Badge>
            <div className="bg-gradient-to-t from-purple-600 to-purple-400 text-white text-xl font-bold text-center mt-2 h-36 w-12 rounded-lg shadow-lg flex items-start justify-center pt-2">
              5
            </div>
          </div>

          <div className="flex flex-col items-center">
            <Tooltip>
              <TooltipTrigger asChild>
                <img
                  className="w-12 h-12 mt-20 rounded-full border-2 border-amber-500 shadow-lg"
                  src={`https://github.com/${topRank[2]?.github}.png`}
                  alt=""
                />
              </TooltipTrigger>
              <TooltipContent>
                <div className="text-center">
                  <p className="font-semibold">{topRank[2]?.nome}</p>
                  <p className="text-sm">{topRank[2]?.atributo?.xp} XP</p>
                </div>
              </TooltipContent>
            </Tooltip>
            <Badge className="bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold mt-2">
              {topRank[2]?.atributo?.xp}
            </Badge>
            <div className="bg-gradient-to-t from-amber-600 to-amber-400 text-white text-xl font-bold text-center mt-2 h-44 w-12 rounded-lg shadow-lg flex items-start justify-center pt-2">
              3
            </div>
          </div>

          <div className="flex flex-col items-center">
            <Tooltip>
              <TooltipTrigger asChild>
                <img
                  className="w-16 h-16 mt-16 rounded-full border-4 border-yellow-400 shadow-xl"
                  src={`https://github.com/${topRank[0]?.github}.png`}
                  alt=""
                />
              </TooltipTrigger>
              <TooltipContent>
                <div className="text-center">
                  <p className="font-semibold">{topRank[0]?.nome}</p>
                  <p className="text-sm">{topRank[0]?.atributo?.xp} XP</p>
                </div>
              </TooltipContent>
            </Tooltip>
            <Badge className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white font-semibold mt-2">
              {topRank[0]?.atributo?.xp}
            </Badge>
            <div className="bg-gradient-to-t from-yellow-600 to-yellow-400 text-white text-2xl font-bold text-center mt-2 h-56 w-14 rounded-lg shadow-xl flex items-start justify-center pb-2">
              1
            </div>
          </div>

          <div className="flex flex-col items-center">
            <Tooltip>
              <TooltipTrigger asChild>
                <img
                  className="w-12 h-12 mt-20 rounded-full border-2 border-gray-400 shadow-lg"
                  src={`https://github.com/${topRank[1]?.github}.png`}
                  alt=""
                />
              </TooltipTrigger>
              <TooltipContent>
                <div className="text-center">
                  <p className="font-semibold">{topRank[1]?.nome}</p>
                  <p className="text-sm">{topRank[1]?.atributo?.xp} XP</p>
                </div>
              </TooltipContent>
            </Tooltip>
            <Badge className="bg-gradient-to-r from-gray-400 to-gray-500 text-white font-semibold mt-2">
              {topRank[1]?.atributo?.xp}
            </Badge>
            <div className="bg-gradient-to-t from-gray-500 to-gray-300 text-white text-xl font-bold text-center mt-2 h-52 w-12 rounded-lg shadow-lg flex items-start justify-center pt-2">
              2
            </div>
          </div>

          <div className="flex flex-col items-center">
            <Tooltip>
              <TooltipTrigger asChild>
                <img
                  className="w-12 h-12 mt-20 rounded-full border-2 border-blue-400 shadow-lg"
                  src={`https://github.com/${topRank[3]?.github}.png`}
                  alt=""
                />
              </TooltipTrigger>
              <TooltipContent>
                <div className="text-center">
                  <p className="font-semibold">{topRank[3]?.nome}</p>
                  <p className="text-sm">{topRank[3]?.atributo?.xp} XP</p>
                </div>
              </TooltipContent>
            </Tooltip>
            <Badge className="bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold mt-2">
              {topRank[3]?.atributo?.xp}
            </Badge>
            <div className="bg-gradient-to-t from-blue-600 to-blue-400 text-white text-xl font-bold text-center mt-2 h-40 w-12 rounded-lg shadow-lg flex items-start justify-center pt-2">
              4
            </div>
          </div>
        </div>
        <div className="flex justify-between px-5 mt-12 bg-[#1AAD8A] rounded-2xl m-3">
          <div className="px-5 py-2">
            <h1 className="text-[20px]">
              Parabéns <span className="text-2xl text-[#F3B800] font-bold">{user}</span>
            </h1>
            <p className="w-120 text-[17px]">
              🎉 Parabéns, você está em {userIndex + 1}, Lembre-se que
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
