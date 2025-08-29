"use client";

import { CardMissao } from "@/components/card-missao";

export default function Missoes() {
	return (
		<div className="bg-[#1B1E26] flex-1 w-full h-screen px-20 py-5">
			<div>
				<div className="bg-[#5BBCE5] rounded-[0.80rem] flex justify-between px-5">
					<div className="flex flex-col w-69 gap-7">
						<h1>
							Olá, <span className="text-2xl font-bold">gabriel</span>
						</h1>
						<p>
							Aqui você encontra as missões que precisa realizar. Uma missão
							pode ser uma tarefa ou um questionário
						</p>
					</div>
					<img
						width={200}
						src="https://geminidev.com.br/images/caldeirao.png"
						alt=""
					/>
				</div>
				<div>
					<ul className="flex gap-5 mt-5">
						<li>
							<button className="border-b-3 border-[#9733EE]">Pendentes</button>
						</li>
						<li>
							<button className="">Concluidas</button>
						</li>
						<li>
							<button className="">Atrasadas</button>
						</li>
					</ul>
				</div>
				<div className="grid mt-5 grid-flow-col grid-cols-3 gap-5">
					<CardMissao />
					<CardMissao />
				</div>
			</div>
		</div>
	);
}
