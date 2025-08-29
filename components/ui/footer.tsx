import { Facebook, Instagram, School, Twitter, Youtube } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="border-t bg-secondary">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
                    <div className="md:col-span-2">
                        <Link href="/" className="mb-4 flex items-center space-x-2">
                            <School className="h-8 w-8 text-primary" />
                            <span className="font-bold text-primary">Lorem School</span>
                        </Link>
                        <p className="mt-4 max-w-md text-muted-foreground">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nisi eius minus maiores minima, inventore modi vero quis. Labore adipisci odio, quasi sit explicabo eveniet expedita doloremque voluptatum laudantium vel.
                        </p>
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
                <div className="mt-8 flex flex-col items-center justify-between border-t border-border pt-8 md:flex-row">
                    <p className="text-sm text-muted-foreground">
                        &copy; {new Date().getFullYear()} Lorem School. 
                    </p>
                    <div className="mt-4 flex space-x-4 md:mt-0">
                        <Link href="#" className="text-muted-foreground hover:text-primary">
                            <Twitter className="h-5 w-5" />
                        </Link>
                        <Link href="#" className="text-muted-foreground hover:text-primary">
                            <Facebook className="h-5 w-5" />
                        </Link>
                        <Link href="#" className="text-muted-foreground hover:text-primary">
                            <Instagram className="h-5 w-5" />
                        </Link>
                        <Link href="#" className="text-muted-foreground hover:text-primary">
                            <Youtube className="h-5 w-5" />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}