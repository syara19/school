import ContactForm from "@/components/ui/contactForm";
import { Mail, MapPin, Phone } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacts",
};

export default function Contact() {
    return (
        <div className="flex flex-col">
          <section className="bg-primary text-primary-foreground">
            <div className="container mx-auto px-4 py-16 text-center">
              <h1 className="text-4xl font-bold md:text-5xl">Hubungi Kami</h1>
              <p className="mx-auto mt-4 max-w-2xl text-lg">
                Kirimkan pertanyaan atau umpan balik anda melalui form di bawah ini.
              </p>
            </div>
          </section>
    
          <section className="container mx-auto px-4 py-16">
            <div className="grid grid-cols-1  rounded-lg bg-card p-8 shadow-lg md:grid-cols-2 md:p-12">
              <div className="flex flex-col ">
                <h2 className="text-2xl font-bold">Informasi Kontak</h2>
                <p className="mt-2 text-muted-foreground">
                  Anda juga bisa menghubungi kami melalui detail kontak berikut.
                </p>
                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Alamat</h3>
                      <p className="text-muted-foreground">
                        Jl. Pendidikan No. 123, Jakarta, 12345, Indonesia
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="mt-1 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Email</h3>
                      <p className="text-muted-foreground">info@loremschool.sch.id</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="mt-1 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Telepon</h3>
                      <p className="text-muted-foreground">(021) 123-4567</p>
                    </div>
                  </div>
                </div>
              </div>
              <div >
                <h2 className="text-2xl mt-10 md:mt-0  font-bold">Kirim Pesan</h2>
                <ContactForm />
              </div>
            </div>
          </section>
        </div>
      );
}