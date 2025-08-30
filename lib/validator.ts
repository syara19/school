import z from "zod";

export const formSchema = z.object({
    name: z.string().min(5, {
      message: 'Nama harus memiliki setidaknya 5 karakter.',
    }),
    email: z.string().email({
      message: 'Harap masukkan alamat email yang valid.',
    }),
    subject: z.string().optional(),
    message: z.string().min(10, {
      message: 'Pesan harus memiliki setidaknya 10 karakter.',
    }),
  });
  