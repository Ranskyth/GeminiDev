import Link from "next/link";

export const LoginForms = () => {
return (
	<div className="bg-[#222533] h-96 w-[320px] p-5 rounded-2xl">
			                  <h1 className="text-[32px]">Login</h1>
			<form className="flex flex-col gap-2 mt-12" action="">
				<p>Login</p>
				                      <input
					className="border-[#3f4150] px-5 h-12 border-1 rounded-2xl"
					type="email"
					placeholder="email@example.com"
				/>
				                          <p>Senha</p>
				<input
					className="border-[#3f4150] px-5 h-12 border-1 rounded-2xl"
					type="password"
				/>
				<div className="flex justify-between">
<div className="flex flex-col">
	<Link href={"/register"}>criar conta</Link>
		<Link href={"/reset-password"}>
				esqueci minha senha
						</Link>
					          </div>

					                                    <button className="bg-red-500 px-5 py-2 rounded-2xl">Entrar</button>
				</div>
			</form>
		</div>
	);
};
