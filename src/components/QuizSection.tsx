import React, { useState } from 'react';
import { QUIZ_QUESTIONS } from '../data/learningContent';
import { playClickSfx, playSuccessChime, playWrongBuzzer } from '../utils/audio';
import { Award, CheckCircle2, XCircle, RotateCcw, Printer, ArrowRight, BookOpen } from 'lucide-react';

export const QuizSection: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  // Certificate info
  const [studentName, setStudentName] = useState('');
  const [schoolName, setSchoolName] = useState('');

  const currentQ = QUIZ_QUESTIONS[currentIdx];
  const totalQuestions = QUIZ_QUESTIONS.length;

  const handleSelectOption = (optIdx: number) => {
    if (showFeedback) return;
    playClickSfx();
    setSelectedAnswers((prev) => ({ ...prev, [currentIdx]: optIdx }));
    setShowFeedback(true);

    if (optIdx === currentQ.correctAnswer) {
      playSuccessChime();
    } else {
      playWrongBuzzer();
    }
  };

  const handleNext = () => {
    playClickSfx();
    if (currentIdx + 1 < totalQuestions) {
      setCurrentIdx(currentIdx + 1);
      setShowFeedback(false);
    } else {
      setIsCompleted(true);
    }
  };

  const handleRestart = () => {
    playClickSfx();
    setCurrentIdx(0);
    setSelectedAnswers({});
    setShowFeedback(false);
    setIsCompleted(false);
  };

  // Compute final score
  let correctCount = 0;
  QUIZ_QUESTIONS.forEach((q, idx) => {
    if (selectedAnswers[idx] === q.correctAnswer) {
      correctCount++;
    }
  });

  const finalScorePercent = Math.round((correctCount / totalQuestions) * 100);
  let badgeTitle = 'Relawan Siaga Karhutla';
  if (finalScorePercent >= 85) badgeTitle = 'Jagawana Utama Pelajar';
  else if (finalScorePercent >= 70) badgeTitle = 'Kader Konservasi Hutan';

  const handlePrint = () => {
    window.print();
  };

  return (
    <section className="py-12 bg-white border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="text-xs font-semibold text-emerald-800 mb-1">
            Evaluasi Belajar Siswa SMP · Kurikulum Merdeka IPA
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Uji Kompetensi & Misi Jagawana Cilik
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2">
            Uji pemahamanmu tentang segitiga api, lahan gambut, kabut asap PM2.5, dan tindakan mitigasi. Dapatkan Sertifikat Digital Resmi!
          </p>
        </div>

        {!isCompleted ? (
          <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
            {/* Progress Bar */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-semibold text-slate-600">
                <span>Soal {currentIdx + 1} dari {totalQuestions}</span>
                <span className="font-mono text-emerald-700">Topik: {currentQ.curriculumTopic}</span>
              </div>
              <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-emerald-600 transition-all duration-300 rounded-full"
                  style={{ width: `${((currentIdx + 1) / totalQuestions) * 100}%` }}
                />
              </div>
            </div>

            {/* Question Text */}
            <div className="pt-2">
              <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                {currentQ.question}
              </h3>
            </div>

            {/* Options */}
            <div className="space-y-3 pt-2">
              {currentQ.options.map((opt, optIdx) => {
                const isSelected = selectedAnswers[currentIdx] === optIdx;
                const isCorrect = optIdx === currentQ.correctAnswer;

                let btnStyle = 'border-slate-200 bg-white hover:border-slate-300 text-slate-800';
                if (showFeedback) {
                  if (isCorrect) {
                    btnStyle = 'border-emerald-500 bg-emerald-50 text-emerald-950 font-semibold';
                  } else if (isSelected && !isCorrect) {
                    btnStyle = 'border-rose-400 bg-rose-50 text-rose-950';
                  } else {
                    btnStyle = 'border-slate-200 bg-white opacity-60 text-slate-500';
                  }
                }

                return (
                  <button
                    key={optIdx}
                    onClick={() => handleSelectOption(optIdx)}
                    disabled={showFeedback}
                    className={`w-full p-4 rounded-xl border text-left text-xs sm:text-sm transition-all flex items-start gap-3 ${btnStyle}`}
                  >
                    <span className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center font-bold text-xs shrink-0 font-mono">
                      {String.fromCharCode(65 + optIdx)}
                    </span>
                    <span className="flex-1 pt-0.5">{opt}</span>
                    {showFeedback && isCorrect && (
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    )}
                    {showFeedback && isSelected && !isCorrect && (
                      <XCircle className="w-5 h-5 text-rose-600 shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Scientific Explanation Reveal */}
            {showFeedback && (
              <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-2 animate-fadeIn text-xs sm:text-sm">
                <div className="flex items-center gap-1.5 font-bold text-slate-900">
                  <BookOpen className="w-4 h-4 text-emerald-700" />
                  <span>Penjelasan Ilmiah:</span>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  {currentQ.explanation}
                </p>

                <div className="pt-3 flex justify-end">
                  <button
                    onClick={handleNext}
                    className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-sm"
                  >
                    <span>{currentIdx + 1 === totalQuestions ? 'Lihat Hasil Akhir' : 'Soal Berikutnya'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          /* Completion & Certificate Mode */
          <div className="space-y-8 animate-fadeIn">
            {/* Score Summary Box */}
            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-8 text-center space-y-4">
              <div className="inline-flex p-3 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">
                <Award className="w-10 h-10" />
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                Selamat! Evaluasi Selesai
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                Kamu telah menyelesaikan 8 soal analisis sains kebakaran hutan dan mitigasi kebencanaan lingkungan.
              </p>

              <div className="grid grid-cols-3 gap-3 max-w-xs mx-auto pt-2">
                <div className="p-3 bg-white rounded-xl border border-slate-200">
                  <div className="text-2xl font-bold font-mono text-emerald-700">{correctCount}</div>
                  <div className="text-[10px] text-slate-500 uppercase font-semibold">Benar</div>
                </div>
                <div className="p-3 bg-white rounded-xl border border-slate-200">
                  <div className="text-2xl font-bold font-mono text-rose-600">{totalQuestions - correctCount}</div>
                  <div className="text-[10px] text-slate-500 uppercase font-semibold">Salah</div>
                </div>
                <div className="p-3 bg-white rounded-xl border border-slate-200">
                  <div className="text-2xl font-bold font-mono text-slate-900">{finalScorePercent}%</div>
                  <div className="text-[10px] text-slate-500 uppercase font-semibold">Skor Akhir</div>
                </div>
              </div>

              {/* Student Name Input for Certificate */}
              <div className="max-w-md mx-auto pt-4 space-y-3 text-left">
                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">
                    Nama Lengkap Siswa:
                  </label>
                  <input
                    type="text"
                    placeholder="Contoh: Rian Pratama"
                    value={studentName}
                    onChange={(e) => setStudentName(e.target.value)}
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-emerald-600"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">
                    Nama Sekolah SMP:
                  </label>
                  <input
                    type="text"
                    placeholder="Contoh: SMP Negeri 1 Palangka Raya"
                    value={schoolName}
                    onChange={(e) => setSchoolName(e.target.value)}
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-emerald-600"
                  />
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
                <button
                  onClick={handleRestart}
                  className="px-4 py-2.5 rounded-lg border border-slate-300 bg-white hover:bg-slate-100 text-slate-700 text-xs font-semibold flex items-center gap-1.5 transition-colors"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Ulangi Uji Kompetensi</span>
                </button>
                <button
                  onClick={handlePrint}
                  className="px-5 py-2.5 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-sm"
                >
                  <Printer className="w-4 h-4" />
                  <span>Cetak / Simpan Sertifikat</span>
                </button>
              </div>
            </div>

            {/* Printable Digital Certificate Card */}
            <div
              id="certificate-print-area"
              className="p-8 sm:p-12 bg-stone-50 border-4 border-double border-emerald-800 rounded-2xl shadow-sm text-center relative overflow-hidden"
            >
              {/* Certificate Header */}
              <div className="space-y-1">
                <div className="text-[11px] uppercase tracking-widest font-bold text-emerald-800">
                  Republik Indonesia · Program Edukasi Sains Kebencanaan SMP
                </div>
                <h4 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 tracking-wide mt-2">
                  SERTIFIKAT KELULUSAN
                </h4>
                <div className="text-xs text-slate-500 font-serif italic">
                  Nomor Verifikasi: SKH-SMP-{Math.floor(100000 + Math.random() * 900000)}
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 mt-6 max-w-xl mx-auto">
                Diberikan dengan penuh apresiasi kepada:
              </p>

              {/* Student Name */}
              <div className="text-2xl sm:text-3xl font-extrabold text-emerald-950 font-serif my-3 border-b-2 border-emerald-700/30 inline-block px-8 pb-1">
                {studentName.trim() || '[ Nama Lengkap Siswa ]'}
              </div>

              <div className="text-xs sm:text-sm text-slate-700 font-medium">
                {schoolName.trim() || '[ Nama Sekolah SMP ]'}
              </div>

              <p className="text-xs sm:text-sm text-slate-600 mt-5 max-w-lg mx-auto leading-relaxed">
                Telah berhasil menyelesaikan pembelajaran dan uji kompetensi materi <strong>Bencana Kebakaran Hutan & Lahan (Karhutla)</strong> dengan predikat kelulusan:
              </p>

              {/* Predicate */}
              <div className="inline-block mt-3 px-6 py-2 bg-emerald-700 text-white font-bold rounded-lg text-sm sm:text-base tracking-wide shadow-xs">
                {badgeTitle} · Nilai: {finalScorePercent}/100
              </div>

              {/* Certificate Footer */}
              <div className="grid grid-cols-2 gap-8 mt-10 pt-6 border-t border-slate-300 text-xs text-slate-500 text-left">
                <div>
                  <div className="font-semibold text-slate-700">Siaga Karhutla Indonesia</div>
                  <div>Media Sains Pembelajaran SMP</div>
                  <div className="font-mono text-[10px] text-slate-400 mt-1">
                    Tanggal: {new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-semibold text-slate-700">Komite Guru IPA & Jagawana</div>
                  <div className="italic text-slate-500">Tervalidasi Digital</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
