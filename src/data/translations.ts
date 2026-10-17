import { Language } from '../types';

export interface AppTranslations {
  nav: {
    brand: string;
    modules: string;
    fireTriangle: string;
    simulator: string;
    airQuality: string;
    quiz: string;
    askRanger: string;
    soundToggleTitle: string;
  };
  hero: {
    kicker: string;
    title: string;
    description: string;
    ctaLab: string;
    ctaModules: string;
    ctaQuiz: string;
    assetBadge: string;
    assetCaption: string;
    stat1Number: string;
    stat1Label: string;
    stat2Number: string;
    stat2Label: string;
    stat3Number: string;
    stat3Label: string;
    stat4Number: string;
    stat4Label: string;
  };
  fireTriangle: {
    kicker: string;
    title: string;
    description: string;
    reactionStatus: string;
    activeStatus: string;
    extinguishedStatus: string;
    heat: string;
    heatDesc: string;
    heatBtnActive: string;
    heatBtnInactive: string;
    heatRangerNote: string;
    fuel: string;
    fuelDesc: string;
    fuelBtnActive: string;
    fuelBtnInactive: string;
    fuelRangerNote: string;
    oxygen: string;
    oxygenDesc: string;
    oxygenBtnActive: string;
    oxygenBtnInactive: string;
    oxygenRangerNote: string;
    restoreBtn: string;
    feedbackActive: string;
    feedbackNoHeat: string;
    feedbackNoFuel: string;
    feedbackNoOxygen: string;
    scienceNoteTitle: string;
    chemicalEquation: string;
    scienceNoteBody: string;
  };
  simulator: {
    kicker: string;
    title: string;
    description: string;
    scenarioDefault: string;
    scenarioVillage: string;
    scenarioPeat: string;
    startBtn: string;
    pauseBtn: string;
    stepBtn: string;
    resetTitle: string;
    burningPoints: string;
    ashPoints: string;
    villageSafe: string;
    villageBurning: string;
    toolboxTitle: string;
    toolboxDesc: string;
    toolIgnite: string;
    toolIgniteDesc: string;
    toolWaterBomb: string;
    toolWaterBombDesc: string;
    toolFirebreak: string;
    toolFirebreakDesc: string;
    toolFirefighters: string;
    toolFirefightersDesc: string;
    toolInspect: string;
    toolCloudSeeding: string;
    envTitle: string;
    windDirection: string;
    north: string;
    east: string;
    south: string;
    west: string;
    windSpeed: string;
    climateTitle: string;
    climateDrought: string;
    climateNormal: string;
    climateRainy: string;
    experimentTitle: string;
    experimentStep1: string;
    experimentStep2: string;
    experimentStep3: string;
    cellDataTitle: string;
    cellTypeLabel: string;
    cellFuelLabel: string;
    cellMoistureLabel: string;
    cellStatusLabel: string;
    closeBtn: string;
  };
  peatland: {
    kicker: string;
    title: string;
    description: string;
    waterTableTitle: string;
    waterTableValue: string;
    minWet: string;
    safeThreshold: string;
    dryVulnerable: string;
    vulnerableAlert: string;
    safeAlert: string;
    scienceFactTitle: string;
    scienceFactBody: string;
    coreTakeaway: string;
  };
  ispu: {
    kicker: string;
    title: string;
    description: string;
    simulatorTitle: string;
    parameterLabel: string;
    aqiLabel: string;
    categoryPrefix: string;
    pm25EstimatePrefix: string;
    sliderLabel: string;
    healthImpactLabel: string;
    schoolRecommendationLabel: string;
    standardsTitle: string;
    maskTestTitle: string;
    maskTestDesc: string;
    clothMask: string;
    surgicalMask: string;
    n95Mask: string;
    filtrationPrefix: string;
    clothFeedback: string;
    surgicalFeedback: string;
    n95Feedback: string;
    fourActionsTitle: string;
    action1Title: string;
    action1Body: string;
    action2Title: string;
    action2Body: string;
    action3Title: string;
    action3Body: string;
    action4Title: string;
    action4Body: string;
  };
  quiz: {
    kicker: string;
    title: string;
    description: string;
    questionOf: string;
    topicPrefix: string;
    explanationTitle: string;
    nextBtn: string;
    finalResultBtn: string;
    completedTitle: string;
    completedDesc: string;
    correctLabel: string;
    wrongLabel: string;
    finalScoreLabel: string;
    studentNameLabel: string;
    studentNamePlaceholder: string;
    schoolNameLabel: string;
    schoolNamePlaceholder: string;
    retryBtn: string;
    printBtn: string;
    certBadge: string;
    certTitle: string;
    certIdPrefix: string;
    certPresentedTo: string;
    certDefaultStudent: string;
    certDefaultSchool: string;
    certBody: string;
    certDatePrefix: string;
    certIssuerOrg: string;
    certIssuerSub: string;
    certCommittee: string;
    certValidated: string;
    badgeSenior: string;
    badgeMid: string;
    badgeJunior: string;
  };
  tutor: {
    title: string;
    subtitle: string;
    initialGreeting: string;
    loading: string;
    quickPromptTitle: string;
    inputPlaceholder: string;
    sendBtn: string;
  };
  footer: {
    title: string;
    desc: string;
    copyright: string;
    tagline: string;
  };
}

