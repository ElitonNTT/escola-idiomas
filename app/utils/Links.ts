import { ReactNode } from "react";

type Link = {
  label: string | ReactNode | ReactNode[];
  href: string;
};

export const linksOutros: Link[] = [
  { label: "Cursos", href: "/admin/cursos" },
  { label: "Leads", href: "/admin/leads" },
  { label: "Usuários", href: "/admin/admins" },
];
