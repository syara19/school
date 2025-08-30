import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { FlagTriangleRight, Lightbulb, Target } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About",
  };


const values = [
    {
        icon: <Target className="h-8 w-8 text-primary" />,
        title: 'Misi',
        description:
            'Menyediakan pendidikan berkualitas yang relevan dengan tantangan global, mengembangkan potensi setiap siswa secara maksimal, dan membentuk individu yang berkarakter, inovatif, serta berjiwa pemimpin.',
    },
    {
        icon: <Lightbulb className="h-8 w-8 text-primary" />,
        title: 'Visi ',
        description:
            'Menjadi institusi pendidikan terdepan yang menghasilkan lulusan unggul, berdaya saing global, dan mampu memberikan kontribusi positif bagi masyarakat dunia.',
    },
    {
        icon: <FlagTriangleRight className="h-8 w-8 text-primary" />,
        title: 'Tujuan',
        description:
            'Mencerdaskan dan mengembangkan potensi setiap siswa secara maksimal, serta membentuk individu yang berkarakter, inovatif, serta berjiwa pemimpin.',
    },
]

export default function About() {
    return (
        <div className="flex flex-col ">
            <section className="bg-primary text-primary-foreground">
                <div className="container mx-auto px-4 py-16 text-center">
                    <h1 className="text-4xl font-bold md:text-5xl ">Tentang Lorem School</h1>
                    <p className="mx-auto mt-4 max-w-2xl text-lg">
                        Visi, Misi, dan Tujuan Kami
                    </p>
                </div>
            </section>

            <section className="py-16 md:py-24 mx-20">
                <div className="container mx-auto px-4">
                    <div className=" ">
                        <div className="mb-15">
                            <h2 className="text-3xl font-bold ">Sejarah Singkat</h2>
                            <p className="mt-4 text-muted-foreground">
                                Lorem School merupakan salah satu Sekolah Menengah Kejuruan Negeri (SMK) Kelompok Teknologi dan Industri atau dahulu dikenal dengan nama Sekolah Teknologi Menengah Negeri (STM N) Bogor, didirikan pada tahun 1963, dan SK-nya tanggal 5 Oktober 1965 Nomor : 137/DIRPT/BI/65 dan Nomor Statistik Sekolah (NSS) 321026101001. berlokasi pertama kali di daerah Sempur kemudian Gang Aut daerah Jalan Surya Kencana selanjutnya pindah ke Jalan Pemuda No. 28, dan terakhir sampai dengan sekarang di Jalan Tanah Baru No. 1 Bogor Utara ( sekarang Jalan Pangeran Sogiri No. 404 Tanah Baru ) Kota Bogor dengan menempati lokasi areal kurang lebih 4 Ha (+-32.123 m2). Rintisan dan latar belakang berdirinya SMK Negeri 2 Bogor ini karena adanya kebutuhan yang sangat mendesak, permintaan masyarakat, dan dunia industri serta dunia usaha akan adanya sekolah kejuruan, dan hal mendesak lainnya yang meliputi :
                                Banyaknya industri yang berdiri di sekitar wilayah Bogor
                                Belum adanya sekolah kejuruan
                                Banyaknya minat tamatan SMP / SLTP yang ingin melanjutkan ke sekolah kejuruan
                                Permintaan akan tenaga kerja tingkat keahlian menengah baik dari dunia usaha maupun dunia industri
                                Banyaknya tenaga kerja pada industri yang berasal dari luar wilayah Bogor
                            </p>
                        </div>
                        <h1 className="text-3xl mb-4 font-bold ">Lokasi</h1>
                        <div className="flex justify-center md:items-center">
                            <iframe className="lg:w-full md:w-auto" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1015224.8609124285!2d106.21971076562498!3d-6.3001985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f145bb7d5693%3A0xd86350118d3669ee!2sLorem%20Ipsum%20Digital%20HQ!5e0!3m2!1sid!2sid!4v1756499855494!5m2!1sid!2sid" width="800" height="600" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-secondary py-16 md:py-24">
                <div className="container mx-auto px-20">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                        {values.map((value) => (
                            <div key={value.title} className="flex flex-col items-center text-center">
                                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-background">
                                    {value.icon}
                                </div>
                                <h3 className="mt-6 text-xl font-semibold ">{value.title}</h3>
                                <p className="mt-2 text-muted-foreground">
                                    {value.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 mx-20 md:py-24">
                <div className="container mx-auto px-4">
                    <h1 className="text-3xl font-bold mb-4">Hasil Akreditasi</h1>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[100px]">Tahun</TableHead>
                                <TableHead className="w-[100px]">Jurusan</TableHead>
                                <TableHead className="w-[100px]">Nilai</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell className="font-medium">2021</TableCell>
                                <TableCell className="font-medium">Akuntansi dan Keuangan Lembaga</TableCell>
                                <TableCell className="font-medium">A</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium">2021</TableCell>
                                <TableCell className="font-medium">Otomatisasi dan Tata Kelola Perkantoran</TableCell>
                                <TableCell className="font-medium">A</TableCell>
                            </TableRow>
                        </TableBody>
                            
                    </Table>
                </div>
            </section>
        </div>
    );
}