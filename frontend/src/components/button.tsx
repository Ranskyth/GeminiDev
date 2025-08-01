import Link from "next/link"
import { ReactNode } from "react"

export const Button = ({children, href}:{children:ReactNode, href?:string|object}) => {
    return(
       <Link className="bg-[#9B32EF] py-3 rounded-2xl" href={href ? href : "/"}>{children}</Link>
    )
}