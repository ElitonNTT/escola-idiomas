"use client";
import DataTable from "@/components/Admin/dataTable";
import FormUser from "@/components/Admin/FormAdmin";
import DeleteButton from "./DeleteButton";

export default function Admins({
  admins,
}: {
  admins: { id: number; email: string }[];
}) {
  return (
    <>
      <DataTable
        data={admins}
        titles={["#", "Email", "Tipo", "Editar", "Deletar"]}
        idExtractor={(row: { id: { toString: () => any } }) =>
          row.id.toString()
        }
        rowGenerator={(row: any) => [
          row.id,
          row.email,
          <span
            key="role"
            className={[
              "text-xm rounded px-2 text-white ",
              row.role === "ADMIN" ? "bg-red-500" : "bg-green-500",
            ].join(" ")}
          >
            {row.role}
          </span>,
          <FormUser key={row.id} admin={row} />,
          <DeleteButton id={row.id} key={row.id} />,
        ]}
      />
    </>
  );
}
