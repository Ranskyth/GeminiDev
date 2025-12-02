"use client";

import { InputCriar, ModalCriar, SelectCriar } from "@/components/modal-criar";
import { useEffect, useState } from "react";

export default function Loja() {
  const [lojaItens, setLojaItens] = useState<any[]>([]);
  const [itens, setItens] = useState<any[]>([]);

  const [itemSelecionado, setItemSelecionado] = useState<number | undefined>();
  const [preco, setPreco] = useState<number>(0);
  const [tipoMoeda, setTipoMoeda] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState(false);


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
            onClick={() => setIsModalOpen(true)}
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

      <ModalCriar
        isOpen={isModalOpen}
        onOpenChange={setIsModalOpen}
        titulo="Adicionar Item na Loja"
        onCriar={handleCreate}
      >
        <SelectCriar
          label="Selecionar Item"
          options={itens.map(item => ({ value: item.id, label: item.nome }))}
          value={itemSelecionado}
          onChange={(e) => setItemSelecionado(Number(e.target.value))}
        />
        <InputCriar
          label="Preço"
          type="number"
          value={preco}
          onChange={(e) => setPreco(Number(e.target.value))}
          placeholder="Digite o preço"
        />
        <InputCriar
          label="Tipo da Moeda"
          value={tipoMoeda}
          onChange={(e) => setTipoMoeda(e.target.value)}
          placeholder="Ex: moedas, diamantes"
        />
      </ModalCriar>
    </>
  );
}
