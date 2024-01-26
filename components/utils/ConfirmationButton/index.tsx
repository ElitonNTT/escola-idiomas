import { Dialog } from "@headlessui/react";
import { ReactNode, useState } from "react";
import { FaSpinner } from "react-icons/fa";

export type ConfirmationButtonProps = {
  className?: string;
  title?: string;
  children?: ReactNode | ReactNode[];
  onConfirm: () => void | Promise<void>;
};

export default function ConfirmationButton({
  className,
  children,
  title,
  onConfirm,
}: ConfirmationButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <button className={className} onClick={() => setIsOpen(true)}>
        {children}
      </button>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-10"
      >
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="z-10 mx-auto max-w-xl rounded-2xl bg-white p-5">
            <Dialog.Title className="mb-3 text-2xl font-semibold">
              {title}
            </Dialog.Title>
            <Dialog.Description className="mb-3">
              Você tem certeza? Essa ação não pode ser desfeita
            </Dialog.Description>

            <div className="flex gap-3">
              <button
                className="rounded bg-red-500 px-5 py-2 text-white"
                disabled={isLoading}
                onClick={async () => {
                  try {
                    setIsLoading(true);
                    await onConfirm();
                  } finally {
                    setIsLoading(false);
                    setIsOpen(false);
                  }
                }}
              >
                {isLoading ? (
                  <span>
                    <FaSpinner className="animate-spin" />
                  </span>
                ) : (
                  "Confirmar"
                )}
              </button>
              <button
                className="rounded bg-gray-200 px-5 py-2"
                onClick={() => setIsOpen(false)}
              >
                Cancelar
              </button>
            </div>
          </Dialog.Panel>
        </div>
        <div className="fixed inset-0 -z-10 bg-black bg-opacity-25" />
      </Dialog>
    </>
  );
}
