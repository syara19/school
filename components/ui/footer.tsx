import { Facebook, Instagram, School, Twitter, Youtube } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="border-t bg-secondary">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
                    <div className="md:col-span-2">
                        <Link href="/" className="mb-4 flex items-center space-x-2">
                            <School  className="h-10 w-10 text-primary" />
                            <span className="font-bold text-primary text-3xl">Lorem School</span>
                        </Link>
                        <div className=" ml-2 flex-col flex space-x-4 gap-6 md:mt-0">
                            <Link href="#" className="flex text-muted-foreground hover:text-primary">
                                <Twitter className="h-5 w-5" />
                                <span className="ml-2">@LoremSchool</span>
                            </Link>
                            <Link href="#" className="flex text-muted-foreground hover:text-primary">
                                <Facebook className="h-5 w-5" />
                                <span className="ml-2">Lorem School</span>
                            </Link>
                            <Link href="#" className="flex text-muted-foreground hover:text-primary">
                                <Instagram className="h-5 w-5" />
                                <span className="ml-2">lorem_school</span>
                            </Link>
                            <Link href="#" className="flex text-muted-foreground hover:text-primary">
                                <Youtube className="h-5 w-5" />
                                <span className="ml-2">Lorem School</span>
                            </Link>
                        </div>

                    </div>
                    <div>
                        <h3 className="font-semibold tracking-wider text-foreground">
                            Tautan Cepat
                        </h3>
                        <ul className="mt-4 space-y-2">
                            <li>
                                <Link href="/about" className="text-muted-foreground hover:text-primary">
                                    Tentang Kami
                                </Link>
                            </li>
                            <li>
                                <Link href="/activities" className="text-muted-foreground hover:text-primary">
                                    Kegiatan
                                </Link>
                            </li>
                            <li>
                                <Link href="/news" className="text-muted-foreground hover:text-primary">
                                    Berita
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-muted-foreground hover:text-primary">
                                    Kontak
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold tracking-wider text-foreground">
                            Hubungi Kami
                        </h3>
                        <div className="mt-4 space-y-2 text-muted-foreground">
                            <p>Jl. Pendidikan No. 123, Jakarta, Indonesia</p>
                            <p>Email: info@loremschool.sch.id</p>
                            <p>Telepon: (021) 123-4567</p>
                        </div>
                    </div>
                </div>
                <div className="mt-8 flex flex-col items-center justify-center border-t border-border pt-8 md:flex-row">
                    <p className="text-sm text-muted-foreground">
                        &copy; {new Date().getFullYear()} Lorem School.
                    </p>

                </div>
            </div>
        </footer>
    )
}