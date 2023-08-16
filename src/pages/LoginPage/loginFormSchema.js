import { z } from "zod"

export const loginSchema = z.object({
    email: z.string().nonempty("Preencha o email."),
    password: z.string().nonempty("Preencha a senha.")
})