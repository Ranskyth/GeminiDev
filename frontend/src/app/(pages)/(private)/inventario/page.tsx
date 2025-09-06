"use client";

import { getCookie, } from "cookies-next";

export default function Inventario() {
	const user = getCookie("name_user")
	return (
		<div className="bg-[#1B1E26] flex-1 w-full h-screen px-20 py-5">
			<div>
				<div className="bg-[url('/inventory.jpg')] rounded-2xl h-64 w-full bg-cover bg-center">
					<div className="flex flex-col gap-7">
						<h1>Olá, {user}</h1>
						<p className="w-76">
							Esse é o seu inventário. Aqui você encontra todos os itens que
							comprou na nossa loja. Para ativar um item comprado, você deve
							entrar em contato com o professor no momento adequado. Use os
							itens com sabedoria.
						</p>
					</div>
				</div>
				<div></div>
				<div></div>
			</div>
		</div>
	);
}