export const TRANSLATIONS: Record<Language, AppTranslations> = {
  en: {
    nav: {
      brand: 'Wildfire Guard',
      modules: 'Learning Modules',
      fireTriangle: 'Fire Triangle',
      simulator: 'Simulation Lab',
      airQuality: 'Air Quality (AQI)',
      quiz: 'Knowledge Quiz',
      askRanger: 'Ask Forest Ranger',
      soundToggleTitle: 'Toggle Audio Effects',
    },
    hero: {
      kicker: 'Middle School Science & Geography · Grades 7 - 9 · Wildfire Ecology',
      title: 'Wildfire Science & Peatland Preservation',
      description:
        'Explore the natural science behind forest fires: how combustion spreads through underground peat domes, the physical mechanics of the Fire Triangle, hazardous PM2.5 particulates, and frontline firefighting techniques.',
      ctaLab: 'Launch Simulation Lab',
      ctaModules: 'Explore Learning Modules',
      ctaQuiz: 'Take Quiz & Earn Certificate',
      assetBadge: 'Integrated Observation Post',
      assetCaption: 'Early satellite hotspot detection and forest ranger patrols guarding tropical peat domes.',
      stat1Number: '99.2%',
      stat1Label: 'Triggered by human activities (slash-and-burn clearing & careless discarded embers).',
      stat2Number: '57 Billion Tons',
      stat2Label: 'Carbon stored in tropical peat domes threatened by underground combustion.',
      stat3Number: '2.5 µm',
      stat3Label: 'Microscopic size of hazardous PM2.5 smoke particles that penetrate deep alveoli.',
      stat4Number: '3R Restoration',
      stat4Label: 'Rewetting canal blocks, Revegetation with native swamp flora, & Revitalization.',
    },
    fireTriangle: {
      kicker: 'Middle School Physical Science · Combustion Reaction Mechanics',
      title: 'Concept Sandbox: The Fire Triangle',
      description:
        'A wildfire is a rapid chemical oxidation reaction. Fire can only exist when all three pillars below are present concurrently. Toggle off any one element to observe how firefighters suppress forest blazes!',
      reactionStatus: 'Chemical Reaction Status:',
      activeStatus: '● FIRE BURNING ACTIVELY',
      extinguishedStatus: '○ FIRE EXTINGUISHED / STARVED',
      heat: '1. Thermal Heat',
      heatDesc: 'Scorching sunlight, lightning bolts, glowing embers, friction',
      heatBtnActive: 'Active (Eliminate Heat)',
      heatBtnInactive: 'Cool (Spray Water)',
      heatRangerNote: 'Water bombing helicopters & high-pressure water hoses absorb latent heat until fuel cools below ignition temperature.',
      fuel: '2. Combustible Fuel',
      fuelDesc: 'Dry leaf litter, dead branches, thick organic peat layers',
      fuelBtnActive: 'Active (Sever Fuel)',
      fuelBtnInactive: 'Isolated (Firebreak)',
      fuelRangerNote: 'Excavating 5-meter wide firebreaks down to bare mineral soil starves incoming fire of organic combustible matter.',
      oxygen: '3. Oxygen (O₂)',
      oxygenDesc: 'Atmospheric oxygen gas freely available in open air (~21%)',
      oxygenBtnActive: 'Active (Smother Air)',
      oxygenBtnInactive: 'Smothered (Soil/Foam)',
      oxygenRangerNote: 'Packing smoldering peat roots with dense moist clay mud or spraying fire suppressant foam cuts off the O₂ supply.',
      restoreBtn: 'Restore All 3 Elements',
      feedbackActive: 'All three elements are satisfied. The exothermic combustion chain reaction sustains itself, releasing heat and CO₂.',
      feedbackNoHeat: 'Heat Pillar Removed: Fuel temperature dropped below its ignition point. Fire is instantly extinguished!',
      feedbackNoFuel: 'Fuel Pillar Removed: No brush, branches, or peat left to consume. The fire halts in its tracks!',
      feedbackNoOxygen: 'Oxygen Pillar Removed: Ambient O₂ concentration dropped below 16%. The fire is smothered (suffocated)!',
      scienceNoteTitle: 'Science Concept for Students:',
      chemicalEquation: 'Hydrocarbon Fuel + Oxygen (O₂) ➔ Carbon Dioxide (CO₂) + Water Vapor (H₂O) + Thermal Energy (Heat)',
      scienceNoteBody:
        'If any single corner of the triangle is eliminated, combustion stops immediately. This fundamental scientific law governs portable fire extinguishers, firebreaks, and national wildfire suppression strategies.',
    },
    simulator: {
      kicker: 'Environmental Physics & Cellular Automata · Middle School Lab',
      title: 'Virtual Lab: Wildfire Spread Dynamics & Suppression',
      description:
        'Adjust wind vectors, drought conditions, and soil types. Test frontline suppression tactics to protect vulnerable wildlife habitats and local villages!',
      scenarioDefault: 'Standard Rainforest',
      scenarioVillage: 'Mission: Save Village',
      scenarioPeat: 'Peat Drought Crisis',
      startBtn: 'Run Fire Simulation',
      pauseBtn: 'Pause Simulation',
      stepBtn: 'Step Forward (+1)',
      resetTitle: 'Reset Grid',
      burningPoints: 'Cells Burning',
      ashPoints: 'Burnt Ash',
      villageSafe: 'Village: Safe',
      villageBurning: 'Village: Burning!',
      toolboxTitle: 'Ranger & Student Intervention Tools',
      toolboxDesc: 'Select an intervention tool below, then click any grid cell on the map:',
      toolIgnite: 'Ignite Spark',
      toolIgniteDesc: 'Cigarette / Lightning',
      toolWaterBomb: 'Water Bombing',
      toolWaterBombDesc: 'Helicopter (3x3 Area)',
      toolFirebreak: 'Firebreak',
      toolFirebreakDesc: 'Excavate bare soil barrier',
      toolFirefighters: 'Firefighters',
      toolFirefightersDesc: 'Drench peat soil with hose',
      toolInspect: 'Inspect Cell (Click cell to examine scientific data)',
      toolCloudSeeding: 'Trigger Cloud Seeding (Artificial Rain)',
      envTitle: 'Environmental & Weather Variables',
      windDirection: 'Wind Direction:',
      north: 'North',
      east: 'East',
      south: 'South',
      west: 'West',
      windSpeed: 'Wind Velocity:',
      climateTitle: 'Climate & Moisture Condition:',
      climateDrought: 'El Niño (Drought)',
      climateNormal: 'Normal',
      climateRainy: 'Rainy',
      experimentTitle: 'Student Science Experiment:',
      experimentStep1: '1. Click "Mission: Save Village".',
      experimentStep2: '2. Immediately select the "Firebreak" tool and dig a bare mineral corridor west of the village.',
      experimentStep3: '3. Press "Run Fire Simulation" and observe how the flames halt when reaching the fuel-free firebreak barrier!',
      cellDataTitle: 'Cell Diagnostic Data: Coordinates',
      cellTypeLabel: 'Surface Cover:',
      cellFuelLabel: 'Fuel Mass:',
      cellMoistureLabel: 'Moisture Level:',
      cellStatusLabel: 'State:',
      closeBtn: 'Close',
    },
    peatland: {
      kicker: 'Middle School Curriculum · Tropical Ecology & Soil Conservation',
      title: 'Core Curriculum: 4 Pillars of Wildfire Science',
      description:
        'Understand wildfire phenomena comprehensively: investigate why peat swamp fires burn underground, how smoke endangers wildlife, and modern suppression technologies.',
      waterTableTitle: 'Peatland Groundwater Table (GWT) Simulator',
      waterTableValue: 'cm below soil surface',
      minWet: '10 cm (Pristine Wetland)',
      safeThreshold: '40 cm (Safe Environmental Threshold)',
      dryVulnerable: '100 cm (Severely Parched Peat)',
      vulnerableAlert: '⚠️ CRITICAL ALERT: Peat Severely Desiccated! Water table dropped below 40 cm. Upper peat turns into hyper-combustible tinder capable of burning meters underground.',
      safeAlert: '✅ SAFE STATUS: Peat Naturally Hydrated. Water table meets protective conservation standards. Smoldering cannot penetrate the wet peat matrix.',
      scienceFactTitle: 'Middle School Science Fact:',
      scienceFactBody:
        'In ordinary mineral soil (clay/sand), wildfires only scorch surface fallen leaves. In tropical peatlands, the soil itself is 100% accumulated ancient vegetative organic matter, meaning the soil itself burns like solid coal fuel!',
      coreTakeaway: 'Key Takeaway:',
    },
    ispu: {
      kicker: 'Environmental Health & Disaster Preparedness Protocol',
      title: 'Air Quality Index (AQI) & Student Health Guide',
      description:
        'Learn how to interpret regional Air Quality Index scales, understand how microscopic PM2.5 particulates infiltrate adolescent respiratory organs, and master school safety protocols.',
      simulatorTitle: 'Field AQI Sensor Simulator',
      parameterLabel: 'Primary Pollutant: Fine Particulate Matter PM2.5',
      aqiLabel: 'Air Quality Index (AQI)',
      categoryPrefix: 'Category:',
      pm25EstimatePrefix: 'Estimated PM2.5 Concentration: ~',
      sliderLabel: 'Slide AQI Value (0 - 450):',
      healthImpactLabel: 'Physiological Health Impact:',
      schoolRecommendationLabel: 'School & Student Protocol:',
      standardsTitle: 'Air Quality Health Classification Tiers:',
      maskTestTitle: 'Mask Filtration Efficiency against PM2.5 Wildfire Smoke',
      maskTestDesc: 'Select a protective mask type below to examine its ability to shield your lungs:',
      clothMask: 'Single-Layer Cloth Mask',
      surgicalMask: 'Standard Medical Surgical Mask',
      n95Mask: 'Certified N95 / KF94 Respirator',
      filtrationPrefix: 'Filtration Efficiency:',
      clothFeedback: '⚠️ Ineffective for Wildfire Smoke: Fabric weave gaps are ~100 µm wide. Microscopic PM2.5 particles (2.5 µm) pass right through unobstructed into the lungs.',
      surgicalFeedback: '🟡 Moderate Splash Protection with Edge Leaks: Filters droplets well, but loose facial gaps allow toxic smoke bypass during deep breathing.',
      n95Feedback: '✅ Certified Medical Standard: Electrostatically charged microfibers and tight nasal contour seals reliably block >95% of fine toxic smoke particulates.',
      fourActionsTitle: '4 Crucial Actions for Students during Heavy Smoke Haze',
      action1Title: '1. Stay Indoors (Shelter in Place):',
      action1Body: 'Keep classroom and bedroom windows tightly shut during morning and dusk hours when temperature inversions trap toxic smoke closest to the ground.',
      action2Title: '2. Hydrate Continuously (Minimum 2 Liters):',
      action2Body: 'Drinking clean water keeps airway mucosal linings moist, enabling natural respiratory cilia to flush trapped foreign irritants outward.',
      action3Title: '3. Avoid Additional Indoor Air Pollution:',
      action3Body: 'Never burn trash in backyards or light incense or mosquito coils in closed rooms, which adds heavy carbon monoxide into indoor air.',
      action4Title: '4. Seek Immediate Medical Attention at School Clinic:',
      action4Body: 'Report to healthcare providers promptly if experiencing persistent coughing fits, chest tightness, dizziness, or severe eye irritation.',
    },
    quiz: {
      kicker: 'Student Learning Evaluation · Middle School Science Assessment',
      title: 'Wildfire Knowledge Quiz & Ranger Certification',
      description:
        'Test your mastery of combustion physics, peatland ecology, PM2.5 particulate health hazards, and emergency wildfire mitigation to earn your digital certificate!',
      questionOf: 'Question',
      topicPrefix: 'Topic:',
      explanationTitle: 'Scientific Explanation:',
      nextBtn: 'Next Question',
      finalResultBtn: 'View Final Results',
      completedTitle: 'Congratulations! Assessment Completed',
      completedDesc: 'You have finished the comprehensive 8-question scientific analysis on wildfire dynamics, environmental ecology, and disaster mitigation.',
      correctLabel: 'Correct',
      wrongLabel: 'Incorrect',
      finalScoreLabel: 'Final Score',
      studentNameLabel: 'Student Full Name:',
      studentNamePlaceholder: 'e.g. Alex Morgan',
      schoolNameLabel: 'School Name:',
      schoolNamePlaceholder: 'e.g. Springfield Middle School',
      retryBtn: 'Retake Assessment',
      printBtn: 'Print / Save Certificate',
      certBadge: 'International Environmental Science Program · Middle School Disaster Education',
      certTitle: 'CERTIFICATE OF ACHIEVEMENT',
      certIdPrefix: 'Verification ID: WG-MS-',
      certPresentedTo: 'This certificate is proudly awarded to:',
      certDefaultStudent: '[ Student Full Name ]',
      certDefaultSchool: '[ Middle School Name ]',
      certBody: 'for successfully completing scientific curriculum coursework and practical evaluations on Wildfire Ecology, Peatland Dynamics, & Environmental Disaster Mitigation with the honor distinction of:',
      certDatePrefix: 'Date:',
      certIssuerOrg: 'Wildfire Guard Science Education',
      certIssuerSub: 'Middle School STEM Initiative',
      certCommittee: 'Science Educators & Forest Ranger Committee',
      certValidated: 'Digitally Verified & Certified',
      badgeSenior: 'Senior Wildfire Ranger Specialist',
      badgeMid: 'Forest Conservation Cadre',
      badgeJunior: 'Junior Wildfire Volunteer',
    },
    tutor: {
      title: 'Ask Forest Ranger (Eco-Tutor)',
      subtitle: 'Interactive Environmental Science Q&A',
      initialGreeting: 'Hello students! I am Ranger Alex, your science eco-tutor. Ask me anything about forest fires, peatland ground fires, PM2.5 smoke hazards, or firefighter tactics!',
      loading: 'Ranger Alex is compiling scientific insights...',
      quickPromptTitle: 'Quick Questions:',
      inputPlaceholder: 'Type your question about wildfires here...',
      sendBtn: 'Send',
    },
    footer: {
      title: 'Wildfire Guard · Interactive Science & Middle School Disaster Education',
      desc: 'Designed to support Middle School Integrated Science and Geography curricula covering Natural Disaster Mitigation, the Carbon Cycle, and Rainforest Ecology.',
      copyright: 'Wildfire Guard Education. Dedicated to educating future Earth guardians.',
      tagline: 'Protect our forests: Stop illegal burning for a clear blue sky.',
    },
  },
  id: {
    nav: {
      brand: 'Siaga Karhutla',
      modules: 'Modul Materi',
      fireTriangle: 'Segitiga Api',
      simulator: 'Lab Simulasi',
      airQuality: 'Indeks ISPU',
      quiz: 'Uji Kompetensi',
      askRanger: 'Tanya Jagawana',
      soundToggleTitle: 'Pengaturan Suara Efek',
    },
    hero: {
      kicker: 'Kurikulum IPA & IPS SMP · Kelas VII, VIII, IX · Mitigasi Kebencanaan Tropis',
      title: 'Edukasi Kebakaran Hutan & Lahan Indonesia',
      description:
        'Pelajari ilmu sains di balik kebakaran hutan: bagaimana api merambat di kubah gambut, segitiga api pembakaran, bahaya partikulat mikroskopis PM2.5, serta cara penanggulangan oleh tim Jagawana dan Manggala Agni.',
      ctaLab: 'Buka Lab Simulasi Api',
      ctaModules: 'Pelajari Materi Pembelajaran',
      ctaQuiz: 'Uji Kompetensi & Sertifikat',
      assetBadge: 'Pos Pengamatan Terpadu',
      assetCaption: 'Patroli pencegahan dan deteksi dini titik panas di kubah gambut Sumatera & Kalimantan.',
      stat1Number: '99,2%',
      stat1Label: 'Dipicu faktor manusia (pembukaan lahan perkebunan & kelalaian puntung rokok).',
      stat2Number: '57 Miliar Ton',
      stat2Label: 'Cadangan karbon tersimpan di tanah gambut Indonesia yang terancam terlepas ke atmosfer.',
      stat3Number: '2,5 µm',
      stat3Label: 'Ukuran mikroskopis PM2.5 kabut asap yang dapat menembus saluran paru-paru terdalam.',
      stat4Number: 'SOP 3R BRGM',
      stat4Label: 'Rewetting (pembasahan sekat kanal), Revegetation (penanaman kembali), & Revitalization.',
    },
    fireTriangle: {
      kicker: 'Konsep Sains IPA SMP · Reaksi Pembakaran',
      title: 'Laboratorium Konsep: Segitiga Api (Fire Triangle)',
      description:
        'Kebakaran hutan adalah reaksi kimia oksidasi cepat. Api hanya dapat menyala jika ketiga pilar di bawah ini hadir secara bersamaan. Coba hilangkan salah satu unsur untuk melihat cara kerja tim pemadam kebakaran!',
      reactionStatus: 'Status Reaksi Kimia:',
      activeStatus: '● API MENYALA AKTIF',
      extinguishedStatus: '○ API PADAM / TERHENTI',
      heat: '1. Energi Panas (Heat)',
      heatDesc: 'Matahari terik, petir, bara puntung, gesekan ranting',
      heatBtnActive: 'Aktif (Hilangkan Panas)',
      heatBtnInactive: 'Padam (Siram Air)',
      heatRangerNote: 'Water bombing helikopter & semprotan pompa air bertekanan tinggi menyerap panas hingga dingin.',
      fuel: '2. Bahan Bakar (Fuel)',
      fuelDesc: 'Dedaunan kering, semak belukar, tanah gambut tebal',
      fuelBtnActive: 'Aktif (Putuskan Bahan)',
      fuelBtnInactive: 'Terisolasi (Sekat)',
      fuelRangerNote: 'Membuat sekat bakar (firebreak) dengan memotong vegetasi selebar 5 meter agar api kehabisan santapan.',
      oxygen: '3. Oksigen (O₂)',
      oxygenDesc: 'Kandungan gas oksigen bebas di atmosfer (~21%)',
      oxygenBtnActive: 'Aktif (Isolasi Udara)',
      oxygenBtnInactive: 'Tercekik (Busa/Tanah)',
      oxygenRangerNote: 'Menimbun bara gambut dengan lumpur padat atau menyemprotkan busa kimia (firefoam) untuk memblokir suplai oksigen.',
      restoreBtn: 'Pulihkan Semua Unsur',
      feedbackActive: 'Ketiga unsur terpenuhi. Api terus menjalar dan melepaskan energi panas serta gas CO₂.',
      feedbackNoHeat: 'Pilar Panas Hilang: Suhu bahan bakar turun di bawah temperatur nyala. Api padam seketika!',
      feedbackNoFuel: 'Pilar Bahan Bakar Hilang: Tidak ada ranting, gambut, atau rumput kering untuk dibakar. Api tidak bisa merambat.',
      feedbackNoOxygen: 'Pilar Oksigen Hilang: Konsentrasi gas O₂ turun di bawah 16%. Api mati lemas!',
      scienceNoteTitle: 'Catatan IPA untuk Siswa:',
      chemicalEquation: 'Senyawa Karbon + Oksigen (O₂) ➔ Karbon Dioksida (CO₂) + Uap Air (H₂O) + Energi Panas (Kalor)',
      scienceNoteBody:
        'Jika salah satu dari ketiga faktor dihilangkan, laju pembakaran otomatis berhenti seketika. Prinsip inilah dasar pembuatan alat pemadam api ringan (APAR) dan taktik pemadaman karhutla nasional.',
    },
    simulator: {
      kicker: 'Simulasi Dinamika Alam · Model Seluler SMP',
      title: 'Laboratorium Virtual: Penyebaran Api & Mitigasi',
      description:
        'Atur angin, kelembapan iklim, dan tipe lahan. Coba taktik pemadaman Manggala Agni untuk menyelamatkan hutan dan pemukiman warga!',
      scenarioDefault: 'Hutan Tropis Normal',
      scenarioVillage: 'Misi: Selamatkan Desa',
      scenarioPeat: 'Krisis Gambut El Niño',
      startBtn: 'Jalankan Simulasi Api',
      pauseBtn: 'Jeda Simulasi',
      stepBtn: 'Langkah Maju (+1)',
      resetTitle: 'Reset Peta',
      burningPoints: 'Titik Terbakar',
      ashPoints: 'Abu',
      villageSafe: 'Desa: Aman',
      villageBurning: 'Desa: Terbakar!',
      toolboxTitle: 'Peralatan Jagawana & Siswa',
      toolboxDesc: 'Pilih alat di bawah, lalu klik sel pada peta untuk melakukan intervensi:',
      toolIgnite: 'Sulut Api',
      toolIgniteDesc: 'Puntung rokok / petir',
      toolWaterBomb: 'Water Bombing',
      toolWaterBombDesc: 'Helikopter (Area 3x3)',
      toolFirebreak: 'Sekat Bakar',
      toolFirebreakDesc: 'Gali tanah mineral steril',
      toolFirefighters: 'Manggala Agni',
      toolFirefightersDesc: 'Semprot pompa basah',
      toolInspect: 'Inspeksi Titik (Klik sel untuk cek data sains)',
      toolCloudSeeding: 'Jalankan Hujan Buatan (TMC)',
      envTitle: 'Variabel Lingkungan & Cuaca',
      windDirection: 'Arah Hembusan Angin:',
      north: 'Utara',
      east: 'Timur',
      south: 'Selatan',
      west: 'Barat',
      windSpeed: 'Kecepatan Angin:',
      climateTitle: 'Kondisi Musim / Iklim:',
      climateDrought: 'El Niño (Kering)',
      climateNormal: 'Normal',
      climateRainy: 'Penghujan',
      experimentTitle: 'Eksperimen Siswa SMP:',
      experimentStep1: '1. Klik tombol "Misi: Selamatkan Desa".',
      experimentStep2: '2. Segera pilih alat "Sekat Bakar" dan gali tanah di sebelah barat desa.',
      experimentStep3: '3. Tekan "Jalankan Simulasi Api" dan amati apakah api terhenti saat menabrak sekat tanpa bahan bakar!',
      cellDataTitle: 'Data Titik Sel: Koordinat',
      cellTypeLabel: 'Tipe Tutupan:',
      cellFuelLabel: 'Massa Bahan Bakar:',
      cellMoistureLabel: 'Kadar Kelembapan:',
      cellStatusLabel: 'Status:',
      closeBtn: 'Tutup',
    },
    peatland: {
      kicker: 'Materi Inti Kurikulum SMP · Konservasi & Ekologi Tropis',
      title: 'Eksplorasi Pembelajaran: 4 Pilar Karhutla Indonesia',
      description:
        'Pahami fenomena kebakaran hutan secara menyeluruh melalui studi kasus nyata lahan gambut Riau dan Kalimantan, ancaman kepunahan satwa, hingga peran brigade Manggala Agni.',
      waterTableTitle: 'Simulasi Muka Air Tanah Gambut (MAT)',
      waterTableValue: 'cm di bawah tanah',
      minWet: '10 cm (Basah Alami)',
      safeThreshold: '40 cm (Batas Aman BRGM)',
      dryVulnerable: '100 cm (Kering Rawan Api)',
      vulnerableAlert: '⚠️ STATUS KRITIS: Gambut Sangat Kering! Muka air di bawah 40 cm. Lapisan atas kering seperti spons bensin dan siap terbakar hingga ke akar.',
      safeAlert: '✅ STATUS AMAN: Gambut Terhidrasi Sehat. Muka air mencukupi batas baku mutu lingkungan BRGM. Api tidak dapat menjalar ke bawah tanah.',
      scienceFactTitle: 'Fakta Sains SMP:',
      scienceFactBody:
        'Di tanah mineral biasa (lempung/pasir), api hanya membakar daun kering di atas. Tetapi di tanah gambut, tanah itu sendiri terbentuk dari 100% materi tumbuhan purba, sehingga tanahnya dapat terbakar layaknya briket batu bara!',
      coreTakeaway: 'Intisari:',
    },
    ispu: {
      kicker: 'Kesehatan Lingkungan & Kesiapsiagaan Bencana',
      title: 'Pemantau Kualitas Udara ISPU & Panduan Siswa SMP',
      description:
        'Pelajari cara membaca Indeks Standar Pencemar Udara (ISPU) resmi KLHK, bahaya partikel halus PM2.5 bagi organ pernapasan remaja, dan protokol mitigasi mandiri di sekolah.',
      simulatorTitle: 'Simulator Nilai ISPU Lapangan',
      parameterLabel: 'Parameter: Partikulat PM2.5',
      aqiLabel: 'Indeks Standar Pencemar Udara (ISPU)',
      categoryPrefix: 'Kategori:',
      pm25EstimatePrefix: 'Konsentrasi Estimasi PM2.5: ~',
      sliderLabel: 'Geser Nilai ISPU (0 - 450):',
      healthImpactLabel: 'Pengaruh Kesehatan:',
      schoolRecommendationLabel: 'SOP Sekolah / Pelajar:',
      standardsTitle: 'Tingkatan Baku Mutu ISPU Indonesia:',
      maskTestTitle: 'Uji Efektivitas Masker terhadap Partikel Asap PM2.5',
      maskTestDesc: 'Pilih jenis masker di bawah ini untuk melihat seberapa mampu menyaring asap karhutla:',
      clothMask: 'Masker Kain Biasa',
      surgicalMask: 'Masker Medis Bedah',
      n95Mask: 'Masker Respirator N95/KF94',
      filtrationPrefix: 'Filtrasi:',
      clothFeedback: '⚠️ Tidak Dianjurkan untuk Kabut Asap: Pori-pori serat kain sangat besar (~100 mikrometer). Partikel PM2.5 lolos dengan leluasa masuk ke paru-paru.',
      surgicalFeedback: '🟡 Cukup Membantu Namun Ada Kebocoran Sisi: Masker bedah menyaring droplet air, tetapi sisi samping pipi sering longgar sehingga udara asap tetap terhirup.',
      n95Feedback: '✅ Rekomendasi Standar Medis Internasional: Masker N95/KF94 memiliki lapisan elektrostatis yang menyaring partikel mikroskopis hingga 95% ke atas.',
      fourActionsTitle: '4 Tindakan Pelajar SMP Saat Wilayah Terpapar Asap',
      action1Title: '1. Tinggal di Dalam Ruangan (Indoor Stay):',
      action1Body: 'Tutup rapat ventilasi jendela dan pintu ruang kelas saat pagi dan sore hari ketika kabut asap paling pekat terkonsentrasi di permukaan tanah.',
      action2Title: '2. Minum Air Putih yang Cukup (Minimal 2 Liter):',
      action2Body: 'Air membantu selaput lendir tenggorokan tetap basah untuk mendorong keluar partikel iritan melalui gerakan silia saluran napas.',
      action3Title: '3. Menghindari Sumber Polusi Tambahan:',
      action3Body: 'Jangan membakar sampah di halaman rumah atau menyalakan obat nyamuk bakar yang menambah racun karbon di dalam ruang tertutup.',
      action4Title: '4. Segera Periksa ke UKS / Puskesmas:',
      action4Body: 'Jika mengalami batuk terus menerus, sesak di dada, pusing, atau mata merah berair karena iritasi akut kabut asap.',
    },
    quiz: {
      kicker: 'Evaluasi Belajar Siswa SMP · Kurikulum Merdeka IPA',
      title: 'Uji Kompetensi & Misi Jagawana Cilik',
      description:
        'Uji pemahamanmu tentang segitiga api, lahan gambut, kabut asap PM2.5, dan tindakan mitigasi. Dapatkan Sertifikat Digital Resmi!',
      questionOf: 'Soal',
      topicPrefix: 'Topik:',
      explanationTitle: 'Penjelasan Ilmiah:',
      nextBtn: 'Soal Berikutnya',
      finalResultBtn: 'Lihat Hasil Akhir',
      completedTitle: 'Selamat! Evaluasi Selesai',
      completedDesc: 'Kamu telah menyelesaikan 8 soal analisis sains kebakaran hutan dan mitigasi kebencanaan lingkungan.',
      correctLabel: 'Benar',
      wrongLabel: 'Salah',
      finalScoreLabel: 'Skor Akhir',
      studentNameLabel: 'Nama Lengkap Siswa:',
      studentNamePlaceholder: 'Contoh: Rian Pratama',
      schoolNameLabel: 'Nama Sekolah SMP:',
      schoolNamePlaceholder: 'Contoh: SMP Negeri 1 Palangka Raya',
      retryBtn: 'Ulangi Uji Kompetensi',
      printBtn: 'Cetak / Simpan Sertifikat',
      certBadge: 'Republik Indonesia · Program Edukasi Sains Kebencanaan SMP',
      certTitle: 'SERTIFIKAT KELULUSAN',
      certIdPrefix: 'Nomor Verifikasi: SKH-SMP-',
      certPresentedTo: 'Diberikan dengan penuh apresiasi kepada:',
      certDefaultStudent: '[ Nama Lengkap Siswa ]',
      certDefaultSchool: '[ Nama Sekolah SMP ]',
      certBody: 'Telah berhasil menyelesaikan pembelajaran dan uji kompetensi materi Bencana Kebakaran Hutan & Lahan (Karhutla) dengan predikat kelulusan:',
      certDatePrefix: 'Tanggal:',
      certIssuerOrg: 'Siaga Karhutla Indonesia',
      certIssuerSub: 'Media Sains Pembelajaran SMP',
      certCommittee: 'Komite Guru IPA & Jagawana',
      certValidated: 'Tervalidasi Digital',
      badgeSenior: 'Jagawana Utama Pelajar',
      badgeMid: 'Kader Konservasi Hutan',
      badgeJunior: 'Relawan Siaga Karhutla',
    },
    tutor: {
      title: 'Tanya Jagawana (Tutor Karhutla SMP)',
      subtitle: 'Konsultasi Sains & Lingkungan Bebas Tanya',
      initialGreeting: 'Halo adik-adik siswa SMP! Saya Kak Jagawana. Ada hal seputar kebakaran hutan, lahan gambut, kabut asap PM2.5, atau mitigasi Manggala Agni yang ingin kamu tanyakan?',
      loading: 'Kak Jagawana sedang merangkum jawaban sains...',
      quickPromptTitle: 'Pertanyaan Cepat:',
      inputPlaceholder: 'Ketik pertanyaanmu seputar kebakaran hutan di sini...',
      sendBtn: 'Kirim',
    },
    footer: {
      title: 'Siaga Karhutla · Media Sains & Pembelajaran Interaktif SMP',
      desc: 'Disusun untuk mendukung pembelajaran IPA (Ilmu Pengetahuan Alam) & IPS Terpadu materi Mitigasi Bencana Alam Kebakaran Hutan dan Lahan.',
      copyright: 'Siaga Karhutla Indonesia. Dikembangkan untuk edukasi generasi muda penjaga bumi.',
      tagline: 'Mari jaga hutan kita: Hentikan pembakaran liar demi langit biru tanpa asap.',
    },
  },
};
