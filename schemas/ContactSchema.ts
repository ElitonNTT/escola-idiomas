import * as z from "zod";

const phoneRegex = new RegExp(/\(?([0-9]{2})\)?([ .-]?)([0-9]{5})\2([0-9]{4})/);

export const ContactSchema = z.object({
  name: z.string().min(1, {
    message: "Este campo não pode estar vazio!",
  }),
  phone: z.string().regex(phoneRegex, { message: "Número Inválido!" }).max(11, {
    message: "Número Inválido!",
  }),
  email: z.string().email({
    message: "Insira um e-mail válido!",
  }),
  switch: z.boolean().default(false).optional(),
});
