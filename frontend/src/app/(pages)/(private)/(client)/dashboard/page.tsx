"use client";

export default function Dashboard() {
	return (
		<div className="bg-[#1B1E26] flex-1 w-full h-screen px-20 py-5">
			<div>
				<div className="bg-[#9A32EF] mb-10 rounded-3xl flex justify-between px-5">
					<div className="flex flex-col gap-7">
						<h1>Olá, gabriel</h1>
						<p>chegou a hora de entrar na aventura do conhecimento</p>
					</div>
					<img
						width={200}
						src="https://geminidev.com.br/images/astronauta-tocando.png"
						alt=""
					/>
				</div>
				<h1>Meu Desempenho</h1>
				<div className="bg-[#222533] mt-8 rounded-2xl w-full h-[150px]"></div>
				<div></div>
			</div>
		</div>
	);
}
