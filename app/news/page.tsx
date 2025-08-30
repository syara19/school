import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { newsData } from "@/lib/data";
import { Calendar, User } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
    title: "News",
  };
  

export default function News() {
    return (
        <div className="flex flex-col">
            <section className="bg-primary text-primary-foreground">
                <div className="container mx-auto px-4 py-16 text-center">
                    <h1 className="text-4xl font-bold md:text-5xl ">Berita & Pengumuman</h1>
                    <p className="mx-auto mt-4 max-w-2xl text-lg">
                        Informasi terbaru, prestasi, dan acara dari Lorem School.
                    </p>
                </div>
            </section>

            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {newsData.map((news) => (
                        <Card
                            key={news.id}
                            className="flex pt-0 flex-col overflow-hidden transition-shadow hover:shadow-xl"
                        >
                            <div className="relative h-56 w-full">
                                <Image
                                    src={news.imageUrl}
                                    alt={news.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <CardHeader>
                                <CardTitle className="font-headline">{news.title}</CardTitle>
                                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 pt-2 text-xs text-muted-foreground">
                                    <div className="flex items-center gap-1.5">
                                        <Calendar className="h-3.5 w-3.5" />
                                       <p>{news.date}</p>
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <User className="h-3.5 w-3.5" />
                                        <span>{news.author}</span>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <p className="text-sm text-muted-foreground">
                                    {news.description}
                                </p>
                            </CardContent>
                            <CardFooter>
                                <Button asChild variant="secondary" className="w-full">
                                    <Link href="#">Baca Selengkapnya</Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}