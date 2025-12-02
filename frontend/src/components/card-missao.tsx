import { Missoes } from "@/lib/api/model/missoes";
import { DollarSign } from "lucide-react";
import { useRouter } from "next/navigation";

interface CardMissaoProps {
  missao: Missoes;
  status: "pendente" | "concluida" | "atrasada";
}

export const CardMissao = ({ missao, status }: CardMissaoProps) => {
  const router = useRouter();

  const getStatusText = () => {
    switch (status) {
      case "pendente":
        return "Pendente";
      case "concluida":
        return "Concluída";
      case "atrasada":
        return "Atrasada";
      default:
        return "Desconhecido";
    }
  };

  const handleButtonClick = () => {
    if (status === "concluida") {
      // TODO: Implement "Ver Detalhes" functionality
      alert("Funcionalidade 'Ver Detalhes' será implementada");
    } else {
      // Navigate to mission realization page
      router.push(`/realizar-missao/${missao.id}`);
    }
  };

  return (
    <div
      className={`w-full p-4 rounded-2xl border-2 bg-[#0D131B] shadow-lg `}
    >
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-bold text-lg">{missao?.nome}</h3>
        <span
          className={`px-2 py-1 rounded-full text-xs font-medium ${
            status === "pendente"
              ? "bg-yellow-200 text-yellow-800"
              : status === "concluida"
              ? "bg-green-200 text-green-800"
              : "bg-red-200 text-red-800"
          }`}
        >
          {getStatusText()}
        </span>
      </div>

      <p className="text-gray-700 text-sm mb-3 line-clamp-2">
        {missao?.descricao}
      </p>

      <div className="flex justify-between items-center text-sm">
        <div className="flex gap-2">
          {missao?.xpRecompensa && (
            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">
              {missao?.xpRecompensa} XP
            </span>
          )}
          {missao?.moedasRecompensa && (
            <span className="bg-yellow-100 text-yellow-800 px-2 py-1 flex rounded">
              {missao?.moedasRecompensa} <DollarSign className="w-4 h-4"/>
            </span>
          )}
        </div>
        <button
          onClick={handleButtonClick}
          className="bg-[#9733EE] text-white px-4 py-2 rounded-lg hover:bg-[#7a29c4] transition-colors"
        >
          {status === "concluida" ? "Ver Detalhes" : "Realizar"}
        </button>
      </div>
    </div>
  );
};
