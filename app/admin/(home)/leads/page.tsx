import DataTable from "@/components/Admin/dataTable";
import { prisma } from "@/lib/prisma/prismaClient";
import { Lead, Session } from "@prisma/client";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default async function Users() {
  const data: Lead[] = await prisma.lead.findMany({
    include: {
      session: true,
    },
  });

  return (
    <>
      <div className="flex justify-between">
        <h1 className="mb-3 text-3xl font-semibold text-primary lg:text-4xl ">
          Leads
        </h1>
      </div>
      <DataTable
        data={data}
        titles={[
          "#",
          "Nome",
          "Email",
          "Telefone",
          "Plataforma",
          "Campanha",
          "Curso",
          "WhatsApp",
        ]}
        idExtractor={(row: { id: { toString: () => any } }) =>
          row.id.toString()
        }
        //@ts-ignore
        rowGenerator={(row: Lead & { session: Session }) => [
          row.id,
          row.name,
          row.email,
          row.phone,
          row.session.platform,
          row.session.campaing,
          row.course,
          <>
            <Link
              href={`https://wa.me/55${formartNumberPhone(row.phone)}`}
              className="flex items-center rounded bg-green-500 px-2 py-2 text-center font-bold text-white hover:bg-green-600"
            >
              <FaWhatsapp className="m-2" />
              ABRIR
            </Link>
          </>,
        ]}
      />
    </>
  );
}

function formartNumberPhone(phone: string) {
  const phoneFormatter = phone.replace(/\s/g, "").replace(/[()-]/g, "");
  return phoneFormatter;
}
