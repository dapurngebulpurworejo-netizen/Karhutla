import { QuizQuestion, IspuLevel, PillarContent } from '../types';

export const PILLARS_CONTENT: PillarContent[] = [
  {
    id: 'penyebab',
    title: 'Faktor Penyebab Karhutla',
    subtitle: 'Mengapa hutan Indonesia terbakar?',
    tagline: 'Faktor Manusia vs Faktor Alami',
    summary:
      'Di Indonesia, lebih dari 99% kebakaran hutan dan lahan dipicu oleh aktivitas manusia, baik disengaja untuk membuka perkebunan maupun karena kelalaian fatal.',
    details: [
      {
        heading: '1. Pembukaan Lahan dengan Membakar (Slash & Burn)',
        body: 'Metode membakar sering dipilih oknum karena murah dan cepat untuk membersihkan semak belukar. Abu pembakaran juga menurunkan keasaman tanah gambut sementara waktu. Namun, api sering tak terkendali dan merambat ke kawasan hutan lindung.',
        isHuman: true,
      },
      {
        heading: '2. Kelalaian dan Kecerobohan Sehari-hari',
        body: 'Membuang puntung rokok menyala di semak kering, pembakaran sampah tak diawasi, atau api unggun perkemahan yang tidak disiram air tuntas hingga bara padam.',
        isHuman: true,
      },
      {
        heading: '3. Fenomena Iklim El Niño & Kemarau Ekstrem',
        body: 'El Niño menyebabkan curah hujan di Indonesia anjlok drastis. Ranting, serasah daun, dan gambut menjadi sangat kering dan mudah terbakar seperti spons bensin saat terkena percikan sekecil apa pun.',
        isHuman: false,
      },
      {
        heading: '4. Pengeringan Lahan Gambut (Drainase Liar)',
        body: 'Kanal buatan yang dibuat tanpa sekat menguras air alami kubah gambut. Gambut yang kering kehilangan sifat alaminya dan rentan terbakar hingga kedalaman berkilo-kilometer di bawah tanah.',
        isHuman: true,
      },
    ],
  },
  {
    id: 'gambut',
    title: 'Keunikan & Bahaya Lahan Gambut',
    subtitle: 'Mengapa karhutla di Riau & Kalimantan sangat sulit dipadamkan?',
    tagline: 'Api Bawah Tanah (Ground Fire)',
    summary:
      'Lahan gambut terbentuk dari tumpukan sisa tumbuhan yang membusuk lambat selama ribuan tahun. Ketebalannya bisa mencapai 1 hingga belasan meter.',
    details: [
      {
        heading: 'Api Menjalar di Bawah Tanah (Ground Fire)',
        body: 'Tidak seperti kebakaran hutan biasa di mana api menyala di pucuk pohon, kebakaran gambut membakar lapis demi lapis di bawah permukaan tanah tanpa nyala api berkobar (hanya membara/smoldering). Api bisa merambat tanpa terlihat sejauh puluhan meter.',
        highlight: 'Api bawah tanah tidak bisa dipadamkan hanya dengan membasahi daun di atasnya.',
      },
      {
        heading: 'Penyimpanan Karbon Raksasa',
        body: 'Gambut Indonesia menyimpan sekitar 57 miliar ton karbon. Saat terbakar, cadangan karbon ini lepas ke atmosfer sebagai gas rumah kaca CO2 dan CH4 (metana), mempercepat krisis iklim global.',
        highlight: 'Emisi karbon gambut setara dengan ratusan pabrik industri besar yang beroperasi serempak.',
      },
      {
        heading: 'Solusi 3R Badan Restorasi Gambut (BRGM)',
        body: 'Pemerintah menerapkan: Rewetting (pembasahan kembali dengan sekat kanal), Revegetation (penanaman kembali vegetasi asli ramah rawa seperti jelutung dan sagu), dan Revitalization (pemberdayaan ekonomi masyarakat tanpa membakar).',
        highlight: 'Kanal harus disekat agar muka air tanah (MAT) tetap terjaga minimal 40 cm dari permukaan.',
      },
    ],
  },
  {
    id: 'dampak',
    title: 'Dampak Ekologis, Sosial & Kesehatan',
    subtitle: 'Siapa saja yang menanggung akibat karhutla?',
    tagline: 'Krisis Multidimensi',
    summary:
      'Kabut asap bukan sekadar gangguan pandangan, tetapi racun udara pembawa partikulat berbahaya yang mengancam generasi muda dan merusak keanekaragaman hayati.',
    details: [
      {
        heading: 'Kesehatan Remaja & Anak (ISPA)',
        body: 'Partikel PM2.5 berdiameter 30 kali lebih kecil dari sehelai rambut. Partikel ini lolos dari bulu hidung dan langsung masuk ke alveolus paru-paru serta aliran darah, memicu Infeksi Saluran Pernapasan Akut (ISPA), asma, dan penurunan konsentrasi belajar.',
      },
      {
        heading: 'Ancaman Kepunahan Satwa Langka',
        body: 'Orangutan sumatera dan kalimantan, harimau sumatera, serta beruang madu kehilangan rumah. Banyak anak orangutan terpisah dari induknya, mengalami luka bakar, atau masuk ke perkampungan warga mencari makan.',
      },
      {
        heading: 'Kelumpuhan Pendidikan & Perekonomian',
        body: 'Ribuan sekolah terpaksa diliburkan selama berminggu-minggu demi keselamatan murid. Bandara tutup karena jarak pandang di bawah 500 meter, dan aktivitas pasar lumpuh total.',
      },
      {
        heading: 'Krisis Hubungan Diplomatik Antarnegara',
        body: 'Kabut asap (transboundary haze) terbang terbawa angin melintasi perbatasan ke Malaysia dan Singapura, menimbulkan kerugian bilateral dan citra lingkungan internasional.',
      },
    ],
  },
  {
    id: 'mitigasi',
    title: 'Strategi Penanggulangan & Kesiapsiagaan',
    subtitle: 'Bagaimana negara dan masyarakat memadamkan serta mencegah karhutla?',
    tagline: 'Sinergi Jagawana & Sains',
    summary:
      'Penanggulangan karhutla memadukan sains cuaca modern, teknologi satelit pemantau hotspot, armada Manggala Agni di darat, dan kepatuhan hukum.',
    details: [
      {
        heading: 'Deteksi Dini Satelit Hotspot (LAPAN / BRIN / BMKG)',
        body: 'Satelit Terra, Aqua, dan NOAA memindai suhu anomali permukaan bumi dua kali sehari. Jika titik panas (hotspot) terdeteksi dengan tingkat kepercayaan tinggi (>80%), tim darat segera digerakkan sebelum api meluas.',
      },
      {
        heading: 'Pasukan Elit Manggala Agni & Relawan MPA',
        body: 'Manggala Agni adalah brigade pengendalian karhutla Kementerian LHK. Mereka memanggul mesin pompa jinjing dan selang berkilo-kilometer ke tengah rawa untuk pendinginan tanah gambut (mopping up).',
      },
      {
        heading: 'Operasi Udara: Water Bombing & TMC',
        body: 'Helikopter menyiram 4.000 liter air sekali bom (water bombing) ke titik terpencil. Operasi Teknologi Modifikasi Cuaca (TMC) menaburkan garam NaCl ke awan kumulonimbus untuk memicu hujan buatan.',
      },
      {
        heading: 'Sekat Bakar (Firebreak)',
        body: 'Membuat koridor bersih selebar 3 hingga 10 meter yang bebas dari dedaunan dan rumput kering agar lidah api kehabisan bahan bakar saat menjalar ke arah permukiman.',
      },
    ],
  },
];

