import { z } from "zod"

export const createTechSchema = z.object({
    title: z.string().nonempty("Você precisa preencher o nome!"),
    status: z.string().nonempty("Selecione um status!")
})