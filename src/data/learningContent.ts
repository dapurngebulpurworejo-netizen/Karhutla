import { QuizQuestion, IspuLevel, PillarContent, Language } from '../types';

export const PILLARS_CONTENT_EN: PillarContent[] = [
  {
    id: 'penyebab',
    title: 'Causes of Wildfires',
    subtitle: 'Why do tropical forests catch fire?',
    tagline: 'Human Factors vs. Natural Climate Drivers',
    summary:
      'In tropical regions, over 99% of forest and land fires are triggered by human activities—either intentional slash-and-burn land clearing or careless negligence.',
    details: [
      {
        heading: '1. Slash-and-Burn Land Clearing',
        body: 'Burning vegetation is frequently chosen by illegal actors because it is cheap, fast, and the ash temporarily lowers peat soil acidity. However, unattended fires quickly spread out of control into conservation areas and protected primary forests.',
        isHuman: true,
      },
      {
        heading: '2. Careless Everyday Negligence',
        body: 'Discarding lit cigarette butts into parched savanna brush, unmonitored trash burning, or leaving campsite campfires smoldering without drenching them completely with water.',
        isHuman: true,
      },
      {
        heading: '3. El Niño & Prolonged Drought Cycles',
        body: 'The El Niño climate phenomenon drastically suppresses tropical rainfall. Leaf litter, dry branches, and peat bogs desiccate into highly flammable tinder, igniting at the slightest spark.',
        isHuman: false,
      },
      {
        heading: '4. Artificial Peat Drainage Canals',
        body: 'Unregulated agricultural drainage canals bleed moisture out of natural peat domes. Dried-out peat loses its moisture sponge properties and becomes prone to underground fires burning deep beneath the surface.',
        isHuman: true,
      },
    ],
  },
  {
    id: 'gambut',
    title: 'Peatland Science & Ground Fires',
    subtitle: 'Why are peat swamp fires so notoriously difficult to extinguish?',
    tagline: 'The Underground Smoldering Fire',
    summary:
      'Tropical peatlands are formed from accumulated organic plant matter decomposing waterlogged over thousands of years, reaching depths of 1 to over 10 meters.',
    details: [
      {
        heading: 'Subsurface Ground Fire (Smoldering)',
        body: 'Unlike crown fires that roar across treetops, peat fires burn beneath the soil surface in a flameless smoldering state. Fires can silently travel underground for dozens of meters without showing flames above.',
        highlight: 'Pouring water on surface leaves is ineffective because the actual fire is burning meters underground.',
      },
      {
        heading: 'Massive Global Carbon Reservoirs',
        body: 'Tropical peatlands store tens of billions of tons of ancient carbon. When burnt, this carbon is unleashed into the atmosphere as dense greenhouse gases (CO2 and methane CH4), accelerating global climate change.',
        highlight: 'A single peat fire can release as much carbon as hundreds of operating industrial factories.',
      },
      {
        heading: 'The 3R Restoration Strategy',
        body: 'Environmental agencies apply: Rewetting (blocking canals with dams to restore water tables), Revegetation (planting native swamp species like Jelutung and Sago), and Revitalization (sustainable community livelihoods without fire).',
        highlight: 'Water table levels must be maintained within 40 cm of the soil surface to prevent spontaneous combustion.',
      },
    ],
  },
  {
    id: 'dampak',
    title: 'Ecological, Health & Social Impacts',
    subtitle: 'Who bears the consequences of wildfire destruction?',
    tagline: 'A Multi-Dimensional Crisis',
    summary:
      'Toxic smoke haze is far more than reduced visibility—it carries microscopic hazardous particulate matter that imperils youth respiratory health and devastates biodiversity.',
    details: [
      {
        heading: 'Student & Youth Health (Acute Respiratory Infections)',
        body: 'Microscopic PM2.5 particles are 30 times smaller than a human hair. They bypass nasal cilia filters and penetrate deep into the alveoli and bloodstream, causing acute respiratory distress, asthma attacks, and cognitive fatigue.',
      },
      {
        heading: 'Endangered Wildlife Habitat Loss',
        body: 'Orangutans, Sumatran tigers, sun bears, and hornbills lose their native jungle homes. Displaced orphan orangutans suffer severe burns or wander into human settlements seeking scarce food.',
      },
      {
        heading: 'School Closures & Economic Paralysis',
        body: 'Schools are forced to suspend in-person classes for weeks to protect students. Regional airports shut down as visibility drops below 500 meters, and economic markets freeze.',
      },
      {
        heading: 'Transboundary Diplomatic Pollution',
        body: 'Atmospheric wind currents carry thick haze across international maritime borders, triggering transboundary diplomatic friction and international environmental emergency alerts.',
      },
    ],
  },
  {
    id: 'mitigasi',
    title: 'Suppression & Modern Mitigation',
    subtitle: 'How do rangers and emergency teams combat wildfires?',
    tagline: 'Modern Science Meets Field Bravery',
    summary:
      'Wildfire management combines satellite thermal hotspot monitoring, cloud-seeding aircraft, firebreak barriers, and specialized forest firefighting brigades.',
    details: [
      {
        heading: 'Early Satellite Hotspot Detection (MODIS / NOAA)',
        body: 'Weather satellites scan Earth surface temperature anomalies twice daily. High-confidence thermal hotspots (>80%) trigger rapid ground dispatch before sparks blossom into conflagrations.',
      },
      {
        heading: 'Elite Forest Firefighter Brigades (Manggala Agni)',
        body: 'Specialized forest firefighters haul portable high-pressure water pumps and heavy hoses miles into swamp wilderness to inject water directly into burning peat roots (mopping-up operations).',
      },
      {
        heading: 'Aerial Operations: Water Bombing & Weather Modification',
        body: 'Helicopters drop 4,000-liter water payloads onto inaccessible blazes. Cloud-seeding aircraft disperse hygroscopic salt (NaCl) particles into cumulonimbus clouds to trigger artificial rain.',
      },
      {
        heading: 'Strategic Firebreaks (Fuel Breaks)',
        body: 'Excavating 3-to-10-meter-wide vegetation-free corridors of bare mineral dirt. When incoming flames hit the cleared corridor, the fire halts because fuel has been eliminated.',
      },
    ],
  },
];

