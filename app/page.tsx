import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { newsData } from "@/lib/data";
import { Calendar, User } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home",
};

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="relative h-[60vh] min-h-[400px] w-full">
        <Image
          src="/hero.jpg"
          fill
          alt="hero"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-primary/70" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-primary-foreground">
          <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
            Selamat Datang di Lorem School
          </h1>
          <p className="mt-4 max-w-2xl text-lg md:text-xl">
            Membentuk Siswa Berkualitas
          </p>
          <Button asChild className="mt-8" size="lg">
            <Link href="/about">Jelajahi Lebih Lanjut</Link>
          </Button>
        </div>
      </section>
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl font-bold md:text-4xl">
            Berita Terbaru
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-muted-foreground">
            Informasi, prestasi, dan acara terbaru dari Lorem School.
          </p>
          <div className="mt-12">
            <Carousel opts={{  loop: true, duration: 10}} >
              <CarouselContent>
                {newsData.map((news) => (
                  <CarouselItem
                    key={news.id}
                    className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                      <Card className="flex h-full pt-0 flex-col overflow-hidden transition-shadow hover:shadow-xl">
                        <div className="relative h-56 w-full">
                          <Image
                            src={news.imageUrl}
                            alt={news.title}
                            fill
                            className="object-cover"
                           
                          />
                        </div>
                        <CardHeader>
                          <CardTitle className="line-clamp-2 h-14 text-xl">
                            {news.title}
                          </CardTitle>
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
                          <p className="text-sm text-muted-foreground line-clamp-3">
                            {news.description}
                          </p>
                        </CardContent>
                        <CardFooter>
                          <Button
                            asChild
                            variant="secondary"
                            className="w-full"
                          >
                            <Link href="/news">Baca Selengkapnya...</Link>
                          </Button>
                        </CardFooter>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="ml-12" />
              <CarouselNext className="mr-12" />
            </Carousel>
          </div>
        </div>
      </section>
    </div>
  );
}
