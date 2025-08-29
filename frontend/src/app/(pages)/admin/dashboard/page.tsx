/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { BACKEND } from "@/config/config";
import { CardsAdmin } from "@/components/cards-admin";
import { useEffect, useState } from "react";
import { getCookie } from "cookies-next";

export default function AdminHome() {
	const [userqt, setUserqt] = useState<number>(0);
	const [turmaqt, setTurmaqt] = useState<number>(0);
	useEffect(() => {
		(async () => {
			const token = getCookie("auth_geminidev");
			const data = await fetch(`${BACKEND}/api/v1/user/qt`, {
				method: "GET",
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});
			const data2 = await fetch(`${BACKEND}/api/v1/turma/qt`, {
				method: "GET",
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});

			const json = await data.json();
			const json2 = await data2.json();

			setUserqt(json);
			setTurmaqt(json2);
		})();
	}, []);

	console.log(userqt);
	return (
		<div className="flex flex-1 bg-[#1B1E26] flex-col gap-5">
			<h1 className="text-[#ffffff] text-3xl text-center my-5">
				Painel do Administrador
			</h1>
			<div className="grid w-full grid-cols-4 gap-5 px-12">
				<CardsAdmin
					description="Quantidade de Usuarios"
					subdescription={String(userqt)}
				/>
				<CardsAdmin
					description="Quantidade de Turmas"
					subdescription={String(turmaqt)}
				/>
				<CardsAdmin />
				<CardsAdmin />
			</div>
		</div>
	);
}