export const ISPU_SCALE: IspuLevel[] = [
  {
    range: [0, 50],
    category: 'Baik (Good)',
    color: 'text-emerald-700',
    bgColor: 'bg-emerald-50',
    borderColor: 'border-emerald-200',
    healthImpact: 'Tingkat mutu udara yang sangat baik, tidak memberikan efek negatif terhadap manusia ataupun hewan.',
    schoolRecommendation: 'Siswa dapat berolahraga dan belajar di luar ruangan dengan bebas.',
  },
  {
    range: [51, 100],
    category: 'Sedang (Moderate)',
    color: 'text-blue-700',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    healthImpact: 'Mutu udara masih dapat diterima pada kesehatan manusia, hewan, dan tumbuhan.',
    schoolRecommendation: 'Kelompok siswa sangat sensitif (penderita asma aktif) disarankan mengurangi aktivitas fisik berlebih di luar kelas.',
  },
  {
    range: [101, 200],
    category: 'Tidak Sehat (Unhealthy)',
    color: 'text-amber-800',
    bgColor: 'bg-amber-50',
    borderColor: 'border-amber-200',
    healthImpact: 'Mulai merugikan kesehatan pada sejumlah segmen populasi yang rentan, seperti anak-anak dan lansia.',
    schoolRecommendation: 'Gunakan masker (minimal masker bedah atau KF94) saat di luar kelas. Jam olahraga lapangan dialihkan ke dalam ruangan.',
  },
  {
    range: [201, 300],
    category: 'Sangat Tidak Sehat (Very Unhealthy)',
    color: 'text-rose-700',
    bgColor: 'bg-rose-50',
    borderColor: 'border-rose-200',
    healthImpact: 'Dapat meningkatkan risiko gangguan pernapasan dan kardiovaskular pada seluruh populasi yang beraktivitas.',
    schoolRecommendation: 'Wajib masker respirator standar N95/KN95. Pembelajaran luar ruang dihentikan total. Ventilasi sekolah ditutup rapat.',
  },
  {
    range: [301, 500],
    category: 'Berbahaya (Hazardous)',
    color: 'text-purple-900',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-300',
    healthImpact: 'Tingkat polusi berbahaya yang dapat menyebabkan iritasi parah dan gangguan pernapasan akut secara luas.',
    schoolRecommendation: 'Sekolah diliburkan atau belajar daring dari rumah (PJJ). Warga dianjurkan tetap di dalam ruangan dengan air purifier atau kain basah.',
  },
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: 'Berdasarkan konsep Segitiga Api (Fire Triangle), mengapa penyemprotan air oleh tim pemadam kebakaran dapat memadamkan api?',
    options: [
      'Air menghilangkan kandungan oksigen di udara sekitar',
      'Air menurunkan suhu bahan bakar hingga di bawah titik nyala api',
      'Air bereaksi secara kimiawi mengubah karbon menjadi abu',
      'Air memecah rantai bahan bakar organik menjadi hidrogen'
    ],
    correctAnswer: 1,
    explanation:
      'Air memiliki kalor jenis dan kalor uap yang sangat tinggi. Saat disemprotkan ke api, air menyerap panas dalam jumlah besar sehingga menurunkan suhu bahan bakar ke bawah titik nyala (ignition temperature), meruntuhkan pilar "Panas" pada Segitiga Api.',
    curriculumTopic: 'Fisika & Kimia Pembakaran'
  },
  {
    id: 2,
    question: 'Mengapa kebakaran pada lahan gambut (peatland) di Sumatera dan Kalimantan jauh lebih sulit dipadamkan dibandingkan kebakaran hutan di tanah mineral biasa?',
    options: [
      'Pohon di lahan gambut mengandung zat lilin yang memicu ledakan',
      'Api menjalar lambat di bawah permukaan tanah (ground fire) hingga kedalaman berakar tanpa kobaran api tampak di permukaan',
      'Lahan gambut tidak memiliki akses aliran sungai sama sekali',
      'Kandungan oksigen di dalam tanah gambut 5 kali lebih pekat dibanding udara luar'
    ],
    correctAnswer: 1,
    explanation:
      'Gambut tersusun dari bahan organik terurai yang menumpuk tebal hingga bermeter-meter. Api di lahan gambut sering berupa "ground fire" (api bawah tanah) yang membara perlahan tanpa lidah api besar, terlindung di dalam tanah sehingga air semprotan permukaan sering menguap sebelum mencapai dasar bara api.',
    curriculumTopic: 'Ilmu Bumi & Ekologi Tanah'
  },
  {
    id: 3,
    question: 'Partikulat halus dalam asap kebakaran hutan yang paling berbahaya bagi sistem pernapasan siswa berukuran PM2.5. Apa arti dari PM2.5?',
    options: [
      'Gas polutan yang memiliki berat massa 2,5 gram per meter kubik',
      'Partikel padat atau cair mikroskopis dengan diameter kurang dari 2,5 mikrometer',
      'Zat radioaktif dengan waktu paruh pembusukan 2,5 tahun',
      'Indeks kepekatan asap pada suhu 25 derajat celcius'
    ],
    correctAnswer: 1,
    explanation:
      'PM2.5 singkatan dari Particulate Matter 2.5 µm (mikrometer). Karena diameternya sangat renik (sepertigapuluh tebal rambut manusia), PM2.5 tidak dapat disaring bulu hidung dan mampu menembus hingga kantung udara (alveolus) di paru-paru.',
    curriculumTopic: 'Biologi Sistem Pernapasan Manusia'
  },
  {
    id: 4,
    question: 'Metode pembuatan "Sekat Bakar" (Firebreak) bertujuan menghentikan laju kebakaran hutan dengan cara memutus salah satu unsur segitiga api, yaitu:',
    options: [
      'Oksigen',
      'Panas',
      'Bahan Bakar',
      'Tekanan Udara'
    ],
    correctAnswer: 2,
    explanation:
      'Sekat bakar dibuat dengan membersihkan jalur vegetasi, semak, dan dedaunan kering selebar beberapa meter. Saat api merambat hingga ke sekat tersebut, api terhenti karena kehabisan bahan bakar (fuel).',
    curriculumTopic: 'Manajemen Bencana & Segitiga Api'
  },
  {
    id: 5,
    question: 'Hubungan yang tepat antara fenomena iklim global El Niño dengan peningkatan frekuensi karhutla di Indonesia adalah:',
    options: [
      'El Niño meningkatkan kelembapan udara sehingga petir sering menyambar hutan',
      'El Niño menyebabkan curah hujan di wilayah Indonesia menurun drastis dan memperpanjang musim kemarau',
      'El Niño memicu kenaikan air laut yang mengikis vegetasi mangrove',
      'El Niño memperlambat kecepatan angin sehingga asap terperangkap di gunung'
    ],
    correctAnswer: 1,
    explanation:
      'Saat terjadi El Niño, suhu permukaan laut di bagian timur Pasifik menghangat, menyebabkan massa udara basah bergeser menjauhi wilayah Indonesia. Akibatnya curah hujan anjlok, hutan menjadi sangat kering, dan potensi kebakaran melonjak tajam.',
    curriculumTopic: 'Geografi & Klimatologi SMP'
  },
  {
    id: 6,
    question: 'Jika stasiun pemantau kualitas udara menunjukkan nilai ISPU sebesar 245 (kategori Sangat Tidak Sehat), tindakan pencegahan yang paling tepat bagi siswa SMP adalah:',
    options: [
      'Tetap bersepeda santai dengan masker kain tipis',
      'Mengurangi jam tidur malam agar daya tahan tubuh terlatih',
      'Menghindari seluruh kegiatan fisik luar ruang, menutup jendela, dan wajib menggunakan masker bersertifikasi N95/KF94 jika keluar rumah',
      'Membakar sampah di halaman belakang sekolah agar asapnya menetralkan racun udara'
    ],
    correctAnswer: 2,
    explanation:
      'Pada rentang ISPU 201-300 (Sangat Tidak Sehat), udara mengandung racun dan partikulat pekat yang dapat memicu ISPA mendadak. Seluruh aktivitas fisik di luar harus dihentikan, ventilasi ditutup, dan perlindungan wajib masker N95 atau KF94 yang mampu menyaring partikel mikro.',
    curriculumTopic: 'Kesehatan Lingkungan & Mitigasi'
  },
  {
    id: 7,
    question: 'Apa peran "Sekat Kanal" (Canal Blocking) yang dibangun oleh Badan Restorasi Gambut dan Mangrove (BRGM) di bekas lahan gambut yang terdegradasi?',
    options: [
      'Memudahkan kapal patroli lewat memadamkan api di musim hujan',
      'Menahan laju aliran air agar kubah gambut tetap basah dan tidak mengering saat musim kemarau',
      'Menampung ikan air tawar budidaya warga sekitar hutan',
      'Mengeringkan rawa secara cepat agar siap ditanami sawit'
    ],
    correctAnswer: 1,
    explanation:
      'Kanal-kanal liar yang dibuka sebelumnya menyebabkan air gambut terkuras habis. Dengan membangun sekat kanal (canal block), air tertahan sehingga tinggi muka air tanah tetap terjaga basah (Rewetting), mencegah gambut menjadi bahan bakar kering yang mudah terbakar.',
    curriculumTopic: 'Konservasi Lingkungan Hidup'
  },
  {
    id: 8,
    question: 'Ditinjau dari rantai makanan dan keseimbangan ekosistem, dampak jangka panjang hilangnya satwa karnivora puncak seperti Harimau Sumatera akibat kebakaran hutan adalah:',
    options: [
      'Jumlah pohon di hutan bertambah lebat secara otomatis',
      'Terjadi ledakan populasi herbivora atau hama seperti babi hutan yang dapat merusak ladang pangan warga',
      'Tanah hutan menjadi lebih subur karena tidak ada hewan besar',
      'Suhu udara di dalam hutan menurun hingga derajat beku'
    ],
    correctAnswer: 1,
    explanation:
      'Dalam ekosistem hutan hujan tropis, karnivora puncak (predator seperti harimau) mengendalikan populasi herbivora dan omnivora. Bila predator punah atau terusir karhutla, populasi mangsa (seperti babi hutan dan rusa) membeludak tak terkendali dan menjadi hama perusak tanaman pangan masyarakat.',
    curriculumTopic: 'Ekologi & Rantai Makanan'
  }
];

