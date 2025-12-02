"use client";

import { InputCriar, ModalCriar, SelectCriar } from "@/components/modal-criar";
import {
  getAllTurma,
  createTurma,
  deleteTurma,
  getAllInstituicaos,
} from "@/lib/api/generated";

import { Instituicao, Turma } from "@/lib/api/model";

import { useEffect, useState } from "react";

export default function Turmas() {
  const [nome, setNome] = useState("");
  const [periodo, setPeriodo] = useState("");
  const [instituicao, setInstituicao] = useState<number>(0)
  const [listTurmas, setListTurmas] = useState<Turma[]>([]);
  const [listInstituicao, setListInstituicao] = useState<Instituicao[]>([])
  const [isModalOpen, setIsModalOpen] = useState(false);

  const loadTurmas = async () => {
    const { data } = await getAllTurma();
    setListTurmas(data);
  };

  const loadInstituicao = async () => {
    const { data } = await getAllInstituicaos()
    setListInstituicao(data)
  }

  const handleCreateTurma = async () => {
    if (!nome.trim() || !periodo.trim()) return;

    await createTurma({
      turma: nome,
      periodo: periodo,
      instituicao: instituicao
    });

    setNome("");
    setPeriodo("");
    setInstituicao(0);
    await loadTurmas();
  };

  const handleDeleteTurma = async (id: number) => {
    await deleteTurma(id);
    await loadTurmas();
  };

  useEffect(() => {
    loadTurmas();
    loadInstituicao()
  }, []);

  return (
    <>
      <div className="my-5 w-screen mx-15">
        <div className="flex gap-5">
          <input className="border-2 p-2 rounded-2xl w-[80%] h-10" type="text" />
          <button
            onClick={() => setIsModalOpen(true)}
            className="h-10 rounded-[10px] px-5 font-bold bg-[#9B32EF] hover:bg-[#9B32EF]/80"
          >
            Adicionar Turma
          </button>
        </div>

        <ul className="mt-5 flex gap-5 flex-col h-[80vh] overflow-x-hidden">
          {listTurmas.map((turma) => (
            <li
              className="bg-[#313640] flex rounded-2xl p-5 uppercase justify-between"
              key={turma.id}
            >
              <h1>{turma.nome} — {turma.periodo}</h1>
              <button
                onClick={() => handleDeleteTurma(turma.id!)}
                className="bg-[#1B1E26] p-2 rounded-2xl"
              >
                Remover
              </button>
            </li>
          ))}
        </ul>
      </div>

      <ModalCriar
        isOpen={isModalOpen}
        onOpenChange={setIsModalOpen}
        titulo="Adicionar Turma"
        onCriar={handleCreateTurma}
      >
        <InputCriar
          label="Nome da Turma"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Ex: 1º Ano A"
        />
        <InputCriar
          label="Período"
          value={periodo}
          onChange={(e) => setPeriodo(e.target.value)}
          placeholder="Ex: 2024/1"
        />
        <SelectCriar
          label="Instituição"
          options={listInstituicao.filter(i => i.nome).map(inst => ({ value: inst.id!, label: inst.nome! }))}
          value={instituicao}
          onChange={(e) => setInstituicao(Number(e.target.value))}
        />
      </ModalCriar>
    </>
  );
}
