import { TurmaList } from "@/app/(pages)/admin/turmas/page";
import { BACKEND } from "@/config/config";
import { SetStateAction } from "react";

export const turmaServices = {
  createTurma: async (turma: string): Promise<any> => {
    const data = await fetch(`${BACKEND}/api/v1/turma`, {
      method: "POST",
      body: JSON.stringify({ turma: turma }),
      headers: { "Content-Type": "application/json" },
    }).then((res) => res.json());
    console.log(data);
    return data;
  },
  getTurmaAll: async (): Promise<TurmaList[]> => {
    const data:Promise<TurmaList[]> = await fetch(`${BACKEND}/api/v1/turma/all`)
      .then((res) => res.json())
      .catch((err) => console.log(err));

    return data;
  },
  getTurmaByName: async () => {
    throw Error("função não criada");
  },
};
