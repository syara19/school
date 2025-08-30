"use client"

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { activityData } from "@/lib/data";
import { Search } from "lucide-react";
import Image from "next/image";
import { useMemo, useState } from "react";

const allCategories = [
    'semua',
    ...Array.from(new Set(activityData.map((a) => a.category))),
];


export default function Activities() {
    const [search, setSearch] = useState('')
    const [selectedCategory, setSelectedCategory] = useState('semua')
    const filteredActivities = useMemo(() => {
        return activityData.filter((activity) => {
            const matchCategory = selectedCategory === 'semua' || activity.category === selectedCategory;
            const matchesSearch = activity.title.toLowerCase().includes(search.toLowerCase()) || activity.description.toLowerCase().includes(search.toLowerCase());

            return matchCategory && matchesSearch;
        })
    }, [selectedCategory, search])

    return (
        <div className="flex flex-col">
            <section className="bg-primary text-primary-foreground">
                <div className="container mx-auto px-4 py-16 text-center">
                    <h1 className="text-4xl font-bold md:text-5xl ">Kegiatan Sekolah</h1>
                    <p className="mx-auto mt-4 max-w-2xl text-lg">
                        Temukan beragam kegiatan ekstrakurikuler di Lorem School.
                    </p>
                </div>
            </section>

            <div className="container mx-auto px-4 py-12">
                <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center">
                    <div className="relative flex-grow">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                        <Input
                            type="search"
                            placeholder="Cari kegiatan..."
                            className="w-full pl-10"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                        {allCategories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${selectedCategory === category
                                    ? 'border-transparent bg-primary text-primary-foreground'
                                    : 'bg-transparent hover:bg-accent hover:text-accent-foreground'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {filteredActivities.map((activity) => (
                        <Card
                            key={activity.id}
                            className="flex pt-0 flex-col overflow-hidden transition-transform hover:scale-[1.02] hover:shadow-xl"
                        >
                            <div className="relative h-56 w-full">
                                <Image
                                    src={activity.imageUrl}
                                    alt={activity.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <CardHeader>
                                <Badge variant="secondary" className="w-fit">
                                    {activity.category}
                                </Badge>
                                <CardTitle className="pt-2 ">{activity.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <p className="text-sm text-muted-foreground">
                                    {activity.description}
                                </p>
                            </CardContent>
                            <CardFooter>
                                <p className="text-xs font-semibold text-primary">
                                    {activity.schedule}
                                </p>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
                {filteredActivities.length === 0 && (
                    <div className="mt-16 text-center">
                        <h3 className="text-xl font-semibold">Tidak Ada Hasil</h3>
                        <p className="text-muted-foreground">
                            Coba ubah kata kunci pencarian atau filter kategori Anda.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}