"use client";

import { LoginForms } from "@/components/login";

export default function Login() {
	return (
		<div className="bg-[url('/login-bg.jpg')] justify-between p-15 flex bg-center bg-cover w-screen h-screen">
			<div className="items-center">
				<img
					src="logo-icon.png"
					className="w-9 object-cover mr-5 inline"
					alt=""
				/>
				<span className="font-extrabold text-[20px]">
					Gemini.<span className="text-[#afafaf]">Dev</span>
				</span>
			</div>
			<LoginForms />
		</div>
	);
}
