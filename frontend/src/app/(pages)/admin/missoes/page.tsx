"use client";

import { InputCriar, ModalCriar, SelectCriar } from "@/components/modal-criar";
import {
  createMissoes,
  deleteMissoes,
  getAllMissoes,
  getAllTurma,
} from "@/lib/api/generated";
import { Missoes } from "@/lib/api/model/missoes";
import { Turma } from "@/lib/api/model/turma";

import { useEffect, useState } from "react";

export default function MissoesPage() {
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [moedasRecompensa, setMoedasRecompensa] = useState(0);
  const [diamantesRecompensa, setDiamantesRecompensa] = useState(0);
  const [esmeraldasRecompensa, setEsmeraldasRecompensa] = useState(0);
  const [rubysRecompensa, setRubysRecompensa] = useState(0);
  const [turmaId, setTurmaId] = useState(0);
  const [xp, setXp] = useState(0);
  const [listMissoes, setListMissoes] = useState<Missoes[]>([]);
  const [listTurmas, setListTurmas] = useState<Turma[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const loadMissoes = async () => {
    const { data } = await getAllMissoes();
    setListMissoes(data);
  };

  const loadTurmas = async () => {
    const { data } = await getAllTurma();
    setListTurmas(data);
  };

  const handleCreateMissao = async () => {
    await createMissoes({
      nome,
      descricao,
      xpRecompensa: xp,
      moedasRecompensa,
      diamantesRecompensa,
      esmeraldasRecompensa,
      rubysRecompensa,
      turmaId,
    });

    setNome("");
    setDescricao("");
    setMoedasRecompensa(0);
    setDiamantesRecompensa(0);
    setEsmeraldasRecompensa(0);
    setRubysRecompensa(0);
    setXp(0);
    setTurmaId(0);

    await loadMissoes();
  };

  const handleDeleteMissao = async (id: number) => {
    await deleteMissoes(id);
    await loadMissoes();
  };

  useEffect(() => {
    loadMissoes();
    loadTurmas();
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
            className="h-10 px-5 bg-[#9B32EF] rounded-[10px]"
          >
            Criar Missão
          </button>
        </div>

        <ul className="mt-5 flex gap-5 h-[80vh] overflow-auto flex-col">
          {listMissoes.map((m) => (
            <li
              className="bg-[#313640] p-5 rounded-2xl flex justify-between"
              key={m.id}
            >
              <h1>
                {m.nome} — {m.xpRecompensa} XP
              </h1>
              <button
                onClick={() => handleDeleteMissao(m.id!)}
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
        titulo="Criar Missão"
        onCriar={handleCreateMissao}
      >
        <InputCriar
          label="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Nome da Missão"
        />
        <InputCriar
          label="Descrição"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          placeholder="Descrição da Missão"
        />
        <div className="flex gap-5">
          <InputCriar
            label="XP"
            type="number"
            value={xp}
            onChange={(e) => setXp(Number(e.target.value))}
            placeholder="0"
          />
          <InputCriar
            label="Moedas"
            type="number"
            value={moedasRecompensa}
            onChange={(e) => setMoedasRecompensa(Number(e.target.value))}
            placeholder="0"
          />
          <InputCriar
            label="Diamantes"
            type="number"
            value={diamantesRecompensa}
            onChange={(e) => setDiamantesRecompensa(Number(e.target.value))}
            placeholder="0"
          />
          <InputCriar
            label="Rubys"
            type="number"
            value={rubysRecompensa}
            onChange={(e) => setRubysRecompensa(Number(e.target.value))}
            placeholder="0"
          />
          <InputCriar
            label="Esmeraldas"
            type="number"
            value={esmeraldasRecompensa}
            onChange={(e) => setEsmeraldasRecompensa(Number(e.target.value))}
            placeholder="0"
          />
        </div>
        <SelectCriar
          label="Turma (opcional)"
          options={listTurmas.filter(t => t.nome).map(turma => ({ value: turma.id!, label: turma.nome! }))}
          value={turmaId}
          onChange={(e) => setTurmaId(Number(e.target.value))}
        />
      </ModalCriar>
    </>
  );
}
