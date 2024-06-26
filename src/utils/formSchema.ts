import { z } from "zod";

export const formSchema = z
  .object({
    name: z.string().min(2, "Por favor, digite um nome válido!"),
    // medicalReport: z
    //   .instanceof(FileList, { message: "Image is required" })
    //   .transform((list) => list.item(0)!),
    medicalReport: z.any(), // FileList ta dando bug ao buildar
    email: z.string().email({ message: "Por favor, use um email válido!" }),
    password: z
      .string()
      .min(4, "Por favor, use uma senha com mais de 4 caracteres!"),
    confirmPassword: z.string(),
    cpf: z
      .string()
      .regex(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, "Por facor, use um CPF válido!"),
    rg: z.string().regex(/^\d{3}\.\d{3}-\d$/, "Por facor, use um RG válido!"),
    phoneNumber: z
      .string()
      .length(11, "Por favor, use um número de telefone válido."),
    gender: z.string().length(1, {
      message: "Por favor, selecione uma opção!", //arrumar o erro
    }),
    birthDate: z.string().date("Por favor, selecione uma data"),
    // doctor info
    doctorName: z
      .string()
      .min(9, { message: "Por favor, digite um nome válido!" }),
    uf: z.string().length(2, "Por favor, selecione uma opção!").toUpperCase(), //arrumar o erro
    crm: z.string().min(3, "Por favor digite um CRM válido!"),
    especialidade: z.string().max(25).optional(),
    areaAtuacao: z.string().max(50).optional(),
    diagnostico: z
      .string()
      .min(3, "Por favor, digite um diagnóstico válido!")
      .max(
        255,
        "Por favor, digite um diagnóstico com no máximo 255 caracteres"
      ),
    cid: z
      .string()
      .min(1, "Por favor, digite um CID válido!")
      .max(12, "Por favor, digite um CID válido!"),
  })
  .refine((fields) => fields.password === fields.confirmPassword, {
    path: ["confirmPassword"],
    message: "As senhas precisam ser iguais!",
  });

export type FormSchema = z.infer<typeof formSchema>;