export const CURATED_TUTOR_QA = [
  {
    q: 'Mengapa asap kebakaran hutan warnanya kuning kecokelatan dan berbau menyengat?',
    a: 'Asap karhutla terutama di lahan gambut dihasilkan dari proses pembakaran tidak sempurna (smoldering) materi organik. Asap ini mengandung senyawa karbon monoksida (CO), sulfur dioksida (SO2), senyawa organik volatil (VOC), tar kayu, dan partikel PM2.5 pekat yang menyerap dan membiaskan cahaya matahari ke spektrum kuning jingga kecokelatan.',
  },
  {
    q: 'Bagaimana cara kerja hujan buatan atau TMC?',
    a: 'Teknologi Modifikasi Cuaca (TMC) tidak menciptakan awan dari ruang hampa, melainkan "menyemai" awan potensial jenis Kumulonimbus. Pesawat menaburkan butiran garam halus (NaCl) ke dalam awan. Garam ini bertindak sebagai zat higroskopis yang menarik butir-butir uap air untuk bergabung menjadi tetesan air yang lebih berat, sehingga lekas jatuh menjadi hujan sebelum awan tersebut buyar terbawa angin kencang.',
  },
  {
    q: 'Apa bedanya masker kain biasa dengan masker N95 saat kabut asap?',
    a: 'Pori-pori kain biasa berukuran sekitar 100 hingga 200 mikrometer, sehingga partikel asap PM2.5 (yang berukuran hanya 2,5 mikrometer) dengan mudah melewatinya. Sedangkan masker respirator N95 memiliki jalinan serat elektrostatis mikro yang mampu menyaring minimal 95% partikel hingga ukuran 0,3 mikrometer, melindungi alveolus paru-paru secara nyata.',
  },
  {
    q: 'Bolehkah petani membakar sampah dedaunan di kebun saat musim kemarau?',
    a: 'Sangat tidak dianjurkan dan berisiko pidana. Saat musim kemarau, kelembapan udara sangat rendah dan hembusan angin kencang bisa menerbangkan percikan bara (firebrands/ember) hingga ratusan meter ke semak kering di sekelilingnya, memicu kebakaran besar yang tidak terkendali.',
  },
];
