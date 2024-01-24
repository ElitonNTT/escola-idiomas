import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Editar  ",
    default: "Admin - Idiomas",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
