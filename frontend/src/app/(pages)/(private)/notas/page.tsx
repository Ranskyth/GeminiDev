"use client";

import { getCookie } from "cookies-next";

export default function Notas() {
  const user = getCookie("name_user");
  return (
    <div className="bg-[#1B1E26] flex-1 w-full h-screen px-20 py-5">
      <div>
        <div className="bg-[url('https://geminidev.com.br/images/bg_grade.jpg')] h-64 bg-center rounded-3xl flex justify-between px-5">
          <div className="flex mt-3 flex-col gap-7">
            <h1 className="text-2xl font-bold">
              Olá, <span className="text-[#A650F0]">{user}</span>
            </h1>
            <p className="w-62">
              Aqui você pode acompanhar a sua nota na disciplina. A nota exibida
              é uma referência e não é a nota final da disciplina. A nota final
              será calculada ao final do semestre.
            </p>
          </div>
        </div>
        <div className="bg-[#222533] mt-12 rounded-2xl p-10">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-white mb-2">Suas Notas</h2>
            <p className="text-gray-400">Sistema de avaliação em desenvolvimento</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center flex flex-col items-center gap-3">
              <img
                className="w-16 h-16"
                src="https://geminidev.com.br/images/assets/gem_red.png"
                alt="Nota 1"
              />
              <div className="text-white">
                <p className="text-3xl font-bold">0</p>
                <p className="text-sm text-gray-400">Avaliação 1</p>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-3">
                <div
                  className="bg-[#9733EE] h-3 rounded-full"
                  style={{ width: '0%' }}
                ></div>
              </div>
              <p className="text-gray-400 text-sm">0 / 100 pontos</p>
            </div>

            <div className="text-center flex flex-col items-center gap-3">
              <img
                className="w-16 h-16"
                src="https://geminidev.com.br/images/assets/gem_red.png"
                alt="Nota 2"
              />
              <div className="text-white">
                <p className="text-3xl font-bold">0</p>
                <p className="text-sm text-gray-400">Avaliação 2</p>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-3">
                <div
                  className="bg-[#9733EE] h-3 rounded-full"
                  style={{ width: '0%' }}
                ></div>
              </div>
              <p className="text-gray-400 text-sm">0 / 100 pontos</p>
            </div>

            <div className="text-center flex flex-col items-center gap-3">
              <img
                className="w-16 h-16"
                src="https://geminidev.com.br/images/assets/gem_red.png"
                alt="Nota 3"
              />
              <div className="text-white">
                <p className="text-3xl font-bold">0</p>
                <p className="text-sm text-gray-400">Avaliação Final</p>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-3">
                <div
                  className="bg-[#9733EE] h-3 rounded-full"
                  style={{ width: '0%' }}
                ></div>
              </div>
              <p className="text-gray-400 text-sm">0 / 100 pontos</p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-500 text-sm">
              As notas serão atualizadas automaticamente conforme você progride nas atividades.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
