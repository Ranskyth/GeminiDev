"use client";

import {
  createInstituicaos,
  deleteInstituicaos,
  getAllInstituicaos,
} from "@/lib/api/generated";
import { Instituicao } from "@/lib/api/model";
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
  const [instituicao, setInstituicao] = useState<string>();
  const [listInstituicao, setListInstituicao] = useState<Instituicao[]>([]);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const loadInstituicao = async () => {
    const { data } = await getAllInstituicaos();
    setListInstituicao(data);
  };

  const handleCreateInstituicao = async (nome: string) => {
    await createInstituicaos({ nome });
    await loadInstituicao();
  };
  const handleDeleteInstituicao = async (instituicao: Instituicao) => {
    const { data } = await deleteInstituicaos(Number(instituicao.id));
    console.log(data);
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
            onClick={onOpen}
            className="h-10 rounded-[10px] flex items-center text-center px-5 font-bold bg-[#9B32EF] hover:bg-[#9B32EF]/80 active:bg-[#9b32ef]/60"
          >
            Adicionar Instituição
          </button>
        </div>

        <ul className="mt-5 flex gap-5 flex-col h-[70vh]  overflow-x-hidden">
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

      <Modal
        className="top-50 p-5 bg-[#000000] h-fit w-[75%]"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="mt-10">
                <h1>Adicionar Instituição</h1>
              </ModalHeader>
              <ModalBody className="flex w-full flex-wrap md:flex-nowrap gap-4">
                <input
                  onChange={(value) =>
                    setInstituicao(String(value.currentTarget.value))
                  }
                  className="max-w-xs h-10 pl-4  rounded-2xl border-1"
                  placeholder="Nome Da Instituição"
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
                  onClick={() => handleCreateInstituicao(String(instituicao))}
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
