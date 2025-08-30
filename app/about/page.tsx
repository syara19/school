import { FlagTriangleRight, Lightbulb, Target } from "lucide-react";


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
        <div className="flex flex-col">
            <section className="bg-primary text-primary-foreground">
                <div className="container mx-auto px-4 py-16 text-center">
                    <h1 className="text-4xl font-bold md:text-5xl ">Tentang Lorem School</h1>
                    <p className="mx-auto mt-4 max-w-2xl text-lg">
                        Visi, Misi, dan Tujuan Kami
                    </p>
                </div>
            </section>

            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className=" ">
                        <div className="mb-15">
                            <h2 className="text-3xl font-bold ">Sejarah Singkat</h2>
                            <p className="mt-4 text-muted-foreground">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod omnis magnam recusandae doloremque voluptas quibusdam. Quos dolor modi corporis inventore magnam quis eligendi, incidunt ducimus, mollitia nihil asperiores, alias provident.
                                Quae, itaque illum labore animi, ex provident nostrum neque, ut et recusandae debitis atque suscipit architecto iusto fuga doloremque perspiciatis quia id dolor ipsum! Sequi a veritatis suscipit aut autem.
                                Veritatis deserunt blanditiis maxime autem consequuntur, corporis praesentium accusamus exercitationem! Ab, neque tenetur, commodi excepturi, assumenda illo rerum quos vero itaque cum corrupti accusantium mollitia nobis. Adipisci natus officiis iure!
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
                <div className="container mx-auto px-4">
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

            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <h1 className="text-3xl font-bold mb-4">Penghargaan</h1>
                    <p className="text-muted-foreground">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero eius aperiam deleniti quia fugit perspiciatis modi, fugiat exercitationem ipsa similique reiciendis sed. Voluptate repellendus possimus eum dolores veniam dolorem reprehenderit?
                        Doloribus magni voluptas perferendis suscipit repellat distinctio nobis itaque recusandae ducimus? Commodi laborum est aliquam debitis, enim eius impedit deleniti, ab ullam, at unde pariatur dicta ipsum libero dolor optio.
                        Consequuntur blanditiis accusantium sunt aut corporis harum ut distinctio nemo, explicabo possimus enim officiis maxime quia cum praesentium? Incidunt rem commodi nulla vero dolore neque ad iure accusamus, fugiat dolorem.
                        Iste temporibus facilis obcaecati, ipsa voluptas quis amet hic ipsam illum nam vel nesciunt sunt sapiente facere earum enim odio id maxime commodi sint officiis sed, quae alias ullam. Vel.
                        Non, obcaecati quaerat? Repellendus optio praesentium rerum, perferendis aperiam assumenda aspernatur mollitia similique rem esse, ipsum nostrum id. Aperiam, facilis ut nisi minima corrupti illum explicabo facere accusantium animi non.</p>
                </div>
            </section>
        </div>
    );
}