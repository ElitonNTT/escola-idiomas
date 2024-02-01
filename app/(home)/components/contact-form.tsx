"use client";
import { TextField } from "@/components/utils/Fields";
import { Switch } from "@headlessui/react";
import { Controller, useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

type Values = {
  name: string;
  email: string;
  phone: string;
  terms: boolean;
  course: string;
};

export default function FormCourses({ course }: { course: string }) {
  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm<Values>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      terms: false,
      course: course,
    },
  });

  async function handleSubmitOccurrence(values: Values) {
    try {
      const data = {
        ...values,
        course,
      };

      if (!values.terms) {
        toast("Aceite os termos para prosseguir", {
          icon: "❌",
          ariaProps: {
            role: "status",
            "aria-live": "polite",
          },
        });
      } else {
        const resp = await fetch("/api/users", {
          method: "POST",
          body: JSON.stringify(data),
        });

        if (resp.ok) {
          toast.success("Enviado com sucesso");
        } else {
          toast.error("Erro!");
        }
      }
    } catch (error: any) {}
  }

  return (
    <>
      <span className="text-graysecondary text-[15px] font-bold">
        Quer saber tudo sobre esse curso?
      </span>
      <span className="text-graysecondary text-[15px]">
        Preencha o formulário abaixo para receber mais informações
      </span>
      <div className="mt-4 flex flex-col space-y-2 md:flex-row">
        <Toaster
          position="bottom-center"
          gutter={12}
          toastOptions={{ duration: 5000 }}
        />

        <form
          className="flex flex-col "
          onSubmit={handleSubmit(handleSubmitOccurrence)}
        >
          <TextField
            className="focus:border-primaryblue w-full focus:outline-none focus:ring-1 focus:ring-primary"
            placeholder="Nome completo"
            {...register("name", {
              required: true,
            })}
          />
          {errors.name && (
            <p className="text-red-500">{errors.name?.message}</p>
          )}
          <TextField
            placeholder="WhatsApp"
            className="w-full"
            {...register("phone", {
              required: true,
            })}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              const value = e.target.value;
              const formattedValue = formatPhoneNumber(value);
              setValue("phone", formattedValue);
            }}
          />
          {errors?.phone && (
            <p className="text-red-500">{errors?.phone.message}</p>
          )}
          <TextField
            className="w-full"
            placeholder="Seu melhor e-mail"
            {...register("email", {
              required: true,
            })}
          />
          {errors.email && (
            <p className="text-red-500">{errors.email?.message}</p>
          )}
          <Controller
            control={control}
            name="terms"
            render={({ field: { onChange, value } }) => (
              <label className="flex items-center gap-2">
                <Switch
                  checked={value}
                  onChange={(v) => {
                    onChange(v);
                  }}
                  className={`${value ? "bg-blueprimary" : "bg-gray-500"}
          relative flex h-6 w-10 shrink-0 cursor-pointer items-center rounded-full border-4 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
                >
                  <span
                    aria-hidden="true"
                    className={`${value ? "translate-x-4" : "translate-x-0"}
            pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                  />
                </Switch>
                <span className="text-justify text-sm text-gray-400">
                  Aceito receber ofertas por e-mail, SMS e por WhatsApp,
                  consentindo com o tratamento dos meus dados pessoais.
                </span>
              </label>
            )}
          />
          <button
            type="submit"
            className="bg-blueprimary mx-auto mt-4 w-[60%] rounded-full px-4 py-2 font-semibold text-white"
          >
            Quero saber mais!
          </button>
        </form>
      </div>
    </>
  );
}

function formatPhoneNumber(phoneNumber: string) {
  const cleaned = ("" + phoneNumber).replace(/\D/g, "");
  const match = cleaned.match(/^(\d{2})(\d{5})(\d{4})$/);
  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}`;
  }
  return phoneNumber;
}
