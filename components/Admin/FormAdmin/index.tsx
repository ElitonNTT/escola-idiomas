"use client";
import { Select } from "@/components/utils/Select";
import { Dialog, Transition } from "@headlessui/react";
import { Admin } from "@prisma/client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Fragment, HTMLProps, forwardRef, useState } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { FaPencilAlt, FaSpinner } from "react-icons/fa";

type Values = {
  password: string;
  email: string;
  role: string;
  name: string;
};

export default function FormUser({ admin }: { admin?: Admin }) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm<Values>({
    defaultValues: {
      password: "",
      email: "" || admin?.email,
      role: "" || admin?.role,
      name: "" || admin?.name,
    },
  });

  function handleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <Toaster
        position="bottom-center"
        gutter={12}
        toastOptions={{ duration: 5000 }}
      />
      <div
        className={` inset-0 mr-5 flex items-center ${
          admin ? "justify-start" : "justify-end"
        } `}
      >
        {admin ? (
          <button
            className="flex flex-col items-center text-center"
            onClick={handleModal}
          >
            <FaPencilAlt className="h-4 w-4 " />
          </button>
        ) : (
          <button
            type="button"
            onClick={handleModal}
            className={[
              "flex items-center gap-3 rounded bg-primary px-7 py-3 font-semibold text-white",
            ].join(" ")}
          >
            Criar novo
          </button>
        )}
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={handleModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="mb-5 text-lg font-medium leading-6 text-gray-900"
                  >
                    {admin ? "Editar" : "Criar novo"}
                  </Dialog.Title>
                  <form
                    className="grid-cols-2 gap-3 md:grid-cols-2"
                    onSubmit={handleSubmit(
                      async ({ email, password, role, name }) => {
                        if (admin) {
                          try {
                            await axios.put(`/api/admin/${admin.id}`, {
                              email,
                              password,
                              role,
                              name,
                            });

                            toast.success("Atualizado com sucesso");

                            handleModal();
                            router.refresh();
                            return;
                          } catch (error) {
                            console.log(error);
                            toast.error("Erro ao Atualizar", {});
                          }
                        }
                        if (!admin) {
                          try {
                            await axios.post(`/api/admin`, {
                              email,
                              password,
                              role,
                              name,
                            });

                            toast.success("Admin criado com sucesso!");

                            handleModal();
                            router.refresh();
                          } catch (error) {
                            toast.error("Erro ao criar Admin!");
                            return;
                          }
                        }
                      },
                    )}
                  >
                    <Select
                      label="Tipo"
                      error={errors.role?.message}
                      placeholder="Administrador"
                      {...register("role", { required: "obrigatório" })}
                    >
                      <option value={"ADMIN"}>Administrador</option>
                      <option value={"USER"}>Editor</option>
                    </Select>
                    <Input
                      label="Nome"
                      type="text"
                      placeholder="Nome"
                      error={errors.name?.message}
                      {...register("name", {})}
                    />
                    <Input
                      label="E-mail"
                      type="email"
                      placeholder="E-mail"
                      error={errors.email?.message}
                      {...register("email", {})}
                    />
                    <Input
                      placeholder="Senha"
                      label="Senha"
                      type="password"
                      error={errors.password?.message}
                      {...register("password", {})}
                    />
                    <div className="flex justify-center">
                      <button
                        className={[
                          "mt-3 flex items-center gap-3 rounded bg-primary px-7 py-3 font-semibold text-white",
                          isSubmitting ? "opacity-50" : "",
                        ].join(" ")}
                        type="submit"
                      >
                        {isSubmitting ? (
                          <>
                            <FaSpinner className="animate-spin" />
                            Salvando...
                          </>
                        ) : (
                          "Salvar"
                        )}
                      </button>
                    </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

const Input = forwardRef<
  HTMLInputElement,
  HTMLProps<HTMLInputElement> & {
    label?: string;
    containerClass?: string;
    error?: string;
  }
>(function Input({ className, label, containerClass, error, ...props }, ref) {
  return (
    <div className={containerClass}>
      <label>
        <div>{label}</div>
        <div>
          <input
            {...props}
            className={[
              "block w-full rounded border px-4 py-1 transition-shadow focus:outline-none focus:ring",
              error ? "border-red-500" : "border-gray-300",
              className,
            ].join(" ")}
            ref={ref}
          />
          <p className="text-sm text-red-500">{error}</p>
        </div>
      </label>
    </div>
  );
});
