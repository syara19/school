"use client";

import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./form";
import z from "zod";
import { formSchema } from "@/lib/validator";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "./input";
import { Textarea } from "./textarea";
import { Button } from "./button";
import { Loader2, Send } from "lucide-react";
import { useTransition } from "react";
import { toast } from "sonner";

export default function ContactForm() {

    const [isPending, startTransition] = useTransition();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            subject: "",
            message: "",
        },
    });

    const onSubmit = (data: z.infer<typeof formSchema>) => {
        startTransition(async () => {
            console.log(data);
            try {
                const res = await fetch('/api/contact', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                });

                if (res.ok) {
                    toast(
                        "Success",{
                            description: "Pesan berhasil dikirim",
                        }
                    );
                    form.reset();
                } else {
                    toast(
                        "Error",{
                            description: "Pesan gagal dikirim",
                        }
                    );
                }
            } catch (error) {
                console.error("Gagal mengirim data:", error);
                toast(
                    "Error",{
                        description: "Pesan gagal dikirim",
                    }
                );
            }
        });


    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="mt-4 space-y-6">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Nama Lengkap</FormLabel>
                            <FormControl>
                                <Input placeholder="John Doe" {...field} />
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
                            <FormLabel>Alamat Email</FormLabel>
                            <FormControl>
                                <Input placeholder="jhondoe@email.com" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Subjek</FormLabel>
                            <FormControl>
                                <Input placeholder="Subjek Pertanyaan" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Pesan Anda</FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder="Tuliskan pesan Anda di sini..."
                                    className="min-h-[120px]"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit" className="w-full" disabled={isPending}>
                    {isPending ? (
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    ) : (
                        <Send className="mr-2 h-4 w-4" />
                    )}
                    {isPending ? 'Mengirim...' : 'Kirim Pesan'}
                </Button>
            </form>
        </Form>
    );
}