import Link from "next/link";
import { ReactNode } from "react";

type Props = {
	children?: ReactNode;
	active?: boolean;
	href?: string | object;
	className?: ReactNode
}

export const Button = ({
	children,
	href,
	active,
	className
}: Props) => {
	return (
		<Link
			className={`${active ? `bg-[#9B32EF]` : ``} text-[18px] py-3 px-12 rounded-2xl ${className ?? ""}`}
			href={href ? href : "/"}
		>
			{children}
		</Link>
	);
};
