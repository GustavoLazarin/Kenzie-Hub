import { z } from "zod";

export const registerSchema = z.object({
  name: z.string().nonempty("É necessário preencher o campo de nome."),
  email: z
    .string()
    .nonempty("É necessário preencher o campo de email.")
    .email("Insira um e-mail valido."),
  password: z
    .string()
    .nonempty("É necessário fornecer uma senha.")
    .min(8, "É necessário pelo menos oito caracteres.")
    .regex(/(?=.*?[A-Z])/, "A senha deve conter pelo menos uma letra maiúscula")
    .regex(/(?=.*?[a-z])/, "A senha deve conter pelo menos uma letra minúscula")
    .regex(/(?=.*?[0-9])/, "A senha deve conter pelo menos um número."),
  confirmPassword: z.string().nonempty("É necessário confirmar a senha."),
  bio: z.string().nonempty("É neccesário preencher o campo de bio."),
  contact: z.string().nonempty("É neccesário fornecer uma forma de contato."),
  course_module: z.string().nonempty("É necessário selecinar o seu módulo."),
}).refine(({password, confirmPassword})=> password === confirmPassword , {
    message: "As senhas não conferem.",
    path: ["confirmPassword"] 
});