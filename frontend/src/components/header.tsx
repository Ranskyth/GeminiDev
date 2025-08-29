import { getCookie } from "cookies-next";
import Link from "next/link";

export const Header = () => {
	const github_user = getCookie("github_user");
	return (
		<div className="bg-[#313640] py-8 justify-between px-5 flex gap-2 items-center w-full h-12">
			<div className="flex items-center gap-2">
				<img className="w-10 h-10" src="/logo-icon.png" alt="" />
				<h1>
					gemini.<span className="text-[#8E95A7]">dev</span>
				</h1>
			</div>
			<div className="flex items-center gap-2">
				<div className="bg-[#1B1E26] w-14 rounded-2xl h-8"></div>
				<div className="bg-[#1B1E26] w-14 rounded-2xl h-8"></div>
				<div className="bg-[#1B1E26] w-14 rounded-2xl h-8"></div>
				<div className="bg-[#1B1E26] w-14 rounded-2xl h-8"></div>
				<div className="bg-[#1B1E26] w-14 rounded-2xl h-8"></div>
				<div className="bg-[#1B1E26] w-14 rounded-2xl h-8"></div>
				<div className="overflow-hidden w-10 rounded-[25] h-10">
					<Link href={"/perfil"}>
						<img src={`https://github.com/${github_user}.png`} alt="" />
					</Link>
				</div>
				<button className="w-6 h-6">
					<img className="w-full h-full" src="/logout.svg" alt="" />
				</button>
			</div>
		</div>
	);
};