export const PILLARS_CONTENT_ID: PillarContent[] = [
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

export const ISPU_SCALE_EN: IspuLevel[] = [
  {
    range: [0, 50],
    category: 'Good (Healthy)',
    color: 'text-emerald-700',
    bgColor: 'bg-emerald-50',
    borderColor: 'border-emerald-200',
    healthImpact: 'Air quality is considered satisfactory, and air pollution poses little or no risk to humans or animals.',
    schoolRecommendation: 'Students can safely enjoy outdoor sports and physical activities.',
  },
  {
    range: [51, 100],
    category: 'Moderate',
    color: 'text-blue-700',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    healthImpact: 'Air quality is acceptable; however, sensitive individuals may experience mild respiratory symptoms.',
    schoolRecommendation: 'Highly sensitive students (active asthma sufferers) should moderate prolonged heavy outdoor exertion.',
  },
  {
    range: [101, 200],
    category: 'Unhealthy',
    color: 'text-amber-800',
    bgColor: 'bg-amber-50',
    borderColor: 'border-amber-200',
    healthImpact: 'Members of sensitive groups may experience health effects. The general public is likely to be affected.',
    schoolRecommendation: 'Wear masks (surgical or KF94 minimum) outside. Shift physical education classes to indoor gymnasiums.',
  },
  {
    range: [201, 300],
    category: 'Very Unhealthy',
    color: 'text-rose-700',
    bgColor: 'bg-rose-50',
    borderColor: 'border-rose-200',
    healthImpact: 'Health alert: The risk of serious respiratory and cardiovascular irritation is significantly increased for everyone.',
    schoolRecommendation: 'Certified N95/KN95 respirators required outdoors. Outdoor activities suspended. Keep school windows firmly shut.',
  },
  {
    range: [301, 500],
    category: 'Hazardous',
    color: 'text-purple-900',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-300',
    healthImpact: 'Emergency warning: Entire population is likely to experience severe adverse reactions and acute respiratory distress.',
    schoolRecommendation: 'Schools transition to remote home learning. People should stay indoors with air purifiers and sealed doors.',
  },
];

export const ISPU_SCALE_ID: IspuLevel[] = [
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

export const QUIZ_QUESTIONS_EN: QuizQuestion[] = [
  {
    id: 1,
    question: 'Based on the scientific Fire Triangle concept, why does spraying water extinguish a wildfire?',
    options: [
      'Water removes all oxygen molecules from the surrounding air',
      'Water absorbs thermal energy and cools the fuel below its ignition temperature',
      'Water chemically transforms organic carbon into non-flammable stone',
      'Water splits fuel molecules into inert hydrogen gas'
    ],
    correctAnswer: 1,
    explanation:
      'Water has a very high specific heat capacity and latent heat of vaporization. When sprayed onto flames, it absorbs tremendous thermal energy, dropping the fuel temperature below its ignition point and breaking the "Heat" pillar of the Fire Triangle.',
    curriculumTopic: 'Physics & Chemistry of Combustion'
  },
  {
    id: 2,
    question: 'Why are peatland fires significantly more difficult to suppress than wildfires on ordinary mineral soil?',
    options: [
      'Peat forest trees contain explosive wax chemicals',
      'Fires smolder deep underground through thick organic layers without visible surface flames',
      'Peatland regions have no access to rivers or groundwater',
      'Peat soil naturally contains five times more concentrated oxygen than ambient air'
    ],
    correctAnswer: 1,
    explanation:
      'Peat consists of accumulated, partially decayed organic matter meters deep. Peatland fires primarily behave as "ground fires" that slowly smolder underground, insulated from surface water spray which often evaporates before reaching the deep ember beds.',
    curriculumTopic: 'Earth Science & Soil Ecology'
  },
  {
    id: 3,
    question: 'The most dangerous microscopic particulate matter in wildfire smoke is classified as PM2.5. What does PM2.5 stand for?',
    options: [
      'Gas pollutants weighing 2.5 grams per cubic meter',
      'Microscopic solid or liquid particles with a diameter of 2.5 micrometers or smaller',
      'Radioactive waste with a decay half-life of 2.5 years',
      'Smoke darkness density measured at a reference temperature of 25°C'
    ],
    correctAnswer: 1,
    explanation:
      'PM2.5 designates Particulate Matter with an aerodynamic diameter ≤ 2.5 µm (micrometers). Because they are ~30 times finer than a human hair, they evade nasal filters and penetrate deep into pulmonary alveoli and the bloodstream.',
    curriculumTopic: 'Biology & Human Respiratory System'
  },
  {
    id: 4,
    question: 'Constructing a "Firebreak" (fuel break) halts a wildfire’s progression by removing which element of the Fire Triangle?',
    options: [
      'Oxygen',
      'Heat',
      'Fuel',
      'Atmospheric Pressure'
    ],
    correctAnswer: 2,
    explanation:
      'A firebreak is created by clearing all combustible vegetation, fallen leaves, and dry grass along a wide strip of bare mineral dirt. When advancing flames reach the firebreak, the fire starves because there is no fuel left to consume.',
    curriculumTopic: 'Disaster Mitigation & Fire Dynamics'
  },
  {
    id: 5,
    question: 'What is the scientifically verified connection between the global El Niño climate cycle and intensified wildfires?',
    options: [
      'El Niño increases humidity, causing more frequent lightning strikes in the jungle',
      'El Niño shifts rain-bearing clouds away, causing severe droughts that turn forest vegetation bone-dry',
      'El Niño triggers sea-level rises that erode coastal mangrove trees',
      'El Niño eliminates atmospheric wind, trapping smoke in mountain valleys'
    ],
    correctAnswer: 1,
    explanation:
      'During El Niño events, anomalous sea-surface warming in the central and eastern Pacific shifts global convective rainfall patterns away from tropical Asia. The resulting prolonged drought parches foliage, rendering forests hyper-flammable.',
    curriculumTopic: 'Geography & Climatology'
  },
  {
    id: 6,
    question: 'If regional air quality monitors record an AQI / ISPU reading of 245 ("Very Unhealthy"), what is the most appropriate student safety protocol?',
    options: [
      'Continue outdoor cycling wearing a single-layer cloth bandana',
      'Sleep less at night to train immune resilience against air pollution',
      'Cease all outdoor physical activities, seal windows, and wear certified N95/KF94 respirators if venturing outside',
      'Burn garden leaves outdoors to create counter-smoke that neutralizes ambient toxins'
    ],
    correctAnswer: 2,
    explanation:
      'At AQI/ISPU levels of 201–300 ("Very Unhealthy"), ambient air contains toxic concentrations of microscopic irritants that trigger acute asthma and respiratory inflammation. Outdoor sports must be suspended, indoor air filtered, and certified N95 respirators worn.',
    curriculumTopic: 'Environmental Health & Disaster Safety'
  },
  {
    id: 7,
    question: 'What is the core ecological function of "Canal Blocking" (Sekat Kanal) built in degraded peat swamp forests?',
    options: [
      'Facilitating patrol motorboat access during rainy seasons',
      'Retaining hydrological water tables so deep peat domes remain wet and do not dry out during dry seasons',
      'Farming freshwater fish species for nearby forest communities',
      'Rapidly draining wetland swamps so land can be planted with commercial crops'
    ],
    correctAnswer: 1,
    explanation:
      'Past illegal drainage canals emptied water out of peat domes. Canal blocking structures dam water flow, raising the groundwater level (Rewetting) to keep the peat damp and prevent it from transforming into hyper-dry fuel.',
    curriculumTopic: 'Environmental Conservation & Hydrology'
  },
  {
    id: 8,
    question: 'In forest food webs and ecosystem balance, what long-term ecological effect occurs when apex predators (e.g. tigers) lose habitat to wildfires?',
    options: [
      'Tree density in the forest automatically doubles',
      'Uncontrolled herbivore or wild boar population surges can destroy neighboring agricultural crops and food security',
      'Forest soils become automatically more fertile in the absence of large mammals',
      'Forest ambient temperatures drop below freezing point'
    ],
    correctAnswer: 1,
    explanation:
      'Apex predators maintain balance by regulating herbivore and omnivore populations. When predators vanish due to habitat destruction, prey populations (such as wild boars or rodents) explode unchecked and ravage farmer crops.',
    curriculumTopic: 'Ecology & Tropical Food Webs'
  }
];

export const QUIZ_QUESTIONS_ID: QuizQuestion[] = [
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

export const CURATED_TUTOR_QA_EN = [
  {
    q: 'Why is wildfire smoke yellowish-brown with a pungent acrid smell?',
    a: 'Wildfire smoke, particularly from smoldering peatlands, is produced by incomplete combustion of dense organic matter. It is loaded with carbon monoxide (CO), sulfur dioxide (SO2), volatile organic compounds (VOCs), wood tar vapor, and concentrated PM2.5 micro-particles that scatter solar light wavelengths into ominous yellow and orange hues.',
  },
  {
    q: 'How does cloud seeding (artificial rain) actually work?',
    a: 'Cloud seeding does not manufacture water clouds from dry air; rather, it seeds existing cumulonimbus clouds. Specially equipped aircraft release micro-granules of hygroscopic salt (sodium chloride, NaCl). The salt particles act as condensation nuclei that rapidly coalesce airborne water vapor droplets into heavy raindrops before violent high-altitude winds disperse the cloud.',
  },
  {
    q: 'What is the real difference between a standard cloth mask and an N95 respirator during wildfire haze?',
    a: 'Standard cloth mask fibers have pore openings around 100 to 200 micrometers wide, allowing tiny 2.5-micrometer PM2.5 wildfire particles to sail straight through. In contrast, certified N95 respirators use an electrostatically charged dense microfiber web that captures at least 95% of airborne particles down to 0.3 micrometers, providing genuine pulmonary protection.',
  },
  {
    q: 'Is it dangerous or illegal to burn garden brush during the dry season?',
    a: 'It is both highly dangerous and illegal in protected regions. During dry seasons, low atmospheric humidity and sudden wind gusts can carry glowing sparks (firebrands/embers) hundreds of meters into dry underbrush, instantly sparking uncontrolled forest conflagrations.',
  },
];

export const CURATED_TUTOR_QA_ID = [
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

export function getPillarsContent(lang: Language): PillarContent[] {
  return lang === 'id' ? PILLARS_CONTENT_ID : PILLARS_CONTENT_EN;
}

export function getIspuScale(lang: Language): IspuLevel[] {
  return lang === 'id' ? ISPU_SCALE_ID : ISPU_SCALE_EN;
}

export function getQuizQuestions(lang: Language): QuizQuestion[] {
  return lang === 'id' ? QUIZ_QUESTIONS_ID : QUIZ_QUESTIONS_EN;
}

export function getCuratedTutorQA(lang: Language) {
  return lang === 'id' ? CURATED_TUTOR_QA_ID : CURATED_TUTOR_QA_EN;
}


// Default Indonesian exports for backward compatibility
export const PILLARS_CONTENT: PillarContent[] = PILLARS_CONTENT_ID;
export const ISPU_SCALE: IspuLevel[] = ISPU_SCALE_ID;
export const QUIZ_QUESTIONS: QuizQuestion[] = QUIZ_QUESTIONS_ID;
export const CURATED_TUTOR_QA = CURATED_TUTOR_QA_ID;
