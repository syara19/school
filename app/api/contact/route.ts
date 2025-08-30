import { NextResponse } from "next/server";
import { formSchema } from "@/lib/validator";
import { z } from "zod";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validatedData = formSchema.parse(body);

    await prisma.contactMessage.create({
      data: {
        name: validatedData.name,
        email: validatedData.email,
        subject: validatedData.subject ?? "",
        message: validatedData.message,
      },
    });

    return NextResponse.json(
      { success: true, message: "Pesan berhasil dikirim!" },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, message: "Data tidak valid." },
        { status: 400 }
      );
    }
    console.error("Gagal menyimpan pesan:", error);
    return NextResponse.json(
      { success: false, message: "Gagal mengirim pesan. Silakan coba lagi." },
      { status: 500 }
    );
  }
}

export async function GET() {
  const messages = await prisma.contactMessage.findMany();
  return NextResponse.json(messages);
}