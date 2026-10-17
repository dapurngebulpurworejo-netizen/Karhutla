import React, { useState } from 'react';
import { Flame, Wind, Thermometer, Layers, Droplets, Scissors, Shield, RefreshCw } from 'lucide-react';
import { AppTranslations, TRANSLATIONS } from '../data/translations';
import { playClickSfx, playWaterSfx, playIgniteSfx } from '../utils/audio';

interface FireTriangleProps {
  t?: AppTranslations;
}

export const FireTriangle: React.FC<FireTriangleProps> = ({ t }) => {
  const activeT = t || TRANSLATIONS['id'];
  const [hasHeat, setHasHeat] = useState(true);
  const [hasFuel, setHasFuel] = useState(true);
  const [hasOxygen, setHasOxygen] = useState(true);

  const isFireActive = hasHeat && hasFuel && hasOxygen;

  const handleReset = () => {
    playIgniteSfx();
    setHasHeat(true);
    setHasFuel(true);
    setHasOxygen(true);
  };

  const toggleHeat = () => {
    playWaterSfx();
    setHasHeat(!hasHeat);
  };

  const toggleFuel = () => {
    playClickSfx();
    setHasFuel(!hasFuel);
  };

  const toggleOxygen = () => {
    playClickSfx();
    setHasOxygen(!hasOxygen);
  };

  return (
    <section className="py-12 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-8">
          <div className="text-xs font-semibold text-emerald-800 mb-1">
            Konsep Sains IPA SMP · Reaksi Pembakaran
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Laboratorium Konsep: Segitiga Api (Fire Triangle)
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Kebakaran hutan adalah reaksi kimia oksidasi cepat. Api hanya dapat menyala jika ketiga pilar di bawah ini hadir secara bersamaan. Coba hilangkan salah satu unsur untuk melihat cara kerja tim pemadam kebakaran!
          </p>
        </div>

        {/* 2-Zone Sandbox */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Zone: Visual Triangle Stage */}
          <div className="lg:col-span-6 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 flex flex-col items-center justify-center min-h-[380px] relative shadow-sm">
            {/* Live Indicator */}
            <div className="absolute top-4 left-4 flex items-center gap-2 text-xs font-semibold">
              <span className="text-slate-500">Status Reaksi Kimia:</span>
              <span
                className={`px-2 py-0.5 rounded text-xs font-bold ${
                  isFireActive ? 'bg-rose-100 text-rose-800' : 'bg-emerald-100 text-emerald-800'
                }`}
              >
                {isFireActive ? '● API MENYALA AKTIF' : '○ API PADAM / TERHENTI'}
              </span>
            </div>

            {/* Triangle SVG Canvas */}
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 flex items-center justify-center my-4">
              <svg viewBox="0 0 300 280" className="w-full h-full drop-shadow-sm">
                {/* Triangle Base lines */}
                {/* Leg 1: Heat (Bottom left to Top) */}
                <line
                  x1="50"
                  y1="240"
                  x2="150"
                  y2="40"
                  stroke={hasHeat ? '#DC2626' : '#CBD5E1'}
                  strokeWidth={hasHeat ? '10' : '4'}
                  strokeLinecap="round"
                  className="transition-all duration-300"
                />
                {/* Leg 2: Oxygen (Top to Bottom right) */}
                <line
                  x1="150"
                  y1="40"
                  x2="250"
                  y2="240"
                  stroke={hasOxygen ? '#0284C7' : '#CBD5E1'}
                  strokeWidth={hasOxygen ? '10' : '4'}
                  strokeLinecap="round"
                  className="transition-all duration-300"
                />
                {/* Leg 3: Fuel (Bottom line) */}
                <line
                  x1="50"
                  y1="240"
                  x2="250"
                  y2="240"
                  stroke={hasFuel ? '#D97706' : '#CBD5E1'}
                  strokeWidth={hasFuel ? '10' : '4'}
                  strokeLinecap="round"
                  className="transition-all duration-300"
                />

                {/* Nodes */}
                <circle cx="150" cy="40" r="14" fill="#0F172A" />
                <circle cx="50" cy="240" r="14" fill="#0F172A" />
                <circle cx="250" cy="240" r="14" fill="#0F172A" />

                {/* Text along edges */}
                <text x="75" y="130" fill={hasHeat ? '#DC2626' : '#94A3B8'} fontWeight="bold" fontSize="13">
                  PANAS (Heat)
                </text>
                <text x="180" y="130" fill={hasOxygen ? '#0284C7' : '#94A3B8'} fontWeight="bold" fontSize="13">
                  OKSIGEN (O₂)
                </text>
                <text x="110" y="265" fill={hasFuel ? '#D97706' : '#94A3B8'} fontWeight="bold" fontSize="13">
                  BAHAN BAKAR (Fuel)
                </text>
              </svg>

              {/* Flame or Extinguished Center Icon */}
              <div className="absolute inset-0 flex flex-col items-center justify-center pt-8 pointer-events-none">
                {isFireActive ? (
                  <div className="flex flex-col items-center animate-pulse">
                    <div className="p-4 rounded-full bg-rose-50 text-rose-600 border border-rose-200 shadow-md">
                      <Flame className="w-14 h-14" />
                    </div>
                    <span className="text-xs font-bold text-rose-700 mt-2 bg-white px-2 py-0.5 rounded shadow-sm border border-rose-100">
                      Oksidasi Cepat Berkelanjutan
                    </span>
                  </div>
                ) : (
                  <div className="flex flex-col items-center">
                    <div className="p-4 rounded-full bg-slate-100 text-slate-400 border border-slate-200">
                      <Shield className="w-14 h-14" />
                    </div>
                    <span className="text-xs font-bold text-emerald-700 mt-2 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      Rantai Reaksi Terputus
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Scientific feedback */}
            <div className="w-full text-center mt-2 pt-4 border-t border-slate-100 text-xs sm:text-sm text-slate-600">
              {isFireActive && (
                <p>
                  Ketiga unsur terpenuhi. Api terus menjalar dan melepaskan energi panas serta gas CO₂.
                </p>
              )}
              {!hasHeat && (
                <p className="text-emerald-800 font-medium">
                  <strong>Pilar Panas Hilang:</strong> Suhu bahan bakar turun di bawah temperatur nyala (ignition temperature). Api padam seketika!
                </p>
              )}
              {!hasFuel && (
                <p className="text-emerald-800 font-medium">
                  <strong>Pilar Bahan Bakar Hilang:</strong> Tidak ada ranting, gambut, atau rumput kering untuk dibakar. Api tidak bisa merambat.
                </p>
              )}
              {!hasOxygen && (
                <p className="text-emerald-800 font-medium">
                  <strong>Pilar Oksigen Hilang:</strong> Konsentrasi gas O₂ turun di bawah 16%. Api mati lemas (suffocation).
                </p>
              )}
            </div>
          </div>

          {/* Right Zone: Interactive Control Deck & Real-World Firefighting Science */}
          <div className="lg:col-span-6 space-y-4">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4 shadow-sm">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-bold text-slate-900">Uji Coba Unsur Pembakaran</h3>
                <button
                  onClick={handleReset}
                  className="text-xs font-semibold text-slate-600 hover:text-slate-900 flex items-center gap-1 px-2.5 py-1 rounded bg-slate-100 hover:bg-slate-200 transition-colors"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Pulihkan Semua Unsur</span>
                </button>
              </div>

              {/* 3 Interactive Toggles */}
              <div className="space-y-3">
                {/* Element 1: Heat */}
                <div
                  onClick={toggleHeat}
                  className={`cursor-pointer p-4 rounded-xl border transition-all ${
                    hasHeat
                      ? 'border-rose-200 bg-rose-50/50 hover:bg-rose-50'
                      : 'border-slate-200 bg-slate-50 opacity-75'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${hasHeat ? 'bg-rose-600 text-white' : 'bg-slate-200 text-slate-500'}`}>
                        <Thermometer className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-slate-900">1. Energi Panas (Heat)</div>
                        <div className="text-xs text-slate-500">Matahari terik, petir, bara puntung, gesekan ranting</div>
                      </div>
                    </div>
                    <button
                      type="button"
                      className={`text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors ${
                        hasHeat ? 'bg-rose-600 text-white' : 'bg-slate-200 text-slate-700'
                      }`}
                    >
                      {hasHeat ? 'Aktif (Hilangkan Panas)' : 'Padam (Siram Air)'}
                    </button>
                  </div>
                  <div className="mt-2.5 pt-2 border-t border-rose-100/60 text-xs text-slate-600 flex items-center gap-1.5">
                    <Droplets className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    <span><strong>Metode Manggala Agni:</strong> Water bombing helikopter & semprotan pompa air bertekanan tinggi menyerap panas hingga dingin.</span>
                  </div>
                </div>

                {/* Element 2: Fuel */}
                <div
                  onClick={toggleFuel}
                  className={`cursor-pointer p-4 rounded-xl border transition-all ${
                    hasFuel
                      ? 'border-amber-200 bg-amber-50/50 hover:bg-amber-50'
                      : 'border-slate-200 bg-slate-50 opacity-75'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${hasFuel ? 'bg-amber-600 text-white' : 'bg-slate-200 text-slate-500'}`}>
                        <Layers className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-slate-900">2. Bahan Bakar (Fuel)</div>
                        <div className="text-xs text-slate-500">Dedaunan kering, semak belukar, tanah gambut tebal</div>
                      </div>
                    </div>
                    <button
                      type="button"
                      className={`text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors ${
                        hasFuel ? 'bg-amber-600 text-white' : 'bg-slate-200 text-slate-700'
                      }`}
                    >
                      {hasFuel ? 'Aktif (Putuskan Bahan)' : 'Terisolasi (Sekat)'}
                    </button>
                  </div>
                  <div className="mt-2.5 pt-2 border-t border-amber-100/60 text-xs text-slate-600 flex items-center gap-1.5">
                    <Scissors className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                    <span><strong>Metode Manggala Agni:</strong> Membuat sekat bakar (firebreak) dengan memotong vegetasi selebar 5 meter agar api kehabisan santapan.</span>
                  </div>
                </div>

                {/* Element 3: Oxygen */}
                <div
                  onClick={toggleOxygen}
                  className={`cursor-pointer p-4 rounded-xl border transition-all ${
                    hasOxygen
                      ? 'border-sky-200 bg-sky-50/50 hover:bg-sky-50'
                      : 'border-slate-200 bg-slate-50 opacity-75'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${hasOxygen ? 'bg-sky-600 text-white' : 'bg-slate-200 text-slate-500'}`}>
                        <Wind className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-slate-900">3. Oksigen (O₂)</div>
                        <div className="text-xs text-slate-500">Kandungan gas oksigen bebas di atmosfer (~21%)</div>
                      </div>
                    </div>
                    <button
                      type="button"
                      className={`text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors ${
                        hasOxygen ? 'bg-sky-600 text-white' : 'bg-slate-200 text-slate-700'
                      }`}
                    >
                      {hasOxygen ? 'Aktif (Isolasi Udara)' : 'Tercekik (Busa/Tanah)'}
                    </button>
                  </div>
                  <div className="mt-2.5 pt-2 border-t border-sky-100/60 text-xs text-slate-600 flex items-center gap-1.5">
                    <Shield className="w-3.5 h-3.5 text-sky-700 shrink-0" />
                    <span><strong>Metode Manggala Agni:</strong> Menimbun bara gambut dengan lumpur padat atau menyemprotkan busa kimia (firefoam) untuk memblokir suplai oksigen.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Middle School Science Takeaway Card */}
            <div className="bg-emerald-50/60 rounded-xl border border-emerald-200 p-4 text-xs text-emerald-950 leading-relaxed">
              <span className="font-bold text-emerald-900 block mb-1">Catatan IPA untuk Siswa:</span>
              Persamaan reaksi umum pembakaran organik:
              <br />
              <code className="font-mono bg-white/80 px-2 py-0.5 rounded text-emerald-900 font-semibold my-1 inline-block">
                Senyawa Karbon + Oksigen (O₂) ➔ Karbon Dioksida (CO₂) + Uap Air (H₂O) + Energi Panas (Kalor)
              </code>
              <br />
              Jika salah satu dari ketiga faktor dihilangkan, laju pembakaran otomatis berhenti seketika. Prinsip inilah dasar pembuatan alat pemadam api ringan (APAR) dan taktik pemadaman karhutla nasional.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
