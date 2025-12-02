"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getAllMissoes } from "@/lib/api/generated";
import type { Missoes } from "@/lib/api/model/missoes";
import { getUserTokenDecode } from "@/lib/auth";
import { BACKEND } from "@/config/config";
import { DollarSign } from "lucide-react";
import { toast } from "react-toastify";

interface Questao {
  id: number;
  pergunta: string;
  opcaoA: string;
  opcaoB: string;
  opcaoC: string;
  opcaoD: string;
  respostaCorreta: string;
}

interface Questionario {
  id: number;
  titulo: string;
  questoes: Questao[];
}

interface MissaoComQuestionario extends Missoes {
  conteudo?: string;
  questionario?: Questionario;
}

export default function RealizarMissao() {
  const params = useParams();
  const router = useRouter();
  const [missao, setMissao] = useState<MissaoComQuestionario | null>(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [respostasQuestoes, setRespostasQuestoes] = useState<Record<number, string>>({});
  const [respostaTexto, setRespostaTexto] = useState("");
  const [questoes, setQuestoes] = useState<Questao | null>(null);


  const missaoId = params.id as string;
  const userToken = getUserTokenDecode();

  console.log(userToken)

  console.log(missao?.questionario)

  useEffect(() => {
    const fetchMissaoEQuestionario = async () => {
      try {
        const { data: missoes } = await getAllMissoes();
        const foundMissao = missoes.find((m: Missoes) => m.id === parseInt(missaoId));

        if (foundMissao) {
          try {
            const response = await fetch(`${BACKEND}/api/v1/questionario/missao/${missaoId}`);
            if (response.ok) {
              const questionario = await response.json();
              setMissao({ ...foundMissao, questionario });
            } else {
              setMissao(foundMissao);
            }
          } catch (error) {
            console.error('Error fetching questionnaire:', error);
            setMissao(foundMissao);
          }
        } else {
          toast('Missão não encontrada', {theme: "dark"});
          router.back();
        }
      } catch (error) {
        console.error('Error fetching mission:', error);
        alert('Erro ao carregar missão');
        router.back();
      } finally {
        setLoading(false);
      }
    };

    if (missaoId) {
      fetchMissaoEQuestionario();
    }
  }, [missaoId, router]);

  const handleSubmit = async () => {
    if (!missao || !userToken?.sub) return;

    setSubmitting(true);
    try {
      const submissionData = {
        userId: Number(userToken.sub),
        missaoId: missao.id,
        status: "PENDENTE",
        observacao: respostaTexto
      };

      const response = await fetch(`${BACKEND}/api/v1/missoes-submissoes`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData)
      });

      if (response.ok) {
        setCompleted(true);
        setTimeout(() => {
          router.push('/missoes');
        }, 2000);
      } else {
        alert('Erro ao enviar missão. Tente novamente.');
      }
    } catch (error) {
      console.error('Error submitting mission:', error);
      alert('Erro ao enviar missão. Tente novamente.');
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="bg-[#1B1E26] flex-1 w-full h-screen px-20 py-5">
        <div className="flex justify-center items-center h-full">
          <div className="text-white">Carregando missão...</div>
        </div>
      </div>
    );
  }

  if (!missao) {
    return (
      <div className="bg-[#1B1E26] flex-1 w-full h-screen px-20 py-5">
        <div className="flex justify-center items-center h-full">
          <div className="text-white">Missão não encontrada</div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#1B1E26] flex-1 w-full h-[75vh] overflow-auto min-h-screen px-20 py-5">
      <div className="max-w-4xl mx-auto">
        <div className="bg-[#9733EE] rounded-2xl p-4 mb-8 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">Realizar Missão</h1>
              <p className="text-purple-100">Complete esta missão para ganhar recompensas</p>
            </div>
            <button
              onClick={() => router.back()}
              className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-colors"
            >
               Voltar
            </button>
          </div>
        </div>

        <div className="bg-[#222533] rounded-2xl p-8 mb-8">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">{missao.nome}</h2>
              <div className="flex gap-4 text-sm">
                {missao.xpRecompensa && (
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                    {missao.xpRecompensa} XP
                  </span>
                )}
                {missao.moedasRecompensa && (
                  <span className="bg-yellow-100 text-yellow-800 px-3 py-1 flex rounded-full">
                    {missao.moedasRecompensa} <DollarSign className="w-4 h-4"/>
                  </span>
                )}
              </div>
            </div>
            <div className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium">
              Pendente
            </div>
          </div>

          <div className="bg-[#1B1E26] rounded-xl p-6 mb-6">
            <h3 className="text-lg font-semibold text-white mb-3">Descrição da Missão</h3>
            <p className="text-gray-300 leading-relaxed">{missao.descricao}</p>
          </div>

          {missao.conteudo && (
            <div className="bg-[#1B1E26] rounded-xl p-6 mb-6">
              <h3 className="text-lg font-semibold text-white mb-4">Conteúdo da Missão</h3>
              <div className="bg-[#9733EE]/10 border border-[#9733EE]/30 rounded-lg p-4">
                <div className="text-gray-300 whitespace-pre-line">
                  {missao.conteudo}
                </div>
              </div>
            </div>
          )}

          {missao.questionario?.questoes && missao.questionario.questoes.length > 0 && (
            <div className="bg-[#1B1E26] rounded-xl p-6 mb-6">
              <h3 className="text-lg font-semibold text-white mb-4">Questionário</h3>
              <div className="space-y-6">
                {missao.questionario.questoes.map((questao, index) => (
                  <div key={questao.id} className="bg-gray-800 rounded-lg p-4">
                    <h4 className="text-white font-medium mb-3">
                      Questão {index + 1}: {questao.pergunta}
                    </h4>
                    <div className="space-y-2">
                      {[
                        { key: 'A', value: questao.opcaoA },
                        { key: 'B', value: questao.opcaoB },
                        { key: 'C', value: questao.opcaoC },
                        { key: 'D', value: questao.opcaoD }
                      ].map((opcao) => (
                        <label key={opcao.key} className="flex items-center space-x-3 cursor-pointer">
                          <input
                            type="radio"
                            name={`questao-${questao.id}`}
                            value={opcao.key}
                            onChange={(e) => setRespostasQuestoes(prev => ({
                              ...prev,
                              [questao.id]: e.target.value
                            }))}
                            className="text-[#9733EE] focus:ring-[#9733EE]"
                          />
                          <span className="text-gray-300">{opcao.key}) {opcao.value}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="bg-[#1B1E26] rounded-xl p-6 mb-6">
            <h3 className="text-lg font-semibold text-white mb-4">Resposta Adicional (Opcional)</h3>
            <textarea
              value={respostaTexto}
              onChange={(e) => setRespostaTexto(e.target.value)}
              placeholder="Digite aqui sua resposta adicional, comentários ou observações sobre a missão..."
              className="w-full h-32 bg-gray-800 border border-gray-600 rounded-lg p-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#9733EE] focus:border-transparent"
            />
          </div>
        </div>

        {/* Success Message */}
        {completed && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg mb-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                ✅
              </div>
              <div className="ml-3">
                <p className="text-sm">
                  <strong>Missão enviada com sucesso!</strong> Você será redirecionado para a página de missões.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex justify-center gap-4">
          <button
            onClick={() => router.back()}
            className="bg-gray-600 text-white px-8 py-3 rounded-lg hover:bg-gray-700 transition-colors"
            disabled={submitting}
          >
            Cancelar
          </button>
          <button
            onClick={handleSubmit}
            disabled={submitting || completed}
            className="bg-[#9733EE] text-white px-8 py-3 rounded-lg hover:bg-[#7a29c4] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {submitting ? 'Enviando...' : completed ? 'Enviada!' : 'Enviar Missão'}
          </button>
        </div>
      </div>
    </div>
  );
}
