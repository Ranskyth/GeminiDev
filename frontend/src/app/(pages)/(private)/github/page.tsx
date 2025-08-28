/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";

import { getCookie } from "cookies-next/client";

export default function Github() {
	const github_user = getCookie("github_user");
	console.log(github_user);
	return (
		<div className="bg-[#1B1E26] overflow-y-scroll flex-1 w-full h-screen px-20 py-5">
			<div>
				<div className="bg-[#fff] mb-15 flex justify-between h-64 rounded-4xl overflow-hidden w-full bg-cover bg-center">
					<div className="flex text-amber-800 p-5 flex-col gap-7">
						<h1>Olá, gabriel</h1>
						<p>chegou a hora de entrar na aventura do conhecimento</p>
					</div>
					<img
						className="h-full"
						src="https://i.pinimg.com/736x/77/93/02/779302cadbfbba6a9821477bf2da2306.jpg"
						alt=""
					/>
				</div>
				<h1 className="text-center mb-3 text-2xl font-bold">Status GitHub</h1>
				<div>
					<div className="flex justify-center">
						<img
							className="w-[450px]"
							src={`https://pixel-profile.vercel.app/api/github-stats?username=${github_user}`}
						/>
					</div>
					<div className="flex justify-center gap-5 mt-5 mb-3">
						<img
							height="160em"
							src={`https://github-readme-stats.vercel.app/api?username=${github_user}&show_icons=true&theme=tokyonight&count_private=true&hide_border=true`}
						/>
						<img
							height="160em"
							src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${github_user}&layout=compact&theme=tokyonight&hide_border=true&langs_count=8`}
						/>
					</div>
					<img
						className="m-auto"
						src={`http://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=${github_user}&theme=tokyonight`}
						alt=""
					/>
				</div>

				<div></div>
			</div>
		</div>
	);
}
