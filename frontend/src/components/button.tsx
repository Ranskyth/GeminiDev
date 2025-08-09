import Link from "next/link"
import { ReactNode } from "react"

export const Button = ({children, href, active}:{children:ReactNode, active?:boolean , href?:string|object}) => {
    return(
       <Link className={`${active ? `bg-[#9B32EF]` : ``} text-[18px] py-3 px-12 rounded-2xl`} href={href ? href : "/"}>{children}</Link>
    )
}