"use client";

import { getCookie } from "cookies-next";
import { getUserTokenDecode } from "@/lib/auth";
import { useEffect, useState } from "react";
import { useLanguage } from "@/context/language-context";

interface InventarioItem {
  id: number;
  item: {
    id: number;
    nome: string;
    descricao: string;
  };
  quantidade: number;
  inventario: {
    id: number;
    user: {
      id: number;
    };
  };
}

export default function Inventario() {
  const user = getCookie("name_user");
  const userToken = getUserTokenDecode();
  const [inventarioItems, setInventarioItems] = useState<InventarioItem[]>([]);
  const [loading, setLoading] = useState(true);
  const { t } = useLanguage();

  useEffect(() => {
    const fetchInventarioItems = async () => {
      if (!userToken?.sub) return;

      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL }/api/v1/inventario-item/user/${userToken.sub}`);
        if (response.ok) {
          const data = await response.json();
          setInventarioItems(data);
        }
      } catch (error) {
        console.error('Error fetching inventory items:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchInventarioItems();
  }, [userToken?.sub]);

  return (
    <div className="bg-[#1B1E26] flex-1 w-full h-screen px-20 py-5">
      <div>
        <div className="bg-[url('/inventory.jpg')] rounded-2xl h-64 w-full bg-cover bg-center p-5 mb-8">
          <div className="flex flex-col gap-7">
            <h1 className="text-2xl font-bold text-white">{t("Olá,")} <span className="text-[#ddff00]">{user}</span></h1>
            <p className="w-76 text-white">
              {t("Esse é o seu inventário. Aqui você encontra todos os itens que comprou na nossa loja. Para ativar um item comprado, você deve entrar em contato com o professor no momento adequado. Use os itens com sabedoria.")}
            </p>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold text-white mb-6">{t("Seus Itens")}</h2>

          {loading ? (
            <div className="flex justify-center items-center py-20">
              <div className="text-white">{t("Carregando inventário...")}</div>
            </div>
          ) : inventarioItems.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-400 text-lg">{t("Seu inventário está vazio. Visite a loja para comprar itens!")}</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {inventarioItems.map((inventarioItem) => (
                <div key={inventarioItem.id} className="bg-[#222533] rounded-xl p-6 shadow-lg">
                  <div className="text-center mb-4">
                    <img
                      className="w-16 h-16 mx-auto mb-3"
                      src="https://geminidev.com.br/images/assets/gem_green.png"
                      alt={inventarioItem.item.nome}
                    />
                    <h3 className="text-xl font-bold text-white">{inventarioItem.item.nome}</h3>
                  </div>

                  <p className="text-gray-300 text-sm mb-4 text-center">
                    {inventarioItem.item.descricao}
                  </p>

                  <div className="flex justify-center items-center">
                    <div className="bg-[#9733EE] text-white px-3 py-1 rounded-full text-sm font-medium">
                      {t("Quantidade:")} {inventarioItem.quantidade}
                    </div>
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
