import { TurmaList } from "@/app/(pages)/admin/turmas/page";
import { auth_geminidev  } from "@/app/token/tokens";

import { BACKEND } from "@/config/config";

export const instituicaoServices = {
  createInstituicao: async (turma: string): Promise<any> => {

    const data = await fetch(`${BACKEND}/api/v1/instituicao/all`, {
      method: "POST",
      body: JSON.stringify({ turma: turma }),
      headers: { "Content-Type": "application/json" },
    }).then((res) => res.json());
    console.log(data);
    return data;
  },
  getInstituicaoAll: async (): Promise<TurmaList[]> => {
    

    const data:Promise<TurmaList[]> = await fetch(`${BACKEND}/api/v1/instituicao/all`, {headers:{"Authorization":`Bearer ${auth_geminidev}`}})
      .then((res) => res.json())
      .catch((err) => console.log(err));


    return data;
  },
  getTurmaByName: async () => {
    throw Error("função não criada");
  },
};
