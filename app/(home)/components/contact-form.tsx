"use client";
import * as z from "zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { ContactSchema } from "@/schemas/ContactSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { CardWrapper } from "../components/card-wrapper";

const ContactForm = () => {
  const form = useForm<z.infer<typeof ContactSchema>>({
    resolver: zodResolver(ContactSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      switch: false,
    },
  });

  const onSubmitForm = () => {
    console.log("Clicado");
  };

  return (
    <CardWrapper
      headerTitle={"Quer saber tudo sobre este programa?"}
      headerLabel="Preencha o formulário abaixo para receber mais informações!"
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmitForm)}>
          <div className="space-y-4 p-2">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg font-semibold">Nome</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Nome" type="text" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg font-semibold">
                    Telefone
                  </FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="+55999999999" type="tel" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg font-semibold">
                    E-mail
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="exemplo@mail.com"
                      type="email"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="switch"
              render={({ field }) => (
                <FormItem className="flex">
                  <FormLabel className="text-sm font-semibold">
                    Aceito receber ofertas por e-mail, SMS e por WhatsApp,
                    consentindo com o tratamento dos meus dados pessoais.
                  </FormLabel>
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <Button type="submit" variant={"submit"} className="mt-4 w-full">
            Enviar
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};

export default ContactForm;
