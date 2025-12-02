"use client";

import { getCookie } from "cookies-next";
import { useEffect, useState } from "react";
import { useLanguage } from "@/context/language-context";

interface LojaItem {
  id: number;
  item: {
    id: number;
    nome: string;
    descricao: string;
  };
  preco: number;
  tipoMoeda: string;
}

export default function Loja() {
  const user = getCookie("name_user");
  const [lojaItems, setLojaItems] = useState<LojaItem[]>([]);
  const [loading, setLoading] = useState(true);
  const { t } = useLanguage();

  useEffect(() => {
    const fetchLojaItems = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080'}/api/v1/loja-item/all`);
        if (response.ok) {
          const data = await response.json();
          setLojaItems(data);
        }
      } catch (error) {
        console.error('Error fetching store items:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchLojaItems();
  }, []);

  const handlePurchase = async (itemId: number) => {
    alert('Funcionalidade de compra será implementada');
  };

  return (
    <div className="bg-[#1B1E26] flex-1 w-full h-screen px-20 py-5">
      <div>
        <div className="bg-[url('https://geminidev.com.br/images/bg_loja.png')] bg-cover rounded-3xl w-full h-[320px] bg-center p-5 mb-8">
          <h1 className="text-2xl font-bold text-white">{t("Olá,")} <span className="text-[#A650F0]">{user}</span></h1>
          <p className="w-72 text-white mt-2">
            {t("Bem vindo a nossa loja. Aqui você encontra itens que irão te ajudar na sua jornada")}
          </p>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold text-white mb-6">{t("Itens Disponíveis")}</h2>

          {loading ? (
            <div className="flex justify-center items-center py-20">
              <div className="text-white">{t("Carregando itens da loja...")}</div>
            </div>
          ) : lojaItems.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-400 text-lg">{t("Nenhum item disponível na loja no momento.")}</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {lojaItems.map((lojaItem) => (
                <div key={lojaItem.id} className="bg-[#222533] rounded-xl p-6 shadow-lg">
                  <div className="text-center mb-4">
                    <img
                      className="w-16 h-16 mx-auto mb-3"
                      src="https://geminidev.com.br/images/assets/gem_blue.png"
                      alt={lojaItem.item.nome}
                    />
                    <h3 className="text-xl font-bold text-white">{lojaItem.item.nome}</h3>
                  </div>

                  <p className="text-gray-300 text-sm mb-4 text-center">
                    {lojaItem.item.descricao}
                  </p>

                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <span className="text-yellow-400 font-bold text-lg">{lojaItem.preco}</span>
                      <span className="text-yellow-400">{lojaItem.tipoMoeda}</span>
                    </div>
                    <button
                      onClick={() => handlePurchase(lojaItem.id)}
                      className="bg-[#9733EE] text-white px-4 py-2 rounded-lg hover:bg-[#7a29c4] transition-colors"
                    >
                      {t("Comprar")}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
