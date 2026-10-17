import React, { useState } from 'react';
import { ISPU_SCALE } from '../data/learningContent';
import { ShieldAlert, Wind, Activity, CheckCircle2, AlertOctagon, HelpCircle } from 'lucide-react';
import { playClickSfx } from '../utils/audio';

export const IspuCalculator: React.FC = () => {
  const [ispuValue, setIspuValue] = useState<number>(145);
  const [selectedMask, setSelectedMask] = useState<'kain' | 'bedah' | 'n95'>('n95');

  const currentLevel =
    ISPU_SCALE.find((lvl) => ispuValue >= lvl.range[0] && ispuValue <= lvl.range[1]) ||
    ISPU_SCALE[ISPU_SCALE.length - 1];

  // PM2.5 estimation equivalent (in µg/m³) based on Indonesian BMKG/KLHK conversion
  const estimatedPm25 = Math.round(ispuValue * 0.72);

  return (
    <section className="py-12 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-semibold text-emerald-800 mb-1">
            Kesehatan Lingkungan & Kesiapsiagaan Bencana
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Pemantau Kualitas Udara ISPU & Panduan Siswa SMP
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Pelajari cara membaca Indeks Standar Pencemar Udara (ISPU) resmi KLHK, bahaya partikel halus PM2.5 bagi organ pernapasan remaja, dan protokol mitigasi mandiri di sekolah.
          </p>
        </div>

        {/* 2-Column Split: ISPU Interactive Gauge & Practical Guide */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive ISPU Slider & Meter */}
          <div className="lg:col-span-6 bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-sm space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Simulator Nilai ISPU Lapangan
              </span>
              <span className="text-xs text-slate-400">Parameter: Partikulat PM2.5</span>
            </div>

            {/* Big ISPU Readout */}
            <div className="text-center py-4 bg-slate-50 rounded-xl border border-slate-200/80 space-y-1">
              <div className="text-xs font-medium text-slate-500 uppercase tracking-widest">
                Indeks Standar Pencemar Udara
              </div>
              <div className="text-5xl sm:text-6xl font-extrabold font-mono tabular-nums text-slate-900">
                {ispuValue}
              </div>
              <div className={`text-sm font-bold mt-2 ${currentLevel.color}`}>
                Kategori: {currentLevel.category}
              </div>
              <div className="text-xs text-slate-500 font-mono">
                Konsentrasi Estimasi PM2.5: ~{estimatedPm25} µg/m³
              </div>
            </div>

            {/* Slider */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs text-slate-600 font-medium">
                <span>Geser Nilai ISPU (0 - 450):</span>
                <span className="font-mono font-bold text-slate-900">{ispuValue}</span>
              </div>
              <input
                type="range"
                min="10"
                max="450"
                step="5"
                value={ispuValue}
                onChange={(e) => setIspuValue(Number(e.target.value))}
                className="w-full accent-emerald-700 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                <span>0 (Baik)</span>
                <span>100 (Sedang)</span>
                <span>200 (Tidak Sehat)</span>
                <span>300 (Sangat Tidak Sehat)</span>
                <span>450+ (Berbahaya)</span>
              </div>
            </div>

            {/* Health Impact Box */}
            <div className={`p-4 rounded-xl border ${currentLevel.bgColor} ${currentLevel.borderColor} space-y-2`}>
              <div className="flex items-center gap-2">
                <Activity className="w-4 h-4 text-slate-800" />
                <span className="text-xs font-bold text-slate-900">Pengaruh Kesehatan:</span>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed">
                {currentLevel.healthImpact}
              </p>
              <div className="pt-2 border-t border-slate-200/60 text-xs font-medium text-slate-800">
                <strong>SOP Sekolah / Pelajar:</strong> {currentLevel.schoolRecommendation}
              </div>
            </div>

            {/* 5-Color Tier Legend */}
            <div className="space-y-1.5 pt-2">
              <span className="text-xs font-semibold text-slate-700 block">Tingkatan Baku Mutu ISPU Indonesia:</span>
              <div className="grid grid-cols-5 gap-1 text-[10px] text-center font-medium">
                <div className="bg-emerald-100 text-emerald-800 p-1.5 rounded">0-50<br/>Baik</div>
                <div className="bg-blue-100 text-blue-800 p-1.5 rounded">51-100<br/>Sedang</div>
                <div className="bg-amber-100 text-amber-900 p-1.5 rounded">101-200<br/>Tidak Sehat</div>
                <div className="bg-rose-100 text-rose-900 p-1.5 rounded">201-300<br/>Sangat Buruk</div>
                <div className="bg-purple-100 text-purple-900 p-1.5 rounded">&gt;300<br/>Berbahaya</div>
              </div>
            </div>
          </div>

          {/* Right Column: Student Safety Guide & Mask Comparison */}
          <div className="lg:col-span-6 space-y-6">
            {/* Mask Effectiveness Interactive Tool */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
              <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <ShieldAlert className="w-4 h-4 text-emerald-700" />
                <span>Uji Efektivitas Masker terhadap Partikel Asap PM2.5</span>
              </h3>
              <p className="text-xs text-slate-600">
                Pilih jenis masker di bawah ini untuk melihat seberapa mampu menyaring asap karhutla:
              </p>

              {/* 3 Mask Options */}
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'kain', label: 'Masker Kain Biasa', efficiency: '15 - 25%' },
                  { id: 'bedah', label: 'Masker Medis Bedah', efficiency: '50 - 65%' },
                  { id: 'n95', label: 'Masker Respirator N95/KF94', efficiency: '> 95%' },
                ].map((m) => (
                  <button
                    key={m.id}
                    onClick={() => {
                      playClickSfx();
                      setSelectedMask(m.id as 'kain' | 'bedah' | 'n95');
                    }}
                    className={`p-3 rounded-xl border text-left text-xs transition-colors ${
                      selectedMask === m.id
                        ? 'border-emerald-600 bg-emerald-50 text-emerald-950 font-bold'
                        : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                    }`}
                  >
                    <div>{m.label}</div>
                    <div className="text-[11px] font-mono text-slate-500 mt-1">Filtrasi: {m.efficiency}</div>
                  </button>
                ))}
              </div>

              {/* Result explanation */}
              <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl text-xs space-y-1">
                {selectedMask === 'kain' && (
                  <p className="text-rose-800">
                    <strong>⚠️ Tidak Dianjurkan untuk Kabut Asap:</strong> Pori-pori serat kain sangat besar (~100 mikrometer). Partikel PM2.5 (2,5 µm) lolos dengan leluasa masuk ke paru-paru. Masker kain hanya menyaring debu pasir kasar.
                  </p>
                )}
                {selectedMask === 'bedah' && (
                  <p className="text-amber-800">
                    <strong>🟡 Cukup Membantu Namun Ada Kebocoran Sisi:</strong> Masker bedah menyaring droplet air, tetapi sisi samping pipi sering longgar sehingga udara asap tetap terhirup saat bernapas cepat.
                  </p>
                )}
                {selectedMask === 'n95' && (
                  <p className="text-emerald-800">
                    <strong>✅ Rekomendasi Standar Medis Internasional:</strong> Masker N95/KF94 memiliki lapisan elektrostatis dan segel kedap di hidung dan pipi, menyaring partikel mikroskopis hingga 95% ke atas.
                  </p>
                )}
              </div>
            </div>

            {/* 4 Panduan Kesiapsiagaan Remaja Saat Asap Menyerang Sekolah */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
              <h3 className="text-sm font-bold text-slate-900">
                4 Tindakan Pelajar SMP Saat Wilayah Terpapar Asap
              </h3>

              <div className="space-y-3 text-xs text-slate-600">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-800">1. Tinggal di Dalam Ruangan (Indoor Stay):</strong> Tutup rapat ventilasi jendela dan pintu ruang kelas saat pagi dan sore hari ketika kabut asap paling pekat terkonsentrasi di permukaan tanah.
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-800">2. Minum Air Putih yang Cukup (Minimal 2 Liter):</strong> Air membantu selaput lendir tenggorokan tetap basah untuk mendorong keluar partikel iritan melalui gerakan silia saluran napas.
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-800">3. Menghindari Sumber Polusi Tambahan:</strong> Jangan membakar sampah di halaman rumah atau menyalakan obat nyamuk bakar yang menambah racun karbon di dalam ruang tertutup.
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-800">4. Segera Periksa ke UKS / Puskesmas:</strong> Jika mengalami batuk terus menerus, sesak di dada, pusing, atau mata merah berair karena iritasi akut kabut asap.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
