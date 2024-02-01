import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Centro de Idiomas  ",
    default: "Idiomas",
  },
};

export default function CoursesRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
