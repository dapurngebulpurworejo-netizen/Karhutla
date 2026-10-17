import React from 'react';
import { Flame, Play, ShieldAlert, Award } from 'lucide-react';
import { playClickSfx } from '../utils/audio';
import heroImage from '../assets/images/hero_karhutla_education_1792219410259.jpg';

interface HeroProps {
  onStartSimulation: () => void;
  onExplorePillars: () => void;
  onStartQuiz: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onStartSimulation,
  onExplorePillars,
  onStartQuiz,
}) => {
  return (
    <section className="relative overflow-hidden bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Headlines & Actions */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800">
              <span>Kurikulum IPA & IPS SMP</span>
              <span aria-hidden="true">·</span>
              <span>Kelas VII, VIII, IX</span>
              <span aria-hidden="true">·</span>
              <span>Mitigasi Kebencanaan Tropis</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Edukasi Kebakaran Hutan & Lahan Indonesia
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Pelajari ilmu sains di balik kebakaran hutan: bagaimana api merambat di kubah gambut, segitiga api pembakaran, bahaya partikulat mikroskopis PM2.5, serta cara penanggulangan oleh tim Jagawana dan Manggala Agni.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => {
                  playClickSfx();
                  onStartSimulation();
                }}
                className="px-5 py-3 text-sm font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg shadow-sm transition-all flex items-center gap-2"
              >
                <Play className="w-4 h-4 fill-current" />
                <span>Buka Lab Simulasi Api</span>
              </button>

              <button
                onClick={() => {
                  playClickSfx();
                  onExplorePillars();
                }}
                className="px-5 py-3 text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors flex items-center gap-2"
              >
                <Flame className="w-4 h-4 text-amber-600" />
                <span>Pelajari Materi Pembelajaran</span>
              </button>

              <button
                onClick={() => {
                  playClickSfx();
                  onStartQuiz();
                }}
                className="px-4 py-3 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors flex items-center gap-1.5"
              >
                <Award className="w-4 h-4 text-emerald-600" />
                <span>Uji Kompetensi & Sertifikat</span>
              </button>
            </div>
          </div>

          {/* Right Column: Hero Visual Asset */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-md aspect-video lg:aspect-[4/3] bg-slate-100">
              <img
                src={heroImage}
                alt="Menara pantau Jagawana mengawasi kawasan hutan tropis Indonesia dari asap karhutla"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent flex flex-col justify-end p-5 text-white">
                <span className="text-xs font-semibold tracking-wider uppercase text-emerald-300">Pos Pengamatan Terpadu</span>
                <p className="text-sm font-medium text-slate-100 mt-1">
                  Patroli pencegahan dan deteksi dini titik panas di kubah gambut Sumatera & Kalimantan.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Item Quantitative Adjacency Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 pt-8 border-t border-slate-200">
          <div className="space-y-1">
            <div className="text-2xl font-bold font-mono tabular-nums text-slate-900">99,2%</div>
            <p className="text-xs text-slate-500 leading-normal">
              Dipicu faktor manusia (pembukaan lahan perkebunan & kelalaian puntung rokok).
            </p>
          </div>

          <div className="space-y-1">
            <div className="text-2xl font-bold font-mono tabular-nums text-slate-900">57 Miliar Ton</div>
            <p className="text-xs text-slate-500 leading-normal">
              Cadangan karbon tersimpan di tanah gambut Indonesia yang terancam terlepas ke atmosfer.
            </p>
          </div>

          <div className="space-y-1">
            <div className="text-2xl font-bold font-mono tabular-nums text-slate-900">2,5 µm</div>
            <p className="text-xs text-slate-500 leading-normal">
              Ukuran mikroskopis PM2.5 kabut asap yang dapat menembus saluran paru-paru terdalam.
            </p>
          </div>

          <div className="space-y-1">
            <div className="text-2xl font-bold font-mono tabular-nums text-emerald-800">SOP 3R BRGM</div>
            <p className="text-xs text-slate-500 leading-normal">
              Rewetting (pembasahan sekat kanal), Revegetation (penanaman kembali), & Revitalization.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
