import { z } from "zod"

export const loginSchema = z.object({
    email: z.string().nonempty("Preencha o e-mail."),
    password: z.string().nonempty("Preencha a senha.")
})