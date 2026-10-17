import React, { useState } from 'react';
import { PILLARS_CONTENT } from '../data/learningContent';
import { playClickSfx } from '../utils/audio';
import { Layers, Flame, AlertCircle, ShieldCheck, TreePine, Droplets } from 'lucide-react';

export const PeatlandExplorer: React.FC = () => {
  const [activePillar, setActivePillar] = useState('penyebab');
  const [waterTableDepth, setWaterTableDepth] = useState(60); // cm below surface

  const currentData = PILLARS_CONTENT.find((p) => p.id === activePillar) || PILLARS_CONTENT[0];

  // Assessment of Peatland Fire Risk based on water table level
  // BRGM standard: water table must remain within 40cm of surface. If >40cm, peat is vulnerable.
  const isVulnerable = waterTableDepth > 40;

  return (
    <section className="py-12 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Module Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-semibold text-emerald-800 mb-1">
            Materi Inti Kurikulum SMP · Konservasi & Ekologi Tropis
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Eksplorasi Pembelajaran: 4 Pilar Karhutla Indonesia
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Pahami fenomena kebakaran hutan secara menyeluruh melalui studi kasus nyata lahan gambut Riau dan Kalimantan, ancaman kepunahan satwa, hingga peran brigade Manggala Agni.
          </p>
        </div>

        {/* Pillar Navigation Tabs */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl overflow-x-auto">
          {PILLARS_CONTENT.map((pillar) => {
            const isActive = activePillar === pillar.id;
            return (
              <button
                key={pillar.id}
                onClick={() => {
                  playClickSfx();
                  setActivePillar(pillar.id);
                }}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {pillar.id === 'penyebab' && <Flame className="w-3.5 h-3.5 text-rose-600" />}
                {pillar.id === 'gambut' && <Layers className="w-3.5 h-3.5 text-amber-700" />}
                {pillar.id === 'dampak' && <AlertCircle className="w-3.5 h-3.5 text-red-600" />}
                {pillar.id === 'mitigasi' && <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />}
                <span>{pillar.title}</span>
              </button>
            );
          })}
        </div>

        {/* Content Presentation Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Visual Asset & Interactive Inspector */}
          <div className="lg:col-span-5 space-y-4">
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-slate-100 aspect-[4/3] relative">
              {activePillar === 'penyebab' && (
                <img
                  src="/src/assets/images/hero_karhutla_education_1792219410259.jpg"
                  alt="Asap kebakaran hutan dan menara pengawas"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              )}
              {activePillar === 'gambut' && (
                <img
                  src="/src/assets/images/peatland_diagram_visual_1792219411611.jpg"
                  alt="Diagram anatomi penampang lahan gambut tropis"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              )}
              {activePillar === 'dampak' && (
                <img
                  src="/src/assets/images/wildfire_smoke_impact_1792219411921.jpg"
                  alt="Dampak kabut asap karhutla terhadap satwa liar orangutan"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              )}
              {activePillar === 'mitigasi' && (
                <img
                  src="/src/assets/images/manggala_agni_firefighters_1792219411431.jpg"
                  alt="Pasukan Manggala Agni memadamkan bara gambut"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              )}

              <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-slate-950/80 via-slate-950/40 to-transparent text-white text-xs">
                <span className="font-semibold">{currentData.tagline}</span>
              </div>
            </div>

            {/* If Peatland Tab: Interactive Peat Water Table Slider */}
            {activePillar === 'gambut' && (
              <div className="p-4 bg-amber-50/70 border border-amber-200 rounded-xl space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-amber-950">
                    Simulasi Muka Air Tanah Gambut (MAT)
                  </span>
                  <span className="text-xs font-mono font-bold text-amber-900 tabular-nums">
                    {waterTableDepth} cm di bawah tanah
                  </span>
                </div>

                <input
                  type="range"
                  min="10"
                  max="100"
                  value={waterTableDepth}
                  onChange={(e) => setWaterTableDepth(Number(e.target.value))}
                  className="w-full accent-amber-700 cursor-pointer"
                />

                <div className="flex items-center justify-between text-[11px] text-slate-500">
                  <span>10 cm (Basah Alami)</span>
                  <span>40 cm (Batas Aman BRGM)</span>
                  <span>100 cm (Kering Rawan Api)</span>
                </div>

                <div
                  className={`p-2.5 rounded-lg text-xs leading-normal font-medium ${
                    isVulnerable
                      ? 'bg-rose-100/80 text-rose-900 border border-rose-200'
                      : 'bg-emerald-100/80 text-emerald-900 border border-emerald-200'
                  }`}
                >
                  {isVulnerable ? (
                    <div>
                      <strong>⚠️ STATUS KRITIS: Gambut Sangat Kering!</strong> Muka air di bawah 40 cm. Lapisan atas kering seperti spons bensin dan siap terbakar hingga ke akar.
                    </div>
                  ) : (
                    <div>
                      <strong>✅ STATUS AMAN: Gambut Terhidrasi Sehat.</strong> Muka air mencukupi batas baku mutu lingkungan BRGM. Api tidak dapat menjalar ke bawah tanah.
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Quick Did-You-Know card for students */}
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-xs space-y-1">
              <span className="font-bold text-slate-800 block">Fakta Sains SMP:</span>
              <p className="text-slate-600 leading-relaxed">
                Di tanah mineral biasa (lempung/pasir), api hanya membakar daun kering di atas. Tetapi di tanah gambut, tanah itu sendiri terbentuk dari 100% materi tumbuhan purba, sehingga tanahnya dapat terbakar layaknya briket batu bara!
              </p>
            </div>
          </div>

          {/* Right Column: In-depth Explanatory Sections */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="text-xs font-semibold text-emerald-700 uppercase tracking-wide">
                {currentData.subtitle}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
                {currentData.title}
              </h3>
              <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                {currentData.summary}
              </p>
            </div>

            {/* Detailed Cards List */}
            <div className="space-y-4">
              {currentData.details.map((detail, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl border border-slate-200 bg-white hover:border-slate-300 transition-colors space-y-2 shadow-xs"
                >
                  <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center text-xs font-mono font-bold shrink-0">
                      {idx + 1}
                    </span>
                    <span>{detail.heading}</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-7">
                    {detail.body}
                  </p>
                  {detail.highlight && (
                    <div className="ml-7 p-2 rounded bg-amber-50 text-amber-900 text-xs font-medium border border-amber-100">
                      💡 <strong>Intisari:</strong> {detail.highlight}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
