"use client";

import { InputCriar, ModalCriar } from "@/components/modal-criar";
import {
  createInstituicaos,
  deleteInstituicaos,
  getAllInstituicaos,
} from "@/lib/api/generated";
import { Instituicao } from "@/lib/api/model/instituicao";
import { useEffect, useState } from "react";

export default function InstituicaoPage() {
  const [nome, setNome] = useState<string>("");
  const [listInstituicao, setListInstituicao] = useState<Instituicao[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const loadInstituicao = async () => {
    const { data } = await getAllInstituicaos();
    setListInstituicao(data);
  };

  const handleCreateInstituicao = async () => {
    if (!nome.trim()) return;
    await createInstituicaos({ nome });
    setNome("");
    await loadInstituicao();
  };

  const handleDeleteInstituicao = async (instituicao: Instituicao) => {
    await deleteInstituicaos(Number(instituicao.id));
    loadInstituicao();
  };

  useEffect(() => {
    loadInstituicao();
  }, []);

  return (
    <>
      <div className="my-5 w-screen mx-15">
        <div className="flex gap-5">
          <input
            className="border-2 p-2 rounded-2xl w-[80%] h-10"
            type="text"
          />
          <button
            onClick={() => setIsModalOpen(true)}
            className="h-10 rounded-[10px] flex items-center text-center px-5 font-bold bg-[#9B32EF] hover:bg-[#9B32EF]/80 active:bg-[#9b32ef]/60"
          >
            Adicionar Instituição
          </button>
        </div>

        <ul className="mt-5 flex gap-5 flex-col h-[80vh] overflow-x-hidden">
          {listInstituicao?.map((instituicao, index) => (
            <li
              className="bg-[#313640] items-center flex rounded-2xl p-5 uppercase justify-between"
              key={index}
            >
              <h1>{instituicao.nome}</h1>
              <div className="flex gap-5">
                <button className="bg-[#1B1E26] p-2 rounded-2xl w-25">
                  Editar
                </button>
                <button
                  onClick={() => handleDeleteInstituicao(instituicao)}
                  className="bg-[#1B1E26] p-2 rounded-2xl w-25"
                >
                  Remover
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>

     <ModalCriar
       isOpen={isModalOpen}
       onOpenChange={setIsModalOpen}
       titulo="Criar Instituição"
       onCriar={handleCreateInstituicao}
     >
      <InputCriar
        label="Nome da Instituição"
        placeholder="Ex: Etec, Fatec, USP"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
     </ModalCriar>
    </>
  );
}
