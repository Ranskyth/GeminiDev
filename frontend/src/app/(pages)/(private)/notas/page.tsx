"use client";

import { getCookie } from "cookies-next";

export default function Notas() {
  const user = getCookie("name_user");
  return (
    <div className="bg-[#1B1E26] flex-1 w-full h-screen px-20 py-5">
      <div>
        <div className="bg-[url('https://geminidev.com.br/images/bg_grade.jpg')] h-64 bg-center rounded-3xl flex justify-between px-5">
          <div className="flex flex-col gap-7">
            <h1>
              Olá, <span>{user}</span>
            </h1>
            <p className="w-62">
              Aqui você pode acompanhar a sua nota na disciplina. A nota exibida
              é uma referência e não é a nota final da disciplina. A nota final
              será calculada ao final do semestre.
            </p>
          </div>
        </div>
        <div className="grid place-items-center p-10 bg-[#222533] mt-12 grid-cols-3">
          <div className="text-center flex gap-1 flex-col">
            <img
              className="w-12"
              src="https://geminidev.com.br/images/assets/gem_red.png"
              alt=""
            />
            <p>0</p>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div
                className="bg-purple-600 h-2.5 rounded-full dark:bg-purple-500"
                style={{ width: 40 }}
              ></div>
            </div>
            <p>0 / 100</p>
          </div>

          <div className="text-center flex gap-1 flex-col">
            <img
              className="w-12"
              src="https://geminidev.com.br/images/assets/gem_red.png"
              alt=""
            />
            <p>0</p>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div
                className="bg-purple-600 h-2.5 rounded-full dark:bg-purple-500"
                style={{ width: 40 }}
              ></div>
            </div>
            <p>0 / 100</p>
          </div>
          <div className="text-center flex gap-1 flex-col">
            <img
              className="w-12"
              src="https://geminidev.com.br/images/assets/gem_red.png"
              alt=""
            />
            <p>0</p>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div
                className="bg-purple-600 h-2.5 rounded-full dark:bg-purple-500"
                style={{ width: 40 }}
              ></div>
            </div>
            <p>0 / 100</p>
          </div>
        </div>
      </div>
    </div>
  );
}
