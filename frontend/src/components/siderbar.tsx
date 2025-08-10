"use client"
import { usePathname } from "next/navigation"
import { Button } from "./button"

export const Siderbar = () => {
    const params = usePathname()

    return(
        <div className="flex flex-col duration-700 ease-in-out gap-2 w-[250px] px-2 py-2 h-screen bg-[#222533]">
            {}
            <Button href={"/dashboard"} active={params == "/dashboard"}>Dashboard</Button>
            <Button href={"/missoes"} active={params == "/missoes"}>Missões</Button>
            <Button href={"/ranking"} active={params == "/ranking"}>Ranking</Button>
            <Button href={"/inventario"} active={params == "/inventario"}>Inventário</Button>
            <Button href={"/loja"} active={params == "/loja"}>Loja</Button>
            <Button href={"/notas"} active={params == "/notas"}>Notas</Button>
            <Button href={"/github"} active={params == "/github"}>GitHub Status</Button>
        </div>
    )
}