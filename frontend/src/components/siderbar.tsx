import { Button } from "./button"

export const Siderbar = () => {
    return(
        <div className="flex flex-col gap-2 w-[250px] px-2 py-2 h-screen bg-[#222533]">
            <Button>Dashboard</Button>
            <Button>Missões</Button>
            <Button>Ranking</Button>
            <Button>Inventário</Button>
            <Button>Loja</Button>
            <Button>Notas</Button>
        </div>
    )
}