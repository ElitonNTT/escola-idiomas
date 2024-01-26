import { HTMLProps, forwardRef } from "react";

export const Select = forwardRef<
  HTMLSelectElement,
  HTMLProps<HTMLSelectElement> & {
    label?: string;
    containerClass?: string;
    error?: string;
  }
>(function Select({ className, label, containerClass, error, ...props }, ref) {
  return (
    <div className={containerClass}>
      <label>
        <div className="mb-1 block text-sm font-medium text-black">{label}</div>
        <div>
          <select
            {...props}
            className={[
              "block w-full rounded-lg border px-4 py-1 text-black transition-shadow focus:outline-none focus:ring",
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
