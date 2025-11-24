"use client";

import {
  createMissoes,
  deleteMissoes,
  findAlMissoes,
} from "@/lib/api/generated";

import { Missoes } from "@/lib/api/model";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@heroui/modal";

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
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const loadMissoes = async () => {
    const { data } = await findAlMissoes();
    setListMissoes(data);
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
    setXp(0);

    await loadMissoes();
    onOpenChange();
  };

  const handleDeleteMissao = async (id: number) => {
    await deleteMissoes(id);
    await loadMissoes();
  };

  useEffect(() => {
    loadMissoes();
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
            onClick={onOpen}
            className="h-10 px-5 bg-[#9B32EF] rounded-[10px]"
          >
            Criar Missão
          </button>
        </div>

        <ul className="mt-5 flex gap-5 flex-col">
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

      <Modal
        className="top-40 p-5 bg-[#000000] h-fit w-[75%]"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          <>
            <ModalHeader className="mt-10">Criar Missão</ModalHeader>
            <ModalBody className="flex flex-col gap-4">
              <input
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                className="h-10 pl-4 rounded-2xl border-1"
                placeholder="Nome"
              />
              <input
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
                className="h-10 pl-4 rounded-2xl border-1"
                placeholder="Descrição"
              />
              <div className="flex gap-5">
                <div className="flex-1">
                  <label className="block" htmlFor="">
                    Moedas 
                  </label>
                  <input
                    value={xp}
                    type="number"
                    onChange={(e) => setXp(Number(e.target.value))}
                    className="h-10 w-full pl-4 rounded-[10px] border-1"
                    placeholder="XP"
                  />
                </div>

                <div className="flex-1">
                  <label className="block" htmlFor="">
                    Diamantes
                  </label>
                  <input
                    value={xp}
                    type="number"
                    onChange={(e) => setXp(Number(e.target.value))}
                    className="h-10 w-full pl-4 rounded-[10px] border-1"
                    placeholder="XP"
                  />
                </div>
                <div className="flex-1">
                  <label className="block" htmlFor="">
                    Rubys
                  </label>
                  <input
                    value={xp}
                    type="number"
                    onChange={(e) => setXp(Number(e.target.value))}
                    className="h-10 w-full pl-4 rounded-[10px] border-1"
                    placeholder="XP"
                  />
                </div>
                <div className="flex-1">
                  <label className="block" htmlFor="">
                    Esmeraldas
                  </label>
                  <input
                    value={xp}
                    type="number"
                    onChange={(e) => setXp(Number(e.target.value))}
                    className="h-10 w-full pl-4 rounded-[10px] border-1"
                    placeholder="XP"
                  />
                </div>
              </div>
              <select className="mb-5 border-2 rounded-2xl p-5" name="" id="">
                <option value="">Nenhum</option>
              </select>
            </ModalBody>

            <ModalFooter className="gap-4 mb-5">
              <button
                className="h-10 px-5 bg-[#ef3232] rounded-[10px]"
                onClick={onOpenChange}
              >
                Cancelar
              </button>
              <button
                className="h-10 px-5 bg-[#32c3ef] rounded-[10px]"
                onClick={handleCreateMissao}
              >
                Criar
              </button>
            </ModalFooter>
          </>
        </ModalContent>
      </Modal>
    </>
  );
}
