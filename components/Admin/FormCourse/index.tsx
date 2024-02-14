"use client";
import { Course, Prisma } from "@prisma/client";
import { HTMLProps, forwardRef } from "react";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import { FaSpinner } from "react-icons/fa";
import { FileField } from "../../utils/Fields";

type Values = {
  slug: string;
  title: string;
  content: string;
  sections: Prisma.JsonValue[];
  acordions: Prisma.JsonValue[];
  titleSections: string;
  videoId: string;
  titleAcordions: string;
  bannerUrl: string;
  copyPrice: string;
  price: string;
};

export default function FormCourse({ data }: { data?: Course }) {
  const {
    register,
    control,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    handleSubmit,
  } = useForm<Values>({
    defaultValues: {
      acordions: data?.acordions || [{ title: "", content: "" }],
      content: data?.content || "",
      slug: data?.slug || "",
      sections: data?.sections || [{ title: "", content: "" }],
      title: data?.title || "",
      titleSections: data?.titleSections || "",
      videoId: data?.videoId || "",
      bannerUrl: data?.bannerUrl || "",
      titleAcordions: data?.titleAcordions || "",
      copyPrice: data?.copyPrice || "",
      price: data?.price || "",
    },
  });

  const { fields, append, remove } = useFieldArray({
    name: "sections",
    control,
  });

  const {
    fields: accordionFields,
    append: appendAccordion,
    remove: removeAccordion,
  } = useFieldArray({
    control,
    name: "acordions",
  });

  return (
    <>
      <form
        className="grid-cols-2 gap-3 md:grid-cols-2"
        onSubmit={handleSubmit(
          async ({
            sections,
            acordions,
            content,
            slug,
            title,
            titleSections,
            videoId,
            bannerUrl,
            titleAcordions,
            copyPrice,
            price,
          }) => {
            if (!data) {
              fetch(`/api/courses`, {
                method: "POST",
                body: JSON.stringify({
                  sections,
                  acordions,
                  content,
                  slug,
                  title,
                  titleSections,
                  videoId,
                  bannerUrl,
                  titleAcordions,
                  copyPrice,
                  price,
                }),
              });
            } else {
              fetch(`/api/courses/${data.slug}`, {
                method: "PUT",
                body: JSON.stringify({
                  sections,
                  acordions,
                  content,
                  title,
                  titleSections,
                  videoId,
                  bannerUrl,
                  titleAcordions,
                  copyPrice,
                  price,
                }),
              });
            }
          },
        )}
      >
        <span className="mt-4 py-4 text-[24px] font-bold text-primary">
          Informaçãoes do curso
        </span>
        <Input
          label="Slug"
          type="text"
          error={errors.slug?.message}
          {...register("slug", {
            required: true,
            onChange: (e) => {
              const newValue = e.target.value.replace(/\s+/g, "-");
              e.target.value = newValue;
              return newValue;
            },
          })}
        />
        <Input
          label="Titulo do curso"
          type="text"
          className="mb-4"
          error={errors.title?.message}
          {...register("title", {
            required: true,
          })}
        />
        <Input
          label="Copy Preço"
          type="text"
          className="mb-4"
          error={errors.copyPrice?.message}
          {...register("copyPrice", {
            required: true,
          })}
        />
        <Input
          label="Preço"
          type="text"
          className="mb-4"
          error={errors.price?.message}
          {...register("price", {
            required: true,
          })}
        />

        <Controller
          control={control}
          name={"bannerUrl"}
          render={({ field: { name, onBlur, onChange, ref, value } }) => (
            <FileField
              className=""
              name={name}
              onBlur={onBlur}
              onImageUploaded={(filePath) => onChange(filePath)}
              ref={ref}
              preview={value}
              label={"Banner do curso"}
            />
          )}
        />
        <Input
          containerClass="mt-8"
          className="mb-8"
          label="Descrição do curso"
          type="text"
          error={errors.content?.message}
          {...register("content", {
            required: true,
          })}
        />
        <span className="mt-4 text-[24px] font-bold text-primary">
          Outras informações do curso
        </span>
        <Input
          containerClass="mt-2"
          label={`Titulo da informações`}
          {...register(`titleSections`)}
        />
        {fields.map((item, index) => (
          <div key={item.id} className="my-8">
            <span className="my-4 mb-8 py-4 text-[16px] font-bold text-primary">
              Grupo de informação {index + 1}
            </span>
            <Input
              containerClass="mt-2"
              label={`Titulo ${index + 1}`}
              {...register(`sections.${index}.title`)}
            />
            <TextArea
              className="mb-4"
              label={`Decrição ${index + 1}`}
              {...register(`sections.${index}.content`)}
            />
            <button
              type="button"
              onClick={() => remove(index)}
              className="mr-auto mt-3 flex items-center gap-3 rounded bg-red-500 px-5 py-1 font-bold text-white"
            >
              Remover sessão {index + 1}
            </button>
          </div>
        ))}

        <button
          type="button"
          className={
            "mb-8 mt-3 flex items-center gap-3 rounded bg-green-500 px-5 py-2 font-bold text-white"
          }
          onClick={() =>
            append({
              name: "",
            })
          }
        >
          Adicionar sessão
        </button>

        <span className="mt-8 py-4 text-[24px] font-bold text-primary">
          Acordions
        </span>
        <Input
          label="Titulo do acordion"
          type="text"
          className="mb-4"
          error={errors.titleAcordions?.message}
          {...register("titleAcordions", {})}
        />

        {accordionFields.map((item, index) => (
          <div key={item.id} className="">
            <span className="mt-4 py-4 text-[16px] font-bold text-primary">
              Acordion {index + 1}
            </span>
            <Input
              containerClass="mt-4"
              label={`Título do acordion ${index + 1}`}
              {...register(`acordions.${index}.title`)}
            />
            <TextArea
              label={`Descrição do acordion ${index + 1}`}
              {...register(`acordions.${index}.content`)}
            />
            <button
              type="button"
              onClick={() => removeAccordion(index)}
              className="mb-8 mr-auto mt-3 flex items-center gap-3 rounded bg-red-500 px-5 py-1 font-bold text-white"
            >
              Remover acordion {index + 1}
            </button>
          </div>
        ))}

        <button
          type="button"
          className={
            "mb-8 mt-3 flex items-center gap-3 rounded bg-green-500 px-5 py-2 font-bold text-white"
          }
          onClick={() =>
            appendAccordion({
              title: "",
              content: "",
            })
          }
        >
          Adicionar acordeão
        </button>

        <Input
          label="ID video do YouTube"
          type="text"
          className="mb-4"
          error={errors.videoId?.message}
          {...register("videoId", {
            required: true,
          })}
        />

        <div className="flex justify-between">
          <button
            className={[
              "mt-3 flex items-center gap-3 rounded bg-green-500 px-7 py-3 font-bold text-white",
              isSubmitting ? "opacity-50" : "",
            ].join(" ")}
            type="submit"
          >
            {isSubmitting && <FaSpinner className="animate-spin" />}
            Salvar
          </button>
          {isSubmitSuccessful && (
            <span className="text-green-500">Enviado com sucesso</span>
          )}
        </div>
      </form>
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

const TextArea = forwardRef<
  HTMLTextAreaElement,
  HTMLProps<HTMLTextAreaElement> & {
    label?: string;
    containerClass?: string;
    error?: string;
  }
>(function TextArea(
  { className, containerClass, label, error, ...props },
  ref,
) {
  return (
    <div className={containerClass}>
      <label>
        <div>{label}</div>
        <div>
          <textarea
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
