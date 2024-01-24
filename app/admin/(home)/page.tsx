import { redirect } from "next/navigation";

// maybe use async down here
export default function Home() {
  if (true) {
    redirect("/admin/cursos");
  }

  return <>a</>;
}
