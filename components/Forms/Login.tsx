"use client";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash, FaSpinner } from "react-icons/fa";

type Values = {
  email: string;
  password: string;
};

export default function LoginAdmin() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<Values>({ defaultValues: { email: "", password: "" } });
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleLogin = async (data: Values) => {
    setLoading(true);
    const resp = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
      callbackUrl: "/admin",
    });

    if (resp == null) {
      setLoading(false);
      throw new Error("Unexpected error: signIn returned undefined");
    }

    if (resp.ok) {
      setLoading(false);
      resp.url && router.push(resp.url);
    }

    if (resp === undefined) {
      setLoading(false);
      setError("root", { message: "ocorreu um erro inesperado" });
    }

    switch (resp.error) {
      case "Invalid password":
        setLoading(false);
        setError("password", { message: "Senha incorreta" });
        break;
      case "Invalid email":
        setLoading(false);
        setError("email", { message: "E-mail não cadastrado" });
        break;
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(handleLogin)}>
        <div className="px-5 py-7">
          <label className="mb-5 block">
            <div className="pb-1 text-sm font-semibold text-gray-600 ">
              E-mail
            </div>
            <input
              id="email"
              {...register("email", { required: "obrigatório" })}
              type="text"
              className={[
                "mt-1 w-full rounded-lg border px-3 py-2 text-sm",
                errors.email ? "border-red-500" : "",
              ].join(" ")}
            />
            {errors.email && (
              <small className="text-red-500">{errors.email.message}</small>
            )}
          </label>
          <label className="mb-5 block">
            <div className="pb-1 text-sm font-semibold text-gray-600">
              Senha
            </div>
            <div className="relative">
              <input
                id="password"
                {...register("password", { required: "obrigatório" })}
                type={showPassword ? "text" : "password"}
                className={[
                  "mt-1 w-full rounded-lg border px-3 py-2 text-sm",
                  errors.password ? "border-red-500" : "",
                ].join(" ")}
              />
              <button
                type="button"
                onClick={toggleShowPassword}
                className="absolute right-3 top-1/2 -translate-y-1/2 transform cursor-pointer bg-white p-1"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            {errors.password && (
              <small className="text-red-500">{errors.password.message}</small>
            )}
            {errors.root && (
              <small className="text-red-500">{errors.root.message}</small>
            )}
          </label>
          <button
            type="submit"
            disabled={loading}
            className={`${loading ? "opacity-60" : " "} bg-blueprimary inline-block w-full rounded-lg py-2.5 text-center text-lg font-semibold text-white shadow-sm transition duration-200 hover:bg-opacity-90 hover:shadow-md focus:bg-primary focus:shadow-sm focus:ring-4 focus:ring-primary focus:ring-opacity-50`}
          >
            {loading ? (
              <div className="m-auto flex flex-row items-center">
                <FaSpinner className="m-auto animate-spin" /> Entrando...
                <span className="m-auto inline-block"></span>
              </div>
            ) : (
              <span className="mr-2 inline-block">Entrar</span>
            )}
          </button>
        </div>
      </form>
    </>
  );
}
