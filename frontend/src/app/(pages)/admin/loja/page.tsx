"use client";

import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@heroui/modal";

import { useEffect, useState } from "react";

export default function Loja() {
  const [lojaItens, setLojaItens] = useState<any[]>([]);
  const [itens, setItens] = useState<any[]>([]);

  const [itemSelecionado, setItemSelecionado] = useState<number | undefined>();
  const [preco, setPreco] = useState<number>(0);
  const [tipoMoeda, setTipoMoeda] = useState<string>("");

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const loadLoja = async () => {
    //const { data } = await getAllLojaItem();
    //setLojaItens(data);
  };

  const loadItens = async () => {
    //const { data } = await getAllItens();
    //setItens(data);
  };

  const handleCreate = async () => {
    if (!itemSelecionado || preco <= 0 || !tipoMoeda.trim()) return;

    //await createLojaItem({
    //  item: itemSelecionado,
    //  preco,
    //  tipoMoeda,
    //});

    setItemSelecionado(undefined);
    setPreco(0);
    setTipoMoeda("");

    await loadLoja();
    onOpenChange();
  };

  const handleDelete = async (id: number) => {
    //await deleteLojaItem(id);
    await loadLoja();
  };

  useEffect(() => {
    loadLoja();
    loadItens();
  }, []);

  return (
    <>
      <div className="my-5 w-screen mx-15">
        <div className="flex gap-5">
          <input
            className="border-2 p-2 rounded-2xl w-[80%] h-10"
            type="text"
            placeholder="Pesquisar item..."
          />

          <button
            onClick={onOpen}
            className="h-10 rounded-[10px] px-5 font-bold bg-[#9B32EF] hover:bg-[#9B32EF]/80"
          >
            Adicionar Item na Loja
          </button>
        </div>

        <ul className="mt-5 flex flex-col gap-5">
          {lojaItens.map((loja) => (
            <li
              key={loja.id}
              className="bg-[#313640] p-5 rounded-2xl flex justify-between items-center"
            >
              <div>
                <h1 className="font-bold uppercase">
                  {loja.item?.nome}
                </h1>
                <p>Preço: {loja.preco}</p>
                <p>Moeda: {loja.tipoMoeda}</p>
              </div>

              <button
                onClick={() => handleDelete(loja.id!)}
                className="bg-[#1B1E26] p-2 rounded-2xl"
              >
                Remover
              </button>
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
          <>
            <ModalHeader className="mt-10">
              <h1>Adicionar Item à Loja</h1>
            </ModalHeader>

            <ModalBody className="flex flex-col gap-4">
              <select
                value={itemSelecionado}
                onChange={(e) => setItemSelecionado(Number(e.target.value))}
                className="h-10 pl-4 rounded-2xl border"
              >
                <option value="">Selecione um item</option>
                {itens.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.nome}
                  </option>
                ))}
              </select>

              <input
                type="number"
                value={preco}
                onChange={(e) => setPreco(Number(e.target.value))}
                className="h-10 pl-4 rounded-2xl border"
                placeholder="Preço"
              />

              <input
                value={tipoMoeda}
                onChange={(e) => setTipoMoeda(e.target.value)}
                className="h-10 pl-4 rounded-2xl border"
                placeholder="Tipo da Moeda (ex: moedas, diamantes)"
              />
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
                onClick={handleCreate}
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
