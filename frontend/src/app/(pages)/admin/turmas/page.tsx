"use client";
import { turmaServices } from "@/services/turmaServices";

import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@heroui/modal";
import { useEffect, useState } from "react";

export type User = {
  nome: String;
  email: String;
  senha: String;
  github: String;
  turma: String;
};

export type TurmaList = {
  nome: string;
  user: User;
  id: 1;
};

export default function Turmas() {
  const [turma, setTurma] = useState<{}>({ turma: "" });
  const [listTurma, setListTurma] = useState<TurmaList[]>([]);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  useEffect(() => {
    (async () => {
      const data = await turmaServices.getTurmaAll();
      setListTurma(data);
    })();
  }, [turma]);
  return (
    <>
	<div className="mt-5 ml-15">

      <div className="flex">
        <input className="border-2 p-2 rounded-2xl w-300 h-10" type="text" />
        <button
          onClick={onOpen}
          className="h-10 rounded-[10px] flex items-center text-center px-5 font-bold bg-[#9B32EF] hover:bg-[#9B32EF]/80 active:bg-[#9b32ef]/60"
        >
          Adicionar Turma
        </button>
      </div>


        <ul className="mt-5 flex gap-5 flex-col">
          {listTurma.map((turma, index) => (
            <li className="bg-red-500 rounded-2xl p-5 uppercase" key={index}>{turma.nome}</li>
          ))}
        </ul>
	</div>

      <Modal
        className="top-50 w-280 absolute p-5 bg-[#313640]"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="mt-10">
                <h1>Adicionar Turma</h1>
              </ModalHeader>
              <ModalBody className="flex w-full flex-wrap md:flex-nowrap gap-4">
                <input
                  onChange={(value) =>
                    setTurma(String(value.currentTarget.value))
                  }
                  className="max-w-xs h-10 pl-4  rounded-2xl border-1"
                  placeholder="Nome Da Turma"
                />
              </ModalBody>
              <ModalFooter className="gap-4 mb-5">
                <button
                  className="h-10 rounded-[10px] flex items-center text-center px-5 font-bold bg-[#ef3232] hover:bg-[#ef3232]/80 active:bg-[#ef3232]/60"
                  onClick={onClose}
                >
                  Close
                </button>
                <button
                  className="h-10 rounded-[10px] flex items-center text-center px-5 font-bold bg-[#32c3ef] hover:bg-[#32c3ef]/80 active:bg-[#32c3ef]/60"
                  onClick={() => {turmaServices.createTurma(String(turma)), window.rel}}
                >
                  Action
                </button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
