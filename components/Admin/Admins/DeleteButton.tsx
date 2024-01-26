"use client";
import ConfirmationButton from "@/components/utils/ConfirmationButton";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { FaTrashAlt } from "react-icons/fa";

export type DeleteButtonProps = { id: number };

export default function DeleteButton({ id }: DeleteButtonProps) {
  const router = useRouter();

  return (
    <ConfirmationButton
      onConfirm={async () => {
        const resp = await fetch(`/api/admin/${id}`, { method: "DELETE" });

        toast.success("Admin deletado com sucesso!");

        if (resp.ok) {
          router.refresh();
        }
      }}
      title="Excluir Administrador"
      key="delete"
      className="rounded p-3 text-white"
    >
      <FaTrashAlt className="text-red-500" />
    </ConfirmationButton>
  );
}
