"use client";

import { getCookie } from "cookies-next";

export default function Loja() {
	const user = getCookie("name_user")
	return (
		<div className="bg-[#1B1E26] flex-1 w-full h-screen px-20 py-5">
			<div>
				<div className="bg-[url('https://geminidev.com.br/images/bg_loja.png')] bg-cover rounded-3xl w-full h-[320px] bg-center p-5">
					<h1>Olá, {user}</h1>
					<p className="w-72">
						Bem vindo a nossa loja. Aqui você encontra itens que irão te ajudar
						na sua jornada
					</p>
				</div>
			</div>
		</div>
	);
}
