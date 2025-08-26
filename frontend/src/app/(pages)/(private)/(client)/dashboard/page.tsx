"use client";

export default function Dashboard() {
	return (
		<div className="bg-[#1B1E26] flex-1 w-full h-screen px-10 py-5">
			<div>
				<div className="bg-[#9A32EF] mb-10 rounded-[0.50rem] h-42 flex justify-between px-5">
					<div className="flex justify-center flex-col gap-3">
						<h1>Olá, <span className="text-[1.2rem] font-bold">gabriel</span></h1>
						<p>chegou a hora de entrar na aventura <p>no conecimento</p></p>
					</div>
					<img
						className="object-contain"
						src="https://geminidev.com.br/images/astronauta-tocando.png"
						alt=""
					/>
				</div>
				<h1 className="text-2xl">Meu Desempenho</h1>
				<div className="bg-[#222533] p-5  grid grid-cols-4 mt-8 rounded-[0.50rem] w-full h-[200px]">
					<div className="text-center content-center">

						<div className="w-full">
							<img className="w-12 m-auto" src="https://geminidev.com.br/images/assets/star.png" alt="" />
						</div>

						<h1>00</h1>
						<p>essa é a sua avaliação no sistema</p>
					</div>
					<div className="text-center content-center">
						<img className="w-12 m-auto" src="https://geminidev.com.br/images/assets/coin_copper.png" alt="" />
						<h1>0</h1>
						<p>use para comprar itens na loja</p>
					</div>
					<div className="text-center content-center">
						<img className="w-12 m-auto" src="https://geminidev.com.br/images/assets/shield.png" alt="" />
						<h1>0</h1>
						<p>0 pts para o próximo level</p>
					</div>
					<div className="text-center content-center">
						<img className="w-12 m-auto" src="https://geminidev.com.br/images/assets/badge.png" alt="" />
						<h1>0</h1>
						<p>🎉 Parabéns, você está em primeiro lugar na turma</p>
					</div>
				</div>
				<h1 className="mt-10 text-2xl mb-10">Missão</h1>
				<div className="flex gap-5">
					<div className="w-full h-32 rounded-2xl border-dashed border">

					</div>
					<div className="w-full flex justify-center items-center gap-3 h-32 rounded-2xl border-dashed border">
						<h1>Passe de nível para desbloquear missões</h1>
						<img className="w-12 h-12" src="https://geminidev.com.br/images/assets/lock.png" alt="" />
					</div>
				</div>
			</div>
		</div>
	);
}
