"use client";

import { getCookie } from "cookies-next";

export default function Ranking() {
	const user = getCookie("nome_user")
	return (
		<div className="bg-[#1B1E26] flex-1 w-full h-screen px-20 py-5">
			<div>
				<div className="bg-[url('https://geminidev.com.br/images/bg_ranking.png')] bg-cover w-full h-64 bg-no-repeat bg-center rounded-[10px] grid grid-cols-5">
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
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
