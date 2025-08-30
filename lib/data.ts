import { NewsType } from "@/types/article";

export const newsData: NewsType[] = [
  {
    id: 1,
    title: "Pelatihan Futsal Rutin Ekstrakurikuler",
    description:
      "Ekstrakurikuler futsal mengadakan pelatihan rutin setiap sore untuk mempersiapkan tim dalam ajang turnamen antar sekolah. Latihan fokus pada strategi tim dan teknik dasar.",
    date: "2023-09-15",
    imageUrl: "/futsal.jpg",
    author: "Tim Redaksi",
    tags: ["Futsal", "Ekstrakurikuler", "Olahraga"],
  },
  {
    id: 2,
    title: "Ekstrakurikuler Robotik Berhasil Raih Juara 1 Kompetisi Nasional",
    description:
      "Tim robotik sekolah berhasil meraih Juara 1 dalam Kompetisi Robotik Nasional. Prestasi ini menunjukkan dedikasi dan inovasi siswa di bidang teknologi.",
    date: "2023-10-20",
    imageUrl: "/robotic.jpg",
    author: "Tim Redaksi",
    tags: ["Robotik", "Teknologi", "Prestasi"],
  },
  {
    id: 3,
    title: "Pergelaran Seni Teater 'Mimpi Anak Negeri' Pukau Penonton",
    description:
      "Anggota ekskul teater sukses mementaskan drama 'Mimpi Anak Negeri'. Pertunjukan ini mendapat sambutan hangat berkat akting dan naskah yang mendalam.",
    date: "2023-11-05",
    imageUrl: "/theater.jpg",
    author: "Tim Redaksi",
    tags: ["Teater", "Seni", "Pementasan"],
  },
  {
    id: 4,
    title: "Ekstrakurikuler Band 'The Sound' Merilis Single Perdana",
    description:
      "Ekskul band sekolah 'The Sound' resmi merilis single perdana mereka yang berjudul 'Langkah Baru'. Lagu ini dapat didengarkan di berbagai platform musik.",
    date: "2023-12-10",
    imageUrl: "/band.jpg",
    author: "Tim Redaksi",
    tags: ["Band", "Musik", "Seni"],
  },
  {
    id: 5,
    title: "Kejuaraan Bulu Tangkis Tingkat Sekolah Sukses Digelar",
    description:
      "Kejuaraan bulu tangkis antar siswa telah selesai dengan meriah. Acara ini menjadi ajang bagi para atlet muda untuk menunjukkan bakat dan sportivitas mereka.",
    date: "2024-01-15",
    imageUrl: "/badminton.jpg",
    author: "Tim Redaksi",
    tags: ["Bulu Tangkis", "Turnamen", "Olahraga"],
  },
];

export const activityData = [
  {
    id: 1,
    title: "Futsal",
    description:
      "Ekstrakurikuler futsal adalah salah satu kegiatan non-akademik yang sangat digemari dan menjadi wadah bagi para siswa untuk menyalurkan bakat serta minat mereka dalam olahraga sepak bola ruangan. Futsal merupakan olahraga tim yang mengandalkan kecepatan, kelincahan, dan kerja sama tim yang solid di lapangan berukuran kecil.",
    imageUrl: "/futsal.jpg",
    schedule: "Senin, Rabu, dan Jumat",
    category: "olahraga",
  },
  {
    id: 2,
    title: "Basket",
    description:
      "Ekstrakurikuler bola basket adalah salah satu kegiatan non-akademik yang sangat populer dan menjadi wadah bagi siswa untuk mengembangkan minat dan bakat mereka dalam olahraga ini. Basket adalah olahraga tim yang mengandalkan koordinasi, kelincahan, dan strategi untuk mencetak poin dengan memasukkan bola ke dalam ring lawan.",
    imageUrl: "/basket.jpg",
    schedule: "Senin, Rabu, dan Jumat",
    category: "olahraga",
  },
  {
    id: 3,
    title: "Voli",
    description:
      "Ekstrakurikuler bola voli adalah wadah bagi para siswa untuk menyalurkan minat dan bakat mereka dalam salah satu olahraga tim paling strategis ini. Voli adalah olahraga yang mengandalkan kekuatan melompat, ketangkasan, dan koordinasi tim yang sangat baik untuk mencetak poin.",
    imageUrl: "/volley.jpg",
    schedule: "Senin, Rabu, dan Jumat",
    category: "olahraga",
  },
  {
    id: 4,
    title: "Bulutangkis",
    description:
      "Ekstrakurikuler bulu tangkis adalah kegiatan yang sempurna bagi siswa yang ingin mengasah keterampilan motorik dan strategi individu mereka. Bulu tangkis adalah olahraga raket yang menuntut kelincahan, kecepatan, dan ketepatan dalam setiap gerakan.",
    imageUrl: "/badminton.jpg",
    schedule: "Senin, Rabu, dan Jumat",
    category: "olahraga",
  },
  {
    id: 5,
    title: "Robotik",
    description:
      "Ekstrakurikuler robotik adalah kegiatan yang dirancang untuk memperkenalkan siswa pada dunia rekayasa, pemrograman, dan teknologi secara langsung. Dalam ekskul ini, siswa tidak hanya belajar teori, tetapi juga mendapatkan pengalaman praktis dalam merancang, membangun, dan memprogram robot.",
    imageUrl: "/robotic.jpg",
    schedule: "Senin, Rabu, dan Jumat",
    category: "akademik",
  },
  {
    id: 6,
    title: "Theater",
    description:
      "Ekstrakurikuler teater adalah wadah bagi siswa untuk mengeksplorasi dan mengembangkan bakat mereka dalam seni peran dan pementasan. Ini adalah tempat di mana imajinasi menjadi kenyataan, dan siswa belajar untuk menghayati karakter serta berkomunikasi secara efektif di atas panggung.",
    imageUrl: "/theater.jpg",
    schedule: "Senin, Rabu, dan Jumat",
    category: "seni dan budaya",
  },
  {
    id: 7,
    title: "Band",
    description:
      "Ekstrakurikuler band adalah wadah bagi siswa untuk mengeksplorasi dan mengembangkan minat serta bakat mereka dalam dunia musik. Kegiatan ini tidak hanya melatih kemampuan bermusik secara individu, tetapi juga menekankan pentingnya kekompakan dan harmonisasi dalam sebuah tim.",
    imageUrl: "/band.jpg",
    schedule: "Senin, Rabu, dan Jumat",
    category: "seni dan budaya",
  },
];
