import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-200 py-10 text-xs text-slate-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="text-sm font-bold text-slate-900">
              Siaga Karhutla · Media Sains & Pembelajaran Interaktif SMP
            </div>
            <p className="mt-1 text-slate-500">
              Disusun untuk mendukung pembelajaran IPA (Ilmu Pengetahuan Alam) & IPS Terpadu materi Mitigasi Bencana Alam Kebakaran Hutan dan Lahan.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-slate-600 font-medium">
            <span>Kurikulum Merdeka</span>
            <span aria-hidden="true">·</span>
            <span>Segitiga Api</span>
            <span aria-hidden="true">·</span>
            <span>Kanal Gambut BRGM</span>
            <span aria-hidden="true">·</span>
            <span>Manggala Agni KLHK</span>
          </div>
        </div>

        <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} Siaga Karhutla Indonesia. Dikembangkan untuk edukasi generasi muda penjaga bumi.
          </div>
          <div>
            Mari jaga hutan kita: Hentikan pembakaran liar demi langit biru tanpa asap.
          </div>
        </div>
      </div>
    </footer>
  );
};
