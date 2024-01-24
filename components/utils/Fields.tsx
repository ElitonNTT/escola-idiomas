import Image from "next/image";
import { HTMLProps, forwardRef } from "react";
import { FaUpload } from "react-icons/fa";

type CommonFieldProps = {
  label?: string;
};

export type TextAreaFieldProps = HTMLProps<HTMLTextAreaElement> &
  CommonFieldProps;

export const TextAreaField = forwardRef<
  HTMLTextAreaElement,
  TextAreaFieldProps
>(function TextAreaField({ data, label, ...props }, ref) {
  return (
    <label className="block">
      <div className=" text-black">{label}</div>
      <textarea
        rows={6}
        {...props}
        ref={ref}
        className="mb-3 block w-full rounded border border-gray-200 p-2 text-black"
      />
    </label>
  );
});

export type TextFieldProps = HTMLProps<HTMLInputElement> & CommonFieldProps;

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  function TextField({ data, label, ...props }, ref) {
    return (
      <label className="block">
        <div className="text-black">{label}</div>
        <input
          {...props}
          ref={ref}
          className="mb-3 block w-full rounded border border-gray-200 p-2 text-black"
        />
      </label>
    );
  },
);

export type FileFieldProps = HTMLProps<HTMLInputElement> & {
  onImageUploaded: (filePath: string, imageId: number) => void;
  preview?: string;
} & CommonFieldProps;

export const FileField = forwardRef<HTMLInputElement, FileFieldProps>(
  function FileField({ label, name, onImageUploaded, preview, ...props }, ref) {
    return (
      <label className="block">
        <div className="text-black">{label}</div>
        <div className="mb-3 flex w-[20%] items-center gap-3 rounded border border-gray-200 bg-green-500 p-2 font-bold text-white hover:cursor-pointer">
          <FaUpload /> Enviar foto
          <input
            {...props}
            type="file"
            onChange={async (e) => {
              const file = e.target.files?.[0];
              if (file == null) return;

              const formData = new FormData();
              formData.append("file", file);

              const res = await fetch("/api/files", {
                method: "POST",
                body: formData,
              });
              const body = await res.json();

              onImageUploaded(body.filePath, body.imageId);
            }}
            className="hidden"
            ref={ref}
            accept="image/png, image/gif, image/jpeg"
          />
        </div>
        {preview && (
          <Image
            src={preview}
            alt=""
            className="w-64"
            width="120"
            height="120"
          />
        )}
      </label>
    );
  },
);
