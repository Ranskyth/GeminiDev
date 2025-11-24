"use client";

import {
  getAllTurma,
  createTurma,
  deleteTurma,
  getAllInstituicaos,
} from "@/lib/api/generated";

import { Instituicao, Turma } from "@/lib/api/model";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@heroui/modal";

import { useEffect, useState } from "react";

export default function Turmas() {
  const [nome, setNome] = useState("");
  const [periodo, setPeriodo] = useState("");
  const [instituicao, setInstituicao] = useState<number>(0)
  const [listTurmas, setListTurmas] = useState<Turma[]>([]);
  const [listInstituicao, setListInstituicao] = useState<Instituicao[]>([])
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

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
    await loadTurmas();
    onOpenChange();
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
            onClick={onOpen}
            className="h-10 rounded-[10px] px-5 font-bold bg-[#9B32EF] hover:bg-[#9B32EF]/80"
          >
            Adicionar Turma
          </button>
        </div>

        <ul className="mt-5 flex gap-5 flex-col h-[70vh] overflow-x-hidden">
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

      <Modal className="top-50 p-5 bg-[#000000] h-fit w-[75%]" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          <>
            <ModalHeader className="mt-10">Adicionar Turma</ModalHeader>
            <ModalBody className="flex flex-col gap-4">
              <input
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                className="h-10 pl-4 rounded-2xl border-1"
                placeholder="Nome da Turma"
              />
              <input
                value={periodo}
                onChange={(e) => setPeriodo(e.target.value)}
                className="h-10 pl-4 rounded-2xl border-1"
                placeholder="Período"
              />
              <select className="mb-5 p-4 border-2 rounded-2xl" onChange={(e) => setInstituicao(Number(e.target.value))} name="" id="">
                <option className="bg-[#141414]" value="">Nenhuma</option>
                {listInstituicao.map((instituicao) => <option key={instituicao.id} value={instituicao.id} className="bg-[#141414]">{instituicao.nome}</option>)}
              </select>
            </ModalBody>

            <ModalFooter className="gap-4 mb-5">
              <button className="h-10 px-5 bg-[#ef3232] rounded-[10px]" onClick={onOpenChange}>
                Cancelar
              </button>
              <button className="h-10 px-5 bg-[#32c3ef] rounded-[10px]" onClick={handleCreateTurma}>
                Criar
              </button>
            </ModalFooter>
          </>
        </ModalContent>
      </Modal>
    </>
  );
}
