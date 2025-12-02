"use client";

import { usePathname } from "next/navigation";

import {
  LayoutDashboard,
  Target,
  Trophy,
  Package,
  ShoppingCart,
  Notebook,
  Github,
  Building2,
  Users,
  Rows4,
  ShoppingBasket,
} from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

export const SiderbarClient = () => {
  const params = usePathname();

  const items = [
    { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { href: "/missoes", label: "Missões", icon: Target },
    { href: "/ranking", label: "Ranking", icon: Trophy },
    { href: "/inventario", label: "Inventário", icon: Package },
    { href: "/loja", label: "Loja", icon: ShoppingCart },
    { href: "/notas", label: "Notas", icon: Notebook },
  ];

  return (
    <div className="flex flex-col gap-2 w-[300px] px-2 py-2 h-screen bg-[#222533]">
      <ul className="flex flex-col gap-2">
        {items.map(({ href, label, icon: Icon }) => (
          <li key={href}>
            <Link href={href}>
            <Button className={`justify-start ${ href === params ? "bg-[#8D4FF4]" : "bg-transparent"} hover:bg-[#1a1c26] h-12 w-full gap-2`}>
              <Icon size={18} />
              {label}
            </Button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const SiderbarAdmin = () => {
  const params = usePathname();

  const items = [
    { href: "/admin/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { href: "/admin/instituicao", label: "Instituição", icon: Building2 },
    { href: "/admin/turmas", label: "Turmas", icon: Users },
    { href: "/admin/missoes", label: "Missões", icon: Target },
    { href: "/admin/loja", label: "Loja", icon: ShoppingCart },
    { href: "/admin/itens", label: "Itens", icon: ShoppingBasket },
    { href: "/admin/atividades", label: "Atividades", icon: Rows4 },
  ];

  return (
    <div className="flex flex-col gap-2 w-[250px] px-2 py-2 h-screen bg-[#222533]">
      <ul className="flex flex-col gap-2">
        {items.map(({ href, label, icon: Icon }) => (
          <li key={href}>
            <Link href={href}>
            <Button className={`justify-start ${ href === params ? "bg-[#8D4FF4]" : "bg-transparent"} hover:bg-[#1a1c26] h-12 w-full gap-2`}>
              <Icon size={18} />
              {label}
            </Button>
            </Link> 
          </li>
        ))}
      </ul>
    </div>
  );
};
