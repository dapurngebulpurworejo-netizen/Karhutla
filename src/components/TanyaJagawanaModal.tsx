import React, { useState } from 'react';
import { GoogleGenAI } from '@google/genai';
import { CURATED_TUTOR_QA } from '../data/learningContent';
import { X, Send, Sparkles, HelpCircle, Bot, User, Loader2 } from 'lucide-react';
import { playClickSfx } from '../utils/audio';

interface Message {
  sender: 'user' | 'tutor';
  text: string;
}

interface TanyaJagawanaModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TanyaJagawanaModal: React.FC<TanyaJagawanaModalProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: 'tutor',
      text: 'Halo adik-adik siswa SMP! Saya Kak Jagawana. Ada hal seputar kebakaran hutan, lahan gambut, kabut asap PM2.5, atau mitigasi Manggala Agni yang ingin kamu tanyakan?',
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  const handleAsk = async (queryText?: string) => {
    const textToAsk = queryText || inputValue;
    if (!textToAsk.trim() || isLoading) return;

    playClickSfx();
    const userMsg: Message = { sender: 'user', text: textToAsk.trim() };
    setMessages((prev) => [...prev, userMsg]);
    setInputValue('');
    setIsLoading(true);

    // Check if query closely matches curated QA first
    const normalized = textToAsk.toLowerCase();
    const curatedMatch = CURATED_TUTOR_QA.find(
      (item) =>
        normalized.includes(item.q.toLowerCase().slice(0, 15)) ||
        item.q.toLowerCase().includes(normalized)
    );

    try {
      const apiKey =
        (typeof process !== 'undefined' && process.env?.GEMINI_API_KEY) ||
        (typeof import.meta !== 'undefined' && (import.meta as unknown as { env: Record<string, string> }).env?.VITE_GEMINI_API_KEY) ||
        '';

      if (apiKey) {
        const ai = new GoogleGenAI({ apiKey });
        const response = await ai.models.generateContent({
          model: 'gemini-3.8-flash',
          contents: textToAsk,
          config: {
            systemInstruction:
              'Anda adalah Jagawana Ramah, seorang edukator sains lingkungan yang mengajar siswa SMP (usia 12-15 tahun) di Indonesia tentang bencana alam kebakaran hutan dan lahan (Karhutla), sains segitiga api, ekologi tanah gambut, bahaya polusi kabut asap PM2.5 bagi pernapasan, serta aksi nyata pencegahan. Berikan penjelasan yang akurat secara ilmiah, mudah dipahami siswa SMP, suportif, tanpa jargon rumit yang membingungkan, maksimal 3-4 paragraf ringkas.',
          },
        });

        const reply = response.text || 'Maaf, Kak Jagawana sedang memeriksa data lapangan. Coba tanyakan lagi ya!';
        setMessages((prev) => [...prev, { sender: 'tutor', text: reply }]);
      } else if (curatedMatch) {
        setMessages((prev) => [...prev, { sender: 'tutor', text: curatedMatch.a }]);
      } else {
        // Fallback realistic response for standard questions
        setTimeout(() => {
          let customAnswer =
            'Pertanyaan bagus! Dalam ilmu IPA SMP, kebakaran hutan terjadi saat ada interaksi Segitiga Api (panas, bahan bakar, dan oksigen). Terutama di lahan gambut Indonesia, sisa tumbuhan purba yang kering sangat mudah membara di bawah tanah. Oleh karena itu, langkah terbaik adalah pencegahan: melarang pembukaan lahan dengan cara membakar serta menjaga tinggi muka air tanah tetap basah.';
          if (normalized.includes('gambut')) {
            customAnswer =
              'Lahan gambut sangat istimewa karena tersusun dari 100% materi tumbuhan membusuk yang tebal. Saat terbakar, apinya tidak hanya di permukaan tetapi merambat di bawah tanah (ground fire). Memadamkannya harus dengan menyuntikkan air bertekanan tinggi hingga ke lapisan tanah dalam!';
          } else if (normalized.includes('ispu') || normalized.includes('asap') || normalized.includes('masker')) {
            customAnswer =
              'Partikel kabut asap karhutla berukuran PM2.5 (sangat halus, 2.5 mikrometer). Masker kain biasa tidak cukup rapat, sehingga disarankan menggunakan masker standar KF94 atau N95 jika nilai ISPU sudah melampaui angka 100.';
          }
          setMessages((prev) => [...prev, { sender: 'tutor', text: customAnswer }]);
          setIsLoading(false);
        }, 500);
        return;
      }
    } catch {
      if (curatedMatch) {
        setMessages((prev) => [...prev, { sender: 'tutor', text: curatedMatch.a }]);
      } else {
        setMessages((prev) => [
          ...prev,
          {
            sender: 'tutor',
            text: 'Sains Karhutla: Kebakaran hutan paling efektif dicegah dengan tidak membakar sampah sembarangan dan menjaga kelestarian sekat kanal gambut agar tanah tetap lembap.',
          },
        ]);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fadeIn">
      <div className="bg-white rounded-2xl border border-slate-200 shadow-2xl w-full max-w-2xl flex flex-col h-[550px] overflow-hidden">
        {/* Header */}
        <div className="p-4 bg-emerald-800 text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-emerald-700/80 rounded-lg">
              <Bot className="w-5 h-5 text-emerald-200" />
            </div>
            <div>
              <h3 className="text-sm font-bold">Tanya Jagawana (Tutor Karhutla SMP)</h3>
              <p className="text-[11px] text-emerald-200">
                Konsultasi Sains & Lingkungan Bebas Tanya
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-emerald-200 hover:text-white hover:bg-emerald-700/60 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Chat Messages scroll area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-slate-50">
          {messages.map((m, idx) => (
            <div
              key={idx}
              className={`flex items-start gap-2.5 ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {m.sender === 'tutor' && (
                <div className="w-7 h-7 rounded-full bg-emerald-800 text-white flex items-center justify-center shrink-0 text-xs font-bold">
                  J
                </div>
              )}
              <div
                className={`max-w-[80%] rounded-2xl p-3.5 text-xs sm:text-sm leading-relaxed ${
                  m.sender === 'user'
                    ? 'bg-slate-900 text-white rounded-tr-xs'
                    : 'bg-white border border-slate-200 text-slate-800 rounded-tl-xs shadow-xs'
                }`}
              >
                {m.text}
              </div>
              {m.sender === 'user' && (
                <div className="w-7 h-7 rounded-full bg-slate-200 text-slate-700 flex items-center justify-center shrink-0 text-xs font-bold">
                  <User className="w-4 h-4" />
                </div>
              )}
            </div>
          ))}

          {isLoading && (
            <div className="flex items-center gap-2 text-xs text-slate-500 italic pl-10">
              <Loader2 className="w-4 h-4 animate-spin text-emerald-700" />
              <span>Kak Jagawana sedang merangkum jawaban sains...</span>
            </div>
          )}
        </div>

        {/* Quick Question Prompts */}
        <div className="p-2.5 bg-white border-t border-slate-100 flex items-center gap-2 overflow-x-auto text-[11px]">
          <span className="text-slate-400 shrink-0 font-medium pl-1">Pertanyaan Cepat:</span>
          {CURATED_TUTOR_QA.map((item, idx) => (
            <button
              key={idx}
              onClick={() => handleAsk(item.q)}
              className="px-2.5 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-md whitespace-nowrap shrink-0 transition-colors"
            >
              {item.q.slice(0, 35)}...
            </button>
          ))}
        </div>

        {/* Input Bar */}
        <div className="p-3 bg-white border-t border-slate-200 flex items-center gap-2">
          <input
            type="text"
            placeholder="Ketik pertanyaanmu seputar kebakaran hutan di sini..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleAsk();
            }}
            className="flex-1 px-3.5 py-2.5 text-xs sm:text-sm border border-slate-300 rounded-xl bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-600 transition-all"
          />
          <button
            onClick={() => handleAsk()}
            disabled={!inputValue.trim() || isLoading}
            className="px-4 py-2.5 bg-emerald-700 hover:bg-emerald-800 disabled:opacity-50 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors shadow-xs"
          >
            <span>Kirim</span>
            <Send className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
