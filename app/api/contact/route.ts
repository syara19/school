import { NextResponse } from "next/server";
import { formSchema } from "@/lib/validator";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import nodemailer from "nodemailer";

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

    const transporter = nodemailer.createTransport({
      service: "gmail",
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: validatedData.email,
      to: process.env.EMAIL_USER,
      subject: `Pesan Baru dari ${validatedData.name}`,
      html: `
        <h2>Pesan Kontak Baru</h2>
        <p><strong>Nama:</strong> ${validatedData.name}</p>
        <p><strong>Email:</strong> ${validatedData.email}</p>
        <p><strong>Pesan:</strong></p>
        <p>${validatedData.message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

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
