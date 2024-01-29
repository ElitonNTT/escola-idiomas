import Admins from "@/components/Admin/Admins";
import FormUser from "@/components/Admin/FormAdmin";
import { prisma } from "@/lib/prisma/prismaClient";

const getAdmins = prisma.admin.findMany;

export default async function Users() {
  const data = await getAdmins();

  return (
    <>
      <div className="flex justify-between">
        <h1 className="mb-3 text-3xl font-semibold text-primary lg:text-4xl ">
          Administrador
        </h1>
        <FormUser />
      </div>

      <Admins admins={data} />
    </>
  );
}
