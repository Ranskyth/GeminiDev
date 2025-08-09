"use client";

export default function Profile() {
  return (
    <div className="bg-[#1B1E26] flex-1 w-full h-screen px-20 py-5">
      <div>
        <div className="bg-[#5BBCE5] rounded-3xl flex justify-between px-5">
          <div className="flex flex-col gap-7">
            <h1>Olá, gabriel</h1>
            <p>Aqui você encontra as missões que precisa realizar. Uma missão pode ser uma tarefa ou um questionário</p>
          </div>
          <img
            width={200}
            src="https://geminidev.com.br/images/caldeirao.png"
            alt=""
          />
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
