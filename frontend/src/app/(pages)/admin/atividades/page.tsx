"use client";

import { InputCriar, ModalCriar, SelectCriar } from "@/components/modal-criar";
import { ModalDetalhes } from "@/components/modal-detalhes";
import { Button } from "@/components/ui/button";
import { deleteSubmissao, getAllSubmissoes } from "@/lib/api/generated";
import { MissoesSubmissoes } from "@/lib/api/model";
import { useEffect, useState } from "react";
import { useLanguage } from "@/context/language-context";

export default function Loja() {
  const [lojaItens, setLojaItens] = useState<MissoesSubmissoes[]>([]);
  const [itens, setItens] = useState<any[]>([]);
  const { t } = useLanguage();

  const [itemSelecionado, setItemSelecionado] = useState<number | undefined>();
  const [preco, setPreco] = useState<number>(0);
  const [tipoMoeda, setTipoMoeda] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const loadAtividade = async () => {
    const { data } = await getAllSubmissoes();
    setLojaItens(data);
  };

  console.log(lojaItens);

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

    await loadAtividade();
  };

  const handleDelete = async (id: number) => {
    await deleteSubmissao(id);
    await loadAtividade();
  };

  useEffect(() => {
    loadAtividade();
  }, []);

  return (
    <>
      <div className="my-5 w-screen mx-15">
        <div className="flex gap-5">
          <input
            className="border-2 p-2 rounded-2xl w-[80%] h-10"
            type="text"
            placeholder={t("Pesquisar Atividade")}
          />
        </div>

        <ul className="mt-5 flex flex-col h-[75vh] overflow-auto gap-5">
          {lojaItens?.map((loja) => (
            <li
              key={loja.id}
              className="bg-[#313640] p-5 rounded-2xl flex justify-between items-center"
            >
              <div>
                <h1 className="font-bold uppercase">
                  {loja.user?.nome} - {loja.status}
                </h1>
              </div>
              <div className="flex gap-3">
            <Button variant="outline">{t("Aprovar")}</Button>
            <Button variant="outline">{t("Reprovar")}</Button>

                <ModalDetalhes title={t("Detalhes")} id={loja.id} status={loja.status} missao={{conteudo: String(loja.missao?.conteudo), nome:String(loja.missao?.nome), descricao: String(loja.missao?.descricao)}} />

              <Button
                onClick={() => handleDelete(loja.id!)}
                variant="outline"
              >
                {t("Remover")}
              </Button>
              </div>

            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
