import { BACKEND } from "@/config/config"

export const turmaServices = {
    getTurma: async(turma: string):Promise<any> => {
        const data = await fetch(`${BACKEND}/api/v1/turma`, {method:"POST", body:JSON.stringify({turma:turma}), headers:{"Content-Type":"application/json"}}).then((res) => res.json())
        console.log(data)
        return data
    }
}